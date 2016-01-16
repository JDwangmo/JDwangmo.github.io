define("page_pos-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/page_pos.js*/,["html-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/string/html.js*/,"event-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/event.js*/,"ajax-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/ajax.js*/,"cookie-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/cookie.js*/,"cdn_img_lib-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/cdn_img_lib.js*/,"storage-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/storage.js*/],function(e){
"use strict";
function t(e){
for(var t=5381,n=0;n<e.length;n++)t=(t<<5)+t+e.charCodeAt(n),t&=2147483647;
return t;
}
function n(e,t){
if(e&&!(e.length<=0))for(var n,o,i,a=/http(s)?\:\/\/([^\/\?]*)(\?|\/)?/,l=0,r=e.length;r>l;++l)n=e[l],
n&&(o=n.getAttribute(t),o&&(i=o.match(a),i&&i[2]&&(w[i[2]]=!0)));
}
function o(e){
for(var t=0,n=f.length;n>t;++t)if(f[t]==e)return!0;
return!1;
}
function i(){
w={},n(document.getElementsByTagName("a"),"href"),n(document.getElementsByTagName("link"),"href"),
n(document.getElementsByTagName("iframe"),"src"),n(document.getElementsByTagName("script"),"src"),
n(document.getElementsByTagName("img"),"src");
var e=[];
for(var t in w)w.hasOwnProperty(t)&&(window.networkType&&"wifi"==window.networkType&&!_&&o(t)&&(_=!0),
e.push(t));
return w={},e.join(",");
}
function a(){
var e,t=window.pageYOffset||document.documentElement.scrollTop,n=document.getElementById("js_content"),o=document.documentElement.clientHeight||window.innerHeight,a=document.body.scrollHeight||document.body.offsetHeight,l=Math.ceil(a/o),m=Math.ceil((n.scrollHeight||n.offsetHeight)/o),d=(window.logs.read_height||t)+o,g=document.getElementById("js_toobar3").offsetTop,w=n.getElementsByTagName("img")||[],f=Math.ceil(d/o)||1,p=document.getElementById("media"),h=50,u=0,y=0,v=0,b=0,T=d+h>g?1:0;
f>l&&(f=l);
var j=function(t){
if(t)for(var n=0,o=t.length;o>n;++n){
var i=t[n];
if(i){
u++;
var a=i.getAttribute("src"),l=i.getAttribute("data-type");
a&&0==a.indexOf("http")&&(y++,a.isCDN()&&(v++,-1!=a.indexOf("tp=webp")&&b++),l&&(e["img_"+l+"_cnt"]=e["img_"+l+"_cnt"]||0,
e["img_"+l+"_cnt"]++));
}
}
e.download_cdn_webp_img_cnt=b||0,e.download_img_cnt=y||0,e.download_cdn_img_cnt=v||0,
e.img_cnt=u||0;
},O=window.appmsgstat||{},x=window.logs.img||{},z=window.logs.pagetime||{},E=x.load||{},k=x.read||{},D=[],B=[],N=0,S=0,I=0;
for(var H in k)H&&0==H.indexOf("http")&&k.hasOwnProperty(H)&&B.push(H);
for(var H in E)H&&0==H.indexOf("http")&&E.hasOwnProperty(H)&&D.push(H);
for(var M=0,P=D.length;P>M;++M){
var Y=D[M];
Y&&Y.isCDN()&&(-1!=Y.indexOf("/0")&&N++,-1!=Y.indexOf("/640")&&S++,-1!=Y.indexOf("/300")&&I++);
}
var e={
__biz:biz,
title:msg_title.htmlDecode(),
mid:mid,
idx:idx,
read_cnt:O.read_num||0,
like_cnt:O.like_num||0,
screen_height:o,
screen_num:m,
idkey:"",
copyright_stat:"",
ori_article_type:"",
video_cnt:window.logs.video_cnt||0,
read_screen_num:f||0,
is_finished_read:T,
scene:source,
content_len:c.content_length||0,
start_time:page_begintime,
end_time:(new Date).getTime(),
img_640_cnt:S,
img_0_cnt:N,
img_300_cnt:I,
wtime:z.wtime||0,
ftime:z.ftime||0,
ptime:z.ptime||0,
reward_heads_total:window.logs.reward_heads_total||0,
reward_heads_fail:window.logs.reward_heads_fail||0
};
if(window.networkType&&"wifi"==window.networkType&&(e.wifi_all_imgs_cnt=D.length,
e.wifi_read_imgs_cnt=B.length),window.logs.webplog&&4==window.logs.webplog.total){
var A=window.logs.webplog;
e.webp_total=1,e.webp_lossy=A.lossy,e.webp_lossless=A.lossless,e.webp_alpha=A.alpha,
e.webp_animation=A.animation;
}
if(e.copyright_stat=window._copyright_stat||"",e.ori_article_type=window._ori_article_type||"",
window.logs.idkeys){
var C=window.logs.idkeys,J=[];
for(var R in C)if(C.hasOwnProperty(R)){
var q=C[R];
q.val>0&&J.push(R+"_"+q.val);
}
e.idkey=J.join(";");
}
j(!!p&&p.getElementsByTagName("img")),j(w);
var L=(new Date).getDay(),$=i();
(_||0!==user_uin&&Math.floor(user_uin/100)%7==L)&&(e.domain_list=$),_&&(e.html_content=s),
r({
url:"/mp/appmsgreport?action=page_time",
type:"POST",
data:e,
async:!1,
timeout:2e3
});
}
e("html-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/string/html.js*/);
{
var l=e("event-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/event.js*/),r=e("ajax-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/ajax.js*/);
e("cookie-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/cookie.js*/);
}
e("cdn_img_lib-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/cdn_img_lib.js*/);
var s,m=e("storage-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/storage.js*/),d=new m("ad"),g=new m("page_pos"),c={};
!function(){
if(s=document.getElementsByTagName("html"),s&&1==!!s.length){
s=s[0].innerHTML;
var e=s.replace(/[\x00-\xff]/g,""),t=s.replace(/[^\x00-\xff]/g,"");
c.content_length=1*t.length+3*e.length+"<!DOCTYPE html><html></html>".length;
}
window.logs.pageinfo=c;
}();
var w={},_=!1,f=["http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/wap.zjtoolbar.10086.cn","http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/125.88.113.247","http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/115.239.136.61","http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/134.224.117.240","http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/hm.baidu.com","http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/c.cnzz.com","http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/w.cnzz.com","http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/124.232.136.164","http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/img.100msh.net","http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/10.233.12.76","http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/wifi.witown.com","http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/211.137.132.89","http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/qiao.baidu.com","http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/baike.baidu.com"],p=null,h=0,u=msg_link.split("?").pop(),y=t(u);
!function(){
if(!localStorage.getItem("clear_page_pos")){
for(var e=localStorage.length-1;e>=0;){
var t=localStorage.key(e);
t.match(/^\d+$/)?localStorage.removeItem(t):t.match(/^adinfo_/)&&localStorage.removeItem(t),
e--;
}
localStorage.setItem("clear_page_pos","true");
}
}(),window.localStorage&&(l.on(window,"load",function(){
h=1*g.get(y);
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=(document.getElementById("img-content"),
document.getElementById("js_cmt_area"));
if(e&&t&&t.offsetTop){
var n=t.offsetTop;
window.scrollTo(0,n-25);
}else window.scrollTo(0,h);
}),l.on(window,"unload",function(){
if(g.set(n,h,+new Date+72e5),window._adRenderData&&"undefined"!=typeof JSON&&JSON.stringify){
var e=JSON.stringify(window._adRenderData),t=+new Date,n=[biz,sn,mid,idx].join("_");
d.set(n,{
info:e,
time:t
},+new Date+24e4);
}
a();
}),window.logs.read_height=0,l.on(window,"scroll",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(p),p=setTimeout(function(){
h=window.pageYOffset,g.set(y,h,+new Date+72e5);
},500);
}),l.on(document,"touchmove",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(p),p=setTimeout(function(){
h=window.pageYOffset,g.set(y,h,+new Date+72e5);
},500);
}));
});