/*!build time : 2015-03-31 1:06:08 PM*/
KISSY.add("kg/kcharts/6.0.0/basechart/common",function(a,b){function c(b,c){if(b._cfg.title.isShow){var d=b.htmlPaper,e=c+"-title",f=b._cfg,g=b.getInnerContainer(),h=.6*g.y;b._title=d.rect(g.x,0,g.width,h).addClass(e).css(a.mix({"line-height":h+"px"},f.title.css)).html(f.title.content)}}function d(b,c){if(b._cfg.subTitle.isShow){var d=b.htmlPaper,e=c+"-subtitle",f=b._cfg,g=b.getInnerContainer(),h=.4*g.y;b._subTitle=d.rect(g.x,.6*g.y,g.width,h).addClass(e).css(a.mix({"line-height":h+"px"},f.subTitle.css)).html(f.subTitle.content)}}function e(a){if(a._cfg.xAxis.isShow){var b=a.getInnerContainer(),c=b.bl,d=b.width,e=a.htmlPaper,f=a._cfg.themeCls+"-axisx";return a._axisX=e.lineX(c.x,c.y,d).addClass(f).css(a._cfg.xAxis.css||{}),a._axisX}}function f(a){if(a._cfg.yAxis.isShow){var b=a.getInnerContainer(),c=b.tl,d=b.height,e=a.htmlPaper,f=a._cfg.themeCls+"-axisy";return a._axisY=e.lineY(c.x,c.y,d).addClass(f).css(a._cfg.yAxis.css||{}),a._axisY}}function g(a){if(a._cfg.yGrids.isShow)for(var b=a.getInnerContainer(),c=b.x,d=a._pointsY,e=(a._cfg.yGrids.template,0),f=d.length;f>e;e++)a._gridsY[e]={0:j(a,{x:c,y:d[e].y,index:e}),x:c,y:d[e].y,num:d[e].number}}function h(a){if(a._cfg.xGrids.isShow){var b,c=a._points[0],d=a.getInnerContainer();if(a._gridsX=[],"x"==a._cfg.zoomType){b=function(){var a=c.length,b=[];if(a>1){var d=(c[1].x-c[0].x)/2;b.push({x:c[0].x-d});for(var e in c)b.push({x:c[e].x- -d})}return b}();for(var e=0,f=b.length;f>e;e++)a._gridsX[e]={0:i(a,{index:e,x:b[e].x}),x:b[e].x,y:d.bl.y,index:e,num:a.coordNum[e]}}else for(var e in a._pointsX)a._gridsX[e]={index:e,0:i(a,{index:e,x:a._pointsX[e].x}),x:a._pointsX[e].x,y:d.bl.y,num:a.coordNumX[e]};return a._gridsX}}function i(c,d,e){if(c._cfg.xGrids.isShow){var f=c.getInnerContainer(),e=e||c._cfg.xGrids.css,g=c.htmlPaper,h=c._cfg.themeCls+"-gridsx",i=c._cfg.xGrids.template,j={index:d.index,paper:g,x:d.x,y:f.tl.y,height:f.height,css:e,className:h,chart:c};return i?a.isFunction(i)?i(j):b(i).render({data:j}):g.lineY(d.x,f.tl.y,f.height).addClass(h).css(e)}}function j(c,d,e){if(c._cfg.yGrids.isShow){var f=c.getInnerContainer(),e=e||c._cfg.yGrids.css,g=c.htmlPaper,h=c._cfg.themeCls+"-gridsy",i=c._cfg.yGrids.template,j={index:d.index,paper:g,x:f.x,y:d.y,width:f.width,css:e,className:h,chart:c};return i?a.isFunction(i)?i(j):b(i).render({data:j}):g.lineX(f.x,d.y,f.width).addClass(h).css(e)}}function k(a){if(a._cfg.yLabels.isShow){var b=a.getInnerContainer();for(var c in a._pointsY)a._labelY[c]={0:n(a,c,a._pointsY[c].number),num:a._pointsY[c].number,x:b.x,y:a._pointsY[c].y};return a._labelY}}function l(a){if(a._cfg.xLabels.isShow)for(var b in a._pointsX)a._labelX[b]={0:m(a,b,a._pointsX[b].number),num:a._pointsX[b].number,x:a._pointsX[b].x,y:a._pointsX[b].y}}function m(c,d,e){if(c._cfg.xLabels.isShow){var f,g=c.htmlPaper,h=c._pointsX.length||0,i=c._cfg.themeCls+"-xlabels",j="{{data}}",k="";return h>d?(j=c._cfg.xLabels.template||j,k=a.isFunction(j)?j(d,e):b(j).render({data:e}),k&&(f=g.text(c._pointsX[d].x,c._pointsX[d].y,"<span class="+i+">"+k+"</span>","center"),f.children().css(c._cfg.xLabels.css)),f):void 0}}function n(c,d,e){if(c._cfg.yLabels.isShow&&e){var f,g=c.htmlPaper,h=c._cfg.themeCls+"-ylabels",i="{{data}}",j="";return i=c._cfg.yLabels.template||i,j=a.isFunction(i)?i(d,e):b(i).render({data:e}),j&&(f=g.text(c._pointsY[d].x,c._pointsY[d].y,"<span class="+h+">"+j+"</span>","right","middle"),f.children().css(c._cfg.yLabels.css)),f}}function o(a){function b(b,c,d,e,f){for(var g="_grids"+b,l="_label"+b,o=Math.max.apply(null,[a[l].length,a[g].length]),p=function(){a[g]=[],a[l]=[];for(var b in c)a[g][b]={0:c[b].grid,y:d[b].y,x:d[b].x,num:c[b].num},a[l][b]={0:c[b].lbl,y:d[b].y,x:d[b].x,num:c[b].num};for(var b in e)e[b].remove()},q=0;o>q;q++)!function(i){var j=a[l][i]?a[l][i].num:a[g][i].num,m=u(j,d,f);if(m&&void 0!==m.x&&void 0!==m.y){var n="Y"==b?{top:m.y+"px"}:{left:m.x+"px"};c.push({num:j,lbl:a[l][i]&&a[l][i][0]&&a[l][i][0].stop().animate(n,h,k),grid:a[g][i]&&a[g][i][0]&&a[g][i][0].stop().animate(n,h,k)})}else{var n="Y"==b?{top:a[l][i]&&v(a[l][i]).y+"px",opacity:0}:{left:a[l][i]&&v(a[l][i]).x+"px",opacity:0};a[l][i]&&a[l][i][0]&&e.push(a[l][i][0].stop().animate(n,h,k)),a[g][i]&&a[g][i][0]&&e.push(a[g][i][0].stop().animate(n,h,k))}}(q);for(var q in d)if(!r(d[q].number,f)){var s="Y"==b?v(d[q]).y+"px":v(d[q]).x+"px",t="Y"==b?{top:s,opacity:0}:{left:s,opacity:0},w="Y"==b?{top:d[q].y,opacity:1}:{left:d[q].x,opacity:1};if("Y"==b){var x=n(a,q,d[q].number),y=j(a,v(d[q]).y);c.push({num:d[q].number,lbl:x&&x.css(t).stop().animate(w,h,k),grid:y&&y.css(t).stop().animate(w,h,k)})}else{var x=m(a,q,d[q].number),y=i(a,v(d[q]).x);c.push({num:d[q].number,lbl:x&&x.css(t).stop().animate(w,h,k),grid:y&&y.css(t).stop().animate(w,h,k)})}}Array.prototype.sort.call(c,function(a,b){return a.num-b.num}),p()}var c=a._cfg,d=c.zoomType,e=a._pointsY,f=a._pointsX,g=a.getInnerContainer(),h=.5,k="easeout",l=[],o=[],p=[],q=[],s=[],t=[],u=function(a,b,c){for(var d in b)if(a===b[d].number)return c.push(a),b[d]},v=function(a){if(a){var b=Math.min.apply(null,[c.canvasAttr.x,c.canvasAttr.y])/2,e=g.y+g.height/2,f=g.x+g.width/2;switch(d){case"x":return{y:a.y>e?g.bl.y+b:g.y-b,x:a.x};case"y":return{x:a.x>f?g.br.x+b:g.x-b,y:a.y};case"xy":return{y:a.y>e?g.bl.y+b:g.y-b,x:a.x>f?g.br.x+b:g.x-b}}}};switch(d){case"x":b("Y",s,e,p,l);break;case"y":b("X",t,f,q,o);break;case"xy":b("X",t,f,q,o),b("Y",s,e,p,l)}}function p(a){var b=0;for(var c in a)a[c].x&&a[c].y&&b++;return b}function q(a,b){var c="",d=(a._innerContainer.bl.y,p(b)),e=0;if(!b)return"";if(e=function(){for(var c in b)if(!a.isEmptyPoint(b[c]))return Math.round(c)}(),c+="M"+b[e].x+","+b[e].y,"arc"==a._cfg.lineType&&d>2){c+=" R";for(var f=e+1,d=b.length;d>f;f++)b[f].x&&b[f].y&&(c+=b[f].x+","+b[f].y+" ")}else for(var f=e+1,d=b.length;d>f;f++)b[f].x&&b[f].y&&(c+=" L"+b[f].x+","+b[f].y);return c}function r(a,b){for(var c in b)if(b[c]===a)return!0;return!1}return{drawTitle:c,drawSubTitle:d,drawAxisX:e,drawAxisY:f,drawGridsX:h,drawGridX:i,drawGridY:j,drawGridsY:g,drawLabelsX:l,drawLabelsY:k,drawLabelX:m,drawLabelY:n,getRealPointsNum:p,animateGridsAndLabels:o,getLinePath:q,isInArray:r}},{requires:["gallery/template/1.0/index"]}),KISSY.add("kg/kcharts/6.0.0/basechart/index",function(a,c,d,e){var f,g=a.all,h={init:function(b){b||(b=this.userConfig);var c=this,d=c._cfg;if(b&&b.renderTo){if(!c.__isInited){d=c._cfg=a.mix({autoRender:!0,zIndex:0,yAxis:{spacing:{top:0,bottom:0}},xAxis:{spacing:{left:0,right:0}},canvasAttr:{x:60,y:60},zoomType:"x"},b,void 0,void 0,!0),c._$ctnNode=g(b.renderTo),c._$ctnNode.css({position:"relative","-webkit-text-size-adjust":"none","-webkit-tap-highlight-color":"rgba(0,0,0,0)"}),c.createContainer(),a.mix(c,{_datas:{cur:{},total:{}},_points:{},_centerPoints:[],_pointsX:[],_pointsY:[],_gridsX:[],_gridsY:[],_areas:[],_axisX:null,_axisY:null,_labelX:[],_labelY:[],_evtEls:[],_gridPoints:[],stackable:!1});for(var e in Array.prototype)delete Array.prototype[e]}"barchart"==c.chartType&&(d.xAxis.min=0,d.yAxis.min=0),c.__setData(),c.__isInited=1}},__setData:function(){var a=this,b=a._cfg.series;if(b&&!(b.length<=0)&&b[0].data)for(var c in b)a._datas.total[c]={index:c,data:b[c].data},a._datas.cur[c]={index:c,data:b[c].data}},dataFormat:function(){var a,b,c,d,e,f,g,h=this,i=h._cfg,j=i.zoomType,k=h._innerContainer,l=i.xAxis.spacing?h.px2num(i.xAxis.spacing.left):0,m=i.xAxis.spacing?h.px2num(i.xAxis.spacing.right):0,n=i.yAxis.spacing?h.px2num(i.yAxis.spacing.top):0,o=i.yAxis.spacing?h.px2num(i.yAxis.spacing.bottom):0,p=k.width-l-m,q=k.height-n-o,r=k.x/1+l,s=k.y/1+n;switch(h._pointsY=[],h._pointsX=[],j){case"x":a=h.getAllDatas(),g=c=h.coordNum=h._getScales(a,i.yAxis),e=h.data2GrapicData(c,!1,!0);break;case"y":b=h.getAllDatas(),g=d=h.coordNumX=h._getScales(b,i.xAxis),f=h.data2GrapicData(d,!0,!1);break;case"xy":a=h.getAllDatas(0),b=h.getAllDatas(1),g=c=h.coordNum=h._getScales(a,i.xAxis),d=h.coordNumX=h._getScales(b,i.yAxis),e=h.data2GrapicData(c,!1,!1),f=h.data2GrapicData(d,!0,!0)}var t=function(a,b,c){{var d=i.series[b],e=Math.max.apply(null,c),f=Math.min.apply(null,c),g=[];h.getDataType()}switch(j){case"x":for(var k in h._pointsX)g[k]=""===a[k]||null===a[k]?{x:h._pointsX[k].x,index:Math.round(k)}:{x:h._pointsX[k].x,y:h.data2Grapic(a[k],e,f,q,s,!0),dataInfo:{y:a[k],x:i.xAxis.text[k]},index:Math.round(k)};break;case"y":for(var k in h._pointsY)g[k]={x:h.data2Grapic(a[k],e,f,p,r),y:h._pointsY[k].y,dataInfo:{y:a[k],x:i.yAxis.text[k]},index:Math.round(k)};break;case"xy":var l=h.data2GrapicData(h.getArrayByKey(d.data,0)),m=h.data2GrapicData(h.getArrayByKey(d.data,1),!0,!0);for(var k in d.data)g[k]={x:l[k],y:m[k],dataInfo:{y:a[k]},index:Math.round(k)}}return g};switch(j){case"x":for(var u in e)h._pointsY[u]={number:c[u]+"",y:e[u],x:r};try{h._gridPoints=h.getSplitPoints(r,s+q,r+p,s+q,i.xAxis.text.length,!0),h._pointsX=h.getCenterPoints(h._gridPoints);for(var u in i.xAxis.text)h._pointsX[u].number=i.xAxis.text[u]}catch(v){throw new Error("\u672a\u914d\u7f6e\u6b63\u786e\u7684xAxis.text\u6570\u7ec4")}break;case"y":for(var u in f)h._pointsX[u]={number:d[u]+"",y:s+q,x:f[u]};try{h._pointsY=h.getSplitPoints(r,s,r,s+q,i.yAxis.text.length+1);for(var u in i.yAxis.text)h._pointsY[u].number=i.yAxis.text[u]}catch(v){throw new Error("\u672a\u914d\u7f6e\u6b63\u786e\u7684yAxis.text\u6570\u7ec4")}break;case"xy":for(var u in f)h._pointsY[u]={number:d[u]+"",y:f[u],x:r};for(var u in e)h._pointsX[u]={number:c[u]+"",y:s+q,x:e[u]}}for(var u in h._datas.cur)h._points[u]=t(h._datas.cur[u].data,u,g)},removeData:function(a){var b=this;delete b._datas.cur[a],b.dataFormat()},recoveryData:function(a){var b=this;b._datas.cur[a]=b._datas.total[a],b.dataFormat()},createContainer:function(){var a=this,b=a._$ctnNode,c=a._cfg.canvasAttr,d=c.width||b.width()-2*c.x,e=c.height||b.height()-2*c.y,f=c.x,g=c.y,h=d,i=e,j={x:f,y:g},k={x:f+d,y:g},l={x:f,y:g+i},m={x:f+d,y:g+i};a._innerContainer={x:f,y:g,width:h,height:i,tl:j,tr:k,bl:l,br:m}},getInnerContainer:function(){return this._innerContainer},getAllDatas:function(){{var b,c=this,d=c._cfg,e=[],f=d.zoomType,g=arguments[0];c.getDataType()}if(d.stackable)for(var h in c._datas.cur){a.isArray(c._datas.cur[h].data)&&(b=c._datas.cur[h].data);for(var i in b)e[i]=e[i]?b[i]-0+(e[i]-0):b[i]}else for(var h in c._datas.cur)a.isArray(c._datas.cur[h].data)&&(b="xy"==f?c.getArrayByKey(c._datas.cur[h].data,g):c._datas.cur[h].data),e.push(b.join(","));return e.length?e.join(",").split(","):[]},getDataType:function(){var b=this;if(b._datas.total[0]&&b._datas.total[0].data)for(var c in b._datas.total[0].data){if(a.isPlainObject(b._datas.total[0].data[c]))return"object";if(a.isNumber(b._datas.total[0].data[c]-0))return"number"}},_getScales:function(b,c){var d=this;if(c.text&&a.isArray(c.text))return c.text;var e=c.max/1,f=c.min/1,g=c.num||5,h=Math.max.apply(null,b),i=Math.min.apply(null,b);d.isNagitive=0>h?1:0,d.isPositive=i>0?1:0,d.isZero=h===i&&0===h,d.isZero&&(h=5,i=-5);var j=.1*(h-i),k=(e||0==e)&&e>=h?e:h+j,l=(f||0==f)&&i>=f?f:i-j;return d.getScales(k,l,g)},data2GrapicData:function(b,c,d){if(void 0!==b){var e,f=this,g=f._innerContainer,h=c?g.x:g.y,i=g.height,j=g.width,k=f._cfg.zoomType,l=c?Math.max.apply(null,f.coordNumX):Math.max.apply(null,f.coordNum),m=c?Math.min.apply(null,f.coordNumX):Math.min.apply(null,f.coordNum),n=[];switch(k){case"xy":e=c?i:j;break;case"x":e=i;break;case"y":e=j}if(a.isArray(b)){for(var o in b)n.push(f.data2Grapic(b[o],l,m,e,h,d));return n}return f.data2Grapic(b,l,m,e,h,d)}},data2Grapic:function(a,b,c,d,e,f){return 0>=b-c?void 0:f?d*(1-(a-c)/(b-c))+e:d*(a-c)/(b-c)+e},getSplitPoints:function(a,b,c,d,e,f){var g=(c-a)/e,h=(d-b)/e,i=[];f&&i.push({x:a,y:b});for(var j=0;e-1>j;j++)i.push({x:a+(j+1)*g,y:b+(j+1)*h});return f&&i.push({x:c,y:d}),i},getCenterPoints:function(a){var b=[],c=a.length;if(c>1)for(var d=0;c-1>d;d++)b[d]={x:(a[d].x+a[d+1].x)/2,y:(a[d].y+a[d+1].y)/2};return b},getScales:function(a,b,c){var d,e,f,g,h,i,j,k=this,l=Math.log,m=Math.pow,n=[],o=0;for(a===b&&b>0?(b=0,a=2*a):a===b&&0>b&&(a=0,b=2*b),d=(a-b)/c,f=Math.floor(l(d)/l(10))+1,e=d/m(10,f),e=e>0&&.1>=e?.1:e>.1&&.2>=e?.2:e>.2&&.25>=e?.25:e>.25&&.5>=e?.5:1,g=e*m(10,f),j=(a+b)/2-(a+b)/2%g,h=i=j;h>b;)h-=g;for(;a>i;)i+=g;if(k.isFloat(g)){var p=g+"";p.indexOf(".")>-1&&(o=p.split(".")[1].length>4?4:p.split(".")[1].length)}for(var q=h;i>=q;q+=g)n.push(parseFloat(q).toFixed(o));if(k.isNagitive)for(q in n)n[q]>0&&n.splice(q,1);else if(k.isPositive)for(q in n)n[q]<0&&n.splice(q,1);return n},arraySort:function(a,b,c){return a.sort(function(a,d){return b?"object"==typeof a&&"object"==typeof d?d[c]-a[c]:d-a:"object"==typeof a&&"object"==typeof d?a[c]-d[c]:a-d})},getArrayByKey:function(b,c){var d=[];for(var e in b)(b[e][c]||a.isNumber(b[e][c]))&&d.push(b[e][c]);return d},isFloat:function(a){return/^([+-]?)\d*\.\d+$/.test(a)},obj2Array:function(a,b){var c=[];for(var d in a)c.push(b?a[b]:a[d]);return c},getObjKeys:function(a){var c=[];for(b in a)c.push(b);return c},isInSide:function(a,b,c,d,e,f){return a>c&&c- -e>a&&b>d&&d- -f>b?!0:!1},px2num:function(a){{var a=a||0;Math.round((a+"").replace(/\s+|px/g,""))}return Math.round((a+"").replace(/\s+|px/g,""))},getOffset:function(b){var c=b.currentTarget;if(b.offsetX)return{offsetX:b.offsetX,offsetY:b.offsetY};var d=a.DOM.offset(c);return{offsetX:b.offsetX||b.clientX-d.left,offsetY:b.offsetY||b.clientY-d.top}},getConfig:function(){return this._cfg},setConfig:function(b){this._cfg=a.mix(this._cfg,b,void 0,void 0,!0),this.__setData()}};return c.extend?f=c.extend(h):(f=function(){},a.extend(f,c,h)),f.Common=e,f},{requires:["base","node","./common"]});