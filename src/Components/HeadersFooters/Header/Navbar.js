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
      { id: "6.6", title: "Affirmations", url: "/media/positive-affirmations" },
    ],
  },
  {
    id: "7",
    title: "Research",
    url: "/research",
  },
  {
    id: "8",
    title: "Contact",
    url: "/contact",
  },
];
