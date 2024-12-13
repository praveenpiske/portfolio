export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  export const myProjects = [
    {
      title: 'Medlink - Healthcare Platform',
      desc: 'MedLink is an innovative healthcare platform that simplifies the process of connecting patients with doctors through seamless video consultations. With features like hassle-free virtual appointments and downloadable prescriptions, it ensures patients receive convenient and timely medical care from the comfort of their homes.',
      subdesc:
        'MedLink is a SaaS platform built with MongoDB, Flask, Jitsi, and a PDF generator, offering seamless video consultations and prescription downloads for an efficient healthcare experience.',
      href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Flask',
          path: '/assets/python-logo.svg',
        },
        {
          id: 4,
          name: 'Material UI',
          path: '/assets/materialuilogo.svg',
        },
      ],
    },
    {
      title: 'Coinfo-Crypto Coin Info App',
      desc: 'The app is built using React.js for dynamic interfaces, Material-UI for modern styling, Chart.js for interactive data visualization, and Bootstrap for responsive layouts. Additionally, JavaScript, HTML, and CSS provide structure and interactivity, ensuring a smooth and engaging user experience.',
      subdesc:
        'The app is built using React.js for dynamic interfaces, Material-UI for modern styling, Chart.js for interactive data visualization, and Bootstrap for responsive layouts. Additionally, JavaScript, HTML, and CSS provide structure and interactivity, ensuring a smooth and engaging user experience.',
      href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Javascript',
          path: '/assets/javascript-logo.png',
        },
        {
          id: 4,
          name: 'Material UI',
          path: '/assets/materialuilogo.svg',
        },
      ],
    },
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 5 : isMobile ? 4 : 5.5,
      deskPosition: isMobile ? [0, -6, 0] : [0, -7, -3],
      cubePosition: isSmall ? [20, -12, -6] : isMobile ? [10, -5, 0] : isTablet ? [15, -5, 0] : [15, -5.5, 0],
      reactLogoPosition: isSmall ? [15, 11, 0] : isMobile ? [15, 4, 0] : isTablet ? [10, 10, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-10, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-22, -10, -10] : isMobile ? [-9, -11, -10] : isTablet ? [-11, -4, -10] : [-13, -15, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'SDAC Infotech',
      pos: 'Full Stack Developer',
      duration: '16 April 2024 - 31 May 2024',
      title: "Developed an Inventory Management System with full CRUD functionality.Implemented a Responsive frontend using the Bootstrap library for a seamless user experience across devices.Utilized Java for backend development, ensuring smooth data processing and operations.Connected to a MySQL database via JDBC for efficient data storage and retrieval.",
      icon: '/assets/sdac.png ',
      animation: 'victory',
    },
    
  ];