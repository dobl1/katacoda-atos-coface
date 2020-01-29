## Générer du code NodeJS avec CodeGen à partir d'une spécification au format JSON ou YAML
---

* Lancer `certbot` pour obtenir un certificat SSL/TLS et une clé privée pour notre serveur.

`certbot certonly --standalone -n --agree-tos --register-unsafely-without-email -d [[HOST_SUBDOMAIN]]-80-[[KATACODA_HOST]].environments.katacoda.com`{{execute}}

### Extrait de la documentation pour les options utilisées.

`certonly` : Obtain or renew a certificate, but do not install it.

- `--standalone` : Run a standalone webserver for authentication.
- `-n` | `--non-interactive` : Run without ever asking for user input.
- `--agree-tos` : Agree to the ACME server's Subscriber Agreement.
- `--register-unsafely-without-email` : Specifying this flag enables registering an account with no email address.
- `-d` | `--domain` : Domain names to apply.

> Note: L'option --standalone nécessite d’écouter sur les ports 80 ou 443 pour effectuer une validation de votre certificat.
Il est donc nécessaire d’arrêter votre serveur Apache ou Nginx.