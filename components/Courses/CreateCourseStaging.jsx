import Select from "react-dropdown-select";
import BeanIcon from "../common/BeanIcon";

const CreateCourseStaging = ({subjectList, courseTypes}) => {

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
                            <form className="create-course__form">
                                <div className="form-group">
                                    <label>Tên khoá học</label>
                                    <input type="text" placeholder="Tên khoá học"/>
                                </div>

                                <div className="form-group">
                                    <label>Giá tiền</label>
                                    <div className="p-relative">
                                        <input style={{paddingRight: "50px"}} type="text"
                                               placeholder="Nhập giá khoá học"/>
                                        <BeanIcon customStyles={{
                                            position: "absolute",
                                            top: "20%",
                                            right: "20px"
                                        }}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Mô tả</label>
                                    <textarea type="text" placeholder="Mô tả về khoá học"/>
                                </div>

                                <div className="row">
                                    <div className="form-group dropdown col-md-6">
                                        <label>Hình thức giảng dạy</label>
                                        <Select
                                            required={true}
                                            searchable={false}
                                            multi={false}
                                            options={courseTypes}
                                            valueField="value" labelField="text"
                                            onChange={(e) => console.log(e)}
                                        />
                                    </div>
                                    <div className="form-group dropdown col-md-6">
                                        <label>Môn học</label>
                                        <Select
                                            required={true}
                                            searchBy={"text"}
                                            searchable={true}
                                            multi={false}
                                            options={subjectList}
                                            valueField="value" labelField="text"
                                            onChange={(e) => console.log(e)}
                                        />
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Số học viên tối thiểu</label>
                                        <input type="number" placeholder="" min={1} required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Số học viên tối đa</label>
                                        <input type="number" placeholder="" min={1} required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Ngày bắt đầu</label>
                                        <input type="date" placeholder="" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Ngày kết thúc</label>
                                        <input type="date" placeholder="" required/>
                                    </div>
                                </div>
                                <button className="btn btn-primary mt-3">Tạo khoá học</button>
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