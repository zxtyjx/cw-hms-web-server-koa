webpackJsonp([437],{1475:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0});var o=n(36),a=n.n(o),s=n(18),c=n.n(s),l=n(21),r=n.n(l),u=n(256),p=n.n(u),m=n(2574),f=n(70),d=(n.n(f),n(2575)),O=new d.a,g={namespace:"M01352010A010LP00501",state:Object.assign({},m.a),subscriptions:{},effects:{init:a.a.mark(function t(e,n){var i,o,s,c,l,r,u=(n.select,n.put),f=n.call;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.formData,o=e.showStus,s=["POSTYP","UNITDATASOURCE"],t.next=4,f(O.init,s);case 4:return c=t.sent,l=p()(m.a.elements),l.itemIds.componentOptions.options=c.POSTYP,o&&(l=D(l)),r={itemIds:l.itemIds},"5"!==i.noticeFlg?delete l.itemIds:i.itemIds=i.subDto.itemIds,t.next=12,u({type:"initComplete",elements:l,posPoint:r,formData:Object.assign({},m.a.formData,i)});case 12:case"end":return t.stop()}},t,this)}),submitFormData:a.a.mark(function t(e,n){var i,o=(n.select,n.put);n.call;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.formData,t.next=3,o({type:"M01352010A010LT00201/packageNotice",formData:i});case 3:return t.next=5,o({type:"SystemModel/updateModalWindowState"});case 5:case"end":return t.stop()}},t,this)})},reducers:{initComplete:function(t,e){var n=e.formData,i=e.elements,o=e.posPoint;return Object.assign({},m.a,{elements:i,formData:n,posPoint:o})},updateFormData:function(t,e){var n=null,o=null;return n=r()(e,"formData")?Object.assign({},t.formData,e.formData):Object.assign({},t.formData,i({},e.fieldName,e.fieldValue)),"5"===e.formData.noticeFlg?o=Object.assign({},t.elements,t.posPoint):(delete t.elements.itemIds,o=Object.assign({},t.elements)),Object.assign({},t,{formData:n,elements:o})}}},D=function(t){return c()(t,function(t){r()(t,"componentOptions")?t.componentOptions.disabled=!0:t.componentOptions={disabled:!0}}),t};e.default=g},2574:function(t,e,n){"use strict";(function(t){var i=n(691);t.__GETBUSINESSDT__&&t.__GETBUSINESSDT__();e.a={elements:{unitDrpt:{type:"input",width:16,componentOptions:{text:i.a.unitDrpt,disabled:!0}},defaultFlg:{type:"select",width:16,defaultValue:"1",interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:i.a.defaultFlg,options:[{key:"1",text:i.a.defaultFlgoptions1,value:"0"},{key:"2",text:i.a.defaultFlgoptions2,value:"1"}]}},noticeFlg:{type:"select",width:16,defaultValue:"0",interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:i.a.noticeFlg,options:[{key:"1",text:i.a.noticeFlgoptions1,value:"0"},{key:"2",text:i.a.noticeFlgoptions2,value:"1"},{key:"3",text:i.a.noticeFlgoptions3,value:"2"},{key:"4",text:i.a.noticeFlgoptions4,value:"3"},{key:"5",text:i.a.noticeFlgoptions5,value:"4"}]}},noticeTitle:{type:"input",width:16,componentOptions:{text:i.a.noticeTitle}},memo:{type:"input",width:16,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:i.a.memo}},itemIds:{type:"select",width:16,interactionOptions:{findCondition:""},componentOptions:{selection:!0,text:i.a.itemIds,multiple:!0}}},formData:{unitDrpt:t.__UNITINFO__.UnitNm,defaultFlg:"0",noticeFlg:"",itemIds:[],noticeTitle:"",memo:""},posPoint:{}}}).call(e,n(16))},2575:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return s});var o=(n(257),n(487)),a=new o.a,s=function t(){i(this,t),this.init=function(t){return a.queryDictionary(t)}}}});