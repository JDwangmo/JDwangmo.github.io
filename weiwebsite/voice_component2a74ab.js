define("voice_component-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/pages/voice_component.js*/,["event-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/biz_common/dom/event.js*/,"tmpl-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/biz_common/tmpl.js*/,"loadscript-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/pages/loadscript.js*/,"music_player-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/pages/music_player.js*/,"class-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/biz_common/dom/class.js*/,"report-5.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/pages/report.js*/],function(t){
"use strict";
function o(t){
this._o={
type:0,
comment_id:"",
src:"",
mid:"",
songId:"",
autoPlay:!1,
duration:0,
debug:!1,
needVioceMutex:!0,
appPlay:!0,
title:"",
singer:"",
epname:"",
coverImgUrl:"",
webUrl:[location.protocol,"//mp.weixin.qq.com/s?referFrom=#referFrom#&songid=#songId#&__biz=",window.biz,"&mid=",window.mid,"&idx=",window.idx,"&sn=",window.sn,"#wechat_redirect"].join(""),
playingCss:"",
playCssDom:"",
playArea:"",
progress:"",
detailUrl:"",
detailArea:""
},this._init(t);
}
function e(t,o,e,i){
y.num++,o.musicSupport=y.musicSupport,o.show_not_support=!1,y.musicSupport||1!=y.num||(o.show_not_support=!0);
var r=document.createElement("div"),n="";
n=i?c.render(t,o):c.tmpl(t,o),r.innerHTML=n;
var p=e.parentNode;
p&&(p.lastChild===e?p.appendChild(r.children[0]):p.insertBefore(r.children[0],e.nextSibling));
}
function i(){
"undefined"==typeof window.reportVoiceid&&(window.reportVoiceid=[]),"undefined"==typeof window.reportMid&&(window.reportMid=[]);
}
function r(){
a.on(window,"unload",n);
}
function n(){
for(var t in y.reportData)l.musicreport({
data:y.reportData[t]
});
}
function p(t){
var o=t.id,e="https://open.music.qq.com/fcgi-bin/fcg_music_get_song_info_weixin.fcg?song_id="+o+"&format=json&app_id=100311669&app_key=55d6cdaee6fb3a41275a48067f8d7638&device_id=weixin&file_type=mp3&qqmusic_fromtag=50&callback=get_song_info_back";
e=e.replace("#id#",t.id),d({
url:e,
timeout:3e4,
callbackName:"get_song_info_back",
callback:function(o){
if(!o||"undefined"==typeof o.ret)return void("function"==typeof t.onError&&t.onError({
errcode:1
}));
var e=1;
1001==o.ret&&(e=0),t.onSuc({
status:e
});
},
onerror:function(o){
var e=4;
switch(1*o){
case 400:
e=2;
break;

case 500:
e=3;
break;

default:
e=4;
}
"function"==typeof t.onError&&t.onError({
errcode:e
});
}
});
}
function s(t){
return new o(t);
}
var a=t("event-4.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/biz_common/dom/event.js*/),c=t("tmpl-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/biz_common/tmpl.js*/),d=t("loadscript-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/pages/loadscript.js*/),u=t("music_player-1.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/pages/music_player.js*/),_=t("class-3.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/biz_common/dom/class.js*/),l=t("report-5.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/pages/report.js*/),y={
musicSupport:u.getSurportType(),
reportData:{},
posIndex:{},
qqMusiceSongId:"http://thirdparty.gtimg.com/#songId#.m4a?fromtag=38&songid=#songId#",
qqMusiceMid:"http://thirdparty.gtimg.com/C100#mid#.m4a?fromtag=38&songid=#songId#",
num:0
};
return i(),r(),o.prototype._init=function(t){
this._extend(t),this._g={
copyright:-1,
check_copyright:!1
},this._initSrc(),this._initQQmusicLyric(),this._initReportData(),this._initPlayer(),
this._playEvent();
},o.prototype._initSrc=function(){
var t=this._o;
t.src||(0==t.type||1==t.type)&&(t.mid?t.src=y.qqMusiceMid.replace("#mid#",t.mid).replace(/#songId#/g,t.songId||""):t.songId&&(t.src=y.qqMusiceSongId.replace(/#songId#/g,t.songId||"")));
},o.prototype._initQQmusicLyric=function(){
var t=this._o;
t.webUrl=0==t.type||1==t.type?t.webUrl.replace("#songId#",t.songId||"").replace("#referFrom#","http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/pages/music.qq.com"):t.webUrl.replace("#songId#","").replace("#referFrom#","");
},o.prototype._initReportData=function(){
var t=this._o;
2==t.type||3==t.type?window.reportVoiceid.push(t.songId):(0==t.type||1==t.type)&&window.reportMid.push(t.songId),
"undefined"==typeof y.reportData[t.type]&&(y.reportData[t.type]=l.getMusicReportData(t),
y.posIndex[t.type]=0),this._g.posIndex=y.posIndex[t.type]++;
var o=y.reportData[t.type];
o.musicid.push(t.songId),o.commentid.push(t.comment_id),o.hasended.push(0),o.mtitle.push(t.title),
o.detail_click.push(0),o.duration.push(parseInt(1e3*t.duration)),o.errorcode.push(0),
o.play_duration.push(0);
},o.prototype._initPlayer=function(){
y.musicSupport&&(this._o.onStatusChange=this._statusChangeCallBack(),this._o.onTimeupdate=this._timeupdateCallBack(),
this._o.onError=this._errorCallBack(),this.player=new u.init(this._o));
},o.prototype._playEvent=function(){
var t=this,o=this._o,e=this._g;
if(y.musicSupport){
var i=0;
2==o.type||3==o.type?i=3:(0==o.type||1==o.type)&&(i=1),a.tap(o.playArea,function(){
return _.hasClass(o.playCssDom,o.playingCss)?(t.player.stop(),l.report({
type:i,
comment_id:o.comment_id,
voiceid:o.songId,
action:5
})):3==i?t._playMusic(3):1==i&&t._checkCopyright(),!1;
});
}
o.detailUrl&&o.detailArea&&a.tap(o.detailArea,function(){
y.reportData[o.type].detail_click[e.posIndex]=1,window.location.href=o.detailUrl;
});
},o.prototype._checkCopyright=function(){
var t=this,o=this._o,e=this._g;
return 1==e.copyright?void this._playMusic(1):0==e.copyright?void alert("该歌曲版权已过期，无法播放"):void(e.check_copyright||(e.check_copyright=!0,
p({
id:o.songId,
onSuc:function(o){
e.check_copyright=!1,1==o.status?(e.copyright=1,t._playMusic(1)):(e.copyright=0,
alert("该歌曲版权已过期，无法播放"),t.player.monitor("no_copyright"));
},
onError:function(o){
e.check_copyright=!1,t.player.monitor(1==o.errcode?"copyright_cgi_err":2==o.errcode?"copyright_net_err":3==o.errcode?"copyright_timeout":"copyright_other_err");
}
})));
},o.prototype._playMusic=function(t){
var o=this._o,e=this._g;
this.player.play(0),y.reportData[o.type].hasended[e.posIndex]=1,l.report({
type:t,
comment_id:o.comment_id,
voiceid:o.songId,
action:4
});
},o.prototype._extend=function(t){
for(var o in t)this._o[o]=t[o];
},o.prototype._statusChangeCallBack=function(){
var t=this;
return function(o,e){
t._updatePlayerCss(this,e);
};
},o.prototype._timeupdateCallBack=function(){
var t=this,o=this._o,e=this._g;
return function(i,r){
t._updateProgress(this,r),0!=r&&(y.reportData[o.type].play_duration[e.posIndex]=parseInt(1e3*r));
};
},o.prototype._errorCallBack=function(){
var t=this,o=this._o,e=this._g;
return function(i,r){
y.reportData[o.type].errorcode[e.posIndex]=r,t._updatePlayerCss(this,3);
};
},o.prototype._updatePlayerCss=function(t,o){
var e=this._o,i=e.playCssDom,r=e.progress;
2==o||3==o?(_.removeClass(i,e.playingCss),!!r&&(r.style.width=0)):1==o&&_.addClass(i,e.playingCss);
},o.prototype._updateProgress=function(t,o){
var e=this._o,i=e.progress,r=t.getDuration();
r&&i&&(i.style.width=this._countProgress(r,o));
},o.prototype._countProgress=function(t,o){
return o/t*100+"%";
},{
init:s,
renderPlayer:e
};
});