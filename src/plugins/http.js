import axios from 'axios'

const MyHttpServer = {}

MyHttpServer.install = function (Vue) {
  axios.defaults.baseURL='http://127.0.0.1:18080/api'
  Vue.prototype.$http =axios
}

export default MyHttpServer
