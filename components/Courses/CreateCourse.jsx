import Select from "react-dropdown-select";
import BeanIcon from "../common/BeanIcon";
import {useState} from "react";
import {toast} from "react-toastify";
import constants from "../../data/constants";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../firebase/initFirebase";
import courseApi from "../../apis/course";
import Swal from "sweetalert2";
import {useRouter} from "next/router";

const CreateCourse = ({subjectList, courseTypes, mentorData, onCreateSuccess}) => {


    const router = useRouter();

    const [courseName, setCourseName] = useState("");
    const [coursePrice, setCoursePrice] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [selectedSubject, setSelectedSubject] = useState();
    const [selectedCourseType, setSelectedCourseType] = useState();
    const [minQuantity, setMinQuantity] = useState("");
    const [maxQuantity, setMaxQuantity] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [courseImageURL, setCourseImageURL] = useState("");
    const [chosenImageFile, setChosenImageFile] = useState(null);

    const onCoursePriceChange = (e) => {
        const result = e.target.value.replace(/\D/g, '');
        setCoursePrice(result);
    }

    const onMinQuantityChange = (e) => {
        const result = e.target.value.replace(/\D/g, '');
        setMinQuantity(result);
    }

    const onMaxQuantityChange = (e) => {
        const result = e.target.value.replace(/\D/g, '');
        setMaxQuantity(result);
    }

    const onCourseTypeChange = (e) => {
        if (e.length > 0) {
            setSelectedCourseType(e[0]);
        } else {
            setSelectedCourseType(null);
        }
    }

    const onCoverImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type;
            const fileSize = file.size;
            const fileURL = URL.createObjectURL(file);
            if (fileType.indexOf("image") !== 0) {
                toast.error("Vui l??ng ch???n t???p tin h??nh ???nh");
                e.target.value = "";
                setCourseImageURL("");
                setChosenImageFile(null);
                return;
            }
            if (fileSize > constants.MAX_PROFILE_IMAGE_SIZE) {
                toast.error("K??ch th?????c ???nh kh??ng ???????c l???n h??n 1MB");
                e.target.value = "";
                setCourseImageURL("");
                setChosenImageFile(null);
                return;
            }
            setCourseImageURL(fileURL);
            setChosenImageFile(file);
        } else {
            setCourseImageURL("");
            setChosenImageFile(null);
            console.log("No file selected");
        }
    }


    const onSubjectChange = (e) => {
        if (e.length > 0) {
            setSelectedSubject(e[0]);
        } else {
            setSelectedSubject(null);
        }
    }

    const onStartDateChange = (e) => {
        setStartDate(e.target.value);
    }

    const onEndDateChange = (e) => {
        setEndDate(e.target.value);
    }

    const uploadImageToFirebase = (file) => {
        return new Promise((resolve, reject) => {
            const fileExtension = file.name.split(".").pop();
            const fileName = `${mentorData?.fullName}_${Date.now()}.${fileExtension}`;
            const storageRef = ref(storage, `photos/course/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done`);
                },
                (error) => {
                    console.log(error);
                    reject(error);
                },
                async () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        resolve(url);
                    });
                });
        });
    }

    const handleInputs = () => {
        const subjectId = selectedSubject?.value;
        const courseTypeId = selectedCourseType?.value;

        if (!courseName.trim()) {
            toast.error("Vui l??ng nh???p t??n kho?? h???c");
            return;
        }
        if (!coursePrice.trim()) {
            toast.error("Vui l??ng nh???p gi?? kho?? h???c");
            return;
        }
        if (coursePrice <= 0) {
            toast.error("Gi?? kho?? h???c ph???i l???n h??n 0");
            return;
        }
        if (!courseDescription.trim()) {
            toast.error("Vui l??ng nh???p m?? t??? kho?? h???c");
            return;
        }
        if (!courseTypeId) {
            toast.error("Vui l??ng ch???n h??nh th???c gi???ng d???y");
            return;
        }
        if (!subjectId) {
            toast.error("Vui l??ng ch???n m??n h???c");
            return;
        }

        if (!minQuantity.trim()) {
            toast.error("Vui l??ng nh???p s??? l?????ng h???c vi??n t???i thi???u");
            return;
        }
        if (minQuantity <= 0) {
            toast.error("S??? l?????ng h???c vi??n t???i thi???u ph???i l???n h??n 0");
            return;
        }
        if (!maxQuantity.trim()) {
            toast.error("Vui l??ng nh???p s??? l?????ng h???c vi??n t???i ??a");
            return;
        }
        if (maxQuantity <= 0) {
            toast.error("S??? l?????ng h???c vi??n t???i ??a ph???i l???n h??n 0");
            return;
        }
        if (Number(maxQuantity) < Number(minQuantity)) {
            toast.error("S??? l?????ng h???c vi??n t???i ??a ph???i l???n h??n ho???c b???ng s??? l?????ng h???c vi??n t???i thi???u");
            return;
        }
        if (!startDate.trim()) {
            toast.error("Vui l??ng nh???p ng??y b???t ?????u");
            return;
        }
        if (!endDate.trim()) {
            toast.error("Vui l??ng nh???p ng??y k???t th??c");
            return;
        }
        if (startDate >= endDate) {
            toast.error("Ng??y b???t ?????u ph???i tr?????c ng??y k???t th??c");
            return;
        }
        if (!chosenImageFile) {
            toast.error("Vui l??ng ch???n ???nh b??a");
            return;
        }

        const payload = {
            name: courseName,
            minQuantity: Number(minQuantity),
            maxQuantity: Number(maxQuantity),
            price: Number(coursePrice),
            description: courseDescription,
            type: Number(courseTypeId),
            subjectId: Number(subjectId),
            startDate: startDate,
            finishDate: endDate,
        };

        return payload;
    }

    const createCourse = (payload) => {

        console.log(payload);

        courseApi.createCourse(payload)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        title: "Th??nh c??ng",
                        text: "T???o kho?? h???c th??nh c??ng",
                        icon: "success",
                        confirmButtonText: "OK"
                    }).then(() => {
                        onCreateSuccess(res.data);
                    });
                }
            })
            .catch(err => {
                if (err.code === 404) {
                    Swal.fire({
                        title: "L???i",
                        text: "B???n ch??a c?? ch???ng ch??? cho m??n h???c n??y. Vui l??ng c???p nh???t ch???ng ch??? t???i trang h??? s?? c?? nh??n.",
                        icon: "error",
                        confirmButtonText: "OK"
                    }).then(() => {
                        router.push("/my-profile");
                    });
                }
            });
    }

    const handleCreateSubmit = (e) => {
        e.preventDefault();
        const payload = handleInputs();
        console.log(payload);
        if (chosenImageFile && payload) {
            uploadImageToFirebase(chosenImageFile)
                .then((imageUrl) => {
                createCourse({...payload, imageUrl});
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    return (
        <div className="col-xxl-7 col-xl-7 col-lg-6">
            <div className="create-course__wrapper">
                <div className="create-course__heading">
                    <i className="fa-duotone fa-file-circle-plus"></i>
                    <h2 className="m-0">T???o kho?? h???c</h2>
                </div>
                <form className="create-course__form" onSubmit={handleCreateSubmit}>
                    <div className="form-group">
                        <label>T??n kho?? h???c</label>
                        <input
                            type="text"
                            placeholder="T??n kho?? h???c"
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Gi?? ti???n</label>
                        <div className="p-relative">
                            <input
                                style={{paddingRight: "50px"}}
                                type="text"
                                placeholder="Nh???p gi?? kho?? h???c"
                                value={coursePrice}
                                onChange={onCoursePriceChange}
                            />
                            <BeanIcon customStyles={{
                                position: "absolute",
                                top: "20%",
                                right: "20px"
                            }}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>M?? t???</label>
                        <textarea
                            type="text"
                            placeholder="M?? t??? v??? kho?? h???c"
                            value={courseDescription}
                            onChange={(e) => setCourseDescription(e.target.value)}
                        />
                    </div>

                    <div className="row">
                        <div className="form-group dropdown col-md-6">
                            <label>H??nh th???c gi???ng d???y</label>
                            <Select
                                searchable={false}
                                multi={false}
                                options={courseTypes}
                                values={selectedCourseType}
                                valueField="value" labelField="text"
                                onChange={onCourseTypeChange}
                            />
                        </div>
                        <div className="form-group dropdown col-md-6">
                            <label>M??n h???c</label>
                            <Select
                                searchBy={"text"}
                                searchable={true}
                                multi={false}
                                options={subjectList}
                                values={selectedSubject}
                                valueField="value" labelField="text"
                                onChange={onSubjectChange}
                            />
                        </div>

                    </div>

                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>S??? h???c vi??n t???i thi???u</label>
                            <input
                                type="text"
                                placeholder="S??? h???c vi??n t???i thi???u"
                                value={minQuantity}
                                onChange={onMinQuantityChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>S??? h???c vi??n t???i ??a</label>
                            <input
                                type="text"
                                placeholder="S??? h???c vi??n t???i ??a"
                                value={maxQuantity}
                                onChange={onMaxQuantityChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Ng??y b???t ?????u</label>
                            <input
                                type="date"
                                min={new Date().toISOString().split("T")[0]}
                                defaultValue={new Date().toISOString().split("T")[0]}
                                value={startDate}
                                onChange={onStartDateChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Ng??y k???t th??c</label>
                            <input
                                type="date"
                                min={new Date().toISOString().split("T")[0]}
                                value={endDate}
                                onChange={onEndDateChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>???nh cover</label>
                        <input type="file"
                               accept="image/*"
                               onChange={onCoverImageChange}
                        />
                    </div>

                    {courseImageURL
                        &&
                        <div className="d-flex align-items-center justify-content-center">
                            <img style={{maxWidth: "50%", width: "fit-content"}}
                                 src={courseImageURL}
                                 alt="course-image" className="course-image"/>
                        </div>
                    }

                    <button
                        style={{fontSize: '1rem', borderRadius: '5px'}}
                        type="submit"
                        className="d-block w-100 btn-primary btn-block mt-3 py-3">T???o kho?? h???c
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateCourse;