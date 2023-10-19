/* eslint-env node */function _interopDefault(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var videojs=_interopDefault(require("video.js"));var document=_interopDefault(require("global/document"));function vrollInit(e,i){var t,n=[],r=!1,o=!1,l=!1,s=!1,a=!1,f=!1,d=!1,u=!1,c="undefined",v=0,p=0,m=0,g=!1,h=e.$(".vjs-tech");videojs.isAd=!1;var y,j=videojs.dom,k=e.el(),T=.1,b=videojs.browser,C=null,P=!1,S=null,A=null,I=null,_=null,O=null,x=null;videojs.vrollplugin=!0;function N(e){return e}function E(e){return"[object Array]"===Object.prototype.toString.call(e)}var M=function(e,i){try{return e.querySelector(i)}catch(e){N(e)}},q=function(e,i){var t=document.createElement(e);if("undefined"!==typeof i)if(""!==i)t.className=i;return t};function z(){if(e.duration()===1/0)return!0;else if("8"===b.IOS_VERSION&&0===e.duration())return!0;return!1}var B=!0;if(!E(i)){var H=i;if(H.src)if(H.src.length>5){if(H.offset){if(H.offset.indexOf("%")>-1)if(z())B=!1}else H.offset=0;if(B)(i=[])[0]=H}}if(E(i))for(var L=0,w=0;w<i.length;w++){var D=i[w];if(D.src&&"undefined"!==D.offset){D.loaded=!1;L=0;try{L=n[w].offset.indexOf("%")}catch(e){N(e)}if(L>0&&z())L=1;else n.push(D)}}e.ready(function(){_=M(e.el_,".vjs-loading-spinner");S=M(e.el_,".vjs-replay-button");if(n.length>0){t=q("a","vast-blocker vjs-hidden");e.el_.appendChild(t);var i=function(e){var i=e.el().querySelector(".vjs-tech"),t={ended:e.ended(),src:e.currentSrc(),currentTime:e.currentTime(),type:e.currentType(),currentSource:e.currentSource(),playing:!e.paused(),suppressedTracks:b(e)};if(t.ended)t.currentTime=e.duration();if(i)t.style=i.getAttribute("style");return t},b=function(e){var i=e.remoteTextTracks?e.remoteTextTracks():[];if(i&&E(i.tracks_))i=i.tracks_;if(!E(i))i=[];var t=[];i.forEach(function(e){t.push({track:e,mode:e.mode});e.mode="disabled"});return t},B=function(){O.suppressedTracks.forEach(function(e){e.track.mode=e.mode})},H=function(e){var i=e.el().querySelector(".vjs-tech");if("style"in O)i.setAttribute("style",O.style||"");e.one("contentloadedmetadata",B);var t=function(){if(z())L();else{L();e.currentTime(O.currentTime)}};i.poster="";e.src(O.currentSource);e.load();B();t()},L=function(){var i=e.play();if(void 0!==i)i.then(function(){}).catch(()=>{e.muted(!0);e.play()})};e.vroll.reset=function(){f=!1;s=!1;j.removeClass(k,"vjs-ad-playing");e.one("playing",function(){for(var e=0;e<n.length;e++)n[e].loaded=!1})};if(0===parseInt(n[0].offset,10))if(e.offline)e.isPreroll=!1;else{e.isPreroll=!0;if(!0!==u){u=!0;m=e.volume();e.volume(0)}e.one("play",function(){if(e.isPreroll){var i=M(k,".vjs-poster");C=q("div","vjs-black-poster");k.insertBefore(C,i.nextSibling);e.isPreroll=!1}})}e.on("loadedmetadata",function(){if(!e.isOffline){if(!f){f=!0;if(!(o===z()))var b=e.duration();if(n.length>0&&!0!==a){a=!0;for(var E=0;E<n.length;E++){n[E].method="";if(!o){var B=0;try{B=n[E].offset.indexOf("%",0)}catch(e){N(e)}if(B>0){var L=parseInt(n[E].offset,10);if(100===L||"end"===n[E]){n[E].method="postroll";A=n[E]}else n[E].offset=b*(L/100)}else n[E].offset=parseInt(n[E].offset,10)}}}if(n.length>0){e.on("timeupdate",function(){if(videojs.dom.hasClass(k,"vjs-has-started")&&!0!==l&&!0!==e.isOffline&&!0!==z())$(e.currentTime())});var w=function(){if(l){clearTimeout(p);d=!1}else{$(T+=.5);p=setTimeout(w,500)}};if(z()){e.on("pause",function(){clearTimeout(p);d=!1});e.on("playing",function(){var i=videojs.dom.hasClass(k,"vjs-has-started");P=i;if(i&&!0!==r&&n.length>0&&!0!==e.isOffline&&!0!==d){d=!0;p=setTimeout(w,500)}})}var D=function(){j.addClass(S,"vjs-ad-hidden")},R=function(){if(!0!==r&&null!=A&&!0!==A.loaded){A.loaded=!0;V(A)}e.off("ended",R);setTimeout(function(){j.removeClass(S,"vjs-ad-hidden")},500)};e.on("ended",R);e.one("play",D);var V=function(t){r=!0;t.loaded=!0;c=t;s=!0;var o={src:t.src,type:t.type};O=i(e);j.addClass(_,"vjs-ad-hidden");e.src(o);setTimeout(function(){g=e.muted();if(c.muted)e.muted(!0);setTimeout(function(){e.on("error",W);e.load();if(t===n[0]&&e.isPreroll){if(P)e.play()}else if(!e.isPreroll)e.play();e.one("loadeddata",F)},200);if(c.skip>0)v=parseInt(c.skip,10);else v=0;if(v>0)Q()},200)};if(e.isPreroll){if(!0!==u){u=!0;m=e.volume();e.volume(0)}if(!0!==z())V(n[0])}var $=function(i){if(!r&&!l){var t=i;if(null==x)x=e.muted();if(t>0)M(e.el_,".vjs-poster").removeAttribute("style");for(var o=0;o<n.length;o++){var s=n[o];if(t>=s.offset)if(!0!==r&&!0!==n[o].loaded){videojs.log.level("off");V(s)}}}},F=function(){e.off("loadeddata",F);e.on("timeupdate",X);e.one("ended",U);e.one("playing",Y)};t.onclick=function(){e.trigger("vroll",{id:c.id,action:"clicked"})};var G=function(){return e.paused()},J=function(){if(I)e.el_.removeChild(I);I=null;var i=c.offset;c.loaded=!0;e.isPreroll=!1;var o=!1;j.addClass(k,"vjs-has-started");for(var a=0;a<n.length;a++){if(n[a].offset===i&&!0!==n[a].loaded){e.off("timeupdate",X);e.off("ended",U);e.off("error",W);r=!0;l=!0;n[a].loaded=!0;videojs.isAd=!0;j.addClass(k,"vjs-ad-playing");c=n[a];s=!0;var f={src:c.src,type:c.type};j.addClass(_,"vjs-ad-hidden");e.src(f);t.className="vast-blocker";if("undefined"!==typeof c.href){t.removeAttribute("style");t.href=c.href;t.target="_blank"}else t.style.pointerEvents="none";g=e.muted();if(c.muted)e.muted(!0);setTimeout(function(){e.on("error",W);e.load();e.play();e.one("loadeddata",F)},200);if(c.skip>0)v=parseInt(c.skip,10);else v=0;if(v>0)Q();o=!0}if(o)break}if(!0!==o){e.off("timeupdate",X);e.off("ended",U);e.off("error",W);e.off("playing",Y);r=!1;s=!1;l=!1;t.className="vast-blocker vjs-hidden";e.one("playing",function(){setTimeout(function(){j.removeClass(_,"vjs-ad-hidden")},200)});j.addClass(k,"vjs-has-started");h.poster="";j.removeClass(k,"vjs-ad-playing");videojs.isAd=!1;H(e,O);if(!0!==e.muted())g=!1;e.muted(g)}},K=function(i){i=i>0?i:0;if(v>0){var t=Math.ceil(v-i);j.removeClass(I,"vjs-hidden");if(t>0){var n=e.localize("Skip Ad in %%TIME%%");y.innerHTML=n.replace("%%TIME%%",t)}else if("vast-skip-button enabled"!==I.className){I.className="vast-skip-button enabled";I.innerHTML=e.localize("Skip Ad")}}},Q=function(){if(I)I.patentNode.removeChild(I);(I=q("div","vast-skip-button vjs-hidden")).id="adSkipButton";y=q("p","vast-skip-button-text");I.appendChild(y);e.el_.appendChild(I);I.onclick=function(e){i(e)};function i(i){i.preventDefault();i.stopPropagation();if((" "+I.className+" ").indexOf(" enabled ")>=0){e.trigger("vroll",{id:c.id,action:"skipped"});J()}}},U=function(){if(r){e.trigger("vroll",{id:c.id,action:"completed"});J()}},W=function(){if(r){e.trigger("vroll",{id:c.id,action:"error"});J();s=!1}},X=function(){if(r){if(!G()){var i=e.duration(),t=e.currentTime();K(t,i)}}},Y=function(){if(C){k.removeChild(C);C=null;e.volume(m)}t.className="vast-blocker";if("undefined"!==typeof c.href){t.removeAttribute("style");t.href=c.href;t.target="_blank"}else t.style.pointerEvents="none";l=!0;j.addClass(k,"vjs-ad-playing");if(r&&s){e.trigger("vroll",{id:c.id,action:"start"});s=!1}}}}}else f=!1})}})}var vroll=function(e){this.ready(function(){vrollInit(this,e)})},registerPlugin=videojs.registerPlugin||videojs.plugin,getPlugin=videojs.getPlugin||videojs.plugin;if(void 0===getPlugin("vroll")||"undefined"===getPlugin("vroll"))registerPlugin("vroll",vroll);module.exports="vroll";