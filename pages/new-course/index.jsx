import Head from "next/head";
import BreadCrumb from "components/common/BreadCrumb";
import Header from "components/Home/Header";
import Footer from "../../components/common/Footer";
import CreateCourse from "../../components/Courses/CreateCourse";
import {useQuery} from "react-query";
import subjectApi from "../../apis/subject";
import userApi from "../../apis/user";
import CreateCourseBanner from "../../components/Courses/CreateCourseBanner";
import {useState} from "react";
import CreateSession from "../../components/Courses/CreateSession";

const NewCourse = () => {

    const courseTypes = [
        {value: 1, text: 'Ngắn hạn'},
        {value: 2, text: 'Dài hạn'},
    ]

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

    const [createCourseSuccess, setCreateCourseSuccess] = useState(false);

    const [createdCourse, setCreatedCourse] = useState();

    const onCreateCourseSuccess = (createCourse) => {
        setCreateCourseSuccess(true);
        setCreatedCourse(createCourse);
    }

    return (
        <>
            <Head>
                <title>Tạo khoá học</title>
            </Head>

            <Header/>
            <BreadCrumb title="Tạo khoá học" subtitle="Tạo khoá học"/>


            <section className="contact__area pt-115 pb-120">
                <div className="container">
                    <div className="row">
                        {subjectList
                            && courseTypes && mentorData && !createCourseSuccess &&
                            <CreateCourse
                                courseTypes={courseTypes}
                                subjectList={subjectList}
                                mentorData={mentorData}
                                onCreateSuccess={onCreateCourseSuccess}
                            />
                        }

                        {subjectList
                            && courseTypes && mentorData && createCourseSuccess && createdCourse &&
                            <CreateSession
                                courseData={createdCourse}
                            />
                        }

                        {/*<CreateSession*/}
                        {/*    courseData={createdCourse}/>*/}
                        <CreateCourseBanner/>
                    </div>
                </div>
            </section>

            <Footer theme="dark"/>
        </>
    );
};

export default NewCourse;
