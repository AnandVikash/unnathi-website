export const menuItems = [
  {
    id: "1",
    title: "Home",
    url: "/",
  },
  { id: "2", title: "Training", url: "/training" },
  {
    id: "3",
    title: "Healing",
    url: "/healing",
    submenu: [
      { id: "3.1", title: "Affirmations", url: "/about/positive-affirmations" },
    ],
  },
  {
    id: "4",
    title: "About Us",
    url: "/about-us",
  },
  { id: "5", title: "Projects", url: "/projects" },
  {
    id: "6",
    title: "Media",
    url: "/media",
    submenu: [
      { id: "6.1", title: "Events", url: "/media/events" },
      { id: "6.2", title: "Gallery", url: "/media/gallery" },
      { id: "6.3", title: "News", url: "/media/news" },
      { id: "6.4", title: "Blogs ", url: "/media/blogs" },
      { id: "6.5", title: "Youtube links ", url: "/media/youtube-links" },
    ],
  },
  {
    id: "7",
    title: "Research",
    url: "/research",
    submenu: [
      {
        id: "7.1",
        title: "Research at Unnathi",
        url: "/research/research-at-unnathi",
      },
      {
        id: "7.2",
        title: "Our Research Team",
        url: "/research/our-research-team",
      },
      {
        id: "7.3",
        title: "Research documents",
        url: "/research/research-documents",
      },
      { id: "7.4", title: "Publications", url: "/research/publications" },
      {
        id: "7.5",
        title: "Register to Collaborate",
        url: "/research/register-to-Collaborate",
      },
      {
        id: "7.6",
        title: "Ongoing Research Projects",
        url: "/research/ongoing-research-projects",
      },
      {
        id: "7.7",
        title: "Completed Research Projects",
        url: "/research/completed-research-projects",
      },
    ],
  },

  {
    id: "8",
    title: "Contact",
    url: "/contact",
  },
  {
    id: "9",
    title: "Register",
    url: "/register",
    submenu: [
      { id: "9.1", title: "Donor", url: "/register" },
      { id: "9.2", title: "Volunteer", url: "/register" },
      { id: "9.3", title: "Event", url: "/register" },
      { id: "9.4", title: "Training  ", url: "/register" },
      { id: "9.5", title: "Healing  ", url: "/register" },
    ],
  },
];
