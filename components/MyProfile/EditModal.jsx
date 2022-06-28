import {Modal} from 'react-bootstrap';
import {useState} from "react";
import moment from "moment";
import {toast} from "react-toastify";
import userApi from "../../apis/user";
import Select from "react-dropdown-select";
import constants from "../../data/constants";

const EditModal = ({show, handleClose, userData, onChange}) => {

    const Gender = [
        {value: 1, text: 'Male'},
        {value: 2, text: 'Female'},
    ];

    const closeModal = () => {
        setEnteredName(userData?.fullName || "");
        setEnteredAddress(userData?.address || "");
        setEnteredPhone(userData?.phone || "");
        setSelectedDOB(() => {
            return (userData?.dayOfBirth) ? moment(new Date(userData?.dayOfBirth)).format("YYYY-MM-DD") : "";
        });
        setSelectedGender(userData?.gender || 1);
        handleClose();
    }

    const [enteredName, setEnteredName] = useState(userData?.fullName || "");
    const [enteredBio, setEnteredBio] = useState(userData?.bio || "");
    const [enteredPhone, setEnteredPhone] = useState(userData?.phone || "");
    const [enteredAddress, setEnteredAddress] = useState(userData?.address || "");
    const [selectedGender, setSelectedGender] = useState(userData?.gender || 1);
    const [selectedDOB, setSelectedDOB] = useState(() => {
        return (userData?.dayOfBirth) ? moment(new Date(userData?.dayOfBirth)).format("YYYY-MM-DD") : "";
    });
    const handleGenderChange = (gender) => {
        setSelectedGender(() => gender.value);
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

    const handleEnterBio = (event) => {
        setEnteredBio(event.target.value);
    };

    const handleEnterName = (event) => {
        setEnteredName(event.target.value);
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (enteredName.trim().length === 0) {
            toast.error("Name cannot be empty");
            return;
        }

        if (!selectedDOB) {
            toast.error("Please select your date of birth");
            return;
        }
        if (new Date(selectedDOB) > new Date()) {
            toast.error("Date of birth must be in the past");
            return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(enteredPhone)) {
            toast.error("Phone number must be 10 digits");
            return;
        }
        const payload = {
            fullName: enteredName?.trim(),
            bio: enteredBio?.trim(),
            gender: selectedGender,
            phone: enteredPhone?.trim(),
            address: enteredAddress?.trim(),
            dayOfBirth: selectedDOB,
        }
        userApi.updateUserInfo(payload)
            .then(res => {
                if (res.status === 200) {
                    toast.success("Update successfully", {
                        autoClose: 2000,
                    });
                    onChange(payload);
                    closeModal();
                }
            })
            .catch(err => {
                toast.error(err.message);
            });
    }
    return (
        <>
            <Modal show={show} onHide={closeModal} animation={false} centered>

                <Modal.Body>
                    <div className="profile__edit-close">
                        <button onClick={closeModal} type="button" className="profile__edit-close-btn">
                            <i className="fa-light fa-xmark"></i></button>
                    </div>

                    <form onSubmit={handleFormSubmit}>
                        <div className="profile__edit-input">
                            <p>Name</p>
                            <input value={enteredName} onChange={handleEnterName} type="text"
                                   placeholder="Your Name"/>
                        </div>
                        {
                            userData?.roleId === constants.roles.mentor.id &&
                            <div className="profile__edit-input">
                                <p>Bio</p>
                                <textarea className="p-3" value={enteredBio} onChange={handleEnterBio} type="text"
                                       placeholder="Your Bio"/>
                            </div>
                        }
                        <div style={{marginBottom: '25px'}}>
                            <p style={{
                                "fontSize": "16px",
                                "fontWeight": "500",
                                "marginBottom": "0",
                                "color": "var(--tp-text-5)"
                            }}>Gender</p>
                            <Select style={{
                                fontWeight: '500',
                                color: 'black',
                                backgroundColor: '#f5f6f8',
                                border: 'none',
                                height: '60px',
                                paddingLeft: '30px',
                                paddingRight: '30px'
                            }}
                                    placeholder="Select you gender ..."
                                    values={Gender.filter(g => g.value === userData?.gender) || []}
                                    options={Gender} valueField="value" labelField="text"
                                    onChange={(genders) => handleGenderChange(genders[0])}/>
                        </div>
                        <div className="profile__edit-input">
                            <p>Day of Birth</p>
                            <input onChange={handleDOBChange} value={selectedDOB} type="date"
                                   max={moment().format("YYYY-MM-DD")}/>
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