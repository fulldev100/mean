/* eslint-env node */function _interopDefault(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var videojs=_interopDefault(require("video.js"));const defaults={width:160,height:90,basePath:"",src:""},onPlayerReady=(e,t)=>{function s(e){var t,s,i;s=e.indexOf("#");if(-1===s)return{src:e,w:0,h:0,x:0,y:0};t=e.substring(0,s);i=e.substring(s+1);if("xywh="!==i.substring(0,5))return{src:defaults.basePath+t,w:0,h:0,x:0,y:0};var r=i.substring(5).split(",");return{src:defaults.basePath+t,w:parseInt(r[2],10),h:parseInt(r[3],10),x:parseInt(r[0],10),y:parseInt(r[1],10)}}defaults.basePath="";var i,r,o,d,n,a,l,h,u,v,c;if(""!==t.basePath)defaults.basePath=t.basePath;if(t.width&&t.height){defaults.width=t.width;defaults.height=t.height}var f=t;e.on("medialoaded",function(t){e.sprite=!1;var m=e.textTracks().length;if(0!==m){for(var p=!1,g=0;g<m;){if("metadata"===e.textTracks()[g].kind&&e.textTracks()[g].src){p=!0;v=e.textTracks()[g];if(null==v.cues)return;var w=v&&v.cues.length;c=v.cues;v.mode="hidden";break}g++}if(!0===p){if(!(w<1)){g=0;e.sprite=!0;n=e.controlBar.progressControl;a=e.el_.querySelector(".vjs-progress-holder");var y=e.el_.querySelector(".vjs-thumb-tooltip");if(null!==y)y.parentNode.removeChild(y);var j=e.el_.querySelector(".vjs-thumb-image");if(null!==j)j.parentNode.removeChild(j);var b=e.el_.querySelector(".vjs-thumbnail-holder");if(null!==b)b.parentNode.removeChild(b);(i=document.createElement("div")).className="vjs-thumbnail-holder";var x=document.createElement("div");x.className="vjs-thumb-tooltip";(r=document.createElement("img")).className="vjs-thumb-image";i.appendChild(r);i.appendChild(x);n.el().appendChild(i);if(e.shadowSlide){if(!e.el_.querySelector(".vjs-thumb-poster")){(d=document.createElement("div")).className="vjs-thumb-poster";o=document.createElement("canvas");d.appendChild(o);e.el_.insertBefore(d,e.el_.querySelector(".vjs-poster"))}}l=e.duration();e.on("durationchange",function(t){l=e.duration()});e.on("loadedmetadata",function(t){l=e.duration()});var E=this.el_.querySelector(".vjs-play-progress").querySelector(".vjs-time-tooltip");if(E)videojs.dom.addClass(E,"vjs-abs-hidden");var L=n.el().querySelector(".vjs-mouse-display");if(L)L.style.opacity=0;h=function(t){t.preventDefault();l=e.duration();var a=n.el().querySelector(".vjs-progress-holder"),h=n.el().querySelector(".vjs-play-progress"),u=a.getBoundingClientRect(),v=null;if(t.pageX)v=t.pageX;else if(t.changedTouches)v=t.changedTouches[0].pageX||t.touches[0].clientX;var m=v-u.left;if(0===m&&videojs.holderdown&&h.offsetWidth>0);if(m<0)m=0;if(m>a.offsetWidth)m=a.offsetWidth;var p=m/a.offsetWidth*l;x.innerHTML=q(p,l);var w=c.length;g=0;for(var y=!1;g<w;){var j=c[g];if(j.startTime<=p&&j.endTime>=p){y=!0;var b=s(j.text);break}g++}if(!0===y){i.classList.remove("vjs-thumb-hidden");if(r.src.indexOf(b.src)<0)r.src=b.src;if(0===b.w){b.w=f.width;r.style.width=b.w+"px"}if(0===b.h){b.h=f.height;r.style.height=b.h+"px"}if(i.style.width!==b.w||i.style.height!==b.h){i.style.width=b.w+"px";i.style.height=b.h+"px"}r.style.left=-b.x+"px";r.style.top=-b.y+"px";var E=b.w,L=E/2,S=n.el().offsetWidth,P=e.el_.querySelector(".vjs-progress-holder").offsetLeft,C=L-P;if(m+L+P>S)m=S-E;else if(m<C)m=0;else m-=C;i.style.left=parseInt(m,10)+"px";i.classList.add("vjs-thumb-show");if(videojs.holderdown&&e.shadowSlide){if(!e.el_.querySelector(".vjs-thumb-poster")){(d=document.createElement("div")).className="vjs-thumb-poster";o=document.createElement("canvas");d.appendChild(o);e.el_.insertBefore(d,e.el_.querySelector(".vjs-poster"))}var _=o.getContext("2d");o.width=e.el_.offsetWidth;o.height=e.el_.offsetHeight;d.style.width=o.width+"px";d.style.height=o.height+"px";_.clearRect(0,0,o.width,o.height);_.drawImage(r,b.x,b.y,b.w,b.h,0,0,o.width,o.height)}}else i.classList.add("vjs-thumb-hidden")};var S=!1,P=Object.defineProperty({},"passive",{get:function(){S=!0;return!0}});window.addEventListener("testPassive",null,P);window.removeEventListener("testPassive",null,P);u=function(e){if(!0!==videojs.holderdown)i.classList.remove("vjs-thumb-show")};a.addEventListener("mousemove",h);a.addEventListener("mouseleave",u);a.addEventListener("mousedown",N);a.addEventListener("touchstart",k,S?{passive:!1}:!1)}}else if(i)videojs.dom.addClass("div","vjs-hidden")}else if(i)videojs.dom.addClass("div","vjs-hidden");function q(e,t){e=e<0?0:e;let s=Math.floor(e%60),i=Math.floor(e/60%60),r=Math.floor(e/3600);const o=Math.floor(t/60%60),d=Math.floor(t/3600);if(isNaN(e)||e===1/0)r=i=s="-";return(r=r>0||d>0?r+":":"")+(i=((r||o>=10)&&i<10?"0"+i:i)+":")+(s=s<10?"0"+s:s)}function C(){i.classList.remove("vjs-thumb-show");if(e.shadowSlide){d.removeAttribute("style");o.width=0;o.height=0}}function _(){videojs.holderdown=!1;document.removeEventListener("mousemove",h);document.removeEventListener("mouseup",_);C()}function N(e){videojs.holderdown=!0;document.addEventListener("mousemove",h);document.addEventListener("mouseup",_);h(e)}function T(){a.removeEventListener("touchmove",h);a.removeEventListener("touchend",T);C()}function k(e){videojs.holderdown=!1;a.addEventListener("touchmove",h);a.addEventListener("touchend",T)}})},thumbnails=function(e){this.ready(()=>{onPlayerReady(this,videojs.mergeOptions(defaults,e))})},registerPlugin=videojs.registerPlugin||videojs.plugin;registerPlugin("thumbnails",thumbnails);thumbnails.VERSION="1.1";module.exports=thumbnails;
