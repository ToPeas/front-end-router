const box = document.querySelector('#box')
const hashback = document.querySelector('#hashback')
const historyback = document.querySelector('#historyback')

HashRouter.route('/', () => {
  box.innerHTML = '当前是首页'
})

HashRouter.route('/cc', () => {
  box.innerHTML = '当前cc'
})

HashRouter.route('/dd', () => {
  box.innerHTML = '当前dd'
})

HashRouter.route('/ee', () => {
  box.innerHTML = '当前ee'
})

hashback.addEventListener('click', () => {
  HashRouter.back()
})

HistoryRouter.route('/', () => {
  box.innerHTML = '当前是history首页'
})

HistoryRouter.route('/cc', () => {
  box.innerHTML = '当前是history的cc'
})

HistoryRouter.route('/dd', () => {
  box.innerHTML = '当前是history的dd'
})

HistoryRouter.route('/ee', () => {
  box.innerHTML = '当前是history的ee'
})

historyback.addEventListener('click', () => {
  history.go(-1)
})

document.querySelectorAll('.history a').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault()
    console.log('点击的a标签的对应的地址=>', e.target.getAttribute('href'))
    HistoryRouter.go(e.target.getAttribute('href'))
  })
})
