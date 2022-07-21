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
            {isAttended ? <button style={{backgroundColor: "rgb(57 193 63)"}} className="btn-check-attendance">Đã điểm
                    danh</button> :
                <button className="btn-check-attendance" onClick={handleCheckAttendance}>Điểm danh</button>
            }


        </div>
    )
}

export default RowMenteeAttendance;