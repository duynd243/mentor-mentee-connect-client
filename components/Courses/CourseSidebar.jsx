import React, {useState} from "react";
// import {useDispatch, useSelector} from 'react-redux';
// import {categoryData} from '../../redux/features/categorySlice';
import {useRouter} from "next/router";
// import {searchText} from '../../redux/features/coursesSlice';
import {useQuery} from "react-query";
import subjectApi from "../../apis/subject";
import courseApi from "../../apis/course";
import {Container, Spinner} from "react-bootstrap";
import CourseCard from "./CourseCard";
import CourseCardList from "./CourseCardList";
import Pagination from "../common/Pagination";
import {toast} from "react-toastify";
import SmallCourseSidebar from "./SmallCourseSidebar";

const CourseSidebar = () => {
    // useRouter
    const router = useRouter();

    // searchValue
    const [searchValue, setSearchValue] = useState("");
    // currentPage
    const [currentPage, setCurrentPage] = useState(1);
    // coursePerPage
    const [coursePerPage, setCoursePerPage] = useState(6);

    // paginate
    const paginate = (number) => {
        setCurrentPage(number);
    };

    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue.trim() === "") {
            toast.error("Please enter a search value", {
                position: "top-center",
            });
        } else {
            router.push(`/search-courses/${searchValue}`);
        }
    };

    // Selected subject (category)
    const [currentSubjectId, setCurrentSubjectId] = useState(""); // Default subject-id="" -> All Categories

    const {data: subjects, isLoading: subjectsLoading} = useQuery(
        "subjects",
        () => subjectApi.getAllSubjects({size: 100}),
    );

    const {data: courseItems, isLoading: courseItemsLoading} = useQuery(
        ["courseItems", currentSubjectId, currentPage, coursePerPage],
        () => courseApi.getAllCourses(
            {
                "subject-id": currentSubjectId,
                page: currentPage,
                size: coursePerPage
            })
    );

    const {data: newCourseItems, isLoading: newCourseItemsLoading} = useQuery(
        ["newCourseItems"],
        () => courseApi.getAllCourses({size: 4, sort: "createDate desc"})
    );

    const handleSubjectFilter = (subjectId) => {
        setCurrentSubjectId(() => subjectId);
        setCurrentPage(1);
    }

    const fromIndex = coursePerPage * (currentPage - 1) + 1;

    return (
        <>
            <section className="course__area pt-115 pb-90 grey-bg-3">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="course__tab-inner white-bg mb-50">
                                <div className="row align-items-center">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="course__tab-wrapper d-flex align-items-center">
                                            <div className="course__tab-btn">
                                                <ul
                                                    className="nav nav-tabs"
                                                    id="courseTab"
                                                    role="tablist"
                                                >
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className="nav-link active"
                                                            id="grid-tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#grid"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="grid"
                                                            aria-selected="true"
                                                        >
                                                            <svg className="grid" viewBox="0 0 24 24">
                                                                <rect
                                                                    x="3"
                                                                    y="3"
                                                                    className="st0"
                                                                    width="7"
                                                                    height="7"
                                                                />
                                                                <rect
                                                                    x="14"
                                                                    y="3"
                                                                    className="st0"
                                                                    width="7"
                                                                    height="7"
                                                                />
                                                                <rect
                                                                    x="14"
                                                                    y="14"
                                                                    className="st0"
                                                                    width="7"
                                                                    height="7"
                                                                />
                                                                <rect
                                                                    x="3"
                                                                    y="14"
                                                                    className="st0"
                                                                    width="7"
                                                                    height="7"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className="nav-link list"
                                                            id="list-tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#list"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="list"
                                                            aria-selected="false"
                                                        >
                                                            <svg className="list" viewBox="0 0 512 512">
                                                                <g id="Layer_2_1_">
                                                                    <path
                                                                        className="st0"
                                                                        d="M448,69H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,69,448,69z"
                                                                    />
                                                                    <circle
                                                                        className="st0"
                                                                        cx="64"
                                                                        cy="100"
                                                                        r="31"
                                                                    />
                                                                    <path
                                                                        className="st0"
                                                                        d="M448,225H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,225,448,225z"
                                                                    />
                                                                    <circle
                                                                        className="st0"
                                                                        cx="64"
                                                                        cy="256"
                                                                        r="31"
                                                                    />
                                                                    <path
                                                                        className="st0"
                                                                        d="M448,381H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,381,448,381z"
                                                                    />
                                                                    <circle
                                                                        className="st0"
                                                                        cx="64"
                                                                        cy="412"
                                                                        r="31"
                                                                    />
                                                                </g>
                                                            </svg>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="course__view text-end">
                                            {!courseItemsLoading && courseItems &&
                                                <h4>{`Showing ${fromIndex} to ${(fromIndex + coursePerPage - 1) < courseItems?.metadata.total ? (fromIndex + coursePerPage - 1) : courseItems?.metadata.total} of ${courseItems?.metadata.total}`}</h4>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xxl-12">
                                    <div className="course__tab-conent">
                                        <div className="tab-content" id="courseTabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="grid"
                                                role="tabpanel"
                                                aria-labelledby="grid-tab"
                                            >
                                                <div className="row">
                                                    {/*Loading*/}
                                                    {courseItemsLoading && (
                                                        <Container className="my-5 text-center">
                                                            <Spinner animation="grow"/>
                                                        </Container>
                                                    )}
                                                    {/*Course Cards (Grid)*/}
                                                    {!courseItemsLoading && courseItems &&
                                                        (courseItems?.data.map((courseItem) => <CourseCard
                                                            key={courseItem?.id} course={courseItem}
                                                            courseSidebar={true}/>))
                                                    }
                                                </div>
                                            </div>

                                            <div
                                                className="tab-pane fade"
                                                id="list"
                                                role="tabpanel"
                                                aria-labelledby="list-tab"
                                            >
                                                <div className="row">
                                                    <div className="col-xxl-12">
                                                        {/*Loading*/}
                                                        {courseItemsLoading && (
                                                            <Container className="my-5 text-center">
                                                                <Spinner animation="grow"/>
                                                            </Container>
                                                        )}
                                                        {/*Course Cards (List)*/}
                                                        {!courseItemsLoading && courseItems &&
                                                            (courseItems?.data.map((courseItem) => <CourseCardList
                                                                key={courseItem?.id} course={courseItem}/>))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Pagination*/}
                            <div className="row">
                                {!courseItemsLoading && courseItems &&
                                    <Pagination
                                        coursePerPage={coursePerPage}
                                        totalCourse={courseItems?.metadata.total}
                                        paginate={paginate}
                                        currentPage={currentPage}
                                    />
                                }
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="course__sidebar pl-70">

                                {/*Search box*/}
                                <div className="course__sidebar-widget white-bg">
                                    <div className="course__sidebar-search">
                                        <form onSubmit={handleSubmit}>
                                            <input
                                                onChange={(e) => setSearchValue(e.target.value)}
                                                type="text"
                                                placeholder="Search for courses..."
                                            />
                                            <button type="submit">
                                                <svg
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 584.4 584.4"
                                                    style={{enableBackground: "new 0 0 584.4 584.4"}}
                                                    xmlSpace="preserve"
                                                >
                                                    <g>
                                                        <path
                                                            className="st0"
                                                            d="M565.7,474.9l-61.1-61.1c-3.8-3.8-8.8-5.9-13.9-5.9c-6.3,0-12.1,3-15.9,8.3c-16.3,22.4-36,42.1-58.4,58.4    c-4.8,3.5-7.8,8.8-8.3,14.5c-0.4,5.6,1.7,11.3,5.8,15.4l61.1,61.1c12.1,12.1,28.2,18.8,45.4,18.8c17.1,0,33.3-6.7,45.4-18.8    C590.7,540.6,590.7,499.9,565.7,474.9z"
                                                        />
                                                        <path
                                                            className="st1"
                                                            d="M254.6,509.1c140.4,0,254.5-114.2,254.5-254.5C509.1,114.2,394.9,0,254.6,0C114.2,0,0,114.2,0,254.5    C0,394.9,114.2,509.1,254.6,509.1z M254.6,76.4c98.2,0,178.1,79.9,178.1,178.1s-79.9,178.1-178.1,178.1S76.4,352.8,76.4,254.5    S156.3,76.4,254.6,76.4z"
                                                        />
                                                    </g>
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </div>

                                {/* Course Subjects / Categories Filter */}
                                <div className="course__sidebar-widget white-bg">
                                    <div className="course__sidebar-info">
                                        <h3 className="course__sidebar-title">Filter with Subjects</h3>
                                        <ul>
                                            <li key="">
                                                <div
                                                    onClick={() => handleSubjectFilter("")}
                                                    className="course__sidebar-check mb-10 d-flex align-items-center"
                                                >
                                                    <input
                                                        className="m-check-input"
                                                        type="checkbox"
                                                        readOnly
                                                        checked={currentSubjectId === ""}
                                                    />
                                                    <label className="m-check-label">
                                                        All
                                                        subjects {currentSubjectId === "" && `(${courseItems?.metadata.total})`}
                                                    </label>
                                                </div>
                                            </li>
                                            {subjects && subjects?.data.map((subject) => {
                                                return (
                                                    <li key={subject.id}>
                                                        <div
                                                            onClick={() => handleSubjectFilter(subject?.id)}
                                                            className="course__sidebar-check mb-10 d-flex align-items-center"
                                                        >
                                                            <input
                                                                className="m-check-input"
                                                                type="checkbox"
                                                                readOnly
                                                                checked={
                                                                    currentSubjectId === subject?.id ? "checked" : ""
                                                                }
                                                            />
                                                            <label className="m-check-label">
                                                                {subject?.name} {currentSubjectId === subject?.id && `(${courseItems?.metadata.total})`}
                                                            </label>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>

                                {/*New Courses*/}
                                <SmallCourseSidebar title="New Courses" courses={newCourseItems?.data}/>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CourseSidebar;
