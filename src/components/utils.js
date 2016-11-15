/**
 * Created by fanfan on 2016/11/5.
 */
exports.alert123=function () {
  alert(123);
}
exports.cookieHelper = {
  setCookie (key, obj) {
    document.cookie = key + "=" + JSON.stringify(obj);
  },
  getCookie (key) {
    var name = key + "=";
    var cookiearr = document.cookie.split(';');
    for(var v in cookiearr){
      var item= cookiearr[v].trim();
      if(item.indexOf(name) == 0){
        var res=item.substring(name.length, item.length);
        var data=JSON.parse(res);
        return data;
      }
    }
    return null;
  },
  deleteCookie (key) {
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
exports.lsHelper={
  getLs (key) {
    var res = localStorage.getItem(key);
    return JSON.parse(res);
  },
  setLs (key, val) {
    var jsonstr = JSON.stringify(val);
    localStorage.setItem(key, jsonstr);
  },
  deleteLs (key) {
    localStorage.removeItem(key);
  }
}
