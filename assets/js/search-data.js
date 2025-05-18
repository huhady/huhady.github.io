// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Selected papers published by memebers of the group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of the lab&#39;s cool projects!!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses that I teach and potentially their materials",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-prospective-students",
          title: "Prospective students",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/prospective%20students/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "Members of the lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "news-i-am-excited-to-join-texas-a-amp-amp-m-the-geography-department-as-an-assistant-professor-in-fall-2025",
          title: 'I am excited to join Texas A&amp;amp;amp;M, the Geography Department as an assistant...',
          description: "",
          section: "News",},{id: "news-i-am-hiring-phd-students-to-start-spring-2026-or-fall-2026",
          title: 'I am hiring PhD Students to start Spring 2026 or Fall 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-our-paper-about-the-amplification-of-extreme-temperatures-in-great-lakes-got-published-in-nature-s-communications-earth-and-environment-check-it-here",
          title: 'Our paper about the amplification of extreme temperatures in Great Lakes got published...',
          description: "",
          section: "News",},{id: "projects-shoreline-changes-quantifcation-using-satellite-images",
          title: 'Shoreline changes quantifcation using satellite images',
          description: "Started in 2021",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-the-great-lakes-shoreline-changes-model-glsm",
          title: 'The Great Lakes shoreline changes model (GLSM)',
          description: "Started in 2021",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-hydroclimate-modeling-using-ai-ml",
          title: 'Hydroclimate modeling using AI/ML',
          description: "Started in 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-great-lakes-hydroclimate-extremes-variability",
          title: 'Great Lakes hydroclimate extremes variability',
          description: "Started in 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
