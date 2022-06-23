import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import subjectApi from "apis/subject";
import { useQuery } from "react-query";
import request from "apis/utils";
import RHFEditor from "components/hook-form/RHFEditor";

const CreateCourse = () => {
  const methods = useForm();
  const {
    reset,
    register,
    watch,
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  function onSubmit(data: any) {
    // display form data on success

    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }

  const { data: subjects } = useQuery("subjectForCourse", () =>
    request.get("/subjects").then((res) => res?.data.data)
  );
  console.log(subjects);

  return (
    <>
      <section className="contact__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="contact__wrapper">
                <div className="section__title-wrapper mb-40">
                  <h2 className="section__title">
                    Get in
                    <span className="yellow-bg yellow-bg-big">
                      {" "}
                      touch
                      <img src="assets/img/shape/yellow-bg.png" alt="" />
                    </span>
                  </h2>
                  <p>
                    Have a question or just want to say hi? Wed love to hear
                    from you.
                  </p>
                </div>
                <div className="contact__form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                      <div className="form-group col-5">
                        <div className="contact__form-input">
                          <label>Tên khoá học</label>
                          <input
                            type="text"
                            required
                            placeholder="Tên khoá học"
                            {...register("name")}
                            className={`form-control ${
                              errors.firstName ? "is-invalid" : ""
                            }`}
                          />
                        </div>
                        <div className="invalid-feedback">
                          {errors.firstName?.message}
                        </div>
                      </div>
                      <div className="form-group col-5">
                        <div className="contact__form-input">
                          <label>Chọn môn học</label>
                          <select
                            {...register("subjectId")}
                            placeholder="Chọn môn học"
                            className={`form-control ${
                              errors.title ? "is-invalid" : ""
                            }`}
                          >
                            {subjects?.map((subject: any) => (
                              <option
                                key={subject.id}
                                value={subject.id}
                                selected
                              >
                                {subject.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="invalid-feedback">
                          {errors.title?.message}
                        </div>
                      </div>
                      <div className="form-group col-5">
                        <label>Hình thức giảng dạy</label>
                        <select
                          {...register("type")}
                          placeholder="Hình thức giảng dạy"
                          className={`form-control ${
                            errors.title ? "is-invalid" : ""
                          }`}
                        >
                          <option value=""></option>
                          <option value="1">Ngắn hạn</option>
                          <option value="2">Dài hạn</option>
                        </select>
                        <div className="invalid-feedback">
                          {errors.title?.message}
                        </div>
                      </div>
                      <div className="contact__form-input">
                        <label>Mô tả</label>
                        {/* <RHFEditor simple name="description" /> */}
                        <textarea required placeholder="Mô tả"></textarea>
                      </div>
                      <div className="form-group col-5">
                        <div className="contact__form-input">
                          <label>Địa chỉ</label>
                          <input
                            type="text"
                            required
                            placeholder="Địa chỉ"
                            {...register("location")}
                            className={`form-control ${
                              errors.firstName ? "is-invalid" : ""
                            }`}
                          />
                        </div>
                        <div className="invalid-feedback">
                          {errors.firstName?.message}
                        </div>
                      </div>
                      <div className="form-group col-5">
                        <div className="contact__form-input">
                          <label>Slug</label>
                          <input
                            type="text"
                            required
                            placeholder="Slug"
                            {...register("slug")}
                            className={`form-control ${
                              errors.firstName ? "is-invalid" : ""
                            }`}
                          />
                        </div>
                        <div className="invalid-feedback">
                          {errors.firstName?.message}
                        </div>
                      </div>
                      <div className="form-group col-5">
                        <label>Số học viên tối thiểu</label>
                        <select
                          {...register("minQuantity")}
                          placeholder="Số học viên tối thiểu"
                          className={`form-control ${
                            errors.title ? "is-invalid" : ""
                          }`}
                        >
                          {Array.from(
                            { length: 100 },
                            (_, index) => index + 1
                          ).map((value, index) => (
                            <option key={index} value={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                        <div className="invalid-feedback">
                          {errors.title?.message}
                        </div>
                      </div>
                      <div className="form-group col-5">
                        <label>Số học viên tối đa</label>
                        <select
                          {...register("maxQuantity")}
                          placeholder="Số học viên tối đa"
                          className={`form-control ${
                            errors.title ? "is-invalid" : ""
                          }`}
                        >
                          {Array.from(
                            { length: 100 },
                            (_, index) => index + 1
                          ).map((value, index) => (
                            <option key={index} value={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                        <div className="invalid-feedback">
                          {errors.title?.message}
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col">
                        <label>Ngày bắt đầu</label>
                        <input
                          type="date"
                          {...register("startDate")}
                          className={`form-control ${
                            errors.dob ? "is-invalid" : ""
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.dob?.message}
                        </div>
                      </div>
                      <div className="form-group col">
                        <label>Ngày kết thúc</label>
                        <input
                          type="date"
                          {...register("finishDate")}
                          className={`form-control ${
                            errors.dob ? "is-invalid" : ""
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.dob?.message}
                        </div>
                      </div>
                      <div className="form-group col-5">
                        <div className="contact__form-input">
                          <label>Giá khoá học</label>
                          <input
                            type="number"
                            min="1"
                            step="any"
                            required
                            placeholder="Giá khoá học"
                            {...register("name")}
                            className={`form-control ${
                              errors.firstName ? "is-invalid" : ""
                            }`}
                          />
                        </div>
                        <div className="invalid-feedback">
                          {errors.firstName?.message}
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        onClick={() => setValue("mentorId", 1)}
                        className="btn btn-primary mr-1"
                      >
                        Tạo khoá học
                      </button>
                      <button
                        type="button"
                        onClick={() => reset()}
                        className="btn btn-secondary"
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
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
                        <div className="contact__info-icon mr-15">
                          <svg className="map" viewBox="0 0 24 24">
                            <path
                              className="st0"
                              d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z"
                            />
                            <circle className="st0" cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <div className="contact__info-text">
                          <h4>New York Office</h4>
                          <p>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                            >
                              Maypole Crescent 70-80 Upper St Norwich NR2 1LT
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact__info-item d-flex align-items-start mb-35">
                        <div className="contact__info-icon mr-15">
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
                        </div>
                        <div className="contact__info-text">
                          <h4>Email us directly</h4>
                          <p>
                            <a href="mailto:support@educal.com">
                              support@educal.com
                            </a>
                          </p>
                          <p>
                            <a href="mailto:info@educal.com">
                              {" "}
                              info@educal.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact__info-item d-flex align-items-start mb-35">
                        <div className="contact__info-icon mr-15">
                          <svg className="call" viewBox="0 0 24 24">
                            <path
                              className="st0"
                              d="M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6  c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1  L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C21.3,15,22,15.9,22,16.9z"
                            />
                          </svg>
                        </div>
                        <div className="contact__info-text">
                          <h4>Phone</h4>
                          <p>
                            <a href="tel:+(426)-742-26-44">+(426) 742 26 44</a>
                          </p>
                          <p>
                            <a href="tel:+(224)-762-442-32">
                              +(224) 762 442 32
                            </a>
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
    </>
  );
};

export default CreateCourse;
