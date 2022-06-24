import CurriculumItem from "./CurriculumItem";

const CourseCurriculum = ({courseSessions}) => {
    return <div className="course__curriculum">
        {courseSessions?.map((session) => {
            return <CurriculumItem key={session?.id} curriculumItem={session}/>
        })}
    </div>
}

export default CourseCurriculum;