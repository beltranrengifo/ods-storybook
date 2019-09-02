# InputNumber

Input de  valores numéricos con un rango personalizable.

## Uso básico

 Vincule una variable con `v-model` en el elemento `<ods-input-number>` y estará listo.

```html
<div class="ods-mb-4">
  <ods-input-number
    v-model="num1"
    @change="handleChange"
    :min="1"
    :max="10"/>
</div>
<div class="ods-mb-4">
  <ods-input-number
    v-model="num2"
    @change="handleChange"
    :min="1"
    :max="10"
    :precision="2"/> <small>Controla los decimales con <code> :precision</code></small>
</div>
<div class="ods-mb-4">
  <ods-input-number
    v-model="num3"
    zero-empty /> <small>Oculta el valor si el v-model no es `Number`</small>
</div>

<script>
  {
    data() {
      return {
        num1: 1,
        num2: 9,
        num3: null
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>

<style>
.ods-mb-4 {
  margin-bottom: 16px;
}
</style>
```


## Disabled

 El atributo `disabled` acepta un valor `boolean`, y si el valor es `true`, el componente queda deshabilitado. Si sólo necesita controlar el valor dentro de un rango, puede añadir un atributo `min` para establecer el valor mínimo y un valor `max` para establecer el valor máximo. Por defecto, el valor mínimo es `0`.

```html
<ods-input-number
  v-model="num2"
  :disabled="true"/>

<script>
  {
    data() {
      return {
        num2: 1
      }
    }
  }
</script>
```


## Steps

Le permite definir el nivel de incremento de los saltos.

 Añada el atributo `step` para establecer el salto.

```html
<ods-input-number
  v-model="num3"
  :step="2"/>

<script>
  {
    data() {
      return {
        num3: 5
      }
    }
  }
</script>
```

## Tamaño

Utilice el atributo `size` para establecer los tamaños adicionales presentes en el ods-input.

```html
<div class="ods-mb-4">
  <div>
    <small>Default</small>
  </div>
  <ods-input-number
    v-model="num4"/>
</div>
<div class="ods-mb-4">
  <div>
    <small>Micro</small>
  </div>
  <ods-input-number
    v-model="num4"
    size="micro"/>
</div>
<div class="ods-mb-4">
  <div>
    <small>Deci</small>
  </div>
  <ods-input-number
    v-model="num4"
    size="deci"/>
</div>
<div class="ods-mb-4">
  <div>
    <small>Hecto</small>
  </div>
  <ods-input-number
    v-model="num4"
    size="hecto"/>
</div>
<div class="ods-mb-4">
  <div>
    <small>Mega</small>
  </div>
  <ods-input-number
    v-model="num4"
    size="mega"/>
</div>
<div class="ods-mb-4">
  <div>
    <small>Exa</small>
  </div>
  <ods-input-number
    v-model="num4"
    size="exa"/>
</div>

<script>
  {
    data() {
      return {
        num4: 1,
        num5: 1,
        num6: 1,
        num7: 1
      }
    }
  }
</script>

<style>
.ods-mb-4 {
  margin-bottom: 16px;
}
.ods-ml-2 {
  margin-left: 8px;
}
</style>
```

## Atributos

| Atributo          | Descripción                              | Tipo    | Valores aceptados | Por defecto |
| ----------------- | ---------------------------------------- | ------- | ----------------- | ----------- |
| value             | valor vinculado                          | number  | —                 | —           |
| min               | el valor mínimo permitido                | number  | —                 | `-Infinity` |
| max               | el valor maximo permitido                | number  | —                 | `Infinity`  |
| step              | incremento (salto)                       | number  | —                 | 1           |
| precision         | precision of input value                 | number  | —                 | -           |
| size              | tamaño del componente                    | string  | igual que input   | deci        |
| disabled          | si el componente esta deshabilitado      | boolean | —                 | false       |
| controls          | si se activan los botones de control     | boolean | —                 | true        |
| name              | lo mismo que `name` en un input nativo   | string  | —                 | —           |
| label             | texto de la etiqueta                     | string  | —                 | —           |
| placeholder       | placeholder del input                    | string  | —                 | —           |

## Eventos

| Nombre | Descripción                              | Parámetros         |
| ------ | ---------------------------------------- | ------------------ |
| change | se produce cuando el valor cambia        | value after change |
| blur   | se produce cuando el componente pierde el foco | (event: Event)     |
| focus  | se produce cuando el componente obtiene el foco | (event: Event)     |

## Métodos

| Método | Descripción                          | Parámetro |
| ------ | ------------------------------------ | --------- |
| focus  | coloca el foco en el elemento actual | -         |
