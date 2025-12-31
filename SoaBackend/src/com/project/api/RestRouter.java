package com.project.api;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

/**
 * Classe centrale de toute l'API REST
 * Toutes les ressources sont déclarées ici
 */
@ApplicationPath("/api")
public class RestRouter extends Application {

    @Override
    public Set<Class<?>> getClasses() {

        Set<Class<?>> resources = new HashSet<>();

        // === DECLARATION DE TOUTES LES API ===
        resources.add(PersonResource.class);
        
        

        return resources;
    }
}

