import Head from "next/head";
import BreadCrumb from "components/common/BreadCrumb";
import CreateCourse from "components/Courses/CreateCourse";
import Header from "components/Home/Header";
import Footer from "../../components/common/Footer";
import CreateCourseStaging from "../../components/Courses/CreateCourseStaging";
import {useQuery} from "react-query";
import subjectApi from "../../apis/subject";
import userApi from "../../apis/user";

const NewCourse = () => {

    const courseTypes = [
        {value: 1, text: 'Ngắn hạn'},
        {value: 2, text: 'Dài hạn'},
    ]


    // Lần đầu load để lấy totalItems
    const {data: subjectFirstLoad} = useQuery(
        "subjectFirstLoad",
        () => subjectApi.getAllSubjects({size: 1}),
    );

    const {data: subjects, isLoading: subjectsLoading} = useQuery(
        ["subjects", subjectFirstLoad?.metadata?.total],
        () => subjectApi.getAllSubjects({size: subjectFirstLoad?.metadata?.total}),
    );

    let subjectList = subjects?.data?.map(subject => ({value: subject.id, text: subject.name}));
    // useEffect(()=>{
    //     subjectList = subjects?.data?.map(subject => ({value: subject.id, text: subject.name}));
    // }, [subjects])

    // Get data of logging mentor
    const {data: mentorData} = useQuery('mentorData',
        () => userApi.getUserInfo()
    );

    return (
        <>
            <Head>
                <title>Tạo khoá học</title>
            </Head>

            <Header/>
            <BreadCrumb title="Tạo khoá học" subtitle="Tạo khoá học"/>
            {subjectList
                && courseTypes && mentorData &&
                <CreateCourseStaging courseTypes={courseTypes} subjectList={subjectList} mentorData={mentorData}/>
            }
            <CreateCourse/>

            {/* <ContactInfoArea /> */}

            <Footer theme="dark"/>
        </>
    );
};

export default NewCourse;
