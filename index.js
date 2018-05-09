let opacityConfig = null
let browserWindowSingleton = null

const trySetOpacity = () => {
  if (opacityConfig && browserWindowSingleton && !browserWindowSingleton.isDestroyed()) {
    browserWindowSingleton.setOpacity(opacityConfig)
  }
}

module.exports.decorateConfig = config => {
  opacityConfig = config.opacity || 0.9
  trySetOpacity()
  return config
}

module.exports.onWindow = browserWindow => {
  browserWindowSingleton = browserWindow
  trySetOpacity()
}
