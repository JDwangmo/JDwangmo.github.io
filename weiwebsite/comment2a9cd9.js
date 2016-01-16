define("comment-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/comment.js*/,["cmt_tpl.html-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/cmt_tpl.html.js*/,"event-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/event.js*/,"class-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/class.js*/,"ajax-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/ajax.js*/,"html-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/string/html.js*/,"tmpl-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/tmpl.js*/,"hashrouter-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/hashrouter.js*/,"emotion-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/emotion/emotion.js*/,"dom-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/emotion/dom.js*/],function(e){
"use strict";
function t(e,t){
e&&(e.style.display=t?t:"block");
}
function n(e){
e&&(e.style.display="none");
}
function m(){
setTimeout(function(){
t(U.toast);
},750),setTimeout(function(){
n(U.toast);
},1500);
}
function o(e){
return e.replace(/^\s+|\s+$/g,"");
}
function i(){
clearTimeout(N),N=setTimeout(function(){
if(!D&&-1!=z){
var e=window.innerHeight||document.documentElement.clientHeight,m=window.pageYOffset||document.documentElement.scrollTop,o=document.documentElement.scrollHeight;
if(!(z>0&&o-m-e>500)){
D=!0,n(U.tips),t(U.loading);
var i="/mp/appmsg_comment?action=getcomment&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+comment_id+"&offset="+z+"&limit="+M;
try{
P++,P>1&&((new Image).src="http://mp.weixin.qq.com/mp/jsreport?key=27&content="+encodeURIComponent(i)),
F.indexOf(i)>-1&&((new Image).src="http://mp.weixin.qq.com/mp/jsreport?key=25&content="+encodeURIComponent(i)),
F.push(i);
}catch(a){}
C({
url:i,
type:"get",
success:function(e){
var t={};
try{
t=window.eval.call(window,"("+e+")");
}catch(n){}
var m=t.base_resp&&t.base_resp.ret;
0==m?c(t):T.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:resperr;url:"+encodeURIComponent(i)+";ret="+m+"&r="+Math.random();
},
error:function(){
T.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:ajaxerr;url:"+encodeURIComponent(i)+"&r="+Math.random();
},
complete:function(){
D=!1,n(U.loading);
}
});
}
}
},50);
}
function c(e){
var m,o=document.createDocumentFragment();
Y++,Y>1&&(A.src="http://mp.weixin.qq.com/mp/jsreport?key=26&content="+encodeURIComponent(JSON.stringify({
comment_id:comment_id,
offset:z,
url:location.href
}))),0==z?(O=e.logo_url,H=e.nick_name,m=e.elected_comment,m&&m.length?(l(m,o,"elected"),
U.list.appendChild(o),t(U.main),t(document.getElementById("js_cmt_addbtn1")),e.elected_comment_total_cnt<=10&&(t(document.getElementById("js_cmt_statement")),
t(document.getElementById("js_cmt_qa")))):(n(U.main),1==copyright_stat&&1==need_pay&&v.addClass(document.body,"rich_media_empty_extra"),
t(document.getElementById("js_cmt_addbtn2"))),function(){
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=(document.getElementById("img-content"),
document.getElementById("js_cmt_area"));
if(e&&t&&t.offsetTop){
var n=t.offsetTop;
window.scrollTo(0,n-25);
}
}()):(m=e.elected_comment,m&&m.length&&(l(m,o,"elected"),U.list.appendChild(o))),
0==e.elected_comment_total_cnt?(z=-1,I.off(window,"scroll",i),n(document.getElementById("js_cmt_loading")),
n(document.getElementById("js_cmt_statement")),n(document.getElementById("js_cmt_qa"))):z+M>=e.elected_comment_total_cnt?(z=-1,
I.off(window,"scroll",i),n(document.getElementById("js_cmt_loading")),t(document.getElementById("js_cmt_statement")),
t(document.getElementById("js_cmt_qa"))):z+=e.elected_comment.length;
}
function a(){
q.log("tag1");
var e=o(U.input.value);
if(q.log("tag2"),!v.hasClass(U.submit,"btn_disabled")){
if(q.log("tag3"),e.length<1)return p("留言不能为空");
if(q.log("tag4"),e.length>600)return p("字数不能多于600个");
q.log("tag5"),v.addClass(U.submit,"btn_disabled"),q.log("tag6");
var n=document.getElementById("activity-name");
q.log("tag7");
var i="/mp/appmsg_comment?action=addcomment&comment_id="+comment_id+"&__biz="+biz+"&idx="+idx+"&appmsgid="+appmsgid+"&sn="+sn;
C({
url:i,
data:{
content:e,
title:n&&o(n.innerText),
head_img:O,
nickname:H
},
type:"POST",
success:function(n){
q.log("tag8"),x.hidePannel();
var o={},c=document.createDocumentFragment();
try{
o=window.eval.call(window,"("+n+")");
}catch(a){}
switch(+o.ret){
case 0:
m(),l([{
content:e,
nick_name:H,
create_time:(new Date).getTime()/1e3|0,
is_elected:0,
logo_url:O,
like_status:0,
content_id:0,
like_num_format:0,
like_num:0,
is_from_friend:0,
is_from_me:1,
my_id:o.my_id
}],c,"mine"),U.mylist.insertBefore(c,U.mylist.firstChild),t(U.mylist.parentNode),
U.input.value="";
break;

case-6:
p("你留言的太频繁了，休息一下吧");
break;

case-7:
p("你还未关注该公众号，不能参与留言");
break;

case-10:
p("字数不能多于600个");
break;

case-15:
p("留言已关闭");
break;

default:
p("系统错误，请重试");
}
0!=o.ret&&(T.src="http://mp.weixin.qq.com/mp/jsreport?key=19&content=type:resperr;url:"+encodeURIComponent(i)+";ret="+o.ret+"&r="+Math.random());
},
error:function(e){
q.log("shit;"+e.status+";"+e.statusText),T.src="http://mp.weixin.qq.com/mp/jsreport?key=19&content=type:ajaxerr;url:"+encodeURIComponent(i)+"&r="+Math.random();
},
complete:function(){
""!=U.input.value&&v.removeClass(U.submit,"btn_disabled");
}
});
}
}
function s(){
if(0==R){
var e="/mp/appmsg_comment?action=getmycomment&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+comment_id,m=document.getElementById("js_mycmt_loading");
R=1,t(m),C({
url:e,
type:"get",
success:function(n){
var m={};
try{
m=window.eval.call(window,"("+n+")");
}catch(o){}
var i=m.base_resp&&m.base_resp.ret;
if(0==i){
var c=m.my_comment,a=document.createDocumentFragment();
c&&c.length&&(l(c,a,"mine"),U.mylist.appendChild(a),t(U.mylist.parentNode)),R=2;
}else R=0,T.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:resperr;url:"+encodeURIComponent(e)+";ret="+i+"&r="+Math.random();
},
error:function(){
R=0,T.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:ajaxerr;url:"+encodeURIComponent(e)+"&r="+Math.random();
},
complete:function(){
n(m);
}
});
}
}
function r(e){
var t=(new Date).getTime(),n=new Date;
n.setDate(n.getDate()+1),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n=n.getTime();
var m=t/1e3-e,o=n/1e3-e,i=new Date(n).getFullYear(),c=new Date(1e3*e);
return 3600>m?Math.ceil(m/60)+"分钟前":86400>o?Math.floor(m/60/60)+"小时前":172800>o?"昨天":604800>o?Math.floor(o/24/60/60)+"天前":c.getFullYear()==i?c.getMonth()+1+"月"+c.getDate()+"日":c.getFullYear()+"年"+(c.getMonth()+1)+"月"+c.getDate()+"日";
}
function l(e,t,n){
var m,o="",i=document.createElement("div"),c="http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiak6fjSeA7cianwo25C0CIt5ib8nAcZjW7QT1ZEmUo4r5iazzAKhuQibEXOReDGmXzj8rNg/0";
S={};
for(var a,s=0;a=e[s];++s){
a.time=r(a.create_time),a.status="",a.logo_url=a.logo_url||c,a.logo_url=-1!=a.logo_url.indexOf("http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/wx.qlogo.cn")?a.logo_url.replace(/\/132$/,"/96"):a.logo_url,
a.content=a.content.htmlDecode().htmlEncode(),a.nick_name=a.nick_name.htmlDecode().htmlEncode(),
a.like_num_format=parseInt(a.like_num)>=1e4?(a.like_num/1e4).toFixed(1)+"万":a.like_num,
a.is_from_friend=a.is_from_friend||0,a.is_from_me="mine"==n?1:a.is_from_me||0,a.reply=a.reply||{
reply_list:[]
},a.is_mine=n?!1:!0,a.is_elected="elected"==n?1:a.is_elected,a.reply.reply_list.length>0&&(a.reply.reply_list[0].time=r(a.reply.reply_list[0].create_time),
a.reply.reply_list[0].content=(a.reply.reply_list[0].content||"").htmlEncode()),
o+=k.tmpl(b,a);
try{
var l=a.nick_name+a.content,p=!1,u=23;
S[l]&&(p=!0,u=24),L.indexOf(a.content_id)>-1&&(p=!0,u=23),L.push(a.content_id),S[l]=!0,
p&&(A.src="http://mp.weixin.qq.com/mp/jsreport?key="+u+"&content="+encodeURIComponent(JSON.stringify({
comment_id:comment_id,
content_id:a.content_id,
offset:z,
length:e.length,
url:location.href
})));
}catch(_){}
}
for(i.innerHTML=o,d(i);m=i.children.item(0);)t.appendChild(m);
}
function d(e){
q.each(e.querySelectorAll("div.discuss_message_content"),function(e){
e.innerHTML=x.encode(e.innerHTML);
});
}
function p(e){
return setTimeout(function(){
alert(e);
});
}
function u(){
var e="1"===E.getParam("js_my_comment");
e&&_(!0);
}
function _(e){
n(U.article),t(U.mine),window.scrollTo(0,0),s(),e||q.later(function(){
U.input.focus();
});
}
function g(){
n(U.mine),t(U.article),window.scrollTo(0,document.documentElement.scrollHeight),
U.input.blur();
}
function y(e){
var t=e.target||e.srcElement,n=null;
if(v.hasClass(t,"js_comment_praise")&&(n=t),v.hasClass(t,"icon_praise_gray")&&"i"==t.nodeName.toLowerCase()&&(n=t.parentElement),
v.hasClass(t,"praise_num")&&"span"==t.nodeName.toLowerCase()&&(n=t.parentElement),
n){
var m=parseInt(n.dataset.status),o=0==m?1:0,i=n.dataset.contentId,c="/mp/appmsg_comment?action=likecomment&&like="+o+"&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+comment_id+"&content_id="+i;
f(n),C({
url:c,
type:"GET"
});
}
}
function f(e){
var t=v.hasClass(e,"praised"),n=e.querySelector(".praise_num"),m=n.innerHTML,o=m.indexOf("万"),i=parseInt(m)?parseInt(m):0;
t?(-1==o&&(n.innerHTML=i-1>0?i-1:""),v.removeClass(e,"praised"),e.dataset.status=0):(-1==o&&(n.innerHTML=i+1),
v.addClass(e,"praised"),e.dataset.status=1);
}
function h(e){
var m=e.delegatedTarget,o=m.getAttribute("data-my-id"),i="/mp/appmsg_comment?action=delete&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+comment_id+"&my_id="+o;
confirm("确定删除吗？")&&C({
url:i,
success:function(e){
var i,c=m;
try{
e=JSON.parse(e);
}catch(a){
e={};
}
if(0==e.ret){
for(;c&&(c.nodeType!=c.ELEMENT_NODE||"li"!=c.tagName.toLowerCase());)c=c.parentNode;
c&&(c.parentNode.removeChild(c),i=document.getElementById("cid"+o),i&&i.parentNode.removeChild(i),
0==U.list.children.length&&(n(U.main),n(document.getElementById("js_cmt_statement")),
n(document.getElementById("js_cmt_qa")),t(document.getElementById("js_cmt_addbtn2"))),
0==U.mylist.children.length&&n(U.mylist.parentNode));
}else alert("删除失败，请重试");
},
error:function(){
alert("网络错误，请重试");
}
});
}
function j(e){
var t=document.createElement("a");
t.setAttribute("href",e),this.el=t,this.parser=this.el,this.getParam=function(e){
var t=new RegExp("([?&])"+e+"=([^&#]*)([&#])?"),n=this.el.search.match(t);
return n?n[2]:null;
};
}
var b=e("cmt_tpl.html-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/cmt_tpl.html.js*/),w=document.getElementById("js_cmt_area"),E=new j(window.location.href);
if(0!=comment_id&&uin&&key){
if(-1==navigator.userAgent.indexOf("MicroMessenger"))return void(w&&(w.style.display="none"));
w&&(w.style.display="block");
var I=e("event-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/event.js*/),v=e("class-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/class.js*/),C=e("ajax-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/ajax.js*/),k=(e("html-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/string/html.js*/),
e("tmpl-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/tmpl.js*/)),B=e("hashrouter-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/hashrouter.js*/),x=e("emotion-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/emotion/emotion.js*/),q=e("dom-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/emotion/dom.js*/),T=new Image,z=0,M=50,D=!1,N=null,O="",H="我",R=0,U={
article:document.getElementById("js_article"),
more:document.getElementById("js_cmt_more"),
mine:document.getElementById("js_cmt_mine"),
main:document.getElementById("js_cmt_main"),
input:document.getElementById("js_cmt_input"),
submit:document.getElementById("js_cmt_submit"),
addbtn:document.getElementById("js_cmt_addbtn"),
list:document.getElementById("js_cmt_list"),
mylist:document.getElementById("js_cmt_mylist"),
morelist:document.getElementById("js_cmt_morelist"),
toast:document.getElementById("js_cmt_toast"),
tips:document.getElementById("js_cmt_tips"),
loading:document.getElementById("js_cmt_loading")
},L=[],S={},A=new Image,F=[],P=0,Y=0;
!function(){
i(),u(),x.init();
}(),B.get("comment",function(){
_();
}),B.get("default",function(e){
"comment"==e&&g();
}),I.on(U.input,"input",function(){
var e=o(U.input.value);
e.length<1?v.addClass(U.submit,"btn_disabled"):v.removeClass(U.submit,"btn_disabled");
}),I.on(U.more,"touchend",y),I.on(U.list,"touchend",y),I.on(U.mylist,"touchend",y),
I.on(U.list,"tap",".js_del",h),I.on(U.mylist,"tap",".js_del",h),I.on(U.submit,"tap",a);
}
});