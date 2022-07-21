import Link from "next/link";
import {getCourseSlug, getMentorSlug} from "../../utils/slugUtils";
import BeanIcon from "../common/BeanIcon";

const CourseCard = ({ course, courseSidebar, swiperSlide }) => {
  const wrapperClass = courseSidebar
    ? "col-xxl-6 col-xl-6 col-lg-6 col-md-6"
    : "col-xxl-4 col-xl-4 col-lg-4 col-md-6";

  const courseItem = (
    <div
      className={`course__item-2 ${
        swiperSlide && "swiper-slide"
      } transition-3 white-bg mb-30 fix`}
    >
      <div className="course__thumb-2 w-img fix course_thumb_height">
        <Link
          href={`/course-details/${getCourseSlug(course?.name, course?.id)}`}
        >
          <a>
            <img src={course.imageUrl} alt="" />
          </a>
        </Link>
      </div>
      <div className="course__content-2">
        <h3 className="course__title-2" title={course.name}>
          <Link
            href={`/course-details/${getCourseSlug(course?.name, course?.id)}`}
          >
            <a>{course.name}</a>
          </Link>
        </h3>
        <p className="course__title-2" style={{ fontSize: "0.9rem", fontWeight: 500 }}>
          <Link
            href={`/course-details/${getCourseSlug(course?.name, course?.id)}`}
          >
            {course.description}
          </Link>
        </p>
        <div className="course__top-2 d-flex align-items-center justify-content-between">
          <div
            className="course__tag-2"
            style={{ width: "60%" }}
            title={course.subject.name}
          >
            <Link
              href={`/course-details/${getCourseSlug(
                course?.name,
                course?.id
              )}`}
            >
              <a style={{ width: "fit-content" }}>{course.subject.name}</a>
            </Link>
          </div>
          <div className="course__price-2">
            <span>
              {course.price}
              <BeanIcon position="right"/>
            </span>
          </div>
        </div>

        <div className="course__bottom-2 d-flex align-items-center justify-content-between">
          <div className="course__action">
            <ul>
              <li>
                <div className="course__action-item d-flex align-items-center">
                  <div className="course__action-icon mr-5">
                    <span>
                      <svg
                        width="10"
                        height="12"
                        viewBox="0 0 10 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.00004 5.5833C6.28592 5.5833 7.32833 4.5573 7.32833 3.29165C7.32833 2.02601 6.28592 1 5.00004 1C3.71416 1 2.67175 2.02601 2.67175 3.29165C2.67175 4.5573 3.71416 5.5833 5.00004 5.5833Z"
                          stroke="#5F6160"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 11.0001C9 9.22632 7.20722 7.79175 5 7.79175C2.79278 7.79175 1 9.22632 1 11.0001"
                          stroke="#5F6160"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="course__action-content">
                    <span>{course?.currentNumberMentee || 0} / {course?.maxQuantity || 0}</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="course__action-item d-flex align-items-center">
                  <div className="course__action-icon mr-5">
                    <span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.86447 1.72209L7.74447 3.49644C7.86447 3.74343 8.18447 3.98035 8.45447 4.02572L10.0495 4.29288C11.0695 4.46426 11.3095 5.2103 10.5745 5.94625L9.33447 7.19636C9.12447 7.40807 9.00947 7.81637 9.07447 8.10873L9.42947 9.65625C9.70947 10.8812 9.06447 11.355 7.98947 10.7148L6.49447 9.82259C6.22447 9.66129 5.77947 9.66129 5.50447 9.82259L4.00947 10.7148C2.93947 11.355 2.28947 10.8761 2.56947 9.65625L2.92447 8.10873C2.98947 7.81637 2.87447 7.40807 2.66447 7.19636L1.42447 5.94625C0.694466 5.2103 0.929466 4.46426 1.94947 4.29288L3.54447 4.02572C3.80947 3.98035 4.12947 3.74343 4.24947 3.49644L5.12947 1.72209C5.60947 0.759304 6.38947 0.759304 6.86447 1.72209Z"
                          stroke="#5F6160"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="course__action-content">
                    <span>{course.totalRating}</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="course__action-item d-flex align-items-center">
                  <div className="course__action-icon mr-5">
                    <span>
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 12.2V4.49999C1 1.7 1.70588 1 4.52941 1H9.47059C12.2941 1 13 1.7 13 4.49999V11.5C13 11.598 13 11.696 12.9929 11.794"
                          stroke="#49535B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.01176 10.0999H13V12.5498C13 13.9008 11.8918 14.9998 10.5294 14.9998H3.47059C2.10824 14.9998 1 13.9008 1 12.5498V12.0948C1 10.9959 1.90353 10.0999 3.01176 10.0999Z"
                          stroke="#49535B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.17647 4.5H9.82353"
                          stroke="#49535B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.17647 6.94995H7.70589"
                          stroke="#49535B"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="course__action-content">
                    <span>{`Lessons`}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="course__tutor-2" title={course.mentor.fullName}>
            <a
              href={`/mentor-details/${getMentorSlug(
                course?.mentor.fullName,
                course?.mentor.id
              )}`}
            >
              <img src={course.mentor.imageUrl} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {swiperSlide ? (
        courseItem
      ) : (
        <div key={course.id} className={wrapperClass}>
          {courseItem}
        </div>
      )}
    </>
  );
};

export default CourseCard;