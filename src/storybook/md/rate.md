# Calificación

Usado para la calificación

## Uso básico

 Clasificación divide las puntuaciones en tres niveles y estos niveles pueden distinguirse usando diferentes colores de fondo. Por defecto los colores de fondo son iguales, pero puedes asignarlos para reflejar los tres niveles usando el atributo `colors` y sus dos umbrales pueden ser definidos con `low-treshold` y `high-treshold`.

```
<ods-row>
  <ods-col :span="6">
    <span class="demo-label">Default</span>
    <ods-rate v-model="value1" @change="myMethod"></ods-rate>
  </ods-col>
  <ods-col :span="18">
    <span class="demo-label">Colores según la puntuación</span>
      <ods-rate
        v-model="value2"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </ods-rate>
  </ods-col>
</ods-row>

<script>
  {
    data() {
      return {
        value1: null,
        value2: null
      }
    },
    methods: {
      myMethod () {
        console.log('rate set!')
      }
    }
  }
</script>
<style>
  .demo-label {
    display: inline-block;
    width: auto;
    font-weight: 100;
    font-size: 14px;
    color: #aab7be;
    vertical-align: sub;
    margin-right: 20px;
    margin-bottom: 16px;
  }
</style>
```

## Con texto

Usa texto para indicar la puntuación

Agregar el atributo `show-text` para mostrar texto a la derecha del componente. Puede asignar textos para las distintas puntuaciones usando `texts`. `texts` es un arreglo cuya longitud debe ser igual a la máxima puntuación `max`.

```
<div class="block">
  <span class="demo-label">Textos según la puntuación</span>
  <ods-rate
    v-model="value3"
    :texts="['muy mal', 'mal', 'regular', 'bien', 'muy bien']"
    show-text>
  </ods-rate>
</div>

<script>
  {
    data() {
      return {
        value3: null
      }
    }
  }
</script>
```

## Más iconos

Puede utilizar iconos para diferenciar cada componente.

Puede customizar iconos para tres niveles diferentes usando `icon-classes`. En este ejemplo también usamos `void-icon-class` para asignar un icono si no está seleccionado.

```
<div class="block">
  <span class="demo-label">Iconos según la puntuación</span>
  <ods-rate
    v-model="value4"
    :icon-classes="['icon-smile-frown', 'icon-smile-meh', 'icon-smile-smile']"
    void-icon-class="icon-smile-meh"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </ods-rate>
</div>

<script>
  {
    data() {
      return {
        value4: null
      }
    }
  }
</script>
```

## Solo lectura

La calificación de solo lectura es para mostrar la puntuación. Soporta media estrella.

 Use el atributo `disabled` para hacer el componente de solo lectura. Agregar `show-score` para mostrar la puntuación en el lado derecho. Además, puede usar el atributo `score-template` para proveer una plantilla. Tiene que contener `{value}`, y `{value}` será sustituido por la puntuación.

```
<div class="block">
  <ods-rate
    v-model="value5"
    disabled
    show-score
    text-color="#ff9900"
    score-template="{value} puntos">
  </ods-rate>
</div>

<script>
  {
    data() {
      return {
        value5: 3.7
      }
    }
  }
</script>
```

## Atributos

| Atributo                 | Descripción                              | Tipo    | Valores aceptado | Por defecto                              |
| ------------------------ | ---------------------------------------- | ------- | ---------------- | ---------------------------------------- |
| max                      | puntuación máxima                        | number  | —                | 5                                        |
| disabled                 | si la calificación es de solo lectura    | boolean | —                | false                                    |
| allow-half               | si escoger media estrella está permitido | boolean | —                | false                                    |
| low-threshold            | valor del umbral entre nivel bajo y medio. El valor será incluido en el nivel bajo | number  | —                | 2                                        |
| high-threshold           | valor del umbral entre nivel bajo y medio. El valor será incluido en el nivel alto | number  | —                | 4                                        |
| colors                   | arreglo de colores para iconos. Debe tener 3 elementos, cada uno corresponde a un nivel de puntuación | array   | —                | ['#F7BA2A', '#F7BA2A', '#F7BA2A']        |
| void-color               | color para iconos no seleccionados       | string  | —                | #C6D1DE                                  |
| disabled-void-color      | color para las iconos no seleccionados de solo lectura | string  | —                | #EFF2F7                                  |
| icon-classes             | arreglo de nombres para clases de iconos. Debe tener 3 elementos, cada uno corresponde a un nivel de puntuación | array   | —                | ['ods-icon-star-on', 'ods-icon-star-on','ods-icon-star-on'] |
| void-icon-class          | nombre de clase para iconos no seleccionados | string  | —                | ods-icon-star-off                         |
| disabled-void-icon-class | nombre de clase para elementos no seleccionados de solo lectura | string  | —                | ods-icon-star-on                          |
| show-text                | muestra el texto                         | boolean | —                | false                                    |
| show-score               | muestra puntuación actual. `show-score` y `show-text` no pueden ser verdaderos al mismo tiempo | boolean | —                | false                                    |
| text-color               | color del texto                          | string  | —                | #1F2D3D                                  |
| texts                    | arreglo de textos                        | array   | —                | ['极差', '失望', '一般', '满意', '惊喜']           |
| score-template           | plantilla de puntuación                  | string  | —                | {value}                                  |

## Eventos

| Nombre del evento | Descripción                              | Parámetros             |
| ----------------- | ---------------------------------------- | ---------------------- |
| change            | Se dispara cuando la puntuación es cambiada | valor luego del cambio |
