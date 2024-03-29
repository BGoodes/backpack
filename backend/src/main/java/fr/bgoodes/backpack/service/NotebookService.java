package fr.bgoodes.backpack.service;

import fr.bgoodes.backpack.document.Notebook;
import fr.bgoodes.backpack.repository.NotebookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class NotebookService {

    private NotebookRepository repository;

    @Autowired
    public NotebookService(NotebookRepository repository) {
        this.repository = repository;
    }

    public List<Notebook> getAllNotebooks() {
        return repository.findAll();
    }
    public Optional<Notebook> getNotebook(UUID id) {
        return repository.findById(id);
    }

    public Notebook saveNotebook(Notebook notebook) {
        return repository.save(notebook);
    }
}
