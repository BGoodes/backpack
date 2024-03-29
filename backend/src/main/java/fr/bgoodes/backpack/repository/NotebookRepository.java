package fr.bgoodes.backpack.repository;

import fr.bgoodes.backpack.document.Notebook;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotebookRepository extends MongoRepository<Notebook, Long> {
}
