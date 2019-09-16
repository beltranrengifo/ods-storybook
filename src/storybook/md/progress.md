# Progreso
Progreso es usado para mostrar el estado de la operación actual e informar al usuario acerca de ésta.

##  Barra de progreso lineal (porcentage externo)

Usa el atributo `percentage` para asignar el porcentage. Este es **requerido** y tiene que ser un valor entre `0-100`.
```
<ods-progress :percentage="0"></ods-progress>
<ods-progress :percentage="70"></ods-progress>
<ods-progress :percentage="80" color="#8e71c7"></ods-progress>
<ods-progress :percentage="100" status="success"></ods-progress>
<ods-progress :percentage="50" status="exception"></ods-progress>
```

##  Barra de progreso lineal (porcentage interno)
En este caso el porcentage no toma espacio adicional.

El atributo `stroke-width` decide el ancho de la barra de progreso, y usa el atributo `text-inside` para poner la descripción dentro de la misma.
```
<ods-progress :text-inside="true" :stroke-width="18" :percentage="0"></ods-progress>
<ods-progress :text-inside="true" :stroke-width="18" :percentage="70"></ods-progress>
<ods-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></ods-progress>
<ods-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></ods-progress>
<ods-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></ods-progress>
``` 

##  Barra de progreso circular

Puede asignar el atributo `type` como `circle` para usar la barra circular de progreso, y usar el atributo `width` para cambiar el tamaño del círculo.
```
<ods-progress type="circle" :percentage="0"></ods-progress>
<ods-progress type="circle" :percentage="25"></ods-progress>
<ods-progress type="circle" :percentage="80" color="#8e71c7"></ods-progress>
<ods-progress type="circle" :percentage="100" status="success"></ods-progress>
<ods-progress type="circle" :percentage="50" status="exception"></ods-progress>
```
 
##  Atributos
| Atributo     | Descripción                              | Tipo    | Valores aceptado  | Por defecto |
| ------------ | ---------------------------------------- | ------- | ----------------- | ----------- |
| percentage   | porcentaje, requerido                    | number  | 0-100             | 0           |
| type         | tipo de barra de progreso                | string  | line/circle       | line        |
| stroke-width | ancho de la barra de progreso            | number  | —                 | 6           |
| text-inside  | mostrar el porcentaje dentro de la barra de progreso, solo funciona cuando `type` es 'line' | boolean | —                 | false       |
| status       | estado actual de la barra de progreso    | string  | success/exception | —           |
| color        | color de fondo de la barra de progreso. Sobreescribe la propiedad `status` | string     | — |       — |
| width        | ancho del canvas que contiene la barra de progreso circula | number  | —                 | 126         |
| show-text    | mostrar porcentaje                       | boolean | —                 | true        |
