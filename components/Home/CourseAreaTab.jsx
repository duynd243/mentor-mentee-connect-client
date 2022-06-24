import {Spinner} from "react-bootstrap";
import CourseCard from "../Courses/CourseCard";

const CourseAreaTab = ({courses, loading}) => {
    return <div className="course__tab-wrapper">
        <div className="row">
            {loading ? (
                <div className="text-center">
                    <Spinner style={{color: "#ace0fa"}} animation="grow"/>
                </div>
            ) : (
                courses?.data.map((course) => {
                    return (
                        <CourseCard key={course.id} course={course}/>
                    );
                })
            )}
        </div>
    </div>
        ;
}

export default CourseAreaTab;