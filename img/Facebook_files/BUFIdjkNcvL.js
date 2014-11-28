/*!CK:1829980485!*//*1416278218,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["XVsPZ"]); }

__d("UIThumbPager",["CSS","DOM","Event","Style","URI","isFacebookURI","$","copyProperties","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(q,r,s,t,u,v,w){if(!q)return false;this.startTime=this.startTime||Date.now();n(this,{root:m(q),ancestor:t||q.parentNode,thumbs:h.scry(q,'div.UIThumbPager_Thumbs img'),thumbRoot:q.parentNode,loaded:[],index:0,loadCount:0,lastLoadCount:0,orderedLoaded:[],orderedCursor:0,onloadCallback:o,onhideCallback:o,timeout:null,finished:false,minWidth:u,minHeight:v,allowReordering:w,metricsInput:s});this.loader=h.find(this.root,'div.UIThumbPager_Loader');if(r){this.input=h.create('input',{name:r,type:'hidden'});this.ancestor.appendChild(this.input);}this.bestImageW=h.create('input',{name:this.getMetricsInput('best_image_w'),type:'hidden'});this.bestImageH=h.create('input',{name:this.getMetricsInput('best_image_h'),type:'hidden'});this.selectedImage=h.create('input',{name:this.getMetricsInput('image_selected'),type:'hidden'});this.imagesProvided=h.create('input',{name:this.getMetricsInput('images_provided'),type:'hidden',value:this.thumbs.length});this.imagesLoaded=h.create('input',{name:this.getMetricsInput('images_loaded'),type:'hidden',value:0});this.imagesShown=h.create('input',{name:this.getMetricsInput('images_shown'),type:'hidden',value:0});this.loadDuration=h.create('input',{name:this.getMetricsInput('load_duration'),type:'hidden'});this.timedOut=h.create('input',{name:this.getMetricsInput('timed_out'),type:'hidden',value:0});this.sortOrder=h.create('input',{name:this.getMetricsInput('sort_order'),type:'hidden'});this.selectorType=h.create('input',{name:this.getMetricsInput('selector_type'),type:'hidden',value:'UIThumbPager_6'});if(s){this.ancestor.appendChild(this.bestImageW);this.ancestor.appendChild(this.bestImageH);this.ancestor.appendChild(this.selectedImage);this.ancestor.appendChild(this.imagesProvided);this.ancestor.appendChild(this.imagesLoaded);this.ancestor.appendChild(this.imagesShown);this.ancestor.appendChild(this.loadDuration);this.ancestor.appendChild(this.timedOut);this.ancestor.appendChild(this.sortOrder);this.ancestor.appendChild(this.selectorType);}this.root.getUIThumbPager=o.thatReturns(this);}p.prototype.setOnloadCallback=function(q){this.onloadCallback=q;this.init();return this;};p.prototype.setOnhideCallback=function(q){this.onhideCallback=q;return this;};p.prototype.init=function(){this.timeout=setInterval(this.timeoutTriggered.bind(this),p.loadtimeout);this.thumbs.forEach(function(q,r){if(q.complete||q.readyState=="complete"){this.onload(q,r);}else{var s=false,t=function(){if(!s){this.onload(q,r);s=true;}}.bind(this),u=function(){if(!s&&q.readyState=="complete"){this.onload(q,r);s=true;}}.bind(this);i.listen(q,'readystatechange',u);i.listen(q,'load',t);}}.bind(this));};p.prototype.timeoutTriggered=function(){if(this.lastLoadCount==this.loadCount&&!this.finished){this.updateDisplayFromBlock(true);this.timedOut.value=1;this.onfinish();}this.lastLoadCount=this.loadCount;};p.prototype.onload=function(q,r){if(this.finished)return;var s=this.getDimensions(q),t=null;if(this.checkLimits(s))t={thumb:q,w:s[0],h:s[1],index:r};if(this.allowReordering){if(t){this.loaded.push(t);this.onloadCallback(this.loaded.length);}}else{this.orderedLoaded[r]=t;if(this.orderedCursor==r)this.updateDisplayFromBlock(false);}this.imagesLoaded.value=++this.loadCount;if(this.loadCount==this.thumbs.length)this.onfinish();};p.prototype.onfinish=function(){this.markFinished();this.imagesShown.value=this.loaded.length;if(this.allowReordering||this.loaded.length===0)this.loadDuration.value=Date.now()-this.startTime;if(this.loaded.length===0){g.hide(this.root);this.onhideCallback();return;}if(this.allowReordering){this.loaded.sort(this.sort);this.bestImageW.value=this.loaded[0].w;this.bestImageH.value=this.loaded[0].h;this.loaded.forEach(function(q,r){if(r>0)this.sortOrder.value+=',';this.sortOrder.value+=q.index;}.bind(this));this.first();}};p.prototype.markFinished=function(){clearInterval(this.timeout);this.finished=true;};p.prototype.updateDisplayFromBlock=function(q){for(var r=this.orderedCursor;r<this.thumbs.length;r++){if(!q&&this.orderedLoaded[r]===(void 0))break;this.orderedCursor++;if(!this.orderedLoaded[r])continue;this.loaded.push(this.orderedLoaded[r]);this.onloadCallback(this.loaded.length);if(this.loaded.length==1){this.first();this.loadDuration.value=Date.now()-this.startTime;this.bestImageW.value=this.loaded[0].w;this.bestImageH.value=this.loaded[0].h;}}this.imagesShown.value=this.loaded.length;};p.prototype.page=function(q,r){if(this.index==q)return true;if(!this.finished&&this.allowReordering){this.markFinished();this.imagesLoaded.value=this.loadCount;this.imagesShown.value=this.loaded.length;}if(this.loader){j.set(this.loader,'display','none');this.loader=null;}var s=this.index;this.index+=r;this.selectedImage.value=this.index;p.swap(this.loaded[s].thumb,this.loaded[this.index].thumb,this.input);if(this.index==q)return true;return false;};p.prototype.first=function(){return this.page(null,-this.index);};p.prototype.prev=function(){return this.page(0,-1);};p.prototype.next=function(){return this.page(this.loaded.length-1,1);};p.prototype.getPageNumber=function(){return this.index+1;};p.swap=function(q,r,s){if(q!==r)g.addClass(q,p.hiddenClass);g.removeClass(r,p.hiddenClass);var t=k(r.src);if(!s)return;if((l(t)||t.getDomain().toLowerCase().match('\\.fbcdn\\.net$'))&&t.getPath().match('/safe_image.php')){s.value=t.getQueryData().url;}else s.value=r.src;};p.prototype.showThumbs=function(q){g.conditionClass(this.thumbRoot,'hidden_elem',!q);};p.prototype.sort=function(q,r){var s=q.w*q.h,t=r.w*r.h;if(t>s||t==s&&r.index<q.index)return 1;return -1;};p.prototype.getDimensions=function(q){return [q.naturalWidth,q.naturalHeight];};p.prototype.checkLimits=function(q){var r=q[0],s=q[1];if(!r)return true;return s>=(this.minHeight||p.minHeight)&&r>=(this.minWidth||p.minWidth)&&s/r<=p.maxRatio&&r/s<=p.maxRatio;};p.prototype.getMetricsInput=function(q){return this.metricsInput+'['+q+']';};n(p,{hiddenClass:'UIThumbPager_Hidden',loadtimeout:5000,minWidth:50,minHeight:50,maxRatio:3});e.exports=p;},null);
__d("UIThumbPagerControl",["CSS","DOM","Event","copyProperties","csx","cx","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(o,p){if(!o)return false;j(this,{root:o,pager:p,buttons:h.find(o,'.UIThumbPagerControl_Buttons'),buttonText:h.find(o,'div.UIThumbPagerControl_Text'),buttonLeft:h.find(o,'.UIThumbPagerControl_Button_Left'),buttonRight:h.find(o,'.UIThumbPagerControl_Button_Right'),loadedCount:0,pageCurrent:h.find(o,'span.UIThumbPagerControl_PageNumber_Current'),pageTotal:h.find(o,'span.UIThumbPagerControl_PageNumber_Total'),noThumb:h.find(o,'.UIThumbPagerControl_NoPicture'),end:true});this.pager.setOnhideCallback(this.onhide.bind(this));this.root.getUIThumbPagerControl=m.thatReturns(this);this.attachHandlers();}n.prototype.attachHandlers=function(){this.pager.setOnloadCallback(this.onload.bind(this));i.listen(this.buttonLeft,'click',function(){this.click(this.pager.prev);}.bind(this));i.listen(this.buttonRight,'click',function(){this.click(this.pager.next);}.bind(this));i.listen(this.noThumb,'click',function(event){var o;if(g.hasClass(this.noThumb,"_1uhe")){g.conditionClass(this.noThumb,'hidden_elem',true);var p=h.find(this.noThumb,"._1uhf");p.checked=1;o=true;}else o=this.noThumb.checked;this.pager.showThumbs(!o);g.conditionClass(this.buttons,'hidden_elem',o);g.conditionClass(this.buttonText,'hidden_elem',o);if(g.hasClass(this.noThumb,"_1uhe")){event.stopPropagation();return false;}}.bind(this));};n.prototype.onload=function(o){this.loadedCount=o;if(o==1)h.setContent(this.pageCurrent,o);if(o>this.pager.getPageNumber())g.removeClass(this.root,'UIThumbPagerControl_Last');h.setContent(this.pageTotal,o);};n.prototype.onhide=function(){g.hide(this.root);this.noThumb.checked=true;};n.prototype.click=function(o){if(this.loadedCount<=1)return;var p=['UIThumbPagerControl_Last','UIThumbPagerControl_First'];if(o==this.pager.prev)p.push(p.shift());if(this.end)g.removeClass(this.root,p[1]);if(this.end=o.bind(this.pager)())g.addClass(this.root,p[0]);h.setContent(this.pageCurrent,this.pager.getPageNumber());};e.exports=n;},null);