---
templateKey: blog-post
title: Comandos de Git que uso todos los dìas
date: 2021-01-18T17:16:47.524Z
description: >-
  Recuerdo cuando empezaba a programar, hace mas o menos 8 años, la forma de
  agregar features era utilizar un servidor FTP y alterar archivos directo en el
  servidor. La forma de hacer backups era duplicar la carpeta, y renombrarla con
  un sufijo _BACKUP. Eso ha cambiado mucho desde entonces y ahora es cosa del
  pasado. Desde que aprendì las bases de git no he vuelto a mi forma estàndar de
  trabajar. Hoy te comparto los comandos que uso a diario.
tags:
  - git
  - github
  - git commands
---
### TL;DR

Estos comandos son bastante ùtiles para trabajar en equipo en el mismo repo de git. Desde como resetear una branch local, hasta como hacer rebase interactivo, cada comando tiene un valor bastante bueno en nuestra vida de programador.

Todos los comandos estàn en [este gist](https://gist.github.com/LuisPaGarcia/cb52ac6163e9089155c3cebb99a41a68).

### Comandos

* Hacer stash de todos los archivos, nuevos o modificados.
```sh
git stash save --include-untracked "nombre del stash"
```
* Hacer stash de todos los archivos, nuevos o modificados MAS corto
```sh 
git stash -u
```
* Retomar los cambios del ultimo stash guardado
```sh
git stash pop
```

* Hacer un hard reset local de una branch
```sh
git reset --hard origin/branch_name
```

* Remover N commits de una branch
```sh
git reset --hard HEAD~5 # Ultimos 5 commits eliminados
```

* Deshacer N commits de una branch, pero dejar los cambios locales
```sh
git reset --soft HEAD~1 # Ultimo commit se convierte en cambios no commiteados
```

* Actualizar branch actual con fetch y pull en un solo
```sh
git fetch -p && git pull
```
* Agregar cambios staged al ultimo commit, edita el ultimo commit
```sh
git commit --amend --no-edit
```
* Agregar commit (usando el hash) a la actual branch
```sh
git cherry-pick ...HASH # 1 o > 1 hashes 
```
* Agregar cambios (usndo el hash) a la actual branch, como cambios no commiteados
```sh
git cherry-pick -n ...HASH # 1 o > 1 hashes
```

* Ver los commits en una linea cada uno
```sh
git log --pretty=oneline --abbrev-commit
```
* Ver los commits con un log mas legible
```sh
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```
* Obtener el hash del ultimo commit
```sh
git rev-parse --verify HEAD
```
* Usar git rebase interactive para eliminar commits dentro de la branch 
```sh
git rebase -i HEAD~N # N es el numero de los ultimos de commits a evaluar
```

* Usar siempre nano para editar rebases, mensajes de git, y asi
```sh
git config --global core.editor "nano"
```

* Como solucionar el CRLF problem en Windows y Git, [fuente] (https://stackoverflow.com/questions/49228693/how-to-change-eol-for-all-files-from-clrf-to-lf-in-visual-studio-code)

```sh
git config core.autocrlf false && git rm --cached -r . && git reset --hard
```

* Asumir que un archivo no ha sido cambiado
```sh
git update-index --assume-unchanged /path/to/file
```

Espero que te sirvan.

Happy coding!
