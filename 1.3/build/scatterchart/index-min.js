/*! kcharts - v1.3 - 2014-01-12 5:53:58 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/scatterchart/theme",function(){var l="{COLOR}",t={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:l},hoverAttr:{stroke:"#fff",r:5,fill:l,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:l},hoverAttr:{stroke:"#fff",r:5,fill:l,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:l},hoverAttr:{stroke:"#fff",r:5,fill:l,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}}};return t}),KISSY.add("gallery/kcharts/1.3/scatterchart/cfg",function(){var l="ks-chart-",t=l+"default",e="{COLOR}";return{themeCls:t,autoRender:!0,title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},colors:[],subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:e,opacity:.6},hoverAttr:{stroke:"#fff",r:5,fill:e,"stroke-width":0,opacity:1}},legend:{isShow:!1},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{zIndex:10}},yAxis:{isShow:!0,css:{zIndex:10},num:5},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},tip:{isShow:!0,clsName:"",template:"",css:{},offset:{x:0,y:0},boundryDetect:!0}}}),KISSY.add("gallery/kcharts/1.3/scatterchart/index",function(l,t,e,r,i,n,a,s,o,h,c,x,y,u,f){var d,p,v=l.all,g="ks-chart-",m=g+"evtlayout",b=m+"-rects",_="{COLOR}",w={initializer:function(){this.init()},init:function(){var t=this;t.chartType="scatterchart",t._cfg||(t._cfg=l.mix(f,t.userConfig,void 0,void 0,!0)),t._cfg.zoomType="xy",a.prototype.init.call(t,t._cfg),t._cfg.autoRender&&t.render()},render:function(){var t=this,e=t._cfg,r=e.themeCls;if(t._$ctnNode[0]){a.prototype.dataFormat.call(t,t._cfg),t._$ctnNode.html(""),t._finished=[],r=t._cfg.themeCls||f.themeCls,t._cfg=l.mix(l.clone(l.mix(f,x[r],void 0,void 0,!0)),t._cfg,void 0,void 0,!0),t.color=d=new o({themeCls:r}),t._cfg.colors.length>0&&d.removeAllColors();for(var i in t._cfg.colors)d.setColor(t._cfg.colors[i]);t.paper=s(t._$ctnNode[0],e.width,e.height,{position:"absolute"}),t.htmlPaper=new h(t._$ctnNode,{clsName:r}),t._clonePoints=t._points,a.Common.drawTitle.call(null,this,r),a.Common.drawSubTitle.call(null,this,r),t.renderTip(),a.Common.drawGridsX.call(null,this),a.Common.drawGridsY.call(null,this),a.Common.drawAxisX.call(null,this),a.Common.drawAxisY.call(null,this),a.Common.drawLabelsX.call(null,this),a.Common.drawLabelsY.call(null,this),t.diffStocksSize(),t.drawAllStocks(),t.renderLegend(),t.renderEvtLayout(),t.afterRender(),t.fix2Resize(),t.bindEvt(),l.log(t)}},processAttr:function(t,e){var r=l.clone(t);for(var i in r)r[i]&&"string"==typeof r[i]&&(r[i]=r[i].replace(_,e));return r},diffStocksSize:function(){var l=this,t=l._cfg.points.attr.r,e=l._datas.total,r=[];for(var i in e)r=r.concat(a.prototype.getArrayByKey.call(null,e[i].data,2));if(r.length)for(var i in l._points){var n=a.prototype.getArrayByKey.call(null,e[i].data,2);for(var s in l._points[i])n.length>0&&(l._points[i][s].r=n[s]*t)}else for(var i in l._points)for(var s in l._points[i])l._points[i][s].r=t},drawAllStocks:function(){var l=this;l._stocks={_stocks:[]};for(var t in l._points)l._stocks[t]={stocks:l.drawStocks(t)}},drawStocks:function(l){var t=this,e=[],r=t.color.getColor(l).DEFAULT;for(var i in t._points[l]){var n=t._points[l][i];e[i]=t.drawStock(n.x,n.y,n.r,{stroke:r,fill:r,r:n.r})}return e},drawStock:function(l,t,e,r){var i=this,n=i.paper,a=i._cfg.points.attr;return n.circle(l,t,e,r).attr(a).attr(r)},renderTip:function(){if(this._cfg.tip.isShow){var t=this,e=t._cfg,r=t._innerContainer,i=e.tip.boundryDetect?{x:r.tl.x,y:r.tl.y,width:r.width,height:r.height}:{},n=l.mix(e.tip,{rootNode:t._$ctnNode,clsName:e.themeCls,boundry:i});return t.tip=new u(n),t.tip}},renderEvtLayout:function(){var l,t=this,e=t._cfg,r=t._innerContainer,i=(r.tl.y,r.height),n=t._evtEls._rects=[];l=t._evtEls.paper?t._evtEls.paper:t._evtEls.paper=new h(t._$ctnNode,{clsName:m,prependTo:!1,width:r.width,height:i,left:r.tl.x,top:r.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":.01,"-khtml-opacity":.01,opacity:.01}});for(var a in t._points){var n=[];for(var s in t._points[a]){var o=2*(t._points[a][s].r||e.points.attr.r);n[s]=l.rect(t._points[a][s].x-o/2,t._points[a][s].y-o/2,o,o).attr({line_index:a,index:s}).addClass(b)}t._evtEls._rects[a]=n}},fix2Resize:function(){var t=this;t._$ctnNode,t._cfg.anim="";var e=l.buffer(function(){t.init()},200);!t.__isFix2Resize&&t.on("resize",function(){t.__isFix2Resize=1,e()})},clearEvtLayout:function(){var l=this;if(l._evtEls._rects)for(var t in l._evtEls._rects)for(var e in l._evtEls._rects[t])l._evtEls._rects[t][e].remove()},renderLegend:function(){if(this._cfg.legend.isShow){var t=this,e=t._cfg.legend,r=e.container&&v(e.container)[0]?v(e.container):t._$ctnNode,i=t._innerContainer,n=t.color._colors,a=n.length,s=t._cfg,o=t._cfg.series,h=l.map(o,function(l,t){t%=a;var e={},r=n[t];return e.text=l.text,e.DEFAULT=r.DEFAULT,e.HOVER=r.HOVER,e}),x=l.merge({interval:20,iconright:5,showicon:!0},s.legend.globalConfig);return t.legend=new c({container:r,paper:t.paper,bbox:{width:i.width,height:i.height,left:i.x,top:i.y},align:s.legend.align||"bc",offset:s.legend.offset||[0,30],globalConfig:x,config:h}),t.legend.on("click",function(l){var t=l.index,e=(l.text,l.icon,l.el);1!=e.hide?(this.hidePoints(t),e.hide=1,e.disable()):(this.showPoints(t),e.hide=0,e.enable())},this),t.legend}},showPoints:function(t){var e=this;a.prototype.recoveryData.call(e,t),e._clonePoints[t]=e._points[t],a.Common.animateGridsAndLabels.call(null,e),e.animateSiblingsPoints(t),e.diffStocksSize(),e._stocks[t]={stocks:e.drawStocks(t)},e.clearEvtLayout(),e.renderEvtLayout(),e.bindEvt(),l.log(e)},hidePoints:function(l){var t=this;a.prototype.removeData.call(t,l),delete t._clonePoints[l],a.Common.animateGridsAndLabels.call(null,t);for(var e in t._stocks[l].stocks)t._stocks[l].stocks[e].remove();t.animateSiblingsPoints(l),t.clearEvtLayout(),t.renderEvtLayout(),t.bindEvt()},animateSiblingsPoints:function(l){var t=this;for(var e in t._stocks)if(l!=e)for(var r in t._stocks[e].stocks)t._points[e]&&t._stocks[e].stocks[r].animate({cx:t._points[e][r].x,cy:t._points[e][r].y},400)},bindEvt:function(){var t=this,e=t._evtEls;l.clone(t._cfg.points.hoverAttr),i.detach(v("."+b,v("."+m,t._$ctnNode)),"mouseenter"),i.on(v("."+b,v("."+m,t._$ctnNode)),"mouseenter",function(l){var e=v(l.currentTarget),r=e.attr("index"),i=e.attr("line_index");t._points[i][r].dataInfo&&(t.stockChange(i,r),t._cfg.tip.isShow&&t.tipHandler(i,r))}),i.detach(e.paper.$paper,"mouseleave"),i.on(e.paper.$paper,"mouseleave",function(){t.tip&&t.tip.hide(),t.paperLeave()})},stockChange:function(l,t){var e=this,r=e._stocks[l],i={target:r.stocks[t],currentTarget:r.stocks[t],lineIndex:Math.round(l),stockIndex:Math.round(t)};e.fire("stockChange",i)},tipHandler:function(t,e){var r,i,n=this,a=n.color.getColor(t).DEFAULT,s=n.tip,o=n._cfg,h=o.tip.template,c=s.getInstance();h&&(r=n._points[t][e].dataInfo,l.isFunction(h)?s.setContent(h(r)):s.renderTemplate(h,r),i=n._points[t][e],s.isVisable()?s.animateTo(i.x,i.y):s.moveTo(i.x,i.y),c.css(n.processAttr(o.tip.css,a)))},paperLeave:function(){var l=this;l.fire("paperLeave",l)},afterRender:function(){var l=this;l.fire("afterRender",l)},getHtmlPaper:function(){return this.htmlPaper},getRaphaelPaper:function(){return this.paper},clear:function(){this._$ctnNode.html("")}};return t.extend?p=a.extend(w):(p=function(l){var t=this;t._cfg=l,this.init()},l.extend(p,a,w)),p},{requires:["base","node","dom","event","gallery/template/1.0/index","gallery/kcharts/1.3/basechart/index","gallery/kcharts/1.3/raphael/index","gallery/kcharts/1.3/tools/color/index","gallery/kcharts/1.3/tools/htmlpaper/index","gallery/kcharts/1.3/legend/index","./theme","gallery/kcharts/1.3/tools/touch/index","gallery/kcharts/1.3/tip/index","./cfg"]});