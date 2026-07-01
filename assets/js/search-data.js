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
  },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of the lab&#39;s cool projects!!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Selected papers published by memebers of the group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses that I teach at TAMU",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "Members of the lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-prospective-students",
          title: "Prospective students",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/prospective_students/";
          },
        },{id: "news-i-am-excited-to-join-texas-a-amp-amp-m-the-geography-department-as-an-assistant-professor-in-fall-2025",
          title: 'I am excited to join Texas A&amp;amp;amp;M, the Geography Department as an assistant...',
          description: "",
          section: "News",},{id: "news-i-am-hiring-phd-students-to-start-spring-2026-or-fall-2026-please-refer-to-the-prospective-students-tab-for-more-information",
          title: 'I am hiring PhD Students to start Spring 2026 or Fall 2026. Please...',
          description: "",
          section: "News",},{id: "news-our-paper-about-the-amplification-of-extreme-temperatures-in-great-lakes-got-published-in-nature-s-communications-earth-and-environment-check-it-here",
          title: 'Our paper about the amplification of extreme temperatures in Great Lakes got published...',
          description: "",
          section: "News",},{id: "news-a-new-paper-about-the-spatiotemporal-dynamics-of-heatwaves-and-cold-spells-in-the-great-lakes-got-published-in-geophysical-research-letters-check-it-here",
          title: 'A new paper about the spatiotemporal dynamics of heatwaves and cold-spells in the...',
          description: "",
          section: "News",},{id: "news-cassandra-huneau-joined-aggie-cis-as-a-phd-student-welcome-cassandra",
          title: 'Cassandra Huneau joined Aggie CIS as a PhD Student. Welcome Cassandra!',
          description: "",
          section: "News",},{id: "news-a-new-paper-about-pink-salmon-invasion-to-the-great-lakes-got-published-in-fish-and-fisheries-check-it-here",
          title: 'A new paper about pink salmon invasion to the Great Lakes got published...',
          description: "",
          section: "News",},{id: "news-a-new-paper-about-ice-risk-for-offshore-wind-turbines-in-the-great-lakes-got-published-in-ocean-engineering-check-it-here",
          title: 'A new paper about ice risk for offshore wind turbines in the Great...',
          description: "",
          section: "News",},{id: "news-aabeer-saha-and-md-tawhidur-rahaman-are-joining-aggie-cis-as-phd-students-in-fall-2026-welcome-aabeer-and-tawhid",
          title: 'Aabeer Saha and Md. Tawhidur Rahaman are joining Aggie CIS as PhD Students...',
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
