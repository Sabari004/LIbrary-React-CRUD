package com.example.demo.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Book;

public interface BookRepo extends JpaRepository<Book,Integer>{

	List<Book> findByName(String name);

	List<Book> findByTopic(String topic);

	List<Book> findByAuthor(String author);


}
