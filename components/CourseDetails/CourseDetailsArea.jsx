import React from "react";
import CourseDetailsLeftSide from "./CourseDetailsLeftSide";
import CourseDetailsRightSide from "./CourseDetailsRightSide";

const CourseDetailsArea = ({courseData, relatedCourses, relatedCoursesLoading}) => {
    return (
        <>
            <CourseDetailsLeftSide courseData={courseData} relatedCourses={relatedCourses}
                                   relatedCoursesLoading={relatedCoursesLoading}/>
            <CourseDetailsRightSide courseData={courseData}/>
        </>
    );
};

export default CourseDetailsArea;
