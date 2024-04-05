import Notebook from "../interface/notebook.ts";

const API_URL: string = 'http://localhost:8080/api/v1/notebooks';

class ApiService {
    static async get(id: string): Promise<Notebook> {
        const response = await fetch(`${API_URL}/${id}`);
        return response.json();
    }

    static async getAll(): Promise<Notebook[]> {
        const response = await fetch(`${API_URL}`);
        return response.json();
    }

    static async create(): Promise<Notebook> {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
        });
        return response.json();
    }

    static async update(id: string, data: Notebook): Promise<Notebook> {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }

    static async remove(id: string): Promise<void> {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
    }
}

export default ApiService;