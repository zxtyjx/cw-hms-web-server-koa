webpackJsonp([413],{1582:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(38),a=e.n(i),o=e(256),c=e.n(o),s=e(2719),r=e(2720),p=new r.a,u={namespace:"M01328040A011LP00301",state:s.a,subscriptions:{},effects:{init:a.a.mark(function t(n,e){var i,o,r=(e.select,e.put),u=e.call;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=c()(s.a.elements),t.next=3,u(p.init,["TRNSUBCLS"]);case 3:return o=t.sent,i.ppitemInt1.componentOptions.options=o.TRNSUBCLS,t.next=7,r({type:"initComplete",formData:n.formData,elements:i,dictionary:o});case 7:case"end":return t.stop()}},t,this)})},reducers:{initComplete:function(t,n){var e=n.formData,i=n.elements,a=n.dictionary;return Object.assign({},s.a,{formData:e,elements:i,dictionary:a})},updateFormData:function(t,n){return Object.assign({},t,{formData:n.formData})}}};n.default=u},2245:function(t,n,e){"use strict";n.a={ppitemInt1:"\u4ee3\u7801\u5206\u7ec4",exchangeAmt:"\u6d88\u8d39\u91d1\u989d",exchangePoint:"\u53ef\u5f97\u79ef\u5206",confirm:"\u786e\u5b9a",cancel:"\u53d6\u6d88"}},2719:function(t,n,e){"use strict";var i=e(2245);n.a={elements:{ppitemInt1:{type:"select",width:8,interactionOptions:{isMust:!0},componentOptions:{text:i.a.ppitemInt1,selection:!0}},exchangeAmt:{type:"input",width:8,interactionOptions:{isMust:!0},componentOptions:{text:i.a.exchangeAmt}},exchangePoint:{type:"input",width:8,interactionOptions:{isMust:!0},componentOptions:{text:i.a.exchangePoint}}},formData:{}}},2720:function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",function(){return c});var a=e(489),o=new a.a,c=function t(){i(this,t),this.init=function(t){return o.queryDictionary(t)}}}});