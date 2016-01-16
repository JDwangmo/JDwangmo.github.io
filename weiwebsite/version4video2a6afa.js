define("version4video-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/pages/version4video.js*/,["event-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/biz_common/dom/event.js*/,"core-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/biz_wap/jsapi/core.js*/,"device-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/biz_wap/utils/device.js*/,"ctl-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/new_video/ctl.js*/],function(e){
"use strict";
function i(e,i){
i=i||"",i=["uin:"+top.window.user_uin,"resp:"+i].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+i+"&r="+Math.random();
}
function o(){
return document.domain="http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/qq.com",-1!=top.location.href.indexOf("&_newvideoplayer=0")?!1:-1!=top.location.href.indexOf("&_newvideoplayer=1")?!0:a.canSupportVideo&&_.inWechat?_.is_ios||_.is_android&&_.is_x5?!0:!1:(top.window._hasReportCanSupportVideo||a.canSupportVideo||!_.inWechat||(top.window._hasReportCanSupportVideo=!0,
i(44)),!1);
}
function n(){
{
var e=top.location.href;
top.sn||"";
}
return-1==e.indexOf("&_videoad=0")||"5a2492d450d45369cd66e9af8ee97dbd"!=top.sn&&"f62e1cb98630008303667f77c17c43d7"!=top.sn&&"30c609ee11a3a74a056e863f0e20cae2"!=top.sn?-1!=e.indexOf("&_videoad=1")?!0:-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")?!1:"54"==top.window.appmsg_type?!1:top.window.__appmsgCgiData.can_use_page&&(_.is_ios||_.is_android)?!0:r.showAd()?!0:!1:!1;
}
function t(){
var e=top.location.href;
return top.window.user_uin?-1!=e.indexOf("&_proxy=1")?!0:-1!=e.indexOf("&_proxy=0")?!1:-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")?!1:_.inWechat&&_.is_android&&_.is_x5&&_.wechatVer>="6.2.2"?!0:_.inWechat&&_.is_ios&&(-1!=w.indexOf("MicroMessenger/6.2.4")||_.wechatVer>="6.2.4")?!0:!1:!1;
}
function s(){
return c.networkType;
}
var d=e("event-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/biz_common/dom/event.js*/),p=e("core-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/biz_wap/jsapi/core.js*/),a=e("device-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/biz_wap/utils/device.js*/),r=e("ctl-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/new_video/ctl.js*/),w=top.window.navigator.userAgent,c={
networkType:""
},_={};
return function(e){
var i=a.os;
_.is_ios=/(iPhone|iPad|iPod|iOS)/i.test(e),_.is_android=!!i.android,_.is_wp=!!i.phone,
_.is_pc=!(i.phone||!i.Mac&&!i.windows),_.inWechat=/MicroMessenger/.test(e),_.is_android_phone=_.is_android&&/Mobile/i.test(e),
_.is_android_tablet=_.is_android&&!/Mobile/i.test(e),_.ipad=/iPad/i.test(e),_.iphone=!_.ipad&&/(iphone)\sos\s([\d_]+)/i.test(e),
_.is_x5=/TBS\//.test(e)&&/MQQBrowser/i.test(e);
var o=e.match(/MicroMessenger\/((\d+)(\.\d+)*)/);
_.wechatVer=o&&o[1]||0,d.on(window,"load",function(){
if(""==c.networkType&&_.inWechat){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
p.invoke("getNetworkType",{},function(i){
c.networkType=e[i.err_msg]||"fail";
});
}
},!1);
}(top.window.navigator.userAgent),"undefined"==typeof top.window._hasReportCanSupportVideo&&(top.window._hasReportCanSupportVideo=!1),
{
device:_,
isShowMpVideo:o,
isUseProxy:t,
isUseAd:n,
getNetworkType:s
};
});