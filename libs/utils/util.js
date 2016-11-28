const util = {
    //获取QueryString的数组
    getQueryString: function () {
        var result = location.search.match(new RegExp("[\?\&][^\?\&]+=[^\?\&]+", "g"));
        if (result == null) {
            return "";
        }

        for (var i = 0; i < result.length; i++) {
            result[i] = result[i].substring(1);
        }

        return result;
    },
    //根据QueryString参数名称获取值
    getQueryStringByName: function (name) {
        var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
        if (result == null || result.length < 1) {
            return "";
        }

        return result[1];

    },
    //根据QueryString参数索引获取值 
    getQueryStringByIndex: function (index) {
        if (index == null) {
            return "";
        }

        var queryStringList = getQueryString();
        if (index >= queryStringList.length) {
            return "";
        }

        var result = queryStringList[index];
        var startIndex = result.indexOf("=") + 1;
        result = result.substring(startIndex);
        return result;
    },
    //store对象操作
    STORE: {
        getStore: function (name) { return window.localStorage.getItem(name) },
        setStore: function (name, value) { window.localStorage.setItem(name, value) }
    }
}

//js生成guid
util.getGuid = function () {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
            guid += "-";
    }
    return guid;
}
///去除html标记
util.GetTextOnly = function (s) {
    var r = /<[^>]*>/ig;
    var s = arguments[0];
    return s.replace(r, "").replace(/[\t]/ig, "").replace(/[\n]/ig, "");
}

util.FormatDate = function (_d, format) {
    var d = new Date(_d);
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    var formated = curr_year + "-" + ("0" + curr_month).substr(0, 2) + "-" + ("0" + curr_date).substr(0, 2);
    // alert(formated);
    return formated;
}


util.checkLogin = function () {
    if (!page.user.isLogined) {
        var url = "/wx/home/login?returnurl=" + location.href;
        location.href = url;
        return false;
    }
    else
        return true;
}

util.showLogin = function () {
    $("#login_mdl").modal("show");
}

util.AddAntiForgeryToken = function (data, form) {
    data.__RequestVerificationToken = document.getElementsByName('__RequestVerificationToken', form).val();
    return data;
};

/*===================================导出===================================*/
export default util;

String.format = function () {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
};

/* 
*  方法:Array.remove(dx) 通过遍历,重构数组 
*  功能:删除数组元素. 
*  参数:dx删除元素 . 
*/
Array.prototype.remove = function (item) {
    for (var i = 0, n = 0; i < this.length; i++) {
        if (this[i] != item) {
            this[n++] = this[i]
        }
    }
    this.length -= 1;
}
//数组去重复数据
Array.prototype.distinct = function () {
    var a = [], b = [];
    for (var prop in this) {
        var d = this[prop];
        if (d === a[prop]) continue; //防止循环到prototype
        if (b[d] != 1) {
            a.push(d);
            b[d] = 1;
        }
    }
    return a;
}