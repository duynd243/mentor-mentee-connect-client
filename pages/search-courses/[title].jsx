import {useRouter} from "next/router";
import courseApi from "../../apis/course";
import {useQuery} from "react-query";
import Head from "next/head";
import Header from "../../components/Home/Header";
import BreadCrumb from "../../components/common/BreadCrumb";
import Footer from "../../components/common/Footer";
import CourseCard from "../../components/Courses/CourseCard";
import LoadingSkeleton from "../../components/common/LoadingSkeleton";

const SearchCourses = () => {
    const router = useRouter();
    const title = router.query.title;

    const {data: searchedCourses, isLoading} = useQuery(["searchedCourses", title], () =>
        courseApi.getAllCourses({name: title})
    );

    return (
        <>
            <Head>
                <title>Search Page</title>
            </Head>

            <Header defaultSearchValue={title}/>
            <BreadCrumb title="Search Course" subtitle="Search Course"/>
            {isLoading &&
                <LoadingSkeleton/>
            }
            <section className="my__course pt-80 pb-90">
                <div className="container">
                    <div className="row">

                        {!isLoading && (!searchedCourses || searchedCourses?.data.length === 0) && <>
                            <img
                                src="../assets/img/magnifying-glass.webp"
                                alt=""
                                style={{
                                    width: "320px",
                                    maxWidth: "70%",
                                    margin: "0 auto",
                                }}
                            />
                            <h2
                                style={{
                                    textAlign: "center",
                                    fontWeight: 400,
                                    opacity: 0.75,
                                }}
                            >
                                We couldn't find any matches for{" "}
                                <span style={{fontWeight: 500}}>{title}</span>
                            </h2>
                            <div
                                style={{
                                    fontSize: "1.2rem",
                                    textAlign: "center",
                                    fontWeight: 400,
                                    opacity: 0.75,
                                }}
                            >
                                Please try searching with another keyword
                            </div>
                        </>}
                        {!isLoading && searchedCourses && searchedCourses?.data.length > 0 && <>
                            <h3
                                style={{
                                    marginBottom: "1.5rem",
                                    fontWeight: 400,
                                    opacity: 0.85,
                                }}
                            >
                                Found{" "}
                                <span style={{fontWeight: 500}}>
                    {searchedCourses?.data.length}{" "}
                                    {searchedCourses?.data.length > 1 ? "matches" : "match"}
                  </span>{" "}
                                for <span style={{fontWeight: 500}}>{title}</span>
                            </h3>
                            {searchedCourses?.data.map((course) => {
                                return (
                                    <>
                                        <CourseCard course={course}/>
                                    </>
                                );
                            })}
                        </>}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default SearchCourses;