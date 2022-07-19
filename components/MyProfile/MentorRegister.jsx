import { Modal } from "react-bootstrap";
import { useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import userApi from "../../apis/user";
import Select from "react-dropdown-select";
import constants from "../../data/constants";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase/initFirebase";
import { useQuery } from "react-query";
import subjectApi from "apis/subject";
import { set, useForm } from "react-hook-form";
import certificateApi from "apis/certificates";
import { useRouter } from "next/router";

const MentorRegister = ({
  show,
  handleClose,
  userData,
  certificateData,
  onChange,
}) => {
  const closeModal = () => {
    handleClose();
  };

  const handleFormSubmit = async (data) => {
    try {
      if (certificateData?.length < 3) {
        toast.error(
          "Số tín chỉ phải lớn hơn hoặc bằng 3 dể đăng ký làm mentor"
        );
        return;
      }
      const payload = {
        isPending: true,
      };
      await userApi
        .updateUserInfo(payload)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Đăng ký làm mentor thành công", {
              autoClose: 2000,
            });
            closeModal();
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } catch (error) {
      console.error(error);
    }
    closeModal();
  };

  const methods = useForm({
    defaultValues: {
      name: "",
      imageUrl: "",
      subjectId: 0,
    },
  });
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

  return (
    <>
      <Modal show={show} onHide={closeModal} animation={false} centered>
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
            <h4 className="d-flex justify-content-center">
              Bạn có muốn đăng ký làm mentor?
            </h4>
            <p className="d-flex justify-content-center">
              Điều kiện: Số lượng chứng chỉ phải lớn hơn hoặc bằng 3
            </p>
            <div className="profile__edit-input d-flex justify-content-around">
              <button
                type="button"
                onClick={closeModal}
                className="tp-btn w-49"
              >
                Huỷ
              </button>
              <button
                type="submit"
                className="tp-btn w-49"
                onClick={() => setValue("isPending", true)}
              >
                Đăng ký
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
// user

export default MentorRegister;
