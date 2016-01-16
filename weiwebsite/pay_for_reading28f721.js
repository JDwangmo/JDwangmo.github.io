define("pay_for_reading-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/pay_for_reading.js*/,["class-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/class.js*/,"event-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/event.js*/,"ajax-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/ajax.js*/,"pay-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/jsapi/pay.js*/,"spin-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/spin.js*/],function(e){
"use strict";
function t(e){
e&&(e.style.display="block");
}
function a(e){
e&&(e.style.display="none");
}
function s(e){
m=!0,r.addClass(d.pay,"disabled"),t(d.toast),i({
url:"/mp/payforread?action=pay",
type:"POST",
data:{
appmsgid:appmsgid,
__biz:biz,
idx:idx,
fee:e,
timestamp:pay_timestamp
},
success:function(e){
try{
e=JSON.parse(e);
}catch(s){
e={},l.src="/mp/jsreport?key=42&content=type:jsonparseerr&r="+Math.random();
}
if(e&&e.base_resp){
var r=+e.base_resp.ret;
if(0==r)n(e.package_info);else{
switch(m=!1,r){
case-6:
alert("操作过于频繁，请稍后重试");
break;

case 155001:
t(d.tips),o.on(d.tipsOK,"touchend",function i(t){
a(d.tips),n(e.package_info),t.preventDefault(),o.off(d.tipsOK,"touchend",i);
});
break;

case 155002:
alert("重复付费");
break;

case 155003:
alert("该文章已关闭付费，可以免费阅读了"),location.reload();
break;

case 155004:
alert("该帐号已被封，不能进行支付");
break;

case 155005:
alert("该文章已被删除");
break;

case 155006:
alert("该文章已被取消原创声明，不需要支付");
break;

case 268502026:
alert("你今日的微信支付已达上限，请择日再付费");
break;

case 268502027:
alert("该公众号已达到微信支付的收款最高限额，不能再进行付费");
break;

case 268502028:
alert("该公众号今日的收款额度已达上限，请择日再付费");
break;

case 268502029:
alert("该公众号已达到微信支付的收款限额，不能再进行付费");
break;

default:
alert("系统错误，请重试");
}
l.src="/mp/jsreport?key=42&content=type:resperr;ret:"+r+"&r="+Math.random();
}
}
},
error:function(){
m=!1,alert("系统错误，请重试"),l.src="/mp/jsreport?key=42&content=type:ajaxerr&r="+Math.random();
},
complete:function(){
r.removeClass(d.pay,"disabled"),a(d.toast);
}
});
}
function n(e){
e.success=function(){
m=!1,location.reload();
},e.error=function(e){
m=!1,-1==e.indexOf(":cancel")&&(l.src="/mp/jsreport?key=43&content=type:jsapierr;msg:"+e+"&r="+Math.random());
},p.pay(e);
}
if(document.getElementById("js_pay_area")){
var r=e("class-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/class.js*/);
if(!window.uin||!window.key||!/micromessenger/i.test(window.navigator.userAgent)||/WindowsWechat/i.test(window.navigator.userAgent))return document.getElementById("js_pay_desc").innerText="文章已设置需要付费才能阅读，请在手机微信内进行付费",
void r.addClass(document.getElementById("js_pay_btn"),"disabled");
var o=e("event-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/event.js*/),i=e("ajax-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/ajax.js*/),p=e("pay-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/jsapi/pay.js*/),c=e("spin-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/spin.js*/),d={
pay:document.getElementById("js_pay_btn"),
tips:document.getElementById("js_pay_tips"),
tipsOK:document.getElementById("js_pay_tips_ok"),
toast:document.getElementById("js_pay_toast")
},m=!1,l=new Image;
!function(){
{
var e=document.getElementById("js_pay_spinner");
new c({
top:"38%",
lines:10,
width:4,
length:8,
radius:8,
color:"#FFF"
}).spin(e);
}
}(),o.on(d.pay,"tap",function(){
s(pay_fee);
});
}
});