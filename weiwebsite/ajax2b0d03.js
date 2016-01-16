define("ajax-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/utils/biz_wap/utils/ajax.js*/,["parse-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/utils/biz_common/utils/url/parse.js*/],function(e){
"use strict";
function t(e){
var t={};
return"undefined"!=typeof uin&&(t.uin=uin),"undefined"!=typeof key&&(t.key=key),
"undefined"!=typeof pass_ticket&&(t.pass_ticket=pass_ticket),"undefined"!=typeof wxtoken&&(t.wxtoken=wxtoken),
"undefined"!=typeof top.window.devicetype&&(t.devicetype=top.window.devicetype),
"undefined"!=typeof top.window.clientversion&&(t.clientversion=top.window.clientversion),
t.x5=r?"1":"0",n.join(e,t);
}
function o(e){
var o=(e.type||"GET").toUpperCase(),n=t(e.url),r="undefined"==typeof e.async?!0:e.async,f=new XMLHttpRequest,p=null,l=null;
if("object"==typeof e.data){
var y=e.data;
l=[];
for(var w in y)y.hasOwnProperty(w)&&l.push(w+"="+encodeURIComponent(y[w]));
l=l.join("&");
}else l="string"==typeof e.data?e.data:null;
f.open(o,n,r),f.onreadystatechange=function(){
if(3==f.readyState&&e.received&&e.received(f),4==f.readyState){
if(f.onreadystatechange=null,f.status>=200&&f.status<400)try{
e.success&&e.success(f.responseText);
}catch(t){
throw i({
offset:s,
e:t
}),t;
}else{
try{
e.error&&e.error(f);
}catch(t){
throw i({
offset:c,
e:t
}),t;
}
i({
offset:a,
log:"ajax_network_error: "+n,
e:""
});
}
clearTimeout(p);
try{
e.complete&&e.complete();
}catch(t){
throw i({
offset:d,
e:t
}),t;
}
e.complete=null;
}
},"POST"==o&&f.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
f.setRequestHeader("X-Requested-With","XMLHttpRequest"),"undefined"!=typeof e.timeout&&(p=setTimeout(function(){
f.abort("timeout");
try{
e.complete&&e.complete();
}catch(t){
throw i({
offset:d,
e:t
}),t;
}
e.complete=null,i({
offset:u,
log:"ajax_timeout_error: "+n,
e:""
});
},e.timeout));
try{
f.send(l);
}catch(m){
e.error&&e.error();
}
}
var n=e("parse-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/utils/biz_common/utils/url/parse.js*/),r=-1!=navigator.userAgent.indexOf("TBS/"),i=window.__moon_report||function(){},s=3,a=4,c=5,u=6,d=7;
return o;
});