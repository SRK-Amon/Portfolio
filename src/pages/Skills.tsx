import ts from "../assets/images/typescript.svg";
import react from "../assets/images/React_jsx.svg";
import css from "../assets/images/css.svg";
import html from "../assets/images/html.svg";
import js from "../assets/images/java_script.svg";
import sass from "../assets/images/sass.svg";





const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="skills_box">
          <div className="skills_mini_box">
            <img src={html} className="skills_mini_box_img" />
            <p className="skills_mini_box_text">
              ✅ HTML (HyperText Markup Language) HTML is the standard language
              for creating the structure of web pages and applications. It
              allows developers to organize content using semantic elements such
              as headings, paragraphs, links, lists, tables, images, and forms.
              I use HTML to build clean, accessible, and responsive layouts that
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
              ✅ CSS (Cascading Style Sheets) CSS is the language used to style
              and visually enhance HTML content. I use CSS to build clean,
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
              ✅ JavaScript (JS) JavaScript is a core web programming language
              used to build dynamic, interactive websites and applications. I
              use JavaScript to handle user interactions, manipulate the DOM,
              and work with APIs for real-time data fetching and updates. I have
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
              ✅ React (React) React is a powerful JavaScript library used for
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
              ✅ Sass (Syntactically Awesome Style Sheets) Sass is a powerful
              CSS preprocessor that extends traditional CSS with advanced
              features like variables, nested rules, mixins, and functions. It
              enables developers to write more organized, reusable, and
              maintainable stylesheets. By simplifying complex CSS tasks and
              promoting modular design, Sass improves development efficiency,
              especially in large-scale projects. Its compatibility with all CSS
              versions makes it a popular choice for enhancing styling workflows
              and creating consistent, scalable user interfaces.
            </p>
          </div>
          <div className="skills_mini_box">
            <img src={ts} className="skills_mini_box_img" />
            <p className="skills_mini_box_text">
              ✅ TypeScript (TS) TypeScript is a strongly typed superset of
              JavaScript that adds static type checking and modern language
              features. It helps developers catch errors early during
              development, improving code reliability and maintainability.
              TypeScript enhances tooling support with features like
              autocomplete and refactoring, making complex codebases easier to
              manage. It compiles to plain JavaScript, ensuring compatibility
              with all browsers and environments. Widely used in modern web
              development, TypeScript is especially valuable for building
              scalable and robust applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
