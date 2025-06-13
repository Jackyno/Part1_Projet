# Blog Technique – Projet Phase 1 : Application Monopage (SPA)

# Objectif du projet
Le but de ce projet était de construire une application monopage (SPA) avec HTML, CSS et JavaScript, qui consomme une API publique sans clé d’authentification. Ce projet nous a permis de mettre en pratique tout ce que nous avons appris : manipulation du DOM, gestion des événements, appels API, et programmation asynchrone.

# Description de l’application
J’ai utilisé l’API publique [Studio Ghibli](https://ghibliapi.vercel.app) pour récupérer une liste de films. Mon application permet à l’utilisateur de :

- Voir la liste des films avec leur titre, réalisateur et description.
- Filtrer les films par nom dans un champ de recherche.
- Basculer entre les thèmes sombre et clair (mode dark/light).

Tout cela se fait sans rechargement de page, en manipulant dynamiquement le DOM avec JavaScript.

# Ce que j’ai appris
- Utiliser `fetch()` pour appeler une API REST publique en JavaScript.
- Manipuler les données JSON et les afficher dans le DOM.
- Gérer plusieurs types d’événements avec `.addEventListener()` : `click`, `input`, `change`.
- Utiliser les méthodes de tableau comme `.forEach()`, `.filter()`, `.map()`.
- Travailler avec une architecture SPA sur une seule page HTML.
- Créer un dépôt GitHub bien structuré, avec un bon README, des commits fréquents et clairs.

# Défis rencontrés
- Le débogage d’erreurs asynchrones avec `fetch()` (surtout les erreurs réseau).
- La gestion de l’état du mode sombre sans rechargement.
- Gérer la logique du filtrage en direct sans ralentir l’interface.

# Améliorations futures
- Ajouter des transitions et animations CSS pour rendre l’interface plus fluide.
- Gérer les erreurs API plus élégamment avec des messages d’erreur.
- Ajouter un système de tri (par année, par réalisateur).


# Dépôt GitHub

[🔗 Lien vers le dépôt GitHub](https://github.com/Jackyno/Part1_Projet.git)

Merci d’avoir lu ce blog technique !
