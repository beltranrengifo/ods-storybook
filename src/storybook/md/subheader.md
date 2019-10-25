# Subheader

Este componente unifica los contenedores de filtros usados debajo del header. Renderiza un slot con el contenido que se necesite. Puedes ver un [ejemplo real aquí](https://www.onesaitplatform.online/web/demo/index.html#/login/)

## Position absolute

Por defecto, el componente se posiciona de manera **absoluta** y con el mismo z-index que el _main-header_ y el _main-navigation_. Se puede usar la prop `is-absolute` para modificar el posicionamiento a relativo, seteando `false`. No es necesario declararla en caso de que se use como `true`.


```
<ods-row
  class="mb-100">
  <ods-col
    :lg="24">
    <ods-sub-header
      cssClass="my-custom-class"
      :is-absolute="true">
      <h6>Subheader absolute</h6>
    </ods-sub-header>
  </ods-col>
</ods-row>
<style>
.mb-100 {
  margin-bottom: 100px;
}
</style>
```

## Position relative

Si se usa como bloque relativo, se puede añadir la prop `stretch` para ocupar todo el ancho del contenedor principal, que por defecto tiene un padding de 24px declarado en la variable `$--main-content-padding: 24px;`

```
<ods-row>
  <ods-col
    :lg="24">
    <ods-sub-header
      cssClass="my-custom-class"
      :is-absolute="false"
      :stretch="true">
      <h6>Subheader relative stretch</h6>
    </ods-sub-header>
  </ods-col>
</ods-row>
<ods-row>
  <ods-col
    :lg="24">
    <ods-sub-header
      cssClass="my-custom-class"
      :is-absolute="false">
      <h6>Subheader relative no stretch</h6>
    </ods-sub-header>
  </ods-col>
</ods-row>
```

## Tamaños

La **altura mínima** por defecto son 60px. Mediante las props **`medium`** y **`large`** se puede configurar el subheader a **116px** y **172px** respectivamente.

```
<ods-row
  class="mb-20">
  <ods-col
    :lg="24">
    <ods-sub-header
      cssClass="my-custom-class"
      :is-absolute="false"
      :stretch="true">
      <h6>Subheader default</h6>
    </ods-sub-header>
  </ods-col>
</ods-row>
<ods-row
  class="mb-20">
  <ods-col
    :lg="24">
    <ods-sub-header
      cssClass="my-custom-class"
      :is-absolute="false"
      :stretch="true"
      medium>
      <h6>Subheader medium</h6>
    </ods-sub-header>
  </ods-col>
</ods-row>
<ods-row>
  <ods-col
    :lg="24">
    <ods-sub-header
      cssClass="my-custom-class"
      :is-absolute="false"
      :stretch="true"
      large>
      <h6>Subheader large</h6>
    </ods-sub-header>
  </ods-col>
</ods-row>

<style>
.mb-20 {
  margin-bottom: 20px;
}
</style>
```