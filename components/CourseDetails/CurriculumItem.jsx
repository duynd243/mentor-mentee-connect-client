import moment from "moment";

const CurriculumItem = ({curriculumItem}) => {

    return <div className="accordion" id={`course__accordion-${curriculumItem?.id}`}>
        <div className="accordion-item mb-50">
            <h2 className="accordion-header" id={curriculumItem?.id}>
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#session${curriculumItem?.id}-content`}
                    aria-expanded="true"
                    aria-controls={`${curriculumItem?.id}-content`}
                >
                    {curriculumItem?.name}
                </button>
            </h2>
            <div
                id={`session${curriculumItem?.id}-content`}
                className="accordion-collapse collapse show"
                aria-labelledby={curriculumItem?.id}
                data-bs-parent={`#course__accordion-${curriculumItem?.id}`}
            >
                <div className="accordion-body">
                    <div className="course__curriculum-content">
                        <div className="course__curriculum-info">
                            <i className="fa-regular fa-file-lines mr-10"></i>
                            <h3>
                                <span>Nội dung:</span> {curriculumItem?.description}
                            </h3>
                        </div>
                        <div className="course__curriculum-meta">
                            <span className="question">
                              <i className="fa-solid fa-calendar-days" style={{marginRight: "5px"}}></i>
                                {curriculumItem?.startTime ? moment(new Date(curriculumItem?.startTime)).format("DD/MM/YYYY HH:mm") : `Chưa cập nhật`} - {curriculumItem?.endTime ? moment(new Date(curriculumItem?.endTime)).format("DD/MM/YYYY HH:mm") : `Chưa cập nhật`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CurriculumItem;