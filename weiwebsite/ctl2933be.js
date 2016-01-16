define("ctl-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/new_video/new_video/ctl.js*/,["ajax-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/new_video/biz_wap/utils/ajax.js*/],function(i){
"use strict";
var e=top.window.user_uin,t=Math.floor(top.window.user_uin/100)%20;
e||(t=-1);
var o=function(){
return t>=0;
};
top.window.__webviewid||(top.window.__webviewid=+new Date+"_"+Math.ceil(1e3*Math.random()));
var d=function(){
var i=top.window.mid,t=top.window.idx,o="";
o=i&&t?i+"_"+t:"";
var d=top.window.__webviewid,w=[e,o,d].join("_");
return w;
},w=function(e){
if(20>t)try{
var w=e.vid||"",n={};
n.__biz=top.window.biz||"",n.vid=w,n.clienttime=+new Date;
var r=top.window.mid,a=top.window.idx,p="";
r&&a?(n.type=1,p=r+"_"+a):(n.type=2,p=w),n.id=p,n.webviewid=d(),n.step=e.step||0,
n.orderid=e.orderid||0,n.traceid=e.traceid||0,n.ext1=e.ext1||"",n.ext2=e.ext2||"",
n.r=Math.random(),n.devicetype=top.window.devicetype,n.version=top.window.clientversion,
n.is_gray=o()?1:0;
var v=i("ajax-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/new_video/biz_wap/utils/ajax.js*/);
v({
url:"/mp/ad_video_report?action=user_action",
type:"post",
data:n
});
}catch(_){}
};
return{
report:w,
getWebviewid:d,
showAd:o
};
});