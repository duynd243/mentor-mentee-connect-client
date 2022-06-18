// import {useSelector} from 'react-redux';
import Link from "next/link";
import RatingStars from "../common/RatingStars";
import {Spinner} from "react-bootstrap";

const SmallCourseSidebar = ({title, courses, loading}) => {
    return (
        <>
            <div className="course__sidebar-widget-2 white-bg mb-20">
                <div className="course__sidebar-course">
                    <h3 className="course__sidebar-title">{title}</h3>
                    {loading &&
                        <div className="text-center">
                            <Spinner style={{color: "#ace0fa"}} animation="grow"/>
                        </div>
                    }
                    <ul>
                        {courses?.map((course) => {
                            return (
                                <li key={course.id}>
                                    <div className="course__sm d-flex align-items-start mb-30">
                                        <div className="course__sm-thumb mr-20">
                                            <a href={`/course-details/${course.id}`}>
                                                <img src={course?.imageUrl} alt=""/>
                                            </a>
                                        </div>
                                        <div className="course__sm-content">

                                            <h5 style={{opacity: 0.8}} title={course?.name}>
                                                <Link href={`/course-details/${course?._id}`}>
                                                    <a>{course?.name}</a>
                                                </Link>
                                            </h5>
                                            <div className="course__sm-rating">
                                                <RatingStars rating={course?.totalRating || 0}/>
                                            </div>
                                            <div className="course__sm-price">
                                                <span>${course?.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SmallCourseSidebar;
