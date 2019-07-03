## Avatar

Indicativo de indentidad mediante imagen.

### Uso básico

Muestra una imagen enmarcada en un círculo.

El tamaño está definido por `size` que acepta `small`, `medium`, `large` o `xlarge`. La imagen se inyecta mediante _named slot_.

```
<ods-avatar size="small">
    <img src="static/avatar.svg">
</ods-avatar>

<ods-avatar size="medium">
    <img src="static/avatar.svg">
</ods-avatar>

<ods-avatar size="large">
    <img src="static/avatar.svg">
</ods-avatar>

<ods-avatar size="xlarge">
    <img src="static/avatar.svg">
</ods-avatar>
```


### Atributos
| Atributo | Descripción                              | Tipo           | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------------- | ----------------- | ----------- |
| size     | tamaño del avatar                        | string         | small / medium / large / xlarge | small           |
