(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main","pages/about/index","pages/home/index","pages/news/index","pages/platform/index"],{"0d68":function(e,t,n){"use strict";n.r(t);var o=n("50c0"),c=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=c.a},"158a":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"about",data:function(){return{elements:[{title:"布局",name:"layout",color:"cyan",cuIcon:"newsfill"},{title:"背景",name:"background",color:"blue",cuIcon:"colorlens"},{title:"文本",name:"text",color:"purple",cuIcon:"font"},{title:"图标 ",name:"icon",color:"mauve",cuIcon:"cuIcon"},{title:"按钮",name:"button",color:"pink",cuIcon:"btn"},{title:"标签",name:"tag",color:"brown",cuIcon:"tagfill"},{title:"头像",name:"avatar",color:"red",cuIcon:"myfill"},{title:"进度条",name:"progress",color:"orange",cuIcon:"icloading"},{title:"边框阴影",name:"shadow",color:"olive",cuIcon:"copy"},{title:"加载",name:"loading",color:"green",cuIcon:"loading2"}]}},onShow:function(){console.log("success"," at pages\\about\\index.vue:88")}};t.default=o},"17f2":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c})},2192:function(e,t,n){},"24ae":function(e,t,n){"use strict";n.r(t);var o=n("17f2"),c=n("0d68");for(var a in c)"default"!==a&&function(e){n.d(t,e,function(){return c[e]})}(a);n("c865");var l=n("2877"),r=Object(l["a"])(c["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},"28d4":function(e,t,n){"use strict";n.r(t);var o=n("d679"),c=n("683a");for(var a in c)"default"!==a&&function(e){n.d(t,e,function(){return c[e]})}(a);n("dba6");var l=n("2877"),r=Object(l["a"])(c["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},"50c0":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"news",data:function(){return{elements:[{title:"布局",name:"layout",color:"cyan",cuIcon:"newsfill"},{title:"背景",name:"background",color:"blue",cuIcon:"colorlens"},{title:"文本",name:"text",color:"purple",cuIcon:"font"},{title:"图标 ",name:"icon",color:"mauve",cuIcon:"cuIcon"},{title:"按钮",name:"button",color:"pink",cuIcon:"btn"},{title:"标签",name:"tag",color:"brown",cuIcon:"tagfill"},{title:"头像",name:"avatar",color:"red",cuIcon:"myfill"},{title:"进度条",name:"progress",color:"orange",cuIcon:"icloading"},{title:"边框阴影",name:"shadow",color:"olive",cuIcon:"copy"},{title:"加载",name:"loading",color:"green",cuIcon:"loading2"}]}},onShow:function(){console.log("success"," at pages\\news\\index.vue:88")}};t.default=o},"59e0":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"platform",data:function(){return{elements:[{title:"布局",name:"layout",color:"cyan",cuIcon:"newsfill"},{title:"背景",name:"background",color:"blue",cuIcon:"colorlens"},{title:"文本",name:"text",color:"purple",cuIcon:"font"},{title:"图标 ",name:"icon",color:"mauve",cuIcon:"cuIcon"},{title:"按钮",name:"button",color:"pink",cuIcon:"btn"},{title:"标签",name:"tag",color:"brown",cuIcon:"tagfill"},{title:"头像",name:"avatar",color:"red",cuIcon:"myfill"},{title:"进度条",name:"progress",color:"orange",cuIcon:"icloading"},{title:"边框阴影",name:"shadow",color:"olive",cuIcon:"copy"},{title:"加载",name:"loading",color:"green",cuIcon:"loading2"}]}},onShow:function(){console.log("success"," at pages\\platform\\index.vue:88")}};t.default=o},"683a":function(e,t,n){"use strict";n.r(t);var o=n("158a"),c=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=c.a},"6cdd":function(e,t,n){},"7bf4":function(e,t,n){"use strict";n.r(t);var o=n("7fac");for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);n("bdf4");var a,l,r=n("2877"),i=Object(r["a"])(o["default"],a,l,!1,null,null,null);t["default"]=i.exports},"7fac":function(e,t,n){"use strict";n.r(t);var o=n("9d5a"),c=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=c.a},8951:function(e,t,n){"use strict";var o=n("2192"),c=n.n(o);c.a},"99aa":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c})},"9d5a":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){console.log("App 正在启动"," at App.vue:4"),e.getSystemInfo({success:function(e){Vue.prototype.StatusBar=e.statusBarHeight,"android"==e.platform?Vue.prototype.CustomBar=e.statusBarHeight+50:Vue.prototype.CustomBar=e.statusBarHeight+45}}),Vue.prototype.ColorList=[{title:"嫣红",name:"red",color:"#e54d42"},{title:"桔橙",name:"orange",color:"#f37b1d"},{title:"明黄",name:"yellow",color:"#fbbd08"},{title:"橄榄",name:"olive",color:"#8dc63f"},{title:"森绿",name:"green",color:"#39b54a"},{title:"天青",name:"cyan",color:"#1cbbb4"},{title:"海蓝",name:"blue",color:"#0081ff"},{title:"姹紫",name:"purple",color:"#6739b6"},{title:"木槿",name:"mauve",color:"#9c26b0"},{title:"桃粉",name:"pink",color:"#e03997"},{title:"棕褐",name:"brown",color:"#a5673f"},{title:"玄灰",name:"grey",color:"#8799a3"},{title:"草灰",name:"gray",color:"#aaaaaa"},{title:"墨黑",name:"black",color:"#333333"},{title:"雅白",name:"white",color:"#ffffff"}]},onShow:function(){console.log("App Show"," at App.vue:107")},onHide:function(){console.log("App Hide"," at App.vue:110")}};t.default=n}).call(this,n("6e42")["default"])},a755:function(e,t,n){"use strict";n.r(t);var o=n("fadd"),c=n("d9a0");for(var a in c)"default"!==a&&function(e){n.d(t,e,function(){return c[e]})}(a);n("c007");var l=n("2877"),r=Object(l["a"])(c["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},b981:function(e,t,n){},bdc9:function(e,t,n){"use strict";n.r(t);var o=n("99aa"),c=n("f632");for(var a in c)"default"!==a&&function(e){n.d(t,e,function(){return c[e]})}(a);n("8951");var l=n("2877"),r=Object(l["a"])(c["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},bdf4:function(e,t,n){"use strict";var o=n("b981"),c=n.n(o);c.a},c007:function(e,t,n){"use strict";var o=n("df7a"),c=n.n(o);c.a},c865:function(e,t,n){"use strict";var o=n("6cdd"),c=n.n(o);c.a},d679:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c})},d9a0:function(e,t,n){"use strict";n.r(t);var o=n("59e0"),c=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=c.a},dba6:function(e,t,n){"use strict";var o=n("e942"),c=n.n(o);c.a},df7a:function(e,t,n){},e942:function(e,t,n){},f632:function(e,t,n){"use strict";n.r(t);var o=n("fabc"),c=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=c.a},fabc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"home",data:function(){return{cuIconList:[{cuIcon:"cardboardfill",color:"red",badge:120,name:"公文签收"},{cuIcon:"recordfill",color:"orange",badge:1,name:"通知签收"},{cuIcon:"picfill",color:"yellow",badge:0,name:"消息签收"},{cuIcon:"noticefill",color:"olive",badge:22,name:"文档签收"},{cuIcon:"upstagefill",color:"cyan",badge:0,name:"教学中心"},{cuIcon:"clothesfill",color:"blue",badge:0,name:"管理中心"},{cuIcon:"discoverfill",color:"purple",badge:0,name:"休闲中心"},{cuIcon:"questionfill",color:"mauve",badge:0,name:"用户中心"}],gridCol:4,gridBorder:!1,cardCur:0,swiperList:[{id:0,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{id:1,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"},{id:2,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"},{id:3,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{id:4,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{id:5,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{id:6,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}],dotStyle:!0,towerStart:0,direction:"",isCard:!0}},onLoad:function(){this.TowerSwiper("swiperList")},onShow:function(){console.log("success"," at pages\\home\\index.vue:178")},methods:{cardSwiper:function(e){this.cardCur=e.detail.current}}};t.default=o},fadd:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c})}},[["045b","common/runtime","common/vendor"]]]);