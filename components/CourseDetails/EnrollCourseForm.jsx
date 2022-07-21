import {Modal} from "react-bootstrap";
import {useState} from "react";
import {toast} from "react-toastify";
import {useQuery} from "react-query";
import {useForm} from "react-hook-form";
import BeanIcon from "../common/BeanIcon";
import walletApi from "apis/wallet";
import axios from "axios";
import orderApi from "apis/order";

const EnrollCourseForm = ({
                              show,
                              handleClose,
                              userData,
                              certificateData,
                              courseData,
                              onChange,
                          }) => {
    const [profilePicInputURL, setProfilePicInputURL] = useState(
        userData?.imageUrl
    );
    const closeModal = () => {
        handleClose();
    };

    const {data: userBean, isLoading} = useQuery(["bean", userData], () =>
        walletApi.getUserBean(userData?.phone)
    );

    const chargeBean = async () => {
        const payload = {
            amount: courseData?.price,
            is_increase_transaction: false,
            customer_phone: userData?.phone,
        };
        try {
            await axios
                .post("https://api-wallet.unibean.net/api/v1/partner/wallet", {
                    ...payload,
                })
                .then((res) => {
                    if (res.status === 200) {
                        toast.success("Tham gia khoá học thành công", {
                            autoClose: 2000,
                        });
                        closeModal();
                    }
                })
                .catch((err) => {
                    toast.error(err.message);
                });
        } catch (error) {
        }
    };

    const handleFormSubmit = async (data) => {
        const payloadEnroll = {
            menteeId: userData?.id,
            courseId: courseData?.id,
        };
        try {
            await orderApi.createOrder(payloadEnroll).then((res) => {
                console.log(res);
                if (res.status === 200) {
                    chargeBean();
                }
            });
        } catch (error) {
            console.log(error);
            console.error(error);
            toast.error(error?.message, {
                autoClose: 2000,
            });
        }
    };

    const methods = useForm();
    const {
        reset,
        register,
        watch,
        control,
        setValue,
        getValues,
        handleSubmit,
        formState: {isSubmitting, errors},
    } = methods;

    return (
        <>
            <Modal show={show} onHide={closeModal} animation={true} centered>
                <Modal.Body>
                    <div className="profile__edit-close">
                        <button
                            onClick={closeModal}
                            type="button"
                            className="profile__edit-close-btn"
                        >
                            <i className="fa-light fa-xmark"></i>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        {/* <div className="profile__edit-input photo-edit d-flex justify-content-between align-items-center">
              <div className="col-4">
                <img
                  src={profilePicInputURL}
                  alt="avatar"
                  className="profile__edit-avatar"
                />
              </div>
              <div className="col-6">
                <h3>{userData?.fullName}</h3>
                <div className="d-flex align-items-baseline">
                  <h5 className="mr-10">Số dư: </h5>
                  <h6>
                    {" "}
                    {userBean?.point ?? 0} <BeanIcon position="right" />
                  </h6>
                </div>
              </div>
            </div> */}
                        <div className="d-flex flex-column bg-light text-white mt-20">
                            <div className="course__img w-img">
                                <img src={courseData?.imageUrl} alt=""/>
                            </div>
                            <div className="mt-10 px-3 py-2">
                                <h4 className="">{courseData?.name}</h4>
                                <p style={{
                                    fontSize: "1rem",
                                    fontWeight: 500
                                }}>{courseData?.mentor?.fullName}</p>
                                <div className="d-flex justify-content-end">
                                    <h6>
                                        {" "}
                                        {courseData?.price ?? 0} <BeanIcon position="right"/>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        {courseData?.price < userBean?.point && (
                            <div>
                                <h4>Chi phí</h4>
                                <hr/>
                                <div className="d-flex justify-content-between align-items-baseline">
                                    <p>Bean hiện có:</p>
                                    <h6>
                                        {userBean?.point ?? 0} <BeanIcon position="right"/>
                                    </h6>
                                </div>
                                <div className="d-flex justify-content-between align-items-baseline">
                                    <p></p>
                                    <h6 className="text-danger">
                                        -{courseData?.price ?? 0} <BeanIcon position="right"/>
                                    </h6>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between align-items-baseline">
                                    <p>Tổng cộng:</p>
                                    <h6 className="">
                                        {courseData?.price ?? 0} <BeanIcon position="right"/>
                                    </h6>
                                </div>
                                <div className="d-flex justify-content-between align-items-baseline">
                                    <p>Bean còn lại:</p>
                                    <h6 className="">
                                        {userBean?.point - courseData?.price || 0}{" "}
                                        <BeanIcon position="right"/>
                                    </h6>
                                </div>
                            </div>
                        )}
                        {courseData?.price < userBean?.point ? (
                            <div className="profile__edit-input d-flex justify-content-around">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="tp-btn w-49"
                                >
                                    Huỷ
                                </button>
                                <button type="submit" className="tp-btn w-49">
                                    Đăng ký
                                </button>
                            </div>
                        ) : (
                            <h6 className="text-danger d-flex justify-content-center">
                                Không đủ Bean để thực hiện giao dịch
                            </h6>
                        )}
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};
// user

export default EnrollCourseForm;
