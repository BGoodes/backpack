import { EditorThemeClasses } from "lexical";

export const theme: EditorThemeClasses = {
    ltr: "ltr",
    rtl: "rtl",
    
    placeholder: "pen-placeholder",
    paragraph: "pen-paragraph",
    link: "pen-link",

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
    
    quote: "pen-quote",
    code: "pen-code"
};