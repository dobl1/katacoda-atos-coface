## Visualiser la documentation et tester l'API.
---

* Afficher la documentation graphique [Swagger UI](https://[[HOST_SUBDOMAIN]]-8080-[[KATACODA_HOST]].environments.katacoda.com/docs)

* Tester la récupération de la liste des Villes avec un appel sur /cities sur l'API exposée par le serveur générée il y a quelques minutes

`http https://[[HOST_SUBDOMAIN]]-8080-[[KATACODA_HOST]].environments.katacoda.com/cities`{{execute T2}}

* Tester la récupération de la liste des Températures avec un appel sur /temperatures sur l'API du serveur développé précedement par l'équipe Atos en plusieurs heures.

`http https://my-json-server.typicode.com/dobl1/katacoda-atos-Coface/temperatures`{{execute T2}}

> Générer du code à partir de la spécification Swagger / OpenAPI est une des grandes valeurs ajoutées de l'approche Design-First.