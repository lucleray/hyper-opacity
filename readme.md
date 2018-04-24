## hyper-opacity

![Demo](demo.gif)

### Install

`hyper i hyper-opacity`

### Configure

Add a line to your hyper configuration (`~/.hyper.js`) :

```js
module.exports = {
  config: {
    // rest of the config
    opacity: 0.85
  }
  // rest of the file
}
```

### More

**hyper-opacity** uses [BrowserWindow.setOpacity()](https://electronjs.org/docs/api/browser-window#winsetopacityopacity-windows-macos).
