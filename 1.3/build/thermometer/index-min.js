/*! kcharts - v1.3 - 2014-01-12 5:53:58 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/thermometer/index",function(l,t){function e(e){this.set(e);var r,i=l.get(e.renderTo);if(!i)throw Error("容器不能为空");r=t(i,e.width,e.height),this.set("paper",r);var n=r.path("M 11 1 a 10 10 0 0 1 -10 10 l 0 218 a 10 10 0 0 1 10 10 l 58 0 a 10 10 0 0 1 10 -10 l 0 -218 a 10 10 0 0 1 -10 -10z");n.attr("fill","#F4A460");var a=r.path("M 34 181 l 0 -151 a 5 5 0 1 1 12 0 l 0 151z");a.attr("stroke-width","0"),a.attr("fill","0-#feaa66:50-#ddd:70-#f5a561:100");var s=30,o=r.rect(35,180-s,10,s);o.attr("stroke-width","0"),o.attr("fill","0-#f00:50-#fdd:75-#f00:100");var h=r.circle(40,200,20);h.attr("stroke-width","0"),h.attr("fill","r(0.75,0.25)#ffffff-#ff0000");for(var c=0;150>=c;c+=15){var x=180-c;r.path("M 47 "+x+" l 10 0z"),r.text(65,x,c/1.5)}}return l.extend(e,l.Base),e},{requires:["gallery/kcharts/1.1/raphael/index"]});