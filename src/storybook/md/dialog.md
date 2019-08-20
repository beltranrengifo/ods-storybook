#Dialog

Informar a usuarios preservando el estado de la página actual.

## Uso Básico

Dialog abre una caja de diálogo, y es bastante personalizable.

Establezca el atributo `visible` con un booleano, y el Dialog se muestra cuando es `true`. El diálogo tiene dos partes: `body` y `footer`,  este último requiere un slot llamado `footer`. El atributo `title` es opcional (vacío por defecto) y sirve para definir un título. Por último, este ejemplo muestra cómo se utiliza `before-close`.

En este ejemplo hemos usado la propiedad `append-to-body` debido a las particularidades de esta guía y al anidamiento de componentes. Permite hacer el append de la estructura HTML en distinto sitio del habitual, evitando solapamientos con el overlay y desplazamientos. Puedes probar a modificarlo en el ejemplo. Es probable que no necesites usarlo en otro contexto más genérico.

```

<ods-button type="text" @click="dialogVisible = true">click to open the Dialog</ods-button>

<ods-dialog
  title="Tips"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose"
  :append-to-body="true">
  <span>This is a message</span>
  <span slot="footer" class="dialog-footer">
    <ods-button type="text" @click="dialogVisible = false">Cancel</ods-button>
    <ods-button @click="dialogVisible = false">Confirm</ods-button>
  </span>
</ods-dialog>
<script>
{
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose() {
      //console.log('close)
    }
  }
}
</script>
```

 tip

`before-close`  sólo funciona cuando el usuario hace clic en el icono de cerrar o en el fondo. Si tiene botones que cierran el cuadro de diálogo en el slot llamado `footer`, puede agregar lo que haría `before-close` en el manejador de eventos de los botones.

## Personalizaciones

El contenido del Diálogo puede ser cualquier cosa, incluso una tabla o un formulario. Este ejemplo muestra cómo usar Element Table y Form con Dialog

```

<ods-button type="text" @click="dialogTableVisible = true">open a Table nested Dialog</ods-button>

<ods-dialog
  title="Shipping address"
  :visible.sync="dialogTableVisible"
  :append-to-body="true">
  <ods-table :data="gridData">
    <ods-table-column property="date" label="Date" width="150"></ods-table-column>
    <ods-table-column property="name" label="Name" width="200"></ods-table-column>
    <ods-table-column property="address" label="Address"></ods-table-column>
  </ods-table>
</ods-dialog>

<ods-button type="text" @click="dialogFormVisible = true">open a Form nested Dialog</ods-button>

<ods-dialog
  title="Shipping address"
  :visible.sync="dialogFormVisible"
  :append-to-body="true">
  <ods-form :model="form">
    <ods-form-item label="Promotion name" :labods-width="formLabelWidth">
      <ods-input v-model="form.name" auto-complete="off"></ods-input>
    </ods-form-item>
    <ods-form-item label="Zones" :labods-width="formLabelWidth">
      <ods-select v-model="form.region" placeholder="Please select a zone">
        <ods-option label="Zone No.1" value="shanghai"></ods-option>
        <ods-option label="Zone No.2" value="beijing"></ods-option>
      </ods-select>
    </ods-form-item>
  </ods-form>
  <span slot="footer" class="dialog-footer">
    <ods-button type="text" @click="dialogFormVisible = false">Cancel</ods-button>
    <ods-button @click="dialogFormVisible = false">Confirm</ods-button>
  </span>
</ods-dialog>

<script>
{
  data() {
    return {
      gridData: [{
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  }
}
</script>
```

## Contenido centrado
El contenido de Diálogo se puede centrar.

Ajuste `center` en `true` para centrar el encabezado y el pie de página del cuadro de diálogo horizontalmente.

`center` sólo afecta al encabezado y pie de página de Dialog. El cuerpo de Dialog puede ser cualquier cosa, así que a veces no se ve bien cuando está centrado. Necesitas escribir algún CSS si deseas centrar el cuerpo también.

Si la variable ligada a `visible` se gestiona en el Vuex store, el `.sync` no puede funcionar correctamente. En este caso, elimine el modificador `.sync`, escuche los eventos de `open` y `close` Dialog, y confirme las mutaciones Vuex para actualizar el valor de esa variable en los manejadores de eventos.

```

<ods-button type="text" @click="centerDialogVisible = true">Click to open the Dialog</ods-button>

<ods-dialog
  title="Warning"
  :visible.sync="centerDialogVisible"
  width="30%"
  :append-to-body="true"
  center>
  <span>It should be noted that the content will not be aligned in center by default</span>
  <span slot="footer" class="dialog-footer">
    <ods-button type="text" @click="centerDialogVisible = false">Cancel</ods-button>
    <ods-button type="primary" @click="centerDialogVisible = false">Confirm</ods-button>
  </span>
</ods-dialog>

<script>
{
  data() {
    return {
      centerDialogVisible: false
    }
  }
}
</script>
```

## Icono personalizado

Puedes añadir un icono por encima del título. Usa la prop `icon` asignándole un string como valor.

Las opciones disponibles son:

1. **`success`** pinta un stick verde

2. **`error`** pinta una cruz roja

3. cualquier icono del sistema de diseño: usa el string del icono que desées renderizar. Si usas esta opción puede especificar dos props adicionales: **`iconColor`** que recibe un string que aplicará como color a la fuente, e **`iconSize`** que recibe un string que aplicará como tamaño a la fuente.

```
<ods-button type="text" @click="dialogVisible = true">click to open the Dialog</ods-button>
<ods-dialog
  title="Warning"
  icon="error"
  :visible.sync="dialogVisible"
  width="30%"
  center
  :append-to-body="true">
  <span slot="footer" class="dialog-footer">
    <ods-button type="text" @click="dialogVisible = false">Cancel</ods-button>
    <ods-button @click="dialogVisible = false">Confirm</ods-button>
  </span>
</ods-dialog>

<ods-button type="text" @click="dialogVisible2 = true">click to open the Dialog</ods-button>
<ods-dialog
  title="Success"
  icon="success"
  :visible.sync="dialogVisible2"
  width="30%"
  center
  :append-to-body="true">
  <span slot="footer" class="dialog-footer">
    <ods-button type="text" @click="dialogVisible2 = false">Cancel</ods-button>
    <ods-button @click="dialogVisible2 = false">Confirm</ods-button>
  </span>
</ods-dialog>

<ods-button type="text" @click="dialogVisible3 = true">click to open the Dialog</ods-button>
<ods-dialog
  title="Custom icon from ODS"
  icon="calendar-schedule"
  iconColor="#87BEE6"
  iconSize="68"
  :visible.sync="dialogVisible3"
  width="30%"
  center
  :append-to-body="true">
  <span slot="footer" class="dialog-footer">
    <ods-button type="text" @click="dialogVisible3 = false">Cancel</ods-button>
    <ods-button @click="dialogVisible3 = false">Confirm</ods-button>
  </span>
</ods-dialog>
<script>
{
  data() {
    return {
      dialogVisible: false,
      dialogVisible2: false,
      dialogVisible3: false
    }
  }
}
</script>
```

## Transición personalizada

Es posible usar una transición personalizada mediante la prop `transitionName`

Transiciones disponibles:

* `fade-in-linear`
* `expand`
* `ods-slide-in-left`
* `ods-zoom-in-center`
* `ods-zoom-in-top`
* `ods-zoom-in-bottom`
* `ods-zoom-in-left`
* `ods-list`

```

<ods-button type="text" @click="dialogVisible = true">Custom transition</ods-button>

<ods-dialog
  title="Tips"
  :visible.sync="dialogVisible"
  width="30%"
  :append-to-body="true"
  transitionName="ods-slide-in-left">
  <span slot="footer" class="dialog-footer">
    <ods-button type="text" @click="dialogVisible = false">Cancel</ods-button>
    <ods-button @click="dialogVisible = false">Confirm</ods-button>
  </span>
</ods-dialog>
<script>
{
  data() {
    return {
      dialogVisible: false
    }
  }
}
</script>
```

## Confirmación de cierre

Opcionalmente se puede forzar la confirmación de cierre del diálogo:

```
<ods-button type="text" @click="dialogVisible = true">click to open the Dialog</ods-button>

<ods-dialog
  title="Tips"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose"
  :append-to-body="true">
  <span>Click in the X to see the confirmation alert</span>
  <span slot="footer" class="dialog-footer">
    <ods-button type="text" @click="dialogVisible = false">Cancel</ods-button>
    <ods-button @click="dialogVisible = false">Confirm</ods-button>
  </span>
</ods-dialog>
<script>
{
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
```

## Atributo

| Atributo              | Descripción                              | Tipo                                     | Valores aceptados | Por defecto |
| --------------------- | ---------------------------------------- | ---------------------------------------- | ----------------- | ----------- |
| visible               | visibilidad del Diálogo, apoya el modificador .sync | boolean                                  | —                 | false       |
| title                 | título de Diálogo. También se puede pasar con un slot con nombre (ver la tabla siguiente) | string                                   | —                 | —           |
| width                 | anchura de Diálogo                       | string                                   | —                 | 50%         |
| fullscreen            | si el diálogo ocupa pantalla completa    | boolean                                  | —                 | false       |
| top                   | valor de `margin-top` del Diálogo CSS    | string                                   | —                 | 15vh        |
| modal                 | si se muestra una máscara                | boolean                                  | —                 | true        |
| modal-append-to-body  | si adjuntar modal al elemento de cuerpo. Si es falso,el modal se agregará al elemento principal de Diálogo | boolean                                  | —                 | true        |
| append-to-body        | Si adjuntar el cuadro de diálogo al cuerpo | boolean                                  | —                 | false       |
| lock-scroll           | Si el scroll del cuerpo está desactivado mientras se muestra el cuadro de diálogo | boolean                                  | —                 | true        |
| custom-class          | nombres de clase personalizada para el Diálogo | string                                   | —                 | —           |
| close-on-click-modal  | si el Diálogo puede ser cerrado haciendo clic en la máscara | boolean                                  | —                 | true        |
| close-on-press-escape | si el Diálogo puede ser cerrado presionando ESC | boolean                                  | —                 | true        |
| show-close            | si mostrar un botón de cerrar            | boolean                                  | —                 | true        |
| before-close          | una devolución de llamada antes de que se cierre el cuadro de diálogo, y evitar cerrar el cuadro de diálogo | función(done) `done`se usa para cerrar el diálog | —                 | —           |
| center                | si alinear el encabezado y el pie de página en el centro | boolean                                  | —                 | false       |

## Slots

| Nombre | Descripcíon                            |
| ------ | -------------------------------------- |
| —      | contenido de Diálogo                   |
| title  | contenido del título de Diálogo        |
| footer | contenido del pie de página de Diálogo |

### Eventos
| Nombre de Evento | Descripcíon                              | Parámetros |
| ---------------- | ---------------------------------------- | ---------- |
| open             | se activa cuando se abre el cuadro de Diálogo | —          |
| close            | se dispara cuando el Diálogo se cierra   | —          |
