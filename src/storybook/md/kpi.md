# KPIs

Componente para mostrar los indicadores clave.

## Uso básico

 Cree el componente con el valor en la variable `ammount`. El valor positivo o negativo de `percentage` define el color del triángulo.

 Si existe el atributo href, todo el componente funcionará como enlace a esa ruta.

```
<ods-kpi ammount="3.453" unit="%" :percentage="-20" triangle>
  <span slot="title">Título kpi</span>
</ods-kpi>

<ods-kpi ammount="15/28" unit="%" :percentage="20" triangle resume="7/20">
  <span slot="title">Título kpi</span>
</ods-kpi>
```

## Atributos

| Atributo          | Descripción                              | Tipo    | Valores aceptados | Por defecto |
| ----------------- | ---------------------------------------- | ------- | ----------------- | ----------- |
| ammount           | valor del kpi.                           | number/string  | —          | —           |
| unit              | Unidad de medida.                        | string  | —                 | -           |
| percentage        | porcentage de crecimiento o decrecimiento| number  | —                 | -           |
| href              | Enlace                                   | url     | —                 | -           |
| resume            | Contenido adicional.                     | string  | -                 | —           |
| triangle          | Muestra el triángulo de color rojo / verde| boolean | —                 | false       |

## Slots

| Slot              | Descripción                              |
| ----------------- | ---------------------------------------- |
| title             | Título del kpi.                          |
