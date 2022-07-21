import CreateSessionItem from "./CreateSessionItem";
import {useState} from "react";

const CreateSession = ({courseData}) => {
    const [sessionItems, setSessionItems] = useState([
        <CreateSessionItem key={0} courseData={courseData}/>
    ]);

    const handleAddSession = () => {
        setSessionItems([...sessionItems, <CreateSessionItem key={sessionItems.length} courseData={courseData}/>]);
    }

    return (
        <div className="col-xxl-7 col-xl-7 col-lg-6">
            <div className="create-course__wrapper">
                <div className="create-course__heading">
                    <i className="fa-solid fa-screen-users"></i>
                    <h2 className="m-0">Thêm bài học</h2>
                </div>

                <form className="sessions">
                    <div className="d-flex justify-content-end align-items-center">
                        <button onClick={handleAddSession} type="button"
                                className="d-flex align-items-center gap-2 btn btn-primary">
                            <i className="fa-solid fa-plus"></i>Thêm
                        </button>
                    </div>
                    {sessionItems}
                </form>
            </div>
        </div>
    )
}

export default CreateSession;