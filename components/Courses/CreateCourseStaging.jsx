import Select from "react-dropdown-select";
import BeanIcon from "../common/BeanIcon";
import {useState} from "react";
import {toast} from "react-toastify";
import constants from "../../data/constants";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../firebase/initFirebase";
import courseApi from "../../apis/course";

const CreateCourseStaging = ({subjectList, courseTypes, mentorData}) => {
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

    const handleInputs = (imageUrl) => {
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
            imageUrl: imageUrl,
            type: Number(courseTypeId),
            subjectId: Number(subjectId),
            startDate: startDate,
            finishDate: endDate,
        }

        console.log(payload);

        courseApi.createCourse(payload)
            .then(res => {
                if (res.status === 200) {
                    toast.success("Update successfully", {
                        autoClose: 2000,
                    });
                    // onChange(payload);
                    // closeModal();
                }
            })
            .catch(err => {
                toast.error(err.message);
            });
    }

    const handleCreateSubmit = (e) => {
        e.preventDefault();
        if (chosenImageFile) {
            uploadImageToFirebase(chosenImageFile).then((imageUrl) => {
                handleInputs(imageUrl);
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    return (
        <section className="contact__area pt-115 pb-120">
            <div className="container">
                <div className="row">
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

                                <button type="submit" className="d-block w-100 btn-primary btn-block mt-3 py-3">Tạo khoá
                                    học
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1">
                        <div className="contact__info white-bg p-relative z-index-1">
                            <div className="contact__shape">
                                <img
                                    className="contact-shape-1"
                                    src="assets/img/contact/contact-shape-1.png"
                                    alt=""
                                />
                                <img
                                    className="contact-shape-2"
                                    src="assets/img/contact/contact-shape-2.png"
                                    alt=""
                                />
                                <img
                                    className="contact-shape-3"
                                    src="assets/img/contact/contact-shape-3.png"
                                    alt=""
                                />
                            </div>
                            <div className="contact__info-inner white-bg">
                                <ul>
                                    <li>
                                        <div className="contact__info-item d-flex align-items-start mb-35">
                                            {/* <div className="contact__info-icon mr-15">
                          <svg className="map" viewBox="0 0 24 24">
                            <path
                              className="st0"
                              d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z"
                            />
                            <circle className="st0" cx="12" cy="10" r="3" />
                          </svg>
                        </div> */}
                                            <div className="contact__info-text">
                                                <h4>Create courses that suit you</h4>
                                                <p>
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                                                    >
                                                        Publish the course you want, however you want, and
                                                        always have control over your own content.
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact__info-item d-flex align-items-start mb-35">
                                            {/* <div className="contact__info-icon mr-15">
                          <svg className="mail" viewBox="0 0 24 24">
                            <path
                              className="st0"
                              d="M4,4h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6C2,4.9,2.9,4,4,4z"
                            />
                            <polyline
                              className="st0"
                              points="22,6 12,13 2,6 "
                            />
                          </svg>
                        </div> */}
                                            <div className="contact__info-text">
                                                <h4>Inspire attendees</h4>
                                                <p>
                                                    Teach what you know and help participants explore
                                                    their interests, learn new skills and advance their
                                                    careers.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact__info-item d-flex align-items-start mb-35">
                                            {/* <div className="contact__info-icon mr-15">
                          <svg className="call" viewBox="0 0 24 24">
                            <path
                              className="st0"
                              d="M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6  c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1  L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C21.3,15,22,15.9,22,16.9z"
                            />
                          </svg>
                        </div> */}
                                            <div className="contact__info-text">
                                                <h4>Get rewarded</h4>
                                                <p>
                                                    Expand your professional network and expertise, and
                                                    earn money for every paid signup.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="contact__social pl-30">
                                    <h4>Follow Us</h4>
                                    <ul>
                                        <li>
                                            <a href="#" className="fb">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="tw">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="pin">
                                                <i className="fa-brands fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateCourseStaging;