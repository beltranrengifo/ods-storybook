# Pagination
Si tiene que mostrar muchos datos en una página, utilice la paginación.

##  Uso básico

Asigne en el atributo `layout` los diferentes elementos que quiere utilizar separados por coma. Los elementos de paginación son: `prev` (un botón para navegar a la página anterior), `next` (un botón para navegar a la siguiente página), `pager` (lista de página), `jumper` (un `input` para saltar a una página determinada), `total` (total de elementos), `size` (un `select` para seleccionar el tamaño de la página ) y `->`(todo elemento situado luego de este símbolo será movido a la derecha).
```
<div class="block" style="margin-bottom:50px">
  <ods-pagination
    layout="prev, pager, next"
    :total="50">
  </ods-pagination>
</div>
<div class="block">
  <ods-pagination
    layout="prev, pager, next"
    :total="1000">
  </ods-pagination>
</div>
```
 

##  Paginación pequeña

Usa una paginación pequeña en caso de espacio limitado.

Solo ponga el atributo `small` como `true` y la Paginación se volverá pequeña.
```
<ods-pagination
  small
  layout="prev, pager, next"
  :total="50">
</ods-pagination>
```
 

##  Más elementos

Agrega más modulos basados en su escenario.

Este ejemplo es un completo caso de uso. Utiliza los eventos `size-change` y `current-change` para manejar el tamaño de página y el cambio de página. El atributo `page-sizes` acepta un arreglo de enteros, cada uno representa un diferente valor del atributo `sizes` que es un `select`, ejemplo `[100, 200, 300, 400]` indicará que el `select` tendrá las opciones: 100, 200, 300 o 400 elementos por página.

```

  <div class="block" style="margin-bottom:50px">
    
    <ods-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </ods-pagination>
  </div>
  <div class="block" style="margin-bottom:50px">
    
    <ods-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </ods-pagination>
  </div>
  <div class="block" style="margin-bottom:50px">
    
    <ods-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </ods-pagination>
  </div>
  <div class="block" style="margin-bottom:50px">
    
    <ods-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </ods-pagination>
  </div>

<script>
  {
    methods: {
      handleSizeChange(val) {
        console.log(\`${val} items per page\`);
      },
      handleCurrentChange(val) {
        console.log(\`current page: ${val}\`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>

<script>
  import { addClass } from 'onesait-ds/src/utils/dom'
  {
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    },
    methods: {
      handleSizeChange(val) {
        console.log(\`${val} items per page\`)
      },
      handleCurrentChange(val) {
        console.log(\`current page: ${val}\`)
      }
    },
    mounted() {
      this.$nextTick(() => {
        let demos = document.querySelectorAll('.source')
        let firstDemo = demos[0]
        let lastDemo = demos[demos.length - 1]
        addClass(firstDemo, 'first')
        addClass(lastDemo, 'last')
      })
    }
  }
</script>
```
 
###  Atributos
| Atributo     | Descripción                              | Tipo     | Valores aceptados                        | Por defecto                            |
| ------------ | ---------------------------------------- | -------- | ---------------------------------------- | -------------------------------------- |
| small        | usar paginación pequeña                  | boolean  | —                                        | false                                  |
| page-size    | cantidad de elementos por página         | number   | —                                        | 10                                     |
| total        | total de elementos                       | number   | —                                        | —                                      |
| page-count   | total de páginas. Asigna `total` o `page-count` y las páginas serán mostradas; si necesitas `page-sizes`, `total` es **requerido** | number   | —                                        | —                                      |
| current-page | número actual de la página, soporta el modificador .sync | number   | —                                        | 1                                      |
| layout       | layout de la paginación, elementos separados por coma | string   | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot` | 'prev, pager, next, jumper, ->, total' |
| page-sizes   | opciones para la cantidad de elementos por página | number[] | —                                        | [10, 20, 30, 40, 50, 100]              |
| popper-class | clase propia para el `dropdown` del `select` del número de páginas | string   | —                                        | —                                      |
| prev-text    | texto para el botón `prev`               | string   | —                                        | —                                      |
| next-text    | texto para el botón `next`               | string   | —                                        | —                                      |
| disabled | si Pagination esta disabled | boolean | — | false |

###  Eventos
| Nombre del evento | Descripción                             | Parámetros                    |
| ----------------- | --------------------------------------- | ----------------------------- |
| size-change       | se dispara cuando `page-size` cambia    | nuevo valor de `page-size`    |
| current-change    | se dispara cuando `current-page` cambia | nuevo valor de `current-page` |
| prev-click        | Se dispara cuando el botón `prev` recibe el clic y la pagina actual cambia | la nueva pagina actual    |
| next-click | Se dispara cuando el botón `next` recibe el clic y la pagina actual cambia | la nueva pagina actual |

###  Slot
| Nombre | Descripción                              |
| ------ | ---------------------------------------- |
| —      | Elemento propio. Para utilizar esto necesitas declarar `slot` en el `layout` |
