/* eslint-env node */function _interopDefault(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var videojs=_interopDefault(require("video.js"));var document=_interopDefault(require("global/document"));function factory(e,i){var n=!1;var l=!1;var t="Up Next";var a=30;var r=0;var d,s,o,v,c;if(i){e.upnext.title=function(e){if(e.length>1)t=e};e.upnext.offset=function(e){if(parseInt(e,10)>0)a=e};if(!k(i))if("undefined"!==i.title&&("undefined"!==i.sources||"undefined"!==i.url)&&"undefined"!==i.poster){var f=[];f[0]=i;i=f}if(k(i)){var u=[];for(var p=0;p<i.length;p++)if(i[p].title&&(i[p].sources||i[p].url)&&i[p].poster){u.push(i[p]);var h=y("img");h.src=i[p].poster;i[p].img=h}if(u.length>1){s=u[1];r=1}else s=u[0];var m=null;var g=null;var j=null;var C=null;if(0!==u.length){videojs.dom.addClass(e.el(),"vjs-up-next");e.on("timeupdate",function(){if(!videojs.dom.hasClass(e.el(),"vjs-ad-playing")&&!videojs.dom.hasClass(e.el(),"vjs-dai"))if(!(u.length<1))if(!(u.length>1&&r===u.length-1))if(!b()){if(!0!==n&&e.currentTime()>0&&e.duration()-e.currentTime()<a)I();if(n&&e.duration()-e.currentTime()>a){if(m){m.onclick=null;m.parentNode.removeChild(m);m=null}n=!1}}});e.on("ended",function(){if(!videojs.dom.hasClass(e.el(),"vjs-ad-playing")&&!videojs.dom.hasClass(e.el(),"vjs-dai"))N()});var x=function i(){if(m){m.onclick=null;m.parentNode.removeChild(m)}if(g){g.onclick=null;g.parentNode.removeChild(g)}clearInterval(o);e.off("dispose",i)};e.on("dispose",x)}}else console.log("Error: Upnext - Invalid list array")}function y(e,i,n){var l=document.createElement(e);if(i)l.className=i;if(n)l.innerHTML=n;return l}function k(e){return"[object Array]"===Object.prototype.toString.call(e)}function b(){if(e.duration()===1/0)return!0;else if("8"===videojs.browser.IOS_VERSION&&0===e.duration())return!0;return!1}function I(){if(!n)if(!l){m=y("div","vjs-upnext");var i=s.img;i.setAttribute("alt",s.title);m.appendChild(i);if(s.duration){var a=y("div","next-dur",s.duration);m.appendChild(a)}var d=y("span","upnext-right",'<span class="nextup">'+t+'</span><span class="vjs-up-title">'+s.title+"</span>");m.appendChild(d);if(s.nextURL){var o=y("a");o.href=s.nextURL;o.target="_blank";if(s.target)o.target=s.target;else o.target="_blank";m.appendChild(o)}e.el().appendChild(m);setTimeout(()=>{m.className="vjs-upnext vjs-upnext-show"},500);n=!0;m.onclick=function(){if(u[0].nextURL){if(o)o.click()}else{e.changeSource(s);m.onclick=null;e.el().removeChild(m);m=null;e.play();if(1===u.length){l=!0;videojs.dom.removeClass(e.el(),"vjs-up-next");u.splice(0,1)}else if(r<u.length-1)s=u[++r]}}}}function N(){if(0!==u.length){videojs.dom.addClass(e.controlBar.el_,"vjs-hidden");videojs.dom.addClass(e.el(),"vjs-up-next");if(1===u.length)l=!0;if(m){m.onclick=null;m.parentNode.removeChild(m);m=null}j=y("div","vjs-nextup");var i=y("div","next-close");i.innerHTML="x";j.appendChild(i);var n=y("div","next-header","<span>Up Next</span>");j.appendChild(n);g=y("div","vjs-fullnext");j.appendChild(g);var t=y("div","respo");(v=y("div","img")).style.backgroundImage="url("+s.poster+")";t.appendChild(v);g.appendChild(t);if(s.duration){var a=y("div","full-dur",s.duration);g.appendChild(a)}var o=y("div","next-title",s.title);g.appendChild(o);if(1===u.length)if(s.nextURL){(c=y("a")).href=s.nextURL;if(s.target)c.target=s.target;else c.target="_blank";g.appendChild(c)}var f=y("div","progress");f.innerHTML='<svg viewBox="0 0 84 84" preserveAspectRatio="xMinYMin meet"><circle class="circle1" cx="40" cy="40" r="40"></circle><circle id="circle2" class="circle2" cx="40" cy="40" r="40"></circle><g style="transform: translate(77%,26%) rotate(90deg) scale(3, 3);fill: #fff;"><path d="M3 12.2V3.8c0-.8.8-1.3 1.5-.9l7.1 4.2c.6.4.6 1.3 0 1.7L4.5 13c-.7.5-1.5 0-1.5-.8z"></path></g></svg>';g.appendChild(f);t.onclick=function(){if(1===u.length&&c)c.click();else{s=u[r];L()}};i.onclick=function(){clearInterval(x);g.onclick=null;if(j){j.parentNode.removeChild(j);j=null}if(C){C.parentNode.removeChild(C);C=null}e.play();e.one("playing",function(){videojs.dom.removeClass(e.el(),"vjs-up-next");videojs.dom.removeClass(e.controlBar.el_,"vjs-hidden");l=!0;if(1===u.length){l=!0;u.splice(0,1);s=null}})};C=y("div","next-overlay");var p;var h=2*Math.PI*170;e.el().appendChild(C);e.el().appendChild(j);var x;if(u.length>1){var k="vjs-nav-prev";var b="vjs-nav-next";if(0===r)k="vjs-nav-prev disabled";if(r===u.length-1)b="vjs-nav-next disabled";var I=y("div",k,'<div class="icon"></div>');var N=y("div",b,'<div class="icon"></div>');C.appendChild(I);C.appendChild(N);N.onclick=function(){if(!(++r>u.length-1)){if(r===u.length-1)videojs.dom.addClass(N,"disabled");videojs.dom.removeClass(I,"disabled");clearInterval(x);if(p)p.removeAttribute("stroke-dasharray");A(r,"next")}else r=u.length-1};var A=function(e,i){var n=y("div","img");n.style.backgroundImage="url("+u[e].poster+")";if("next"===i)n.style.left="100%";else n.style.left="-100%";var l=100;var r=-100;var d;t.appendChild(n);function s(){l=l-3;if(!l<=0){if(l>0)n.style.left=l+"%";d=requestAnimationFrame(s)}else{cancelAnimationFrame(d);n.style.left=0;v.parentNode.removeChild(v);v=n;n=null}}function c(){r+=3;if(!r>=0){if(r<0)n.style.left=r+"%";d=requestAnimationFrame(c)}else{cancelAnimationFrame(d);n.style.left=0;v.parentNode.removeChild(v);v=n;n=null}}if("next"===i)d=requestAnimationFrame(s);else d=requestAnimationFrame(c);o.innerHTML=u[e].title;if(u[e].duration&&a){a.innerHTML=u[e].duration;videojs.dom.removeClass(a,"vjs-hidden")}else if(a)videojs.dom.addClass(a,"vjs-hidden")}}I.onclick=function(){if(!(--r<0)){clearInterval(x);if(p)p.removeAttribute("stroke-dasharray");if(0===r)videojs.dom.addClass(I,"disabled");videojs.dom.removeClass(N,"disabled");A(r,"prev")}else r=0};d=0;if(r!==u.length-1||1===u.length)x=setInterval(function(){p=document.getElementById("circle2");if(d<.25){p.setAttribute("stroke-dasharray",h*d+" "+h*(1-d));d+=.001}else{clearInterval(x);if(1===u.length&&c)c.click();else L()}},25)}function L(){clearInterval(x);g.onclick=null;if(j){j.parentNode.removeChild(j);j=null}if(C){C.parentNode.removeChild(C);C=null}e.changeSource(s);e.play();e.one("playing",function(){videojs.dom.removeClass(e.el(),"vjs-up-next");videojs.dom.removeClass(e.controlBar.el_,"vjs-hidden");if(1===u.length){l=!0;u.splice(0,1);s=null}});if(u.length>1)if(r<u.length-1)s=u[++r]}}}var registerPlugin=videojs.registerPlugin||videojs.plugin;var plugin=function(e){this.ready(function(){factory(this,e)})};registerPlugin("upnext",plugin);module.exports = plugin;