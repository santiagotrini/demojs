# Demo JS

## Pasos

```shell
$ git clone https://github.com/santiagotrini/termux-config
$ cd termux-config
$ cp .vimrc ~
$ cd
$ curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
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

Generar un Personal Access Token con scope repo para usar como password.

Con eso tenemos el commit inicial.

## Agregando codigo al repo

```shell
$ touch index.html main.js
$ vim index.html
```

Usamos Emmet para escribir rapidamente el HTML. Pueden leer sobre Emmet en https://emmet.io.
En Vim nos ponemos en modo Insert y tipeamos `html:5` y apretamos `Ctrl+y` y luego la coma (`,`).
Adentro de `body` creamos un formulario tipeando `<form>` y dentro de el volvemos a usar Emmet para crear
dos inputs tipeando `input:text` (`Ctrl+y ,`) y `input:submit` (`Ctrl+y ,`).
Cerramos el `</form>`. Agregamos un `h3` tipeando `h3#bin` seguido de `Ctrl+y ,`.
Por ultimo un `script` tipeando `script:src` seguido de `Ctrl+y ,`.

Deberia quedar asi el `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <form onsubmit="handleSubmit(event)">
    <input type="text" name="n">
    <input type="submit" value="enviar">
  </form>
  <h3 id="bin"></h3>
  <script src="main.js"></script>
</body>
</html>
```

Luego commitear los cambios.

```shell
$ git add index.html
$ git commit -m "agrega index.html"
```

Por ultimo agregar JavaScript en un archivo llamado `main.js`

```js
function handleSubmit(event) {
  event.preventDefault();
  let n = +document.forms[0].n.value;
  let h3 = document.querySelector('#bin');
  h3.textContent = n.toString(2);
}
```

Y commitear los cambios y pushear.

```shell
$ git add main.js
$ git commit -m "agrega JS"
$ git push
```

Por ultimo configurar GitHub Pages para ver el sitio online desde el repo.

