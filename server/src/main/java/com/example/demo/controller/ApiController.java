package com.example.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Book;
import com.example.demo.service.ApiService;
@RestController
@CrossOrigin
public class ApiController {
	@Autowired
	ApiService service;
	
	@PostMapping("/book")
	public String add(@RequestBody Book s) {
		return service.addEvent(s);
	}
	@GetMapping("/book")
	public List<Book> get(){
		return service.getEvent();
	}
	@GetMapping("/book/id/{id}")
	public Optional<Book> getId(@PathVariable int id){
		return service.getIdEvent(id);
	}
	@GetMapping("/book/name/{name}")
	public List<Book> getName(@PathVariable String name){
		return service.getByName(name);
	}
	
	@GetMapping("/book/topic/{topic}")
	public List<Book> geTopic(@PathVariable String topic){
		return service.getByTopic(topic);
	}
	
	@GetMapping("/book/author/{author}")
	public List<Book> getAuthor(@PathVariable String author){
		return service.getByAuthor(author);
	}
	
	@PutMapping("/book")
	public String put(@RequestBody Book s) {
		return service.putEvent(s);
	}
	@DeleteMapping("/book/{id}")
	public String delete(@PathVariable int id) {
		return service.deleteEvent(id);
	}
	
	
	
}
