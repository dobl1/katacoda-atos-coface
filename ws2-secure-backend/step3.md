## Modifier le seveur NodeJS pour passer de HTTP à HTTPS
---

Maintenant que notre clé privée et notre certificat sont générés
- clé privée : `/etc/letsencrypt/live/[[HOST_SUBDOMAIN]]-80-[[KATACODA_HOST]].environments.katacoda.com/privkey.pem`
- certificat : `/etc/letsencrypt/live/[[HOST_SUBDOMAIN]]-80-[[KATACODA_HOST]].environments.katacoda.com/fullchain.pem`

Nous allons modifier le serveur NodeJS précédemment généré grâce à Swagger CodeGen afin de le sécuriser avec HTTPS.

 #### Serveur HTTP

* Ouvrir le fichier `server-http/index.js`

Observez differentes parties du code :

- Import de la librairie `http`

      http = require('http');

- Variable contenant le port utilise par le serveur

      var serverPort = 8080;

- Bloc de code permettant de demarrer le serveur

      http.createServer(app).listen(serverPort, function () {
        console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
        console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
      });

#### Passer a HTTPS

- Nous allons replacer la librairies `http` par `https`

      https = require('https');

- Modifier le port et creer un objet qui contiendra cle privee et certificat

      var serverPort = 443;
      var optionsHttps = {
          key: fs.readFileSync('`/etc/letsencrypt/live/[[HOST_SUBDOMAIN]]-80-[[KATACODA_HOST]].environments.katacoda.com/privkey.pem`'),
          cert: fs.readFileSync('`/etc/letsencrypt/live/[[HOST_SUBDOMAIN]]-80-[[KATACODA_HOST]].environments.katacoda.com/fullchain.pem`')
      }; 

- Enfin creer le serveur https 

      https.createServer(optionsHttps, app).listen(serverPort, function () {
        console.log('Your server is listening on port %d (https://localhost:%d)', serverPort, serverPort);
        console.log('Swagger-ui is available on https://localhost:%d/docs', serverPort);
      });


