# Loading

Muestra la animación mientras se cargan los datos.

## Loading base, dentro de un contenedor

Muestra una animación dentro de un contenedor (una tabla, un módulo, etc.) mientras se cargan los datos.

El componente ofrece dos maneras de uso: por directiva y por servicio. La directiva personalizada **`v-loading`**, sólo necesita vincularse a un `Boolean`. Por defecto, el overlay del Loading se posicionará en el elemento donde se usa la directiva.

Al agregar el modificador **`body`**, el overlay se carga respecto al body.

```
<template>
  <ods-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">
    <ods-table-column
      prop="date"
      label="Fecha"
      width="180">
    </ods-table-column>
    <ods-table-column
      prop="name"
      label="Nombre"
      width="180">
    </ods-table-column>
    <ods-table-column
      prop="address"
      label="Dirección">
    </ods-table-column>
  </ods-table>
</template>

<script>
  {
    data() {
      return {
        tableData: [{
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
        }],
        loading: true
      }
    }
  }
</script>
```

## Textos personalizados

Puedes personalizar los textos del Loading usando los siguientes atributos:
  **loading-text**: Permite añadir un texto genérico estándar (14px)
  **loading-title**: Permite añadir un título, con una tipografía más grande y en bold (18px)
  **loading-description**: Permite añadir una descripción al título, en una tipografía más pequeña (12px)

El atributo `loading-text` **es excluyente** respecto a los otros dos: en caso de estar presente, el resto dejará de mostrarse:

```
<template>
  <ods-row>
    <ods-col :span="8">
      <ods-module
        v-loading="loading"
        loading-text="The text"
        loading-title="The title"
        loading-description="The description">
        <div slot="header" class="clearfix" style="position: relative">
          <span>Module Title</span>
        </div>
        <div class="text item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mauris ac augue rutrum volutpat a a nisl. Ut justo neque, pretium non ex nec, feugiat egestas lectus. Maecenas eget diam ipsum. Curabitur porta dolor at eleifend tempus. Cras vel turpis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac rhoncus erat, vel consequat libero. Duis imperdiet, neque eu volutpat venenatis, nisl arcu pretium lacus, non malesuada nisl erat in quam.
        </div>
      </ods-module>
    </ods-col>
    <ods-col :span="8">
      <ods-module
        v-loading="loading"
        loading-title="The title">
        <div slot="header" class="clearfix" style="position: relative">
          <span>Module Title</span>
        </div>
        <div class="text item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mauris ac augue rutrum volutpat a a nisl. Ut justo neque, pretium non ex nec, feugiat egestas lectus. Maecenas eget diam ipsum. Curabitur porta dolor at eleifend tempus. Cras vel turpis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac rhoncus erat, vel consequat libero. Duis imperdiet, neque eu volutpat venenatis, nisl arcu pretium lacus, non malesuada nisl erat in quam.
        </div>
      </ods-module>
    </ods-col>
    <ods-col :span="8">
      <ods-module
        v-loading="loading"
        loading-title="The title"
        loading-description="The description">
        <div slot="header" class="clearfix" style="position: relative">
          <span>Module Title</span>
        </div>
        <div class="text item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mauris ac augue rutrum volutpat a a nisl. Ut justo neque, pretium non ex nec, feugiat egestas lectus. Maecenas eget diam ipsum. Curabitur porta dolor at eleifend tempus. Cras vel turpis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac rhoncus erat, vel consequat libero. Duis imperdiet, neque eu volutpat venenatis, nisl arcu pretium lacus, non malesuada nisl erat in quam.
        </div>
      </ods-module>
    </ods-col>
  </ods-row>
</template>

<script>
  {
    data() {
      return {
        loading: true
      }
    }
  }
</script>
```

## Iconos personalizados

Puedes elegir el icono del Loading con el atributo **`loading-spinner`**. Los valores aceptados son **`circular`** y **`load`**. En caso de no especificarse el atributo, se usará el icono por defecto, llamado _pulse_.

```
<template>
  <ods-row>
    <ods-col :span="8">
      <ods-module
        v-loading="loading"
        loading-text="pulse, por defecto">
        <div slot="header" class="clearfix" style="position: relative">
          <span>Module Title</span>
        </div>
        <div class="text item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mauris ac augue rutrum volutpat a a nisl. Ut justo neque, pretium non ex nec, feugiat egestas lectus. Maecenas eget diam ipsum. Curabitur porta dolor at eleifend tempus. Cras vel turpis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac rhoncus erat, vel consequat libero. Duis imperdiet, neque eu volutpat venenatis, nisl arcu pretium lacus, non malesuada nisl erat in quam.
        </div>
      </ods-module>
    </ods-col>
    <ods-col :span="8">
      <ods-module
        v-loading="loading"
        loading-text="circular"
        loading-spinner="circular">
        <div slot="header" class="clearfix" style="position: relative">
          <span>Module Title</span>
        </div>
        <div class="text item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mauris ac augue rutrum volutpat a a nisl. Ut justo neque, pretium non ex nec, feugiat egestas lectus. Maecenas eget diam ipsum. Curabitur porta dolor at eleifend tempus. Cras vel turpis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac rhoncus erat, vel consequat libero. Duis imperdiet, neque eu volutpat venenatis, nisl arcu pretium lacus, non malesuada nisl erat in quam.
        </div>
      </ods-module>
    </ods-col>
    <ods-col :span="8">
      <ods-module
        v-loading="loading"
        loading-text="load"
        loading-spinner="load">
        <div slot="header" class="clearfix" style="position: relative">
          <span>Module Title</span>
        </div>
        <div class="text item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mauris ac augue rutrum volutpat a a nisl. Ut justo neque, pretium non ex nec, feugiat egestas lectus. Maecenas eget diam ipsum. Curabitur porta dolor at eleifend tempus. Cras vel turpis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac rhoncus erat, vel consequat libero. Duis imperdiet, neque eu volutpat venenatis, nisl arcu pretium lacus, non malesuada nisl erat in quam.
        </div>
      </ods-module>
    </ods-col>
  </ods-row>
</template>

<script>
  {
    data() {
      return {
        loading: true
      }
    }
  }
</script>
```

## Personalización del color del overlay. Clase CSS personalizada

Puedes personalizar el color de fondo del overlay con el atributo **`loading-background`**. Sólo tienes que indicar el código de color que quieres usar. Por defecto se usa un blanco no opaco: `rgba(255, 255, 255, 0.9)`

En caso de que el fondo sea oscuro, puedes hacer uso del atributo **`loading-white-text`** para cambiar el color del texto a blanco.

Si estas personalizaciones no son suficientes, puedes añadir tu propia clase CSS usando el atributo **`loading-custom-class`**. Esta clase se añadirá al elemento del DOM `.ods-loading-mask`, padre del resto de elementos que componen el Loading. A través de ella podrás customizar el CSS del Loading tanto como necesites.

```
<template>
  <ods-row>
    <ods-col :span="8">
      <ods-module
        v-loading="loading"
        loading-text="Background por defecto">
        <div slot="header" class="clearfix" style="position: relative">
          <span>Module Title</span>
        </div>
        <div class="text item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mauris ac augue rutrum volutpat a a nisl. Ut justo neque, pretium non ex nec, feugiat egestas lectus. Maecenas eget diam ipsum. Curabitur porta dolor at eleifend tempus. Cras vel turpis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac rhoncus erat, vel consequat libero. Duis imperdiet, neque eu volutpat venenatis, nisl arcu pretium lacus, non malesuada nisl erat in quam.
        </div>
      </ods-module>
    </ods-col>
    <ods-col :span="8">
      <ods-module
        v-loading="loading"
        loading-text="Background personalizado y texto en blanco"
        loading-white-text
        loading-background="rgba(0, 0, 0, 0.8)">
        <div slot="header" class="clearfix" style="position: relative">
          <span>Module Title</span>
        </div>
        <div class="text item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mauris ac augue rutrum volutpat a a nisl. Ut justo neque, pretium non ex nec, feugiat egestas lectus. Maecenas eget diam ipsum. Curabitur porta dolor at eleifend tempus. Cras vel turpis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac rhoncus erat, vel consequat libero. Duis imperdiet, neque eu volutpat venenatis, nisl arcu pretium lacus, non malesuada nisl erat in quam.
        </div>
      </ods-module>
    </ods-col>
    <ods-col :span="8">
      <ods-module
        v-loading="loading"
        loading-text="Background personalizado y clase CSS personalizada"
        loading-custom-class="my-custom-class"
        loading-background="rgba(0, 0, 0, 0.8)">
        <div slot="header" class="clearfix" style="position: relative">
          <span>Module Title</span>
        </div>
        <div class="text item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mauris ac augue rutrum volutpat a a nisl. Ut justo neque, pretium non ex nec, feugiat egestas lectus. Maecenas eget diam ipsum. Curabitur porta dolor at eleifend tempus. Cras vel turpis tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac rhoncus erat, vel consequat libero. Duis imperdiet, neque eu volutpat venenatis, nisl arcu pretium lacus, non malesuada nisl erat in quam.
        </div>
      </ods-module>
    </ods-col>
  </ods-row>
</template>

<script>
  {
    data() {
      return {
        loading: true
      }
    }
  }
</script>
<style>
  .my-custom-class .loading-text-wrapper {
    color: yellow;
  }
</style>
```

## Botones en estado de loading

El atributo `loading` permite poner el botón en estado de loading asignándole un Boolean

```
<ods-button :loading="true">Loading...</ods-button>
```

## Usar el componente a pantalla completa

Puedes hacer que el Loading se muestre a pantalla completa modificando el atributo `v-loading`, independientemente del lugar donde hayas hecho uso de la directiva con el modificador **`v-loading.fullscreen`**. En este caso, si quieres deshabilitar el desplazamiento en el `body` (el scroll), puedes agregar otro modificador: `lock`, **`v-loading.fullscreen.lock`**.

Opcionalmente, puedes usarlo como servicio y conseguir el mismo resultado, aunque es más sencillo usando la directiva. Cuando se utiliza como servicio, el componente se comporta de manera `lock` por defecto.

```
<template>
  <ods-button
    type="primary"
    @click="openFullScreen"
    v-loading.fullscreen.lock="fullscreenLoading">
    Como directiva
  </ods-button>
  <ods-button
    type="primary"
    @click="openFullScreen2">
    Como servicio
  </ods-button>
</template>

<script>
  {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'ods-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  }
</script>
```

## Servicio

Puedes invocar el componente con un servicio. Primero importa el servicio:

```
import { Loading } from '@onesait/onesait-ds'

```
Ejemplo de cómo invocar el servicio:

```
Loading.service(options);
```

El parámetro `options` es la configuración del componente, y estos detalles pueden ser encontrados en la siguiente tabla. `LoadingService` devuelve una instancia del componente, y puede cerrarlo invocando el método `close`:

```
let loadingInstance = Loading.service(options);
loadingInstance.close();
```

Tenga en cuenta que, en este caso, el componente a pantalla completa es una instancia única. Si un nuevo componente de pantalla completa es invocado antes de que se cierre la existente, se devolverá la instancia existente en lugar de crear la otra instancia:

```
let loadingInstance1 = Loading.service({ fullscreen: true });
let loadingInstance2 = Loading.service({ fullscreen: true });
console.log(loadingInstance1 === loadingInstance2); // true
```

Llamar al método `close` en cualquiera de estas puede cerrarlo.

Si Element es importado completamente, un método global `$loading` puede ser registrado a Vue.prototype. Puede invocarlo como esto: `this.$loading(options)`, y también devuelve una instancia del componente.

## Options

| Atributo             | Descripción                                     | Tipo          | Valores aceptados     | Por defecto              |
| -------------------- | ----------------------------------------------- | ------------- | --------------------- | -------------------------|
| loading-text         | texto que se muestra debajo del spinner         | string        | —                     | —                        |
| loading-title        | título que se muestra debajo del spinner        | string        | —                     | —                        |
| loading-description  | descripción que se muestra debajo del spinner   | string        | —                     | —                        |
| loading-background   | color de fondo del overlay                      | string        | —                     | rgba(255, 255, 255, 0.9) |
| loading-spinner      | spinner personalizado                           | string        | circular, load, pulse | pulse                    |
| loading-custom-class | nombre de clase personalizada para el componente| string        | —                     | —                        |
| target               | el nodo del DOM que el componente debe cubrir. Acepta un objecto DOM o una cadena. Si está es una cadena, este será pasado a `document.querySelector` para obtener el correspondiente nodo del DOM | object/string | — | document.body |
| body                 | igual que el modificador `body` de `v-loading`  | boolean       | —                     | false                    |
| fullscreen           | igual que el modificador `fullscreen` de `v-loading` | boolean  | —                     | true                     |
| lock                 | igual que el modificador `lock` de `v-loading`  | boolean       | —                     | false                    |
