webpackJsonp([452],{1670:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(38),r=n.n(a),s=n(256),u=n.n(s),o=n(2508),c=n(60),i=(n.n(c),n(2833)),p=new i.a,m={namespace:"M01338020A060LP00201",state:o.a,effects:{init:r.a.mark(function t(e,n){var a,s,o=n.select,c=(n.call,n.put);return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(function(t){return t.M01338020A060LP00201});case 2:return a=t.sent,s=u()(a.baseElements),t.next=6,c({type:"updateState",baseElements:s});case 6:case"end":return t.stop()}},t,this)}),edit:r.a.mark(function t(e,n){var a,s,o,c=e.id,i=n.select,m=n.call,f=n.put;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(p.queryPosMakeList,{id:c});case 2:return a=t.sent,t.next=5,i(function(t){return t.M01338020A060LP00201});case 5:return s=t.sent,o=u()(s.baseFormdata),o.param_cd=a.resultData.param_cd,o.param_drpt=a.resultData.param_drpt,o.seq=a.resultData.seq,o.note=a.resultData.note,t.next=13,f({type:"updateState",baseFormdata:o,origandata:a.resultData});case 13:case"end":return t.stop()}},t,this)}),save:r.a.mark(function t(e,n){var a=e.ifedit,s=e.postdata,u=(n.select,n.call);n.put;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(a?p.updatePosMake:p.savePosMake,s);case 2:case"end":return t.stop()}},t,this)}),updateFrom:r.a.mark(function t(e,n){var a=e.baseFormdata,s=(n.select,n.call,n.put);return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s({type:"updateState",baseFormdata:a});case 2:case"end":return t.stop()}},t,this)})},reducers:{updateState:function(t,e){return Object.assign({},t,e)}}};e.default=m},2508:function(t,e,n){"use strict";var a=n(60),r=(n.n(a),n(630));e.a={origandata:{},baseFormdata:{param_cd:"",param_drpt:"",seq:"",note:""},baseElements:{param_cd:{type:"input",width:16,interactionOptions:{isMust:!0},componentOptions:{text:r.a["FormView-Master-Lable-Title-2"],maxLength:2,minLength:2,checkType:"zhfloat"}},param_drpt:{type:"input",width:16,interactionOptions:{isMust:!0},componentOptions:{text:r.a["FormView-Master-Lable-Title-3"]}},seq:{type:"input",width:16,componentOptions:{text:r.a["FormView-Master-Lable-Title-1"]}},note:{type:"input",width:16,componentOptions:{text:r.a["FormView-Master-Lable-Title-4"]}}}}},2833:function(t,e,n){"use strict";function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function a(r,s){try{var u=e[r](s),o=u.value}catch(t){return void n(t)}if(!u.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}return a("next")})}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return i});var s=n(38),u=n.n(s),o=n(257),c=n(489),i=(new c.a,function t(){var e=this;r(this,t),this.getDictionary=function(){var t=a(u.a.mark(function t(n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3130010/CmmPosParam/listGetData","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.savePosMake=function(){var t=a(u.a.mark(function t(n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3130010/CmmPosParam/saveCmmPosParam","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.updatePosMake=function(){var t=a(u.a.mark(function t(n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3130010/CmmPosParam/updateCmmPosParam","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryPosMakeList=function(){var t=a(u.a.mark(function t(n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3130010/CmmPosParam/getCmmPosParam","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.savePosMakeValid=function(){var t=a(u.a.mark(function t(n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3130010/CmmPosParam/delIdsCmmPosParam","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()})}});