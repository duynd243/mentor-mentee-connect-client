import sessionApi from "../../apis/session";
import {useState} from "react";
import {toast} from "react-toastify";

const RowMenteeAttendance = ({session, menteeSession}) => {

    const [isAttended, setIsAttended] = useState(() => {
        if (menteeSession?.isAttended !== 0) {
            return true;
        }
        return false;
    });
    const handleCheckAttendance = () => {
        const payload = [
            {
                id: menteeSession?.id,
                isAttended: 1
            }
        ];
        console.log(payload);
        try {
            sessionApi.checkAttendance(payload)
                .then(r => {
                    if (r.status === 200) {
                        toast.success("Điểm danh thành công");
                        setIsAttended(true);
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }

    let menteeTest = {
        "id": 0,
        "menteeId": 0,
        "mentee": {
            "id": 0,
            "fullName": "Nguyen Dinh Duy",
            "gender": 0,
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/mentor-mentee-connecting.appspot.com/o/photos%2FDuy%20Nguy%E1%BB%85n_1657117440649.jpeg?alt=media&token=9153a22d-0bbc-4b2f-967c-877df82d0774",
            "phone": "string",
            "email": "duy@gmail.com",
            "address": "string",
            "dayOfBirth": "2022-07-22T21:32:38.724Z",
            "bio": "string",
            "status": 0,
            "badge": 0,
            "roleId": 0,
            "isPending": true,
            "isSubscribed": true
        },
        "sessionId": 0,
        "isAttended": 1,
        "reportId": 0,
        "rating": 0,
    }
    console.log(menteeTest)
    return (
        <div
            className="mt-20 py-2 mentee-row__wrapper d-flex flex-column flex-sm-row gap-3 gap-sm-0 align-items-sm-center justify-content-between">
            <div className="mentee-row__info d-flex align-items-start gap-3">
                <div className="mentee-row__info-avatar">
                    <img className="rounded-circle" width="55px" height="55px" src={menteeSession?.mentee?.imageUrl}
                         alt=""/>
                </div>
                <div className="mentee-row__info-name">
                    <div style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                    }}>{menteeSession?.mentee?.fullName}</div>
                    <div>{menteeSession?.mentee?.email}</div>
                </div>
            </div>
            {isAttended ?
                <button className="btn-check-attendance" onClick={handleCheckAttendance}>Điểm danh</button> :
                <button style={{backgroundColor: "rgb(57 193 63)"}} className="btn-check-attendance">Đã điểm
                    danh</button>}

        </div>
    )
}

export default RowMenteeAttendance;