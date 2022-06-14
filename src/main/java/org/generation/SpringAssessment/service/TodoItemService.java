package org.generation.SpringAssessment.service;

import org.generation.SpringAssessment.repository.entity.TodoItem;

import java.util.List;

public interface TodoItemService {
    TodoItem save(TodoItem todoitem);

    List<TodoItem> all();
}
