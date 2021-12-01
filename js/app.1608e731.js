(function(e){function t(t){for(var s,a,c=t[0],o=t[1],u=t[2],p=0,d=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(s=!1)}s&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},r={app:0},i=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"17a6":function(e,t,n){},"1dfa":function(e,t,n){"use strict";n("6a90")},"2f72":function(e,t,n){},"49f9":function(e,t,n){"use strict";n("c9a3")},"4ac9":function(e,t,n){"use strict";n("7432")},"511b":function(e,t,n){"use strict";n("db3b")},5598:function(e,t,n){"use strict";n("7d16")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s,r=n("2b0e"),i=n("2f62"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("login-wrapper",[n("router-view")],1)],1)},c=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/groups"}},[e._v("Groups")])],1)},u=[],l=(n("e4af"),n("2877")),p={},d=Object(l["a"])(p,o,u,!1,null,"b2403aea",null),f=d.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$store.state.isLoggedIn?n("div",[e._t("default")],2):n("Setup")],1)},m=[],h=n("5530"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Google Wi-Fi: Web Dashboard")]),e._m(0),e.status.state?n("p",[e._v(e._s(e.status.state+": "+e.status.message))]):e._e(),n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.refreshToken,expression:"refreshToken"}],attrs:{placeholder:"refreshToken"},domProps:{value:e.refreshToken},on:{input:function(t){t.target.composing||(e.refreshToken=t.target.value)}}}),n("button",{on:{click:function(t){return e.setup()}}},[e._v("submit")])])])},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" You're going to need a refresh token to view your network. "),n("br"),e._v(" Click "),n("a",{attrs:{target:"_blank",href:"https://www.angelod.com/onhubauthtool/"}},[e._v("here")]),e._v(" to get one. ")])}],_=n("1da1"),w=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("c9da")),x=n.n(w);function C(){return s}function k(e){return O.apply(this,arguments)}function O(){return O=Object(_["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=new x.a(t),e.next=3,s.init();case 3:return e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}var S={data:function(){return{refreshToken:"",status:{state:"",message:""}}},computed:Object(h["a"])({},Object(i["b"])(["isLoggedIn"])),methods:{setup:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k(e.refreshToken);case 3:if(n=t.sent,n){t.next=6;break}return t.abrupt("return");case 6:return e.$store.commit("setLoggedIn",!0),e.$store.commit("setRefreshToken",e.refreshToken),t.next=10,e.$store.dispatch("setGroup");case 10:return t.next=12,Promise.all([e.$store.dispatch("setDevices"),e.$store.dispatch("getSpeedTestResults"),e.$store.dispatch("startRealtimeMetrics"),e.$store.dispatch("setInsightCards")]);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),e.status={state:"error",message:t.t0.message};case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()}}},$=S,R=(n("af31"),Object(l["a"])($,g,b,!1,null,"27e2f2be",null)),y=R.exports,j={components:{Setup:y},computed:Object(h["a"])({},Object(i["b"])(["isLoggedIn"]))},M=j,T=Object(l["a"])(M,v,m,!1,null,null,null),D=T.exports,P={components:{Header:f,LoginWrapper:D}},E=P,I=(n("034f"),Object(l["a"])(E,a,c,!1,null,null,null)),B=I.exports,N=n("8c4f"),G=n("1321"),L=n.n(G),W=n("ecee"),H=n("c074"),U=n("ad3d");function z(){return new i["a"].Store({state:{isLoggedIn:!1,refreshToken:"",group:{},wifiDevices:[],devices:[],speedTestResults:{},realtimeMetrics:{},insightCards:[],privateSsid:"loading"},mutations:{setLoggedIn:function(e,t){e.isLoggedIn=t},setRefreshToken:function(e,t){e.refreshToken=t},setGroup:function(e,t){e.group=t},setPrivateSsid:function(e,t){e.privateSsid=t},setWifiDevices:function(e,t){e.wifiDevices=t},setDevices:function(e,t){e.devices=t},setSpeedTestResults:function(e,t){e.speedTestResults=t},setRealtimeMetrics:function(e,t){e.realtimeMetrics=t},setInsightCards:function(e,t){e.insightCards=t}},actions:{updateData:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.dispatch("setGroup");case 2:return t.next=4,Promise.all([e.dispatch("setDevices"),e.dispatch("setRealtimeMetrics"),e.dispatch("getSpeedTestResults")]);case 4:case"end":return t.stop()}}),t)})))()},setGroup:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=C(),t.next=3,n.getGroups();case 3:s=t.sent.groups[0],e.commit("setGroup",s),e.commit("setPrivateSsid",s.groupSettings.wlanSettings.privateSsid),e.commit("setWifiDevices",s.accessPoints);case 7:case"end":return t.stop()}}),t)})))()},setDevices:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C().getGroupDevices(e.state.group.id);case 2:n=t.sent.stations,e.commit("setDevices",n);case 4:case"end":return t.stop()}}),t)})))()},getSpeedTestResults:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C().getGroupSpeedTestResults(e.state.group.id);case 2:n=t.sent.speedTestResults[0],e.commit("setSpeedTestResults",n);case 4:case"end":return t.stop()}}),t)})))()},setRealtimeMetrics:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C().getGroupRealtimeMetrics(e.state.group.id);case 2:n=t.sent,e.commit("setRealtimeMetrics",n);case 4:case"end":return t.stop()}}),t)})))()},startRealtimeMetrics:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:setInterval(Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.dispatch("setRealtimeMetrics");case 2:case"end":return t.stop()}}),t)}))),5e3);case 1:case"end":return t.stop()}}),t)})))()},setInsightCards:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C().getGroupInsightCards(e.state.group.id);case 2:n=t.sent.insightsCards,e.commit("setInsightCards",n);case 4:case"end":return t.stop()}}),t)})))()}}})}var F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e.status.state?n("p",[e._v(e._s(e.status.state+": "+e.status.message))]):e._e(),n("h1",{domProps:{textContent:e._s(e.$store.state.privateSsid)}}),n("p",[e._v(" Here's an insightful comment into the overall performance of your network! ")]),n("div",{staticClass:"overviewBubbles"},[n("icon-bubble",{attrs:{text:"Internet",icon:"globe",onClick:function(){return e.$router.push("/network")}}}),n("icon-bubble",{attrs:{text:"Wifi devices ("+e.$store.state.wifiDevices.length+")",icon:"network-wired",onClick:function(){return e.$router.push("/points")}}}),n("icon-bubble",{attrs:{text:"Devices ("+e.$store.state.devices.filter((function(e){return e.connected})).length+")",icon:"laptop",onClick:function(){return e.$router.push("/devices")}}})],1),e._l(e.$store.state.insightCards,(function(t){return n("div",{key:t.id},["INFO"!=t.category?n("div",[n("insight-card",{attrs:{card:t}})],1):e._e()])})),n("network-card"),n("devices-card")],2)},A=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"iconBubble",on:{click:function(t){return e.onClick()}}},[n("div",{staticClass:"bubble"},[n("font-awesome-icon",{attrs:{icon:e.icon}})],1),n("p",{staticClass:"text"},[e._v(e._s(e.text))])])},Y=[],q={props:{text:{type:String},icon:{type:String},statusColor:{type:String},onClick:{type:Function}}},K=q,V=(n("d85f"),Object(l["a"])(K,J,Y,!1,null,null,null)),Q=V.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"title",on:{click:function(t){return e.$router.push("/network")}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"wifi"}}),n("p",[e._v("NETWORK")])],1),n("div",{staticClass:"content"},[n("div",{staticClass:"row"},[n("speed-test-result",{attrs:{backgroundColor:"#35483e",speed:(e.$store.state.speedTestResults.receiveWanSpeedBps/1e3/1e3).toPrecision(3),subtext:"Mbps download"}}),n("speed-test-result",{attrs:{backgroundColor:"#493955",speed:(e.$store.state.speedTestResults.transmitWanSpeedBps/1e3/1e3).toPrecision(3),subtext:"Mbps upload"}})],1),n("p",[e._v("Your last speed test was on "+e._s(new Date(e.$store.state.speedTestResults.timestamp).toDateString()))])])])},Z=[],ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"speedTestResult",style:{"background-color":e.backgroundColor}},[n("h1",[e._v(e._s(e.speed))]),n("p",[e._v(e._s(e.subtext))])])},te=[],ne={props:{backgroundColor:{type:String},speed:{type:String},subtext:{type:String}}},se=ne,re=(n("c770"),Object(l["a"])(se,ee,te,!1,null,"f776a916",null)),ie=re.exports,ae={components:{SpeedTestResult:ie},methods:{runSpeedTest:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$store.state.realtimeMetrics.meshMetrics[0].apId,!n){t.next=6;break}return t.next=4,C().requestAccessPointLocalSpeedTest(n);case 4:s=t.sent,console.log(s);case 6:case"end":return t.stop()}}),t)})))()}}},ce=ae,oe=(n("7679"),Object(l["a"])(ce,X,Z,!1,null,"93a3ca8c",null)),ue=oe.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"title",on:{click:function(t){return e.$router.push("/devices")}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"laptop"}}),n("p",[e._v("DEVICES")])],1),n("div",{staticClass:"content"},[0==e.$store.state.devices.length?n("div",[n("p",[e._v("loading devices")])]):e._l(e.sortedDevices.slice(0,3),(function(e){return n("div",{key:e.id},[n("device-row",{attrs:{device:e}})],1)}))],2)])},pe=[],de=(n("4de4"),n("4e82"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"deviceRow"},[n("p",{staticClass:"title"},[e._v(e._s(e.device.friendlyName))]),n("p",{staticClass:"subtitle",style:{"font-weight":"bold"}},[e._v(" "+e._s(e.device.friendlyType)+" ")]),e.metrics.speed?n("p",{staticClass:"subtitle"},[e._v(" "+e._s(e.metrics.speed.expandedSpeedText)+" ")]):e._e(),e.device.connected?e._e():n("p",{staticClass:"subtitle"},[e._v("Disconnected")]),e.metrics.traffic?n("div",[n("div",{staticClass:"metrics"},[n("p",{staticClass:"subtitle"},[n("font-awesome-icon",{attrs:{icon:"arrow-down"}}),e._v(" "+e._s(e.metrics.traffic.receiveSpeedBps?(e.metrics.traffic.receiveSpeedBps/1e3/1e3).toPrecision(3):0)+" Mbps ")],1),n("p",{staticClass:"subtitle"},[n("font-awesome-icon",{attrs:{icon:"arrow-up"}}),e._v(" "+e._s(e.metrics.traffic.transmitSpeedBps?(e.metrics.traffic.transmitSpeedBps/1e3/1e3).toPrecision(3):0)+" Mbps ")],1)]),n("progress-bar",{attrs:{progress:e.percentage||0}})],1):e._e()])}),fe=[],ve=(n("a9e3"),n("7db0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"full"},[n("div",{staticClass:"progress",style:{width:e.progress+"%"}})])}),me=[],he={props:{progress:{type:Number}}},ge=he,be=(n("c78b"),Object(l["a"])(ge,ve,me,!1,null,"1fd081ed",null)),_e=be.exports,we={data:function(){return{metrics:{},connected:null}},components:{ProgressBar:_e},props:{device:{type:Object}},watch:{"$store.state.realtimeMetrics":function(){this.getMetrics()}},computed:{percentage:function(){var e=this.metrics.traffic,t=e.transmitSpeedBps,n=e.receiveSpeedBps;return Number(n)/(Number(t)+Number(n))*100}},mounted:function(){this.getMetrics()},methods:{getMetrics:function(){var e,t,n=this;if(this.device.connected&&null!==(e=this.$store.state.realtimeMetrics)&&void 0!==e&&e.stationMetrics){var s=null===(t=this.$store.state.realtimeMetrics)||void 0===t?void 0:t.stationMetrics.find((function(e){return e.station.id===n.device.id}));s&&(this.metrics=s)}}}},xe=we,Ce=(n("87e4"),Object(l["a"])(xe,de,fe,!1,null,"377f9398",null)),ke=Ce.exports,Oe={components:{DeviceRow:ke},computed:{sortedDevices:function(){return this.$store.state.devices.sort((function(e,t){return!!t.connected-!!e.connected})).filter((function(e){return"Unnamed device"!==e.friendlyName}))}}},Se=Oe,$e=(n("49f9"),Object(l["a"])(Se,le,pe,!1,null,"3b18088a",null)),Re=$e.exports,ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"content"},[n("h3",[e._v(e._s(e.card.card.title))]),n("p",{staticClass:"subtitle"},[e._v(e._s(e.card.card.description))])])])},je=[],Me={props:{card:{type:Object}}},Te=Me,De=(n("511b"),Object(l["a"])(Te,ye,je,!1,null,"b2bc50d6",null)),Pe=De.exports,Ee={data:function(){return{status:{state:"",message:""}}},mounted:function(){this.$store.dispatch("updateData")},components:{IconBubble:Q,NetworkCard:ue,DevicesCard:Re,InsightCard:Pe}},Ie=Ee,Be=(n("fba0"),Object(l["a"])(Ie,F,A,!1,null,"34e98594",null)),Ne=Be.exports,Ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"network"},[n("navigation",{attrs:{to:"/",text:"GO HOME"}}),n("network-card"),n("realtime-usage")],1)},Le=[],We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav",on:{click:function(t){return e.$router.push(e.to)}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"arrow-left"}}),n("p",[e._v(e._s(e.text))])],1)},He=[],Ue={props:{to:{type:String},text:{type:String}}},ze=Ue,Fe=(n("aae7"),Object(l["a"])(ze,We,He,!1,null,"66479f80",null)),Ae=Fe.exports,Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"content"},[n("h2",[e._v("Network speed and usage")]),n("p",{staticClass:"subtitle"},[n("font-awesome-icon",{attrs:{icon:"arrow-down"}}),e._v(" "+e._s((e.realtimeData.receiveSpeedBps/1e3/1e3).toPrecision(3))+" Mbps ")],1),n("p",{staticClass:"subtitle"},[n("font-awesome-icon",{attrs:{icon:"arrow-up"}}),e._v(" "+e._s((e.realtimeData.transmitSpeedBps/1e3/1e3).toPrecision(3))+" Mbps ")],1),n("apexchart",{ref:"chart",attrs:{width:"95%",type:"line",options:e.chartOptions,series:e.series}})],1)])},Ye=[],qe=n("3835"),Ke=(n("159b"),n("4fad"),n("b0c0"),{data:function(){return{intervalUpdate:null,chartOptions:{chart:{id:"realtime-metrics",toolbar:{show:!1},zoom:{enabled:!1},animations:{enabled:!0,easing:"linear",dynamicAnimation:{speed:1e3}}},xaxis:{type:"datetime",range:27e3},noData:{text:"loading...",style:{color:"#fff"}},dataLabels:{enabled:!1},grid:{padding:{left:0,right:0}},markers:{size:0,hover:{size:0}}},series:[{name:"transmitSpeedBps",data:[]},{name:"receiveSpeedBps",data:[]}]}},mounted:function(){var e=this;this.intervalUpdate=setInterval(Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.updateChart();case 1:case"end":return t.stop()}}),t)}))),1e3)},beforeDestroy:function(){this.intervalUpdate&&clearInterval(this.intervalUpdate)},computed:{realtimeData:function(){var e={transmitSpeedBps:0,receiveSpeedBps:0};return this.$store.state.realtimeMetrics&&this.$store.state.realtimeMetrics.groupTraffic?this.$store.state.realtimeMetrics.groupTraffic:e}},methods:{updateChart:function(){var e=this,t=this.realtimeData,n=(new Date).getTime();Object.entries(t).forEach((function(t){var s=Object(qe["a"])(t,2),r=s[0],i=s[1],a=e.series.find((function(e){return e.name==r}));a&&a.data.push([n,Number((i/1e3/1e3).toPrecision(3))])})),this.$refs.chart.updateSeries(this.series)}}}),Ve=Ke,Qe=(n("1dfa"),Object(l["a"])(Ve,Je,Ye,!1,null,"528dfc49",null)),Xe=Qe.exports,Ze={data:function(){return{status:{state:"",message:""}}},components:{NetworkCard:ue,Navigation:Ae,RealtimeUsage:Xe}},et=Ze,tt=(n("e93f"),Object(l["a"])(et,Ge,Le,!1,null,"445ee940",null)),nt=tt.exports,st=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"network"},[n("navigation",{attrs:{to:"/",text:"GO HOME"}}),0==e.$store.state.devices.length?n("div",[n("p",[e._v("loading devices")])]):e._e(),e._l(e.sortedDevices,(function(e){return n("div",{key:e.id},[n("device-row",{attrs:{device:e}})],1)}))],2)},rt=[],it={components:{Navigation:Ae,DeviceRow:ke},computed:{sortedDevices:function(){return this.$store.state.devices.sort((function(e,t){return!!t.connected-!!e.connected}))}}},at=it,ct=(n("8fb0"),Object(l["a"])(at,st,rt,!1,null,"4a6febf6",null)),ot=ct.exports,ut=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"network"},[n("navigation",{attrs:{to:"/",text:"GO HOME"}}),n("points-card")],1)},lt=[],pt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},e._l(e.$store.state.wifiDevices,(function(t){return n("div",{key:t.id,staticClass:"content"},[n("p",{staticClass:"title"},[e._v(" "+e._s(t.accessPointSettings.accessPointOtherSettings.apName)+" ")]),n("p",{staticClass:"subtitle"},[e._v(" "+e._s(t.accessPointSettings.accessPointOtherSettings.roomData.name)+" ")]),n("p",{staticClass:"subtitle"},[e._v(" "+e._s(e.getConnectionStatus(t.id))+" ")]),n("p",{staticClass:"subtitle"},[e._v(" Light: "+e._s(t.accessPointSettings.lightingSettings.intensity||0)+"% ")])])})),0)},dt=[],ft={components:{SpeedTestResult:ie},methods:{getConnectionStatus:function(e){var t,n;if(null!==(t=this.$store.state.realtimeMetrics)&&void 0!==t&&t.meshMetrics){var s=null===(n=this.$store.state.realtimeMetrics)||void 0===n?void 0:n.meshMetrics.find((function(t){return t.apId===e}));if(s)return s.speed.expandedSpeedText}}}},vt=ft,mt=(n("4ac9"),Object(l["a"])(vt,pt,dt,!1,null,"1a483174",null)),ht=mt.exports,gt={data:function(){return{status:{state:"",message:""}}},components:{PointsCard:ht,Navigation:Ae}},bt=gt,_t=(n("5598"),Object(l["a"])(bt,ut,lt,!1,null,"1e355a24",null)),wt=_t.exports,xt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("page not found")]),n("button",{on:{click:function(t){return e.$router.push("/")}}},[e._v("go home")])])},Ct=[],kt={},Ot=Object(l["a"])(kt,xt,Ct,!1,null,null,null),St=Ot.exports;W["c"].add([H["d"],H["f"],H["e"],H["g"],H["b"],H["c"],H["a"]]),r["a"].use(i["a"]),r["a"].use(N["a"]),r["a"].use(L.a),r["a"].component("apexchart",L.a),r["a"].component("font-awesome-icon",U["a"]),r["a"].config.productionTip=!1;var $t=new N["a"]({mode:"hash",routes:[{path:"/",component:Ne},{path:"/network",component:nt},{path:"/devices",component:ot},{path:"/points",component:wt},{path:"*",component:St}]}),Rt=z();new r["a"]({router:$t,store:Rt,render:function(e){return e(B)}}).$mount("#app")},"66cf":function(e,t,n){},"6a90":function(e,t,n){},7432:function(e,t,n){},7679:function(e,t,n){"use strict";n("b939")},7892:function(e,t,n){},"7d16":function(e,t,n){},"85ec":function(e,t,n){},"87e4":function(e,t,n){"use strict";n("2f72")},"8c9f":function(e,t,n){},"8fb0":function(e,t,n){"use strict";n("66cf")},"97db":function(e,t,n){},"9ee0":function(e,t,n){},a2c8:function(e,t,n){},aae7:function(e,t,n){"use strict";n("97db")},af31:function(e,t,n){"use strict";n("9ee0")},b246:function(e,t,n){},b939:function(e,t,n){},c689:function(e,t,n){},c770:function(e,t,n){"use strict";n("a2c8")},c78b:function(e,t,n){"use strict";n("17a6")},c9a3:function(e,t,n){},d85f:function(e,t,n){"use strict";n("b246")},db3b:function(e,t,n){},e4af:function(e,t,n){"use strict";n("8c9f")},e93f:function(e,t,n){"use strict";n("c689")},fba0:function(e,t,n){"use strict";n("7892")}});
//# sourceMappingURL=app.1608e731.js.map