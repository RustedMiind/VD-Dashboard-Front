const projectsPages = [
  {
    from: "templates/projects/projects.njk",
    to: "projects-index.html",
  },
  {
    from: "templates/test.njk",
    to: "test.html",
  },
  {
    from: "templates/projects/project.njk",
    to: "project.html",
  },
  {
    from: "templates/projects/chat-page.njk",
    to: "project-chat-page.html",
  },
];

const middlemanPages = [
  {
    from: "templates/middleman/add-middleman.njk",
    to: "add-middleman.html",
  },
];

const clientsPages = [
  {
    from: "templates/clients/add-client.njk",
    to: "add-client.html",
  },
];

module.exports = [
  {
    from: "templates/index.njk",
    to: "index.html",
  },
  {
    from: "templates/modals.njk",
    to: "modals.html",
  },
  {
    from: "templates/adminlogin1.njk",
    to: "adminlogin1.html",
  },
  {
    from: "templates/adminlogin2.njk",
    to: "adminlogin2.html",
  },
  {
    from: "templates/notifications.njk",
    to: "notifications.html",
  },
  {
    from: "templates/attendance.njk",
    to: "attendance.html",
  },
  ...projectsPages,
  ...middlemanPages,
  ...clientsPages,
];
