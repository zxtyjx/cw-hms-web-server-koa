webpackJsonp([433],{1491:function(t,n,e){"use strict";function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}Object.defineProperty(n,"__esModule",{value:!0});var o=e(38),c=e.n(o),i=e(17),r=e.n(i),s=e(256),u=e.n(s),p=(e(45),e(2609)),f=e(60),l=(e.n(f),e(2610)),m=new l.a,d={namespace:"M01353020A010LP00301",state:Object.assign({},p.a),subscriptions:{},effects:{init:c.a.mark(function t(n,e){var a,o,i,r,s=(e.select,e.put),f=e.call;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.formData,o=["CONTACTTYP","COUNTRY"],t.next=4,f(m.init,o);case 4:return i=t.sent,r=u()(p.a.elements),r.contacttypId.componentOptions.options=i.CONTACTTYP,r.countryId.componentOptions.options=i.COUNTRY,t.next=10,s({type:"initComplete",elements:r,formData:Object.assign({},p.a.formData,a)});case 10:case"end":return t.stop()}},t,this)}),submitFormData:c.a.mark(function t(n,e){var a,o=(e.select,e.put);e.call;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.formData,t.next=3,o({type:"M01353020A010LT00201/packageContact",formData:a});case 3:return t.next=5,o({type:"SystemModel/updateModalWindowState"});case 5:case"end":return t.stop()}},t,this)})},reducers:{initComplete:function(t,n){var e=n.formData,a=n.elements;return Object.assign({},p.a,{elements:a,formData:e})},updateFormData:function(t,n){var e=null;return e=r()(n,"formData")?Object.assign({},t.formData,n.formData):Object.assign({},t.formData,a({},n.fieldName,n.fieldValue)),Object.assign({},t,{formData:e})}}};n.default=d},2609:function(t,n,e){"use strict";(function(t){var a=e(585);t.__GETBUSINESSDT__&&t.__GETBUSINESSDT__();n.a={elements:{contacttypId:{type:"select",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.contacttypId}},countryId:{type:"select",width:5,componentOptions:{selection:!0,text:a.a.countryId}},contact_ctno:{type:"input",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:a.a.contact_ctno}},note:{type:"input",width:16,componentOptions:{text:a.a.note}}},formData:{contacttypId:"",countryId:"",contact_ctno:"",note:"",receiptFlg:"0"}}}).call(n,e(15))},2610:function(t,n,e){"use strict";function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",function(){return i});var o=(e(257),e(489)),c=new o.a,i=function t(){a(this,t),this.init=function(t){return c.queryDictionary(t)}}}});