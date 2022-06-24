import React from "react";
import CourseDetailsLeftSide from "./CourseDetailsLeftSide";
import CourseDetailsRightSide from "./CourseDetailsRightSide";
import FixedBottomEnroll from "./FixedBottomEnroll";

const CourseDetailsArea = ({courseData, courseSessions, relatedCourses, relatedCoursesLoading}) => {
    return (
        <>
            <CourseDetailsLeftSide courseData={courseData} courseSessions={courseSessions} relatedCourses={relatedCourses}
                                   relatedCoursesLoading={relatedCoursesLoading}/>
            <CourseDetailsRightSide courseData={courseData} totalSessions={courseSessions?.length}/>

            <FixedBottomEnroll courseData={courseData} totalSessions={courseSessions?.length}/>
        </>
    );
};

export default CourseDetailsArea;
