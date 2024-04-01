interface Notebook {
    id: string;
    title: string;
    content: string; // Serialized EditorState
    createdAt?: Date;
    updatedAt?: Date;
}

export default Notebook;