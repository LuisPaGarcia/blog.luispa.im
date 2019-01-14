---
templateKey: blog-post
title: 'Damn Academy 2: React useEffect()'
date: 2019-01-14T15:07:20.831Z
description: '  '
tags:
  - react hooks
  - react effect
  - hooks
  - effect
  - useEffect
---
En este post vamos a explicar como utilizar useEffect() en `react v16.8.0-alpha.0.`

Puedes probar todo el código en este sandbox:

`<iframe src="https://codesandbox.io/s/github/LuisPaGarcia/damn-hooks?codemirror=1&highlights=11,12,13,14&hidenavigation=1&view=split" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`

Contenido:

1. Que diferencias de sintaxis hay entre los componentes de clases y los componentes funcionales.
2. Como utilizar useEffect() en lugar de `componentDidMount()` o `componentDidUpdate()`.
3. Mejorar el rendimiento de nuestra aplicación utilizando `hooks` y `effects`.

## 1. Diferencias entre un componente de clase y componente funcional.

El equipo de React busca principalmente simplificar la utilización de la API de React. Previo a la introducción de `react hooks` la única forma de utilizar `states` dentro de un componente era utilizar componentes de clases. 

### Componente de clase utilizando `state`

```javascript
import React, { Component } from "react"
```


