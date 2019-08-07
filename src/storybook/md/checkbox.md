# Checkbox

Un grupo de opciones para manejar múltiples elecciones.

## Uso básico

Checkbox puede ser usado para alternar entre dos estados.

 Define `v-model`(enlaza la variable) en `ods-checkbox`. El valor por defecto es un `Boolean` para un `checkbox`, y se convierte en `true` cuando este es seleccionado. El contenido dentro del tag `ods-checkbox` se convierte en la descripción al costado del botón del checkbox.

La prop `checkboxLabel` será necesaria para superar un test de accesibilidad. Require un string que se aplicará como propiedad `for` en el label y como `id` en el input. No repitas valores dentro de una misma vista.

```

<ods-checkbox
  v-model="checked"
  checkboxLabel="my-checkbox">
  Opción
</ods-checkbox>

<script>
{
  data() {
    return {
      checked: true
    }
  }
}
</script>
```

## Estado Deshabilitado

Estado deshabilitado para el checkbox.

Setear el atributo `disabled`.

```
<ods-checkbox v-model="checked1" disabled>Opción</ods-checkbox>
<ods-checkbox v-model="checked2" disabled>Opción</ods-checkbox>

<script>
{
  data() {
    return {
      checked1: false,
      checked2: true
    }
  }
}
</script>
```
## Atributos de Checkbox

| Atributo      | Descripción                              | Tipo                      | Valores aceptados     | Por defecto |
| ------------- | ---------------------------------------- | ------------------------- | --------------------- | ----------- |
| label         | valor del Checkbox si es usado dentro de un tag `checkbox-group` | string / number / boolean | —                     | —           |
| true-label    | valor del Checkbox si está marcado       | string / number           | —                     | —           |
| false-label   | valor del Checkbox si no está marcado    | string / number           | —                     | —           |
| disabled      | especifica si el Checkbox está deshabilitado | boolean                   | —                     | false       |
| border        | especifica si agrega un borde alrededor del Checkbox | boolean                   | —                     | false       |
| size          | tamaño del Checkbox, sólo funciona si `border` es true | string                    | medium / small / mini | —           |
| name          | atributo 'name' nativo                   | string                    | —                     | —           |
| checked       | especifica si el Checkbox está marcado   | boolean                   | —                     | false       |
| indeterminate | similar a `indeterminate` en el checkbox nativo | boolean                   | —                     | false       |

## Eventos de Checkbox

| Nombre | Descripción                              | Parametros           |
| ------ | ---------------------------------------- | -------------------- |
| change | se ejecuta cuando el valor enlazado cambia | el valor actualizado |

## Atributos de Checkbox-group

| Atributo   | Descripción                              | Tipo    | Valores aceptados     | Por Defecto |
| ---------- | ---------------------------------------- | ------- | --------------------- | ----------- |
| size       | tamaño de los checkboxes de tipo botón o los checkboxes con border | string  | medium / small / mini | —           |
| disabled   | especifica si los checkboxes anidados están deshabilitados | boolean | —                     | false       |
| min        | cantidad mínima de checkboxes que deben ser marcados | number  | —                     | —           |
| max        | cantidad máxima de checkboxes que pueden ser marcados | number  | —                     | —           |
| text-color | color de fuente cuando el botón está activo | string  | —                     | #ffffff     |
| fill       | color de border y de fondo cuando el botón está activo | string  | —                     | #409EFF     |

## Eventos de Checkbox-group

| Nombre de Evento | Descripción                              | Parametros           |
| ---------------- | ---------------------------------------- | -------------------- |
| change           | se ejecuta cuando el valor enlazado cambia | el valor actualizado |

## Atributos de Checkbox-button

| Atributo    | Descripción                              | Tipo                      | Valores aceptados | Por defecto |
| ----------- | ---------------------------------------- | ------------------------- | ----------------- | ----------- |
| label       | valor del checkbox cuando es usado dentro de un `checkbox-group` | string / number / boolean | —                 | —           |
| true-label  | valor del checkbox si este está marcado  | string / number           | —                 | —           |
| false-label | valor del checkbox si este no está marcado | string / number           | —                 | —           |
| disabled    | especifica si el checkbox está deshabilitado | boolean                   | —                 | false       |
| name        | atributo 'name' del checbox nativo       | string                    | —                 | —           |
| checked     | si el checkbox está marcado              | boolean                   | —                 | false       |
