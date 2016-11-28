export default Wx = {
    doAuthReady: function (vm, cb) {
        var code = Utils.getQueryString('code')
        var user = Utils.STORE.getStore(Utils.STORE.user)
        console.log('openid: ' + user.openid)
        // 如果本地存在 openid
        if (user.openid) {
            // 检查服务器有无更新
            this.checkService(user.openid, function (isExist) {
                if (isExist) {
                    this.copyUser(vm, user, cb)
                } else {
                    Utils.STORE.setStore(Utils.STORE.user, {})
                    this.checkAuth()
                }
            }.bind(this))
        } else if (code) {
            // 授权回来拿到 code 去后台获取用户信息
            this.getUserInfo(code).then(function (res) {
                var resUser = res.data.extraInfo
                this.copyUser(vm, resUser, cb)
                Utils.STORE.setStore(Utils.STORE.user, resUser)
            }.bind(this))
        } else {
            // 去授权
            this.checkAuth()
        }
    },
    checkAuth: function (vm, cb) {

    }
}