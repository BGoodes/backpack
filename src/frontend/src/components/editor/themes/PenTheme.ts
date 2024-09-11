import type { EditorThemeClasses } from 'lexical';

import './PenTheme.css';

const theme : EditorThemeClasses = {
  ltr: "pen-ltr",
  rtl: "pen-rtl",

  paragraph: "pen-paragraph",
  link: "pen-link",
  quote: "pen-quote",
  code: "pen-code",

  // Heading styles
  heading: {
      h1: "pen-heading-h1",
      h2: "pen-heading-h2",
      h3: "pen-heading-h3",
      h4: "pen-heading-h4"
    },

  // Text formatting
  text: {
      bold: "pen-format-bold",
      italic: "pen-format-italic",
      underline: "pen-format-underline",
      strikethrough: "pen-format-strikethrough",
      code: "pen-format-code"
  },
};
  
  export default theme;