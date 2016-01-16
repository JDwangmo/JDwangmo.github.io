define("copyright_report-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/copyright_report.js*/,["event-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/event.js*/],function(e){
"use strict";
function t(e){
var t=["/mp/copyrightreport?action=report&biz=",biz,"&scene=",e.scene,"&ori_username=",source_username,"&user_uin=",user_uin,"&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&t=",Math.random()].join(""),o=new Image;
o.src=t.substr(0,1024);
}
function o(){
var e=__appmsgCgiData;
if("2"==e.copyright_stat){
for(var t=r("copyright_info"),o=r("js_article");t&&o!==t;)c.copyright_top+=t.offsetTop,
t=t.offsetParent;
i.on(window,"scroll",n);
}
}
function n(){
var e=window.pageYOffset||document.documentElement.scrollTop;
e+c.innerHeight>c.copyright_top&&(t({
scene:"1",
card_pos:"0"
}),i.off(window,"scroll",n),n=c.copyright_top=null);
}
function r(e){
return document.getElementById(e);
}
var i=e("event-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/event.js*/),c={
innerHeight:window.innerHeight||document.documentElement.clientHeight,
copyright_top:0
};
return{
card_click_report:t,
card_pv_report:o
};
});