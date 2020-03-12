import Taro from "@tarojs/taro";

// 获取当前页面url
export const getCurrentPageUrl = () => Taro._$router.path;
export const queryString = url => {
  var reg = /(\w+)=([^&]+)/g,
        params = {},
        result = [],
        url = url || window.location.href;
    if(url.indexOf('groupmessage') > -1 || url.indexOf('singlemessage') > -1 || url.indexOf('timeline') > -1){
        url = url.replace(/\?from=(groupmessage|singlemessage|timeline)(\S*)#/, '#');
    }
    
    url = (url.split('?')[1] || '');

    while (result = reg.exec(url)) {
        params[result[1]] = decodeURI(result[2]);
    }

    return params;
};