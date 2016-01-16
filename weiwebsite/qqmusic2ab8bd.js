define("qqmusic-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/appmsg/qqmusic.js*/,["html-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/string/html.js*/,"voice_component-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/pages/voice_component.js*/],function(e){
"use strict";
function i(){
var e=o("js_content");
return e?(g._oElements=e.getElementsByTagName("qqmusic")||[],g._oElements.length<=0?!1:!0):!1;
}
function t(){
g.musicLen=g._oElements.length;
}
function n(){
for(var e=0,i=0;i<g.musicLen;i++){
var t=g._oElements[i],n={};
n.musicid=s(t.getAttribute("musicid")||""),n.comment_id=s(t.getAttribute("commentid")||""),
n.musicid&&"undefined"!=n.musicid&&n.comment_id&&"undefined"!=n.comment_id&&(m(t,n,e),
e++);
}
}
function m(e,i,t){
i.media_id=s(e.getAttribute("mid")||""),i.duration=e.getAttribute("play_length")||0,
i.posIndex=t,i.musicImgPart=s(e.getAttribute("albumurl")||""),i.music_img=g.imgroot+i.musicImgPart,
i.audiourl=s(e.getAttribute("audiourl")||""),i.singer=s(e.getAttribute("singer")||""),
i.music_name=s(e.getAttribute("music_name")||""),a.renderPlayer("qqmusic_tpl",i,e,!0),
c(i),g.musicList[i.musicid+"_"+i.posIndex]=i;
}
function c(e){
var i=e.musicid+"_"+e.posIndex,t=e.comment_id+"_"+e.posIndex,n=["http://i.y.qq.com/v8/playsong.html?songmid=",e.media_id,,"&ADTAG=weixin_gzh#wechat_redirect"].join(""),m=u(e.music_name);
e.player=a.init({
type:0,
comment_id:e.comment_id,
mid:e.media_id,
songId:e.musicid,
duration:1*(e.duration/1e3).toFixed(2),
title:m.length>8?m.substr(0,8)+"...":m,
singer:window.nickname?window.nickname+"推荐的歌":"公众号推荐的歌",
epname:"QQ音乐",
coverImgUrl:e.music_img,
playingCss:"qqmusic_playing",
playCssDom:o("qqmusic_main_"+t),
playArea:o("qqmusic_play_"+i),
detailUrl:n,
detailArea:o("qqmusic_home_"+i)
});
}
function u(e){
return e=(e||"").replace(/&#96;/g,"`").replace(/&#61;/g,"=").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
}
function s(e){
return e=(e||"").replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/=/g,"&#61;").replace(/`/g,"&#96;");
}
function r(){}
function o(e){
return document.getElementById(e);
}
e("html-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/biz_common/utils/string/html.js*/);
var a=e("voice_component-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/appmsg/pages/voice_component.js*/),g={
imgroot:"https://imgcache.qq.com/music/photo/mid_album_68",
musicList:{},
musicLen:0
};
if(i())return t(),n(),r(),g.musicList;
});