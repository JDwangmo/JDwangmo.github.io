define("gotoappdetail-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/a/gotoappdetail.js*/,["event-5.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/dom/event.js*/,"report-7.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/utils/report.js*/,"ajax-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/utils/ajax.js*/,"position-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/utils/position.js*/,"class-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/dom/class.js*/,"a_report-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/appmsg/a_report.js*/,"core-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/jsapi/core.js*/,"parse-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/utils/url/parse.js*/],function(t){
"use strict";
function a(t){
"undefined"!=typeof c&&c.log&&c.log(t);
}
function e(t,a){
o("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+t+a.report_param);
}
function i(i){
var o=i.btn,l=i.js_app_rating;
if(!o)return!1;
var u={},g=i.adData,v="",j="",w=g.md5sum,b="",h=i.pos_type||0;
if(function(){
var t=1*g.app_rating;
t>5&&(t=5),0>t&&(t=0);
var a=["","one","two","three","four","five"],e="",i=Math.floor(t);
if(e="star_"+a[i],t>i&&(t=i+.5,e+="_half"),l&&t>0){
var n=l.getElementsByClassName("js_stars"),o=l.getElementsByClassName("js_scores");
n&&o&&n[0]&&o[0]&&(n=n[0],o=o[0],n.style.display="inline-block",s.addClass(n,e));
}
}(),"104"==g.pt){
var k=g.androiddownurl;
if(j=v=g.channel_id||"",k&&k.match){
var y=/&channelid\=([^&]*)/,x=k.match(y);
x&&x[1]&&(v=x[1],g.androiddownurl=k.replace(y,""));
}
v&&(v="&channelid="+v),i.via&&(b=["&via=ANDROIDWX.YYB.WX.ADVERTISE",i.via].join("."));
}
c.ready(function(){
"104"==g.pt&&(c.invoke("getInstallState",{
packageName:m
},function(t){
var e=t.err_msg;
a("getInstallState @yingyongbao : "+e);
var i=e.lastIndexOf("_")+1,n=e.substring(i);
1*n>=f&&e.indexOf("get_install_state:yes")>-1&&(_=!0);
}),c.invoke("getInstallState",{
packageName:g.pkgname
},function(t){
var e=t.err_msg;
a("getInstallState @"+g.pkgname+" : "+e);
var i=e.lastIndexOf("_")+1,n=e.substring(i);
1*n>=g.versioncode&&e.indexOf("get_install_state:yes")>-1&&(p=!0,o.innerHTML="已安装",
s.removeClass(o,"btn_download"),s.addClass(o,"btn_installed"));
})),n.on(o,"click",function(n){
if(a("click @js_app_action"),p&&"104"==g.pt)return!1;
var o=function(){
if("104"==g.pt){
if(_)return e(24,i),void(location.href="tmast://download?oplist=1;2&pname="+g.pkgname+v+b);
e(25,i);
var a=g.url;
if(a&&(0==a.indexOf("http://mp.weixin.qq.com/tp/")||0==a.indexOf("https://mp.weixin.qq.com/tp/"))){
var n=t("parse-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/utils/url/parse.js*/);
return a=n.join(a,{
auto:"1"
}),void(location.href=a);
}
return void(location.href="http://mp.weixin.qq.com/mp/ad_app_info?t=ad/app_detail&app_id="+g.app_id+(i.appdetail_params||"")+"&channel_id="+j+"&md5sum="+w+"&auto=1#wechat_redirect");
}
if("103"==g.pt){
e(23,i);
var o="http://"+location.host+"/mp/ad_redirect?url="+encodeURIComponent(g.appinfo_url)+"&uin="+uin+"&ticket="+(i.ticket||window.ticket);
c.invoke("downloadAppInternal",{
appUrl:g.appinfo_url
},function(t){
t.err_msg&&-1!=t.err_msg.indexOf("ok")||(location.href=o);
});
}
};
if(g.rl&&g.traceid){
if(!u[g.traceid]){
u[g.traceid]=!0;
var s,l,m=!!n&&n.target;
m&&(s=r.getX(m,"js_ad_link extra_link")+n.offsetX,l=r.getY(m,"js_ad_link extra_link")+n.offsetY),
d({
type:g.type,
report_type:2,
click_pos:0,
url:encodeURIComponent(g.androiddownurl),
tid:g.traceid,
rl:encodeURIComponent(g.rl),
__biz:biz,
pos_type:h,
pt:g.pt,
pos_x:s,
pos_y:l
},function(){
u[g.traceid]=!1,o();
});
}
}else o();
return!1;
});
});
}
var n=t("event-5.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/dom/event.js*/),o=t("report-7.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/utils/report.js*/),r=(t("ajax-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/utils/ajax.js*/),
t("position-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/utils/position.js*/)),s=t("class-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_common/dom/class.js*/),p=!1,l=t("a_report-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/appmsg/a_report.js*/),d=l.AdClickReport,c=t("core-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/a/biz_wap/jsapi/core.js*/),_=("https:"==top.location.protocol?5:0,
window.__report,!1),m="com.tencent.android.qqdownloader",f=1060125;
return i;
});