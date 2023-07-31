const projectsPages = [
  {
    from: "templates/projects/projects.njk",
    to: "projects-index.html",
  },
  {
    from: "templates/test.njk",
    to: "test.html",
  },
];

module.exports = [
  {
    from: "templates/index.njk",
    to: "index.html",
  },
  {
    from: "templates/adminlogin1.njk",
    to: "adminlogin1.html",
  },
  {
    from: "templates/adminlogin2.njk",
    to: "adminlogin2.html",
  },
  ...projectsPages,
];
