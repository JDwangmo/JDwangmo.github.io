define("review_image-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/review_image.js*/,["event-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/event.js*/,"core-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/jsapi/core.js*/,"parse-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/url/parse.js*/,"cdn_img_lib-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/cdn_img_lib.js*/],function(e){
"use strict";
function t(e,t){
a.invoke("imagePreview",{
current:e,
urls:t
},function(){
window.__addIdKeyReport&&window.__addIdKeyReport("28307","2");
});
}
function i(e){
var i=[],a=e.container,n=e.imgs||[];
if(a)for(var o=a.getElementsByTagName("img")||[],p=0,m=o.length;m>p;p++)n.push(o.item(p));
for(var p=0,m=n.length;m>p;p++){
var c=n[p],d=c.getAttribute("data-src")||c.getAttribute("src"),u=c.getAttribute("data-type");
if(d){
for(;-1!=d.indexOf("?tp=webp");)d=d.replace("?tp=webp","");
c.dataset&&c.dataset.s&&d.isCDN()&&(d=d.replace(/\/640$/,"/0"),d=d.replace(/\/640\?/,"/0?")),
d.isCDN()&&(d=s.addParam(d,"wxfrom","3",!0)),e.is_https_res&&(d=d.http2https()),
u&&(d=s.addParam(d,"wxtype",u,!0)),i.push(d),function(e){
r.on(c,"click",function(){
return t(e,i),!1;
});
}(d);
}
}
}
var r=e("event-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/event.js*/),a=e("core-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/jsapi/core.js*/),s=e("parse-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/url/parse.js*/);
return e("cdn_img_lib-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/cdn_img_lib.js*/),i;
});