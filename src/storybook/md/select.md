# Select

Cuando haya muchas opciones, utilice un menú desplegable para mostrar y seleccionar las que desee.

## Uso básico

`v-model` es el valor de  `ods-option` que está seleccionado actualmente.

```

  <ods-select 
    v-model="value"
    placeholder="Select"
    size="exa">
    <ods-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </ods-option>
  </ods-select>


<script>
  {
    data() {
      return {
        options: [{
          value: "Option1",
          label: "Option1"
        }, {
          value: "Option2",
          label: "Option2"
        }, {
          value: "Option3",
          label: "Option3"
        }, {
          value: "Option4",
          label: "Option4"
        }, {
          value: "Option5",
          label: "Option5"
        }],
        value: ""
      }
    }
  }
</script>
```

## Outlined select

`outlined` permite usar el diseño de línea

```

  <ods-select 
    v-model="value"
    placeholder="Select"
    size="deci"
    outlined>
    <ods-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </ods-option>
  </ods-select>


<script>
  {
    data() {
      return {
        options: [{
          value: "Option1",
          label: "Option1"
        }, {
          value: "Option2",
          label: "Option2"
        }, {
          value: "Option3",
          label: "Option3"
        }, {
          value: "Option4",
          label: "Option4"
        }, {
          value: "Option5",
          label: "Option5"
        }],
        value: ""
      }
    }
  }
</script>
```

## Tamaños

`size` permite seleccionar los mismos tamaños disponibles en el componente `input`:

```

  <div class="ods-mb-4">
    <ods-select 
      v-model="value"
      placeholder="micro"
      size="micro">
      <ods-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </ods-option>
    </ods-select>
  </div>
  <div class="ods-mb-4">
    <ods-select 
      v-model="value"
      placeholder="deci"
      size="deci">
      <ods-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </ods-option>
    </ods-select>
  </div>
  <div class="ods-mb-4">
    <ods-select 
      v-model="value"
      placeholder="hecto"
      size="hecto">
      <ods-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </ods-option>
    </ods-select>
  </div>
  <div class="ods-mb-4">
    <ods-select 
      v-model="value"
      placeholder="mega"
      size="mega">
      <ods-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </ods-option>
    </ods-select>
  </div>
  <div class="ods-mb-4">
    <ods-select 
      v-model="value"
      placeholder="exa"
      size="exa">
      <ods-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </ods-option>
    </ods-select>
  </div>
  <div class="ods-mb-4">
    <ods-select 
      v-model="value"
      placeholder="Default 100%">
      <ods-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </ods-option>
    </ods-select>
  </div>

  <div class="ods-mb-4">
    <ods-select 
      outlined
      v-model="value"
      placeholder="micro"
      size="micro">
      <ods-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </ods-option>
    </ods-select>
  </div>
  <div class="ods-mb-4">
    <ods-select 
      outlined
      v-model="value"
      placeholder="deci"
      size="deci">
      <ods-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </ods-option>
    </ods-select>
  </div>
  <div class="ods-mb-4">
    <ods-select 
      outlined
      v-model="value"
      placeholder="hecto"
      size="hecto">
      <ods-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </ods-option>
    </ods-select>
  </div>
  <div class="ods-mb-4">
    <ods-select 
      outlined
      v-model="value"
      placeholder="mega"
      size="mega">
      <ods-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </ods-option>
    </ods-select>
  </div>
  <div class="ods-mb-4">
    <ods-select 
      outlined
      v-model="value"
      placeholder="exa"
      size="exa">
      <ods-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </ods-option>
    </ods-select>
  </div>
  <div class="ods-mb-4">
    <ods-select 
      outlined
      v-model="value"
      placeholder="Default 100%">
      <ods-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </ods-option>
    </ods-select>
  </div>


<script>
  {
    data() {
      return {
        options: [{
          value: "Option1",
          label: "Option1"
        }, {
          value: "Option2",
          label: "Option2"
        }, {
          value: "Option3",
          label: "Option3"
        }, {
          value: "Option4",
          label: "Option4"
        }, {
          value: "Option5",
          label: "Option5"
        }],
        value: ""
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

## Disabled en ods-option

Establezca el valor de `disabled` en `ods-option`  como `true` para deshabilitar esta opción.

```
<div>
  <ods-select
    v-model="value2"
    placeholder="Select"
    size="exa">
    <ods-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </ods-option>
  </ods-select>
</div>

<script>
  {
    data() {
      return {
        options2: [{
          value: "Option1",
          label: "Option1"
        }, {
          value: "Option2",
          label: "Option2",
          disabled: true
        }, {
          value: "Option3",
          label: "Option3"
        }, {
          value: "Option4",
          label: "Option4"
        }, {
          value: "Option5",
          label: "Option5"
        }],
        value2: ""
      }
    }
  }
</script>
```
 
## Disabled en ods-select

Desactivar todo el componente.

Configure `disabled` de `ods-select` para deshabilitarla.

```
<div>
  <ods-select
    v-model="value3"
    disabled
    placeholder="Select"
    size="exa">
    <ods-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </ods-option>
  </ods-select>
</div>

<script>
  {
    data() {
      return {
        options: [{
          value: "Option1",
          label: "Option1"
        }, {
          value: "Option2",
          label: "Option2"
        }, {
          value: "Option3",
          label: "Option3"
        }, {
          value: "Option4",
          label: "Option4"
        }, {
          value: "Option5",
          label: "Option5"
        }],
        value3: ""
      }
    }
  }
</script>
```

## Select simple limpiable

Puede limpiar un Select con un icono.

Establezca el atributo `clearable` para `ods-select`  y aparecerá un icono. Tenga en cuenta que la opción `clearable` es sólo para una selección individual.

```
<div>
  <ods-select
    v-model="value4"
    clearable
    placeholder="Select"
    size="exa">
    <ods-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </ods-option>
  </ods-select>
</div>

<script>
  {
    data() {
      return {
        options: [{
          value: "Option1",
          label: "Option1"
        }, {
          value: "Option2",
          label: "Option2"
        }, {
          value: "Option3",
          label: "Option3"
        }, {
          value: "Option4",
          label: "Option4"
        }, {
          value: "Option5",
          label: "Option5"
        }],
        value4: ""
      }
    }
  }
</script>
```

## Selección múltiple básica

Selección multiple utiliza tags para mostrar las opciones seleccionadas.

Configure el atributo `multiple` para `ods-select` para habilitar el modo múltiple. En este caso, el valor del `v-model` será un array de opciones seleccionadas. De forma predeterminada, las opciones seleccionadas se mostrarán como tags. Se pueden contraer a un texto utilizando el atributo  `collapse-tags`.

```
<div>
  <ods-select
    v-model="value5"
    multiple
    placeholder="Select"
    size="deci">
    <ods-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </ods-option>
  </ods-select>

  <ods-select
    size="deci"
    v-model="value11"
    multiple
    collapse-tags
    style="margin-left: 20px;"
    placeholder="Select">
    <ods-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </ods-option>
  </ods-select>
</div>

<script>
  {
    data() {
      return {
        options: [{
          value: "Option1",
          label: "Long option value"
        }, {
          value: "Option2",
          label: "Option2"
        }, {
          value: "Option3",
          label: "Option3"
        }, {
          value: "Option4",
          label: "Option4"
        }, {
          value: "Option5",
          label: "Option5"
        }],
        value5: [],
        value11: []
      }
    }
  }
</script>
```
 
## Personalizar template

Puede personalizar templates HTML para las opciones.

Inserte templates HTML personalizados en el slot de `ods-option`.

```
<div>
  <ods-select
    v-model="value6"
    placeholder="Select"
    size="exa">
    <ods-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </ods-option>
  </ods-select>
</div>

<script>
  {
    data() {
      return {
        cities: [{
          value: "Beijing",
          label: "Beijing"
        }, {
          value: "Shanghai",
          label: "Shanghai"
        }, {
          value: "Nanjing",
          label: "Nanjing"
        }, {
          value: "Chengdu",
          label: "Chengdu"
        }, {
          value: "Shenzhen",
          label: "Shenzhen"
        }, {
          value: "Guangzhou",
          label: "Guangzhou"
        }],
        value6: ""
      }
    }
  }
</script>
```
 
## Agrupando

Mostrar opciones en grupos.

Utilice `ods-option-group` para agrupar las opciones, y su atributo `label` representa el nombre del grupo.

```
<div>
  <ods-select
    v-model="value7"
    placeholder="Select"
    size="exa">
    <ods-option-group
      v-for="group in options3"
      :key="group.label"
      :label="group.label">
      <ods-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </ods-option>
    </ods-option-group>
  </ods-select>
</div>

<script>
  {
    data() {
      return {
        options3: [{
          label: "Popular cities",
          options: [{
            value: "Shanghai",
            label: "Shanghai"
          }, {
            value: "Beijing",
            label: "Beijing"
          }]
        }, {
          label: "City name",
          options: [{
            value: "Chengdu",
            label: "Chengdu"
          }, {
            value: "Shenzhen",
            label: "Shenzhen"
          }, {
            value: "Guangzhou",
            label: "Guangzhou"
          }, {
            value: "Dalian",
            label: "Dalian"
          }]
        }],
        value7: ""
      }
    }
  }
</script>
```

## Filtrado de opciones

Puede filtrar opciones como lo desee.

Añadir `filterable` a `ods-select` permite filtrar. Por defecto, Select buscará todas las opciones cuyo atributo`label` contenga el valor del input. Si prefiere otras estrategias de filtrado, puede pasar el `filter-method`. `filter-method` es una función que se llama cuando el valor del input cambia, y su parámetro es el valor del input actual.

```
<div>
  <ods-select
    v-model="value8"
    filterable
    placeholder="Select"
    size="exa">
    <ods-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </ods-option>
  </ods-select>
</div>

<script>
  {
    data() {
      return {
        options: [{
          value: "Option1",
          label: "Option1"
        }, {
          value: "Option2",
          label: "Option2"
        }, {
          value: "Option3",
          label: "Option3"
        }, {
          value: "Option4",
          label: "Option4"
        }, {
          value: "Option5",
          label: "Option5"
        }],
        value8: ""
      }
    }
  }
</script>
```
 
## Búsqueda remota

Introduzca palabras y datos para buscar desde el servidor.

Configure el valor de `filterable` y `remote` con `true` para habilitar la búsqueda remota, y debería pasar el método `remote-method`. `remote-method` es una función que se llama cuando el valor del input cambia, y su parámetro es el valor del input actual. Tenga en cuenta que si `ods-option` se presenta con la directiva `v-for`, debe agregar el atributo `key` para `ods-option`. Su valor tiene que ser unívoco, como el valor de `item.value` en el ejemplo siguiente.

```
<div>
  <ods-select
    v-model="value9"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="Please enter a keyword"
    :remote-method="remoteMethod"
    :loading="loading"
    size="exa">
    <ods-option
      v-for="item in options4"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </ods-option>
  </ods-select>
</div>

<script>
  {
    data() {
      return {
        options4: [],
        value9: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"]
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    methods: {
      remoteMethod(query) {
        if (query !== "") {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      }
    }
  }
</script>
```
 
## Crear nuevos items
Crear y seleccionar nuevos items que no están incluidas en las opciones de selección.

Al utilizar el atributo `allow-create`, los usuarios pueden crear nuevos elementos escribiendo en el cuadro del input. Tenga en cuenta que para que `allow-create` funcione, `filterable` debe ser `true`.

```
<div>
  <ods-select
    v-model="value10"
    multiple
    filterable
    allow-create
    placeholder="Choose tags for your article"
    size="exa">
    <ods-option
      v-for="item in options5"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </ods-option>
  </ods-select>
</div>

<script>
  {
    data() {
      return {
        options5: [{
          value: "HTML",
          label: "HTML"
        }, {
          value: "CSS",
          label: "CSS"
        }, {
          value: "JavaScript",
          label: "JavaScript"
        }],
        value10: []
      }
    }
  }
</script>
```

## Accesibilidad

Para tener el select accesible (AAA) es necesario agregarle un label, mediante la prop `selectLabel`

```
<ods-select 
  v-model="select"
  placeholder="Select"
  size="exa"
  selectLabel="My label">
  <ods-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value"
    :disabled="item.disabled">
  </ods-option>
</ods-select>

<script>
{
  data () {
    return {
      options: [{
        value: "Option1",
        label: "TODOS"
      }, {
        value: "Option2",
        label: "Option2",
        disabled: true
      }, {
        value: "Option3",
        label: "MEDIOAMBIENTE Y METEOROLOGÍA"
      }, {
        value: "Option4",
        label: "Option4"
      }, {
        value: "Option5",
        label: "Option5"
      }],
      select: ""
    }
  }
}
</script>
```

## Select atributos
| Atributo             | Descripción                              | Tipo     | Valores aceptados | Por defecto      |
| -------------------- | ---------------------------------------- | -------- | ----------------- | ---------------- |
| multiple             | si multiple-select esta activo           | boolean  | —                 | false            |
| disabled             | si Select esta deshabilitado             | boolean  | —                 | false            |
| collapse-tags        | si se colapsan los tags a un texto cuando `multiple` es `true`. | boolean  | —                 | false            |
| value-key            | nombre de clave de identidad única para el valor, necesario cuando el valor es un objeto. | string   | —                 | value            |
| size                 | tamaño del Input                         | string   | large/small/mini  | —                |
| clearable            | si el single select puede ser limpiable  | boolean  | —                 | false            |
| multiple-limit       | maximo numero de opciones que el usuario puede seleccionar cuando `multiple` es `true`.  Sin límite cuando se fija a 0 | number   | —                 | 0                |
| name                 | el atributo `name` del input seleccionado | string   | —                 | —                |
| auto-complete        | el atributo `autocomplete` del input seleccionado | string   | —         | off              |
| placeholder          | placeholder                              | string   | —                 | Select           |
| filterable           | si Select es filtrable                   | boolean  | —                 | false            |
| allow-create         | si esta permitido crear nuevos items. Para usar esto, `filterable` debe ser `true`. | boolean  | —                 | false            |
| filter-method        | metodo de filtrado personalizado         | function | —                 | —                |
| remote               | si las opciones se traeran desde el servidor | boolean  | —                 | false            |
| remote-method        | metodo de busqueda remota personalizada  | function | —                 | —                |
| loading              | si Select está cargando datos del servidor | boolean  | —                 | false            |
| loading-text         | texto mostrado durante la carga de datos del servidor | string   | —                 | Loading          |
| no-match-text        | texto mostrado cuando ningún dato coincide con la consulta de filtrado. | string   | —                 | No matching data |
| no-data-text         | texto mostrado cuando no hay opciones    | string   | —                 | No data          |
| popper-class         | nombre de clase personalizado para el menú desplegable del Select | string   | —                 | —                |
| reserve-keyword      | cuando `multiple` y `filter` es `true`, si se debe reservar la palabra clave actual después de seleccionar una opción. | boolean  | —                 | false            |
| default-first-option | seleccione la primera opción de coincidencia en la tecla enter. Uso con `filterable` o `remote`. | boolean  | -                 | false            |
| popper-append-to-body| si añadir o no el menu popup al body. Si el posicionamiento del popup es incorrecto, puede intentar poner este `prop` en `false`. | boolean | - | true |

## Eventos Select
| Nombre         | Descripción                              | Parametros                               |
| -------------- | ---------------------------------------- | ---------------------------------------- |
| change         | se dispara cuando el valor del select cambia | valor actual del select                  |
| visible-change | se dispara cuando el menu desplegable aparece o desaparece | true cuando aparece, y false en otro caso |
| remove-tag     | se dispara cuando un tag es removido en modo multiple | el valor del tag removido                |
| clear          | se dispara cuando el icono se clickea en un Select limpiable | —                                        |
| blur           | se dispara cuando el input pierde el foco | (event: Event)                           |
| focus          | se dispara cuando el input obtiene el foco | (event: Event)                           |

## Atributos del grupo de opciones
| Atributo | Descripción                              | Tipo    | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | ------- | ----------------- | ----------- |
| label    | nombre del grupo                         | string  | —                 | —           |
| disabled | si se deshabilitan todas las opciones del grupo | boolean | —                 | false       |

## Atributos de opciones
| Atributo | Descripción                              | Tipo                 | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------------------- | ----------------- | ----------- |
| value    | valor de option                          | string/number/object | —                 | —           |
| label    | etiqueta de option, es igual a  `value` si se omite | string/number        | —                 | —           |
| disabled | si  option esta deshabilitado            | boolean              | —                 | false       |

## Metodos
| Metodo | Descripción                 | Parametros |
| ------ | --------------------------- | ---------- |
| focus  | Foco en el componente input | -          |
| blur   | Quita el focus del componente y oculta el dropdown | - |
