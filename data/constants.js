const roles = {
    "mentee": {
        id: 1,
        name: "Mentee",
    },
    "mentor": {
        id: 2,
        name: "Mentor",
    },
    "admin": {
        id: 3,
        name: "Admin",
    }
}

const courseStatus = {
    "draft": 1,
    "pending": 2, // Mentor đã submit khóa học, chờ duyệt
    "waiting": 3, //Khóa học đã được duyệt chờ đủ mentee
    "cancelled": 4, // Chưa đủ, bị huỷ
    "started": 5, // Đã bắt đầu
    "finished": 6, // Đã hoàn thành
}

const certificateStatus = {
    "pending": 1,
    "approved": 2,
    "denied": 3,
}

const MAX_PROFILE_IMAGE_SIZE = 1024 * 1024;
const constants = {
    roles,
    MAX_PROFILE_IMAGE_SIZE,
    courseStatus,
    certificateStatus
}

export default constants;