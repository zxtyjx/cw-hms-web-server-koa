webpackJsonp([437],{1503:function(t,n,e){"use strict";function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}Object.defineProperty(n,"__esModule",{value:!0});var o=e(38),i=e.n(o),s=e(31),r=e.n(s),c=e(18),p=e.n(c),d=e(17),m=e.n(d),u=e(256),l=e.n(u),f=e(2629),I=e(60),O=(e.n(I),e(2630)),y=new O.a,D={namespace:"M01353020A010LP00501",state:Object.assign({},f.a),subscriptions:{},effects:{init:i.a.mark(function t(n,e){var a,o,s,r,c=(e.select,e.put),p=e.call;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.formData,o=["PROVINCE","COUNTRY","CITY","DISTRICT"],t.next=4,p(y.init,o);case 4:return s=t.sent,r=l()(f.a.elements),r.provinceId.componentOptions.options=s.PROVINCE,r.countryId.componentOptions.options=s.COUNTRY,r.districtId.componentOptions.options=s.DISTRICT,r.cityId.componentOptions.options=s.CITY,t.next=12,c({type:"initComplete",elements:r,dictionaryData:s,formData:Object.assign({},f.a.formData,a)});case 12:case"end":return t.stop()}},t,this)}),submitFormData:i.a.mark(function t(n,e){var a,o=(e.select,e.put);e.call;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.formData,t.next=3,o({type:"M01353020A010LT00201/packageAddress",formData:a});case 3:return t.next=5,o({type:"SystemModel/updateModalWindowState"});case 5:case"end":return t.stop()}},t,this)})},reducers:{initComplete:function(t,n){var e=n.formData,a=n.elements,o=n.dictionaryData;return Object.assign({},f.a,{elements:a,formData:e,dictionaryData:o})},updateFormData:function(t,n){var e=null;return e=m()(n,"formData")?Object.assign({},t.formData,n.formData):Object.assign({},t.formData,a({},n.fieldName,n.fieldValue)),Object.assign({},t,{formData:e})},setGroupBusinessDictionary:function(t,n){var e=t.dictionaryData[n.params.key],o=[],i={};n.params&&p()(e,function(t,e){r()(t["data-datasource"].paramgrp_id)===n.params.paramgrpId&&o.push(t)});var s=l()(t.elements);if("PROVINCE"===n.params.key){var c;s.provinceId.componentOptions.options=o,s.cityId.componentOptions.options=[],s.districtId.componentOptions.options=[],i=Object.assign({},t.formData,(c={},a(c,n.params.flg,n.params.paramgrpId),a(c,"provinceId",""),a(c,"cityId",""),a(c,"districtId",""),c))}else if("CITY"===n.params.key){var d;s.cityId.componentOptions.options=o,s.districtId.componentOptions.options=[],i=Object.assign({},t.formData,(d={},a(d,n.params.flg,n.params.paramgrpId),a(d,"cityId",""),a(d,"districtId",""),d))}else if("DISTRICT"===n.params.key){var m;s.districtId.componentOptions.options=o,i=Object.assign({},t.formData,(m={},a(m,n.params.flg,n.params.paramgrpId),a(m,"districtId",""),m))}else i=Object.assign({},t.formData,a({},n.params.flg,n.params.paramgrpId));return Object.assign({},t,{elements:s,formData:i})}}};n.default=D},2629:function(t,n,e){"use strict";(function(t){var a=e(589);t.__GETBUSINESSDT__&&t.__GETBUSINESSDT__();n.a={elements:{countryId:{type:"select",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.countryId}},provinceId:{type:"select",width:5,interactionOptions:{findCondition:""},componentOptions:{selection:!0,text:a.a.provinceId}},cityId:{type:"select",width:5,interactionOptions:{findCondition:""},componentOptions:{selection:!0,text:a.a.cityId}},districtId:{type:"select",width:5,componentOptions:{selection:!0,text:a.a.zoneNo}},address1:{type:"input",width:10,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:a.a.address1}},postNo:{type:"input",width:5,componentOptions:{text:a.a.postNo}},commonFlg:{type:"select",width:5,defaultValue:"1",componentOptions:{selection:!0,text:a.a.commonFlg,options:[{key:"1",text:a.a.commonFlgoptions1,value:"0"},{key:"2",text:a.a.commonFlgoptions2,value:"1"}]}}},formData:{addressFlg:"0",commonFlg:"0",defaultFlg:"0"},dictionaryData:{}}}).call(n,e(15))},2630:function(t,n,e){"use strict";function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",function(){return s});var o=(e(257),e(489)),i=new o.a,s=function t(){a(this,t),this.init=function(t){return i.queryDictionary(t)}}}});