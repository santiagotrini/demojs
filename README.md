# Demo JS

## Pasos

```shell
$ git clone https://github.com/santiagotrini/termux-config
$ cd termux-config
$ cp .vimrc ~
$ cd
$ vim .vimrc
```

En Vim  tirar comando :PlugInstall y cerrar el Vim

```shell
$ mkdir demojs
$ cd demojs
$ git init &> /dev/null
$ echo "# Demo JS" > README.md
$ git config user.name "Tu nombre"
$ git config user.email "Tu mail"
$ git add .
$ git commit -m "commit inicial"
```

Y despues nos vamos a GitHub y nos logeamos.
Creamos un repo llamado demojs (vacio y publico)

```shell
$ git remote add origin https://github.com/usuario/demojs
$ git push -u origin master
```

Generar un Personal Access Token con scope repo para usarcomo password.
