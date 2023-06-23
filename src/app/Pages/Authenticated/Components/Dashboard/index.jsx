import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Autocomplete,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tab,
} from "@mui/material";
import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  Box,
  Container,
  Grid,
  TextField,
  Toolbar,
  makeStyles,
} from "../../../../Containers/index";
const useStyles = makeStyles({
  root: {
    "& img": {
      width: "100%",
      maxWidth: "800px",
      height: "auto",
    },
  },
});
function DashBoard() {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [name, setName] = React.useState(1);

  const [resumeData1] = useState({
    basics: {
      name: "Aashish Vivekanand",
      label: "Cloud Solution Architect",
      image: "",
      email: "aashishvanand@gmail.com",
      phone: "+91 944-477-2058",
      url: "https://github.com/aashishvanand",
      summary:
        "Experienced Cloud Solution Architect with expertise in developing and implementing secure digital solutions. Skilled in network and cloud security, software development, and vulnerability assessment. Passionate about cyber-security, Android development, IoT, and machine learning. Strong problem-solving and communication skills.",
      location: {
        address: "",
        postalCode: "",
        city: "India",
        countryCode: "IN",
        region: "",
      },
      profiles: [
        {
          network: "LinkedIn",
          username: "aashishvanand",
          url: "https://linkedin.com/in/aashishvanand",
        },
      ],
    },
    work: [
      {
        name: "Trusted Services",
        position: "Cloud Solution Architect",
        url: "",
        startDate: "05/2021",
        endDate: "Current",
        summary:
          "Developed and implemented PAdES-LTA compliant digital signatures using Singpass. Singpass is a trusted digital identity for residents’ everyday secure transaction needs in Singapore.",
        highlights: [
          "Developed and implemented PAdES-LTA compliant digital signatures using Singpass",
        ],
      },
      {
        name: "Falaina",
        position: "Network & Cloud Security Specialist",
        url: "",
        startDate: "05/2019",
        endDate: "04/2021",
        summary:
          "Designed and developed Falaina Community Cloud, a serverless modern web application that is used by Customers/Internal Employees as a Ticketing, Marketing, Sales as All in one Portal. Developed Falaina mobile apps and worked on internal security audits for products/projects before delivering to customers.",
        highlights: [
          "Designed and developed Falaina Community Cloud, a serverless modern web application",
          "Developed Falaina mobile apps",
          "Worked on internal security audits for products/projects",
        ],
      },
      {
        name: "Deep Identity",
        position:
          "Software Developer (Android) & Mobile/Web Vulnerability Assessment and Penetration Tester",
        url: "",
        startDate: "01/2018",
        endDate: "04/2019",
        summary:
          "Designed and developed Data Protection Manager (DPM), an application that actively monitors users from sending sensitive data outside the device. The agent is capable of warning users if they are sending any PCI/DSS, HIPAA compliant data. The agent is also capable of blocking internet activity per-app basis after repeated warnings. The agent scans in realtime after a photo/screenshot/files that are taken/downloaded for sensitive data and reports it back.",
        highlights: [
          "Designed and developed Data Protection Manager (DPM)",
          "Implemented real-time scanning for sensitive data",
          "Developed internet activity blocking feature",
        ],
      },
    ],
    volunteer: [],
    education: [
      {
        institution: "Rajalakshmi Engineering College",
        url: "",
        area: "Computer Science & Engineering",
        studyType: "Bachelor",
        startDate: "2013-01-01",
        endDate: "2017-01-01",
        score: "",
        courses: [],
      },
    ],
    awards: [
      {
        title: "Third in Mobile App Garage 2017",
        date: "2017-01-01",
        awarder: "Daimler India Commercial Vehicles",
        summary:
          "Conducted by Daimler India Commercial Vehicles in association with CUIC (Centre for University-Industry Collaboration), Anna University",
      },
      {
        title: "First in Cyber-security Hackathon 2016",
        date: "2016-01-01",
        awarder: "US Consulate and Learning Links Foundation",
        summary:
          "Conducted by the US Consulate and Learning Links Foundation across India",
      },
      {
        title: "First in Connect 2015 and Connect 2016",
        date: "",
        awarder: "Confederation of Indian Industry",
        summary: "Hackathons organized by the Confederation of Indian Industry",
      },
      {
        title: "SmartSignals - The best project at the state level",
        date: "",
        awarder: "International Society for Scientific Research & Development",
        summary:
          "Organized by the International Society for Scientific Research & Development",
      },
    ],
    certificates: [],
    publications: [
      {
        name: "Inventory Transparency for Agricultural Produce through IoT",
        publisher: "CAMME2017",
        releaseDate: "2017-01-01",
        url: "",
        summary:
          "Co-authored with Dr.Srinivasan SP and Mrs. Sorna Shanthi. Presented at CAMME2017, Bangkok (International Conference on Aerospace Mechanical and Mechatronics Engineering)",
      },
    ],
    skills: [
      {
        name: "Programming",
        level: "",
        keywords: [
          "Java",
          "Xamarin",
          "React",
          "Typescript",
          "Python",
          "PHP",
          "PL/SQL",
          "Mongo",
          "C",
          "C++",
        ],
      },
      {
        name: "Platform",
        level: "",
        keywords: [
          "Linux",
          "Android",
          "Windows",
          "Raspberry Pi",
          "Oracle",
          "MySQL",
        ],
      },
      {
        name: "Canvas",
        level: "",
        keywords: [
          "Visual Studio",
          "Android Studio",
          "HP Fortify Client",
          "Burp Suite",
          "Adobe Photoshop",
          "Adobe Illustrator",
        ],
      },
    ],
    languages: [],
    interests: [],
    references: [],
    projects: [
      {
        name: "SMART App",
        startDate: "",
        endDate: "",
        summary:
          "This Android app creates a 14-layer secured environment to stream videos. Users of the app are neither allowed to capture the screen nor programmatically record the video; if force recorded, it will be a blank screen. The app does not work on a rooted device or an emulator. The app won first place in the Cyber-Security Hackathon (US Consulate & LLF).",
        highlights: [
          "Created a 14-layer secured environment to stream videos",
          "Implemented screen capture prevention",
          "Won first place in the Cyber-Security Hackathon",
        ],
        url: "",
      },
      {
        name: "Stockhawk",
        startDate: "",
        endDate: "",
        summary:
          "Developed an app for the Udacity Android Developer Nanodegree program. The app helps users explore real-time stock market prices and renders time-series graphs.",
        highlights: [
          "Developed an app for the Udacity Android Developer Nanodegree program",
          "Implemented real-time stock market price exploration",
          "Rendered time-series graphs",
        ],
        url: "http://bit.ly/stockhawk",
      },
      {
        name: "Chennai Chancey Illai",
        startDate: "",
        endDate: "",
        summary:
          "Developed an app for the Udacity Android Developer Nanodegree program. The app transforms the user experience for reading news based on Material Design principles using consistent and meaningful use of UI components and surfaces.",
        highlights: [
          "Developed an app for the Udacity Android Developer Nanodegree program",
          "Transformed the user experience for reading news",
          "Implemented Material Design principles",
        ],
        url: "http://bit.ly/chennaichanceyillai",
      },
      {
        name: "SMART Signals",
        startDate: "",
        endDate: "",
        summary:
          "Developed an app that provides dynamic timing for the traffic signals using data crowdsourced from Google.",
        highlights: [
          "Developed an app that provides dynamic timing for traffic signals",
          "Utilized data crowdsourced from Google",
        ],
        url: "",
      },
      {
        name: "Traffic Sign Recognition",
        startDate: "",
        endDate: "",
        summary:
          "Trained a convolution neural network to identify traffic signs using Tensorflow as backend with an accuracy of 77%.",
        highlights: [
          "Trained a convolution neural network to identify traffic signs",
          "Used Tensorflow as the backend",
          "Achieved an accuracy of 77%",
        ],
        url: "",
      },
      {
        name: "Behavioral Cloning",
        startDate: "",
        endDate: "",
        summary:
          "Successfully cloned human driving behavior by use of Convolutional Neural Network using Keras and Tensorflow as the backend.",
        highlights: [
          "Cloned human driving behavior using Convolutional Neural Network",
          "Utilized Keras and Tensorflow as the backend",
        ],
        url: "",
      },
      {
        name: "Advanced Lane Lines",
        startDate: "",
        endDate: "",
        summary:
          "Developed a self-driving car algorithm to automatically detect lane lines using Python and OpenCV. The algorithm uses several OpenCV functions such as undistort, color transforms, gradients to find the binary threshold and determine the curvature of the lane and vehicle position with respect to the center.",
        highlights: [
          "Developed a self-driving car algorithm to automatically detect lane lines",
          "Utilized Python and OpenCV",
          "Implemented various OpenCV functions",
        ],
        url: "",
      },
    ],
  });
  const [resumeData2] = useState({
    basics: {
      name: "Sowmiya Skandan",
      label:
        "Experienced Project, Program and Partnerships Management professional",
      image: "",
      email: "sowmyaskandan@gmail.com",
      phone: "+65 8780 7190",
      url: "",
      summary:
        "Experienced Program Management, Project Management, and Partnership Management professional in the health, technology, and non-profit sectors. Experience executing large-scale projects, stakeholder relationships, client services and fundraising. Founded and operated three start-ups generating over SGD 2 million in revenues (SGD 1 million in FY22 - FY23. Volunteer fundraising track record with over SGD 1 million successfully raised in FY21-FY22 alone. Highly organised, independent and self-motivated professional. Experienced in handling multiple projects at a time and can find creative solutions to problems.",
      location: {
        address: "Singapore 416826",
        postalCode: "",
        city: "Singapore",
        countryCode: "",
        region: "",
      },
      profiles: [],
    },
    work: [
      {
        name: "Instrive Softlabs",
        position: "Head of People Operations and Administration",
        url: "",
        startDate: "July 2019",
        endDate: "Present",
        summary:
          "Co-founded a DevSecOps business and grown to 30 plus full-time members and over 20 freelancers. Directly managing a team of 10 members covering Project management, Operations, Finance and Human resources. In charge of handling multiple projects and deliverables across verticals. Enable strategic partnerships and collaborations with partner agencies for successful project implementation.",
        highlights: [
          "Handling all people and finance-related operations including recruitment, HR policies, planning, budgeting and payrolls.",
          "In charge of all strategic planning and coordination of team activities between HR, Operations and Finance.",
          "Implemented processes to ensure smooth day-to-day operations",
          "Executive team member for planning business strategy, resource allocation, deciding budgets, cost management",
          "Oversee and authorise status reports on business accounting, monthly MIS reporting and audit compliance.",
          "Enable 100% online transition of operations during Covid 19 Pandemic and now facilitating hybrid and back-to-office operations",
          "FY 2022-FY 2023 revenue exceeding SGD 1 million and profitable.",
          "Set the organization's strategic initiatives for FY 2022-FY 2023 and revenue on track to double profitably.",
          "Product owner, stakeholder management and sales in charge for the first in-house product Hydrameet. Hydrameet successfully piloted for multiple Government of India agencies.",
          "In charge of all stakeholder management and client management, including standardising communication, client presentation, contract negotiations, and customer experience.",
          "Set up a highly organised process for documentation and standardised client and employee branding and communication.",
          "Developed the and designed the learning and development plan for employee training and planned growth strategy.",
        ],
      },
      {
        name: "Rotary Club of Madras East",
        position: "Director - Community Services Health (Voluntary)",
        url: "",
        startDate: "July 2021",
        endDate: "June 2022",
        summary:
          "Successfully fund raised approximately SGD one million (USD 650,000), project managed multiple projects. The responsibilities included strategic planning of project fundraising and implementation. Actively engaged in corporate partnerships, donor management, and grant proposal development. Coordinated with multiple government bodies and corporate stakeholders to ensure project success. Collaborated with multiple fundraising bodies and media houses to create impactful fundraising strategies.",
        highlights: [
          "Healing Tiny Hearts: Project in collaboration with Apollo Children's Hospital Chennai - 500 Paediatric cardiac surgeries in children. Funds Raised: ~ USD 175,000",
          "Project Breath: Upgradation of a NICU in a Popular Children Hospital - Childs Trust Hospital - Chennai. Funds Raised: ~ USD 75,000",
          "Project Drishti: First of its kind, Indian Made - AI-enabled Assistive device for 300 visually impaired young adults. Funds Raised: ~ USD 100,000",
          "COVID Vaccination: 20,000 free doses of COVID vaccination to adults and children. Funds Raised: ~ USD 200,000",
          "Hospital Equipment Upgradation: Upgrading key equipment in two hospitals in Chennai with the aid of Cognizant Foundation. Funds Raised: ~ USD 75,000",
        ],
      },
      {
        name: "Pickled Pumpkin",
        position: "Founder and Managing Partner",
        url: "",
        startDate: "September 2015",
        endDate: "August 2018",
        summary:
          "Established one of the first subscription-based healthy food delivery startups in Chennai, India. A passionate endeavour that aimed to create a premium food service for the elite. Set up a highly organized supply chain and logistics system that could handle high stress and large variables.",
        highlights: [
          "Serviced over 2000 unique subscribers over 3 years covering the entire customer life cycle",
          "Built a list of exclusive celebrity and influencer clients using creative and bootstrapped strategies offline and digital marketing and ensured high standards of customer satisfaction.",
          "Conceived and executed a premium customer experience - from onboarding, and feedback to customer retention and loyalty programs",
          "Planned and executed the transition of the entire customer journey to a digital platform and enabled the organisation to maintain records of all transactions and reviews in real-time digitally",
          "Set the organization's strategic direction and garnered extensive coverage new coverage including all three of India's leading newspapers. Standardised all media and brand communications.",
          "Built a robust digital presence organically with real-time customer support, including chatbots across web and social media assets.",
          "Ensured consistency and quality of products delivered and set up a robust supply chain system,",
          "Partnered with leading dieticians and doctors across Chennai city and curated nutrition profile-specific meals for clients.",
          "Managing all operations, including staff and customers, sold in July 2018.",
        ],
      },
      {
        name: "Tata Institute of Social Sciences",
        position: "Project Manager: Urban Aspirations",
        url: "",
        startDate: "June 2011",
        endDate: "February 2014",
        summary:
          "Project planning and management of a large-scale international research collaboration related to the study ‘Urban Aspirations in Global Cities between TISS - Mumbai, Max Planck Institute (MPI) - Germany, Department of Social Sciences, NYU and PUKAR - Mumbai. Project value was UDS 500,000.",
        highlights: [
          "Was the single point of contact for the project and in charge of the complete project life cycle including ideation, project plan, implementation and day-to-day operations.",
          "Manage multiple projects internally that served the larger narrative of the Urban Aspirations project - like arranging workshops and knowledge exchange activities, setting up art exhibitions, and enabling strategic partnership and collaborations with other research institutes.",
          "Responsibilities included planning project deliverables in line with the project goals, daily administration, budgeting, cost management, maintaining reports, donor management and communication, procurement of equipment for setting up the Urban Repository and Media Lab and managing the Digital Archive Space.",
          "Coordinate with the various project stakeholders and identified new knowledge partners to collaborate with.",
          "Manage project finance, analyse budgets, audit compliance, cost management and account statements for TISS and MPI",
          "Identified and worked on multiple grant proposals to augment the project funding.",
        ],
      },
      {
        name: "Point of View",
        position: "Project Manager-Domestic Violence",
        url: "",
        startDate: "December 2010",
        endDate: "June 2011",
        summary:
          "Led the implementation of a large-scale project against domestic violence in Mumbai city. This project involved large-level project planning to reach out to varied audiences across Mumbai city. Creative and critically thought out outreach program planned and implemented over a period of 6 months. Project value - USD 100,000.",
        highlights: [
          "Management experience in handling a project from conception to monitoring and evaluation, finally closing the project with all the donor reports.",
          "Reached out to 4,000,000 people in Mumbai city through large-scale events, local advocacy, developing programs, grassroots community outreach, advertising campaigns, creatives, digital marketing and other online media tools",
          "Planned and displayed an awareness creation exhibit at the Khala Ghoda Arts festival, Mumbai.",
          "Led a cross-strata, multi-functional campaign to influence the audience and create awareness of the Prevention of Domestic Violence Act",
          "Active donor management including sending project progress reports, ensuring branding standards are met and appropriate media/ PR communication is sent out.",
          "Identified avenues for implementation and facilitated collaboration with partner agencies.",
        ],
      },
      {
        name: "Dhie Gifts",
        position: "Co-founder",
        url: "",
        startDate: "May 2008",
        endDate: "December 2010",
        summary:
          "Dhie was a specialty gifting company that sourced all products from Self Help Groups, Women-run cottage enterprises.",
        highlights: [
          "Collaborated with a network of SHGs and SMEs from across the country to build the supply chain network.",
          "Products procured using fair price and fair-trade practice from artisans in Egypt, Sri Lanka and India.",
          "Created a brand that worked with Socially conscious corporate clients including large businesses such as Tata group, Hyundai etc.",
          "Analyse the Gift Market in India and curated a list of niche products that fit the socially conscious buyer segment",
        ],
      },
      {
        name: "Hand in Hand",
        position: "Project Director, Health",
        url: "",
        startDate: "February 2007",
        endDate: "May 2008",
        summary:
          "Management experience of leading a 70-member team and headed the health division in over 120 Panchayats (village councils). Launched the Public health division including strategy, project planning, execution and implementation of monitoring and evaluation systems.",
        highlights: [
          "Worked with over 900 households and achieved 100% sanitation in 2 villages, employing change management and awareness creation methodologies.",
          "Created funding proposals and procured USD 90,000 grant from Pfizer.",
          "Led the first-of-its-kind Telemedicine pilot with Apollo Hospitals and Ericsson.",
          "Awarded by the Kanchipuram District Collector for work done on the Sanitation Project.",
          "Rated the second-best department in the social audit conducted by EDA Rural Systems.",
        ],
      },
    ],
    education: [
      {
        institution: "University of Leicester",
        url: "",
        area: "Molecular Pathology and Toxicology",
        studyType: "Master of Science (M.S.)",
        startDate: "July 2005",
        endDate: "June 2006",
        score: "",
        courses: [],
      },
      {
        institution: "Stella Maris College (Madras University)",
        url: "",
        area: "Plant Biology and Biotechnology",
        studyType: "Bachelor of Science (B.Sc.)",
        startDate: "August 2002",
        endDate: "June 2005",
        score: "",
        courses: [],
      },
    ],
    skills: [
      {
        name: "Fundraising",
        level: "",
        keywords: [],
      },
      {
        name: "Project Management",
        level: "",
        keywords: [],
      },
      {
        name: "Program Management",
        level: "",
        keywords: [],
      },
      {
        name: "Partnership Management",
        level: "",
        keywords: [],
      },
      {
        name: "Planning and budgeting",
        level: "",
        keywords: [],
      },
      {
        name: "Business Development",
        level: "",
        keywords: [],
      },
      {
        name: "Human Capital Management",
        level: "",
        keywords: [],
      },
      {
        name: "Recruitment",
        level: "",
        keywords: [],
      },
      {
        name: "Business Administration",
        level: "",
        keywords: [],
      },
      {
        name: "Funding Proposals",
        level: "",
        keywords: [],
      },
      {
        name: "Reporting",
        level: "",
        keywords: [],
      },
      {
        name: "Developing Programs",
        level: "",
        keywords: [],
      },
      {
        name: "Management Skills",
        level: "",
        keywords: [],
      },
      {
        name: "Managing organizations",
        level: "",
        keywords: [],
      },
      {
        name: "Microsoft Applications",
        level: "",
        keywords: [],
      },
      {
        name: "JIRA",
        level: "",
        keywords: [],
      },
      {
        name: "Confluence",
        level: "",
        keywords: [],
      },
    ],
    languages: [],
    interests: [],
    references: [],
    projects: [],
  });
  const [resumeData, setResumeData] = useState({
    basics: {
      name: "Aashish Vivekanand",
      label: "Cloud Solution Architect",
      image: "",
      email: "aashishvanand@gmail.com",
      phone: "+91 944-477-2058",
      url: "https://github.com/aashishvanand",
      summary:
        "Experienced Cloud Solution Architect with expertise in developing and implementing secure digital solutions. Skilled in network and cloud security, software development, and vulnerability assessment. Passionate about cyber-security, Android development, IoT, and machine learning. Strong problem-solving and communication skills.",
      location: {
        address: "",
        postalCode: "",
        city: "India",
        countryCode: "IN",
        region: "",
      },
      profiles: [
        {
          network: "LinkedIn",
          username: "aashishvanand",
          url: "https://linkedin.com/in/aashishvanand",
        },
      ],
    },
    work: [
      {
        name: "Trusted Services",
        position: "Cloud Solution Architect",
        url: "",
        startDate: "05/2021",
        endDate: "Current",
        summary:
          "Developed and implemented PAdES-LTA compliant digital signatures using Singpass. Singpass is a trusted digital identity for residents’ everyday secure transaction needs in Singapore.",
        highlights: [
          "Developed and implemented PAdES-LTA compliant digital signatures using Singpass",
        ],
      },
      {
        name: "Falaina",
        position: "Network & Cloud Security Specialist",
        url: "",
        startDate: "05/2019",
        endDate: "04/2021",
        summary:
          "Designed and developed Falaina Community Cloud, a serverless modern web application that is used by Customers/Internal Employees as a Ticketing, Marketing, Sales as All in one Portal. Developed Falaina mobile apps and worked on internal security audits for products/projects before delivering to customers.",
        highlights: [
          "Designed and developed Falaina Community Cloud, a serverless modern web application",
          "Developed Falaina mobile apps",
          "Worked on internal security audits for products/projects",
        ],
      },
      {
        name: "Deep Identity",
        position:
          "Software Developer (Android) & Mobile/Web Vulnerability Assessment and Penetration Tester",
        url: "",
        startDate: "01/2018",
        endDate: "04/2019",
        summary:
          "Designed and developed Data Protection Manager (DPM), an application that actively monitors users from sending sensitive data outside the device. The agent is capable of warning users if they are sending any PCI/DSS, HIPAA compliant data. The agent is also capable of blocking internet activity per-app basis after repeated warnings. The agent scans in realtime after a photo/screenshot/files that are taken/downloaded for sensitive data and reports it back.",
        highlights: [
          "Designed and developed Data Protection Manager (DPM)",
          "Implemented real-time scanning for sensitive data",
          "Developed internet activity blocking feature",
        ],
      },
    ],
    volunteer: [],
    education: [
      {
        institution: "Rajalakshmi Engineering College",
        url: "",
        area: "Computer Science & Engineering",
        studyType: "Bachelor",
        startDate: "2013-01-01",
        endDate: "2017-01-01",
        score: "",
        courses: [],
      },
    ],
    awards: [
      {
        title: "Third in Mobile App Garage 2017",
        date: "2017-01-01",
        awarder: "Daimler India Commercial Vehicles",
        summary:
          "Conducted by Daimler India Commercial Vehicles in association with CUIC (Centre for University-Industry Collaboration), Anna University",
      },
      {
        title: "First in Cyber-security Hackathon 2016",
        date: "2016-01-01",
        awarder: "US Consulate and Learning Links Foundation",
        summary:
          "Conducted by the US Consulate and Learning Links Foundation across India",
      },
      {
        title: "First in Connect 2015 and Connect 2016",
        date: "",
        awarder: "Confederation of Indian Industry",
        summary: "Hackathons organized by the Confederation of Indian Industry",
      },
      {
        title: "SmartSignals - The best project at the state level",
        date: "",
        awarder: "International Society for Scientific Research & Development",
        summary:
          "Organized by the International Society for Scientific Research & Development",
      },
    ],
    certificates: [],
    publications: [
      {
        name: "Inventory Transparency for Agricultural Produce through IoT",
        publisher: "CAMME2017",
        releaseDate: "2017-01-01",
        url: "",
        summary:
          "Co-authored with Dr.Srinivasan SP and Mrs. Sorna Shanthi. Presented at CAMME2017, Bangkok (International Conference on Aerospace Mechanical and Mechatronics Engineering)",
      },
    ],
    skills: [
      {
        name: "Programming",
        level: "",
        keywords: [
          "Java",
          "Xamarin",
          "React",
          "Typescript",
          "Python",
          "PHP",
          "PL/SQL",
          "Mongo",
          "C",
          "C++",
        ],
      },
      {
        name: "Platform",
        level: "",
        keywords: [
          "Linux",
          "Android",
          "Windows",
          "Raspberry Pi",
          "Oracle",
          "MySQL",
        ],
      },
      {
        name: "Canvas",
        level: "",
        keywords: [
          "Visual Studio",
          "Android Studio",
          "HP Fortify Client",
          "Burp Suite",
          "Adobe Photoshop",
          "Adobe Illustrator",
        ],
      },
    ],
    languages: [],
    interests: [],
    references: [],
    projects: [
      {
        name: "SMART App",
        startDate: "",
        endDate: "",
        summary:
          "This Android app creates a 14-layer secured environment to stream videos. Users of the app are neither allowed to capture the screen nor programmatically record the video; if force recorded, it will be a blank screen. The app does not work on a rooted device or an emulator. The app won first place in the Cyber-Security Hackathon (US Consulate & LLF).",
        highlights: [
          "Created a 14-layer secured environment to stream videos",
          "Implemented screen capture prevention",
          "Won first place in the Cyber-Security Hackathon",
        ],
        url: "",
      },
      {
        name: "Stockhawk",
        startDate: "",
        endDate: "",
        summary:
          "Developed an app for the Udacity Android Developer Nanodegree program. The app helps users explore real-time stock market prices and renders time-series graphs.",
        highlights: [
          "Developed an app for the Udacity Android Developer Nanodegree program",
          "Implemented real-time stock market price exploration",
          "Rendered time-series graphs",
        ],
        url: "http://bit.ly/stockhawk",
      },
      {
        name: "Chennai Chancey Illai",
        startDate: "",
        endDate: "",
        summary:
          "Developed an app for the Udacity Android Developer Nanodegree program. The app transforms the user experience for reading news based on Material Design principles using consistent and meaningful use of UI components and surfaces.",
        highlights: [
          "Developed an app for the Udacity Android Developer Nanodegree program",
          "Transformed the user experience for reading news",
          "Implemented Material Design principles",
        ],
        url: "http://bit.ly/chennaichanceyillai",
      },
      {
        name: "SMART Signals",
        startDate: "",
        endDate: "",
        summary:
          "Developed an app that provides dynamic timing for the traffic signals using data crowdsourced from Google.",
        highlights: [
          "Developed an app that provides dynamic timing for traffic signals",
          "Utilized data crowdsourced from Google",
        ],
        url: "",
      },
      {
        name: "Traffic Sign Recognition",
        startDate: "",
        endDate: "",
        summary:
          "Trained a convolution neural network to identify traffic signs using Tensorflow as backend with an accuracy of 77%.",
        highlights: [
          "Trained a convolution neural network to identify traffic signs",
          "Used Tensorflow as the backend",
          "Achieved an accuracy of 77%",
        ],
        url: "",
      },
      {
        name: "Behavioral Cloning",
        startDate: "",
        endDate: "",
        summary:
          "Successfully cloned human driving behavior by use of Convolutional Neural Network using Keras and Tensorflow as the backend.",
        highlights: [
          "Cloned human driving behavior using Convolutional Neural Network",
          "Utilized Keras and Tensorflow as the backend",
        ],
        url: "",
      },
      {
        name: "Advanced Lane Lines",
        startDate: "",
        endDate: "",
        summary:
          "Developed a self-driving car algorithm to automatically detect lane lines using Python and OpenCV. The algorithm uses several OpenCV functions such as undistort, color transforms, gradients to find the binary threshold and determine the curvature of the lane and vehicle position with respect to the center.",
        highlights: [
          "Developed a self-driving car algorithm to automatically detect lane lines",
          "Utilized Python and OpenCV",
          "Implemented various OpenCV functions",
        ],
        url: "",
      },
    ],
  });

  const [resumeData3] = useState({
    basics: {
      name: "Karthikeyan D",
      label: "Full Stack Developer",
      image: "",
      email: "karthikeyandias@gmail.com",
      phone: "+91-7010543395",
      url: "",
      summary:
        "Experienced full stack developer with expertise in React JS, Node JS, .NET technologies, and SQL Server. Skilled in end-to-end development of software products, team management, and communication. Holds a Bachelor of Computer Science and Engineering from Anna University, Chennai.",
      location: {
        address: "No 32, RajeswariNagar,L.R Palayam",
        postalCode: "607106",
        city: "Panruti",
        countryCode: "IN",
        region: "Tamil Nadu",
      },
      profiles: [],
    },
    work: [
      {
        name: "Instrive Softlabs Pvt Ltd",
        position: "Senior Software Developer",
        url: "",
        startDate: "06/2021",
        endDate: "",
        summary:
          "Working as a senior software developer, responsible for end-to-end development of software products, team management, and resolving complex software issues.",
        highlights: [],
      },
      {
        name: "Aroopa Technologies Pvt Ltd",
        position: "Software Developer (Full Stack)",
        url: "",
        startDate: "01/2020",
        endDate: "05/2021",
        summary:
          "Worked as a software developer, responsible for full stack web development using React JS, Node JS, and other technologies.",
        highlights: [],
      },
      {
        name: "4C IT Services Pvt Ltd",
        position: "Junior Software Developer",
        url: "",
        startDate: "08/2013",
        endDate: "07/2019",
        summary:
          "Worked as a junior software developer, involved in the development of software applications using .NET technologies.",
        highlights: [],
      },
    ],
    volunteer: [],
    education: [
      {
        institution:
          "Surya Group of Institutions, School of Engineering and Technology",
        url: "",
        area: "Computer Science and Engineering",
        studyType: "Bachelor",
        startDate: "2009",
        endDate: "2013",
        score: "7.17",
        courses: [],
      },
    ],
    awards: [],
    certificates: [],
    publications: [
      {
        name: "Towards Secure And Storage Services In Cloud Computing Using Watermarking Without Third Party",
        publisher:
          "International Conference On Computing And Control Engineering",
        releaseDate: "April 2012",
        url: "",
        summary: "",
      },
      {
        name: "Autonomous navigation and Tele-operations in robots using machine learning",
        publisher: "International Journal of Computer Applications",
        releaseDate: "February 2013",
        url: "",
        summary: "",
      },
      {
        name: "Autonomous navigation and Tele-operations in robots using swarm intelligence",
        publisher:
          "National conference on Advance Computer and Information technology",
        releaseDate: "April 2013",
        url: "",
        summary: "",
      },
    ],
    skills: [
      {
        name: "React JS",
        level: "",
        keywords: [],
      },
      {
        name: "Node JS",
        level: "",
        keywords: [],
      },
      {
        name: "Flutter",
        level: "",
        keywords: [],
      },
      {
        name: "Firebase",
        level: "",
        keywords: [],
      },
      {
        name: ".NET",
        level: "",
        keywords: [],
      },
      {
        name: "C#.NET",
        level: "",
        keywords: [],
      },
      {
        name: "Java",
        level: "",
        keywords: [],
      },
      {
        name: "JavaScript",
        level: "",
        keywords: [],
      },
      {
        name: "HTML",
        level: "",
        keywords: [],
      },
      {
        name: "CSS",
        level: "",
        keywords: [],
      },
      {
        name: "XML",
        level: "",
        keywords: [],
      },
      {
        name: "SQL Server",
        level: "",
        keywords: [],
      },
      {
        name: "MongoDB",
        level: "",
        keywords: [],
      },
      {
        name: "PostgresSQL",
        level: "",
        keywords: [],
      },
      {
        name: "Visual Studio",
        level: "",
        keywords: [],
      },
      {
        name: "Visual Studio Code",
        level: "",
        keywords: [],
      },
    ],
    languages: [
      {
        language: "Tamil",
        fluency: "",
      },
      {
        language: "English",
        fluency: "",
      },
    ],
    interests: [],
    references: [],
    projects: [
      {
        name: "SFE",
        startDate: "",
        endDate: "",
        summary:
          "Worked as a front-end developer in this project. Developed an online learning platform based on SSO using React JS. Implemented various authentication methods and certificate generation.",
        highlights: [],
        url: "",
      },
      {
        name: "SmartFutures",
        startDate: "",
        endDate: "",
        summary:
          "Worked as a front-end developer in this project. Converted an existing website to a responsive React website using Bootstrap-react.",
        highlights: [],
        url: "",
      },
      {
        name: "GmdShipyard",
        startDate: "",
        endDate: "",
        summary:
          "Worked as a front-end developer in this project. Developed an application to monitor and capture employee's productivity using React, Redux, Redux-thunk, Ag-Grid, and SQL Server.",
        highlights: [],
        url: "",
      },
      {
        name: "Epoch Lending",
        startDate: "",
        endDate: "",
        summary:
          "Worked as a full stack developer and team leader in this project. Developed a role-based management tool for Epoch Lending using React, Redux-thunk, Node.js, and MongoDB.",
        highlights: [],
        url: "",
      },
      {
        name: "Medallion Enterprises",
        startDate: "",
        endDate: "",
        summary:
          "Worked as a full stack developer and team leader in this project. Developed a shipment management tool for Medallion Enterprises using React, Redux-thunk, Node.js, PostgresSQL, and QuickBooks.",
        highlights: [],
        url: "",
      },
    ],
  });
  const [resumeData4] = useState({
    basics: {
      name: "Bharathraj Elangovan",
      label: "Full Stack Developer",
      image: "",
      email: "ebraj1996@gmail.com",
      phone: "(91)909 503 8910",
      url: "",
      summary:
        "Experienced Full Stack Developer with expertise in Flutter, REST API Development, JWT-based authentication, backend development, and database handling. Skilled in problem-solving and project management. Holds a Bachelor's degree in Mechatronics from Bannari Amman Institute of Technology.",
      location: {
        address: "",
        postalCode: "",
        city: "Chennai",
        countryCode: "IN",
        region: "Tamil Nadu",
      },
      profiles: [],
    },
    work: [
      {
        name: "Instrive Softlabs Pvt Limited",
        position: "Software Developer (Flutter)",
        url: "",
        startDate: "06/2021",
        endDate: "Present",
        summary:
          "Engineered modern applications for Android, iOS, and web using Flutter. Deployed and integrated software engineered by the team and improved continuous integration practices.",
        highlights: [],
      },
      {
        name: "Freelancer",
        position: "Full Stack Developer",
        url: "",
        startDate: "11/2020",
        endDate: "06/2021",
        summary:
          "Worked with a team of designers to develop custom PHP & MySQL CMS for Grammy award songwriter Bruce Carroll. Customized eCommerce programs for retail and B2B businesses.",
        highlights: [],
      },
      {
        name: "Bannari Amman Institute of Technology",
        position: "Full Stack Developer",
        url: "",
        startDate: "06/2018",
        endDate: "11/2020",
        summary:
          "Developed cross-platform applications (Web/Android/iOS) using Flutter and PHP. Managed public server, database, projects, and domain.",
        highlights: [],
      },
    ],
    volunteer: [],
    education: [
      {
        institution: "Bannari Amman Institute of Technology",
        url: "",
        area: "Mechatronics",
        studyType: "Bachelor",
        startDate: "2014",
        endDate: "2018",
        score: "7.45",
        courses: [],
      },
      {
        institution: "Sri Venkateshwara Vidhyalaya Higher Secondary School",
        url: "",
        area: "12th",
        studyType: "",
        startDate: "2012",
        endDate: "2014",
        score: "93%",
        courses: [],
      },
      {
        institution: "Sri Venkateshwara Vidhyalaya Higher Secondary School",
        url: "",
        area: "10th",
        studyType: "",
        startDate: "2012",
        endDate: "2014",
        score: "92.8%",
        courses: [],
      },
    ],
    awards: [],
    certificates: [],
    publications: [
      {
        name: "Responsive UI — Flutter Package",
        publisher: "Pub.dev",
        releaseDate: "",
        url: "https://pub.dev/packages/responsive_ui",
        summary:
          "Flutter package for creating responsive widgets on Android, iOS, and Web.",
      },
      {
        name: "Recaptcha V3 — Flutter Package",
        publisher: "Pub.dev",
        releaseDate: "",
        url: "https://pub.dev/packages/g_recaptcha_v3",
        summary: "Flutter package for implementing Recaptcha V3.",
      },
    ],
    skills: [
      {
        name: "Flutter",
        level: "",
        keywords: [],
      },
      {
        name: "Android (Java)",
        level: "",
        keywords: [],
      },
      {
        name: "PHP (Core)",
        level: "",
        keywords: [],
      },
      {
        name: "Node.js",
        level: "",
        keywords: [],
      },
      {
        name: "Golang",
        level: "",
        keywords: [],
      },
      {
        name: "MySQL",
        level: "",
        keywords: [],
      },
      {
        name: "Git",
        level: "",
        keywords: [],
      },
      {
        name: "Github Workflow",
        level: "",
        keywords: [],
      },
      {
        name: "Progressive Web Apps",
        level: "",
        keywords: [],
      },
      {
        name: "Firebase",
        level: "",
        keywords: [],
      },
      {
        name: "Cloud Functions",
        level: "",
        keywords: [],
      },
      {
        name: "SEO",
        level: "",
        keywords: [],
      },
      {
        name: "Socket.io",
        level: "",
        keywords: [],
      },
    ],
    languages: [
      {
        language: "Tamil",
        fluency: "S/R/W",
      },
      {
        language: "English",
        fluency: "S/R/W",
      },
    ],
    interests: [
      {
        name: "Mobile App Development",
      },
      {
        name: "Rest API Development",
      },
    ],
    references: [],
    projects: [
      {
        name: "HydraMeet (Multi-Platform Support)",
        startDate: "",
        endDate: "",
        summary: "An on-the-go video-conferencing application.",
        highlights: [],
        url: "https://hydrameet.com/",
      },
      {
        name: "Gigavus",
        startDate: "",
        endDate: "",
        summary: "A social media application.",
        highlights: [],
        url: "https://play.google.com/store/apps/details?id=com.gigavus&hl=en&gl=US",
      },
      {
        name: "Institution App",
        startDate: "",
        endDate: "",
        summary:
          "In-house app for college activities, including web access, campus portal, blog, bus tracking, and notifications.",
        highlights: [],
        url: "https://play.google.com/store/apps/details?id=bitsathy.apps_bitsathy",
      },
      {
        name: "Lab Profile",
        startDate: "",
        endDate: "",
        summary:
          "A site for the special lab representing objectives, monthly activities, and projects.",
        highlights: [],
        url: "https://adc.bitsathy.ac.in",
      },
      {
        name: "Action Plan",
        startDate: "",
        endDate: "",
        summary:
          "An in-house web app to maintain and review faculty publications-related activities with report generation.",
        highlights: [],
        url: "https://adc.bitsathy.ac.in/projects/action-plan",
      },
      {
        name: "TRACK 247 [Work management App]",
        startDate: "",
        endDate: "",
        summary:
          "A QR code scan-based application to create and maintain work schedules for workers in a company with face capture security features.",
        highlights: [],
        url: "[private]",
      },
      {
        name: "Aero Design Challenge 2021",
        startDate: "",
        endDate: "",
        summary:
          "A web application for participants to register for the event, view announcements, scoreboard, and apply workshops in the competition with the admin control panel.",
        highlights: [],
        url: "http://adc.saeiss.org",
      },
      {
        name: "Stock Manager",
        startDate: "",
        endDate: "",
        summary:
          "A Flutter-based web application for maintaining and managing product stocks in a company.",
        highlights: [],
        url: "https://demo-app.sriranganoilmill.com, https://sriranganoilmill.com",
      },
      {
        name: "School Website",
        startDate: "",
        endDate: "",
        summary:
          "A progressive web application for The Camford International School with an integrated payment gateway and Notebook delivery app.",
        highlights: [],
        url: "https://thecamford.org/, https://pay.thecamford.org/",
      },
    ],
  });
  const [resumeData5] = useState({
    basics: {
      name: "Deepak Kumar Rajendran",
      label: "React JS Developer",
      image: "",
      email: "kumard312@gmail.com",
      phone: "+917010072734",
      url: "",
      summary:
        "Over 4.6 years of IT experience which includes 2+ years of Extensive experience as a React JS Developer and 2 years of Experience as an Angular 10+.",
      location: {
        address: "",
        postalCode: "",
        city: "",
        countryCode: "",
        region: "",
      },
      profiles: [],
    },
    work: [
      {
        name: "Iyangaran Software Pvt Ltd",
        position: "Angular Developer",
        url: "",
        startDate: "01/2018",
        endDate: "08/2019",
        summary:
          "Worked as a remote source to the Caveonix project, developing the Angular part using the latest Angular version and JavaScript libraries. Reviewed application requirements and interface designs.",
        highlights: [
          "Delivered data from the Backend to frontend through ag-grid",
          "Worked on D3 chart",
        ],
      },
      {
        name: "Instrive Soft labs Pvt Ltd",
        position: "Senior Software Engineer",
        url: "",
        startDate: "08/2019",
        endDate: "Current",
        summary:
          "Developed compatible User Interface functionality using Angular and other libraries for the Perks Vision project. Also worked on the E-Voting, HydraMeet, Gaius, and Proxtera projects, handling UI development, backend development, troubleshooting, and API services.",
        highlights: [
          "Delivered data from the Backend to frontend through ngx-table",
          "Worked on Auth flow (Sign-In, Sign-Up, AUTH Guard, Role Guard)",
          "Managed MongoDB",
          "Monitoring and improving front-end performance",
          "Worked on Redux for storing the data from API and managing all the service files and reusable components",
        ],
      },
    ],
    volunteer: [],
    education: [
      {
        institution: "VELLYAN CHETTIYAR HR SECONDARY SCHOOL",
        url: "",
        area: "",
        studyType: "S.S.L.C.",
        startDate: "2009",
        endDate: "",
        score: "59%",
        courses: [],
      },
      {
        institution: "SRI SAI RAM POLYTECHNIC COLLEGE",
        url: "",
        area: "Electronics & Communication Engineering",
        studyType: "DIPLOMA",
        startDate: "2012",
        endDate: "",
        score: "66%",
        courses: [],
      },
      {
        institution: "SRI SAI RAM INSTITUTE OF TECHNOLOGY",
        url: "",
        area: "Electronics & Communication Engineering",
        studyType: "B.E.",
        startDate: "2013",
        endDate: "2016",
        score: "61%",
        courses: [],
      },
    ],
    awards: [],
    certificates: [],
    publications: [],
    skills: [
      {
        name: "React JS",
        level: "",
        keywords: [],
      },
      {
        name: "Angular 10+",
        level: "",
        keywords: [],
      },
      {
        name: "Node JS",
        level: "",
        keywords: [],
      },
      {
        name: "MongoDB",
        level: "",
        keywords: [],
      },
      {
        name: "HTML5",
        level: "",
        keywords: [],
      },
      {
        name: "CSS3",
        level: "",
        keywords: [],
      },
      {
        name: "JavaScript",
        level: "",
        keywords: [],
      },
      {
        name: "GitHub",
        level: "",
        keywords: [],
      },
      {
        name: "Bitbucket",
        level: "",
        keywords: [],
      },
      {
        name: "Jira",
        level: "",
        keywords: [],
      },
      {
        name: "Linux",
        level: "",
        keywords: [],
      },
      {
        name: "Windows",
        level: "",
        keywords: [],
      },
    ],
    languages: [],
    interests: [],
    references: [],
    projects: [],
  });
  const handleChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value === 1) {
      setResumeData(resumeData1);
    } else if (event.target.value === 2) {
      setResumeData(resumeData2);
    } else if (event.target.value === 3) {
      setResumeData(resumeData3);
    } else if (event.target.value === 4) {
      setResumeData(resumeData4);
    } else if (event.target.value === 5) {
      setResumeData(resumeData5);
    }
  };
  // useEffect(() => {
  //   setResumeData(resumeData1);
  //   setName(1);
  // }, []);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Resume</title>
        {/* <link
          rel='stylesheet'
          href='https://www.w3schools.com/w3css/4/w3.css/'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        /> */}
      </Helmet>
      <Box sx={{ display: "flex", width: "100%" }} className={classes.root}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "97vh",
            width: 1,
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            mb: 16,
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 3, mb: 4 }}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Resume
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={name}
                    label="Select Resume"
                    onChange={handleChangeName}
                  >
                    <MenuItem value={1}>Aashish Vivekanand </MenuItem>
                    <MenuItem value={4}>Bharathraj E</MenuItem>
                    <MenuItem value={5}>Deepak Kumar R</MenuItem>
                    <MenuItem value={2}>Sowmiya Skandan</MenuItem>
                    <MenuItem value={3}>Karthikeyan D</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    variant="scrollable"
                    scrollButtons="auto"
                  >
                    <Tab label="Basic Info" value="1" />
                    <Tab label="Location" value="2" />
                    <Tab label="Work Experiance" value="3" />
                    <Tab label="Education" value="4" />
                    <Tab label="Publications" value="5" />
                    <Tab label="Awards" value="6" />
                    <Tab label="Skills" value="7" />
                    <Tab label="Projects" value="8" />
                    <Tab label="Resume" value="9" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  {" "}
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                      <TextField
                        sx={{ my: 2 }}
                        fullWidth
                        value={resumeData?.basics?.name}
                        label="Full Name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        sx={{ my: 2 }}
                        fullWidth
                        value={resumeData?.basics?.label}
                        label="Designation"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        sx={{ my: 2 }}
                        fullWidth
                        value={resumeData?.basics?.email}
                        label="Email"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        sx={{ my: 2 }}
                        fullWidth
                        value={resumeData?.basics?.phone}
                        label="Phone"
                      />
                    </Grid>
                    {/* <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        sx={{ my: 2 }}
                        fullWidth
                        value={resumeData?.basics?.phone}
                        label="Phone"
                      />
                    </Grid> */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <TextField
                        sx={{ my: 2 }}
                        fullWidth
                        value={resumeData?.basics?.url}
                        label="Url"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <TextField
                        multiline
                        minRows={2}
                        maxRows={3}
                        sx={{ my: 2 }}
                        fullWidth
                        value={resumeData?.basics?.summary}
                        label="Summary"
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value="2">
                  {" "}
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                      <TextField
                        sx={{ my: 2 }}
                        fullWidth
                        value={resumeData?.basics?.location?.address}
                        label="address"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        sx={{ my: 2 }}
                        fullWidth
                        value={resumeData?.basics?.location?.city}
                        label="City"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        sx={{ my: 2 }}
                        fullWidth
                        value={resumeData?.basics?.location?.region}
                        label="Region"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TextField
                        sx={{ my: 2 }}
                        fullWidth
                        value={resumeData?.basics?.location?.postalCode}
                        label="Postal Code"
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value="3">
                  {" "}
                  {resumeData?.work?.map((e) => (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.name}
                          label="Company Name"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.position}
                          label="position"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.startDate}
                          label="Start Date"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.endDate}
                          label="End Date"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                          sx={{ my: 2 }}
                          multiline
                          minRows={2}
                          maxRows={4}
                          fullWidth
                          value={e?.summary}
                          label="Summary"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                          sx={{ my: 2 }}
                          multiline
                          minRows={2}
                          maxRows={8}
                          fullWidth
                          value={e?.highlights}
                          label="Highlights"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        sx={{ my: 2 }}
                      >
                        <Divider variant="fullWidth" />
                      </Grid>
                    </Grid>
                  ))}
                </TabPanel>
                <TabPanel value="4">
                  {" "}
                  {resumeData?.education?.map((e) => (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.institution}
                          label="Institution"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.area}
                          label="Stream"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.studyType}
                          label="Study Type"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.startDate}
                          label="Start Date"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.endDate}
                          label="End Date"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.score}
                          label="Score"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        sx={{ my: 2 }}
                      >
                        <Divider variant="fullWidth" />
                      </Grid>
                    </Grid>
                  ))}
                </TabPanel>
                <TabPanel value="5">
                  {" "}
                  {resumeData?.publications?.map((e) => (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.name}
                          label="Name"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.publisher}
                          label="Publisher"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.releaseDate}
                          label="Release Date"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.url}
                          label="Url"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                          multiline
                          maxRows={2}
                          minRows={4}
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.summary}
                          label="summary"
                        />
                      </Grid>
                      {/*  */}

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        sx={{ my: 2 }}
                      >
                        <Divider variant="fullWidth" />
                      </Grid>
                    </Grid>
                  ))}
                </TabPanel>

                <TabPanel value="6">
                  {" "}
                  {resumeData?.awards?.map((e) => (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.title}
                          label="Title"
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.awarder}
                          label="Awarder"
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.date}
                          label="Date"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                          multiline
                          maxRows={2}
                          minRows={4}
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.summary}
                          label="Summary"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        sx={{ my: 2 }}
                      >
                        <Divider variant="fullWidth" />
                      </Grid>
                    </Grid>
                  ))}
                </TabPanel>
                <TabPanel value="7">
                  {" "}
                  {resumeData?.skills?.map((e) => (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.name}
                          label="Skill Category"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Autocomplete
                          multiple
                          limitTags={2}
                          sx={{ my: 2, width: "500px" }}
                          id="multiple-limit-tags"
                          options={e?.keywords}
                          getOptionLabel={(option) => option}
                          value={e?.keywords}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Skills"
                              placeholder="Skill(s)"
                            />
                          )}
                          // sx={{}}
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        sx={{ my: 2 }}
                      >
                        <Divider variant="fullWidth" />
                      </Grid>
                    </Grid>
                  ))}
                </TabPanel>
                <TabPanel value="8">
                  {" "}
                  {resumeData?.projects?.map((e) => (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.name}
                          label="Project Name"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                          multiline
                          minRows={2}
                          maxRows={4}
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.summary}
                          label="Summary"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.highlights}
                          label="Highlights"
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.startDate}
                          label="Start Date"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          sx={{ my: 2 }}
                          fullWidth
                          value={e?.endDate}
                          label="End Date"
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        sx={{ my: 2 }}
                      >
                        <Divider variant="fullWidth" />
                      </Grid>
                    </Grid>
                  ))}
                </TabPanel>
                <TabPanel value="9">
                  {" "}
                  {/* <div class='w3-light-grey'> */}
                  <div
                    class="w3-content w3-margin-top"
                    style={{ maxWidth: "1400px" }}
                  >
                    <div class="w3-row-padding">
                      <div class="w3-third">
                        <div class="w3-white w3-text-grey w3-card-4">
                          {/* <div class='w3-display-container'>
                              <img
                                src='/w3images/avatar_hat.jpg'
                                style={{ width: '100%' }}
                                alt='Avatar'
                              />
                              <div class='w3-display-bottomleft w3-container w3-text-black'>
                                <h2>Jane Doe</h2>
                              </div>
                            </div> */}
                          <div class="w3-container">
                            <p>
                              <i class="fa fa-user fa-fw w3-margin-right w3-large w3-text-teal"></i>
                              {resumeData?.basics?.name}
                            </p>
                            <p>
                              <i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                              {resumeData?.basics?.label}
                            </p>
                            <p>
                              <i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                              {resumeData?.basics?.location?.region}{" "}
                              {resumeData?.basics?.location?.city}
                            </p>
                            <p>
                              <i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                              {resumeData?.basics?.email}
                            </p>
                            <p>
                              <i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                              {resumeData?.basics?.phone}
                            </p>
                            <hr />

                            <p class="w3-large">
                              <b>
                                <i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
                                Skills
                              </b>
                            </p>
                            {resumeData?.skills?.map((e) => (
                              <div>
                                <p>{e?.name}</p>
                                <div class="w3-light-grey w3-round-xlarge w3-small">
                                  <div
                                    class="w3-container w3-center w3-round-xlarge w3-teal"
                                    style={{ width: "90%" }}
                                  >
                                    90%
                                  </div>
                                </div>
                              </div>
                            ))}

                            <br />

                            <p class="w3-large w3-text-theme">
                              <b>
                                <i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
                                Languages
                              </b>
                            </p>
                            <p>English</p>
                            <div class="w3-light-grey w3-round-xlarge">
                              <div
                                class="w3-round-xlarge w3-teal"
                                style={{ height: "24px", width: "100%" }}
                              ></div>
                            </div>
                            <p>Spanish</p>
                            <div class="w3-light-grey w3-round-xlarge">
                              <div
                                class="w3-round-xlarge w3-teal"
                                style={{
                                  height: "24px",
                                  width: "55%",
                                }}
                              ></div>
                            </div>
                            <p>German</p>
                            <div class="w3-light-grey w3-round-xlarge">
                              <div
                                class="w3-round-xlarge w3-teal"
                                style={{ height: "24px", width: "25%" }}
                              ></div>
                            </div>
                            <br />
                          </div>
                        </div>
                        <br />
                      </div>

                      <div class="w3-twothird">
                        <div class="w3-container w3-card w3-white w3-margin-bottom">
                          <h2 class="w3-text-grey w3-padding-16">
                            <i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                            Work Experience
                          </h2>
                          {resumeData?.work?.map((e) => (
                            <div>
                              <div class="w3-container">
                                <h5 class="w3-opacity">
                                  {e?.name}
                                  <b></b>
                                </h5>
                                <h6 class="w3-text-teal">
                                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>
                                  {e?.startDate} -{" "}
                                  <span class="w3-tag w3-teal w3-round">
                                    {e?.endDate}
                                  </span>
                                </h6>
                                <p>{e?.summary}</p>
                                <hr />
                              </div>
                            </div>
                          ))}
                          <h2 class="w3-text-grey w3-padding-16">
                            <i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                            Projects
                          </h2>
                          {resumeData?.projects?.map((e) => (
                            <div>
                              <div class="w3-container">
                                <h5 class="w3-opacity">
                                  {e?.name}
                                  <b></b>
                                </h5>
                                <h6 class="w3-text-teal">
                                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>
                                  {e?.startDate} -{" "}
                                  <span class="w3-tag w3-teal w3-round">
                                    {e?.endDate}
                                  </span>
                                </h6>
                                <p>{e?.summary}</p>
                                <hr />
                              </div>
                            </div>
                          ))}
                          <h2 class="w3-text-grey w3-padding-16">
                            <i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                            Publications
                          </h2>
                          {resumeData?.publications?.map((e) => (
                            <div>
                              <div class="w3-container">
                                <h5 class="w3-opacity">
                                  {e?.name}
                                  <b></b>
                                </h5>
                                <p>{e?.publisher}</p>
                                {/* <p>{e?.summary}</p> */}

                                <h6 class="w3-text-teal">
                                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>
                                  {e?.releaseDate}
                                </h6>
                                <p>{e?.summary}</p>
                                <hr />
                              </div>
                            </div>
                          ))}
                          <div class="w3-container w3-card w3-white">
                            <h2 class="w3-text-grey w3-padding-16">
                              <i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                              Education
                            </h2>
                            {resumeData?.education?.map((e) => (
                              <div class="w3-container">
                                <h5 class="w3-opacity">
                                  <b>{e?.institution}</b>
                                </h5>
                                <p>{e?.area}</p>
                                <p>{e?.studyType}</p>
                                <h6 class="w3-text-teal">
                                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>
                                  {e?.startDate} - {e?.endDate}
                                </h6>
                                <hr />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <footer class="w3-container w3-teal w3-center w3-margin-top">
                      <p>Find me on social media.</p>
                      <i class="fa fa-facebook-official w3-hover-opacity"></i>
                      <i class="fa fa-instagram w3-hover-opacity"></i>
                      {/* <i class='fa fa-snapchat w3-hover-opacity'></i> */}
                      {/* <i class='fa fa-pinterest-p w3-hover-opacity'></i> */}
                      <i class="fa fa-twitter w3-hover-opacity"></i>
                      <i class="fa fa-linkedin w3-hover-opacity"></i>
                      <p>
                        Powered by{" "}
                        <a
                          // eslint-disable-next-line
                          href={
                            "https://elite-app-b6282.firebaseapp.com/seeker"
                          }
                          // eslint-disable-next-line
                          target="_blank"
                          rel="noreferrer"
                        >
                          karthikeyan.d@instrive.in
                        </a>
                      </p>
                    </footer>
                  </div>
                </TabPanel>
              </TabContext>
            </Box>
          </Container>
        </Box>
      </Box>
    </HelmetProvider>
  );
}

export default DashBoard;
