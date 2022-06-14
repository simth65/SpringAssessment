package org.generation.SpringAssessment.controller;

import org.generation.SpringAssessment.controller.dto.TodoItemDto;
import org.generation.SpringAssessment.repository.entity.TodoItem;
import org.generation.SpringAssessment.service.TodoItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/todoitem")
public class TodoItemController {

    final TodoItemService todoItemService;

    public TodoItemController( @Autowired TodoItemService itemService )
    {
        this.todoItemService = itemService;
    }

    @CrossOrigin
    @GetMapping( "/all" )
    public Iterable<TodoItem> getItems()
    {
        // retrieve all records from the database
        return todoItemService.all();
    }

    @CrossOrigin
    @PostMapping("/add")
    public void save(  @RequestParam(name="title", required = true) String title,
                       @RequestParam(name="description", required = true) String description,
                       @RequestParam(name="targetdate", required = true) Date targetdate ){

        // save user input to the database
        TodoItemDto itemDto = new TodoItemDto(title, description, targetdate);
        todoItemService.save(new TodoItem( itemDto ));
    }
}
