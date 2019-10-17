# Module
Muestra información dentro de un contenedor `module`

## Uso Basico

Module incluye titulo, contenido y operaciones.

Module se compone de cabecera y cuerpo. La cabecera es opcional y la colocación de su  contenido depende de un slot con nombre.

```
<ods-module>
  <div slot="header" class="clearfix" style="position: relative">
    <span>Module Title</span>
    <ods-button style="position: absolute; right: 32px; padding: 0;" type="text">
      Link Button<ods-icon name="arrow-right" size="16"></ods-icon>
    </ods-button>
  </div>
  <div class="text item">
    Content of module
  </div>
</ods-module>
``` 

## Atributos
| Atributo   | Descripción                              | Tipo   | Valores aceptados  | Por defecto         |
| ---------- | ---------------------------------------- | ------ | -----------------  | ------------------- |
| header     | Titulo del module. También acepta DOM pasado por `slot#header` | string  | —                 | —                   |
| body-style | Estilo CSS del cuerpo                    | object | —                  | { padding: '20px' } |
| shadow     | cuando mostrar la sombra del Module | string | always / hover / never | always          |
