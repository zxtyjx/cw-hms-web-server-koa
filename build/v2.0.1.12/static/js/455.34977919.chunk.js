webpackJsonp([455],{1420:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0});var a=n(38),i=n.n(a),o=n(17),s=n.n(o),u=n(2518),c=n(491),p=(n.n(c),n(260),n(2205)),f=new p.a,l={namespace:"M01328005A050LP00201",state:u.a,effects:{init:i.a.mark(function t(e,n){var r,a=(n.select,n.put);n.call;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={},r=-1===e.id?{roleNm:"",seq:""}:{roleNm:e.roleNm,seq:e.seq},t.next=4,a({type:"initComplete",formData:Object.assign({},u.a.formData,r)});case 4:case"end":return t.stop()}},t,this)}),submitFormData:i.a.mark(function t(e,n){var r,a,o=n.select,s=n.put,u=n.call;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(function(t){return t});case 2:if(r=t.sent,a=null,-1!==e.paramId){t.next=10;break}return a={displayData:r,originData:{},submitData:{roleNm:e.formData.roleNm,seq:e.formData.seq}},t.next=8,u(f.addRole,a);case 8:t.next=13;break;case 10:return a={displayData:r,originData:e.originData,submitData:{id:e.paramId,roleNm:e.formData.roleNm,seq:e.formData.seq,version:e.version}},t.next=13,u(f.updateData,a);case 13:return e.callbackFuntion(),t.next=16,s({type:"SystemModel/updateModalWindowState"});case 16:case"end":return t.stop()}},t,this)})},reducers:{initComplete:function(t,e){var n=e.formData;return Object.assign({},u.a,{formData:n})},updateFormData:function(t,e){if(s()(e,"formData")){var n=Object.assign({},t.formData,e.formData);return Object.assign({},t,{formData:n})}return Object.assign({},t,{formData:Object.assign({},t.formData,r({},e.fieldName,e.fieldValue))})}}};e.default=l},2205:function(t,e,n){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(a,i){try{var o=e[a](i),s=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}return r("next")})}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return c});var i=n(38),o=n.n(i),s=n(257),u=(n(260),n(489)),c=(new u.a,function t(){var e=this;a(this,t),this.init=function(){var t=r(o.a.mark(function t(n){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.getRoleList(n),t.abrupt("return",r);case 2:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.getRoleList=function(){var t=r(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3140010/GrpRole/getListData","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.deleteRole=function(){var t=r(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3140010/GrpRole/delData","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.enableRole=function(){var t=r(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3140010/GrpRole/enableData","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.addRole=function(){var t=r(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3140010/GrpRole/saveData","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.updateData=function(){var t=r(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3140010/GrpRole/updateData","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()})},2518:function(t,e,n){"use strict";var r=n(517);e.a={elements:{roleNm:{type:"input",width:16,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:r.a.roleNm,maxlength:200}},seq:{type:"input",width:16,interactionOptions:{findCondition:""},componentOptions:{checkType:"zhinteger",text:r.a.seq}}},formData:{}}}});