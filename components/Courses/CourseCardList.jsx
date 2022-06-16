import Link from "next/link";

const CourseCardList = ({course}) => {
    return (<div key={course.id} className="course__item course__item-list white-bg mb-30 fix">
        <div className="row gx-0">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="course__thumb w-img p-relative fix"
                     style={{height: '100%'}}>
                    <Link href={`/course-details/${course.id}`}>
                        <a>
                            <img src={course.imageUrl} alt="" style={{objectFit: 'cover'}}/>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="course__right p-relative">
                    <div className="course__content p-relative">
                        <div className="course__tag">
                            <Link href={`/course-details/${course.id}`}>
                                <a>{course.subject.name}</a>
                            </Link>
                        </div>
                        <h3 className="course__title">
                            <Link href={`/course-details/${course.id}`}>
                                <a>{course.name}</a>
                            </Link>
                        </h3>
                        <div className="course__summary">
                            <p>{course.description}</p>
                        </div>

                        <div className="course__bottom d-sm-flex align-items-center justify-content-between">
                            <div className="course__tutor">
                                <Link href={`/course-details/${course.id}`}>
                                    <a>
                                        <img src={course.mentor.imageUrl} alt=""/>{course.mentor.fullName}
                                    </a>
                                </Link>
                            </div>
                            <div className="course__lesson">
                                <a href="#">
                                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 12.2V4.49999C1 1.7 1.70588 1 4.52941 1H9.47059C12.2941 1 13 1.7 13 4.49999V11.5C13 11.598 13 11.696 12.9929 11.794"
                                            stroke="#49535B" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M3.01176 10.0999H13V12.5498C13 13.9008 11.8918 14.9998 10.5294 14.9998H3.47059C2.10824 14.9998 1 13.9008 1 12.5498V12.0948C1 10.9959 1.90353 10.0999 3.01176 10.0999Z"
                                            stroke="#49535B" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M4.17647 4.5H9.82353" stroke="#49535B" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                        <path d="M4.17647 6.94995H7.70589" stroke="#49535B" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                    </svg>
                                    Số Lessons
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="course__content-bottom d-flex justify-content-between align-items-center">
                        <div className="course__price-2">
                            <span>${course.price}</span>
                        </div>
                        <div className="course__btn">
                            <Link href={`/course-details/${course.id}`}>
                                <a className="link-btn-2">
                                    More Details
                                    <i className="far fa-arrow-right"></i>
                                    <i className="far fa-arrow-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);

};

export default CourseCardList;