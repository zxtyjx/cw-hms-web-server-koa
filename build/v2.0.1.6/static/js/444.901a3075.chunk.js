webpackJsonp([444],{1548:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0});var a=n(36),i=n.n(a),s=n(21),u=n.n(s),o=n(256),c=n.n(o),f=n(2672),p=n(489),l=(n.n(p),n(260),n(2673)),m=new l.a,d={namespace:"M01338030A010LP00201",state:Object.assign({},f.a),effects:{init:i.a.mark(function t(e,n){var r,a,s,u,o,p,l=(n.select,n.put),d=n.call;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.id,a=c()(f.a),t.next=4,d(m.init,r);case 4:return s=t.sent,u=s.detailData,o={},u&&(o=Object.assign({},u||{})),p=a.elements,t.next=11,l({type:"initComplete",formData:o,elements:p});case 11:case"end":return t.stop()}},t,this)}),submitFormData:i.a.mark(function t(e,n){var r,a,s,u,o,f,p=n.select,l=n.put,d=n.call;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.formData,a=e.paramId,t.next=3,p(function(t){return t});case 3:if(s=t.sent,u=s.M01338030A010LP00201,o=c()(u.formData),Object.assign(o,r),f={submitData:o},Object.assign(f,{displayData:s}),Object.assign(f,{originData:{}}),a){t.next=17;break}return t.next=13,d(m.savePosPrinter,f);case 13:return t.next=15,l({type:e.rsFinishDispatchType});case 15:t.next=21;break;case 17:return t.next=19,d(m.updatePosPrinter,f);case 19:return t.next=21,l({type:e.rsFinishDispatchType});case 21:return t.next=23,l({type:"SystemModel/updateModalWindowState"});case 23:case"end":return t.stop()}},t,this)})},reducers:{initComplete:function(t,e){return{formData:e.formData,elements:e.elements}},updateFormData:function(t,e){if(u()(e,"formData")){var n=Object.assign({},t.formData,e.formData);return Object.assign({},t,{formData:n})}return Object.assign({},t,{formData:Object.assign({},t.formData,r({},e.fieldName,e.fieldValue))})}}};e.default=d},2672:function(t,e,n){"use strict";var r=n(534);e.a={elements:{printerName:{type:"input",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:r.a.printerName}},printerConf:{type:"input",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:r.a.printerConf}},currentSeq:{type:"input",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{checkType:"zhinteger",text:r.a.currentSeq}}},formData:{}}},2673:function(t,e,n){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(a,i){try{var s=e[a](i),u=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(u).then(function(t){r("next",t)},function(t){r("throw",t)});t(u)}return r("next")})}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return v});var i=n(36),s=n.n(i),u=n(22),o=n.n(u),c=n(10),f=n.n(c),p=n(45),l=n.n(p),m=n(163),d=n.n(m),h=n(81),b=n.n(h),P=n(257),x=n(487),v=(n(260),n(534),new x.a,function t(){var e=this;a(this,t),this.init=function(){var t=r(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!b()(n)&&!d()(n)&&""!==l()(n)){t.next=4;break}return t.abrupt("return",{});case 4:return t.abrupt("return",e._queryPackageConfigInfo(n));case 5:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this._queryPackageConfigInfo=function(){var t=r(s.a.mark(function t(n){var r,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.queryPosPrinter({id:n})]);case 2:if(r=t.sent,f()(r)&&0!=o()(r)){t.next=7;break}throw"\u521d\u59cb\u6253\u5370\u673a\u914d\u7f6e\u5931\u8d25";case 7:if(r[0]&&r[0].resultData&&0!=o()(r[0].resultData)){t.next=11;break}throw"\u67e5\u8be2\u6253\u5370\u673a\u914d\u7f6e\u5931\u8d25";case 11:if(r[0]&&0!=o()(r[0])){t.next=13;break}throw"\u67e5\u8be2\u5171\u540c\u53c2\u6570\u5931\u8d25";case 13:return t.next=15,e.queryPosPrinter({id:n});case 15:return a=t.sent,t.abrupt("return",{detailData:r[0].resultData});case 17:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.savePosPrinter=function(){var t=r(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.a)("/bs/3310010/PosPrinter/savePosPrinter","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.updatePosPrinter=function(){var t=r(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.a)("/bs/3310010/PosPrinter/updatePosPrinter","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryPosPrinter=function(){var t=r(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.a)("/bs/3310010/PosPrinter/getPosPrinter","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()})}});