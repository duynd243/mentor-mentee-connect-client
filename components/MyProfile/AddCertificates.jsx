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

const AddCertificates = ({ show, handleClose, onChange }) => {
  const router = useRouter();
  const Gender = [
    { value: 1, text: "Male" },
    { value: 2, text: "Female" },
  ];

  const closeModal = () => {
    setProfilePicInputURL("");
    setEnteredName("");
    handleClose();
  };
  const [profilePicInputURL, setProfilePicInputURL] = useState(
    "assets/img/favicon.png"
  );
  const [enteredName, setEnteredName] = useState("");

  const handleEnterName = (event) => {
    setEnteredName(event.target.value);
    setValue("name", event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      const fileSize = file.size;
      const fileURL = URL.createObjectURL(file);
      if (fileType.indexOf("image") !== 0) {
        toast.error("Please select an image file");
        return;
      }
      if (fileSize > constants.MAX_PROFILE_IMAGE_SIZE) {
        toast.error("Image size should be less than 1MB");
        return;
      }
      setProfilePicInputURL(fileURL); // For showing preview of image
      uploadImageToFirebase(file)
        .then((url) => {
          handleInputData(url);
          setValue("imageUrl", url);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error uploading image");
        });
    } else {
      console.log("No file selected");
    }
  };

  const uploadImageToFirebase = (file) => {
    return new Promise((resolve, reject) => {
      const fileExtension = file.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExtension}`;
      const storageRef = ref(storage, `photos/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
        }
      );
    });
  };

  const handleInputData = (imageUrl) => {
    if (enteredName.trim().length === 0) {
      toast.error("Name cannot be empty");
      return;
    }
  };

  const handleFormSubmit = async (data) => {
    try {
      await certificateApi
        .addCertificates(data)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Tải lên chứng chỉ thành công", {
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
    // router.push("#nav-certificates");
  };

  // Lần đầu load để lấy totalItems
  const { data: subjectFirstLoad } = useQuery("subjectFirstLoad", () =>
    subjectApi.getAllSubjects({ size: 1 })
  );

  const { data: subjects, isLoading: subjectsLoading } = useQuery(
    ["subjects", subjectFirstLoad?.metadata?.total],
    () => subjectApi.getAllSubjects({ size: subjectFirstLoad?.metadata?.total })
  );

  let subjectList = subjects?.data?.map((subject) => ({
    value: subject.id,
    text: subject.name,
  }));

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
            <div className="profile__edit-input photo-edit">
              <p>Chứng chỉ</p>
              <div className="row mt-3">
                <div className="col-4">
                  <img
                    src={profilePicInputURL}
                    alt="certificate"
                    className="profile__edit-avatar"
                  />
                </div>
                <div className="col-8">
                  <div className="profile__edit-avatar-upload">
                    <label htmlFor="profilePicInput">
                      <div className="upload-btn">
                        <i className="fa-solid fa-file-image"></i>
                        Tải lên hình ảnh chứng chỉ
                      </div>
                    </label>
                    <input
                      type="file"
                      id="profilePicInput"
                      name="avatar"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="notice">
                    Upload file must be in image format and less than 1MB.
                  </div>
                </div>
              </div>
            </div>
            <div className="profile__edit-input">
              <p>Tên chứng chỉ</p>
              <input
                value={enteredName}
                onChange={handleEnterName}
                type="text"
                placeholder="Ví dụ: Thạc sĩ công nghệ"
              />
            </div>
            {/* <div style={{ marginBottom: "25px" }}>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "0",
                  color: "var(--tp-text-5)",
                }}
              >
                Gender
              </p>
              <Select
                style={{
                  fontWeight: "500",
                  color: "black",
                  backgroundColor: "#f5f6f8",
                  border: "none",
                  height: "60px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
                searchable={false}
                placeholder="Select you gender ..."
                values={
                  Gender.filter((g) => g.value === userData?.gender) || []
                }
                options={Gender}
                valueField="value"
                labelField="text"
                onChange={(genders) => handleGenderChange(genders[0])}
              />
            </div> */}
            <div className="mb-4">
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "0",
                  color: "var(--tp-text-5)",
                }}
              >
                Môn học
              </p>
              <Select
                style={{
                  fontWeight: "500",
                  color: "black",
                  backgroundColor: "#f5f6f8",
                  border: "none",
                  height: "60px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
                required={true}
                searchBy={"text"}
                searchable={true}
                options={subjectList}
                valueField="value"
                labelField="text"
                {...register("subjectId")}
                onChange={(e) => {
                  console.log(e);
                  setValue("subjectId", e[0]?.value);
                }}
              />
            </div>
            <div className="profile__edit-input">
              <button type="submit" className="tp-btn w-100">
                Tải lên
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
// user

export default AddCertificates;
