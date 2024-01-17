# GRAPHQL and APOLLO SERVER

Tal como dice su nombre, es un lenguaje de consultas.

En una API REST tradicional, tenemos los siguientes ENDPOINTS:

```
pokemonsite.com/api/pokemon
pokemonsite.com/api/pokemon/123
```
Estamos peticionando por una ID, lo que nos devuelve un POKEMOS diferente, segun la ID. A medida que nuestra aplicacion pueda llegar a crecer, los datos que requiera el usuario pueden ser mas complejos, en este caso podemos llegar a padecer un **OverFetching**, que es retornas mas datos de los que necesita el usuario.

Por ejemplo:

```
mysite.com/api/courses
```
Aqui nos estaria enviando toda la data disponible en la DB, que podrian ser cientos, o miles de "cursos", en este caso.

```
{
    "id": "1",
    "title": "Thud",
    "author": {...},
    "price": "10.99",
    "thumdnail_url": "...",
    "video_url": "...",
}
```
Quizás, solo necesitariamos la ID, el TITLE y el AUTHOR, y lo demás estaría sobrando en esta petición.

Por otro lado, podemos tener un **Under fetching**. Que es lo contrario, son menos datos de los que pediamos, o pocos datos que nos devuelve la petición.

```
mysite.com/api/courses/1
```
Nos devuelve lo siguiente:

```
{
    "id": "1",
    "title": "Thud",
    "author": {...},
    "price": "10.99",
    "thumdnail_url": "...",
    "video_url": "...",
}
```

Pero si queremos saber el AUTHOR, tenemos que hacer una peticion adicional:

```
mysite.com/api/author/1
```
Es en este punto donde se empiezan a complicar las peticiones, ya que si tenemos algunas anidadas, tendremos que hacer mas de una.

Gracias a GRAPHQL, esto puede simplificarce:

```
mygraphqlsite.com/graphql
```
Tenemos este simple ENDPOINT, y gracias la sintaxis de GQL podemos especificar que campos, o datos, vamos a peticionar al SERVIDOR:

```
Query {
    courses {
        id,
        title,
        thumbnail_url
    }
}
```
Solo le pedimos algunas propiedades especificas para nos las retorne. Tambien podemos pedir datos anidados con una consulta simple.

```
Query {
    courses(id: "1") {
        id,
        title,
        thumbnail_url,
        author {
            name,
            id,
            courses {
                id,
                title,
                thumbnail_url
            }
        }
    }
}
```

Todo esto manteniendo el ENDPOINT de GRAPHQL.

Lo que nos devuelve cada peticion con GQL, son GRAPHS (GRAFOS), que en esencia son tipos de datos (NODOS) conectados entre si:

![Alt text](./assets/image-1.png)

Podemos conectar los recursos, es decir, si necesitamos el "nombre" del "autor" de una "review":

![Alt text](./assets/image-2.png)


## APOLLO SANDBOX

Esta herramienta nos permite testear las peticiones con GRAPHQL:

![Alt text](./assets/image.png)

Tomemos en consideración que algunos de los datos que tenemos en nuestra DB, estan anidados, en este caso, cuando pedimos el dato del **author**, nos exige que especifiquemos cuales necesitamos, ya que anida el **name**, el **id** y **verified**.

## Crando un proyecto con APOLLO SERVER GRAPHQL

Utilizando las sintaxis conocidas para inicializar un projecto de NODEJS, adicionalmente vamos establecer la funcionalidad de MODULES en nuestro package.json, eso lo podemos hacer con la terminal:
```
npm pkg set type="module"
```
Luego instalamos las dependencias de APOLLO SERVER y GRAPHQL.

```
npm install @apollo/server graphql
```

## SCHEMA, TYPEDEFS, RESOLVERS

Los **TypeDefs** son las definiciones de los diferentes tipos de datos que queremos exponer, es decir, los datos q necesitamos en la petición. 

El **Schema** es quien describe la forma del GRAPH y la data disponible en el.



