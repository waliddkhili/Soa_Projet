package com.project.api;

import java.util.List;
import java.util.Map;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.project.entities.Person;
import com.project.services.PersonService;
import com.project.services.PersonServiceImpl;

@Path("/persons")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PersonResource {

    private PersonService personService = new PersonServiceImpl();
    

    /**
     * GET : récupérer toutes les personnes
     * URL : /SoaBackend/api/persons
     */
    @GET
    public Response getAllPersons() {
        List<Person> persons = personService.getAllPersons();
        return Response.ok(persons).build();
    }

    /**
     * POST : ajouter une personne
     * URL : /SoaBackend/api/persons
     */
    @POST
    public Response addPerson(Person person) {
        Map<String, String> result = personService.addPerson(person);
        return Response.ok(result).build();
    }

    /**
     * PUT : modifier une personne
     * URL : /SoaBackend/api/persons/{id}
     */
    @PUT
    @Path("/{id}")
    public Response updatePerson(@PathParam("id") Long id, Person person) {

        person.setId(id);
        boolean result = personService.updatePerson(person);

        if (result)
            return Response.ok("Person updated").build();
        else
            return Response.status(Response.Status.NOT_FOUND)
                           .entity("Person not found")
                           .build();
    }

    /**
     * DELETE : supprimer une personne
     * URL : /SoaBackend/api/persons/{id}
     */
    @DELETE
    @Path("/{id}")
    public Response deletePerson(@PathParam("id") Long id) {

        boolean result = personService.deletePerson(id);

        if (result)
            return Response.ok("Person deleted").build();
        else
            return Response.status(Response.Status.NOT_FOUND)
                           .entity("Person not found")
                           .build();
    }
}

