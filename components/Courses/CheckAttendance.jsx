import AttendanceSession from "./AttendanceSession";

const CheckAttendance = ({ totalMentees,sessions}) => {
    return (
        <div>
            <h3>Các tiết học trong ngày hôm nay</h3>
            {sessions.map(session => (
                <AttendanceSession totalMentees={totalMentees} key={session.id} session={session}/>
            ))}
        </div>
    );
}

export default CheckAttendance;