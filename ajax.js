function ajax(opt) {

    //默认对象, 存储着一些默认参数,不传参数时,就使用默认的参数
    var def = {
        type: "get",
        async: true,
        data: null,
        success: null,
        error: null,
    }

    //把两个对象合并一下

    var setting = extend(def, opt);

    //把对象格式化

    setting.data = typeof setting.data == "string" ? setting.data : format(setting.data);

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    //判断是 get 还是 post
    if (setting.type == "get") {
        xhr.open("get", setting.url + "?" + setting.data, setting.async);
        xhr.send(null);
    }
    if (setting.type == "post") {
        xhr.open("post", setting.url, setting.async);

        //如果想用 post 方式上传数据,添加请求头
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded,charset=utf-8");
        xhr.send(setting.data);
    }

    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                //调用请求成功的方法
                setting.success(eval("("+xhr.responseText+")"));
            } else {
                //调用请求失败的方法
                setting.error("请求错误" + xhr.status);
            }
        }
    }
}

//合并两个对象
function extend(o1, o2) {
    var newObj = {};

    for (var i = 0; i < arguments.length; i++) {
        for (var k in arguments[i]) {
            newObj[k] = arguments[i][k];
        }
    }
    return newObj
}

//格式化对象的
function format(obj) {
    var arr = [];
    //encodeURIComponent 把值 进行转码
    for (var k in obj) {
        arr.push(k + "=" + encodeURIComponent(obj[k]));
    }
    return arr.join("&");
}