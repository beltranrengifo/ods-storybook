# InputSearch

## Uso básico

El componente **`ods-input-search`** se compone internamente de un input y un botón. Además de ofrecer una solución cómoda a nivel de diseño, ofrece ciertas propiedades adicionales.

Versión por defecto:

```
<ods-input-search
  v-model="value"
  size="hecto"
  placeholder="Buscar aquí"
  @search="handleSearch"
  @change="handleSearchChange"/>

<script>
  {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      handleSearch () {
        console.log('search click', this.value)
        console.log(this.value)
      },
      handleSearchChange () {
        console.log('search input change', this.value)
        console.log(this.value)
      }
    }
  }
</script>

```

## Expandable

El atributo **`expandableSearch`** ofrece una versión desplegable del componente:

```
<ods-input-search
  size="exa"
  v-model="value"
  expandableSearch
  clearOnClose
  @search="handleSearch"
  @change="handleSearchChange"
  @close="handleSearchClose"/>

<script>
  {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      handleSearch () {
        console.log('search click', this.value)
        console.log(this.value)
      },
      handleSearchChange () {
        console.log('search input change', this.value)
        console.log(this.value)
      },
      handleSearchClose () {
        console.log('close event')
      }
    }
  }
</script>
```

## Tamaño

Utilice el atributo **`size`** para establecer los tamaños adicionales presentes en el **ods-input-search**.

```
<div class="ods-mb-4">
  <div>
    <small>Deci</small>
  </div>
  <ods-input-search
    v-model="value"
    size="deci"
    placeholder="Buscar aquí"
    @search="handleSearch"
    @change="handleSearchChange"/>
  <span class="ods-ml-6"> | </span>
  <ods-input-search
    class="ods-ml-6"
    size="deci"
    v-model="value"
    expandableSearch
    clearOnClose
    @search="handleSearch"
    @change="handleSearchChange"
    @close="handleSearchClose"/>
</div>
<div class="ods-mb-4">
  <div>
    <small>Hecto</small>
  </div>
  <ods-input-search
    v-model="value"
    size="hecto"
    placeholder="Buscar aquí"
    @search="handleSearch"
    @change="handleSearchChange"/>
  <span class="ods-ml-6"> | </span>
  <ods-input-search
    class="ods-ml-6"
    size="hecto"
    v-model="value"
    expandableSearch
    clearOnClose
    @search="handleSearch"
    @change="handleSearchChange"
    @close="handleSearchClose"/>
</div>
<div class="ods-mb-4">
  <div>
    <small>Mega</small>
  </div>
  <ods-input-search
    v-model="value"
    size="mega"
    placeholder="Buscar aquí"
    @search="handleSearch"
    @change="handleSearchChange"/>
  <span class="ods-ml-6"> | </span>
  <ods-input-search
    class="ods-ml-6"
    size="mega"
    v-model="value"
    expandableSearch
    clearOnClose
    @search="handleSearch"
    @change="handleSearchChange"
    @close="handleSearchClose"/>
</div>
<div class="ods-mb-4">
  <div>
    <small>Exa</small>
  </div>
  <ods-input-search
    v-model="value"
    size="exa"
    placeholder="Buscar aquí"
    @search="handleSearch"
    @change="handleSearchChange"/>
  <span class="ods-ml-6"> | </span>
  <ods-input-search
    class="ods-ml-6"
    size="exa"
    v-model="value"
    expandableSearch
    clearOnClose
    @search="handleSearch"
    @change="handleSearchChange"
    @close="handleSearchClose"/>
</div>


<script>
  {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      handleSearch () {
        console.log('search click', this.value)
        console.log(this.value)
      },
      handleSearchChange () {
        console.log('search input change', this.value)
        console.log(this.value)
      },
      handleSearchClose () {
        console.log('close event')
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
.ods-ml-6 {
  margin-left: 24px;
}
</style>
```

## Más opciones

El atributo **`icon`** permite cambiar el icono de búsqueda
El atributo **`placeholder`** permite modificar el placeholder
El atributo **`clearOnClose`** permite limpiar el input cuando se cierra. Sólo disponible en la opción **`expandableSearch`**
El atributo **`clearable`** permite limpiar el input usando un aspa sobre el input.

```
<div class="ods-mb-4">
  <ods-input-search
    icon="map"
    v-model="value"
    size="hecto"
    placeholder="Buscar aquí"
    @search="handleSearch"
    @change="handleSearchChange"/>
</div>
<div class="ods-mb-4">
<ods-input-search
  placeholder="Texto personalizado"
  icon="hand"
  size="hecto"
  v-model="value"
  expandableSearch
  clearOnClose
  @search="handleSearch"
  @change="handleSearchChange"
  @close="handleSearchClose"/>
</div>
<div class="ods-mb-4">
  <ods-input-search
    icon="map"
    v-model="value"
    size="hecto"
    placeholder="Clearable"
    @search="handleSearch"
    @change="handleSearchChange"
    clearable/>
</div>
<script>
  {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      handleSearch () {
        console.log('search click', this.value)
        console.log(this.value)
      },
      handleSearchChange () {
        console.log('search input change', this.value)
        console.log(this.value)
      },
      handleSearchClose () {
        console.log('close event')
      }
    }
  }
</script>
```

## Versión de línea (_outlined_)

Usa la prop **`outlined`** para mostrar el input en su versión de línea.
Sólo está disponible el evento **`@change`** ya que no tiene botón. Este evento se ejecuta cada vez que el input cambia de valor.

```
<ods-input-search
  v-model="value"
  size="hecto"
  outlined
  placeholder="Buscar aquí"
  @change="handleSearchChange"/>

<script>
  {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      handleSearchChange () {
        console.log('search input change', this.value)
      }
    }
  }
</script>

```

## Atributos

| Atributo          | Descripción                              | Tipo    | Valores aceptados | Por defecto |
| ----------------- | ---------------------------------------- | ------- | ----------------- | ----------- |
| v-model           | valor del input                          | -       |                   |             |
| size              | tamaño del input                         | string  | ver comp. input   | deci        |
| expandableSearch  | input desplegable                        | boolean | -                 | false       |
| clearable         | input limpiable                          | boolean | -                 | false       |
| placeholder       | texto del placeholder                    | string  | -                 | Search      |
| icon              | icono del botón                          | string  | ods icons         | search      |
| clearOnClose      | input desplegable limpiable en el close  | boolean | -                 | false       |
| outlined          | diseño de línea sin botón                | boolean | -                 | false       |

## Eventos

| Nombre | Descripción                              | Parámetros         |
| ------ | ---------------------------------------- | ------------------ |
| search | en el click del botón de buscar          |                    |
| change | cuando cambia el valor del input         |                    |
| close  | cuando se pliega el buscador _expandable_ |                   |
