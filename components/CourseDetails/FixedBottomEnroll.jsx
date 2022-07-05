import RatingStars from "../common/RatingStars";
import {getMentorSlug} from "../../utils/slugUtils";
import BeanIcon from "../common/BeanIcon";
import {Star} from "react-ionicons";

const FixedBottomEnroll = ({courseData, totalSessions}) => {
    return <div className="bottom__course__wrapper d-lg-none fixed-bottom px-4 py-3 text-white">
        <div className="row">
            <div className="col-8">
                <div className="d-flex flex-column flex-md-row align-items-md-center-center gap-2 gap-md-3">
                    <div className="bottom__course__subject px-2 rounded">{courseData?.subject?.name}</div>
                    <h5 className="bottom__course__title m-0">{courseData?.name}</h5>
                </div>
                <div className="bottom__course__info d-flex align-items-start gap-4 gap-md-5 mt-3">
                    <div className="bottom__course__teacher d-flex align-items-center gap-3">
                        <img className="rounded-circle" src={courseData?.mentor?.imageUrl} alt=""/>
                        <div className="bottom__course__teacher__name">
                            <div className="bottom__course__info__label">Mentor</div>
                            <a href={`/mentor-details/${getMentorSlug(courseData?.mentor?.fullName, courseData?.mentor?.id)}`}>{courseData?.mentor?.fullName}</a>
                        </div>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                        <div className="bottom__course__rating">
                            <div className="bottom__course__info__label">Rating</div>
                            <div className="bottom__course__rating__stars d-none d-md-flex align-items-center">
                                <RatingStars rating={courseData?.totalRating || 0}/>
                            </div>
                            <div className="bottom__course__rating__stars d-flex d-md-none align-items-center">
                                <Star
                                    width="18px"
                                    color={'#f5b455'}
                                    style={{marginRight: '5px'}}
                                /> {courseData?.totalRating || 0}
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                        <div className="d-none d-sm-block bottom__course__students">
                            <div className="bottom__course__info__label">Enrolled</div>
                            <div className="bottom__course__students__enrolled text-center">
                                {courseData?.currentNumberMentee || 0} {courseData?.currentNumberMentee > 1 ? 'Students' : 'Student'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="d-flex flex-column flex-md-row justify-content-end align-items-center gap-4 h-100">
                    <h3 className="bottom__course__price"><BeanIcon fillColor="white"/>{courseData?.price}</h3>
                    <button type="button"
                            className="bottom__course__enroll btn btn-primary py-2 px-3 py-md-3 px-md-4">Enroll Now
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default FixedBottomEnroll;