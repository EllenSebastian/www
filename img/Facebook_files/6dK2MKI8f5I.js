/*!CK:355470494!*//*1412006977,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ZCIVk"]); }

__d("HighConfidenceSuggestionUI",["ContextualDialog","CSS","csx","cx","DOM","fbt","LayerFadeOnShow","LayerHideOnEscape","LayerHideOnTransition"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(q){"use strict";var r=k.scry(document,'#suggestion_root')[0];if(r)k.remove(r);this.$HighConfidenceSuggestionUI0=new g({addedBehaviors:[n,o,m],context:q,position:'below',offsetY:-14},this.$HighConfidenceSuggestionUI1());var s=this.$HighConfidenceSuggestionUI0.getRoot();h.addClass(s,"_2xf_");this.$HighConfidenceSuggestionUI0.setContext(q);var t=k.scry(s,"._2xg0");this.$HighConfidenceSuggestionUI2=t[0];var u=k.scry(s,"._2xg1");this.$HighConfidenceSuggestionUI3=u[0];}p.prototype.$HighConfidenceSuggestionUI1=function(){"use strict";var q=k.create('div',{id:'suggestion_root'}),r=k.create('input',{type:'button',title:'Remove'}),s=k.create('label',{className:'uiCloseButton '+"_2xg0"});k.appendContent(s,r);var t=k.create('div',{className:"_2u7l"}),u=k.create('div',{id:'suggestion_placeholder'}),v=("Add"),w=k.create('div',{className:"_2xg1"}),x=k.create('button',{type:'submit',className:"_4jy1 _42ft _4jy3 _4jy0 _517h"},v);k.appendContent(w,x);k.appendContent(t,[u,w]);k.appendContent(q,[s,t]);return q;};p.prototype.getCloseButton=function(){"use strict";return this.$HighConfidenceSuggestionUI2;};p.prototype.getAddButton=function(){"use strict";return this.$HighConfidenceSuggestionUI3;};p.prototype.show=function(){"use strict";this.$HighConfidenceSuggestionUI0.show();};p.prototype.hide=function(){"use strict";this.$HighConfidenceSuggestionUI0.hide();};e.exports=p;},null);