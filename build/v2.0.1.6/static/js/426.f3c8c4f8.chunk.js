webpackJsonp([426],{1592:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}Object.defineProperty(n,"__esModule",{value:!0});var a=e(36),i=e.n(a),o=e(21),s=e.n(o),c=e(256),u=e.n(c),p=e(2731),f=e(489),d=(e.n(f),e(260),e(537),e(2732)),m=new d.a,l={namespace:"M01373001A011LP00201",state:p.a,subscriptions:{},effects:{init:i.a.mark(function t(n,e){var r,a,o,s=(e.select,e.put),c=e.call;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(m.init);case 2:return r=t.sent,a=r.dicData,o=u()(p.a.elements),o.pointUnitUid.componentOptions.options=a.UNIT,t.next=8,s({type:"initComplete",data:Object.assign({},p.a,{elements:o,dicData:a})});case 8:case"end":return t.stop()}},t,this)}),submitFormData:i.a.mark(function t(n,e){var r,a,o,s=e.select,c=e.put,p=e.call;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(function(t){return t});case 2:return r=t.sent,a=r.M01373001A011LP00201,o=u()(a),t.next=7,p(m.addLpsPointpolicy,{memberNo:n.memberNo,point:o.formData.point,pointUnitUid:o.formData.pointUnitUid,memo:o.formData.memo});case 7:if(!n.dispatchTyp){t.next=10;break}return t.next=10,c({type:n.dispatchTyp});case 10:return t.next=12,c({type:"SystemModel/updateModalWindowState"});case 12:case"end":return t.stop()}},t,this)})},reducers:{initComplete:function(t,n){return Object.assign({},t,n.data)},updateFormData:function(t,n){if(s()(n,"formData")){var e=Object.assign({},t.formData,n.formData);return Object.assign({},t,{formData:e})}return Object.assign({},t,{formData:Object.assign({},t.formData,r({},n.fieldName,n.fieldValue))})}}};n.default=l},2731:function(t,n,e){"use strict";var r=e(537);n.a={elements:{pointUnitUid:{type:"select",width:8,groupIndex:0,interactionOptions:{findCondition:""},componentOptions:{selection:!0,text:r.a.pointUnitUid}},point:{type:"input",groupIndex:0,width:8,interactionOptions:{findCondition:""},componentOptions:{checkType:"zhfloat",text:r.a.point}},memo:{type:"textarea",width:16,interactionOptions:{findCondition:""},componentOptions:{text:r.a.memo}}},formData:{},dicData:{}}},2732:function(t,n,e){"use strict";function r(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,e){function r(a,i){try{var o=n[a](i),s=o.value}catch(t){return void e(t)}if(!o.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}return r("next")})}}function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",function(){return p});var i=e(36),o=e.n(i),s=e(257),c=e(487),u=e(260),p=(new c.a,function t(){var n=this;a(this,t),this.init=function(){var t=r(o.a.mark(function t(e){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.queryAllUnit()]);case 2:return r=t.sent,a={},a.UNIT=Object(u.b)(r[0].data,["unit_nm"],"unit_uid"),t.abrupt("return",{dicData:a});case 6:case"end":return t.stop()}},t,n)}));return function(n){return t.apply(this,arguments)}}(),this.addLpsPointpolicy=function(){var t=r(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3540010/LpsBnsMember/addLpsPointpolicy","post",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,n)}));return function(n){return t.apply(this,arguments)}}(),this.queryAllUnit=function(){var t=r(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3140010/GrpCmmUnit/queryAllUnit","get",{});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,n)}));return function(n){return t.apply(this,arguments)}}()})}});