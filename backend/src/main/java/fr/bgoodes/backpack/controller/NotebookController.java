package fr.bgoodes.backpack.controller;

import fr.bgoodes.backpack.document.Notebook;
import fr.bgoodes.backpack.service.NotebookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class NotebookController {

    private final NotebookService service;

    @Autowired
    public NotebookController(NotebookService service) {
        this.service = service;
    }

    @GetMapping("/notebook")
    public Optional<Notebook> getNotebook(@RequestParam(value = "id") Long id) {
        return service.getNotebook(id);
    }

    @GetMapping("/notebook/all")
    public List<Notebook> getAllNotebooks() {
        return service.getAllNotebooks();
    }

    @GetMapping("/addNotebook")
    public void addNotebook(){
    }
}
