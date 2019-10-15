# Scrollbar
Permite usar una barra de scroll personalizada.

##  Uso Básico

Usa el componente `<ods-scrollbar>` para englobar contenidos _scrollables_.

Este componente permite unificar la apariencia de la barra de scroll entre los distintos navegadores y puede ser customizada de manera más rápida que la barra de scroll nativa.

Es necesario **declarar una altura** en el componente, ya sea en píxeles o en unidades adaptables (vh). Es posible personalizar los estilos del componente usando el atributo **`wrapCss`** para añadir una clase personalizada.


```
<ods-row :gutter="20">
  <ods-col :span="12">
    <ods-scrollbar wrapClass="wrap-styles">
      <p>
        <strong> - ODS Scrollbar</strong>
        <small>
        XHR is a JavaScript. Object Model DOM is a powerful, easy-to-use JavaScript language used in a JavaScript. JSPM is an optimization used in game development, the script accordingly. MVC Framework for Linked Data. Development. Newer and manipulate to ease React Native development framework for a static site generator builder to user interfaces based on other domains. Ionic is a pure JavaScript engines has since been standardized in JavaScript plugins; plugins include autoprefixer, future CSS styles when its Edge browser without plug-ins. Native development of websites employ it is a powerful, easy-to-use JavaScript engine developed and respective standard libraries, the three core technologies of universal isomorphic when its code and Cordova. Universal is a class of any compatible web framework for the top of glossary that will eventually be resolved. Universal is an application more responsive. NoSQL database. A JavaScript code and used to make things accessible to be isomorphic universal module definition for example, on the content production; the type checker, designed for library/framework free JavaScript framework originally created Node. TypeScript is an HTML pages frequently do this strength. Knockout is a high-level, dynamic, untyped, and used with identical input. XHR is a JavaScript. Object Model DOM is a powerful, easy-to-use JavaScript language used in a JavaScript. JSPM is an optimization used in game development, the script accordingly. MVC Framework for Linked Data. Development. Newer and manipulate to ease React Native development framework for a static site generator builder to user interfaces based on other domains. Ionic is a pure JavaScript engines has since been standardized in JavaScript plugins; plugins include autoprefixer, future CSS styles when its Edge browser without plug-ins. Native development of websites employ it is a powerful, easy-to-use JavaScript engine developed and respective standard libraries, the three core technologies of universal isomorphic when its code and Cordova. Universal is a class of any compatible web framework for the top of glossary that will eventually be resolved. Universal is an application more responsive. NoSQL database. A JavaScript code and used to make things accessible to be isomorphic universal module definition for example, on the content production; the type checker, designed for library/framework free JavaScript framework originally created Node. TypeScript is an HTML pages frequently do this strength. Knockout is a high-level, dynamic, untyped, and used with identical input.
        </small>
      </p>
    </ods-scrollbar>
  </ods-col>
</ods-row>


<style>
  .wrap-styles {
    height: 195px;
    background: #e4ecf2;
    border-radius: 8px;
    padding: 10px;
  }
  .wrap-styles strong {
    display: block;
    border-bottom: 1px dotted;
    padding-bottom: 8px;
    margin-bottom: 12px;
  }
</style>
``` 


## Modificar la etiqueta HTML

Es posible modificar la etiqueta por defecto (`div`) por otra que convenga más usando la prop **`tag`**


```
<ods-row :gutter="20">
  <ods-col :span="12">
    <ods-scrollbar 
      :wrapClass="{'wrap-styles': isTrue}"
      tag="section">
      <p>
        <strong> - ODS Scrollbar</strong>
        <small>
        XHR is a JavaScript. Object Model DOM is a powerful, easy-to-use JavaScript language used in a JavaScript. JSPM is an optimization used in game development, the script accordingly. MVC Framework for Linked Data. Development. Newer and manipulate to ease React Native development framework for a static site generator builder to user interfaces based on other domains. Ionic is a pure JavaScript engines has since been standardized in JavaScript plugins; plugins include autoprefixer, future CSS styles when its Edge browser without plug-ins. Native development of websites employ it is a powerful, easy-to-use JavaScript engine developed and respective standard libraries, the three core technologies of universal isomorphic when its code and Cordova. Universal is a class of any compatible web framework for the top of glossary that will eventually be resolved. Universal is an application more responsive. NoSQL database. A JavaScript code and used to make things accessible to be isomorphic universal module definition for example, on the content production; the type checker, designed for library/framework free JavaScript framework originally created Node. TypeScript is an HTML pages frequently do this strength. Knockout is a high-level, dynamic, untyped, and used with identical input. XHR is a JavaScript. Object Model DOM is a powerful, easy-to-use JavaScript language used in a JavaScript. JSPM is an optimization used in game development, the script accordingly. MVC Framework for Linked Data. Development. Newer and manipulate to ease React Native development framework for a static site generator builder to user interfaces based on other domains. Ionic is a pure JavaScript engines has since been standardized in JavaScript plugins; plugins include autoprefixer, future CSS styles when its Edge browser without plug-ins. Native development of websites employ it is a powerful, easy-to-use JavaScript engine developed and respective standard libraries, the three core technologies of universal isomorphic when its code and Cordova. Universal is a class of any compatible web framework for the top of glossary that will eventually be resolved. Universal is an application more responsive. NoSQL database. A JavaScript code and used to make things accessible to be isomorphic universal module definition for example, on the content production; the type checker, designed for library/framework free JavaScript framework originally created Node. TypeScript is an HTML pages frequently do this strength. Knockout is a high-level, dynamic, untyped, and used with identical input.
        </small>
      </p>
    </ods-scrollbar>
  </ods-col>
</ods-row>

<script>
  {
    data () {
      return {
        isTrue: true
      }
    }
  }
</script>

<style>
  .wrap-styles {
    height: 195px;
    background: #e4ecf2;
    border-radius: 8px;
    padding: 10px;
  }
</style>
``` 
 

## Clases CSS

Es posible añadir clases CSS tanto al elemento _wrap_ (contenedor principal de altura fija) como al elemento _view_ (contenedor interno que se desplaza) usando las props **`wrapClass`** y **`viewClass`**. Deben ser objetos.


```
<ods-row :gutter="20">
  <ods-col :span="12">
    <ods-scrollbar 
      wrapClass="ods-scrollbar__wrap--custom"
      viewClass="ods-scrollbar__view--custom">
      <p>
        <strong> - ODS Scrollbar</strong>
        <small>
        XHR is a JavaScript. Object Model DOM is a powerful, easy-to-use JavaScript language used in a JavaScript. JSPM is an optimization used in game development, the script accordingly. MVC Framework for Linked Data. Development. Newer and manipulate to ease React Native development framework for a static site generator builder to user interfaces based on other domains. Ionic is a pure JavaScript engines has since been standardized in JavaScript plugins; plugins include autoprefixer, future CSS styles when its Edge browser without plug-ins. Native development of websites employ it is a powerful, easy-to-use JavaScript engine developed and respective standard libraries, the three core technologies of universal isomorphic when its code and Cordova. Universal is a class of any compatible web framework for the top of glossary that will eventually be resolved. Universal is an application more responsive. NoSQL database. A JavaScript code and used to make things accessible to be isomorphic universal module definition for example, on the content production; the type checker, designed for library/framework free JavaScript framework originally created Node. TypeScript is an HTML pages frequently do this strength. Knockout is a high-level, dynamic, untyped, and used with identical input. XHR is a JavaScript. Object Model DOM is a powerful, easy-to-use JavaScript language used in a JavaScript. JSPM is an optimization used in game development, the script accordingly. MVC Framework for Linked Data. Development. Newer and manipulate to ease React Native development framework for a static site generator builder to user interfaces based on other domains. Ionic is a pure JavaScript engines has since been standardized in JavaScript plugins; plugins include autoprefixer, future CSS styles when its Edge browser without plug-ins. Native development of websites employ it is a powerful, easy-to-use JavaScript engine developed and respective standard libraries, the three core technologies of universal isomorphic when its code and Cordova. Universal is a class of any compatible web framework for the top of glossary that will eventually be resolved. Universal is an application more responsive. NoSQL database. A JavaScript code and used to make things accessible to be isomorphic universal module definition for example, on the content production; the type checker, designed for library/framework free JavaScript framework originally created Node. TypeScript is an HTML pages frequently do this strength. Knockout is a high-level, dynamic, untyped, and used with identical input.
        </small>
      </p>
    </ods-scrollbar>
  </ods-col>
</ods-row>

<style>
  .ods-scrollbar__wrap--custom {
    height: 195px;
    background: #e4ecf2;
    border-radius: 8px;
    padding: 10px;
  }
  .ods-scrollbar__view--custom {
    border: 1px solid grey;
    border-radius: 8px;
    padding: 12px;
  }
</style>
``` 

 

## Scroll horizontal

El componente actúa automáticamente sobre el scroll vertical y horizontal, reemplazando en ambos casos la barra nativa.


```
<ods-row :gutter="20">
  <ods-col :span="12">
    <ods-scrollbar 
      wrapClass="ods-scrollbar__wrap--custom"
      viewClass="ods-scrollbar__view--custom ods-scrollbar__view--force-horizontal">
      <p>
        <strong> - ODS Scrollbar</strong>
        <small>
        XHR is a JavaScript. Object Model DOM is a powerful, easy-to-use JavaScript language used in a JavaScript. JSPM is an optimization used in game development, the script accordingly. MVC Framework for Linked Data. Development. Newer and manipulate to ease React Native development framework for a static site generator builder to user interfaces based on other domains. Ionic is a pure JavaScript engines has since been standardized in JavaScript plugins; plugins include autoprefixer, future CSS styles when its Edge browser without plug-ins. Native development of websites employ it is a powerful, easy-to-use JavaScript engine developed and respective standard libraries, the three core technologies of universal isomorphic when its code and Cordova. Universal is a class of any compatible web framework for the top of glossary that will eventually be resolved. Universal is an application more responsive. NoSQL database. A JavaScript code and used to make things accessible to be isomorphic universal module definition for example, on the content production; the type checker, designed for library/framework free JavaScript framework originally created Node. TypeScript is an HTML pages frequently do this strength. Knockout is a high-level, dynamic, untyped, and used with identical input. XHR is a JavaScript. Object Model DOM is a powerful, easy-to-use JavaScript language used in a JavaScript. JSPM is an optimization used in game development, the script accordingly. MVC Framework for Linked Data. Development. Newer and manipulate to ease React Native development framework for a static site generator builder to user interfaces based on other domains. Ionic is a pure JavaScript engines has since been standardized in JavaScript plugins; plugins include autoprefixer, future CSS styles when its Edge browser without plug-ins. Native development of websites employ it is a powerful, easy-to-use JavaScript engine developed and respective standard libraries, the three core technologies of universal isomorphic when its code and Cordova. Universal is a class of any compatible web framework for the top of glossary that will eventually be resolved. Universal is an application more responsive. NoSQL database. A JavaScript code and used to make things accessible to be isomorphic universal module definition for example, on the content production; the type checker, designed for library/framework free JavaScript framework originally created Node. TypeScript is an HTML pages frequently do this strength. Knockout is a high-level, dynamic, untyped, and used with identical input.
        </small>
      </p>
    </ods-scrollbar>
  </ods-col>
</ods-row>

<style>
  .ods-scrollbar__wrap--custom {
    height: 195px;
    background: #e4ecf2;
    border-radius: 8px;
    padding: 10px;
  }
  .ods-scrollbar__view--custom {
    border: 1px solid grey;
    border-radius: 8px;
    padding: 12px;
  }
  .ods-scrollbar__view--force-horizontal {
    width: 600px
  }
</style>
``` 

 
## Modo nativo

En algún caso, puede ser conveniente forzar el uso de la scrollbar nativa del navegador. Es posible mediante el atributo **`native`**


```
<ods-row :gutter="20">
  <ods-col :span="12">
    <ods-scrollbar 
      wrapClass="ods-scrollbar__wrap--custom"
      viewClass="ods-scrollbar__view--custom ods-scrollbar__view--force-horizontal"
      :native="useNative">
      <p>
        <strong> - ODS Scrollbar</strong>
        <small>
        XHR is a JavaScript. Object Model DOM is a powerful, easy-to-use JavaScript language used in a JavaScript. JSPM is an optimization used in game development, the script accordingly. MVC Framework for Linked Data. Development. Newer and manipulate to ease React Native development framework for a static site generator builder to user interfaces based on other domains. Ionic is a pure JavaScript engines has since been standardized in JavaScript plugins; plugins include autoprefixer, future CSS styles when its Edge browser without plug-ins. Native development of websites employ it is a powerful, easy-to-use JavaScript engine developed and respective standard libraries, the three core technologies of universal isomorphic when its code and Cordova. Universal is a class of any compatible web framework for the top of glossary that will eventually be resolved. Universal is an application more responsive. NoSQL database. A JavaScript code and used to make things accessible to be isomorphic universal module definition for example, on the content production; the type checker, designed for library/framework free JavaScript framework originally created Node. TypeScript is an HTML pages frequently do this strength. Knockout is a high-level, dynamic, untyped, and used with identical input. XHR is a JavaScript. Object Model DOM is a powerful, easy-to-use JavaScript language used in a JavaScript. JSPM is an optimization used in game development, the script accordingly. MVC Framework for Linked Data. Development. Newer and manipulate to ease React Native development framework for a static site generator builder to user interfaces based on other domains. Ionic is a pure JavaScript engines has since been standardized in JavaScript plugins; plugins include autoprefixer, future CSS styles when its Edge browser without plug-ins. Native development of websites employ it is a powerful, easy-to-use JavaScript engine developed and respective standard libraries, the three core technologies of universal isomorphic when its code and Cordova. Universal is a class of any compatible web framework for the top of glossary that will eventually be resolved. Universal is an application more responsive. NoSQL database. A JavaScript code and used to make things accessible to be isomorphic universal module definition for example, on the content production; the type checker, designed for library/framework free JavaScript framework originally created Node. TypeScript is an HTML pages frequently do this strength. Knockout is a high-level, dynamic, untyped, and used with identical input.
        </small>
      </p>
    </ods-scrollbar>
  </ods-col>
</ods-row>

<script>
  {
    data () {
      return {
        useNative: true
      }
    }
  }
</script>

<style>
  .ods-scrollbar__wrap--custom {
    height: 195px;
    background: #e4ecf2;
    border-radius: 8px;
    padding: 10px;
  }
  .ods-scrollbar__view--custom {
    border: 1px solid grey;
    border-radius: 8px;
    padding: 12px;
  }
  .ods-scrollbar__view--force-horizontal {
    width: 600px
  }
  .ods-scrollbar__wrap--custom strong {
    display: block;
    border-bottom: 1px dotted;
    padding-bottom: 8px;
    margin-bottom: 12px;
  }
</style>
``` 

## Atributos
| Atributo   | Descripción                                                 | Tipo    | Valores aceptados  | Por defecto         |
| ---------- | ----------------------------------------------------------- | ------  | -----------------  | ------------------- |
| tag        | Modifica la etiqueta HTML por defecto                       | string  | -                  | div                 |
| native     | Permite renderizar la barra de scroll nativa                | boolean | -                  | false               |
| wrapStyle  | Define un objeto con los estilos que se aplican en el wrap  | object  | -                  | -                   |
| wrapClass  | Define un objeto con clases CSS que se aplican en el wrap   | object  | -                  | -                   |
| viewStyle  | Define un objeto con los estilos que se aplican en el view  | object  | -                  | -                   |
| viewClass  | Define un objeto con clases CSS que se aplican en el view   | object  | -                  | -                   |

