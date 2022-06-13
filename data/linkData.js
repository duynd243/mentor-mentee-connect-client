
const links = [
    {
        id:1,
        url:'/',
        name:'Home',
        submenu:[
            {
                id:1,
                url:'/home',
                name:'Home Style 1'
            },
            {
                id:2,
                url:'/home-two',
                name:'Home Style 2'
            },
            {
                id:3,
                url:'/home-three',
                name:'Home Style 3'
            },
        ]
    },

    {
        id:2,
        url:'/about',
        name:'About'
    },

    {
        id:3,
        url:'/courses',
        name:'Courses',
        submenu:[
            {
                id:1,
                url:'/courses',
                name:'Course Style 1'
            },
            {
                id:2,
                url:'/courses-style-two',
                name:'Course Style 2'
            },
            {
                id:3,
                url:'/course-sidebar',
                name:'Course Sidebar'
            },
            {
                id:4,
                url:'/course-details',
                name:'Course Details'
            },
        ]
    },


    {
        id:4,
        url:'/about',
        name:'Pages',
        submenu:[
            {
                id:1,
                url:'/events',
                name:'Our Events'
            },
            {
                id:2,
                url:'/event-details',
                name:'Event Details'
            },
            {
                id:3,
                url:'/team',
                name:'Team'
            },
            {
                id:4,
                url:'/team-details',
                name:'Team Details'
            },
            {
                id:5,
                url:'/404-page',
                name:'404 Error'
            },
            // {
            //     id:6,
            //     url:'/my-profile',
            //     name:'My Profile'
            // },
            // {
            //     id:7,
            //     url:'/my-courses',
            //     name:'My Courses'
            // },
            {
                id:8,
                url:'/sign-in',
                name:'Sign In'
            },
            {
                id:9,
                url:'/sign-up',
                name:'Sign Up'
            },
            {
                id:10,
                url:'/cart',
                name:'Cart'
            },
            {
                id:11,
                url:'/checkout',
                name:'Checkout'
            },
        ]
        
    },

    {
        id:5,
        url:'/blog',
        name:'Blog',
        submenu:[
            {
                id:1,
                url:'/blog',
                name:'Blog'
            },
            {
                id:2,
                url:'/blog-details',
                name:'Blog Details'
            },
        ]
    },

    {
        id:6,
        url:'/contact',
        name:'Contact'
    },
]

export default links;