import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube, LinkedIn, GitHub, Call } from "@mui/icons-material"

export const navlink = [
    {
        url: "/",
        text: "Home",
    },
    {
        url: "/about",
        text: "About",
    },

    {
        url: "/services",
        text: "Services",
    },
    {
        url: "/technology",
        text: "Technology"
    },
    {
        url: "/portfolio",
        text: "Portfolio",
    },
    {
        url: "/testimonials",
        text: "Testimonials",
    },
    {
        url: "/contact",
        text: "Contact",
    },
]
export const home = [
    {
        text: "HELLO I'M",
        name: "ROGER BAPTISTE",
        post: "A SOFTWARE ENGINEER",
        design: "A FULLSTACK DEVELOPER",
        desc: "Empowering innovation through code and collaboration. My mission is to craft exceptional software solutions that simplify complexities, inspire creativity, and elevate user experiences. With a passion for problem-solving and a commitment to continuous improvement, striving to build reliable, scalable, and intuitive applications that empower businesses and individuals alike, leaving a lasting mark on the digital frontier.",
    },
]
export const about = [
    {
        desc: "✌🏿 Hey there! Appreciate you checking out my page. My name is Roger and I am a Full Stack Developer with a unique journey into the world of coding. It all started out of curiosity, as I was fascinated by how the web works. That initial spark of interest led me on an exciting path of exploration and learning, which eventually brought me to the dynamic realm of software development. With a background in mortgage, banking, and finance, I blend my domain expertise with my love for solving puzzles through code. Constantly embracing new challenges and technologies, I hope to learn a lot more and help grow long lasting relationships and connections through fintech services and solutions.",
        desc1: "When I am not coding, I enjoy playing basketball, video games, cooking, and educating/mentoring youth on financial literacy and career paths.",
        cover: "./images/man.png",
    },
]

export const technology = [
    {
        id: 1,
        icon: <Settings />
    },
]

export const services = [
    {
        id: 1,
        icon: <Settings />,
        title: "Creative Design ",
        desc: "Build your dream website from start to finish! I handle everything, making sure your site looks great and works seamlessly.",
    },
    {
        id: 2,
        icon: <CropRotate />,
        title: "Smooth Data Handling",
        desc: "No more worries about storing and organizing data! It's my mission to set up a perfect system to keep your information safe and accessible.",
    },
    {
        id: 3,
        icon: <ViewInAr />,
        title: "Responsive Design",
        desc: "Your website works like a charm! Seamless coordination between design and functionality is ensured.",
    },
    {
        id: 4,
        icon: <PieChart />,
        title: "Seamless Server Setup",
        desc: "Leave the technical stuff to me! I'll get your website live and running smoothly on the right servers.",
    },
    {
        id: 5,
        icon: <Code />,
        title: "Connect and Communicate with Ease",
        desc: "Make your website talk to other apps effortlessly! I can create a seamless connection for easy data sharing.",
    },
    {
        id: 6,
        icon: <BarChart />,
        title: "Reliable Support and Maintenance",
        desc: "WI've got your back! My goal is to fix issues and keep your website running smoothly.",
    },
]
export const project = [
    {
        id: 1,
        icon: <CloudOutlined />,
        num: "89",
        title: "HAPPY CLIENTS",
    },
    {
        id: 2,
        icon: <FavoriteBorder />,
        num: "131",
        title: "PROJECTS COMPLETED",
    },
    {
        id: 3,
        icon: <Public />,
        num: "108",
        title: "FILES DOWNLOADED",
    },
    {
        id: 4,
        icon: <PersonOutlined />,
        num: "1549",
        title: "LINES OF CODE",
    },
]
export const portfolio = [
    {
        id: 1,
        cover: "../images/port/port1.jpg",
        name: "",
        category: "development",
        title: <a href="https://github.com/rogerbaptiste/trezo_project">
            <p>Trezo: Budget App</p>
        </a>
    },
    {
        id: 2,
        cover: "../images/port/demo.jpeg",
        name: "",
        category: "development",
        title: <a href="https://github.com/Eleanaortega/DojoGroupProject">
            <p>ChatMe: Realtime Chat Messaging App</p>
        </a>
    },
    {
        id: 3,
        cover: "../images/port/port3.jpg",
        name: "",
        category: "Mobile Application",
        title: "Coming Soon: iOS Bible Trivia App",
    },

]
export const testimonials = [
    {
        id: 1,
        text: "Roger was a pro! He created a stunning website for our business, surpassing all our expectations. His expertise and responsiveness made the process stress-free. Highly recommend!",
        image: "./images/testimonials/team-1.png",
        name: "Gaelle Hilaire",
        post: "Hooligan's Shop",
    },
    {
        id: 2,
        text: "Roger built a fantastic site for us. Overall, great experience! He nailed the functionality and design.",
        image: "./images/testimonials/team-2.png",
        name: "Patrick Lamour",
        post: "Helping Hands Financial Group",
    },

]

export const contact = [
    {
        icon: <AddLocationAltOutlined />,
        text1: "Kansas City, MO",
        text2: ""
    },
    {
        icon: <PhoneIphone />,
        text1: <a href="tel:5618371130"><p>(561) 837.1130</p></a>
    },
    {
        icon: <LinkedIn />,
        text1: <a href="https://linkedin.com/in/rogerbaptiste">
            <p>linkedin.com/in/rogerbaptiste</p></a>

    },
    {
        icon: <EmailOutlined />,
        text1: <a href="mailto:rogerbap@outlook.com"><p>rogerbap@outlook.com</p></a>
        // text2: "rogelainbaptiste@outlook.com"
    },
    {
        icon: <GitHub />,
        text1: <a href="github.com/rogerbaptiste"><p>GitHub.com/rogerbaptiste</p></a>
    }
]
export const social = [
    // {
    //     icon: <GitHub/>,
    // },
    // {
    //     icon: <LinkedIn />,
    // },
]