webpackJsonp([341],{1832:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){function r(t){var e=t.baseFormData;return{statusFlg:e.status_flg,salesId:e.salesId,filter:e.fastquery,pageLength:t.pageSize,pageStart:t.currentPage}}var n=a(38),s=a.n(n),i=a(22),o=a.n(i),c=a(256),u=a.n(c),p=a(3111),l=a(491),d=a.n(l),f=a(3113),g=new f.a,m={namespace:"M01338010A020LT00101",state:p.a,subscriptions:{historyListenEvent:function(e){var a=e.history,r=e.dispatch;return a.listen(function(e){var a=d()("/main/:tabindex/0133/80/10/A/020/L/T/001/01/:paramobject/:encryptstr").exec(e.pathname);if(a){var n=t.__COMPARISON__&&t.__COMPARISON__(a);r({type:"init",routeParams:n})}})}},effects:{init:s.a.mark(function e(a,n){var i,o,c,p,l,d,f,m,h=n.select,_=n.put,x=n.call;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(function(t){return t.M01338010A020LT00101});case 2:return i=e.sent,o={validFlg:"1"},e.next=6,x(t.__GETCACHEDATA__,"M01338010A020LT00101",i,[]);case 6:return c=e.sent,p={},c?(p=r(c),p.currentPage=1,p.pageSize=c.currentPage*c.pageSize,p.pageStart=1,p.pageLength=c.currentPage*c.pageSize):p=r(i),e.next=11,x(g.init,p,o);case 11:return l=e.sent,d=l.salesData,f=l.dictTyps,m=u()(i.baseElements),m.salesId.componentOptions.options=f.SALES,e.next=18,_({type:"initComplete",data:{currentPage:d.currentPage,pageSize:d.pageSize,recordsTotal:d.recordsTotal,list:d.data,routeParams:a.routeParams,baseElements:m,dictionaryData:f},cacheData:c});case 18:case"end":return e.stop()}},e,this)}),queryList:s.a.mark(function t(e,a){var n,i,o,c=a.select,u=a.put,p=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(function(t){return t.M01338010A020LT00101});case 2:return n=t.sent,i=r(n),i.pageStart=1,i.pageLength=100,t.next=8,p(g.queryListConfigPeriod,i);case 8:return o=t.sent,t.next=11,u({type:"queryListComplete",data:{pageStart:o.currentPage,currentPage:o.currentPage,pageLength:o.pageSize,pageSize:o.pageSize,recordsTotal:o.recordsTotal,list:o.data}});case 11:case"end":return t.stop()}},t,this)}),updatePosValidConfig:s.a.mark(function t(e,a){var r,n=e.params,i=(e.cb,a.select),o=a.put,c=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(function(t){return t.M01338010A020LT00101});case 2:return r=t.sent,t.next=5,c(g.updatePosValidConfigPeriod,n);case 5:return t.next=7,o({type:"init",routeParams:r.routeParams});case 7:case"end":return t.stop()}},t,this)}),currentPageChange:s.a.mark(function t(e,a){var n,i,o,c,u=a.select,p=a.put,l=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(function(t){return t.M01338010A020LT00101});case 2:return n=t.sent,i=r(n),i=Object.assign({},i,e.paramdata),t.next=7,l(g.queryListConfigPeriod,i);case 7:return o=t.sent,c=Object.assign([],n.list),n.currentPage>o.currentPage?c.unshift.apply(c,o.data):c.push.apply(c,o.data),t.next=12,p({type:"queryListComplete",data:{currentPage:o.currentPage,pageSize:o.pageSize,recordsTotal:o.recordsTotal,list:c}});case 12:case"end":return t.stop()}},t,this)}),confirmCbDispatch:s.a.mark(function t(e,a){var r=(a.select,a.put);a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=3;break}return t.next=3,r({type:e.cbParams.cbDispatchTyp,params:e.cbParams.paramdata,successmessage:e.cbParams.successmessage});case 3:case"end":return t.stop()}},t,this)})},reducers:{updateBaseFormData:function(t,e){return Object.assign({},t,{baseFormData:Object.assign({},t.baseFormData,e.formData)})},updateRootStateProp:function(t,e){return Object.assign({},t,e.updateObj)},initComplete:function(t,e){return o()(e.cacheData)>0?Object.assign({},e.cacheData,{columnData:p.a.columnData,list:e.data.list,recordsTotal:e.data.recordsTotal,currentPage:e.data.currentPage,pageSize:e.data.pageSize}):Object.assign({},t,e.data)},queryListComplete:function(t,e){return Object.assign({},t,e.data)}}};e.default=m}.call(e,a(15))},2276:function(t,e,a){"use strict";e.a={fastquery:"\u4ee3\u7801/\u540d\u79f0/....",status_all:"\u5168\u90e8",status_valid:"\u6709\u6548",status_invalid:"\u65e0\u6548",operation:"\u64cd\u4f5c",edit:"\u7f16\u8f91",void:"\u4f5c\u5e9f",recover:"\u6062\u590d",new:"\u65b0\u5efa",batchInvalid:"\u6279\u91cf\u65e0\u6548",total:"\u603b\u5171",item:"\u6761",query:"\u67e5\u8be2",salesId:"\u9500\u552e\u70b9",sales_id:"\u9500\u552e\u70b9",period_cd:"\u4ee3\u7801",period_nm:"\u540d\u79f0",period_flg:"\u9910\u70b9\u540d\u79f0",start_tm:"\u5f00\u9910\u65f6\u95f4",end_tm:"\u95ed\u9910\u65f6\u95f4",memo:"\u5907\u6ce8",status_flg:"\u662f\u5426\u6709\u6548",period_flg_0:"\u65e9\u9910",period_flg_1:"\u5348\u9910",period_flg_2:"\u4e0b\u5348\u8336",period_flg_3:"\u665a\u9910",period_flg_4:"\u591c\u5bb5",period_flg_5:"\u5176\u4ed6",successmessage:"\u64cd\u4f5c\u6210\u529f",noCheckedMessage:"\u8bf7\u9009\u62e9\u65e0\u6548\u6570\u636e"}},3111:function(t,e,a){"use strict";var r=a(2276),n=a(3112);e.a={rightOperTop:{},rightOperCenter:{new:{text:r.a.new,className:"icon20 img50",permsCode:n.a[33200005],keyboard:"GF16"},batchInvalid:{text:r.a.batchInvalid,className:"icon20 img48",permsCode:n.a[33200006],keyboard:"GF18"}},rightOperBottom:{},baseElements:{fastquery:{type:"input",width:3,componentOptions:{text:"",placeholder:r.a.fastquery}},salesId:{type:"select",width:3,componentOptions:{text:r.a.salesId,selection:!0}},status_all:{type:"checkbox",componentOptions:{label:r.a.status_all,radio:!0}},status_valid:{type:"checkbox",componentOptions:{label:r.a.status_valid,radio:!0}},status_invalid:{type:"checkbox",componentOptions:{label:r.a.status_invalid,radio:!0}}},baseFormData:{fastquery:"",status_flg:"1"},columnData:[{title:r.a.sales_id,field:"sales_id",width:"100px"},{title:r.a.period_cd,field:"period_cd",width:"100px"},{title:r.a.period_nm,field:"period_nm",width:"100px"},{title:r.a.period_flg,field:"period_flg",width:"100px",template:function(t){return{toolTipText:r.a["period_flg_"+t.text],content:r.a["period_flg_"+t.text]}}},{title:r.a.start_tm,field:"start_tm",width:"100px"},{title:r.a.end_tm,field:"end_tm",width:"100px"},{title:r.a.memo,field:"memo",width:"100px"},{title:r.a.status_flg,field:"status_flg",width:"100px",template:function(t){var e=r.a.status_valid,a=r.a.status_invalid;return"1"===t.datasource.valid_flg?{toolTipText:e,content:e}:{toolTipText:a,content:a}}}],dataIdentityPropName:"period_id",setFor:"period",checkedData:[],currentPage:1,pageSize:30,recordsTotal:0,list:[],dictionaryData:{},routeParams:{},permsData:n.a}},3112:function(t,e,a){"use strict";e.a={33200005:["33200005","33200005G","33200005H"],33200006:["33200006","33200006G","33200006H"]}},3113:function(t,e,a){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function r(n,s){try{var i=e[n](s),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",function(){return p});var s=a(38),i=a.n(s),o=a(257),c=a(260),u=a(489),p=(new u.a,function t(){var e=this;n(this,t),this.init=function(){var t=r(i.a.mark(function t(a,r){var n,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.queryListConfigPeriod(a),e.querylistSalesFront(r)]);case 2:return n=t.sent,s={},s.SALES=Object(c.b)(n[1].data,["salescd","salesnm"],"salesid"),t.abrupt("return",{salesData:n[0],dictTyps:s});case 6:case"end":return t.stop()}},t,e)}));return function(e,a){return t.apply(this,arguments)}}(),this.queryListConfigPeriod=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosPeriod/listGetConfigPeriod","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.updatePosValidConfigPeriod=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosPeriod/savePosValidConfigPeriod","post",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.querylistSalesFront=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosSales/listGetSalesFront","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()})}});