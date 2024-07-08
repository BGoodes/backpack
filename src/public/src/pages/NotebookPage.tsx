import Notebook from "../interface/notebook.ts";

const NotebookPage = (notebook: Notebook) => {
    return (
        <div>
            <h1>{notebook.title}</h1>
        </div>
    );
}

export default NotebookPage;