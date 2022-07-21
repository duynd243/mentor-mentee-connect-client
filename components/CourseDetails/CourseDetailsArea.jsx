import React from "react";
import CourseDetailsLeftSide from "./CourseDetailsLeftSide";
import CourseDetailsRightSide from "./CourseDetailsRightSide";
import FixedBottomEnroll from "./FixedBottomEnroll";

const CourseDetailsArea = ({userData, courseData, courseSessions, relatedCourses, relatedCoursesLoading}) => {
    return (
        <>
            <CourseDetailsLeftSide userData={userData} courseData={courseData} courseSessions={courseSessions} relatedCourses={relatedCourses}
                                   relatedCoursesLoading={relatedCoursesLoading}/>
            <CourseDetailsRightSide userData={userData} courseData={courseData} totalSessions={courseSessions?.length}/>

            <FixedBottomEnroll userData={userData} courseData={courseData} totalSessions={courseSessions?.length}/>
        </>
    );
};

export default CourseDetailsArea;
