## Lancer le server HTTPS
---

* Lancer le server

`cd server-http`{{execute}}

`npm start`{{execute}}

* Vous pouvez également lancer le serveur de la correction en cas de soucis

`cd server-https-solution`{{execute}}

`sed -i -e 's/<SERVER>/[[HOST_SUBDOMAIN]]-80-[[KATACODA_HOST]]/g' index.js`{{execute}}

`npm start`{{execute}}

Tester un appel

`http https://[[HOST_SUBDOMAIN]]-443-[[KATACODA_HOST]].environments.katacoda.com/cities`{{execute T2}}
