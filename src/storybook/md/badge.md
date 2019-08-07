# Badge

Marcas en forma de número o estado para botones e iconos.

## Uso básico

Muestra la cantidad de mensajes nuevos.

La cantidad está definida por `value` que acepta `Number` o `String`.

```
<div class="item m-b-50">
  <ods-badge :value="12" class="item">
    <ods-button size="small">comments</ods-button>
  </ods-badge>
  <ods-badge :value="3">
    <ods-button size="small">replies</ods-button>
  </ods-badge>
</div>
<div class="m-b-20">
  <ods-badge value="4" type="primary" class="m-r-15"/>
  <ods-badge value="1320" type="primary" class="m-r-15"/>
  <ods-badge type="primary" class="m-r-15" is-dot/>
  <ods-badge value="4" type="primary" class="m-r-15" is-line/>
  <ods-badge value="1320" type="primary" is-line/>
</div>
<div class="m-b-20">
  <ods-badge value="4" type="secondary" class="m-r-15"/>
  <ods-badge value="1320" type="secondary" class="m-r-15"/>
  <ods-badge type="secondary" is-dot/>
</div>
<div class="m-b-20">
  <ods-badge value="4" type="success" class="m-r-15"/>
  <ods-badge value="1320" type="success" class="m-r-15"/>
  <ods-badge type="success" is-dot/>
</div>
<div class="m-b-20">
  <ods-badge value="4" type="warning" class="m-r-15"/>
  <ods-badge value="1320" type="warning" class="m-r-15"/>
  <ods-badge type="warning" is-dot/>
</div>
<div class="m-b-20">
  <ods-badge value="4" type="danger" class="m-r-15"/>
  <ods-badge value="1320" type="danger" class="m-r-15"/>
  <ods-badge type="danger" is-dot/>
</div>
<div class="m-b-20">
  <ods-badge value="4" type="info" class="m-r-15"/>
  <ods-badge value="1320" type="info" class="m-r-15"/>
  <ods-badge type="info" is-dot/>
</div>
```


## Valor máximo

Se puede personalizar el valor máximo.

El valor máximo se define como `max` el cual es un `Number`. Nota: solo funciona si `value` es también un `Number`.

```
<ods-badge :value="200" :max="99" class="item">
  <ods-button size="small">comments</ods-button>
</ods-badge>
<ods-badge :value="100" :max="10" class="item">
  <ods-button size="small">replies</ods-button>
</ods-badge>
```

## Personalizaciones

Mostrar texto en vez de números.

Cuando `value` es un `String`, puede mostrar texto personalizado.

```
<ods-badge value="new" class="item">
  <ods-button size="small">comments</ods-button>
</ods-badge>
<ods-badge value="hot" class="item">
  <ods-button size="small">replies</ods-button>
</ods-badge>
```


## Pequeño punto

Puede utilizar un punto para marcar contenido que debe ser notado.

Use el atributo `is-dot`. Es un `Boolean`.

```
<ods-badge is-dot class="item">query</ods-badge>
<ods-badge is-dot class="item">
  <ods-button class="share-button" icon="ods-icon-share" type="primary"></ods-button>
</ods-badge>
```

## Atributos

| Atributo | Descripción                              | Tipo           | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------------- | ----------------- | ----------- |
| value    | valor a mostrar                          | string, number | —                 | —           |
| max      | valor máximo, Muestra '{max}+' cuando se excede. Solo funciona si `value` es un `Number` | number         | —                 | —           |
| is-dot   | si se debe mostrar un pequeño punto      | boolean        | —                 | false       |
| hidden   | hidden badge                             | boolean        | —                 | false       |
|  type    | color schema                             | string        | primary, secondary, success, warning, danger, info | secondary       |
| is-line  | line design. sólo funciona con `type="primary"`                             | boolean        | —                 | false       |
