define("voice-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/voice.js*/,["html-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/string/html.js*/,"voice_component-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/pages/voice_component.js*/],function(e){
"use strict";
function i(){
var e=g("js_content");
return e?(d._oElements=e.getElementsByTagName("mpvoice")||[],d._oElements.length<=0?!1:!0):!1;
}
function t(){
d.musicLen=d._oElements.length;
}
function n(){
for(var e=0,i=0;i<d.musicLen;i++){
var t=d._oElements[i],n={};
n.voiceid=a(decodeURIComponent(t.getAttribute("voice_encode_fileid")||"")),n.voiceid=n.voiceid.replace(/&#61;/g,"="),
n.src=d.srcRoot.replace("#meidaid#",n.voiceid),n.voiceid&&"undefined"!=n.voiceid&&(o(t,n,e),
e++);
}
}
function o(e,i,t){
i.duration=1*e.getAttribute("play_length")||0,i.duration_str=s(i.duration),i.posIndex=t,
i.title=a(decodeURIComponent(e.getAttribute("name")||"")),p.renderPlayer("voice_tpl",i,e,!0),
c(i),d.musicList[i.voiceid+"_"+i.posIndex]=i;
}
function c(e){
var i=e.voiceid+"_"+e.posIndex,t=r(e.title);
e.player=p.init({
type:2,
songId:e.voiceid,
comment_id:"",
src:e.src,
duration:1*(e.duration/1e3).toFixed(2),
title:t.length>8?t.substr(0,8)+"...":t,
singer:window.nickname?window.nickname+"的语音":"公众号语音",
epname:"来自文章",
coverImgUrl:window.__appmsgCgiData.hd_head_img,
playingCss:"playing",
playCssDom:g("voice_main_"+i),
playArea:g("voice_main_"+i),
progress:g("voice_progress_"+i)
});
}
function r(e){
return e=(e||"").replace(/&#96;/g,"`").replace(/&#61;/g,"=").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
}
function a(e){
return e=(e||"").replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/=/g,"&#61;").replace(/`/g,"&#96;");
}
function s(e){
if(isNaN(e))return"0:00";
var i=new Date(0),t=new Date(1*e),n=t.getHours()-i.getHours(),o=t.getMinutes()+60*n,c="i:ss".replace(/i|I/g,o).replace(/ss|SS/,l(t.getSeconds(),2));
return c;
}
function l(e,i){
for(var t=0,n=i-(e+"").length;n>t;t++)e="0"+e;
return e+"";
}
function g(e){
return document.getElementById(e);
}
e("html-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/string/html.js*/);
var p=e("voice_component-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/pages/voice_component.js*/),d={
musicList:{},
musicLen:0,
srcRoot:location.protocol+"//res.wx.qq.com/voice/getvoice?mediaid=#meidaid#"
};
if(i())return t(),n(),d.musicList;
});