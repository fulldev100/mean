!function(e,t){"function"==typeof define&&define.amd?define([],t.bind(this,e,e.videojs)):"undefined"!=typeof module&&module.exports?module.exports=t(e,e.videojs):t(e,e.videojs)}(window,function(e,t){"use strict";e.videojs_airplay={version:"1.00.2"};t.registerPlugin("airplay",function(i){var a=this;i=(t.mergeOptions||t.util.mergeOptions)({controlbarButton:!0},i||{});var o=e.WebKitPlaybackTargetAvailabilityEvent;if(a.controlBar){if(i.controlbarButton&&!a.el().querySelector(".vjs-airplay-button")){var l=t.dom.createEl("button",{className:"vjs-airplay-button vjs-control vjs-button"},{role:"button",type:"button","aria-disabled":"false"}),r=a.controlBar.addChild("button",{el:l});r.el_.innerHTML='<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">'+a.localize("Start AirPlay")+"</span>",a.controlBar.el_.insertBefore(r.el_,a.controlBar.getChild("fullscreenToggle").el_),o||r.hide(),function(){var e=a.el().querySelector("video, audio"),t=this;e&&o&&e.addEventListener("webkitplaybacktargetavailabilitychanged",function(e){if("available"===e.availability)try{t.show()}catch(e){}else try{t.hide()}catch(e){}})}(),r.el_.onclick=function(){a.trigger("airPlayRequested")},r.el_.ontouchstart=function(e){e.stopImmediatePropagation(),a.trigger("airPlayRequested")}}a.on("airPlayRequested",function(e){var t=e.el().querySelector("video, audio");t&&t.webkitShowPlaybackTargetPicker&&t.webkitShowPlaybackTargetPicker()}.bind(null,a))}})});