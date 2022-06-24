import {useEffect, useState} from "react";

const useSticky = () => {
    const [headerSticky, setHeaderSticky] = useState(false);
    const [behindHeader, setBehindHeader] = useState(false);


    const stickyHeader = () => {
        if (window.scrollY > 120) {
            setHeaderSticky(true);
        } else {
            setHeaderSticky(false);
        }
    };

    const zeroZIndexCourseSidebar = () => {

        if (document.body.scrollHeight - (window.innerHeight + window.scrollY) <= 500) {
            setBehindHeader(true);
        } else {
            setBehindHeader(false);
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", stickyHeader);
        window.addEventListener("scroll", zeroZIndexCourseSidebar);
    }, []);

    return {
        headerSticky,
        behindHeader
    };
};

export default useSticky;
