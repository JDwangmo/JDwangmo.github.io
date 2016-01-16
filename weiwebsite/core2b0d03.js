define("core-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/jsapi/biz_wap/jsapi/core.js*/,[],function(){
"use strict";
document.domain="http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/jsapi/qq.com";
var n=window.__moon_report||function(){},o=8,i={
ready:function(i){
var t=function(){
try{
i&&i();
}catch(t){
throw n([{
offset:o,
log:"ready",
e:t
}]),t;
}
};
"undefined"!=typeof top.window.WeixinJSBridge&&top.window.WeixinJSBridge.invoke?t():top.window.document.addEventListener?top.window.document.addEventListener("WeixinJSBridgeReady",t,!1):top.window.document.attachEvent&&(top.window.document.attachEvent("WeixinJSBridgeReady",t),
top.window.document.attachEvent("onWeixinJSBridgeReady",t));
},
invoke:function(i,t,e){
this.ready(function(){
return"object"!=typeof top.window.WeixinJSBridge?(alert("请在微信中打开此链接！"),!1):void top.window.WeixinJSBridge.invoke(i,t,function(){
try{
e&&e.apply(window,arguments);
}catch(i){
throw n([{
offset:o,
log:"invoke",
e:i
}]),i;
}
});
});
},
call:function(i){
this.ready(function(){
if("object"!=typeof top.window.WeixinJSBridge)return!1;
try{
top.window.WeixinJSBridge.call(i);
}catch(t){
throw n([{
offset:o,
log:"call",
e:t
}]),t;
}
});
},
on:function(i,t){
this.ready(function(){
return"object"==typeof top.window.WeixinJSBridge&&top.window.WeixinJSBridge.on?void top.window.WeixinJSBridge.on(i,function(){
try{
t&&t.apply(window,arguments);
}catch(i){
throw n([{
offset:o,
log:"on",
e:i
}]),i;
}
}):!1;
});
}
};
return i;
});