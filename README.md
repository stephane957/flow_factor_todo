# flow_factor_todo
Une application de to-do list simple conçue pour les professionnels de la santé mentale, avec une interface multi-utilisateurs. Cette application comprend un backend API REST développé en .NET 8 et un frontend Angular.

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

```
FlowFactorTodo/
├── FlowFactorTodo.API/          # Backend .NET 8
│   ├── Controllers/
│   ├── Models/
│   ├── Program.cs
│   └── FlowFactorTodo.API.csproj
├── flowfactor-ui/               # Frontend Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── services/
│   │   │   └── task-list/
│   │   └── main.ts
│   └── package.json
└── README.md
```

# Prérequis
- .NET 8
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
3. L'API sera accessible à l'adresse :``https://localhost:7000`` ( ou similaire)
4. La documentation Swagger/OpenAPI sera disponible à : ``https://localhost:7000/swagger``

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

# Utilisation

1. Assurez-vous que le backend et le frontend sont en cours d'exécution
2. Ouvrez votre navigateur à l'adresse ``http://localhost:4200``
3. Utilisez le formulaire pour ajouter de nouvelles tâches :
  - Entrez un titre (obligatoire)
  - Ajoutez un description (optionnelle)
  - Spécifiez l'utilisateur assigné
4. Les tâches ajoutées s'afficheront dans la liste ci-dessous

# Technologies Utilisées

- **Backend**: .NET 8, Entity Framework Core, SQLite
- **Frontend**: Angular, TypeScript, HTML/CSS
- **Outils**: Swagger/OpenAPI pour la documentation d'API

# Notes de Développement

- La base de données SQLite est automatiquement créée au premier lancement

- Le CORS est configuré pour autoriser les requêtes depuis ``http://localhost:4200``

- L'application est conçue pour être simple et facile à étendre

# Auteur
Stéphane Toyo Demanou
