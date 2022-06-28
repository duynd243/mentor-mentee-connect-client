import {useRouter} from "next/router";
import Head from 'next/head';
import Header from "../../../components/Home/Header";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import {useQuery} from "react-query";
import userApi from "../../../apis/user";
import {Spinner} from "react-bootstrap";
import MentorDetailsArea from "../../../components/MentorDetails/MentorDetailsArea";
import Link from "next/link";
import React from "react";

const MentorDetails = () => {
    const router = useRouter();
    const mentorId = router.query.mentorId;

    const {data: mentorData, isLoading: mentorLoading} = useQuery(
        ["mentorData", mentorId],
        () => userApi.getMentorInfo(mentorId),
        {
            refetchOnWindowFocus: false,
        }
    );
    return (<>
        <Head>
            <title>{(mentorData?.fullName) ? `Mentor - ${mentorData?.fullName}` : `Mentor Details`}</title>
        </Head>

        <Header/>
        <BreadCrumb title="Mentor Details"
                    subtitle="Mentor Details"/>
        {mentorLoading &&
            <div className="d-flex align-items-center justify-content-center" style={{height: `450px`}}>
                <Spinner style={{color: "#ace0fa"}} animation="grow"/>
            </div>
        }
        {
            !mentorLoading && !mentorData &&
            <div className="col-12 pb-40" style={{margin: "0 auto"}}>
                <div className="error__content text-center">
                    <div className="error__thumb m-img">
                        <img style={{maxWidth: "65vw"}}
                             src={"/assets/img/lap-magnifying-glass.png"} alt=""/>
                    </div>
                    <div className="error__content">
                        <h3 className="error__title" style={{fontSize: "40px", marginBottom: "35px"}}>We
                            couldn't find any matches with this given link</h3>
                        <div className="error__btn">
                            <Link href="/courses">
                                <a className="tp-btn">Back to Courses</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        }
        {
            !mentorLoading && mentorData &&
            <MentorDetailsArea mentorData={mentorData}/>
        }

        <Footer/>
    </>);
}

export default MentorDetails;