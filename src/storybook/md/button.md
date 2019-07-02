## Ods Button


###  Uso básico

```
<ods-button>Brand Button</ods-button>
```

###  Botón secundario

```
<ods-button type="secondary">Secundary Button</ods-button>
```

###  Botón deshabilitado

El atributo `disabled` determina su un botón esta deshabilitado.

```
<ods-button type="primary" disabled>Brand Button Disabled</ods-button>
<ods-button type="secondary" disabled>Secundary Button Disabled</ods-button>
```

###  Botón `type text`

Botones sin borde ni fondo.


```
<ods-button type="text">Link Button</ods-button>
<ods-button type="text" disabled>Link Button</ods-button>
```
 

###  Botón icono

Use el atributo `icon` para agregar un icono. Puede encontrar el listado de iconos en el componente de iconos. Agregar iconos a la derecha del texto se puede conseguir con un tag `<i>`. También se pueden usar iconos custom.

```
<ods-button icon="ods-icon-plus" circle size="small">This is a link with icon</ods-button>
<ods-button icon="ods-icon-arrow-right" circle></ods-button>
<ods-button icon="ods-icon-arrow-right" circle disabled></ods-button>
```

###  En negativo

Use el atributo `negative` para negativizar los botones.

```
<ods-button negative>Brand Button</ods-button>
<ods-button disabled negative>Brand Button Disabled</ods-button>
<ods-button type="secondary" negative>Secundary Button</ods-button>
<ods-button type="secondary" disabled negative>Secundary Button Disabled</ods-button>
<ods-button type="text" negative>Link Button</ods-button>
<ods-button type="text" disabled negative>Link Button</ods-button>
```

### Botones en estado de loading

El atributo `loading` permite poner el botón en estado de loading asignándole un Boolean

```
<ods-button :loading="true">Loading...</ods-button>
```


###  Tamaños

Además del tamaño por defecto, el componente Button provee tres tamaños adicionales para utilizar en diferentes escenarios.

 Use el atributo `size` para setear tamaños adicionales con `medium`, or `small`.

```
<ods-button>Default</ods-button>
<ods-button size="medium">Medium</ods-button>
<ods-button size="small">Small</ods-button>
```

### Botones a full width

Botones a ancho completo del contenedor, usando el atributo `full`

```
<ods-button full>Full Width Button</ods-button>
```
 

###  Atributos
| Atributo    | Descripción                                   | Tipo    | Valores aceptados                                  | Por defecto |
| ----------- | --------------------------------------------- | ------- | -------------------------------------------------- | ----------- |
| size        | tamaño del botón                              | string  | medium / small                               | —           |
| type        | tipo de botón                                 | string  | primary / success / warning / danger / info / text | —           |
| plain       | determinar si es o no un botón plano          | boolean | —                                                  | false       |
| round       | determinar si es o no un botón redondeado     | boolean | —                                                  | true        |
| circle      | determina si es un boton circular             | boolean | —                                                  | false       |
| loading     | determinar si es o no un botón de descarga    | boolean | —                                                  | false       |
| disabled    | deshabilitar el botón                         | boolean | —                                                  | false       |
| icon        | nombre de la clase del icono                  | string  | —                                                  | —           |
| autofocus   | misma funcionalidad que la nativa `autofocus` | boolean | —                                                  | false       |
| native-type | misma funcionalidad que la nativa `type`      | string  | button / submit / reset                            | button      |
