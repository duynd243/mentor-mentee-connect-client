import React, { useState } from "react";
// import {useDispatch, useSelector} from 'react-redux';
import Link from "next/link";
import { Modal } from "react-responsive-modal";
import ReactPlayer from "react-player";
import useAuth from "../../hooks/useAuth";
import useSticky from "../../hooks/useSticky";
import moment from "moment";
import { getMentorSlug } from "../../utils/slugUtils";
import BeanIcon from "../common/BeanIcon";
import constants from "../../data/constants";
// import { addToCart } from "../../redux/features/cartSlice";
import EnrollCourseForm from "./EnrollCourseForm";
import { useQuery } from "react-query";
import userApi from "apis/user";

const CourseDetailsRightSide = ({ courseData, totalSessions, userData }) => {
  const { user } = useAuth();
  //sidebar show
  const [show, setShow] = useState(false);
  //sidebar handleClose
  const handleClose = () => setShow(false);
  //sidebar handleShow
  const handleShow = () => setShow(true);
  // paymentInformation
  const [paymentInformation, setPaymentInformation] = useState({});
  // video popup
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const { behindHeader } = useSticky();

  // const { data: userOrderss } = useQuery("orders", () => {
  //   userApi.getUserOrder();
  // });
  // console.log(userOrderss);

  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "70%",
            padding: "unset",
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)",
          },
          closeButton: {
            background: "yellow",
          },
        }}
        center
      >
        <ReactPlayer
          url="https://youtu.be/SyEwLZs2W9k"
          width="100%"
          height="calc(100vh - 100px)"
        />
      </Modal>

      <div className="course__detail-right col-xxl-4 col-xl-4 col-lg-4">
        <div
          className={`course__sidebar course__sidebar__sticky pl-70 ${
            behindHeader ? "z-index-0" : ""
          }`}
        >
          <div className="course__shape">
            <img
              className="course-dot"
              src={"/" + "assets/img/course/course-dot.png"}
              alt=""
            />
          </div>
          <div className="course__sidebar-widget-2 white-bg mb-20">
            <div className="course__video">
              <div
                className="course__video-thumb w-img mb-25"
                style={{ backgroundImage: `url(${courseData?.imageUrl})` }}
              >
                <div className="course__video-play">
                  <button
                    onClick={onOpenModal}
                    className="play-btn popup-video"
                  >
                    <i className="fas fa-play"></i>{" "}
                  </button>
                </div>
              </div>
              <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                <div className="course__video-price">
                  <h5>
                    {courseData?.price}
                    <BeanIcon position="right"/>
                  </h5>
                </div>
                <div className="course__video-discount">
                  <span>On Sale</span>
                </div>
              </div>
              <div className="course__video-content mb-35">
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="course__video-icon">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 16 16"
                        style={{ enableBackground: "new 0 0 16 16" }}
                        xmlSpace="preserve"
                      >
                        <path
                          className="st0"
                          d="M2,6l6-4.7L14,6v7.3c0,0.7-0.6,1.3-1.3,1.3H3.3c-0.7,0-1.3-0.6-1.3-1.3V6z"
                        />
                        <polyline
                          className="st0"
                          points="6,14.7 6,8 10,8 10,14.7 "
                        />
                      </svg>
                    </div>
                    <div className="course__video-info">
                      <h5>
                        <span>Giảng viên :</span>

                        <a
                          style={{
                            color: "#566eda",
                            fontWeight: "500",
                            textDecoration: "underline",
                          }}
                          href={`/mentor-details/${getMentorSlug(
                            courseData?.mentor.fullName,
                            courseData?.mentor.id
                          )}`}
                        >
                          {courseData?.mentor.fullName}
                        </a>
                      </h5>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="course__video-icon">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 24 24"
                        style={{ enableBackground: "new 0 0 16 16" }}
                        xmlSpace="preserve"
                      >
                        <path
                          className="st0"
                          d="M4,19.5C4,18.1,5.1,17,6.5,17H20"
                        />
                        <path
                          className="st0"
                          d="M6.5,2H20v20H6.5C5.1,22,4,20.9,4,19.5v-15C4,3.1,5.1,2,6.5,2z"
                        />
                      </svg>
                    </div>
                    <div className="course__video-info">
                      <h5>
                        <span>Số tiết học :</span>
                        {totalSessions}
                      </h5>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="course__video-icon">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 16 16"
                        style={{ enableBackground: "new 0 0 16 16" }}
                        xmlSpace="preserve"
                      >
                        <circle className="st0" cx="8" cy="8" r="6.7" />
                        <polyline className="st0" points="8,4 8,8 10.7,9.3 " />
                      </svg>
                    </div>
                    <div className="course__video-info">
                      <h5>
                        <span>Cập nhật lần cuối :</span>
                        {moment(new Date(courseData?.updateDate)).format(
                          "DD/MM/YYYY"
                        )}
                      </h5>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="course__video-icon">
                      <svg>
                        <path
                          className="st0"
                          d="M13.3,14v-1.3c0-1.5-1.2-2.7-2.7-2.7H5.3c-1.5,0-2.7,1.2-2.7,2.7V14"
                        />
                        <circle className="st0" cx="8" cy="4.7" r="2.7" />
                      </svg>
                    </div>
                    <div className="course__video-info">
                      <h5>
                        <span>Đã tham gia :</span>
                        {courseData?.currentNumberMentee || 0}
                      </h5>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="course__video-icon">
                      <svg>
                        <circle className="st0" cx="8" cy="8" r="6.7" />
                        <line
                          className="st0"
                          x1="1.3"
                          y1="8"
                          x2="14.7"
                          y2="8"
                        />
                        <path
                          className="st0"
                          d="M8,1.3c1.7,1.8,2.6,4.2,2.7,6.7c-0.1,2.5-1,4.8-2.7,6.7C6.3,12.8,5.4,10.5,5.3,8C5.4,5.5,6.3,3.2,8,1.3z"
                        />
                      </svg>
                    </div>
                    <div className="course__video-info">
                      <h5>
                        <span>Language :</span>English
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="course__payment mb-35">
                <h3>
                  Thanh toán<BeanIcon customStyles={{marginLeft:"12px"}}/>
                </h3>
              </div>
              {userData?.roleId !== constants.roles.mentor.id && (
                <div className="course__enroll-btn">
                  {user?.email && !paymentInformation?.payment ? (
                    <button
                      onClick={handleShow}
                      type="button"
                      className="tp-btn w-100 text-center"
                    >
                      Enroll
                      <i className="far fa-arrow-right ms-3"></i>
                    </button>
                  ) : paymentInformation?.payment ? (
                    <button type="button" className="tp-btn w-100 text-center">
                      Already Enrolled{" "}
                    </button>
                  ) : (
                    <Link href="/login">
                      <a>
                        <button
                          type="button"
                          className="tp-btn w-100 text-center"
                        >
                          Đăng nhập để mua
                          <i className="far fa-arrow-right ms-3"></i>
                        </button>
                      </a>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <EnrollCourseForm
        show={show}
        handleClose={handleClose}
        userData={userData}
        courseData={courseData}
        // onChange={onChange}
      />
    </>
  );
};

export default CourseDetailsRightSide;
