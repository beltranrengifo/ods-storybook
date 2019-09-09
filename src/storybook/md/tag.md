# Tag

Se utiliza para marcar y seleccionar.

##  Uso básico

Utilice el atributo `type` para definir el tipo de etiqueta. Además, el atributo `color` se puede utilizar para establecer el color de fondo de la etiqueta.

```
<ods-tag>Default</ods-tag>
<ods-tag type="info">info</ods-tag>
<ods-tag type="secondary">secondary</ods-tag>
<ods-tag type="success">success</ods-tag>
<ods-tag type="danger">danger</ods-tag>
```

##  Etiqueta removible

el atributo `closable` puede usarse para definir una etiqueta removible. Acepta un `Boolean`. De forma predeterminada, la eliminación de la etiqueta tiene una animación que se desvanece. Si no quiere usarlo, puede configurar el atributo `disable-transitions` , que acepta `Boolean`, como `true`. Se dispara el evento `close` cuando la etiqueta es removida. 

```
<ods-tag closable>Default</ods-tag>
<ods-tag closable type="info">info</ods-tag>
<ods-tag closable type="secondary">secondary</ods-tag>
<ods-tag closable type="success">success</ods-tag>
<ods-tag closable type="danger">danger</ods-tag>
```
 
##  Atributos
| Atributo            | Descripción                         | Tipo    | Valores aceptados           | Por defecto |
| ------------------- | ----------------------------------- | ------- | --------------------------- | ----------- |
| type                | tema                                | string  | success/info/warning/danger | —           |
| closable            | si el Tag puede ser removido        | boolean | —                           | false       |
| disable-transitions | si se deshabilitan las animaciones  | boolean | —                           | false       |
| hit                 | si el  Tag tiene un borde resaltado | boolean | —                           | false       |
| color               | color de fondo del Tag              | string  | —                           | —           |
| size                | tamaño del Tag                      | string  | medium / small / mini       | —           |

##  Eventos
| Nombre | Descripción                          | Parametros |
| ------ | ------------------------------------ | ---------- |
| close  | se disoara cuando el Tag es removido | —          |