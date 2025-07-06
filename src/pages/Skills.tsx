import ts from "../assets/images/typescript.svg";
import react from "../assets/images/React_jsx.svg";
import css from "../assets/images/css.svg";
import html from "../assets/images/html.svg";
import js from "../assets/images/java_script.svg";
import sass from "../assets/images/sass.svg";
import nodeJs from "../assets/images/Node.js.svg";
import github from "../assets/images/github.svg";
import git from "../assets/images/git.svg";
import figma from "../assets/images/figma.svg";
import chatgpt from "../assets/images/chatgpt.svg";

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="skills_box">
          <h2 className="skills_box_title">Main skills</h2>
          <div className="skills_mini_box">
            <img src={html} className="skills_mini_box_img" />
            <p className="skills_mini_box_text">
              ✅ HTML (HyperText Markup Language) is the standard language for
              creating the structure of web pages and applications. It allows
              developers to organize content using semantic elements such as
              headings, paragraphs, links, lists, tables, images, and forms. I
              use HTML to build clean, accessible, and responsive layouts that
              follow best practices and modern web standards. With a strong
              understanding of semantic HTML, I ensure that web pages are both
              SEO-friendly and easy to maintain. Combined with CSS and
              JavaScript, HTML forms the foundation of all front-end development
              work I do.
            </p>
          </div>
          <div className="skills_mini_box">
            <img src={css} className="skills_mini_box_img" />
            <p className="skills_mini_box_text">
              ✅ CSS (Cascading Style Sheets) is the language used to style and
              visually enhance HTML content. I use CSS to build clean,
              responsive, and user-friendly interfaces by applying layouts,
              colors, spacing, animations, and transitions. I'm experienced in
              working with modern features such as Flexbox, Grid, media queries,
              custom properties (variables), and responsive design techniques. I
              focus on writing organized and maintainable styles, whether using
              plain CSS, SASS, or CSS Modules within React projects. My CSS
              approach ensures cross-browser compatibility and a smooth user
              experience on all device sizes.
            </p>
          </div>
          <div className="skills_mini_box">
            <img src={js} className="skills_mini_box_img" />
            <p className="skills_mini_box_text">
              ✅ JavaScript (JS) is a core web programming language used to
              build dynamic, interactive websites and applications. I use
              JavaScript to handle user interactions, manipulate the DOM, and
              work with APIs for real-time data fetching and updates. I have
              experience with ES6+ features such as arrow functions,
              destructuring, async/await, and modules. My skills include writing
              clean, reusable code and working with modern JavaScript tools,
              frameworks, and libraries such as React. I focus on building
              responsive, performance-optimized applications with attention to
              code quality, scalability, and maintainability.
            </p>
          </div>
          <div className="skills_mini_box">
            <img src={react} className="skills_mini_box_img" />
            <p className="skills_mini_box_text">
              ✅ React (React) is a powerful JavaScript library used for
              building interactive and dynamic user interfaces, primarily for
              single-page applications. It promotes the creation of reusable
              components that manage their own state, enabling efficient and
              maintainable code. React uses a virtual DOM to optimize rendering
              and improve performance. It supports declarative programming,
              making UI development more intuitive and predictable. Widely
              adopted in modern web development, React offers a rich ecosystem,
              including hooks and context API, to simplify state management and
              side effects.
            </p>
          </div>
          <div className="skills_mini_box">
            <img src={sass} className="skills_mini_box_img" />
            <p className="skills_mini_box_text">
              ✅ Sass (Syntactically Awesome Style Sheets) is a powerful CSS
              preprocessor that extends traditional CSS with advanced features
              like variables, nested rules, mixins, and functions. It enables
              developers to write more organized, reusable, and maintainable
              stylesheets. By simplifying complex CSS tasks and promoting
              modular design, Sass improves development efficiency, especially
              in large-scale projects. Its compatibility with all CSS versions
              makes it a popular choice for enhancing styling workflows and
              creating consistent, scalable user interfaces.
            </p>
          </div>
          <div className="skills_mini_box">
            <img src={ts} className="skills_mini_box_img" />
            <p className="skills_mini_box_text">
              ✅ TypeScript (TS) is a strongly typed superset of JavaScript that
              adds static type checking and modern language features. It helps
              developers catch errors early during development, improving code
              reliability and maintainability. TypeScript enhances tooling
              support with features like autocomplete and refactoring, making
              complex codebases easier to manage. It compiles to plain
              JavaScript, ensuring compatibility with all browsers and
              environments. Widely used in modern web development, TypeScript is
              especially valuable for building scalable and robust applications.
            </p>
          </div>
          <div className="skills_mini_box">
            <img src={nodeJs} className="skills_mini_box_img" />
            <p className="skills_mini_box_text">
              ✅ Node.js is a server-side JavaScript runtime environment built
              on Chrome’s V8 engine. It enables asynchronous, event-driven
              programming, allowing developers to build scalable and
              high-performance network applications. Node.js is widely used for
              creating REST APIs, real-time applications, and microservices. Its
              non-blocking I/O model makes it efficient and suitable for
              data-intensive tasks. With access to npm, the largest package
              ecosystem, Node.js accelerates development by providing thousands
              of reusable modules. It's a key technology in modern full-stack
              and backend development.
            </p>
          </div>
          <h2 className="skills_box_title">Others</h2>
          <div className="skills_mini_box">
            <img src={github} className="skills_mini_box_img" />
            <p className="skills_mini_box_text">
              ✅ GitHub is a cloud-based platform for version control and
              collaboration, built around Git. It enables developers to host,
              review, and manage code repositories, track issues, and
              collaborate through pull requests. GitHub is essential for
              team-based development and open-source contributions. It also
              supports CI/CD workflows, project boards, and documentation. In my
              work, I use GitHub for code hosting, version tracking, and
              collaborative development across teams.
            </p>
          </div>
          <div className="skills_mini_box">
            <img src={git} className="skills_mini_box_img" />
            <p className="skills_mini_box_text">
              ✅ Git is a distributed version control system that tracks changes
              in source code during software development. It allows developers
              to work on features, fix bugs, and experiment safely in isolated
              branches. Git supports powerful commands like merge, rebase,
              stash, and cherry-pick, which enable efficient code management and
              collaboration. I use Git daily to manage project history,
              collaborate with team members, and maintain clean, structured
              workflows.
            </p>
          </div>
          <div className="skills_mini_box">
            <img src={figma} className="skills_mini_box_img" />
            <p className="skills_mini_box_text">
              ✅ Figma is a web-based interface design and prototyping tool used
              for creating user interfaces and UI/UX mockups. It supports
              real-time collaboration, making it ideal for teams to design, give
              feedback, and iterate quickly. Figma allows for the creation of
              responsive layouts, component libraries, and developer handoff
              with detailed design specs. I’ve used Figma to translate design
              concepts into pixel-perfect, responsive front-end implementations
              in React and HTML/CSS projects.
            </p>
          </div>
          <div className="skills_mini_box">
            <img src={chatgpt} className="skills_mini_box_img" />
            <p className="skills_mini_box_text">
              ✅ ChatGPT is an advanced AI language model developed by OpenAI,
              designed for generating human-like responses and assisting with
              tasks like code generation, documentation, content writing, and
              debugging. I use ChatGPT as a productivity assistant in
              development workflows — for writing boilerplate code, optimizing
              algorithms, generating documentation, and solving coding
              challenges. It helps accelerate learning and reduces time spent on
              repetitive tasks, making it a valuable tool in my development
              stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
