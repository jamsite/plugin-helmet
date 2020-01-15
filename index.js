const helmet = require('micro-helmet')

module.exports = {
  options: {},
  loadMiddleware () {
    return (handler) => helmet(handler, this.options)
  },
  setOptions (options) {
    this.options = options
  }
}
