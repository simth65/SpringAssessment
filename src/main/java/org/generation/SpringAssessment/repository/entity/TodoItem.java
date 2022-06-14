package org.generation.SpringAssessment.repository.entity;

import org.generation.SpringAssessment.controller.dto.TodoItemDto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class TodoItem { // DB table name must match this class name

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer todoid;
    private String title;
    private String description;
    private Date targetdate;

    public TodoItem() {}

    public TodoItem(TodoItemDto itemDto) {
        this.todoid = itemDto.getTodoid();
        this.title = itemDto.getTitle();
        this.description = itemDto.getDescription();
        this.targetdate = itemDto.getTargetdate();
    }

    public Integer getTodoid() {
        return todoid;
    }

    public void setTodoid(Integer todoid) {
        this.todoid = todoid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getTargetdate() {
        return targetdate;
    }

    public void setTargetdate(Date targetdate) {
        this.targetdate = targetdate;
    }

    @Override
    public String toString() {
        return "TodoItem{" +
                "todoid=" + todoid +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", targetdate='" + targetdate + '\'' +
                '}';
    }
}