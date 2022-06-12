import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import BreadCrumb from "../../components/common/BreadCrumb";
import Footer from "../../components/common/Footer";
import Header from "../../components/Home/Header";
import Link from "next/link";
import courseApi from "../../apis/course";
import {useQuery} from "react-query";

const SearchCourses = () => {
    // searchItems
    const [searchItems, setSearchItems] = useState(false);
    // searchesCourse
    //    const searchesCourse = useSelector(state => state.courses.searchCoursesItems);
    // router
    const router = useRouter();
    const title = router.query.title;
    const { data } = useQuery(["courses"], courseApi.getAllCourses);
    const searchesCourse = data.data?.filter((course) =>
        course.title.toLowerCase().includes(title)
    );
    // searchesCourse
    useEffect(() => {
        if (searchesCourse?.length === 0) {
            setSearchItems(true);
        } else {
            setSearchItems(false);
        }
    }, [searchesCourse]);

    return (<></>
    );
};

export default SearchCourses;