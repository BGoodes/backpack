import page from "./page.ts";

interface Notebook {
    id: string;
    title: string;
    pages: page[];
    creationDate?: Date;
    lastUpdateDate?: Date;
}

export default Notebook;