import slugify from "slugify";

const options = {
    lower: true,
    remove: /[*+~.()'"!:@]/g
}

const getCourseSlug = (courseName, courseId) => {
    return `${slugify(courseName, options)}/${courseId}`;
}

const getMentorSlug = (mentorName, mentorId) => {
    return `${slugify(mentorName, options)}/${mentorId}`;
}

export {getCourseSlug, getMentorSlug};