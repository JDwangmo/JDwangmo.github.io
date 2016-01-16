define("lazyload_img-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/ui/biz_wap/ui/lazyload_img.js*/,["mmversion-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/ui/biz_wap/utils/mmversion.js*/,"event-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/ui/biz_common/dom/event.js*/,"attr-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/ui/biz_common/dom/attr.js*/,"imgonepx-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/ui/biz_common/ui/imgonepx.js*/],function(t){
"use strict";
function i(){
var t=this.images;
if(!t||t.length<=0)return!1;
var i=window.pageYOffset||document.documentElement.scrollTop,e=window.innerHeight||document.documentElement.clientHeight,o=e+40,n=this.offset||20,r=0;
if("wifi"==window.networkType){
var s={
bottom:1,
top:1
};
this.lazyloadHeightWhenWifi&&(s=this.lazyloadHeightWhenWifi()),n=Math.max(s.bottom*e,n),
r=Math.max(s.top*e,r);
}
for(var l=+new Date,d=[],u=this.sw,f=this,w=0,p=t.length;p>w;w++)!function(t,e){
var s=t.el.offsetTop,l=t.src;
if(l){
var f=r,w=n;
-1!=l.indexOf("wx_fmt=gif")&&c&&(f=0,w=20),!t.show&&(i>=s&&i<=s+t.height+f||s>i&&i+o+w>s)&&(e.inImgRead&&(i>=s&&i<=s+t.height||s>i&&i+o>s)&&e.inImgRead(l,networkType),
e.changeSrc&&(l=e.changeSrc(t.el,l)),t.el.onerror=function(){
var t=this;
!!e.onerror&&e.onerror(l,t);
},t.el.onload=function(){
var t=this;
h(t,"height","auto","important"),t.getAttribute("_width")?h(t,"width",t.getAttribute("_width"),"important"):h(t,"width","auto","important"),
!!e.onload&&e.onload(l,t);
},m(t.el,"src",l),d.push(l),t.show=!0,h(t.el,"visibility","visible","important")),
a.isWp&&1*t.el.width>u&&(t.el.width=u);
}
}(t[w],f);
d.length>0&&this.detect&&this.detect({
time:l,
loadList:d,
scrollTop:i
});
}
function e(){
var t=document.getElementsByTagName("img"),e=[],o=this.container,n=this.attrKey||"data-src",a=o.offsetWidth,r=0;
o.currentStyle?r=o.currentStyle.width:"undefined"!=typeof getComputedStyle&&(r=getComputedStyle(o).width),
this.sw=1*r.replace("px","");
for(var s=0,d=t.length;d>s;s++){
var c=t.item(s),u=m(c,n);
if(u){
var f=100;
if(c.dataset&&c.dataset.ratio){
var w=1*c.dataset.ratio,p=1*c.dataset.w||a;
"number"==typeof w&&w>0?(p=a>=p?p:a,f=p*w,c.style.width&&c.setAttribute("_width",c.style.width),
h(c,"width",p+"px","important"),h(c,"visibility","visible","important"),c.setAttribute("src",l)):h(c,"visibility","hidden","important");
}else h(c,"visibility","hidden","important");
h(c,"height",f+"px","important"),e.push({
el:c,
src:u,
height:f,
show:!1
});
}
}
this.images=e,i.call(this);
}
function o(t){
var e=this,o=e.timer;
clearTimeout(o),e.timer=setTimeout(function(){
i.call(e,t);
},300);
}
function n(t){
r.on(window,"scroll",function(i){
o.call(t,i);
}),r.on(window,"load",function(i){
e.call(t,i);
}),r.on(document,"touchmove",function(i){
o.call(t,i);
});
}
var a=t("mmversion-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/ui/biz_wap/utils/mmversion.js*/),r=t("event-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/ui/biz_common/dom/event.js*/),s=t("attr-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/ui/biz_common/dom/attr.js*/),m=s.attr,h=s.setProperty,l=t("imgonepx-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_wap/ui/biz_common/ui/imgonepx.js*/),d=new Date,c=(d.getHours(),
!0);
return n;
});