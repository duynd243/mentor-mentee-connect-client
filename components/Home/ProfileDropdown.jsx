import {useState} from "react";
import useAuth from "../../hooks/useAuth";

const ProfileDropdown = ({userData}) => {

    const {logout} = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const closeDropdown = () => {
        setIsOpen(false);
    }

    return <div className="profile__wrapper">
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
            <a className="link" onClick={closeDropdown}>
                <i className="fa-solid fa-book"></i>
                My Courses</a>
            <a className="link" onClick={closeDropdown}>
                <i className="fa-solid fa-coins"></i>
                Balance</a>
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