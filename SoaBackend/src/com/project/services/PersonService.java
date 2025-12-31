package com.project.services;

import java.util.List;
import java.util.Map;

import com.project.entities.Person;

public interface PersonService {
	public List<Person> getAllPersons();
	public Map<String, String> addPerson(Person p);
	public Person getPerson(int id);
	public boolean updatePerson(Person p);
	public boolean deletePerson(Long id);


	/*
	

	

	;*/
}