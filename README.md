# Projet SOA – Gestion des Personnes

## Description

Ce projet a été réalisé dans le cadre de l’évaluation de TP de la matière **SOA**. Il s’agit d’une application web basée sur une architecture **frontend / backend**, permettant la gestion des personnes (CRUD).

L’application est composée de deux parties principales :

* un **backend RESTful** développé en **Java (JAX-RS + JPA)**,
* un **frontend** développé avec **React**.

---

## Technologies utilisées

### Backend

* **Java 8**
* **Maven 3.9.12**
* **JAX-RS (Jersey)**
* **JPA (Hibernate)**
* **Serveur Apache Tomcat 9**
* **Base de données relationnelle**

### Frontend

* **React**
* **Axios** (requêtes HTTP)
* **React Router DOM** (navigation)
* **CORS** pour la communication avec le backend

---

## Architecture du projet

### Backend

Le backend expose des **services REST** permettant la gestion de l’entité `Person`.

#### Entité Person

* `id` : Long
* `name` : String
* `age` : int

#### Fonctionnalités (Endpoints)

* **GetAllPersons** : récupérer toutes les personnes
* **AddPerson** : ajouter une personne
* **GetPerson** : récupérer une personne spécifique
* **UpdatePerson** : modifier les données d’une personne
* **DeletePerson** : supprimer une personne

---

### Frontend

Le frontend est développé avec **React** et permet d’interagir avec les services REST du backend.

#### Composants principaux

* **NavigationMenu** : menu principal de l’application
* **PersonForm** : ajout et modification des personnes
* **SearchBar** : recherche des personnes par nom
* **PersonList** : affichage de la liste des personnes

Les appels aux API REST sont centralisés dans le fichier **PersonService**.

---

## Fonctionnement de l’application

* Le frontend fonctionne sur le **port 5173**
* Le backend fonctionne sur un **port différent** (ex. 8080)
* La communication entre les deux parties est assurée via **CORS**

### Scénarios possibles

* Ajouter une personne (nom et âge)
* Afficher toutes les personnes
* Rechercher une personne par nom
* Modifier les données d’une personne
* Supprimer une personne avec confirmation

---

## Installation et lancement

### Prérequis

* **Java JDK 8+**
* **Maven**
* **Node.js** et **npm**
* **Serveur Tomcat** (ou équivalent)
* Une base de données relationnelle configurée

### Lancement du backend

1. Importer le projet backend dans un IDE (Eclipse / IntelliJ)
2. Configurer la base de données dans le fichier `persistence.xml`
3. Démarrer le serveur Tomcat
4. Vérifier que l’API REST est accessible

### Lancement du frontend

1. Se placer dans le dossier frontend
2. Installer les dépendances :

   ```bash
   npm install
   ```
3. Lancer l’application :

   ```bash
   npm run dev
   ```
4. Accéder à l’application via : `http://localhost:5173`

---

---

## Objectifs pédagogiques

Ce projet permet de mettre en pratique :

* les concepts de **SOA**
* les **services REST** avec JAX-RS
* la persistance des données avec **JPA/Hibernate**
* la séparation **frontend / backend**
* l’intégration entre **React** et une API REST Java

---

## Auteur

* **Étudiant** : Groupe TP2TD1
* **Matière** : SOA

---

## Remarque

Ce projet est réalisé dans un cadre académique et a pour objectif l’apprentissage et la mise en pratique des technologies étudiées.
