define("profile-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/a/profile.js*/,["event-5.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/dom/event.js*/,"report-7.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/utils/report.js*/,"a_report-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/appmsg/a_report.js*/,"ajax-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/utils/ajax.js*/,"position-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/utils/position.js*/,"core-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/jsapi/core.js*/],function(t){
"use strict";
function o(t,o){
a("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+t+o.report_param);
}
function e(t){
location.href=t;
}
function n(t){
var n=t.adData,p=t.pos_type||0,l={};
t.report_param=t.report_param||"",function(){
function _(t){
{
var o=d.dataset;
"https:"==top.location.protocol?1500:1200;
}
if(o.rl&&o.url&&o.type&&o.tid){
var e=o.tid,n=o.type,i=o.url,a=o.rl;
if(!l[e]){
l[e]=!0;
var c,_,m=!!t&&t.target;
m&&(c=r.getX(m,"js_ad_link extra_link")+t.offsetX,_=r.getY(m,"js_ad_link extra_link")+t.offsetY),
s({
type:n,
report_type:2,
click_pos:0,
url:encodeURIComponent(i),
tid:e,
rl:encodeURIComponent(a),
__biz:biz,
pos_type:p,
pt:100,
pos_x:c,
pos_y:_
},function(){
l[e]=!1,f();
});
}
}else f();
}
var d=t.btnAddContact,m=t.btnViewProfile;
if(d&&d.dataset){
var u=function(i,p){
var s=i.err_msg,r=n.is_appmsg?6:1;
-1!=s.indexOf("ok")?(m.style.display="inline-block",d.style.display="none",r=n.is_appmsg?9:4):"add_contact:added"==s?r=n.is_appmsg?7:2:"add_contact:cancel"==s?r=n.is_appmsg?8:3:(--p,
p>=0?c.invoke("addContact",{
scene:scene,
webtype:"1",
username:n.usename
},function(t){
u(t,p);
}):(s="addContact:fail|msg:"+s+"|uin:"+uin+"|biz:"+biz,a("http://mp.weixin.qq.com/mp/jsreport?key=13&content="+s+"&r="+Math.random()),
e(n.url))),o(r,t);
},f=function(){
o(n.is_appmsg?10:5,t),c.invoke("addContact",{
scene:scene,
webtype:"1",
username:n.usename
},function(t){
u(t,1);
});
};
i.on(d,"click",_);
}
}(),function(){
var o=t.btnViewProfile;
o&&i.on(o,"click",function(){
return e(n.url),!1;
});
}();
}
{
var i=t("event-5.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/dom/event.js*/),a=t("report-7.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/utils/report.js*/),p=t("a_report-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/appmsg/a_report.js*/),s=p.AdClickReport,r=(t("ajax-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/utils/ajax.js*/),
t("position-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/utils/position.js*/)),c=t("core-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/jsapi/core.js*/);
"https:"==top.location.protocol?5:0,window.__report;
}
return n;
});