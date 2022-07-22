import {useState} from "react";
import {toast} from "react-toastify";
import sessionApi from "../../apis/session";

const CreateSessionItem = ({courseData}) => {

    const [isRemoved, setIsRemoved] = useState(false);
    const [sessionName, setSessionName] = useState("");
    const [sessionDescription, setSessionDescription] = useState("");
    const [sessionStartTime, setSessionStartTime] = useState("");
    const [sessionEndTime, setSessionEndTime] = useState("");

    const handleCreateSession = () => {
        if (!sessionName.trim()) {
            toast.error("Vui lòng nhập tên tiết học");
            return;
        }
        if (!sessionDescription.trim()) {
            toast.error("Vui lòng nhập mô tả tiết học");
            return;
        }
        if (!sessionStartTime.trim()) {
            toast.error("Vui lòng nhập thời gian bắt đầu");
            return;
        }
        if (!sessionEndTime.trim()) {
            toast.error("Vui lòng nhập thời gian kết thúc");
            return;
        }
        if (sessionStartTime >= sessionEndTime) {
            toast.error("Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc");
            return;
        }

        const payload = {
            courseId: courseData.id,
            name: sessionName,
            description: sessionDescription,
            startTime: new Date(sessionStartTime).toISOString(),
            endTime: new Date(sessionEndTime).toISOString()
        }

        console.log(JSON.stringify(payload));
        sessionApi.createASession(payload).then(r => {
            toast.success("Thêm tiết học thành công");
            setIsRemoved(true);
        }).catch(e => {
            if (e.message) {
                toast.error(e.message);
            } else
                toast.error("Đã có lỗi xảy ra. Vui lòng thử lại");
        });
    }
    return (
        <>
            {!isRemoved &&
                <div className="session-item__wrapper">
                    <div className="d-flex align-items-center justify-content-end">
                        <i className="fa-duotone fa-trash session-item__remove"
                           onClick={() => setIsRemoved(true)}
                        ></i>
                    </div>
                    <div className="session-item__input">
                        <label>Tên tiết học</label>
                        <input
                            value={sessionName}
                            onChange={(e) => setSessionName(e.target.value)}
                            type="text"
                            placeholder="Tên tiết học"
                        />
                    </div>
                    <div className="session-item__input">
                        <label>Mô tả</label>
                        <textarea
                            value={sessionDescription}
                            onChange={(e) => setSessionDescription(e.target.value)}
                            placeholder="Mô tả nội dung tiết học"
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-6 session-item__input">
                            <label>Thời gian bắt đầu</label>
                            <input
                                type="datetime-local"
                                value={sessionStartTime}
                                onChange={(e) => setSessionStartTime(e.target.value)}
                                min={`${new Date().toISOString().split('T')[0]}T00:00`}
                            />
                        </div>
                        <div className="col-md-6 session-item__input">
                            <label>Thời gian kết thúc</label>
                            <input
                                type="datetime-local"
                                value={sessionEndTime}
                                onChange={(e) => setSessionEndTime(e.target.value)}
                                min={`${new Date().toISOString().split('T')[0]}T00:00`}
                            />
                        </div>
                    </div>

                    <button
                        style={{fontSize: '1rem', borderRadius: '5px'}}
                        type="button"
                        className="d-block w-100 btn-primary btn-block mt-3 py-3"
                        onClick={handleCreateSession}>
                        Khởi tạo
                    </button>
                </div>
            }
        </>
    );

}

export default CreateSessionItem;