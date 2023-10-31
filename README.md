## Bienvenue chez Argent BANK

Je viens d’intégrer Argent Bank comme développeur front-end. Argent Bank est une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire. Je travaille avec Mila, la cheffe de projet, pour la mise en place du tableau de bord des utilisateurs. Nous recevons deux mails du CTO, Avery Moreau.

### Mail 1 -> Phase 1 🚀

**Bonjour Mila et l’équipe,**

Nous allons pouvoir commencer à travailler sur notre application web React pour le nouveau système d'authentification des utilisateurs. Ayant des délais très serrés, nous comptons beaucoup sur l’équipe !

Voici un aperçu de ce dont nous avons besoin pour la phase 1 : Authentification des utilisateurs.

#### Tâches à réaliser :
- Créer l’application web complète et responsive avec React. Comme point de départ, nous vous avons fourni le HTML statique et le CSS pour la page d'accueil, la page de connexion et la page de profil.
- Utiliser Redux pour gérer le state de l'ensemble de l'application.
- L'utilisateur peut visiter la page d'accueil.
- L'utilisateur peut se connecter au système.
- L'utilisateur peut se déconnecter du système.
- L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès.
- L’utilisateur ne peut pas modifier son nom ni son prénom, mais il peut modifier son pseudo.

Vous pouvez commencer par forker notre repo existant et suivre l’avancement du travail en créant des issues GitHub, grâce aux modèles d’Issues que nous y avons inclus.

Nos ingénieurs back-end ont déjà créé toutes les routes API dont vous avez besoin. Vous trouverez toute la documentation Swagger à l'intérieur du repo.

Un petit point sur Redux. À ce stade de l'application, cela peut paraître un peu trop, pour le peu de données à passer entre les composants. Mais gardez bien en tête que lorsque nous travaillerons sur les transactions, nous aurons alors beaucoup plus de données à gérer.

À noter lors de l’intégration du contenu des pages : nous aimerions mettre en place des bonnes pratiques de Green Code. Il faut veiller en particulier à 2 aspects lors de l’intégration :

- Que les images soient optimisées tant sur le poids que sur les dimensions.
- Que le code soit optimisé par la création, le plus possible, de composants réutilisables.

Merci à vous, Je vous envoie un mail demain pour la deuxième étape.

*Avery.*

### Mail 2 -> Phase 2 📈

Pour la phase 2 : Transactions, nous sommes encore en phase de conception. Nous mettons au point une fonctionnalité pour les transactions, qui doit pouvoir permettre aux utilisateurs :

- Visualiser toutes leurs transactions pour le mois en cours, groupées par compte.
- Visualiser les détails d'une transaction dans une autre vue.
- Ajouter, modifier ou supprimer des informations sur une transaction (on ne supprimera ou n'ajoutera pas de transaction).

Afin d’avoir plusieurs avis sur la question, et comme vous travaillez sur l’application dans la phase 1, nous voulons connaître votre avis sur la façon dont vous pensez que les routes API devraient être modélisées du côté back-end. Nous avons besoin que vous nous fournissiez un document décrivant les routes API proposées pour les manipulations sur les transactions, en suivant les directives de Swagger.

Parmi les éléments clés à spécifier pour chaque endpoint de l’API, il faudra :

- La méthode HTTP (ex. : GET, POST, etc.).
- La route (ex. : /store/inventory).
- La description de ce à quoi correspond l’endpoint (ex. : Retour de l'inventaire des animaux de compagnie).
- Les paramètres possibles pour tenir compte des différents scénarios (ex. : itemId (facultatif) = ID de l'article spécifique à demander à la base de données d'inventaire).
- Les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint (ex. : 404 : réponse d'erreur d'article inconnu).

Vous pouvez utiliser la page des transactions présentée dans les maquettes pour guider vos choix (mais vous n'avez pas besoin d'implémenter cette page). Assurez-vous simplement que le document soit exporté vers un fichier YAML (c'est-à-dire Fichier > Enregistrer sous YAML) en utilisant la syntaxe Swagger, qui peut être exportée dans l'outil d'édition de Swagger.

Nous ferons une revue de code et discuterons ensemble de la proposition d'API une fois que tout sera terminé.

Au plaisir de travailler avec vous !

*Avery Moreau*
