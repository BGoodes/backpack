package fr.bgoodes.backpack.document;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "pages")
public class Page {

    @Id
    private UUID id;
    private String content;

    public Page() {}

    public Page(String content) {
        this.content = content;
    }

    public UUID getId() {
        return id;
    }
    public void setId(UUID id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
}
