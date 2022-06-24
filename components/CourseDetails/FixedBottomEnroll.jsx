import RatingStars from "../common/RatingStars";

const FixedBottomEnroll = ({courseData, totalSessions}) => {
    return <div className="bottom__course__wrapper d-lg-none fixed-bottom px-4 py-3 text-white">
        <div className="row">
            <div className="col-6">
                <h5 className="bottom__course__title mb-3">{courseData?.name}</h5>
                <div className="bottom__course__info d-flex align-items-center">
                    <div className="bottom__course__teacher d-flex align-items-center gap-3 mr-20">
                        <img className="rounded-circle" src={courseData?.mentor?.imageUrl} alt=""/>
                        <div className="bottom__course__teacher__name">
                            <div className="bottom__course__info__label">Mentor</div>
                            <a href={`/mentor-details/${courseData?.mentor?.id}`}>{courseData?.mentor?.fullName}</a>
                        </div>
                    </div>

                    <div className="bottom__course__teacher d-flex align-items-center gap-2 mr-10">
                        <div className="bottom__course__rating">
                            <div className="bottom__course__info__label">Reviews</div>
                            <div className="bottom__course__rating__stars d-flex align-items-center">
                                <RatingStars rating={courseData?.totalRating || 0}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="d-flex justify-content-end align-items-center gap-4 h-100">
                    <h3 className="bottom__course__price">${courseData?.price}</h3>
                    <button type="button" className="bottom__course__enroll btn btn-primary py-3 px-4">Enroll Now</button>
                </div>
            </div>
        </div>
    </div>
}

export default FixedBottomEnroll;