package fr.bgoodes.backpack.controller;

import fr.bgoodes.backpack.document.Notebook;
import fr.bgoodes.backpack.document.Page;
import fr.bgoodes.backpack.service.NotebookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class NotebookController {

    private final NotebookService service;

    @Autowired
    public NotebookController(NotebookService service) {
        this.service = service;
    }

    @GetMapping("/notebooks")
    public List<Notebook> getAllNotebooks() {
        return service.getAllNotebooks();
    }

    @GetMapping("/notebooks/{id}")
    public Optional<Notebook> getNotebook(@PathVariable("id") UUID id) {
        return service.getNotebook(id);
    }

    @PostMapping("/notebooks")
    public void addNotebook() {
        Page page = new Page("");
        Notebook notebook = new Notebook("", List.of(page));
        service.saveNotebook(notebook);
    }

    @PostMapping("/notebooks/{id}")
    public void updateNotebook() {
        //TODO: implement this
    }
}
