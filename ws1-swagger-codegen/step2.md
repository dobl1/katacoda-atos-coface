## Générer du code NodeJS avec CodeGen à partir d'une spécification au format JSON ou YAML.
---

### Avec votre fichier
* au format JSON (remplacez le contenu du fichier **your-spec.json**)

`java -jar swagger-codegen-cli.jar generate -i your-spec.json -l nodejs-server -o server/node`{{execute}}

* au format YAML (remplacez le contenu du fichier **your-spec.yaml**)

`java -jar swagger-codegen-cli.jar generate -i your-spec.yaml -l nodejs-server -o server/node`{{execute}}

### A partir de la correction du Lab #1

`java -jar swagger-codegen-cli.jar generate -i lab-1-correction.yaml -l nodejs-server -o server/node`{{execute}}