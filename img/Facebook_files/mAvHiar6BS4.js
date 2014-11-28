/*!CK:2345309219!*//*1416801246,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["gLDCB"]); }

__d("SyncRequestStatusEnum",[],function(a,b,c,d,e,f){e.exports={PENDING:0,ACCEPTED:1,REJECTED:2,EXPIRED:3,CANCELED:4,namesByValue:["PENDING","ACCEPTED","REJECTED","EXPIRED","CANCELED"]};},null);
__d("VideoPlayerReason",[],function(a,b,c,d,e,f){e.exports={AUTOPLAY:"autoplay_initiated",USER:"user_initiated",PAGE_VISIBILITY:"page_visibility_initiated"};},null);
__d("str2rstr",[],function(a,b,c,d,e,f){function g(h){var i="",j,k;for(var l=0;l<h.length;l++){j=h.charCodeAt(l);k=l+1<h.length?h.charCodeAt(l+1):0;if(55296<=j&&j<=56319&&56320<=k&&k<=57343){j=65536+((j&1023)<<10)+(k&1023);l++;}if(j<=127){i+=String.fromCharCode(j);}else if(j<=2047){i+=String.fromCharCode(192|((j>>>6)&31),128|(j&63));}else if(j<=65535){i+=String.fromCharCode(224|((j>>>12)&15),128|((j>>>6)&63),128|(j&63));}else if(j<=2097151)i+=String.fromCharCode(240|((j>>>18)&7),128|((j>>>12)&63),128|((j>>>6)&63),128|(j&63));}return i;}e.exports=g;},null);
__d("LinkshimAsyncLink",["$","AsyncSignal","DOM","UserAgent_DEPRECATED"],function(a,b,c,d,e,f,g,h,i,j){var k={swap:function(l,m){var n=j.ie()<=8;if(n){var o=i.create('wbr',{},null);i.appendContent(l,o);}l.href=m;if(n)i.remove(o);},referrer_log:function(l,m,n){var o=g('meta_referrer');o.content="origin";k.swap(l,m);setTimeout(function(){o.content="default";new h(n,{}).send();},100);}};e.exports=k;},null);
__d("legacy:dom-asynclinkshim",["LinkshimAsyncLink"],function(a,b,c,d){a.LinkshimAsyncLink=b('LinkshimAsyncLink');},3);
__d("DetectBrokenProxyCache",["AsyncSignal","Cookie","URI"],function(a,b,c,d,e,f,g,h,i){function j(k,l){var m=h.get(l);if((m!=k)&&(m!=null)&&(k!='0')){var n={c:'si_detect_broken_proxy_cache',m:l+' '+k+' '+m},o=new i('/common/scribe_endpoint.php').getQualifiedURI().toString();new g(o,n).send();}}e.exports={run:j};},null);
__d("classWithMixins",["copyProperties"],function(a,b,c,d,e,f,g){function h(i,j){var k=function(){i.apply(this,arguments);};k.prototype=g(Object.create(i.prototype),j.prototype);return k;}e.exports=h;},null);
__d("escapeRegex",[],function(a,b,c,d,e,f){function g(h){return h.replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1");}e.exports=g;},null);
__d("htmlSpecialChars",[],function(a,b,c,d,e,f){var g=/&/g,h=/</g,i=/>/g,j=/"/g,k=/'/g;function l(m){if(typeof m=='undefined'||m===null||!m.toString)return '';if(m===false){return '0';}else if(m===true)return '1';return m.toString().replace(g,'&amp;').replace(j,'&quot;').replace(k,'&#039;').replace(h,'&lt;').replace(i,'&gt;');}e.exports=l;},null);
__d("PresenceUtil",["CurrentUser","randomInt"],function(a,b,c,d,e,f,g,h){var i=h(0,4294967295)+1;function j(){return i;}function k(){return g.isLoggedInNow();}e.exports={getSessionID:j,hasUserCookie:k};},null);
__d("AttachmentRelatedShareConstants",[],function(a,b,c,d,e,f){var g={ARTICLE_CLICK:'article_click',VIDEO_CLICK:'video_click',FBVIDEO_CLICK:'fbvideo_click',GAME_CLICK:'game_click',EVENT_DELAY:1000,HIDE_DELAY:100,PHOTO_CLICK:'photo_click'};e.exports=g;},null);
__d("LitestandMessages",[],function(a,b,c,d,e,f){var g={NEWSFEED_LOAD:'LitestandMessages/NewsFeedLoad',LEAVE_HOME:'LitestandMessages/LeaveHome',UPDATE_HOME_COUNT:'LitestandMessages/UpdateHomeCount',STORIES_INSERTED:'LitestandMessages/StoriesInserted',NEWER_STORIES_INSERTED:'LitestandMessages/NewerStoriesInserted',NEW_STORIES_PILL_CLICKED:'LitestandMessages/NewStoriesPillClicked',UNREAD_ONLY_BEGIN:'LitestandMessages/UnreadOnlyBegin',RHC_RELOADED:'LitestandMessages/RHCReloaded',UNFOLD_SEEN_STACK:'LitestandMessages/UnfoldSeenStack',TOGGLE_PILL_VISIBILITY:'LitestandMessages/TogglePillVisibility',PILL_VISIBILITY_UPDATED:'LitestandMessages/PillVisibilityUpdated',PILL_CLEAR_COUNTER:'LitestandMessages/PillClearCounter',COMPOSER_FOCUSED:'LitestandMessages/ComposerFocused'};e.exports=g;},null);
__d("AjaxPipeRequest",["Arbiter","AsyncRequest","BigPipe","CSS","DOM","Env","PageletSet","ScriptPathState","URI","copyProperties","ge","goOrReplace","performance"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t;function u(x,y){var z=q(x);if(!z)return;if(!y)z.style.minHeight='100px';var aa=m.getPageletIDs();for(var ba=0;ba<aa.length;ba++){var ca=aa[ba];if(k.contains(z,ca))m.removePagelet(ca);}k.empty(z);g.inform('pagelet/destroy',{id:null,root:z});}function v(x,y){var z=q(x);if(z&&!y)z.style.minHeight='100px';}function w(x,y){"use strict";this._uri=x;this._query_data=y;this._request=new h();this._canvas_id=null;this._allow_cross_page_transition=true;}w.prototype.setCanvasId=function(x){"use strict";this._canvas_id=x;return this;};w.prototype.setURI=function(x){"use strict";this._uri=x;return this;};w.prototype.setData=function(x){"use strict";this._query_data=x;return this;};w.prototype.getData=function(x){"use strict";return this._query_data;};w.prototype.setAllowCrossPageTransition=function(x){"use strict";this._allow_cross_page_transition=x;return this;};w.prototype.setAppend=function(x){"use strict";this._append=x;return this;};w.prototype.send=function(){"use strict";var x={ajaxpipe:1,ajaxpipe_token:l.ajaxpipe_token};p(x,n.getParams());n.reset();this._request.setOption('useIframeTransport',true).setURI(this._uri).setData(p(x,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._automatic){this._relevantRequest=t;}else t=this._request;var y=s.webkitClearResourceTimings||s.clearResourceTimings||null;if(y)y.call(s);this._request.send();return this;};w.prototype._preBootloadFirstResponse=function(x){"use strict";return false;};w.prototype._fireDomContentCallback=function(){"use strict";this._arbiter.inform('ajaxpipe/domcontent_callback',true,g.BEHAVIOR_STATE);};w.prototype._fireOnloadCallback=function(){"use strict";this._arbiter.inform('ajaxpipe/onload_callback',true,g.BEHAVIOR_STATE);};w.prototype._isRelevant=function(x){"use strict";return this._request==t||(this._automatic&&this._relevantRequest==t)||this._jsNonBlock||(t&&t._allowIrrelevantRequests);};w.prototype._preBootloadHandler=function(x){"use strict";var y=x.getPayload();if(!y||y.redirect||!this._isRelevant(x))return false;var z=false;if(x.is_first){!this._append&&!this._displayCallback&&u(this._canvas_id,this._constHeight);this._arbiter=new g();z=this._preBootloadFirstResponse(x);this.pipe=new i({arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:this._request.lid,isAjax:true,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:'ajaxpipe/domcontent_callback',onloadEvt:'ajaxpipe/onload_callback',jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests});}return z;};w.prototype._redirect=function(x){"use strict";if(x.redirect){if(x.force||!this.isPageActive(x.redirect)){var y=['ajaxpipe','ajaxpipe_token'].concat(this.getSanitizedParameters());r(window.location,o(x.redirect).removeQueryData(y),true);}else{var z=a.PageTransitions;z.go(x.redirect,true);}return true;}else return false;};w.prototype.isPageActive=function(x){"use strict";return true;};w.prototype.getSanitizedParameters=function(){"use strict";return [];};w.prototype._versionCheck=function(x){"use strict";return true;};w.prototype._onInitialResponse=function(x){"use strict";var y=x.getPayload();if(!this._isRelevant(x))return false;if(!y)return true;if(this._redirect(y)||!this._versionCheck(y))return false;return true;};w.prototype._processFirstResponse=function(x){"use strict";var y=x.getPayload();if(q(this._canvas_id)&&y.canvas_class!=null)j.setClass(this._canvas_id,y.canvas_class);};w.prototype.setFirstResponseCallback=function(x){"use strict";this._firstResponseCallback=x;return this;};w.prototype.setFirstResponseHandler=function(x){"use strict";this._processFirstResponse=x;return this;};w.prototype._onResponse=function(x){"use strict";var y=x.payload;if(!this._isRelevant(x))return h.suppressOnloadToken;if(x.is_first){this._processFirstResponse(x);this._firstResponseCallback&&this._firstResponseCallback();y.provides=y.provides||[];y.provides.push('uipage_onload');if(this._append)y.append=this._canvas_id;}if(y){if('content' in y.content&&this._canvas_id!==null&&this._canvas_id!='content'){y.content[this._canvas_id]=y.content.content;delete y.content.content;}this.pipe.onPageletArrive(y);}if(x.is_last)v(this._canvas_id,this._constHeight);return h.suppressOnloadToken;};w.prototype.setNectarModuleDataSafe=function(x){"use strict";this._request.setNectarModuleDataSafe(x);return this;};w.prototype.setFinallyHandler=function(x){"use strict";this._request.setFinallyHandler(x);return this;};w.prototype.setErrorHandler=function(x){"use strict";this._request.setErrorHandler(x);return this;};w.prototype.abort=function(){"use strict";this._request.abort();if(t==this._request)t=null;this._request=null;return this;};w.prototype.setJSNonBlock=function(x){"use strict";this._jsNonBlock=x;return this;};w.prototype.setAutomatic=function(x){"use strict";this._automatic=x;return this;};w.prototype.setDisplayCallback=function(x){"use strict";this._displayCallback=x;return this;};w.prototype.setConstHeight=function(x){"use strict";this._constHeight=x;return this;};w.prototype.setAllowIrrelevantRequests=function(x){"use strict";this._allowIrrelevantRequests=x;return this;};w.prototype.getAsyncRequest=function(){"use strict";return this._request;};w.getCurrentRequest=function(){"use strict";return t;};w.setCurrentRequest=function(x){"use strict";t=x;};e.exports=w;},null);
__d("AsyncRequestNectarLogging",["AsyncRequest","Nectar","copyProperties"],function(a,b,c,d,e,f,g,h,i){i(g.prototype,{setNectarModuleData:function(j){if(this.method=='POST')h.addModuleData(this.data,j);},setNectarImpressionId:function(){if(this.method=='POST')h.addImpressionID(this.data);}});},null);
__d("DimensionTracking",["Cookie","DOMDimensions","Event","debounce","isInIframe"],function(a,b,c,d,e,f,g,h,i,j,k){function l(){var m=h.getViewportDimensions();g.set('wd',m.width+'x'+m.height);}if(!k()){setTimeout(l,100);i.listen(window,'resize',j(l,250));i.listen(window,'focus',l);}},null);
__d("Ease",[],function(a,b,c,d,e,f){var g={makePowerOut:function(h){var i=g.makePowerIn(h);return function(j){return 1-i(1-j);};},makePowerIn:function(h){return function(i){var j=Math.pow(i,h);return (j*10000|0)/10000;};},makePowerInOut:function(h){var i=g.makePowerIn(h),j=g.makePowerOut(h);return function(k){return (k<.5)?.5*i(k*2):.5*j(k*2-1)+.5;};},expoOut:function(h){return 1-Math.pow(2,-10*h);},expoIn:function(h){return 1-g.expoOut(1-h);},expoInOut:function(h){return (h<.5)?.5*g.expoIn(h*2):.5*g.expoOut(h*2-1)+.5;},sineOut:function(h){return Math.sin(h*Math.PI*.5);},sineIn:function(h){return 1-Math.cos(h*Math.PI*.5);},sineInOut:function(h){return -.5*(Math.cos(Math.PI*h)-1);},circOut:function(h){return Math.sqrt(1-(--h)*h);},circIn:function(h){return 1-g.circOut(1-h);},circInOut:function(h){return (h<.5)?.5*g.circIn(h*2):.5*g.circOut(h*2-1)+.5;},bounceOut:function(h){if(h<1/2.75){return (7.5625*h*h);}else if(h<2/2.75){return (7.5625*(h-=1.5/2.75)*h+.75);}else if(h<2.5/2.75){return (7.5625*(h-=2.25/2.75)*h+.9375);}else return (7.5625*(h-=2.625/2.75)*h+.984375);},bounceIn:function(h){return 1-g.bounceOut(1-h);},bounceInOut:function(h){return (h<.5)?.5*g.bounceIn(h*2):.5*g.bounceOut(h*2-1)+.5;},makeBounceOut:function(h){h=h||1;return function(i){i=((1-Math.cos(i*Math.PI*h))*(1-i))+i;return 1-Math.abs(1-i);};},makeBounceIn:function(h){var i=g.makeBounceOut(h);return function(j){return 1-i(1-j);};},makeElasticOut:function(h,i){h<1&&(h=1);var j=Math.PI*2;return function(k){if(k===0||k===1)return k;var l=i/j*Math.asin(1/h);return h*Math.pow(2,-10*k)*Math.sin((k-l)*j/i)+1;};},makeElasticIn:function(h,i){var j=g.makeElasticOut(h,i);return function(k){return 1-j(1-k);};},makeElasticInOut:function(h,i){i*=1.5;var j=g.makeElasticIn(h,i),k=g.makeElasticOut(h,i);return function(l){return (l<.5)?.5*j(l*2):.5*k(l*2-1)+.5;};},makeBackOut:function(h){var i=g.makeBackIn(h);return function(j){return 1-i(1-j);};},makeBackIn:function(h){return function(i){return i*i*((h+1)*i-h);};},makeBackInOut:function(h){h*=1.525;var i=g.makeBackIn(h),j=g.makeBackOut(h);return function(k){return (k<.5)?.5*i(k*2):.5*j(k*2-1)+.5;};}};g.elasticOut=g.makeElasticOut(1,.3);g.elasticIn=g.makeElasticIn(1,.3);g.elasticInOut=g.makeElasticInOut(1,.3);g.backOut=g.makeBackOut(1.7);g.backIn=g.makeBackIn(1.7);g.backInOut=g.makeBackInOut(1.7);e.exports=g;},null);
__d("HighContrastMode",["AccessibilityLogger","CSS","CurrentUser","DOM","Style","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={init:function(n){if(window.top!==window.self)return;var o=j.create('div');j.appendContent(document.body,o);o.style.cssText='border: 1px solid;'+'border-color: red green;'+'position: fixed;'+'height: 5px;'+'top: -999px;'+'background-image: url('+n.spacerImage+');';var p=k.get(o,'background-image'),q=k.get(o,'border-top-color'),r=k.get(o,'border-right-color'),s=q==r&&(p&&(p=='none'||p=='url(invalid-url:)'));if(s){h.conditionClass(document.documentElement,'highContrast',s);if(i.getID())g.logHCM();}j.remove(o);m.init=l;}};e.exports=m;},null);
__d("MenuDeprecated",["Event","Arbiter","CSS","DataStore","DOM","HTML","Keys","Parent","Style","UserAgent_DEPRECATED","copyProperties","emptyFunction","Run"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s='menu:mouseover',t=null;function u(ea){if(i.hasClass(ea,'uiMenuContainer'))return ea;return n.byClass(ea,'uiMenu');}function v(ea){return n.byClass(ea,'uiMenuItem');}function w(ea){if(document.activeElement){var fa=v(document.activeElement);return ea.indexOf(fa);}return -1;}function x(ea){return k.find(ea,'a.itemAnchor');}function y(ea){return i.hasClass(ea,'checked');}function z(ea){return !i.hasClass(ea,'disabled')&&o.get(ea,'display')!=='none';}function aa(event){var ea=document.activeElement;if(!ea||!n.byClass(ea,'uiMenu')||!k.isInputNode(ea)){var fa=v(event.getTarget());fa&&da.focusItem(fa);}}function ba(ea){p.firefox()&&x(ea).blur();da.inform('select',{menu:u(ea),item:ea});}var ca=function(){ca=r;var ea={};ea.click=function(event){var fa=v(event.getTarget());if(fa&&z(fa)){ba(fa);var ga=x(fa),ha=ga.href,ia=ga.getAttribute('rel');return (ia&&ia!=='ignore')||(ha&&ha.charAt(ha.length-1)!=='#');}};ea.keydown=function(event){var fa=event.getTarget();if(event.getModifiers().any)return;if(!t||k.isInputNode(fa))return;var ga=g.getKeyCode(event),ha;switch(ga){case m.UP:case m.DOWN:var ia=da.getEnabledItems(t);ha=w(ia);da.focusItem(ia[ha+(ga===m.UP?-1:1)]);return false;case m.SPACE:var ja=v(fa);if(ja){ba(ja);event.prevent();}break;default:var ka=String.fromCharCode(ga).toLowerCase(),la=da.getEnabledItems(t);ha=w(la);var ma=ha,na=la.length;while((~ha&&(ma=++ma%na)!==ha)||(!~ha&&++ma<na)){var oa=da.getItemLabel(la[ma]);if(oa&&oa.charAt(0).toLowerCase()===ka){da.focusItem(la[ma]);return false;}}}};g.listen(document.body,ea);},da=q(new h(),{focusItem:function(ea){if(ea&&z(ea)){this._removeSelected(u(ea));i.addClass(ea,'selected');x(ea).focus();}},getEnabledItems:function(ea){return da.getItems(ea).filter(z);},getCheckedItems:function(ea){return da.getItems(ea).filter(y);},getItems:function(ea){return k.scry(ea,'li.uiMenuItem');},getItemLabel:function(ea){return ea.getAttribute('data-label',2)||'';},isItemChecked:function(ea){return i.hasClass(ea,'checked');},autoregister:function(ea,fa,ga){ea.subscribe('show',function(){da.register(fa,ga);});ea.subscribe('hide',function(){da.unregister(fa);});},register:function(ea,fa){ea=u(ea);ca();if(!j.get(ea,s))j.set(ea,s,g.listen(ea,'mouseover',aa));if(fa!==false)t=ea;},setItemEnabled:function(ea,fa){if(!fa&&!k.scry(ea,'span.disabledAnchor')[0])k.appendContent(ea,k.create('span',{className:k.find(ea,'a').className+' disabledAnchor'},l(x(ea).innerHTML)));i.conditionClass(ea,'disabled',!fa);},toggleItem:function(ea){var fa=!da.isItemChecked(ea);da.setItemChecked(ea,fa);},setItemChecked:function(ea,fa){i.conditionClass(ea,'checked',fa);x(ea).setAttribute('aria-checked',fa);},unregister:function(ea){ea=u(ea);var fa=j.remove(ea,s);fa&&fa.remove();t=null;this._removeSelected(ea);},_removeSelected:function(ea){da.getItems(ea).filter(function(fa){return i.hasClass(fa,'selected');}).forEach(function(fa){i.removeClass(fa,'selected');});}});e.exports=da;},null);
__d("requireWeak",[],function(a,b,c,d,e,f){function g(h,i){d.call(null,h,i);}e.exports=g;},null);
__d("DialogPosition",["Vector"],function(a,b,c,d,e,f,g){var h=40,i,j={calculateTopMargin:function(k,l){if(i)return i;var m=g.getViewportDimensions(),n=Math.floor((m.x+k)*(m.y-l)/(4*m.x));return Math.max(n,h);},setFixedTopMargin:function(k){i=k;}};e.exports=j;},null);
__d("LayerTogglerContext",["Toggler"],function(a,b,c,d,e,f,g){function h(i){"use strict";this._layer=i;}h.prototype.enable=function(){"use strict";this._root=this._layer.getRoot();g.createInstance(this._root).setSticky(false);};h.prototype.disable=function(){"use strict";g.destroyInstance(this._root);this._root=null;};e.exports=h;},null);
__d("DialogX",["Arbiter","CSS","DialogPosition","Event","JSXDOM","Layer","LayerAutoFocus","LayerButtons","LayerFormHooks","LayerRefocusOnHide","LayerTabIsolation","LayerTogglerContext","ModalLayer","Style","Vector","copyProperties","cx","debounce","goURI","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){for(var aa in l)if(l.hasOwnProperty(aa))ca[aa]=l[aa];var ba=l===null?null:l.prototype;ca.prototype=Object.create(ba);ca.prototype.constructor=ca;ca.__superConstructor__=l;function ca(){"use strict";if(l!==null)l.apply(this,arguments);}ca.prototype._configure=function(ea,fa){"use strict";ba._configure.call(this,ea,fa);h.addClass(this.getRoot(),"_4-hy");if(ea.autohide)var ga=this.subscribe('show',function(){ga.unsubscribe();setTimeout(z(this.hide,this),ea.autohide);}.bind(this));if(ea.redirectURI)var ha=this.subscribe('hide',function(){ha.unsubscribe();y(ea.redirectURI);});this._fixedTopPosition=ea.fixedTopPosition;};ca.prototype._getDefaultBehaviors=function(){"use strict";return ba._getDefaultBehaviors.call(this).concat([da,s,m,n,o,q,r,p]);};ca.prototype._buildWrapper=function(ea,fa){"use strict";var ga=ea.xui?"_4-hz":"_t",ha=ea.xui?"_59s7":"_1yv";this._innerContent=k.div(null,fa);this._wrapper=k.div({className:ha,role:"dialog","aria-labelledby":ea.titleID||null},k.div({className:ga},this._innerContent));this.setWidth(ea.width);return (k.div({className:"_10",role:"dialog"},this._wrapper));};ca.prototype.getContentRoot=function(){"use strict";return this._wrapper;};ca.prototype.getInnerContent=function(){"use strict";return this._innerContent;};ca.prototype.updatePosition=function(){"use strict";var ea;if(this._fixedTopPosition){ea=this._fixedTopPosition;}else{var fa=u.getElementDimensions(this._wrapper);ea=i.calculateTopMargin(fa.x,fa.y);}t.set(this._wrapper,'margin-top',ea+'px');this.inform('update_position',{type:'DialogX',top:ea});};ca.prototype.setWidth=function(ea){"use strict";ea=Math.floor(ea);if(ea===this._width)return;this._width=ea;t.set(this._wrapper,'width',ea+'px');};ca.prototype.getWidth=function(){"use strict";return this._width;};ca.prototype.getFixedTopPosition=function(){"use strict";return this._fixedTopPosition;};function da(ea){"use strict";this._layer=ea;}da.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe(['show','hide'],function(ea){if(ea==='show'){this._attach();g.inform('layer_shown',{type:'DialogX'});}else{this._detach();g.inform('layer_hidden',{type:'DialogX'});}}.bind(this));};da.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;this._resize&&this._detach();};da.prototype._attach=function(){"use strict";this._layer.updatePosition();this._resize=j.listen(window,'resize',x(this._layer.updatePosition.bind(this._layer)));};da.prototype._detach=function(){"use strict";this._resize.remove();this._resize=null;};v(da.prototype,{_subscription:null,_resize:null});e.exports=ca;},null);
__d("LoadingDialogDimensions",[],function(a,b,c,d,e,f){var g={HEIGHT:96,WIDTH:300};e.exports=g;},null);
__d("AsyncDialog",["AsyncRequest","CSS","DialogX","DOM","Keys","LayerFadeOnShow","Parent","React","URI","XUISpinner.react","copyProperties","cx","emptyFunction","forEachObject","LoadingDialogDimensions"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var u=b('LoadingDialogDimensions').WIDTH,v;function w(){if(!v){var ea=j.create('div',{className:"_57-x"});v=new i({width:u,addedBehaviors:[l],xui:true},j.create('div',null,ea));n.render(n.createElement(p,{size:"large"}),ea);v.subscribe(['key','blur'],function(fa,ga){if(fa=='blur'||(fa=='key'&&ga.keyCode==k.ESC)){aa();return false;}});}return v;}var x={},y=1,z=[];function aa(){t(x,function(ea,fa){ea.abandon();ba(fa);});}function ba(ea){delete x[ea];if(!Object.keys(x).length)w().hide();}function ca(ea,fa){var ga=y++;z[ga]=fa;x[ga]=ea;var ha=ba.bind(null,''+ga);q(ea.getData(),{__asyncDialog:ga});w().setCausalElement(ea.getRelativeTo()).show();var ia=ea.finallyHandler;ea.setFinallyHandler(function(ja){var ka=ja.getPayload();if(ka&&ka.asyncURL)da.send(new g(ka.asyncURL));ha();ia&&ia(ja);});ea.setInterceptHandler(ha).setAbortHandler(ha);ea.send();}var da={send:function(ea,fa){ca(ea,fa||s);},bootstrap:function(ea,fa,ga){if(!ea)return;var ha=m.byClass(fa,'stat_elem')||fa;if(ha&&h.hasClass(ha,'async_saving'))return false;var ia=new o(ea).getQueryData(),ja=ga==='dialog',ka=new g().setURI(ea).setData(ia).setMethod(ja?'GET':'POST').setReadOnly(ja).setRelativeTo(fa).setStatusElement(ha).setNectarModuleDataSafe(fa);da.send(ka);},respond:function(ea,fa){var ga=z[ea];if(ga){ga(fa);delete z[ea];}},getLoadingDialog:function(){return w();}};e.exports=da;},null);
__d("LikeConfirmer",["AsyncDialog","AsyncRequest"],function(a,b,c,d,e,f,g,h){var i=false,j=false,k={likeContent:function(){},like:function(l,m){this.likeContent=l;if(j)return;if(i){this.likeContent();}else{var n=new h().setURI('/like/confirm_like.php').setRelativeTo(m);g.send(n,function(o){j=true;o.subscribe('hide',this.onCloseLikeConfirmDialog.bind(this));o.setCausalElement(m);}.bind(this));}return false;},isShowingConfirmation:function(){return j;},onCloseLikeConfirmDialog:function(){j=false;},likeSkipConfirmation:function(l){i=l;this.likeContent();}};e.exports=k;},null);
__d("UIPageletContentCache",[],function(a,b,c,d,e,f){var g={cache:{},getContent:function(h){if(h in this.cache)return this.cache[h];return null;},setContent:function(h,i){this.cache[h]=i;}};e.exports=g;},null);
__d("UIPagelet",["ActorURI","AjaxPipeRequest","AsyncRequest","DOM","HTML","ScriptPathState","UIPageletContentCache","URI","copyProperties","emptyFunction","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){function r(s,t,u){"use strict";var v=s&&j.isElementNode(s)?s.id:s;this._id=v||null;this._element=q(s||j.create('div'));this._src=t||null;this._context_data=u||{};this._data={};this._handler=p;this._request=null;this._use_ajaxpipe=false;this._use_post_request=false;this._is_bundle=true;this._allow_cross_page_transition=false;this._append=false;this._cache_content=false;this._content_cache_key='';}r.prototype.getElement=function(){"use strict";return this._element;};r.prototype.setHandler=function(s){"use strict";this._handler=s;return this;};r.prototype.go=function(s,t){"use strict";if(arguments.length>=2||typeof s=='string'){this._src=s;this._data=t||{};}else if(arguments.length==1)this._data=s;this.refresh();return this;};r.prototype.setAllowCrossPageTransition=function(s){"use strict";this._allow_cross_page_transition=s;return this;};r.prototype.setBundleOption=function(s){"use strict";this._is_bundle=s;return this;};r.prototype.setErrorHandler=function(s){"use strict";this._errorHandler=s;return this;};r.prototype.setTransportErrorHandler=function(s){"use strict";this.transportErrorHandler=s;return this;};r.prototype.refresh=function(){"use strict";if(this._use_ajaxpipe){l.setIsUIPageletRequest(true);this._request=new h();this._request.setCanvasId(this._id).setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler).setAllowIrrelevantRequests(this._allowIrrelevantRequests);}else{if(this._cache_content){var s=m.getContent(this._content_cache_key);if(s!==null){this.handleContent(s);return this;}}var t=function(x){this._request=null;var y=k(x.getPayload());this.handleContent(y);if(this._cache_content)m.setContent(this._content_cache_key,y);}.bind(this),u=this._displayCallback,v=this._finallyHandler;this._request=new i().setMethod('GET').setReadOnly(true).setOption('bundle',this._is_bundle).setHandler(function(x){if(u){u(t.bind(null,x));}else t(x);v&&v();});if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);if(this._use_post_request)this._request.setMethod('POST');}var w={};o(w,this._context_data);o(w,this._data);if(this._actorID)w[g.PARAMETER_ACTOR]=this._actorID;this._request.setURI(this._src).setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(w)}).send();return this;};r.prototype.handleContent=function(s){"use strict";if(this._append){j.appendContent(this._element,s);}else j.setContent(this._element,s);this._handler();};r.prototype.cancel=function(){"use strict";if(this._request)this._request.abort();};r.prototype.setUseAjaxPipe=function(s){"use strict";this._use_ajaxpipe=!!s;return this;};r.prototype.setUsePostRequest=function(s){"use strict";this._use_post_request=!!s;return this;};r.prototype.setAppend=function(s){"use strict";this._append=!!s;return this;};r.prototype.setJSNonBlock=function(s){"use strict";this._jsNonblock=!!s;return this;};r.prototype.setAutomatic=function(s){"use strict";this._automatic=!!s;return this;};r.prototype.setDisplayCallback=function(s){"use strict";this._displayCallback=s;return this;};r.prototype.setConstHeight=function(s){"use strict";this._constHeight=!!s;return this;};r.prototype.setFinallyHandler=function(s){"use strict";this._finallyHandler=s;return this;};r.prototype.setAllowIrrelevantRequests=function(s){"use strict";this._allowIrrelevantRequests=s;return this;};r.prototype.setActorID=function(s){"use strict";this._actorID=s;return this;};r.prototype.setCacheContent=function(s){"use strict";this._cache_content=s;return this;};r.prototype.setContentCacheKey=function(s){"use strict";this._content_cache_key=s;return this;};r.appendToInline=function(s,t){"use strict";var u=q(s),v=q(t);if(u&&v){while(v.firstChild)j.appendContent(u,v.firstChild);j.remove(v);}};r.loadFromEndpoint=function(s,t,u,v){"use strict";v=v||{};var w='/ajax/pagelet/generic.php/'+s;if(v.intern)w='/intern'+w;var x=new n(w.replace(/\/+/g,'/'));if(v.subdomain)x.setSubdomain(v.subdomain);var y=false,z='';if(v.contentCacheKey){y=true;z=s+','+String(v.contentCacheKey);}var aa=new r(t,x,u).setUseAjaxPipe(v.usePipe).setBundleOption(v.bundle!==false).setAppend(v.append).setJSNonBlock(v.jsNonblock).setAutomatic(v.automatic).setDisplayCallback(v.displayCallback).setConstHeight(v.constHeight).setAllowCrossPageTransition(v.crossPage).setFinallyHandler(v.finallyHandler||p).setErrorHandler(v.errorHandler).setTransportErrorHandler(v.transportErrorHandler).setAllowIrrelevantRequests(v.allowIrrelevantRequests).setActorID(v.actorID).setCacheContent(y).setContentCacheKey(z).setUsePostRequest(v.usePostRequest);v.handler&&aa.setHandler(v.handler);aa.go();return aa;};e.exports=r;},null);
__d("ContextualLayerUpdateOnScroll",["Event","copyProperties"],function(a,b,c,d,e,f,g,h){function i(j){"use strict";this._layer=j;}i.prototype.enable=function(){"use strict";this._subscriptions=[this._layer.subscribe('show',this._attachScrollListener.bind(this)),this._layer.subscribe('hide',this._removeScrollListener.bind(this))];};i.prototype.disable=function(){"use strict";while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();};i.prototype._attachScrollListener=function(){"use strict";if(this._listener)return;var j=this._layer.getContextScrollParent();this._listener=g.listen(j,'scroll',this._layer.updatePosition.bind(this._layer));};i.prototype._removeScrollListener=function(){"use strict";this._listener&&this._listener.remove();this._listener=null;};h(i.prototype,{_subscriptions:[]});e.exports=i;},null);