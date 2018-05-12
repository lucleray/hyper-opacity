## hyper-opacity

* Simple configuration in `.hyper.js`
* Compatible with any theme
* Works on MacOS and Windows

<div align="center">
<p>
<img alt="demo" src="demo.gif" width="500px" style="border-radius:5px" />
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

### Configure the opacity for focused/unfocused windows

```js
module.exports = {
  config: {
    // rest of the config
    opacity: {
      focus: 0.9,
      blur: 0.5
    }
  }
  // rest of the file
}
```

<div align="center">
<p>
<img alt="demo focused window" src="demo-focus.gif" width="400px" style="border-radius:5px" />
</p>
</div>

### More

**hyper-opacity** uses [BrowserWindow.setOpacity()](https://electronjs.org/docs/api/browser-window#winsetopacityopacity-windows-macos).
