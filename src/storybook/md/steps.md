# Steps

Guía al usuario para completar tareas de acuerdo con el proceso. Sus pasos pueden configurarse de acuerdo con el escenario de aplicación real y el número de pasos no puede ser inferior a dos.

## Uso básico

Usa el atributo **`dots`** para ocultar los números de los pasos por un punto en el step actual

Defina el atributo **`active`** con un valor de tipo `Number`, que indica el índice de pasos y comienza desde 0. 

Puede definir el atributo **`space`** cuando es necesario fijar el ancho del paso que acepta el tipo `Boolean`. La unidad del atributo `space` es px. Si no está configurado, es responsive.

La configuración del atributo **`finish-status`** da como resultado un icono de check en los pasos ya completados.

## Step bar con dots y centrado

```
<ods-steps :active="active" finish-status="success" dots align-center>
  <ods-step title="Paso 1"></ods-step>
  <ods-step title="Paso 2"></ods-step>
  <ods-step title="Paso 3"></ods-step>
</ods-steps>
<div class="text-center">
  <ods-button @click="prev" icon="ods-icon-arrow-left" circle negative size="small"></ods-button>
  <ods-button @click="next" icon="ods-icon-arrow-right" circle negative size="small"></ods-button>
</div>

<script>
  {
    data() {
      return {
        active: 0
      }
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0
      },
      prev() {
        this.active --
        if (this.active < 0) this.active = 0
      }
    }
  }
</script>

<style>
  .ods-button {
    margin-top: 12px;
  }
  .text-center {
    text-align: center;
  }
</style>
```

## Steps con números, alineado a la izquierda

Elimina el atributo dots para ver los números de los pasos.

```
<ods-steps :active="active" finish-status="success">
  <ods-step title="Paso 1"></ods-step>
  <ods-step title="Paso 2"></ods-step>
  <ods-step title="Paso 3"></ods-step>
</ods-steps>

<ods-button @click="prev" icon="ods-icon-arrow-left" circle negative size="small"></ods-button>
<ods-button @click="next" icon="ods-icon-arrow-right" circle negative size="small"></ods-button>


<script>
  {
    data() {
      return {
        active: 0
      }
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0
      },
      prev() {
        this.active --
        if (this.active < 0) this.active = 0
      }
    }
  }
</script>

<style>
  .ods-button {
    margin-top: 12px;
  }
</style>
```

## Step bar con el status y una anchura fija entre steps

Muestra el estado del step para cada paso.

Utilice el atributo `title` para establecer el nombre del paso, o sobreescriba el atributo usando un slot con nombre. Hemos enumerado todos los nombres de slots al final de esta página.

```
<ods-steps :space="200" :active="active" finish-status="success">
  <ods-step title="Done"></ods-step>
  <ods-step title="Processing"></ods-step>
  <ods-step title="Step 3"></ods-step>
</ods-steps>

<ods-button @click="prev" icon="ods-icon-arrow-left" circle negative size="small"></ods-button>
<ods-button @click="next" icon="ods-icon-arrow-right" circle negative size="small"></ods-button>
<script>
  {
    data() {
      return {
        active: 0
      }
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0
      },
      prev() {
        this.active --
        if (this.active < 0) this.active = 0
      }
    }
  }
</script>

<style>
  .ods-button {
    margin-top: 12px;
  }
</style>
```
 

## Centrado con números, **sin el atributo `finish-status`**

El título y la descripción pueden estar centrados.

```
<ods-steps :active="active" align-center>
  <ods-step title="Step 1" description="Descripción step 1"></ods-step>
  <ods-step title="Step 2" description="Descripción step 2"></ods-step>
  <ods-step title="Step 3" description="Descripción step 3"></ods-step>
  <ods-step title="Step 4" description="Descripción step 4"></ods-step>
</ods-steps>

<div class="text-center">
  <ods-button @click="prev" icon="ods-icon-arrow-left" circle negative size="small"></ods-button>
  <ods-button @click="next" icon="ods-icon-arrow-right" circle negative size="small"></ods-button>
</div>
<script>
  {
    data() {
      return {
        active: 0
      }
    },
    methods: {
      next() {
        if (this.active++ > 3) this.active = 0
      },
      prev() {
        this.active --
        if (this.active < 0) this.active = 0
      }
    }
  }
</script>

<style>
  .ods-button {
    margin-top: 12px;
  }
  .text-center {
    text-align: center;
  }
</style>
```
 

## Step bar con descripción

Puede poner una descripción para cada paso.

```
<ods-steps :active="active">
  <ods-step title="Step 1" description="Descripción step 1"></ods-step>
  <ods-step title="Step 2" description="Descripción step 2"></ods-step>
  <ods-step title="Step 3" description="Descripción step 3"></ods-step>
</ods-steps>

<ods-button @click="prev" icon="ods-icon-arrow-left" circle negative size="small"></ods-button>
<ods-button @click="next" icon="ods-icon-arrow-right" circle negative size="small"></ods-button>
<script>
  {
    data() {
      return {
        active: 0
      }
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0
      },
      prev() {
        this.active --
        if (this.active < 0) this.active = 0
      }
    }
  }
</script>

<style>
  .ods-button {
    margin-top: 12px;
  }
</style>
```

## Step bar con iconos

En la barra de pasos se pueden utilizar diversos iconos personalizados.

El icono se define mediante la propiedad `icon`. Los tipos de iconos se pueden encontrar en la descripción del componente Icono. Además, puede personalizar el icono a través de un slot con nombre.

```
<ods-steps :active="active">
  <ods-step title="Step 1" icon="ods-icon-edit"></ods-step>
  <ods-step title="Step 2" icon="ods-icon-upload"></ods-step>
  <ods-step title="Step 3" icon="ods-icon-picture"></ods-step>
</ods-steps>

<ods-button @click="prev" icon="ods-icon-arrow-left" circle negative size="small"></ods-button>
<ods-button @click="next" icon="ods-icon-arrow-right" circle negative size="small"></ods-button>
<script>
  {
    data() {
      return {
        active: 0
      }
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0
      },
      prev() {
        this.active --
        if (this.active < 0) this.active = 0
      }
    }
  }
</script>

<style>
  .ods-button {
    margin-top: 12px;
  }
</style>
```

## Step bar vertical

Step bar vertical.

Sólo tiene que fijar el atributo `direction`  a ` vertical` en el elemento `ods-steps`.

```
<div style="height: 300px;">
  <ods-steps direction="vertical" :active="active">
    <ods-step title="Step 1"></ods-step>
    <ods-step title="Step 2"></ods-step>
    <ods-step title="Step 3"></ods-step>
  </ods-steps>
</div>

<ods-button @click="prev" icon="ods-icon-arrow-left" circle negative size="small"></ods-button>
<ods-button @click="next" icon="ods-icon-arrow-right" circle negative size="small"></ods-button>

<script>
  {
    data() {
      return {
        active: 0
      }
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0
      },
      prev() {
        this.active --
        if (this.active < 0) this.active = 0
      }
    }
  }
</script>

<style>
  .ods-button {
    margin-top: 12px;
  }
</style>
```

## Steps atributos

| Atributo       | Descripción                              | Tipo            | Valores aceptados                        | Por defecto |
| -------------- | ---------------------------------------- | --------------- | ---------------------------------------- | ----------- |
| dots           | Oculta los números de los pasos          | boolean         |                                          | false       |
| space          | el espaciado de cada paso, será responsivo si se omite. Soporta porcentaje. | number / string | —                                        | —           |
| direction      | dirección de visualización               | string          | vertical/horizontal                      | horizontal  |
| active         | actual paso de activación                | number          | —                                        | 0           |
| process-status | status del paso actual                   | string          | wait / process / finish / error / success | process     |
| finish-status  | status del paso final                    | string          | wait / process / finish / error / success | finish      |
| align-center   | centrado de título y descripción         | boolean         | —                                        | false       |
| simple         | si aplicar un tema simple                | boolean         | -                                        | false       |

## Step atributos
| Atributo    | Descripción                              | Tipo                                     | Valores aceptados | Por defecto |
| ----------- | ---------------------------------------- | ---------------------------------------- | ----------------- | ----------- |
| title       | titulo del paso                          | string                                   | —                 | —           |
| description | descripción del paso                     | string                                   | —                 | —           |
| icon        | icono del paso                           | nombre de la clase del icono del paso. Los iconos también se pueden pasar a través del slot con nombre | string            | —           |
| status      | estado actual. Se configurará automáticamente mediante Steps si no está configurado. | wait / process / finish / error / success | -                 |             |

## Step Slot
| Name        | Description          |
| ----------- | -------------------- |
| icon        | Icono personalizado  |
| title       | Titulo del paso      |
| description | Descripcion del paso |
