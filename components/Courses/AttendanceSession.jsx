import moment from "moment/moment";
import {Modal} from "react-bootstrap";
import {useState} from "react";
import {useQuery} from "react-query";
import sessionApi from "../../apis/session";
import RowMenteeAttendance from "./RowMenteeAttendance";

const AttendanceSession = ({totalMentees, session}) => {

    const [isShow, setIsShow] = useState(false);
    const hoursFormat = "HH:mm";
    const handleOpenModal = () => {
        setIsShow(true);
    }
    const closeModal = () => {
        setIsShow(false);
    }

    const {data: menteesOfSession, isLoading: loading} = useQuery(
        ["menteesOfSession", session?.id, totalMentees],
        () => sessionApi.getMenteesOfSession(session?.id, {size: totalMentees}),
    )
    return (
        <>
            <div className="attendance-session__wrapper mt-30">
                <div
                    className="attendance-session__header d-flex align-items-center justify-content-between">
                    <div>
                        {session.name}
                        <span
                            style={{
                                marginLeft: "10px",
                                fontSize: "13px",
                                opacity: 0.8,
                            }}
                        >
                        {moment(session?.startTime).format(hoursFormat)} - {moment(session?.endTime).format(hoursFormat)}
                    </span>
                    </div>
                    <button className="btn-check-attendance" onClick={handleOpenModal}>Điểm danh</button>
                </div>
                <div className="attendance-session__content d-flex align-items-center">
                    <i className="fa-regular fa-file-lines mr-10"></i>
                    <span>
                    <b>Nội dung:</b> {session?.description}
                </span>
                </div>
            </div>
            <Modal centered show={isShow} animation={true} >
                <Modal.Body>
                    <div className="profile__edit-close">
                        <button onClick={closeModal} type="button" className="profile__edit-close-btn">
                            <i className="fa-light fa-xmark"></i></button>
                    </div>
                    <div className="profile__edit-content">
                        <div className="profile__edit-title">
                            <h3>Điểm danh cho {session?.name}</h3>
                        </div>
                        <div className="row-mentee__container"
                             style={
                                 {
                                     height: "fit-content",
                                     maxHeight: "70vh",
                                     overflowY: "auto",
                                     padding: "0 1rem"
                                 }
                             }
                        >
                            {!loading && menteesOfSession?.data?.length > 0 &&
                                menteesOfSession?.data?.map((menteeSession) => {
                                    return (
                                        <RowMenteeAttendance key={menteeSession?.id} session={session}
                                                             menteeSession={menteeSession}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AttendanceSession;