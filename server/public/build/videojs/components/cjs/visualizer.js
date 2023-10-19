"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var videojs=_interopDefault(require("video.js")),defaults={video:!1,color1:"#ffcc00",color2:"#ff0000",capsColor:"#fff",caps:!1,bottom:0,height:50,f_play:!1};const onPlayerReady=(e,t)=>{var i=videojs.browser.IS_IPHONE,o=videojs.browser.IS_POD,r=t;if(function(){window.AudioContext=window.AudioContext||window.webkitAudioContext;return!!window.AudioContext}()&&!0!==i&&!0!==o){var n,a,l,s,c,d,f,u,h=!0,v=new WeakMap,w=50,m=0;t.height>0&&t.height<=100&&(w=t.height);t.bottom>0&&(m=t.bottom+"%");var p=".vjs-visualizer{position:absolute;left:0;padding:0 10px;bottom:"+m+";width:100%;height:"+w+"%;pointer-events:none;}",g=document.head||document.getElementsByTagName("head")[0],y=document.createElement("style");y.type="text/css";y.appendChild(document.createTextNode(p));g.appendChild(y);(l=document.createElement("canvas")).className="vjs-visualizer";l.id="visualizer";e.el().insertBefore(l,e.controlBar.el_);e.on("loadeddata",function(){n=!1;var t=e.currentType();console.log("TYPE:"+t);n=t.indexOf("audio")>-1;r.f_play=!1;r.video&&(n=!0)});function A(){var t=e.$(".vjs-tech");try{void 0===a&&(a=new AudioContext);if(v.has(t))f=v.get(t);else{f=a.createMediaElementSource(t);v.set(t,f)}u=a.createAnalyser();l.width=l.offsetWidth;l.height=e.el().offsetHeight;d=l.getContext("2d");f.connect(u);u.connect(a.destination)}catch(e){}}e.on("playing",function(){if(!r.f_play){void 0!==e.currentSource().av&&(h=!1);var t=e.el().querySelector(".vjs-background-bar");r.f_play=!0;if(n&&h&&t){A();function i(e,t){e=e.replace("#","");var i=parseInt(3===e.length?e.slice(0,1).repeat(2):e.slice(0,2),16),o=parseInt(3===e.length?e.slice(1,2).repeat(2):e.slice(2,4),16),r=parseInt(3===e.length?e.slice(2,3).repeat(2):e.slice(4,6),16);return t?"rgba("+i+", "+o+", "+r+", "+t+")":"rgb("+i+", "+o+", "+r+")"}r.color1.indexOf("#")<0&&(r.color1="#"+r.color1);r.color2.indexOf("#")<0&&(r.color2="#"+r.color2);var o="#ffcc00",a="#ff0000",f="#fff",v=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;v.test(r.capsColor)&&(f=r.capsColor);v.test(r.color1)&&(o=r.color1);v.test(r.color2)&&(a=r.color2);var w=i(o),m=i(a),p=i(o,.2),g=[];function y(){if(n){if("VIDEO"===e.$(".vjs-tech").nodeName){var t=e.el().querySelector(".vjs-background-bar");t&&(t.style.height="10%")}u.fftSize=256;s=u.frequencyBinCount;l.width=e.el().offsetWidth-20;var i=l.width/s*1.2;i<6&&(i=6);var o,a=1;l.width<500&&(a=2);window.RequestAnimationFrame=window.requestAnimationFrame(y)||window.msRequestAnimationFrame(y)||window.mozRequestAnimationFrame(y)||window.webkitRequestAnimationFrame(y);var h=0;c=new Uint8Array(s);u.getByteFrequencyData(c);d.clearRect(0,0,l.width,l.height);for(var v=0;v<s;v+=a){v=parseInt(v,10);o=c[v];if(h+i<l.width){var A=d.createLinearGradient(0,0,0,.5*l.height);A.addColorStop(1,w);A.addColorStop(.5,m);A.addColorStop(0,m);var b=l.height/1.5-o,R=l.height/1.5;d.fillStyle=A;d.fillRect(h,b,i,o);if(r.caps)if(g[h]){d.fillStyle=f;if(b<g[h]){g[h]=b;b!==R&&d.fillRect(h,b-6,i,3)}else{g[h]=g[h]+1;g[h]<R&&d.fillRect(h,g[h]-6,i,3)}}else g[h]=b;d.fillStyle=p;d.fillRect(h,l.height/1.5,i,o/2);h+=i+4}}}else try{d.clearRect(0,0,l.width,l.height)}catch(e){}}window.RequestAnimationFrame=window.requestAnimationFrame(y)||window.msRequestAnimationFrame(y)||window.mozRequestAnimationFrame(y)||window.webkitRequestAnimationFrame(y)}}})}};var version="1.0",registerPlugin=videojs.registerPlugin||videojs.plugin;const visualizer=function(e){this.ready(()=>{onPlayerReady(this,videojs.mergeOptions(defaults,e))})};registerPlugin("visualizer",visualizer);visualizer.VERSION=version;module.exports=visualizer;