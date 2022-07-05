import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth";
import BeanIcon from "../common/BeanIcon";
import {useDetectClickOutside} from "react-detect-click-outside";
import constants from "../../data/constants";
import {getMentorSlug} from "../../utils/slugUtils";

const ProfileDropdown = ({userData, isInViewPort}) => {

    const {logout} = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const closeDropdown = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        if (!isInViewPort) {
            closeDropdown();
        }
    }, [isInViewPort]);

    const ref = useDetectClickOutside({onTriggered: closeDropdown});

    return <div className="profile__wrapper" ref={ref}>
        <div className="profile__photo" onClick={() => setIsOpen((prevState) => !prevState)}>
            <span>Hi, {userData?.fullName.split(' ')[0]}</span>
            <img className="rounded-circle" src={userData?.imageUrl}/>
        </div>
        <div className="profile__dropdown" style={{display: `${isOpen ? 'block' : 'none'}`}}>
            <div className="user_info d-flex align-items-center justify-content-center gap-3">
                <div className="user_profile_pic d-flex align-items-center justify-content-center">
                    <img className="rounded-circle" src={userData?.imageUrl}/>
                </div>
                <div className="user_name_email">
                    <div className="user_name">{userData?.fullName}</div>
                    <div className="user_email">{userData?.email}</div>
                </div>
            </div>
            <div className="separator"></div>
            <a className="link" href="/my-profile" onClick={closeDropdown}>
                <i className="fa-solid fa-user"></i>
                Profile</a>
            <a className="link"
               href={userData?.roleId === constants.roles.mentor.id
                   ?
                   `/mentor-details/${getMentorSlug(userData?.fullName, userData?.id)}`
                   :
                   `my-course`}>
                <i className="fa-solid fa-book"></i>
                My Courses</a>
            <a className="link balance">
                <div className="balance_label">
                    <i className="fa-solid fa-coins"></i>
                    <span>Balance</span>
                </div>
                <div className="balance_value">
                    200
                    <BeanIcon position="right" fillColor="rgb(90, 88, 88)"/>
                </div>
            </a>
            <div className="separator"></div>
            <a className="link" onClick={() => {
                closeDropdown();
                logout();
            }}>
                <i className="fa-solid fa-right-from-bracket"></i>
                Logout</a>
        </div>
    </div>
}

export default ProfileDropdown;