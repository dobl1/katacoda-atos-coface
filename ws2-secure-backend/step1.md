## Installer l'outil CLI Certbot pour Let's encrypt
---

> Let’s Encrypt est une autorité de certification libre, automatisée et ouverte qui fournit des certificats gratuits X.509 pour le protocole cryptographique SSL/TLS au moyen d’un processus automatisé (via l’outil certbot).\
Certbot est donc destiné à se passer du processus complexe actuel impliquant la création manuelle, la validation, la signature, l’installation et le renouvellement des certificats pour la sécurisation des sites internet.


* Ajouter le repository `certbot`

`add-apt-repository -y ppa:certbot/certbot && apt-get update`{{execute}}

* Installer le package `certbot`

`apt-get install -y certbot`{{execute}}

* Tester l'installation

`certbot --version`{{execute}}