package org.generation.SpringAssessment.controller.dto;

import java.util.Date;

public class TodoItemDto {
    private Integer todoid;
    private String title;
    private String description;
    private Date targetdate;

    public TodoItemDto(String title, String description, Date targetdate) {
        this.title = title;
        this.description = description;
        this.targetdate = targetdate;
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
}
