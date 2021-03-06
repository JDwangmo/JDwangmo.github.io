define("spin-2.js"/*tpa=http://res.wx.qq.com/mmbizwap/en_US/htmledition/js/biz_common/utils/biz_common/utils/spin.js*/,[],function(){
"use strict";
function t(t,i){
var e,o=document.createElement(t||"div");
for(e in i)o[e]=i[e];
return o;
}
function i(t){
for(var i=1,e=arguments.length;e>i;i++)t.appendChild(arguments[i]);
return t;
}
function e(t,i,e,o){
var n=["opacity",i,~~(100*t),e,o].join("-"),r=.01+e/o*100,s=Math.max(1-(1-t)/i*(100-r),t),a=c.substring(0,c.indexOf("Animation")).toLowerCase(),l=a&&"-"+a+"-"||"";
return u[n]||(p.insertRule("@"+l+"keyframes "+n+"{0%{opacity:"+s+"}"+r+"%{opacity:"+t+"}"+(r+.01)+"%{opacity:1}"+(r+i)%100+"%{opacity:"+t+"}100%{opacity:"+s+"}}",p.cssRules.length),
u[n]=1),n;
}
function o(t,i){
var e,o,n=t.style;
for(i=i.charAt(0).toUpperCase()+i.slice(1),o=0;o<d.length;o++)if(e=d[o]+i,void 0!==n[e])return e;
return void 0!==n[i]?i:void 0;
}
function n(t,i){
for(var e in i)t.style[o(t,e)||e]=i[e];
return t;
}
function r(t){
for(var i=1;i<arguments.length;i++){
var e=arguments[i];
for(var o in e)void 0===t[o]&&(t[o]=e[o]);
}
return t;
}
function s(t,i){
return"string"==typeof t?t:t[i%t.length];
}
function a(t){
this.opts=r(t||{},a.defaults,f);
}
function l(){
function e(i,e){
return t("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e);
}
p.addRule(".spin-vml","behavior:url(#default#VML)"),a.prototype.lines=function(t,o){
function r(){
return n(e("group",{
coordsize:d+" "+d,
coordorigin:-c+" "+-c
}),{
width:d,
height:d
});
}
function a(t,a,l){
i(p,i(n(r(),{
rotation:360/o.lines*t+"deg",
left:~~a
}),i(n(e("roundrect",{
arcsize:o.corners
}),{
width:c,
height:o.width,
left:o.radius,
top:-o.width>>1,
filter:l
}),e("fill",{
color:s(o.color,t),
opacity:o.opacity
}),e("stroke",{
opacity:0
}))));
}
var l,c=o.length+o.width,d=2*c,u=2*-(o.width+o.length)+"px",p=n(r(),{
position:"absolute",
top:u,
left:u
});
if(o.shadow)for(l=1;l<=o.lines;l++)a(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
for(l=1;l<=o.lines;l++)a(l);
return i(t,p);
},a.prototype.opacity=function(t,i,e,o){
var n=t.firstChild;
o=o.shadow&&o.lines||0,n&&i+o<n.childNodes.length&&(n=n.childNodes[i+o],n=n&&n.firstChild,
n=n&&n.firstChild,n&&(n.opacity=e));
};
}
var c,d=["webkit","Moz","ms","O"],u={},p=function(){
var e=t("style",{
type:"text/css"
});
return i(document.getElementsByTagName("head")[0],e),e.sheet||e.styleSheet;
}(),f={
lines:12,
length:7,
width:5,
radius:10,
rotate:0,
corners:1,
color:"#000",
direction:1,
speed:1,
trail:100,
opacity:.25,
fps:20,
zIndex:2e9,
className:"spinner",
top:"50%",
left:"50%",
position:"absolute"
};
a.defaults={},r(a.prototype,{
spin:function(i){
this.stop();
var e=this,o=e.opts,r=e.el=n(t(0,{
className:o.className
}),{
position:o.position,
width:0,
zIndex:o.zIndex
});
if(n(r,{
left:o.left,
top:o.top
}),i&&i.insertBefore(r,i.firstChild||null),r.setAttribute("role","progressbar"),
e.lines(r,e.opts),!c){
var s,a=0,l=(o.lines-1)*(1-o.direction)/2,d=o.fps,u=d/o.speed,p=(1-o.opacity)/(u*o.trail/100),f=u/o.lines;
!function h(){
a++;
for(var t=0;t<o.lines;t++)s=Math.max(1-(a+(o.lines-t)*f)%u*p,o.opacity),e.opacity(r,t*o.direction+l,s,o);
e.timeout=e.el&&setTimeout(h,~~(1e3/d));
}();
}
return e;
},
stop:function(){
var t=this.el;
return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),
this.el=void 0),this;
},
lines:function(o,r){
function a(i,e){
return n(t(),{
position:"absolute",
width:r.length+r.width+"px",
height:r.width+"px",
background:i,
boxShadow:e,
transformOrigin:"left",
transform:"rotate("+~~(360/r.lines*d+r.rotate)+"deg) translate("+r.radius+"px,0)",
borderRadius:(r.corners*r.width>>1)+"px"
});
}
for(var l,d=0,u=(r.lines-1)*(1-r.direction)/2;d<r.lines;d++)l=n(t(),{
position:"absolute",
top:1+~(r.width/2)+"px",
transform:r.hwaccel?"translate3d(0,0,0)":"",
opacity:r.opacity,
animation:c&&e(r.opacity,r.trail,u+d*r.direction,r.lines)+" "+1/r.speed+"s linear infinite"
}),r.shadow&&i(l,n(a("#000","0 0 4px #000"),{
top:"2px"
})),i(o,i(l,a(s(r.color,d),"0 0 1px rgba(0,0,0,.1)")));
return o;
},
opacity:function(t,i,e){
i<t.childNodes.length&&(t.childNodes[i].style.opacity=e);
}
});
var h=n(t("group"),{
behavior:"url(#default#VML)"
});
return!o(h,"transform")&&h.adj?l():c=o(h,"animation"),a;
});