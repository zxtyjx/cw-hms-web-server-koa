webpackJsonp([430],{1495:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0});var o=n(36),a=n.n(o),s=n(21),c=n.n(s),r=n(256),u=n.n(r),l=n(2611),m=n(70),p=(n.n(m),n(2612)),f=new p.a,d={namespace:"M01353020A010LP00601",state:Object.assign({},l.a),subscriptions:{},effects:{init:a.a.mark(function t(e,n){var i,o,s,c,r,m=(n.select,n.put),p=n.call;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.formData,o=["POSTYP","UNITDATASOURCE"],t.next=4,p(f.init,o);case 4:return s=t.sent,c=u()(l.a.elements),c.itemIds.componentOptions.options=s.POSTYP,r={itemIds:c.itemIds},"5"!==i.noticeFlg?delete c.itemIds:i.itemIds=i.subDto.itemIds,t.next=11,m({type:"initComplete",elements:c,posPoint:r,formData:Object.assign({},l.a.formData,i)});case 11:case"end":return t.stop()}},t,this)}),submitFormData:a.a.mark(function t(e,n){var i,o=(n.select,n.put);n.call;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.formData,t.next=3,o({type:"M01353020A010LT00201/packageNotice",formData:i});case 3:return t.next=5,o({type:"SystemModel/updateModalWindowState"});case 5:case"end":return t.stop()}},t,this)})},reducers:{initComplete:function(t,e){var n=e.formData,i=e.elements,o=e.posPoint;return Object.assign({},l.a,{elements:i,formData:n,posPoint:o})},updateFormData:function(t,e){var n=null,o=null;return n=c()(e,"formData")?Object.assign({},t.formData,e.formData):Object.assign({},t.formData,i({},e.fieldName,e.fieldValue)),"5"===e.formData.noticeFlg?o=Object.assign({},t.elements,t.posPoint):(delete t.elements.itemIds,o=Object.assign({},t.elements)),Object.assign({},t,{formData:n,elements:o})}}};e.default=d},2611:function(t,e,n){"use strict";(function(t){var i=n(586),o=(t.__GETBUSINESSDT__&&t.__GETBUSINESSDT__(),t.__UNITINFO__.UnitNm);e.a={elements:{unitNm:{type:"input",width:16,componentOptions:{text:i.a.unitDrpt,disabled:!0}},noticeFlg:{type:"select",width:16,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:i.a.noticeFlg,options:[{key:"1",text:i.a.noticeFlgoptions1,value:"0"},{key:"2",text:i.a.noticeFlgoptions2,value:"1"},{key:"3",text:i.a.noticeFlgoptions3,value:"2"},{key:"4",text:i.a.noticeFlgoptions4,value:"3"},{key:"5",text:i.a.noticeFlgoptions5,value:"4"}]}},noticeTitle:{type:"input",width:16,componentOptions:{text:i.a.noticeTitle}},memo:{type:"input",width:16,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:i.a.memo}},itemIds:{type:"select",width:16,interactionOptions:{findCondition:""},componentOptions:{selection:!0,text:i.a.itemIds,multiple:!0}}},formData:{unitNm:o,unit_uid:t.__UNITINFO__.UnitUid,noticeFlg:"",itemIds:[],noticeTitle:"",memo:""},posPoint:{}}}).call(e,n(16))},2612:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return s});var o=(n(257),n(487)),a=new o.a,s=function t(){i(this,t),this.init=function(t){return a.queryDictionary(t)}}}});