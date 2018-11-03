## Introduction
[Online demo](https://zhuobinggang.github.io/tileset.js/fuck.html)

A simple tool which can help you crop tileset and show a part of it on your page like doing it with your game engine.

## Online Demo
[Clike me!](https://zhuobinggang.github.io/tileset.js/fuck.html)

## How to use
```js
// First, new a TileSet instance with properties of 'src', 'width' ,'height' of a tile
const ts = new TileSet('./assets/img/map.png', 32, 32)

// Then, using the method below to append it to an exist tag, the properties mean the 'id', 'x', 'y', the tile position on the tileset
ts.appendTo('one',5,5)
ts.appendTo('two',4,5)
ts.appendTo('three',8,14)
```

For detail please check the demo or source code