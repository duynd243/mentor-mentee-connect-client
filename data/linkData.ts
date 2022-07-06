const links = [
  {
    id: 1,
    url: "/",
    name: "Home",
  },

  {
    id: 2,
    url: "/about",
    name: "About",
  },

  {
    id: 3,
    url: "/courses",
    name: "Courses",
    submenu: [
      {
        id: 1,
        url: "/courses",
        name: "Course Style 1",
      },
      {
        id: 2,
        url: "/courses-style-two",
        name: "Course Style 2",
      },
      {
        id: 3,
        url: "/course-sidebar",
        name: "Course Sidebar",
      },
      {
        id: 4,
        url: "/course-details",
        name: "Course Details",
      },
    ],
  },

  {
    id: 4,
    url: "/become-mentor",
    name: "Become a mentor",
  },

  {
    id: 5,
    url: "/contact",
    name: "Contact",
  },
];

export default links;
