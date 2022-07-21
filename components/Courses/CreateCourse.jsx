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
                toast.error("Vui lòng chọn tệp tin hình ảnh");
                e.target.value = "";
                setCourseImageURL("");
                setChosenImageFile(null);
                return;
            }
            if (fileSize > constants.MAX_PROFILE_IMAGE_SIZE) {
                toast.error("Kích thước ảnh không được lớn hơn 1MB");
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
            toast.error("Vui lòng nhập tên khoá học");
            return;
        }
        if (!coursePrice.trim()) {
            toast.error("Vui lòng nhập giá khoá học");
            return;
        }
        if (coursePrice <= 0) {
            toast.error("Giá khoá học phải lớn hơn 0");
            return;
        }
        if (!courseDescription.trim()) {
            toast.error("Vui lòng nhập mô tả khoá học");
            return;
        }
        if (!courseTypeId) {
            toast.error("Vui lòng chọn hình thức giảng dạy");
            return;
        }
        if (!subjectId) {
            toast.error("Vui lòng chọn môn học");
            return;
        }

        if (!minQuantity.trim()) {
            toast.error("Vui lòng nhập số lượng học viên tối thiểu");
            return;
        }
        if (minQuantity <= 0) {
            toast.error("Số lượng học viên tối thiểu phải lớn hơn 0");
            return;
        }
        if (!maxQuantity.trim()) {
            toast.error("Vui lòng nhập số lượng học viên tối đa");
            return;
        }
        if (maxQuantity <= 0) {
            toast.error("Số lượng học viên tối đa phải lớn hơn 0");
            return;
        }
        if (Number(maxQuantity) < Number(minQuantity)) {
            toast.error("Số lượng học viên tối đa phải lớn hơn hoặc bằng số lượng học viên tối thiểu");
            return;
        }
        if (!startDate.trim()) {
            toast.error("Vui lòng nhập ngày bắt đầu");
            return;
        }
        if (!endDate.trim()) {
            toast.error("Vui lòng nhập ngày kết thúc");
            return;
        }
        if (startDate >= endDate) {
            toast.error("Ngày bắt đầu phải trước ngày kết thúc");
            return;
        }
        if (!chosenImageFile) {
            toast.error("Vui lòng chọn ảnh bìa");
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
                        title: "Thành công",
                        text: "Tạo khoá học thành công",
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
                        title: "Lỗi",
                        text: "Bạn chưa có chứng chỉ cho môn học này. Vui lòng cập nhật chứng chỉ tại trang hồ sơ cá nhân.",
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
        if (chosenImageFile) {
            uploadImageToFirebase(chosenImageFile).then((imageUrl) => {
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
                    <h2 className="m-0">Tạo khoá học</h2>
                </div>
                <form className="create-course__form" onSubmit={handleCreateSubmit}>
                    <div className="form-group">
                        <label>Tên khoá học</label>
                        <input
                            type="text"
                            placeholder="Tên khoá học"
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Giá tiền</label>
                        <div className="p-relative">
                            <input
                                style={{paddingRight: "50px"}}
                                type="text"
                                placeholder="Nhập giá khoá học"
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
                        <label>Mô tả</label>
                        <textarea
                            type="text"
                            placeholder="Mô tả về khoá học"
                            value={courseDescription}
                            onChange={(e) => setCourseDescription(e.target.value)}
                        />
                    </div>

                    <div className="row">
                        <div className="form-group dropdown col-md-6">
                            <label>Hình thức giảng dạy</label>
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
                            <label>Môn học</label>
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
                            <label>Số học viên tối thiểu</label>
                            <input
                                type="text"
                                placeholder="Số học viên tối thiểu"
                                value={minQuantity}
                                onChange={onMinQuantityChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Số học viên tối đa</label>
                            <input
                                type="text"
                                placeholder="Số học viên tối đa"
                                value={maxQuantity}
                                onChange={onMaxQuantityChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Ngày bắt đầu</label>
                            <input
                                type="date"
                                min={new Date().toISOString().split("T")[0]}
                                defaultValue={new Date().toISOString().split("T")[0]}
                                value={startDate}
                                onChange={onStartDateChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Ngày kết thúc</label>
                            <input
                                type="date"
                                min={new Date().toISOString().split("T")[0]}
                                value={endDate}
                                onChange={onEndDateChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Ảnh cover</label>
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
                        className="d-block w-100 btn-primary btn-block mt-3 py-3">Tạo khoá học
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateCourse;