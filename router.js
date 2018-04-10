class HashRouter {
  constructor() {
    this.routes = {}
    this.currentRoute = ''
    this.history = []
    this.currentIndex = this.history.length - 1
    this.refresh = this.refresh.bind(this)
    this.back = this.back.bind(this)
    this.isBack = false
    window.addEventListener('load', this.refresh)
    window.addEventListener('hashchange', this.refresh)
  }
  route(path, callback) {
    this.routes[path] = callback || function() {}
  }

  refresh() {
    this.currentRoute = location.hash.slice(1) || '/'

    if (!this.isBack) {
      if (this.currentIndex < this.history.length - 1) {
        this.history = this.history.slice(0, this.currentIndex + 1)
      }
      this.currentIndex++
      this.history.push(this.currentRoute)
    }
    this.routes[this.currentRoute]()
  }
  back() {
    this.isBack = true
    this.currentIndex <= 0
      ? (this.currentIndex = 0)
      : (this.currentIndex = this.currentIndex - 1)
    location.hash = `#${this.history[this.currentIndex]}`
    this.routes[this.history[this.currentIndex]]()
  }
}

window.HashRouter = new HashRouter()

class HistoryRouter {
  constructor() {
    this.routes = {}
    this._bindPopstate()
  }
  init(path) {
    history.replaceState({ path }, null, path)
    this.routes[path] && this.rourtes[path]()
  }
  route(path, callback) {
    this.routes[path] = callback || function() {}
  }
  go(path) {
    history.pushState({ path }, null, path)
    this.routes[path] && this.routes[path]()
  }
  _bindPopstate() {
    window.addEventListener('popstate', e => {
      const path = e.state && e.state.path
      this.routes[path] && this.rourtes[path]()
    })
  }
}

window.HistoryRouter = new HistoryRouter()
