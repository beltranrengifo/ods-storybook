# Date Picker básico por "día"

La medida temporal que usa el date picker está determinada por el atributo **`type`** .

Puedes crear una configuración personalizada de atajos rápidos un objeto `picker-options` con la propiedad `shortcuts`.

Las fechas se pueden descativar mediante el atributo `disabledDate`, que es una función que devuelve el día o rango a desactivar.

```
<template>
  <div class="block">
    <span class="demo-label">Default</span>
    <ods-date-picker
      v-model="value1"
      type="date"
      placeholder="Selecciona día">
    </ods-date-picker>
  </div>
  <div class="block">
    <span class="demo-label">Con atajos rápidos </span>
    <ods-date-picker
      v-model="value2"
      type="date"
      placeholder="Selecciona día"
      :picker-options="pickerOptions1">
    </ods-date-picker>
  </div>
</template>

<script>
   {
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now()
          },
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        value1: '',
        value2: '',
      }
    }
  }
</script>
```

## Tamaños del input

```
<template>
  <div class="block">
    <span class="demo-label m-l-32">Micro</span>
    <ods-date-picker
      size="micro"
      v-model="value1"
      type="date"
      placeholder="Selecciona día">
    </ods-date-picker>
    <span class="demo-label m-l-32">Deci</span>
    <ods-date-picker
      size="deci"
      v-model="value1"
      type="date"
      placeholder="Selecciona día">
    </ods-date-picker>
    <span class="demo-label m-l-32">Hecto</span>
    <ods-date-picker
      size="hecto"
      v-model="value1"
      type="date"
      placeholder="Selecciona día">
    </ods-date-picker>
  </div>
  <div class="block">
    <span class="demo-label m-l-32">Mega</span>
    <ods-date-picker
      size="mega"
      v-model="value1"
      type="date"
      placeholder="Selecciona día">
    </ods-date-picker>
    <span class="demo-label m-l-32">Exa</span>
    <ods-date-picker
      size="exa"
      v-model="value1"
      type="date"
      placeholder="Selecciona día">
    </ods-date-picker>
  </div>
</template>

<script>
   {
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now()
          },
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        value1: '',
        value2: '',
      }
    }
  }
</script>

```

## Uso de otras medidas temporales de selección

Puedes seleccionar por semana, mes o año, modificando el componente date picker estándar.

```
<div class="block">
  <span class="demo-label">Semana</span>
  <ods-date-picker
    v-model="value3"
    type="week"
    format="Week WW"
    placeholder="Elige semana">
  </ods-date-picker>
</div>
<div class="block">
  <span class="demo-label">Mes</span>
  <ods-date-picker
    v-model="value4"
    type="month"
    placeholder="Elige mes">
  </ods-date-picker>
</div>
<div class="block">
  <span class="demo-label">Año</span>
  <ods-date-picker
    v-model="value5"
    type="year"
    placeholder="Elige año">
  </ods-date-picker>
</div>

<script>
  {
    data() {
      return {
        value3: '',
        value4: '',
        value5: ''
      }
    }
  }
</script>
```

## Seleccionar un rango de fecha

Es posible seleccionar un rango de fechas.

En modo de rango, los meses de los paneles izquierdo y derecho están vinculados por defecto. Si desea que los dos paneles cambien los meses actuales de forma independiente, puede utilizar el atributo `unlink-panels`.

```
<template>
  <div class="block">
    <span class="demo-label">Default</span>
    <ods-date-picker
      v-model="value6"
      type="daterange"
      range-separator="To"
      start-placeholder="Fecha inicio"
      end-placeholder="Fecha fin">
    </ods-date-picker>
  </div>
  <div class="block">
    <span class="demo-label">Con objeto personalizado de atajos rápidos</span>
    <ods-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="To"
      start-placeholder="Fecha inicio"
      end-placeholder="Fecha fin"
      :picker-options="pickerOptions2">
    </ods-date-picker>
  </div>
</template>

<script>
  {
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        value6: '',
        value7: ''
      }
    }
  }
</script>
```

## Rango de fechas mostrando un unico calendario

Usa el atributo **`only-one-calendar`** para mostrar un solo calendario.

```
<template>
  <div class="block">
    <span class="demo-label">Default</span>
    <ods-date-picker
      v-model="value6"
      :only-one-calendar="true"
      type="daterange"
      range-separator="a"
      start-placeholder="Fecha inicio"
      end-placeholder="Fecha fin">
    </ods-date-picker>
  </div>
  <div class="block">
    <span class="demo-label">Con accesos rápidos</span>
    <ods-date-picker
      v-model="value7"
      :only-one-calendar="true"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="a"
      start-placeholder="Fecha inicio"
      end-placeholder="Fecha fin"
      :picker-options="pickerOptions2">
    </ods-date-picker>
  </div>
</template>

<script>
  {
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        value6: '',
        value7: ''
      }
    }
  }
</script>
```

## Valor por defecto

Si el usuario no ha escogido una fecha, muestra el calendario de hoy por defecto. Puede utilizar `default-value` para fijar otra fecha. Su valor debe ser definido por `new Date()`.

Si el tipo es `daterange`, `default-value` establece el calendario del lado izquierdo.

```
<template>
  <div class="block">
    <span class="demo-label">Fecha</span>
    <ods-date-picker
      v-model="value8"
      type="date"
      placeholder="Selecciona fecha"
      default-value="2010-10-01">
    </ods-date-picker>
  </div>
  <div class="block">
    <span class="demo-label">Rango de fechas</span>
    <ods-date-picker
      v-model="value9"
      type="daterange"
      align="right"
      start-placeholder="Fecha inicio"
      end-placeholder="Fecha fin"
      default-value="2010-10-01">
    </ods-date-picker>
  </div>
</template>

<script>
  {
    data() {
      return {
        value8: '',
        value9: ''
      }
    }
  }
</script>
```

## Calendario básico Siempre visible

Date Picker básico por "día" siempre visible.

```
<template>
  <div class="block">
    <span class="demo-label">Default</span>
    <ods-date-picker
      v-model="value1"
      type="date"
      placeholder="Selecciona un día"
      :calendar-always-visible="true">
    </ods-date-picker>
  </div>
  <div class="block">
    <span class="demo-label">Picker con accesos rápidos</span>
    <ods-date-picker
      v-model="value2"
      type="date"
      placeholder="Selecciona un día"
      :picker-options="pickerOptions1"
      :calendar-always-visible="true"
      @change="handleChange">
    </ods-date-picker>
  </div>
</template>

<script>
  {
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now()
          },
          shortcuts: [{
            text: 'Hoy',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: 'Ayer',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: 'Hace una semana',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        value1: '',
        value2: '',
      }
    },
    methods: {
      handleChange() {
        console.log('change event!')
        // code stuff
      }
    }
  }
</script>
```

## Calendario range Siempre visible

Date Picker range por "día" siempre visible.

```
<template>
  <div class="block">
    <span class="demo-label">Default</span>
    <ods-date-picker
      v-model="value1"
      type="daterange"
      placeholder="Pick a day"
      :calendar-always-visible="true">
    </ods-date-picker>
  </div>
</template>

<script>
  {
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now()
          },
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        value1: '',
        value2: '',
      }
    }
  }
</script>
```

## Calendario Siempre visible con los inputs ocultos

Atributo `hidden-inputs`

```
<template>
  <div class="block">
    <span class="demo-label">Emits Date object</span>
    <div class="demo-label">Value: {{ value15 }}</div>
    <ods-date-picker
      v-model="value15"
      :calendar-always-visible="true"
      :hidden-inputs="true"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd">
    </ods-date-picker>
  </div>
</template>

<script>
  {
    data() {
      return {
        value15: '',
      }
    }
  }
</script>
```

## Hora por defecto para comienzo y fin de fecha

Al seleccionar un intervalo de fechas, puede asignar la hora para la fecha de inicio y la fecha final.

Por defecto, la hora de la fecha de inicio y final es `00:00:00`. Configurar `default-time`  puede cambiar la hora respectivamente. Acepta un array de hasta dos cadenas con el formato  `12:00:00`. La primera cadena fija la hora para la fecha de inicio y la segunda para la fecha final.

```
<template>
  <div class="block">
    <p class="demo-label">Component value：<span v-if="value12.length">{{ value12 }}</span></p>
    <ods-date-picker
      v-model="value12"
      type="daterange"
      start-placeholder="Start date"
      end-placeholder="End date"
      :default-time="['00:00:00', '23:59:59']">
    </ods-date-picker>
  </div>
</template>

<script>
  {
    data() {
      return {
        value12: []
      }
    }
  }
</script>
```

## DateTimePicker

Seleccionar fecha y tiempo juntos en un picker.

DateTimePicker se deriva de DatePicker y TimePicker. Por una explicación más detallada sobre `pickerOptions` y otros atributos, puede referirse a DatePicker y TimePicker.

## Fecha y hora

Puede seleccionar la fecha y la hora en un picker al mismo tiempo configurando el tipo de fecha y la hora. La forma de utilizar los atajos es la misma que con Date Picker.

```
<template>
  <div class="block">
    <span class="demo-label">Default</span>
    <ods-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time">
    </ods-date-picker>
  </div>
  <div class="block">
    <span class="demo-label">With shortcuts</span>
    <ods-date-picker
      v-model="value2"
      type="datetime"
      placeholder="Select date and time"
      :picker-options="pickerOptions1">
    </ods-date-picker>
  </div>
  <div class="block">
    <span class="demo-label">With default time</span>
    <ods-date-picker
      v-model="value3"
      type="datetime"
      placeholder="Select date and time"
      default-time="12:00:00">
    </ods-date-picker>
  </div>
</template>

<script>
  {
    data() {
      return {
        pickerOptions1: {
          shortcuts: [{
            text: 'Now',
            onClick(picker) {
              picker.$emit('pick', Date.now())
            }
          }, {
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        value1: '',
        value2: '',
        value3: ''
      }
    }
  }
</script>
```

## Rango de fecha y tiempo

Puede seleccionar la fecha y el rango de tiempo ajustando `type` a `datetimerange`.

```
<template>
  <div class="block">
    <span class="demo-label">Default</span>
    <ods-date-picker
      v-model="value4"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </ods-date-picker>
  </div>
  <div class="block">
    <span class="demo-label">With shortcuts</span>
    <ods-date-picker
      v-model="value5"
      type="datetimerange"
      :picker-options="pickerOptions2"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      align="right">
    </ods-date-picker>
  </div>
</template>

<script>
  {
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: ''
      }
    }
  }
</script>
```

## Hora por defecto para fecha de inicio y fin

Usando el `type: datetimerange` la hora por defecto será `00:00:00`. Puedes modificarla con el atributo `default-time`, acepta un array con máximo dos strings, el primero para la fecha de inicio y el segundo para la de fin.

```
<template>
  <div class="block">
    <span class="demo-label">Start date time 12:00:00</span>
    <ods-date-picker
      v-model="value6"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="['12:00:00']">
    </ods-date-picker>
  </div>
  <div class="block">
    <span class="demo-label">Start date time 12:00:00, end date time 08:00:00</span>
    <ods-date-picker
      v-model="value7"
      type="datetimerange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="['12:00:00', '08:00:00']">
    </ods-date-picker>
  </div>
</template>

<script>
  {
    data() {
      return {
        value6: '',
        value7: ''
      }
    }
  }
</script>
```

## Atributos

| Atributo          | Descripción                              | Tipo              | Valores aceptados                        | Por defecto          |
| ----------------- | ---------------------------------------- | ----------------- | ---------------------------------------- | -------------------- |
| readonly          | si DatePicker es solo de lectura         | boolean           | —                                        | false                |
| disabled          | si DatePicker esta deshabilitado         | boolean           | —                                        | false                |
| size              | tamaño del input                         | string            | large/small/mini                         | —                    |
| editable          | si el input es editable                  | boolean           | —                                        | true                 |
| clearable         | si se muestra el boton de borrado        | boolean           | —                                        | true                 |
| placeholder       | placeholder cuando el modo NO es rango   | string            | —                                        | —                    |
| start-placeholder | placeholder para la fecha de inicio en modo rango | string            | —                                        | —                    |
| end-placeholder   | placeholder para la fecha final en modo rango | string            | —                                        | —                    |
| type              | tipo de picker                           | string            | year/month/date/datetime/ week/datetimerange/daterange | date                 |
| format            | formato en que se muestra el valor en el input | string            | ver [date formats](#/es/component/date-picker#date-formats) | yyyy-MM-dd           |
| align             | alineación                               | left/center/right | left                                     |                      |
| popper-class      | nombre de clase personalizada para el dropdown de DatePicker | string            | —                                        | —                    |
| picker-options    | opciones adicionales, chequee la tabla debajo | object            | —                                        | {}                   |
| range-separator   | separador de rangos                      | string            | —                                        | '-'                  |
| default-value     | opcional, valor por defecto para el calendario | Date              | cualquiera aceptado por `new Date()`     | —                    |
| default-time      | opcional, los valores para las horas que se deben usar en la seleccion de fechas cuando se usa el modo rango | string[]          | Array de dos valores, cada uno es un string del estilo `12:00:00`. El primer elemento es para la fecha de inicio y el segundo es para la fecha final. | —                    |
| value-format      | opcional, formato del valor enlazado. Si no esta especificado, el valor enlazado será un objeto Date. | string            | ver [date formats](#/es/component/date-picker#date-formats) | —                    |
| name              | igual que `name` en el input nativo      | string            | —                                        | —                    |
| unlink-panels     | desvincular los dos paneles de fecha en el range-picker | boolean           | —                                        | false                |
| prefix-icon       | Clase personalizada para el icono prefijado | string            | —                                        | ods-icon-date         |
| clear-icon        | Clase personalizada para el icono `clear` | string            | —                                        | ods-icon-circle-close |

## Opciones del Picker

| Atributo       | Descripción                              | Tipo                           | Valores aceptados | Por defecto |
| -------------- | ---------------------------------------- | ------------------------------ | ----------------- | ----------- |
| shortcuts      | { text, onClick } un array de objetos para establecer opciones de acceso directo, verifique la tabla siguiente | object[]                       | —                 | —           |
| disabledDate   | una función que determina si una fecha está desactivada con esa fecha como parámetro. Debería devolver un valor booleano | function                       | —                 | —           |
| firstDayOfWeek | primer dia de la semana                  | Number                         | 1 to 7            | 7           |
| onPick         | una función que se dispara cuando se cambia la fecha seleccionada. Solamente para `daterange` y `datetimerange`. | Function({ maxDate, minDate }) | -                 | -           |
| calendarAlwaysVisible   | Muestra permanentemente el calendario | Boolean | -                 | False           |
| hiddenInputs   | Oculta los inputs, útil en combinación de calendarAlwaysVisible | Boolean | -                 | False           |
| onlyOneCalendar   | Mostrar sólo un calendario en los tipo de selección de rango de fechas | Boolean | -                 | False           |

## Accesso directo

| Atributo | Descripción                              | Tipo     | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------- | ----------------- | ----------- |
| text     | título del acceso directo                | string   | —                 | —           |
| onClick  | una función se dispara al hacer clic en el acceso directo, con`vm`como parámetro. Puede modificar el valor del picker emitiendo el evento `pick`. Ejemplo: `vm.$emit('pick', new Date())` | function | —                 | —           |


## Eventos

| Nombre | Descripción                              | Parametros                   |
| ------ | ---------------------------------------- | ---------------------------- |
| change | se dispara cuando el usuario confirma el valor | valor enlazado al componente |
| blur   | se dispara cuando el input pierde el foco | instancia del componente     |
| focus  | se dispara cuando el input obtiene el foco | instancia del componente     |

## Métodos

| Metodo | Descripción                | Parámetros |
| ------ | -------------------------- | ----------- |
| focus  | coloca el foco en el input | —           |



## Date formats

Utilice `format` para controlar el formato del texto visualizado en el input. Utilice `value-format` para controlar el formato del valor vinculado.

Por defecto, el componente acepta y emite un objeto Date. A continuación se soportan cadenas de formato, usando UTC 2017-01-02 03:04:05 como ejemplo:

### **Warning**

Preste atención a la capitalización, puedes probar con los ejemplos en la sección _How to use_

| formato     | significado  | nota                                     | ejemplo       |
| ----------- | ------------ | ---------------------------------------- | ------------- |
| `yyyy`      | año          |                                          | 2017          |
| `M`         | mes          | no acepta 0                              | 1             |
| `MM`        | mes          |                                          | 01            |
| `W`         | semana       | solamente para semanas en picker's `format`; no acepta 0 | 1             |
| `WW`        | semana       | solamente para semanas en  picker's `format` | 01            |
| `d`         | dia          | no acepta 0                              | 2             |
| `dd`        | dia          |                                          | 02            |
| `H`         | hora         | 24-hora reloj; no acepta 0               | 3             |
| `HH`        | hora         | 24-hora reloj                            | 03            |
| `h`         | hora         | 12-hora reloj;  debe usarse con `A` o `a`; no acepta 0 | 3             |
| `hh`        | hour         | 12-hora reloj;  debe usarse con `A` o `a` | 03            |
| `m`         | minuto       | no acepta 0                              | 4             |
| `mm`        | minuto       |                                          | 04            |
| `s`         | segundo      | no acepta 0                              | 5             |
| `ss`        | segundo      |                                          | 05            |
| `A`         | AM/PM        | solamente para `format`, mayusculas      | AM            |
| `a`         | am/pm        | solamente para `format`, minúsculas      | am            |
| `timestamp` | JS timestamp | solamente para `value-format`; valor vinculado debe ser un `number` | 1483326245000 |
