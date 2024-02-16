import Notebook from '../../interface/Notebook'

class NotebookService {
    private static notebooks: Notebook[] = [];

    public static createNotebook(notebook: Omit<Notebook, 'id'>): Notebook {
      const newNotebook = { ...notebook, id: this.generateId() };
      this.notebooks.push(newNotebook);
      return newNotebook;
    }

    public static getNotebook(id: string): Notebook | undefined {
      return this.notebooks.find(notebook => notebook.id === id);
    }

    public static updateNotebook(id: string, updateData: Partial<Notebook>): Notebook | undefined {
      const notebookIndex = this.notebooks.findIndex(notebook => notebook.id === id);
      if (notebookIndex === -1) return undefined;
      const updatedNotebook = { ...this.notebooks[notebookIndex], ...updateData };
      this.notebooks[notebookIndex] = updatedNotebook;
      return updatedNotebook;
    }

    public static deleteNotebook(id: string): boolean {
      const notebookIndex = this.notebooks.findIndex(notebook => notebook.id === id);
      if (notebookIndex === -1) return false;
      this.notebooks.splice(notebookIndex, 1);
      return true;
    }

    private static generateId(): string {
      return "test";
    }
}

export default NotebookService;