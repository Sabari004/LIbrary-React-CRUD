package com.example.demo.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Book;
import com.example.demo.repository.BookRepo;
@Service
public class ApiService {
	@Autowired
	BookRepo service;
	public List<Book> getEvent(){
		return service.findAll();
	}
	public List<Book> getByName(String name){
		return service.findByName(name);
	}
	public List<Book> getByTopic(String topic){
		return service.findByTopic(topic);
	}
	public List<Book> getByAuthor(String author){
		return service.findByAuthor(author);
	}
	public String addEvent(Book s) {
		service.save(s);
		return "Book is added";
	}
	public Optional<Book> getIdEvent(int s){
		return service.findById(s);
	}
	public String deleteEvent(int s) {
		service.deleteById(s);
		return "Book is Deleted";
	}
	public String putEvent (Book s) {
		service.save(s);
		return "Book is updated";
	}
}
