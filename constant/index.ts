import { v4 as uuid } from "uuid";

export const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "React", level: 94 },
  { name: "Next.js", level: 90 },
  { name: "Redux", level: 30 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Bootstrap", level: 70 },
  { name: "MUI", level: 50 },
  { name: "GSAP", level: 50 },
  { name: "SaSS", level: 65 },
  { name: "Jest", level: 40 },
  { name: "Node.js", level: 50 },
  { name: "Git", level: 65 },
  { name: "Figma", level: 80 },
];

export const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  // { id: "blog", label: "Blog", href: "/blog" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const sections = [
  "home",
  "projects",
  "about",
  "testimonials",
  "blog",
  "contact",
];

export const categories = ["All", "Web Development", "Next Js", "React Js"];

interface Projects {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
}
export const fullProjects: Projects[] = [
  {
    id: uuid(),
    title: "Responsive Portfolio Template",
    description:
      "A clean and modern portfolio template built with HTML and CSS, featuring responsive design and smooth animations for an engaging user experience.",
    image: "htmlandcssone_jbce1f",
    technologies: ["HTML", "CSS"],
    category: "HTML & CSS",
    liveUrl: "https://rashadhusien.github.io/HTML_And_CSS_Template-One/",
    githubUrl: "https://github.com/Rashadhusien/HTML_And_CSS_Template-One",
  },
  {
    id: uuid(),
    title: "E-Commerce Landing Page",
    description:
      "A visually appealing e-commerce landing page designed with HTML and CSS, optimized for responsiveness and user-friendly navigation.",
    image: "htmlandcsstwo_kz45o6",
    technologies: ["HTML", "CSS"],
    category: "HTML & CSS",
    liveUrl: "https://rashadhusien.github.io/HTML_And_CSS_Template-Two/",
    githubUrl: "https://github.com/Rashadhusien/HTML_And_CSS_Template-Two",
  },
  {
    id: uuid(),
    title: "QR Code Component",
    description:
      "A simple and elegant QR code display component created using HTML and CSS, perfect for integrating into web applications.",
    image: "qrcode_ckchiz",
    technologies: ["HTML", "CSS"],
    category: "HTML & CSS",
    liveUrl: "https://rashadhusien.github.io/Qrcode/",
    githubUrl: "https://github.com/Rashadhusien/Qrcode",
  },
  {
    id: uuid(),
    title: "Three Column Preview Cards",
    description:
      "A set of three stylish preview cards designed with HTML and CSS, showcasing responsive layouts and hover effects.",
    image: "threecolumns_gcimpv",
    technologies: ["HTML", "CSS"],
    category: "HTML & CSS",
    liveUrl: "https://rashadhusien.github.io/3-column-preview-card/",
    githubUrl: "https://github.com/Rashadhusien/3-column-preview-card",
  },
  {
    id: uuid(),
    title: "Product Preview Card",
    description:
      "A sleek product preview card built with HTML and CSS, featuring responsive design and a clean layout for showcasing products.",
    image: "gabrielle_erlrun",
    technologies: ["HTML", "CSS"],
    category: "HTML & CSS",
    liveUrl:
      "https://rashadhusien.github.io/product-preview-card-component-main/",
    githubUrl:
      "https://github.com/Rashadhusien/product-preview-card-component-main",
  },
  {
    id: uuid(),
    title: "Social Links Profile",
    description:
      "A minimalistic social links profile page created with HTML and CSS, designed for easy integration and responsiveness.",
    image: "iconlinks_nbob66",
    technologies: ["HTML", "CSS"],
    category: "HTML & CSS",
    liveUrl: "https://rashadhusien.github.io/social-links-profile/",
    githubUrl: "https://github.com/Rashadhusien/social-links-profile",
  },
  {
    id: uuid(),
    title: "Product Showcase Card",
    description:
      "A professional product showcase card built with HTML and CSS, featuring a modern design and responsive layout.",
    image: "htmlcsscard_g8vgtl",
    technologies: ["HTML", "CSS"],
    category: "HTML & CSS",
    liveUrl: "https://rashadhusien.github.io/preview-card-main/",
    githubUrl: "https://github.com/Rashadhusien/preview-card-main",
  },
  {
    id: uuid(),
    title: "Order Summary Component",
    description:
      "A stylish order summary component designed with HTML and CSS, optimized for responsiveness and a seamless user experience.",
    image: "ordersummerycard_eilbqv",
    technologies: ["HTML", "CSS"],
    category: "HTML & CSS",
    liveUrl: "https://rashadhusien.github.io/order-summary-component-main/",
    githubUrl: "https://github.com/Rashadhusien/order-summary-component-main",
  },
  {
    id: uuid(),
    title: "Blog Layout Template",
    description:
      "A responsive blog layout template built with HTML and CSS, featuring clean typography and a modern grid system.",
    image: "htmlandcssthree_brfupx",
    technologies: ["HTML", "CSS"],
    category: "HTML & CSS",
    liveUrl: "https://rashadhusien.github.io/html-css-template-3/",
    githubUrl: "https://github.com/Rashadhusien/html-css-template-3",
  },
  {
    id: uuid(),
    title: "Data Storage Dashboard",
    description:
      "A data storage dashboard component created with HTML and CSS, designed to display storage metrics in a clear and responsive layout.",
    image: "fylo_kg9fja",
    technologies: ["HTML", "CSS"],
    category: "HTML & CSS",
    liveUrl:
      "https://rashadhusien.github.io/fylo-data-storage-component-master/",

    githubUrl:
      "https://github.com/Rashadhusien/fylo-data-storage-component-master",
  },
  {
    id: uuid(),
    title: "Huddle Community Landing Page",
    description:
      "A vibrant landing page for a community platform, built with HTML and CSS, featuring responsive design and engaging visuals.",
    image: "huddle_ahluop",
    technologies: ["HTML", "CSS"],
    category: "HTML & CSS",
    liveUrl:
      "https://rashadhusien.github.io/huddle-landing-page-with-alternating-feature-blocks-master/",
    githubUrl:
      "https://github.com/Rashadhusien/huddle-landing-page-with-alternating-feature-blocks-master",
  },
  {
    id: uuid(),
    title: "Four Card Feature Section",
    description:
      "A responsive four-card feature section built with HTML and CSS, designed to highlight key features with a clean layout.",
    image: "four-cards_ogjzmk",
    technologies: ["HTML", "CSS"],
    category: "HTML & CSS",
    liveUrl: "https://rashadhusien.github.io/four-card-feature-section-master/",
    githubUrl:
      "https://github.com/Rashadhusien/four-card-feature-section-master",
  },
  {
    id: uuid(),
    title: "Preview Card Component",
    description:
      "A simple preview card component created with HTML and CSS, featuring a minimalistic design and responsive layout.",
    image: "privewCard_nmmx65",
    technologies: ["HTML", "CSS"],
    category: "HTML & CSS",
    liveUrl: "https://rashadhusien.github.io/preview-card/",
    githubUrl: "https://github.com/Rashadhusien/preview-card",
  },
  {
    id: uuid(),
    title: "Guess The Word Game",
    description:
      "An interactive word-guessing game built with HTML, CSS, and JavaScript, featuring dynamic gameplay and a user-friendly interface.",
    image: "guessThewordGame_opwl3x",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    liveUrl: "https://rashadhusien.github.io/Guess-the-word/",
    githubUrl: "https://github.com/Rashadhusien/Guess-the-word",
  },
  {
    id: uuid(),
    title: "FAQ Accordion Component",
    description:
      "An interactive FAQ accordion built with HTML, CSS, and JavaScript, featuring smooth animations and a responsive layout.",
    image: "faq_mckcxq",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    liveUrl: "https://rashadhusien.github.io/faq-accordion-main/",
    githubUrl: "https://github.com/Rashadhusien/faq-accordion-main",
  },
  {
    id: uuid(),
    title: "Random Quote Generator",
    description:
      "An interactive random quote generator built with HTML, CSS, and JavaScript, displaying inspiring quotes with a sleek interface.",
    image: "random-quote-generator_qllgwv",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    liveUrl: "https://rashadhusien.github.io/Random-Quotes-Generator/",
    githubUrl: "https://github.com/Rashadhusien/Random-Quotes-Generator",
  },
  {
    id: uuid(),
    title: "Image Slider with Thumbnails",
    description:
      "A responsive image slider with thumbnail navigation, built with HTML, CSS, and JavaScript for a smooth user experience.",
    image: "image-slider_b7bi4d",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    liveUrl: "https://rashadhusien.github.io/Image-Slider/",
    githubUrl: "https://github.com/Rashadhusien/Image-Slider",
  },
  {
    id: uuid(),
    title: "Tic Tac Toe Game",
    description:
      "A classic Tic Tac Toe game built with HTML, CSS, and JavaScript, featuring a responsive design and interactive gameplay.",
    image: "xo_game_melf8a",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    liveUrl: "https://rashadhusien.github.io/Tic-Tac-Toe-Game/",
    githubUrl: "https://github.com/Rashadhusien/Tic-Tac-Toe-Game",
  },
  {
    id: uuid(),
    title: "Events Manager Application",
    description:
      "An events management app built with HTML, CSS, and JavaScript, allowing users to create and manage events with a clean UI.",
    image: "event_manager_fuiitd",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    liveUrl: "https://rashadhusien.github.io/Events-Manager-Application/",
    githubUrl: "https://github.com/Rashadhusien/Events-Manager-Application",
  },
  {
    id: uuid(),
    title: "Currency Converter App",
    description:
      "A currency converter app built with HTML, CSS, and JavaScript, using an API to provide real-time currency conversion.",
    image: "currency_converter_app_qk52e5",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    liveUrl: "https://rashadhusien.github.io/Currency-Converter-With-API/",
    githubUrl: "https://github.com/Rashadhusien/Currency-Converter-With-API",
  },
  {
    id: uuid(),
    title: "Tailwind CSS Portfolio Design",
    description:
      "A sleek portfolio design built with HTML, CSS, and Tailwind CSS, offering a modern and responsive user interface.",
    image: "designtailwind_jtpcur",
    technologies: ["HTML", "CSS", "tailwind"],
    category: "Tailwind CSS",
    liveUrl: "https://rashadhusien.github.io/Design_Tailwind/",
    githubUrl: "https://github.com/Rashadhusien/Design_Tailwind",
  },
  {
    id: uuid(),
    title: "Social Media Dashboard",
    description:
      "A dynamic social media dashboard built with HTML, CSS, JavaScript, and Tailwind CSS, featuring a theme switcher and responsive design.",
    image: "socialDashBoard_jexbh3",
    technologies: ["HTML", "CSS", "JavaScript", "tailwind"],
    category: "Tailwind CSS",
    liveUrl:
      "https://rashadhusien.github.io/social-media-dashboard-with-theme-switcher-master/",
    githubUrl:
      "https://github.com/Rashadhusien/social-media-dashboard-with-theme-switcher-master",
  },
  {
    id: uuid(),
    title: "Prayer Timings Application",
    description:
      "A React-based prayer timings app that fetches data from an API, providing accurate prayer schedules with a responsive design.",
    image: "prayertimings_jmphlx",
    technologies: ["React", "JavaScript", "Material UI", "API"],
    category: "React Js",
    liveUrl: "https://keen-paprenjak-733d78.netlify.app/",
    githubUrl: "https://github.com/Rashadhusien/prayers-timings",
  },
  {
    id: uuid(),
    title: "To-Do List Application",
    description:
      "A feature-rich to-do list app built with React and Tailwind CSS, offering task management with a clean and responsive design.",
    image: "todo_ol7jrw",
    technologies: ["Material UI", "Reactjs"],
    category: "React Js",
    liveUrl: "https://stalwart-maamoul-b4728e.netlify.app/",
    githubUrl: "https://github.com/Rashadhusien/todo-react",
  },
  {
    id: uuid(),
    title: "Weather Forecast App",
    description:
      "A weather forecast app built with React and Tailwind CSS, leveraging an API to provide real-time weather updates with a modern UI.",
    image: "weather_app_hzafto",
    technologies: ["Material UI", "Reactjs", "API"],
    category: "React Js",
    liveUrl: "https://snazzy-narwhal-3bc87b.netlify.app/",
    githubUrl: "",
  },
  {
    id: uuid(),
    title: "Form Validation Component",
    description:
      "A simple form validation component built with React and Tailwind CSS, featuring real-time input validation and a responsive design.",
    image: "form-validation_friuws",
    technologies: ["tailwind", "Reactjs"],
    category: "React Js",
    liveUrl: "https://effortless-monstera-a182dd.netlify.app/",
    githubUrl: "",
  },
  {
    id: uuid(),
    title: "Link Design",
    description:
      "A modern website for plumbing and firefighting services built with Next.js and Tailwind CSS, offering a seamless and responsive user experience.",
    image: "linkDesign_ocpwsw",
    technologies: [
      "Nextjs",
      "tailwind",
      "swiper",
      "cloudinary",
      "framer-motion",
      "firebase",
      "axios",
      "API",
    ],
    category: "Next Js",
    liveUrl: "https://link-design.vercel.app/",
    githubUrl: "https://github.com/Rashadhusien/link-design",
  },
  {
    id: uuid(),
    title: "Storage Management App",
    description:
      "A storage management application built with Next.js and Tailwind CSS, featuring a user-friendly interface for managing storage data.",
    image: "storage-managment_uloo29",
    technologies: [
      "Nextjs",
      "tailwind",
      "typeScript",
      "shadcn/ui",
      "appwrite",
      "react-hook-form",
      "zod",
    ],
    category: "Next Js",
    liveUrl: "https://storage-managment-indol.vercel.app/sign-in",
    githubUrl: "https://github.com/Rashadhusien/storage_managment",
  },
];
