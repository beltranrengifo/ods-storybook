# Logotipo onesait

##  Modificar textos

Los tres textos se modifican con props: **suite, product y productModule**.
El único texto obligatorio es el **product**. El resto pueden ser omitidos y el componente se reajusta de manera automática.

```
<ods-logo suite="suite" product="product" product-module="module"></ods-logo>
<ods-logo product="product" product-module="module"></ods-logo>
<ods-logo product="product"></ods-logo>
```

##  Versión para el header**

El atributo **simple** elimina del logo el texto de _onesait_ y el texto correspondiente a la `prop="suite"`, generando una versión simplicada del logo, indicada especialmente para el header de las pantallas internas de los productos Onesait.

```
<ods-logo product="product" simple></ods-logo>
```

##  Versión onesait

El atributo **onesait** elimina la dimensión, el texto del producto y del módulo, dejando visible el logotipo de _onesait_ y el texto de la suite, si lo hubiera. 

```
<ods-logo suite="suite" :size="1.3" onesait></ods-logo>
```

##  Modificar el color


Por defecto se usa el valor `#193b47`. La propiedad `secondary` cambia el color a `#000`. La propiedad `negative` cambia el color a `#fff`

```
<ods-logo secondary></ods-logo>

<span style="background: black; display: inline-block">
	<ods-logo negative :width="200"></ods-logo>
</span>	
```

##  Modificar el tamaño

El tamaño del logotipo se puede modificar con la propiedad `size`.
El valor por defecto es 1.
Usando `size="2"` se aumentaría el logotipo al doble de su tamaño.

```
<ods-logo :size="1.2"></ods-logo>
```

##  Modificar el ancho (desbordes)


En casos donde el texto desborde la caja y se corte, se puede aumentar el ancho con la propiedad `width`. Recuerda usar los `:` delante para poder pasar un Number como prop. Por defecto el ancho inicial es 275px.

```
<ods-logo suite="suite" product="product name really long" productModule="module" :width="430"></ods-logo>
```

##  Link

Por defecto, el logo funciona como link a la raíz `/`. Si se detecta Vue Route, funcionará como `router-link`, en caso contrario se pintará un etiqueta `<a>` estándar.


La ruta se puede sobreescribir con la prop `to="/example"`.

```
<ods-logo to="/custom-destination"></ods-logo>
```

El funcionamiento como link se puede desactivar en caso necesario seteando a `false` la prop `homeLink`

```
<ods-logo :home-link="false"></ods-logo>
```

##  Atributos

| Atributo    | Descripción                                   | Tipo    | Valores aceptados                                  | Por defecto |
| ----------- | --------------------------------------------- | ------- | -------------------------------------------------- | ----------- |
| size        | tamaño del logo                               | number  | Positivos enteros o flotantes. Usa CSS scale       | 1           |
| suite       | texto para la suite                           | string  | -                                                  | —           |
| product     | texto para el producto                        | string  | -                                                  | —           |
|productModule| texto para la módulo                          | string  | -                                                  | —           |
| width       | ancho de la caja por si desborda el texto     | number  | -                                                  | 275         |
| secondary   | cambia el color por defecto a #000            | boolean  | -                                                  | false     |
| negative    | cambia el color por defecto a #fff            | boolean  | -                                                  | false     |
| homeLink    | activa/desactiva el funcionamiento como link  | boolean | -                                                  | true        |
| simple      | versión simplificada del logo                 | boolean | -                                                  | false       |

## Changelog

### Version 0.0.1 (05/10/18)

Versión inicial

### Version 0.0.2 (09/10/18)

Colores preestablecidos: default, secondary, negative
Funcionamiento como link/router-link/span (desactivado)

### Version 0.0.3 (24/10/18)

Versión simplificada
	