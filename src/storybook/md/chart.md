# Chart

Componente gráfica basado en [vue-chartist](https://github.com/Yopadd/vue-chartist).

## Uso básico

Muestra un gráfico en tipo y valores dependiendo de los parámetros.

El tamaño está definido por `type` que acepta `singleLine`, `singleBar`, `gauge` or `pie` y por `data`.

```
<ods-chart type="gauge" :data="{series: [{meta: 'valor 1', value: 30}]}" :size="90"></ods-chart>

<ods-chart type="gauge" :data="{series: [{meta: 'valor 1', value: 30}]}" :size="180" :text="true" symbol="%"></ods-chart>
```

## Gráfica de línea clásica con valor medio

Muestra un gráfico de tipo lineal.

```
<ods-chart type="singleLine" :data="{labels: ['label', 'label', 'label'], series: [[{meta: 'valor 1', value: 300}, {meta: 'valor 1', value: 200}, {meta: 'valor 1', value: 400}]]}" orientation="horizontal" :average="true" symbol="kg"></ods-chart>
```


## Gráfica de Línea + Barra

Muestra un gráfico conjunto de ambos tipos.

```
<ods-chart type="singleBar" :data="{labels: ['label', 'label', 'label'], series: [[{meta: 'valor 1', value: 30}, {meta: 'valor 1', value: 20}, {meta: 'valor 1', value: 40}]]}" symbol="kg"></ods-chart>
<ods-chart type="singleLine" :data="{labels: ['label', 'label', 'label'], series: [[{meta: 'valor 1', value: 300}, {meta: 'valor 1', value: 200}, {meta: 'valor 1', value: 400}]]}" orientation="horizontal" symbol="kg" :overlap="true"></ods-chart>
```

## Slots

| Slot Name | Functionality |
|-----------|---------------|
| legend | Sets a custom legend |

## Attributes

| Attribute Name | type | Functionality |
|----------------|------|---------------|
| data | object | Object with the data to be displayed in the chart |
| type | string | Applies a type of chart (singleLine, singleBar, gauge or pie) |
| symbol | string | Symbol of the measure to be displayed on tooltip. Ex: kg, %, etc |
| orientation | string | Horizontal or vertical. Only available in singleBar |
| average | boolean | Shows a average line. Only available in singleLine and singleBar |
| legend | boolean | Shows a chart legend |
| overlap | boolean | Overlap multiple charts |
| text | boolean | Shows text inside a gauge. Only available in gauge type |

## Gauge Chart Object Structure

```
{
	series: [
		{
			meta: String,
			value: Number
		}
	]
}
```

## Pie Chart Object Structure

```
{
	labels: [String, String],
	series: [
		{
			meta: String,
			value: Number
		},
		{
			meta: String,
			value: Number
		}
	]
}
```

## Line and Bar Chart Object Structure

```
{
	labels: [String, String],
	series: [[
		{
			meta: String,
			value: Number
		},
		{
			meta: String,
			value: Number
		}
	],
	[
		{
			meta: String,
			value: Number
		},
		{
			meta: String,
			value: Number
		}
	]]
}
```
