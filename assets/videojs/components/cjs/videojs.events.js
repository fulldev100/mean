/* eslint-env node */function _interopDefault(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var videojs=_interopDefault(require("video.js"));function sendbeacon(e,i,t,n,o){""===i&&(i=e);var d=!0;""!==i&&""!==n&&(window.gtag?window.gtag("event",n,{event_category:t,event_label:i,value:o,eventNonInteraction:!0}):window._ga?window.ga("send","event",t,n,i,o,{transport:"beacon"}):window._gaq?window._gaq.push(["_trackEvent",t,n,i,o,d,{transport:"beacon"}]):window._paq&&window._paq.push(["trackEvent",t,n,i,o]))}var BufferTracking=function(e){var i=this,t=null,n=!1,o=!1,d=!1,a=0;i.bufferEnd=!1;var r=function(){t&&clearTimeout(t);n=!1;o=!1;d=!1;a=0;i.bufferEnd=!1},u=function(){d=!1;if(i.scrubbing()&&(!e.bufferingConfig||!e.bufferingConfig.includeScrub)){n=!0;t=setTimeout(function(){n=!1},200)}},v=function(){if(!1===d&&!1===n&&i.currentTime()>0){d=new Date();o=+i.currentTime().toFixed(2)}},c=function(){var e=+i.currentTime().toFixed(2);if(d&&e!==o){i.bufferEnd=new Date();var t=(i.bufferEnd-d)/1e3;d=!1;o=!1;a++;var n=this,r="",u="";"function"===typeof n.video_title&&n.video_title()&&(r=n.video_title());"function"===typeof n.video_id&&n.video_id()&&(u=n.video_id());i.trigger("track",{event:"buffered",videoId:u,videoTitle:r,bufferTime:t.toFixed(3),bufferCount:a})}};this.on("dispose",r);this.on("loadstart",r);this.on("ended",r);this.on("pause",u);this.on("waiting",v);this.on("timeupdate",c)},PauseTracking=function(){var e=this,i=0,t=null,n=function(){t&&clearTimeout(t);i=0};e.on("dispose",n);e.on("loadstart",n);e.on("ended",n);e.on("pause",function(){if(!e.scrubbing()&&!e.seeking()){var n="",o="";"function"===typeof e.video_title&&e.video_title()&&(n=e.video_title());"function"===typeof e.video_id&&e.video_id()&&(o=e.video_id());t=setTimeout(function(){i++;e.trigger("track",{event:"pause",videoId:o,videoTitle:n,pauseCount:i})},300)}})},ResumeTracking=function(){var e=this,i=0,t=null,n=function(){t&&clearTimeout(t);i=0};e.on("dispose",n);e.on("loadstart",n);e.on("ended",n);e.on("play",function(){if(!(e.scrubbing()||e.seeking()||e.currentTime()<1)){var n="",o="";"function"===typeof e.video_title&&e.video_title()&&(n=e.video_title());"function"===typeof e.video_id&&e.video_id()&&(o=e.video_id());t=setTimeout(function(){i++;e.trigger("track",{event:"resume",videoId:o,videoTitle:n,resumeCount:i})},300)}})},PercentileTracking=function(){var e=this,i=!1,t=!1,n=!1,o=!1,d=!1,a=0,r=0,u=0,v=0,c=function(){i=!1;t=!1;n=!1;o=!1;d=!1;a=0;r=0;u=0;v=0},s="",l="",f="";"function"===typeof e.video_title&&e.video_title()&&(s=e.video_title());"function"===typeof e.video_id&&e.video_id()&&(l=e.video_id());f=e.isAudio()?"Audio":"Videos";var g=function(){return u++},_=function(){return r++},p=function(){return v++};e.on("dispose",c);e.on("loadstart",c);e.on("tracking:pause",_);e.on("tracking:resume",g);e.on("tracking:seek",p);e.on("timeupdate",function(){var r=+e.currentTime().toFixed(0);switch(r){case i:i=!1;e.trigger("track",{event:"10%",videoId:l,videoTitle:s,currentTime:r,duration:a});e.analytics&&sendbeacon(l,s,f,"10%",1);break;case n:n=!1;e.trigger("track",{event:"25%",videoId:l,videoTitle:s,currentTime:r,duration:a});e.analytics&&sendbeacon(l,s,f,"25%",1);break;case o:o=!1;e.trigger("track",{event:"50%",videoId:l,videoTitle:s,currentTime:r,duration:a});e.analytics&&sendbeacon(l,s,f,"50%",1);break;case d:d=!1;e.trigger("track",{event:"75%",videoId:l,videoTitle:s,currentTime:r,duration:a});e.analytics&&sendbeacon(l,s,f,"75%",1);break;case t:t=!1;e.trigger("track",{event:"90%",videoId:l,videoTitle:s,currentTime:r,duration:a});break;default:}e.on("durationchange",function(){if(e.duration()>0){var a=(e.duration()/4).toFixed(0),r=(e.duration()/10).toFixed(0),u=(.9*e.duration()).toFixed(0);t=+u;i=+r;n=+a;o=2*+a;d=3*+a}})});e.on("ended",function(){var e=this,i=e.duration();e.el_.className.indexOf("vjs-live")>-1&&(i=0);var t="",n="",o="";"function"===typeof e.video_title&&e.video_title()&&(t=e.video_title());"function"===typeof e.video_id&&e.video_id()&&(n=e.video_id());o=e.isAudio()?"Audio":"Videos";e.trigger("track",{event:"ended",videoId:e.video_id(),videoTitle:e.video_title(),duration:i});e.analytics&&sendbeacon(n,t,o,"Completed",1)});e.on("fullscreenchange",function(){var e=this,i="on",t="",n="",o="";"function"===typeof e.video_title&&e.video_title()&&(t=e.video_title());"function"===typeof e.video_id&&e.video_id()&&(n=e.video_id());o=e.isAudio()?"Audio":"Videos";if(e.isFullscreen()){e.trigger("track",{event:"enterFullscreen",videoId:n,videoTitle:t,mode:i});e.analytics&&sendbeacon(n,t,o,"Fullscreen",1)}else e.trigger("track",{event:"exitFullscreen",videoId:n,videoTitle:t,mode:i})});e.on("durationchange",function(){if(e.duration()>0){var i=(e.duration()/4).toFixed(2);n=+i;o=2*+i;d=3*+i}})},SummaryTracking=function(){var e=this,i=0,t=0,n=0,o=0,d=0,a=0,r=0,u=[],v="",c=0,s="Videos",l="",f=!1,g=function(){i=0;t=0;n=0;o=0;d=0;a=0;r=0;c=0;u=[]},_=function(){var e=this,u={event:"summary",initialLoadTime:r,totalDuration:o,watchedDuration:d,pauseCount:t,seekCount:i,bufferCount:n,lastTime:c,bufferDuration:a,video_id:v,video_category:s,video_label:l,analytics:f};if(u.watchedDuration>0){u.lastTime>u.totalDuration-1&&(u.lastTime=0);e.trigger("track",u);u.analytics&&sendbeacon(u.video_id,u.video_label,u.video_category,"WatchedTime",u.watchedDuration);g()}};if("function"===typeof window.addEventListener){window.addEventListener("pagehide",_);window.addEventListener("beforeunload",function(){window.removeEventListener("pagehide",_);_()});e.on("dispose",function(){window.removeEventListener("beforeunload",_);window.removeEventListener("pagehide",_)})}e.on("ended",_);e.on("dispose",_);e.on("newSource",_);e.on("timeupdate",function(){var i=+e.currentTime().toFixed(0);u.indexOf(i)<0&&u.push(i);d=u.length;c=e.currentTime().toFixed(0)});e.on("loadeddata",function(){o=+e.duration().toFixed(0)});e.on("track",function(o,d){switch(d.event){case"seek":i=d.seekCount;break;case"pause":t=d.pauseCount;break;case"buffered":n=d.bufferCount;a+=parseFloat(d.bufferTime);break;case"loaded":r=d.initialLoadTime;break;case"firstPlay":"function"===typeof e.video_title&&e.video_title()&&(l=e.video_title());"function"===typeof e.video_id&&e.video_id()&&(v=e.video_id());s=e.isAudio()?"Audio":"Videos";e.analytics&&(f=!0);break;default:};})},PlayTracking=function(){var e=this,i=!1,t=0,n=0,o=0,d=function(){i=!1;t=0;n=0;o=0},a=function(){d();t=new Date()},r=function(){n=new Date();var i=this,d="",a="";"function"===typeof i.video_title&&i.video_title()&&(d=i.video_title());"function"===typeof i.video_id&&i.video_id()&&(a=i.video_id());a=i.video_id();o=(n-t)/1e3;e.trigger("track",{event:"loaded",videoId:a,videoTitle:d,initialLoadTime:+o.toFixed(3)})},u=function(){if(!i){var t=this,n="",o="",d="";"function"===typeof t.video_title&&t.video_title()&&(n=t.video_title());"function"===typeof t.video_id&&t.video_id()&&(o=t.video_id());d=t.isAudio()?"Audio":"Videos";i=!0;var a=(new Date()).toLocaleString();e.trigger("track",{event:"firstPlay",videoId:o,videoTitle:n,initialPlayTime:a});t.analytics&&sendbeacon(o,n,d,"Play",1)}};this.on("dispose",d);this.on("loadstart",a);this.on("loadeddata",r);this.on("playing",u)},SeekTracking=function(){var e=this;if(!(e.el_.className.indexOf("vjs-live")>-1)){var i=0,t=0,n=function(){i=0;t=0};e.on("dispose",n);e.on("loadstart",n);e.on("ended",n);var o=e.el().querySelector(".vjs-progress-holder");o.onmouseup=o.ontouchend=function(){t=e.currentTime().toFixed(2);i++;setTimeout(function(){var n="",o="";"function"===typeof e.video_title&&e.video_title()&&(n=e.video_title());"function"===typeof e.video_id&&e.video_id()&&(o=e.video_id());e.trigger("track",{event:"seek",videoId:o,videoTitle:n,seekTo:t,seekCount:i})},200)}}},MuteTracking=function(){var e=this;e.on("volumechange",function(){if(e.currentTime()>1){var i="",t="";"function"===typeof e.video_title&&e.video_title()&&(i=e.video_title());"function"===typeof e.video_id&&e.video_id()&&(t=e.video_id());e.muted()&&e.trigger("track",{event:"mute",videoId:t,videoTitle:i});!0!==e.muted()&&e.trigger("track",{event:"unmute",videoId:t,video_label:i})}})},RateTracking=function(){var e=this;e.on("ratechanged",function(i,t){var n="",o="";"function"===typeof e.video_title&&e.video_title()&&(n=e.video_title());"function"===typeof e.video_id&&e.video_id()&&(o=e.video_id());t.oldRate!==t.newRate&&e.trigger("track",{event:"rateChange",videoId:o,videoTitle:n,rate:t.newRate})})},ResolutionChange=function(){var e=this;e.on("resolutionchange",function(i,t){var n="",o="";"function"===typeof e.video_title&&e.video_title()&&(n=e.video_title());"function"===typeof e.video_id&&e.video_id()&&(o=e.video_id());e.trigger("track",{event:"resolutionChange",videoId:o,videoTitle:n,resolution:t.res})})},defaults={analytics:!1},events=function(e){e=videojs.mergeOptions(defaults,e);this.analytics=e.analytics;PauseTracking.apply(this,arguments);ResumeTracking.apply(this,arguments);MuteTracking.apply(this,arguments);RateTracking.apply(this,arguments);BufferTracking.apply(this,arguments);PercentileTracking.apply(this,arguments);PlayTracking.apply(this,arguments);SeekTracking.apply(this,arguments);SummaryTracking.apply(this,arguments);ResolutionChange.apply(this,arguments)};events.VERSION="1.0.0";const registerPlugin=videojs.registerPlugin||videojs.plugin;registerPlugin("events",events);module.exports=events;
