package fr.bgoodes.backpack.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "notebooks")
public class Notebook {

    @Id
    private Long id;
    private String title;
    private List<Page> pages;
    private Date creationDate;
    private Date lastUpdateDate;

    public Notebook() {}

    public Notebook(Long id, String title, List<Page> pages) {
        this.id = id;
        this.title = title;
        this.pages = pages;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public List<Page> getPages() {
        return pages;
    }
    public void setPages(List<Page> pages) {
        this.pages = pages;
    }
}
