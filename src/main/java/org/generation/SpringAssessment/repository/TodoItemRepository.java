package org.generation.SpringAssessment.repository;

import org.generation.SpringAssessment.repository.entity.TodoItem;
import org.springframework.data.repository.CrudRepository;

// Spring will implement Create, Read, Update and Delete here
public interface TodoItemRepository extends CrudRepository<TodoItem, Integer> {
}
