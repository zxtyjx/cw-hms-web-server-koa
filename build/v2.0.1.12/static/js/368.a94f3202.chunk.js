webpackJsonp([368],{1638:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(t){function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var o=e(38),r=e.n(o),s=e(17),i=e.n(s),c=e(2793),u=e.n(c),l=e(86),p=e.n(l),h=e(22),f=e.n(h),m=e(256),d=e.n(m),b=e(1),O=(e.n(b),e(2794)),C=e(492),v=e.n(C),w=e(37),y=(e(260),e(543)),N=e(2795),x=function(){var t="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,e,a,o){var r=n&&n.defaultProps,s=arguments.length-3;if(e||0===s||(e={}),e&&r)for(var i in r)void 0===e[i]&&(e[i]=r[i]);else e||(e=r||{});if(1===s)e.children=o;else if(s>1){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+3];e.children=c}return{$$typeof:t,type:n,key:void 0===a?null:""+a,ref:null,props:e,_owner:null}}}(),g=new N.a,D=x(w.l,{className:"img188icon"}),S=x(w.l,{className:"img188icon"}),j={namespace:"M01348010A020LP00101",state:O.a,subscriptions:{historyListenEvent:function(n){var e=n.history,a=n.dispatch;return e.listen(function(n){var e=v()("/main/:tabIndex/0134/80/10/A/020/L/P/001/01/:paramobject/:encryptstr").exec(n.pathname);if(e){var o=t.__COMPARISON__&&t.__COMPARISON__(e);a({type:"init",routeParams:o})}})}},effects:{init:r.a.mark(function t(n,e){var a,o,s,i,c,u,l,h,m,b,C,v=(e.select,e.put),w=e.call;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.switchNo,o=n.channelNo,s=n.switchheard,i=n.backDispatch,c={switchNo:a,channelNo:o},t.next=4,w(g.init,c);case 4:return u=t.sent,l=u.data,h=u.dictionaryData,m=d()(O.a.elements),m.channelNo.componentOptions.options=h.SWITCH_NO,m.switchordertypeId.componentOptions.options=h.SWITCHORDERTYPE,f()(l)>0?(Object.assign(m,{statusFlg:{type:"select",width:8,interactionOptions:{findCondition:"",isMust:!0},componentOptions:{selection:!0,text:y.a.statusFlg,options:[{text:y.a.statusFlg_0,value:"0"},{text:y.a.statusFlg_1,value:"1"}]}}}),m.channelNo.componentOptions.options&&(b=p()(m.channelNo.componentOptions.options,function(t){return t.value===l.channelNo}),b&&"S"===b["data-datasource"].channel_flg?m.channelNo.componentOptions.text=x("div",{className:"SwClass"},void 0,x("span",{},void 0,y.a.channelNo),D):m.channelNo.componentOptions.text=y.a.channelNo)):Object.assign(l,{switchNo:a}),Object.assign(l,{switchheard:s}),C=Object.assign({},O.a.formData,l),t.next=15,v({type:"initComplete",data:Object.assign({},O.a,{formData:C,elements:m,dictionaryData:h,routeParams:n})});case 15:case"end":return t.stop()}},t,this)}),updateFormElement:r.a.mark(function t(n,e){var a,o,s,i=e.select,c=e.put;e.call;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(function(t){return t.M01348010A020LP00101});case 2:return a=t.sent,o=u()(a),"channelNo"===n.fieldname&&o.elements.channelNo.componentOptions.options&&(s=p()(o.elements.channelNo.componentOptions.options,function(t){return t.value===n.formData.channelNo}),s&&"S"===s["data-datasource"].channel_flg?o.elements.channelNo.componentOptions.text=x("div",{className:"SwClass"},void 0,x("span",{},void 0,y.a.channelNo),S):o.elements.channelNo.componentOptions.text=y.a.channelNo),o.formData=n.formData,t.next=8,c({type:"updateFormElementComplete",data:Object.assign({},o)});case 8:case"end":return t.stop()}},t,this)}),submitFormData:r.a.mark(function t(n,e){var a,o,s,i,c=e.select,u=e.put,l=e.call;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(function(t){return t});case 2:if(a=t.sent,n.successmessage=y.a.successmessage,o=a.M01348010A020LP00101,s=d()(o),i={submitData:s.formData},Object.assign(i,{displayData:a}),Object.assign(i,{originData:{}}),!s.routeParams.channelNo||!s.routeParams.switchNo){t.next=14;break}return t.next=12,l(g.updateCrsCcmSubchnl,i);case 12:t.next=16;break;case 14:return t.next=16,l(g.saveCrsCcmSubchnl,i);case 16:return t.next=18,u({type:"SystemModel/updateModalWindowState"});case 18:return t.next=20,u(s.routeParams.backDispatch);case 20:case"end":return t.stop()}},t,this)})},reducers:{initComplete:function(t,n){return Object.assign({},t,n.data)},updateClearModelDataComplete:function(t,n){return Object.assign({},t,n.data)},updateFormElementComplete:function(t,n){return Object.assign({},t,n.data)},updateFormData:function(t,n){if(i()(n,"formData")){var e=Object.assign({},t.formData,n.formData);return Object.assign({},t,{formData:e})}return Object.assign({},t,{formData:Object.assign({},t.formData,a({},n.fieldName,n.fieldValue))})}}};n.default=j}.call(n,e(15))},2793:function(t,n,e){function a(t,n){return n="function"==typeof n?n:void 0,o(t,r,n)}var o=e(171),r=4;t.exports=a},2794:function(t,n,e){"use strict";var a=e(543);n.a={elements:{channelNo:{type:"select",width:8,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.channelNo,options:[]}},switchheard:{type:"input",width:8,interactionOptions:{findCondition:""},componentOptions:{disabled:!0,text:a.a.switchheard}},switchordertypeId:{type:"select",width:8,interactionOptions:{findCondition:"",enableNullValue:!0},componentOptions:{selection:!0,text:a.a.switchordertypeId,options:[]}},subchnlCd:{type:"input",width:8,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:a.a.subchnlCd}},memo:{type:"input",width:16,interactionOptions:{findCondition:""},componentOptions:{text:a.a.memo}},seq:{type:"input",width:8,interactionOptions:{findCondition:"",checkType:"zhinteger"},componentOptions:{text:a.a.seq}}},formData:{switchNo:"",statusFlg:"1"},dictionaryData:{},routeParams:{}}},2795:function(t,n,e){"use strict";function a(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,e){function a(o,r){try{var s=n[o](r),i=s.value}catch(t){return void e(t)}if(!s.done)return Promise.resolve(i).then(function(t){a("next",t)},function(t){a("throw",t)});t(i)}return a("next")})}}function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",function(){return f});var r=e(38),s=e.n(r),i=e(22),c=e.n(i),u=e(257),l=e(260),p=e(489),h=new p.a,f=function t(){var n=this;o(this,t),this.init=function(){var t=a(s.a.mark(function t(e){var a,o,r,i,p,f;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.switchNo,o=e.channelNo,r=null,null!==o&&void 0!==o&&""!==o||(o=""),!a||!o){t.next=9;break}return t.next=6,Promise.all([Object(u.a)("/bs/3550010/CrsCcmSubchnl/getCrsChannelForSubchnl","get",{switchNo:a,channelNo:o}),h.queryDictionary(["SWITCHORDERTYPE"]),Object(u.a)("/bs/3550010/CrsCcmSubchnl/getCrsCcmSubchnlDetail","get",{switchNo:a,channelNo:o})]);case 6:r=t.sent,t.next=12;break;case 9:return t.next=11,Promise.all([Object(u.a)("/bs/3550010/CrsCcmSubchnl/getCrsChannelForSubchnl","get",{switchNo:a,channelNo:o}),h.queryDictionary(["SWITCHORDERTYPE"])]);case 11:r=t.sent;case 12:return i=Object(l.b)(r[0].data,["channel_cd","channel_nm"],"channel_no"),p=Object.assign({},r[1],{SWITCH_NO:i}),f={},3===c()(r)&&(f=r[2].resultData),t.abrupt("return",{data:f,dictionaryData:p});case 17:case"end":return t.stop()}},t,n)}));return function(n){return t.apply(this,arguments)}}(),this.saveCrsCcmSubchnl=function(){var t=a(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u.a)("/bs/3550010/CrsCcmSubchnl/saveCrsCcmSubchnl","post",e));case 1:case"end":return t.stop()}},t,n)}));return function(n){return t.apply(this,arguments)}}(),this.updateCrsCcmSubchnl=function(){var t=a(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u.a)("/bs/3550010/CrsCcmSubchnl/updateCrsCcmSubchnl","post",e));case 1:case"end":return t.stop()}},t,n)}));return function(n){return t.apply(this,arguments)}}()}}});