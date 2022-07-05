import React from "react";
import {Spinner} from "react-bootstrap";
// import {useSelector} from 'react-redux';
import Link from "next/link";
import {useQuery} from "react-query";
import userApi from "../../apis/user";
import {getMentorSlug} from "../../utils/slugUtils";

const TeamArea = () => {

    const sampleMentorImages = [
        'https://i.ibb.co/5WCRCtG/team-sm-3.png',
        'https://i.ibb.co/6P3KSyt/team-sm-1.png',
        'https://i.ibb.co/GCWRH57/team-sm-2.png',
        'https://i.ibb.co/y4xFpK3/team-sm-4.png',

    ]
    const shapeImages = [
        'assets/img/team/team-shape-1.png',
        'assets/img/team/team-shape-2.png',
        'assets/img/team/team-shape-3.png',
        'assets/img/team/team-shape-4.png',
    ]
    const {data: featuredMentors, isLoading} = useQuery(
        "featuredMentors",
        () => userApi.getMentors(
            {size: 4}
        )
    );

    return (
        <>
            <section className="team__area pt-80 pb-80">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="section__title-wrapper-2 mb-40">
                                <span className="section__title-pre-2">Top Instructors</span>
                                <h3 className="section__title-2">
                                    Become A Instruction.
                                </h3>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="team__wrapper mb-45 pl-70">
                                <p>
                                    Placerat veritatis ullamco rutrum quia illo, aenean eaque
                                    necessitatibus aptent vehicula porta? Sollicitudin id, laboris
                                    commodi!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {isLoading ? (
                            <div className="text-center">
                                <Spinner style={{color: "#ace0fa"}} animation="grow"/>
                            </div>
                        ) : (
                            featuredMentors?.data?.sort((a, b) => 0.5 - Math.random())?.map((mentor, index) => {
                                return (
                                    <div
                                        key={mentor?.id}
                                        className="col-xxl-3 col-xl-3 col-lg-4 col-md-6"
                                    >
                                        <div className="team__item text-center mb-40">
                                            <div className="team__thumb">
                                                <div className="team__shape">
                                                    <img src={shapeImages[index % 4]} alt=""/>
                                                </div>
                                                <img src={sampleMentorImages[index % 4]} alt=""/>
                                                <div className="team__social transition-3">
                                                    <a href="#">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa-brands fa-twitter"></i>
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa-brands fa-linkedin-in"></i>
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa-brands fa-pinterest-p"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="team__content">
                                                <h3 className="team__title">
                                                    <Link
                                                        href={`/mentor-details/${getMentorSlug(mentor?.fullName, mentor?.id)}`}>
                                                        <a>{mentor?.fullName}</a>
                                                    </Link>
                                                </h3>
                                                <span className="team__designation">Professor</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamArea;
