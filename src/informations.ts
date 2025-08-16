export interface IProducts {
  id: number;
  img: string;
  title:string;
  text:string;
  siteBtn:string;
  gitHubBtn:string;
}
import SilverHouse from "./assets/images/projects_silver_house.png";
import Nike from "./assets/images/projects_nike.png";
import TheNewsWeb from "./assets/images/projects_the_news_web.png";
import VueCinema from "./assets/images/projects_vuecinema.png";
import ClothingStore from "./assets/images/projects_clothing_store.png";
import TOTEMBO from "./assets/images/projects_totembo.png";
import PORSCHE from "./assets/images/projects_porsche.png";
import MiniShop from "./assets/images/projects_minishop.png";
export const Products: IProducts[] = [  
  {
    id: 1,
    img: SilverHouse,
    title: "Silver House",
    text: "A clean and elegant landing page, likely designed for a real estate or luxury brand. It features a bold hero section, service highlights, gallery, and contact form. Smooth scrolling and a dark theme give it a premium, modern feel. Silver House Website Overview A clean and elegant landing page, likely designed for a real estate or luxury brand. It features a bold hero section, service highlights, gallery, and contact form. Smooth scrolling and a dark theme give it a premium, modern feel. Perfect as a template for showcasing high-end services or properties.Perfect as a template for showcasing high-end services or properties.",
    siteBtn:"https://srk-amon.github.io/Silver-House/", 
    gitHubBtn:"https://github.com/SRK-Amon/Silver-House" , 
  },
  {
    id: 2,
    img: Nike,
    title: "Nike",
    text: "Nike Product Showcase A modern, responsive landing page for promoting Nike footwear and clothing. Features a bold hero section with eye-catching visuals and strong branding. Includes product cards with placeholder text, ready for dynamic content integration. Smooth navigation menu links to categories like sneakers, t-shirts, and more. Basic form section at the bottom adds structure for future user interaction. Built using clean HTML and CSS, fully deployed via GitHub Pages.",
    siteBtn:"https://srk-amon.github.io/Nike/", 
    gitHubBtn:"https://github.com/SRK-Amon/Nike" , 
  },
  {
    id: 3,
    img: TheNewsWeb,
    title: "The-News-Web",
    text:"A clean and structured news website featuring categories like Society, Technology, Economy, Politics, and Sports. The homepage highlights major global stories with images and short previews, while the Top News section includes in-depth articles, such as reviews of Huawei MatePad tablets. Simple layout and clear navigation make it easy to browse current events.",
    siteBtn:"https://srk-amon.github.io/The-News-Web/", 
    gitHubBtn:"https://github.com/SRK-Amon/The-News-Web" , 
  },
  {
    id: 4,
    img: VueCinema,
    title: "VueCinema",
    text:"ЫФыф  ",
    siteBtn:"https://srk-clothing-store.netlify.app/", 
    gitHubBtn:"https://github.com/SRK-Amon/ClothingStore" , 
  },
  {
    id: 5,
    img: ClothingStore,
    title: "Clothing-Store",
    text:"A modern and minimalist e-commerce website showcasing a curated selection of fashion items. The homepage features a bold hero section with prominent branding, followed by product categories and featured items. Smooth scrolling and a clean layout enhance the user experience, making it ideal for showcasing contemporary fashion collections.",
    siteBtn:"https://srk-clothing-store.netlify.app/", 
    gitHubBtn:"https://github.com/SRK-Amon/ClothingStore" , 
  },
  {
    id: 6,
    img:TOTEMBO ,
    title: "TOTEMBO",
    text:"A stylish e-commerce website focused on modern accessories. The homepage showcases products in clean cards with images, names, and prices. The catalog includes watches, rings, earrings, bracelets, clutches, and chains. A dark-themed design gives the site an elegant and contemporary feel.",
    siteBtn:"https://srk-amon.github.io/TOTEMBO/",   
    gitHubBtn:"https://github.com/SRK-Amon/TOTEMBO  " , 
  },
  {
    id: 7,
    img:PORSCHE ,
    title: "PORSCHE",
    text:"A sleek promotional landing page inspired by one of the most iconic sports car brands.PurposeA stylish single-page presentation for Porsche vehicles—likely intended to highlight featured models and capture brand essence. Key Features A striking hero section, possibly featuring the Porsche logo or a standout model as a visual anchor. Multiple product or model cards, each showcasing a specific vehicle with name and short descriptors. A clean structure optimized for effortless browsing and instant visual impact. Design & Atmosphere Minimalist with upscale attention to detail—probably using bold fonts and high-contrast visuals. Smooth scrolling and a polished layout give it a modern, refined feel.",
    siteBtn:"https://srk-porsche.netlify.app/", 
    gitHubBtn:"https://github.com/SRK-Amon/PORSCHE", 
  },
  {
    id: 8 ,
    img:MiniShop ,
    title: "Mini Shop",
    text:"A compact, clean e-commerce landing page highlighting select featured items in neatly laid-out product cards with images, titles, and prices, streamlined for quick browsing and wrapped in a modern minimalist design that emphasizes functionality and style.",
    siteBtn:"https://mini-shop-rmr.netlify.app/", 
    gitHubBtn:"https://github.com/SRK-Amon/Mini_Shop" , 
  },
  // {
  //   id: 6,
  //   img:ClothingStore ,
  //   title: "",
  //   text:"",
  //   siteBtn:"", 
  //   gitHubBtn:"" , 
  // },
];

import ts from "./assets/images/typescript.svg";
import react from "./assets/images/React_jsx.svg";
import css from "./assets/images/css.svg";
import html from "./assets/images/html.svg";
import js from "./assets/images/java_script.svg";
import sass from "./assets/images/sass.svg";
import github from "./assets/images/github.svg";
import git from "./assets/images/git.svg";
import figma from "./assets/images/figma.svg";
export const skills = [
  {
    id:1,
    img: html,
    text:"✅ HTML (HyperText Markup Language) is the standard language for creating the structure of web pages and applications. It allows developers to organize content using semantic elements such as headings, paragraphs, links, lists, tables, images, and forms. I use HTML to build clean, accessible, and responsive layouts that follow best practices and modern web standards. With a strong understanding of semantic HTML, I ensure that web pages are both SEO-friendly and easy to maintain. Combined with CSS and JavaScript, HTML forms the foundation of all front-end development work I do." ,
  },
  {
    id:2,
    img: css,
    text:"✅ CSS (Cascading Style Sheets) is the language used to style and visually enhance HTML content. I use CSS to build clean, responsive, and user-friendly interfaces by applying layouts, colors, spacing, animations, and transitions. I'm experienced in working with modern features such as Flexbox, Grid, media queries, custom properties (variables), and responsive design techniques. I focus on writing organized and maintainable styles, whether using plain CSS, SASS, or CSS Modules within React projects. My CSS approach ensures cross-browser compatibility and a smooth user experience on all device sizes." ,
  },
  {
    id:3,
    img: js,
    text:"✅ JavaScript (JS) is a core web programming language used to build dynamic, interactive websites and applications. I use JavaScript to handle user interactions, manipulate the DOM, and work with APIs for real-time data fetching and updates. I have experience with ES6+ features such as arrow functions, destructuring, async/await, and modules. My skills include writing clean, reusable code and working with modern JavaScript tools, frameworks, and libraries such as React. I focus on building responsive, performance-optimized applications with attention to code quality, scalability, and maintainability." ,
  },
  {
    id:4,
    img: react,
    text:"✅ React (React) is a powerful JavaScript library used for building interactive and dynamic user interfaces, primarily for single-page applications. It promotes the creation of reusable components that manage their own state, enabling efficient and maintainable code. React uses a virtual DOM to optimize rendering and improve performance. It supports declarative programming, making UI development more intuitive and predictable. Widely adopted in modern web development, React offers a rich ecosystem, including hooks and context API, to simplify state management and side effects." ,
  },
  {
    id:5,
    img: sass,
    text:"✅ Sass (Syntactically Awesome Style Sheets) is a powerful CSS preprocessor that extends traditional CSS with advanced features like variables, nested rules, mixins, and functions. It enables developers to write more organized, reusable, and maintainable stylesheets. By simplifying complex CSS tasks and promoting modular design, Sass improves development efficiency, especially in large-scale projects. Its compatibility with all CSS versions makes it a popular choice for enhancing styling workflows and creating consistent, scalable user interfaces." ,
  },
  {
    id:6,
    img: ts,
    text:"✅ TypeScript (TS) is a strongly typed superset of JavaScript that adds static type checking and modern language features. It helps developers catch errors early during development, improving code reliability and maintainability. TypeScript enhances tooling support with features like autocomplete and refactoring, making complex codebases easier to manage. It compiles to plain JavaScript, ensuring compatibility with all browsers and environments. Widely used in modern web development, TypeScript is especially valuable for building scalable and robust applications." ,
  },
  {
    id:7,
    img: github,
    text:"✅ GitHub is a cloud-based platform for version control and collaboration, built around Git. It enables developers to host, review, and manage code repositories, track issues, and collaborate through pull requests. GitHub is essential for team-based development and open-source contributions. It also supports CI/CD workflows, project boards, and documentation. In my work, I use GitHub for code hosting, version tracking, and collaborative development across teams." ,
  },
  {
    id:8,
    img: git,
    text:"✅ Git is a distributed version control system that tracks changes in source code during software development. It allows developers to work on features, fix bugs, and experiment safely in isolated branches. Git supports powerful commands like merge, rebase, stash, and cherry-pick, which enable efficient code management and collaboration. I use Git daily to manage project history, collaborate with team members, and maintain clean, structured workflows." ,
  },
  {
    id:9,
    img: figma,
    text:"✅ Figma is a web-based interface design and prototyping tool used for creating user interfaces and UI/UX mockups. It supports real-time collaboration, making it ideal for teams to design, give feedback, and iterate quickly. Figma allows for the creation of responsive layouts, component libraries, and developer handoff with detailed design specs. I’ve used Figma to translate design concepts into pixel-perfect, responsive front-end implementations in React and HTML/CSS projects." ,
  },
] 
