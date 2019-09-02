#Input

Ingresa datos usando el ratón o teclado.

## Uso básico

## Tamaño

Añada el atributo `size` para cambiar el tamaño del Input. Además del tamaño predeterminado, hay otras opciones: `micro`, `deci`, `hecto`, `mega` y `exa`. **Por regla general se recomienda usar el input con ancho al 100%**.

```
<div class="input-sizes">
<ods-input
  size="micro"
  placeholder="Micro, 72px"
  v-model="input7">
</ods-input>
<ods-input
  size="deci"
  placeholder="Deci, 152px"
  v-model="input8">
</ods-input>
<ods-input
  size="hecto"
  placeholder="Hecto, 204px"
  v-model="input9">
</ods-input>
<ods-input
  size="mega"
  placeholder="Mega, 304px"
  v-model="input11">
</ods-input>
<ods-input
  size="exa"
  placeholder="Exa, 432px"
  v-model="input12">
</ods-input>
<ods-input
  placeholder="Default, 100%"
  v-model="input6">
</ods-input>
</div>
<script>
{
  data() {
    return {
      input6: '',
      input7: '',
      input8: '',
      input9: '',
      input11: '',
      input12: ''
    }
  }
}
</script>
```

## Fondo

La prop `isWhite` permite usar el input con el fondo blanco. El color de texto no varía.

```
<ods-input placeholder="Please input" v-model="input"></ods-input>
<ods-input placeholder="Please input" v-model="input" isWhite></ods-input>

<script>
{
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style>
.ods-input:first-child {
  margin-bottom: 12px;
}
</style>
```

## Labels

En caso de necesitar usar label para el input (por accesibilidad) se dispone de la prop `label`, que se usará para el atributo _for_ del label, para el _id_ del input y para el texto a mostrar.
Adicionalmente, Se puede especificar un _id_ para el input, que remplazará los valores del _for_ para el label y del _id_ para el input

```
<ods-input placeholder="Please input" v-model="input" label="My input label" />
<ods-input placeholder="Please input" v-model="input" label="My input label with id" id="my-custom-id"/>

<script>
{
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style>
.ods-input:first-child {
  margin-bottom: 12px;
}
</style>
```


## Disabled

 Deshabilite el Input con el atributo  `disabled`.

```
<ods-input
  placeholder="Please input"
  v-model="input1"
  :disabled="true">
</ods-input>

<script>
{
  data() {
    return {
      input1: ''
    }
  }
}
</script>
```


## Input con icono

Añada un icono para indicar el tipo de Input.

 Para añadir iconos en el Input, puede utilizar los atributos `prefix-icon` y `suffix-icon` . Además, los slots con nombre `prefix` y `suffix` también funcionan.

```
<div class="demo-input-suffix">
  <span class="demo-input-label">Using attributes</span>
  <ods-input
    placeholder="Pick a date"
    suffix-icon="ods-icon-calendar"
    size="deci"
    v-model="input2">
  </ods-input>
  <ods-input
    placeholder="Type something"
    prefix-icon="ods-icon-search"
    size="deci"
    v-model="input21">
  </ods-input>
</div>
<div class="demo-input-suffix">
  <span class="demo-input-label">Using slots</span>
  <ods-input
    placeholder="Pick a date"
    size="deci"
    v-model="input22">
    <i slot="suffix" class="ods-input__icon ods-icon-calendar"></i>
  </ods-input>
  <ods-input
    placeholder="Type something"
    size="deci"
    v-model="input23">
    <i slot="prefix" class="ods-input__icon ods-icon-search"></i>
  </ods-input>
</div>

<style>
  .demo-input-label {
    display: inline-block;
    width: 130px;
  }
</style>

<script>
{
  data() {
    return {
      input2: '',
      input21: '',
      input22: '',
      input23: ''
    }
  }
}
</script>
```


## Textarea

Redimensiona para introducir varias líneas de información de texto. Agrege el atributo `type="textarea"` para cambiar el `input` al tipo nativo `textarea`.

 Controle la altura ajustando el prop `rows`.

```
<ods-input
  type="textarea"
  :rows="2"
  placeholder="Please input"
  v-model="textarea">
</ods-input>

<script>
{
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
```


## Textarea tamaño automatico

El ajuste del prop `autosize` en el tipo de Input textarea hace que la altura se ajuste automáticamente en función del contenido. Se puede proporcionar opciones en un objeto para autodimensionar y especificar el número mínimo y máximo de líneas que el textarea puede ajustar automáticamente.


```
<ods-input
  type="textarea"
  autosize
  placeholder="Please input"
  v-model="textarea2">
</ods-input>
<div style="margin: 20px 0;"></div>
<ods-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="Please input"
  v-model="textarea3">
</ods-input>

<script>
{
  data() {
    return {
      textarea2: '',
      textarea3: ''
    }
  }
}
</script>
```

## Input atributos

| Atributo      | Descripción                              | Tipo             | Valores aceptados                | Por defecto |
| ------------- | ---------------------------------------- | ---------------- | -------------------------------- | ----------- |
| type          | tipo de input                            | string           | text / textarea                  | text        |
| value         | valor enlazado                           | string / number  | —                                | —           |
| maxlength     | igual que `maxlength` en el input nativo | number           | —                                | —           |
| minlength     | igual que `minlength` en el input nativo | number           | —                                | —           |
| placeholder   | placeholder del Input                    | string           | —                                | —           |
| disabled      | si esta deshabilitado                    | boolean          | —                                | false       |
| size          | tamaño del input, esto no funciona cuando `type` no es textarea | string           | medium / small / mini            | —           |
| prefix-icon   | clase del icono de prefijo               | string           | —                                | —           |
| suffix-icon   | clase del icono de sufijo                | string           | —                                | —           |
| rows          | número de filas, sólo funciona cuando `type` es 'textarea'. | number           | —                                | 2           |
| autosize      | si textarea tiene una altura adaptativa, sólo funciona cuando el`type` es 'textarea'. Puede aceptar un objeto, p. ej. { minRows: 2, maxRows: 6 } | boolean / object | —                                | false       |
| auto-complete | igual que `auto-complete` en el input nativo | string           | on/off                           | off         |
| name          | igual que `name` en el input nativo      | string           | —                                | —           |
| readonly      | igual que `readonly` en el input nativo  | boolean          | —                                | false       |
| max           | igual que `max` en el input nativo       | —                | —                                | —           |
| min           | igual que `min` en el input nativo       | —                | —                                | —           |
| step          | igual que `step` en el input nativo      | —                | —                                | —           |
| resize        | control para el dimensionamiento         | string           | none, both, horizontal, vertical | —           |
| autofocus     | igual que `autofocus` en el input nativo | boolean          | —                                | false       |
| form          | igual que `form` en el input nativo      | string           | —                                | —           |
| label         | texto de la etiqueta                     | string           | —                                | —           |
| tabindex      | orden de tabulacion para el Input        | string           | -                                | -           |

## Input slots

| Nombre  | Descripción                          |
| ------- | ------------------------------------ |
| prefix  | contenido como prefijo del input     |
| suffix  | contenido como sufijo del input      |
| prepend | contenido antes del input            |
| append  | contenido a añadir después del input |

## Input eventos

| Nombre | Descripción                              | Parametros                |
| ------ | ---------------------------------------- | ------------------------- |
| blur   | Se dispara cuando se pierde el foco      | (event: Event)            |
| focus  | Se dispara cuando se obtiene el foco     | (event: Event)            |
| change | se activa cuando cambia el valor de entrada | (value: string \| number) |
| clear | se dispara cuando la entrada es borrada por el botón generado por el atributo "clearable". | (event: Event) |

## Input Metodo

| Metodo | Descripción                   | Parametros |
| ------ | ----------------------------- | ---------- |
| focus  | coloca el foco en el elemento | —          |
| blur   | quita el foco del elemento | —          |
| select | selecciona el texto del input | —       |

## Autocomplete Atributos

Atributo | Descripción | Tipo | Opciones | Por defecto
|----| ----| ----| ---- | -----|
|placeholder| el placeholder del Autocomplete| string | — | — |
|disabled | si el Autocompete esta deshabilitado  | boolean | — | false|
| value-key | nombre del campo del objeto de sugerencia del input para la visualización | string | — | value |
|icon | nombre del icono | string | — | — |
|value | valor enlazado | string | — | — |
| debounce | retardo al escribir, en milisegundos | number | — | 300 |
| placement | ubicación del menú emergente | string | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-start |
|fetch-suggestions | un método para obtener las sugerencias del input. Cuando las sugerencias estén listas, invocar `callback(data:[])` para devolverlas a Autocomplete | Function(queryString, callback) | — | — |
| popper-class | nombre personalizado de clase para el dropdown de autocomplete | string | — | — |
| trigger-on-focus | si se deben mostrar sugerencias cuando el input obtiene el foco | boolean | — | true |
| name | igual que `name` en el input nativo | string | — | — |
| select-when-unmatched | si se emite un evento `select` al pulsar enter cuando no hay coincidencia de Autocomplete | boolean | — | false |
| label | texto de la etiqueta | string | — | — |

## Autocomplete Slots

| Nombre  | Descripción                          |
| ------- | ------------------------------------ |
| prefix  | contenido como prefijo del input     |
| suffix  | contenido como sufijo del input      |
| prepend | contenido antes del input            |
| append  | contenido a añadir después del input |

## Autocomplete Scoped Slot

| Name | Description |
|------|--------|
| — | Custom content for input suggestions. The scope parameter is { item } |

## Autocomplete Eventos

| Nombre | Descripción                              | Parametros                               |
| ------ | ---------------------------------------- | ---------------------------------------- |
| select | se dispara cuando se hace click a una sugerencia | sugerencia en la que se está haciendo click |

## Autocomplete Metodo

| Metodo | Descripción                   | Parametros |
| ------ | ----------------------------- | ---------- |
| focus  | coloca el foco en el elemento | —          |
