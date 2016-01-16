define("reward_entry-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/reward_entry.js*/,["event-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/event.js*/,"ajax-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/ajax.js*/,"core-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/jsapi/core.js*/],function(e){
"use strict";
function n(e){
e&&(e.style.display="block");
}
function t(e){
e&&(e.style.display="none");
}
function o(e){
var o=window.innerWidth||document.documentElement.innerWidth,r=(Math.ceil((m-188)/42)+1)*Math.floor((o-15)/42);
l="http://mp.weixin.qq.com/mp/reward?act=getrewardheads&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&offset=0&count="+r+"&source=1#wechat_redirect";
var d="#wechat_redirect",w="https://mp.weixin.qq.com/bizmall/reward?__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&timestamp="+e.timestamp+"&showwxpaytitle=1"+d,p=document.getElementById("js_reward_link");
p&&(c.on("activity:state_change",function(e){
("onResume"==e.state_change||"onResume"==e.state)&&(c.invoke("setNavigationBarColor",{
actionCode:"1"
}),location.reload());
}),s.on(p,"tap",function(e){
e.preventDefault(),c.invoke("openUrlWithExtraWebview",{
url:w
},function(e){
e.err_msg.indexOf(":ok")>-1||(location.href=w);
});
})),_=e.reward_head_imgs;
var f=a();
u.reward&&1==e.can_reward?(n(u.reward),s.on(window,"load",function(){
s.on(window,"scroll",i);
})):t(u.reward);
var g=document.getElementById("js_reward_inner");
g&&f>0&&n(g);
var h=document.getElementById("js_reward_total");
h&&(h.innerText=e.reward_total,h.setAttribute("href",l));
}
function r(e,n){
var t=document.createElement("span");
t.className="reward_user_avatar";
var o=new Image;
return o.onload=function(){
window.logs&&window.logs.reward_heads_total++,o.onload=o.onerror=null;
},o.onerror=function(){
window.logs&&window.logs.reward_heads_total++,window.logs&&window.logs.reward_heads_fail++,
o.onload=o.onerror=null;
},o.src=n,t.appendChild(o),e.appendChild(t),t;
}
function a(){
if(_.length){
var e=document.getElementById("js_reward_list"),n=0,t=document.createDocumentFragment();
if(e){
for(var o=0,a=_.length;a>o&&(n++,r(t,_[o]),n!=3*d);++o);
n>d&&(e.className+=" tl"),e.innerHTML="",e.appendChild(t);
}
return n;
}
}
function i(){
var e=window.pageYOffset||document.documentElement.scrollTop;
e+m>u.reward.offsetTop&&(w({
type:"GET",
url:"/bizmall/reward?act=report&__biz="+biz+"&appmsgid="+mid+"&idx="+idx,
async:!0
}),s.off(window,"scroll",i),i=null);
}
var d,l,s=e("event-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/dom/event.js*/),w=e("ajax-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/utils/ajax.js*/),c=e("core-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_wap/jsapi/core.js*/),m=window.innerHeight||document.documentElement.clientHeight,u={
reward:document.getElementById("js_reward_area")
},_=[];
return window.logs&&(window.logs.reward_heads_total=0,window.logs.reward_heads_fail=0),
{
handle:function(e,n){
d=n,o(e);
},
render:function(e){
d=e,a();
}
};
});