const defaultConfig = {
  focus: 0.9,
  blur: 0.9
}

let opacityConfig = null
const browserWindowQueue = []
const browserWindows = []

const setOpacity = win => {
  if (!win.isDestroyed()) {
    if (win.isFocused()) {
      win.setOpacity(opacityConfig.focus)
    } else {
      win.setOpacity(opacityConfig.blur)
    }
    win.on('blur', () => {
      win.setOpacity(opacityConfig.blur)
    })
    win.on('focus', () => {
      win.setOpacity(opacityConfig.focus)
    })
  }
}

const trySetOpacity = () => {
  if (opacityConfig) {
    let _win
    while ((_win = browserWindowQueue.shift())) {
      setOpacity(_win)
    }
  }
}

module.exports.decorateConfig = config => {
  let _opacityConfig = config.opacity

  if (typeof _opacityConfig === 'number') {
    _opacityConfig = { focus: _opacityConfig, blur: _opacityConfig }
  } else if (typeof _opacityConfig !== 'object') {
    _opacityConfig = {}
  }

  opacityConfig = Object.assign({}, defaultConfig, _opacityConfig)

  browserWindowQueue.push(...browserWindows)
  trySetOpacity()

  return config
}

module.exports.onWindow = win => {
  browserWindowQueue.push(win)
  browserWindows.push(win)
  trySetOpacity()
}
