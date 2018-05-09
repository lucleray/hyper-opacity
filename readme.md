## hyper-opacity

* Simple configuration in `.hyper.js`
* Compatible with any theme
* Works on MacOS and Windows

<div align="center">
<p>
<img src="demo.gif" width="500px" style="border-radius:5px" />
</p>
</div>

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
