'use strict'

const Router = require('toa-router')

const infoAPI = require('./api/info')
const userAPI = require('./api/user')
const indexView = require('./controller/get_index')

// 参考 https://github.com/toajs/toa-router
const router = exports.router = new Router()
const apiRouter = exports.apiRouter = new Router('/api')

// 配置静态资源路由和 views 路由
router
  .get('', indexView.getIndex)
  .otherwise(function () {
    return this.render('404', {
      message: this.path + 'is not found!'
    })
  })

// 配置 API 路由
apiRouter
  .get('/info', infoAPI.getInfo)
  .post('/echo', infoAPI.echo)

apiRouter.define('/auth')
  .post(userAPI.getToken)
  .put(userAPI.refreshToken)
