import {useRouter} from "next/router";
import Head from 'next/head';
import Header from "../../../components/Home/Header";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Footer from "../../../components/common/Footer";
import {useQuery} from "react-query";
import userApi from "../../../apis/user";
import {Spinner} from "react-bootstrap";
import MentorDetailsArea from "../../../components/MentorDetails/MentorDetailsArea";

const MentorDetails = () => {
    const router = useRouter();
    const mentorId = router.query.mentorId;

    const {data: mentorData, isLoading: mentorLoading} = useQuery(
        ["mentorData", mentorId],
        () => userApi.getMentorInfo(mentorId)
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
            !mentorLoading && mentorData &&
            <MentorDetailsArea mentorData={mentorData}/>
        }

        <Footer/>
    </>);
}

export default MentorDetails;