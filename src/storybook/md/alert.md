# Alert

Mostrar mensajes de alertas importantes.

## Uso básico

Los componentes de alertas no son elementos overlay de la página y no desaparecen automáticamente.

Alert provee 4 tipos de temas definidos por `type`, el valor por defecto es `info`. Su tamaño es de 100% excepto si se define con el atributo `width`.


```
<ods-alert
  title="Success alert"
  type="success"
  width="400">
</ods-alert>
<ods-alert
  title="Info alert"
  type="info"
   width="400">
</ods-alert>
<ods-alert
  title="Warning alert"
  type="warning"
   width="400">
</ods-alert>
<ods-alert
  title="Error alert"
  type="error"
   width="400">
</ods-alert>
```


## Personalización del botón de cerrar

Personalizar el botón de cerrar como texto u otros símbolos.

Alert permite configurar si es posible cerrarlo. El texto del botón de cerrado, así como los callbacks de cerrado son personalizables. El atributo `closable` define si el componente puede cerrarse o no. Acepta un `boolean`, que por defecto es `true`. También puede configurar el atributo `close-text` para reemplazar el símbolo de cerrado que se muestra por defecto. El atributo `close-text` debe ser un string. El evento `close` se dispara cuando el componente se cierra.


```
  <ods-alert
    title="unclosable alert"
    type="success"
    :closable="false">
  </ods-alert>
  <ods-alert
    title="Customized close-text"
    type="info"
    close-text="Cerrar">
  </ods-alert>
  <ods-alert
    title="Alert with callback"
    type="warning"
    @close="hello">
  </ods-alert>

<script>
  { methods: {
    hello() {
      alert('Hello World!')
    }
  }}
</script>
```


##  Usar iconos

Mostrar un icono mejora la legibilidad.

Setear el atributo `show-icon` muestra un icono que corresponde al tipo de Alert que se está mostrando.


```
  <ods-alert
    title="Success alert"
    type="success"
    show-icon>
  </ods-alert>
  <ods-alert
    title="Info alert"
    type="info"
    show-icon>
  </ods-alert>
  <ods-alert
    title="Warning alert"
    type="warning"
    show-icon>
  </ods-alert>
  <ods-alert
    title="Error alert"
    type="error"
    show-icon>
  </ods-alert>
```

##  Con descripción

Descripción incluye un mensaje con información más detallada.

Además del atributo requerido `title`, se puede agregar el atributo `description` para ayudar a describir la alerta con mas detalles. La descripción puede contener solamente un string y va a usar word wrap automáticamente.

```
  <ods-alert
    title="with description"
    type="success"
    description="Además del atributo requerido title, se puede agregar el atributo description para ayudar a describir la alerta con mas detalles. La descripción puede contener solamente un string y va a usar word wrap automáticamente.">
  </ods-alert>
```
## Atributos
| Atributo    | Descripción                              | Tipo    | Valores aceptados          | Por defecto |
| ----------- | ---------------------------------------- | ------- | -------------------------- | ----------- |
| title       | título. Requerido                        | string  | —                          | —           |
| type        | tipo de componente                       | string  | success/warning/info/error | info        |
| description | texto descriptivo. También puede ser pasado con el slot por defecto | string  | —                          | —           |
| closable    | si se puede cerrar o no                  | boolean | —                          | true        |
| center      | si el texto debe estar centrado          | boolean | —                          | false       |
| close-text  | texto de cerrado personalizado           | string  | —                          | —           |
| show-icon   | si un icono del tipo de alerta se debe mostrar | boolean | —                          | false       |
| width       | ancho del elemento (en píxeles)          | number | -                          | 100%       |


## Eventos
| Nombre del evento | Descripción                           | Parámetros |
| ----------------- | ------------------------------------- | ---------- |
| close             | Se dispara cuando la alerta se cierra | —          |


##Changelog

## Version 0.0.2 (19/06/18)

Añadido parámetro width para elegir ancho del componente
Mejoras CSS: Cambiado padding, sombreado y posicionamiento de los iconos



## Version 0.0.1 (11/06/18)

Primera versión en pruebas