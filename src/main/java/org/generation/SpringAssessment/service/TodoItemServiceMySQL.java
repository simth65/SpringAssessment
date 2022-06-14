package org.generation.SpringAssessment.service;

import org.generation.SpringAssessment.repository.TodoItemRepository;
import org.generation.SpringAssessment.repository.entity.TodoItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoItemServiceMySQL implements TodoItemService {

    private final TodoItemRepository todoItemRepository;

    public TodoItemServiceMySQL(@Autowired TodoItemRepository todoItemRepository) {
        this.todoItemRepository = todoItemRepository;
    }

    @Override
    public TodoItem save(TodoItem item) {
        return todoItemRepository.save(item);
    }

    @Override
    public List<TodoItem> all() {
        List<TodoItem> result = new ArrayList<>();
        todoItemRepository.findAll().forEach( result::add );
        return result;
    }
}
