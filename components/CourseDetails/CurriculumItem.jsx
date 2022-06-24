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
                    <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                        <div className="course__curriculum-info">
                            <svg className="document" viewBox="0 0 24 24">
                                <path
                                    className="st0"
                                    d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z"
                                />
                                <polyline
                                    className="st0"
                                    points="14,2 14,8 20,8 "
                                />
                                <line
                                    className="st0"
                                    x1="16"
                                    y1="13"
                                    x2="8"
                                    y2="13"
                                />
                                <line
                                    className="st0"
                                    x1="16"
                                    y1="17"
                                    x2="8"
                                    y2="17"
                                />
                                <polyline className="st0" points="10,9 9,9 8,9 "/>
                            </svg>
                            <h3>
                                {" "}
                                <span>Content:</span> {curriculumItem?.description}
                            </h3>
                        </div>
                        <div className="course__curriculum-meta">
                            <span className="question">
                              <i className="fa-solid fa-calendar-days" style={{marginRight: "5px"}}></i>
                                {curriculumItem?.startTime ? moment(new Date(curriculumItem?.startTime)).format("DD/MM/YYYY") : `Not set`} - {curriculumItem?.endTime ? moment(new Date(curriculumItem?.endTime)).format("DD/MM/YYYY") : `Not set`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CurriculumItem;