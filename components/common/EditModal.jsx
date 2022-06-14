import {Modal} from 'react-bootstrap';
import {MenuItem, Select} from "@mui/material";
import {useState} from "react";
import moment from "moment";
import {toast} from "react-toastify";
import userApi from "../../apis/user";

const EditModal = ({show, handleClose, userData}) => {

    const Gender = {
        1: "Male",
        2: "Female"
    }

    const [enteredName, setEnteredName] = useState(userData?.fullName || "");
    const [enteredPhone, setEnteredPhone] = useState(userData?.phone || "");
    const [enteredAddress, setEnteredAddress] = useState(userData?.address || "");
    const [selectedGender, setSelectedGender] = useState(userData?.gender || 1);
    const [selectedDOB, setSelectedDOB] = useState(moment(new Date(userData?.dayOfBirth)).format("YYYY-MM-DD") || "");
    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };

    const handleDOBChange = (event) => {
        setSelectedDOB(event.target.value);
    };

    const handleEnterAddress = (event) => {
        setEnteredAddress(event.target.value);
    };

    const handleEnterPhone = (event) => {
        setEnteredPhone(event.target.value);
    };

    const handleEnterName = (event) => {
        setEnteredName(event.target.value);
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (new Date(selectedDOB) > new Date()) {
            toast.error("Date of birth must be in the past");
            return;
        }
        const payload = {
            fullName: enteredName,
            gender: selectedGender,
            phone: enteredPhone,
            address: enteredAddress,
            dayOfBirth: selectedDOB,
        }

        console.log(payload)
        userApi.updateUserInfo(payload)
            .then(res => {
                if (res.status === 200) {
                    toast.success("Update successfully", {
                        autoClose: 2000,
                    });
                    handleClose();
                }
            })
            .catch(err => {
                toast.error(err.message);
            });
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false} centered>

                <Modal.Body>
                    <div className="profile__edit-close">
                        <button onClick={handleClose} type="button" className="profile__edit-close-btn">
                            <i className="fa-light fa-xmark"></i></button>
                    </div>

                    <form onSubmit={handleFormSubmit}>
                        <div className="profile__edit-input">
                            <p>Name</p>
                            <input value={enteredName} onChange={handleEnterName} type="text"
                                   placeholder="Your Name"/>
                        </div>
                        <div className="profile__edit-input">
                            <p>Gender</p>
                            <Select
                                style={{width: "100%", backgroundColor: "#F5F6F8"}}
                                value={selectedGender}
                                onChange={handleGenderChange}
                                displayEmpty
                                inputProps={{"aria-label": "Without label"}}
                            >
                                <MenuItem value={1}>{Gender["1"]}</MenuItem>
                                <MenuItem value={2}>{Gender["2"]}</MenuItem>
                            </Select>
                        </div>
                        <div className="profile__edit-input">
                            <p>Day of Birth</p>
                            <input onChange={handleDOBChange} value={selectedDOB} type="date"/>
                        </div>
                        <div className="profile__edit-input">
                            <p>Phone</p>
                            <input value={enteredPhone} onChange={handleEnterPhone} type="text"
                                   placeholder="Your Phone"/>
                        </div>
                        <div className="profile__edit-input">
                            <p>Address</p>
                            <input value={enteredAddress} onChange={handleEnterAddress} type="text"
                                   placeholder="Your Address"/>
                        </div>
                        <div className="profile__edit-input">
                            <button type="submit" className="tp-btn w-100">Update</button>
                        </div>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
}
// user


export default EditModal;