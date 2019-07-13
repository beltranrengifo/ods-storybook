## Breadcrumb

Muestra la localización de la página actual, haciendo más fácil el poder ir a la página anterior.

###  Uso básico


 En `ods-breadcrumb`, cada `ods-breadcrumb-item` es un tag que representa cada nivel empezando desde la homepage. Este componente tiene un atributo `String` llamado `separator`, el mismo determina el caracter separador. El valor por defecto es '>'.

```
<ods-breadcrumb separator=">">
  <ods-breadcrumb-item :to="{ path: "/" }">Breadcrumb 1</ods-breadcrumb-item>
  <ods-breadcrumb-item><a href="/">Breadcrumb 2</a></ods-breadcrumb-item>
  <ods-breadcrumb-item>Breadcrumb 3</ods-breadcrumb-item>
  <ods-breadcrumb-item>promotion detail</ods-breadcrumb-item>
</ods-breadcrumb>
```
 

###  Icono separador

 Utilice `separator-class` para que use la tipografía `icon` como separador.

```
<ods-breadcrumb separator-class="ods-icon-arrow-right">
  <ods-breadcrumb-item :to="{ path: '/' }">homepage</ods-breadcrumb-item>
  <ods-breadcrumb-item>promotion management</ods-breadcrumb-item>
  <ods-breadcrumb-item>promotion list</ods-breadcrumb-item>
  <ods-breadcrumb-item>promotion detail</ods-breadcrumb-item>
</ods-breadcrumb>
```

###  Programado con vue-router

Para configurar las bradcrumbs con el route de Vue, revisa la [documentación de front](https://www.onesaitplatform.online/web/onesait-docs/code-guide/onesait/main-header.html#_2-breadcrumbs)


###  Breadcrumb atributos
| Atributo        | Descripción                            | Tipo   | Valores aceptados | Por defecto |
| --------------- | -------------------------------------- | ------ | ----------------- | ----------- |
| separator       | caracter separador                     | string | —                 | /           |
| separator-class | nombre de la clase del icono separador | string | —                 | -           |

###  Breadcrumb Item atributos
| Atributo | Descripción                              | Tipo          | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | ------------- | ----------------- | ----------- |
| to       | ruta del link, lo mismo que `to` de `vue-router` | string/object | —                 | —           |
| replace  | si `true`,  la navegación no dejara una entrada en la historia | boolean       | —                 | false       |





