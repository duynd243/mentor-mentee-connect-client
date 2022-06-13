import React from 'react';
import CourseDetailsLeftSide from './CourseDetailsLeftSide';
import CourseDetailsRightSide from './CourseDetailsRightSide';

const CourseDetailsArea = ({courseData}) => {
   return (
      <>
         <section className="course__area pt-115 pb-25">
            <div className="container">
               <div className="row">
                  <CourseDetailsLeftSide courseData={courseData} />
                  <CourseDetailsRightSide courseData={courseData}/>
               </div>
            </div>
         </section>
      </>
   );
};

export default CourseDetailsArea;