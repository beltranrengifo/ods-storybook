# Clickoutside

Permite ejecutar un método en el evento `@click` recibido fuera del elemento donde se especifica la directiva.

## Uso Básico

Permite ejecutar un método en el evento `@click` recibido fuera del elemento donde se especifica la directiva.

### **Primero**

Importa la directiva:

```
import Clickoutside from '@onesait/onesait-ds/lib/utils/clickoutside.js'
```

### **Segundo**

Declara la directiva en el componente:

```
directives: {
  Clickoutside
}
```

### **Opcionalmente**

Puedes instalar la directiva de manera **global** en la app, en el _main.js_, antes de crear la instancia de Vue.

```
Vue.directive("clickoutside", {
  bind (el, binding, vnode) {
    Clickoutside.bind(el, binding, vnode)
  }
})
```

### **Tercero**

Usa la directiva en el elemento sobre el que quieras actuar. Al hacer click fuera de ese elemento se disparará el método que hayas asociado.

```
<ods-button
  type="text"
  @click="showPopover">Haz click para mostrar el popover
</ods-button>

<ods-popover
  placement="right"
  v-clickoutside="hidePopover"
  trigger="manual"
  v-model="activePopover"
  popper-class="custom-popover"
  width="320">
  <div class="card__menu">
    <h2>Directiva v-clickoutside</h2>
    <p>Haz click fuera del popover para cerrarlo</p>
  </div>
</ods-popover>

<script>
  {
    data () {
      return {
        activePopover: false
      }
    },
    methods: {
      showPopover() {
        this.activePopover = true
      },
      hidePopover() {
        this.activePopover = false
        //console.log('clickoutside!')
      }
    }
  }
</script>
```
