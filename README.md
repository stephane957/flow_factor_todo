# flow_factor_todo
Une application de to-do list simple conçue pour les professionnels de la santé mentale, avec une interface multi-utilisateurs. Cette application comprend un backend API REST développé en .NET 9 et un frontend Angular.

# Fonctionnalités
## Backend (API .NET)
- ```POST / api/tasks``` - Ajouter une nouvelle tâche avec titre, description, statut et utilisateur assigné
- ```GET api/tasks``` - Récupérer la liste de toutes les tâches
- Base de données SQLite intégrée pour un démarrage facile
## Frontend (Angular)
- Interface simple pour ajouter de nouvelles tâches
- Affichage de la liste des tâches existantes
- Design responsive et convivial

# Structure du Projet

- `/Backend` - API REST .NET 8 avec Entity Framework Core
- `/Frontend` - Application Angular avec composants standalone

# Prérequis
- .NET 9 SDK
- Node.js (v18 ou supérieur)
- Angular CLI

# Installation et Démarrage

## Backend (.NET API)

1. Naviguez vers le dossier du backend :
```
cd FlowFactorTodo.API
```

2. Restaurez les dépendances et lancez l'application :
```
dotnet restore
dotnet run
```
3. L'API sera accessible à l'adresse :``https://localhost:5209`` ( ou similaire)

## Frontend (Angular)

1. Ouvrez un nouveau terminal et naviguez vers le dossier du frontend :
```
cd flowfactor-ui
```
2. Installez les dépendances et lancez l'application :
```
npm install
ng serve
```
3. L'application sera accessible à l'adresse : ``http://localhost:4200``

# Fonctionnalités implémentées

- ✅ Ajout de tâches avec titre, description, statut et utilisateur assigné
- ✅ Affichage de la liste des tâches
- ✅ Modification du statut des tâches (À faire, En cours, Terminé)
- ✅ Interface responsive avec validation des formulaires
- ✅ Architecture scalable avec DTOs et séparation des concerns

# Utilisation

1. Assurez-vous que le backend et le frontend sont en cours d'exécution
2. Ouvrez votre navigateur à l'adresse ``http://localhost:4200``
3. Utilisez le formulaire pour ajouter de nouvelles tâches :
  - Entrez un titre (obligatoire)
  - Ajoutez un description (obligatoire)
  - Spécifiez l'utilisateur assigné
4. Les tâches ajoutées s'afficheront dans la liste ci-dessous

# Technologies Utilisées

- **Backend**: .NET 9, Entity Framework Core, SQLite
- **Frontend**: Angular, TypeScript, HTML/CSS

# Notes de Développement

- La base de données SQLite est automatiquement créée au premier lancement

- Le CORS est configuré pour autoriser les requêtes depuis ``http://localhost:4200``

- L'application est conçue pour être simple et facile à étendre

# Auteur
Stéphane Toyo Demanou
