# Tooltip

Mostrar aviso de información con el hover del mouse.

##  Uso básico

Tooltip tiene 9 colocaciones.

Use el atributo `content` para establecer el contenido que se mostrará al hacer hover. El atributo `placement` determina la posición del tooltip. Su valor es `[orientation]-[alignment]` con cuatro orientaciones `top`, `left`, `right`, `bottom` y tres alineaciones `start`, `end`, `null`, la alineación default es null. Tome `placement="left-end"` como ejemplo, Tooltip será mostrado en la izquierda del elemento en que se esté haciendo hover y el fondo del tooltip se alineará con el fondo del elemento.

```
<div class="box">
  <div class="top">
    <ods-tooltip class="item" effect="dark" content="Top Left prompts info" placement="top-start">
      <ods-button>top-start</ods-button>
    </ods-tooltip>
    <ods-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">
      <ods-button>top</ods-button>
    </ods-tooltip>
    <ods-tooltip class="item" effect="dark" content="Top Right prompts info" placement="top-end">
      <ods-button>top-end</ods-button>
    </ods-tooltip>
  </div>
  <div class="left">
    <ods-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">
      <ods-button>left-start</ods-button>
    </ods-tooltip>
    <ods-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">
      <ods-button>left</ods-button>
    </ods-tooltip>
    <ods-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">
      <ods-button>left-end</ods-button>
    </ods-tooltip>
  </div>

  <div class="right">
    <ods-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">
      <ods-button>right-start</ods-button>
    </ods-tooltip>
    <ods-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">
      <ods-button>right</ods-button>
    </ods-tooltip>
    <ods-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">
      <ods-button>right-end</ods-button>
    </ods-tooltip>
  </div>
  <div class="bottom">
    <ods-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
      <ods-button>bottom-start</ods-button>
    </ods-tooltip>
    <ods-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
      <ods-button>bottom</ods-button>
    </ods-tooltip>
    <ods-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
      <ods-button>bottom-end</ods-button>
    </ods-tooltip>
  </div>
</div>
```
 
##  Más Contenido

Despliegue múltiples líneas de texto y establezca su formato.

Sobre-escribiba el atributo `content` del `ods-tooltip` añadiendo un slot llamado `content`.
```
<ods-tooltip placement="top">
  <div slot="content">multiple lines<br/>second line</div>
  <ods-button>Top center</ods-button>
</ods-tooltip>
```

##  Atributos
| Atributo       | Descripción                              | Tipo    | Valores aceptados                        | Por defecto                              |
| -------------- | ---------------------------------------- | ------- | ---------------------------------------- | ---------------------------------------- |
| effect         | tema del Tooltip                         | string  | dark/light                               | dark                                     |
| content        | contenido a mostrar, puede ser sobre-escrito por `slot#content` | string  | —                                        | —                                        |
| placement      | posición del Tooltip                     | string  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                                   |
| value(v-model) | visibilidad del Tooltip                  | boolean | —                                        | false                                    |
| disabled       | saber si el Tooltip se encuentra deshabilitado | boolean | —                                        | false                                    |
| offset         | offset del Tooltip                       | number  | —                                        | 0                                        |
| transition     | nombre de animación                      | string  | —                                        | ods-fade-in-linear                        |
| visible-arrow  | si una flecha es mostrada. Para mayor información, revisar la página de [Vue-popper](https://github.com/element-component/vue-popper) | boolean | —                                        | true                                     |
| popper-options | parámetros de [popper.js](https://popper.js.org/documentation.html) | Object  | referirse a la documentación de [popper.js](https://popper.js.org/documentation.html) | `{ boundariesElement: "body", gpuAcceleration: false }` |
| open-delay     | retraso de la apariencia, en milisegundos | number  | —                                        | 0                                        |
| manual         | si el Tooltipo será controlado de forma manual. `mouseenter` y `mouseleave` no tendrán efecto si fue establecido como `true` | boolean | —                                        | false                                    |
| popper-class   | nombre de clase personalizada para el popper del Tooltip | string  | —                                        | —                                        |
| enterable      | si el mouse puede entrar al Tooltip      | Boolean | —                                        | true                                     |
| hide-after     | tiempo a esperar en milisegundos para esconder el Tooltip | number  | —                                        | 0                                        |
