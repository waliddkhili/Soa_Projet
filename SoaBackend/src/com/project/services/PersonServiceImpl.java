package com.project.services;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.project.entities.Person;

public class PersonServiceImpl implements PersonService {
	EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("project");
	EntityManager entityManager = entityManagerFactory.createEntityManager();

	@Override
	public List<Person> getAllPersons() {
		List<Person> persons = entityManager.createQuery("SELECT p FROM Person p", Person.class).getResultList();

		if (persons.isEmpty()) {
			System.out.println("No person found.");
		} else {
			for (Person person : persons) {
				System.out.println(person.getName());
			}
		}

		return persons;
	}

	@Override
	public Map<String, String> addPerson(Person p) {
		Map<String, String> mapPerson = new HashMap<>();
		try {
			if (!entityManager.getTransaction().isActive())
				entityManager.getTransaction().begin();
			entityManager.persist(p);
			entityManager.getTransaction().commit();
			entityManager.clear();
			System.out.println("Record Successfully Inserted In The Database");

			mapPerson.put("Id ", Long.toString(p.getId()));
			mapPerson.put("Name", p.getName());
			mapPerson.put("Age", Integer.toString(p.getAge()));

		} catch (Exception e) {
			e.printStackTrace();
			if (!entityManager.getTransaction().isActive())
				entityManager.getTransaction().rollback();
			System.out.println("Erreur add");
			mapPerson.put("error ", "Erreur add");

		}
		return mapPerson;
	}

	@Override
	public Person getPerson(int id) {
		entityManager.getTransaction().begin();
		try {
			return entityManager.find(Person.class, id);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(e.getMessage());
			return null;
		}
	}

	@Override
	public boolean updatePerson(Person p) {
		entityManager.getTransaction().begin();
		try {
			entityManager.merge(p);
			entityManager.getTransaction().commit();
			entityManager.clear();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Erreur update");
			return false;
		}
	}
	/*
	*/

	@Override
	public boolean deletePerson(Long id) {
		entityManager.getTransaction().begin();
		try {
			entityManager.remove(entityManager.find(Person.class, id));
			entityManager.getTransaction().commit();
			entityManager.clear();
			System.out.println("Delete Successfully In The Database");
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(e.getMessage());
			return false;
		}
	}

}