webpackJsonp([442],{1622:function(t,n,e){"use strict";function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}Object.defineProperty(n,"__esModule",{value:!0});var i=e(38),o=e.n(i),r=e(31),s=e.n(r),c=e(18),p=e.n(c),u=e(17),d=e.n(u),l=e(256),m=e.n(l),f=e(2770),y=e(491),h=(e.n(y),e(260),e(2771)),O=new h.a,C={namespace:"M01348010A010LP00301",state:f.a,effects:{init:o.a.mark(function t(n,e){var a,i,r,s,c,p,u,d,l=(e.select,e.put),y=e.call;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={},i=["COUNTRY","PROVINCE","CITY","SYSCHANNEL"],r="",t.next=5,y(O.init,{channelNo:n.channelNo,channelFlg:"S"},i);case 5:if(s=t.sent,c=s.data,p=s.dictTyps,u=s.IftypeDta,n.channelNo&&(a=Object.assign({},c)),d=m()(f.a.elements),d.countryId.componentOptions.options=p.COUNTRY,d.provinceId.componentOptions.options=p.PROVINCE,d.cityId.componentOptions.options=p.CITY,d.syschannelId.componentOptions.options=p.SYSCHANNEL,d.ifsvcverId.componentOptions.options=u,!n.companyData){t.next=22;break}return t.next=20,l({type:"initComplete",data:{elements:d,dictionaryData:p,formData:Object.assign({},f.a.formData,a,n.formData,{corpNm:n.companyData.contractcompDrpt,corpNo:n.companyData.contractComp})}});case 20:t.next=24;break;case 22:return t.next=24,l({type:"initComplete",data:{elements:d,dictionaryData:p,formData:Object.assign({},f.a.formData,a,n.formData)}});case 24:case"end":return t.stop()}},t,this)}),submitFormData:o.a.mark(function t(n,e){var a,i,r,s,c,p,u=e.select,d=e.put,l=e.call;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(function(t){return t});case 2:if(a=t.sent,i=n.formData,r=n.channelNo,s=a.M01348010A010LP00301,c=m()(s.formData),Object.assign(c,i),p=void 0,p=""===c.corpNm?{submitData:Object.assign({},c,{corpNo:""})}:{submitData:Object.assign({},c)},Object.assign(p,{displayData:a}),Object.assign(p,{originData:{}}),!n.channelNo){t.next=16;break}return t.next=14,l(O.updateCrsCcmSwitch,p);case 14:t.next=18;break;case 16:return t.next=18,l(O.saveCrsCcmSwtich,p);case 18:return t.next=20,d({type:"SystemModel/updateModalWindowState"});case 20:return t.next=22,d({type:"M01348010A010LT00101/queryList"});case 22:case"end":return t.stop()}},t,this)})},reducers:{initComplete:function(t,n){return Object.assign({},f.a,n.data)},updateFormData:function(t,n){if(d()(n,"formData")){var e=Object.assign({},t.formData,n.formData);return Object.assign({},t,{formData:e})}return Object.assign({},t,{formData:Object.assign({},t.formData,a({},n.fieldName,n.fieldValue))})},updataNameComplete:function(t,n){return Object.assign({},t,{formData:Object.assign({},t.formData,n.formData)})},setGroupBusinessDictionary:function(t,n){var e=t.dictionaryData[n.params.key],i=[],o={};n.params&&p()(e,function(t,e){t["data-datasource"]&&s()(t["data-datasource"].paramgrp_id)===n.params.paramgrpId&&i.push(t)});var r=m()(t.elements);if("PROVINCE"===n.params.key){var c;r.provinceId.componentOptions.options=i,r.cityId.componentOptions.options=[],o=Object.assign({},t.formData,(c={},a(c,n.params.flg,n.params.paramgrpId),a(c,"provinceId",""),a(c,"cityId",""),c))}else if("CITY"===n.params.key){var u;r.cityId.componentOptions.options=i,o=Object.assign({},t.formData,(u={},a(u,n.params.flg,n.params.paramgrpId),a(u,"cityId",""),u))}else o=Object.assign({},t.formData,a({},n.params.flg,n.params.paramgrpId));return Object.assign({},t,{elements:r,formData:o})}}};n.default=C},2770:function(t,n,e){"use strict";var a=e(614);n.a={elements:{syschannelId:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:a.a.syschannelId,selection:!0}},channelCd:{type:"input",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{className:"label_words_2",text:a.a.channelCd}},channelNm:{type:"input",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:a.a.channelNm}},statusFlg:{type:"select",width:3,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.statusFlg,options:[{text:a.a.statusFlg_0,key:"0",value:"0"},{text:a.a.statusFlg_1,key:"1",value:"1"}]}},channelNmEn:{type:"input",width:8,interactionOptions:{findCondition:""},componentOptions:{text:a.a.channelNmEn}},corpNm:{type:"input",width:8,interactionOptions:{findCondition:""},componentOptions:{readOnly:!0,text:a.a.corpNo,signs:[{className:"icon20 img135",link:!0}]}},channelNmRef:{type:"input",width:4,interactionOptions:{findCondition:""},componentOptions:{text:a.a.channelNmRef}},ifFlg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.ifFlg,options:[{text:a.a.ifFlg_0,key:"0",value:"0"},{text:a.a.ifFlg_1,key:"1",value:"1"},{text:a.a.ifFlg_2,key:"2",value:"2"}]}},ifsvcverId:{type:"select",width:4,interactionOptions:{findCondition:""},componentOptions:{selection:!0,text:a.a.ifsvcverId,enableNullValue:!0}},crsnoPrefix:{type:"input",width:4,interactionOptions:{findCondition:""},componentOptions:{maxlength:5,text:a.a.crsnoPrefix}},countryId:{type:"select",width:4,interactionOptions:{findCondition:""},componentOptions:{selection:!0,text:a.a.countryId,enableNullValue:!0}},provinceId:{type:"select",width:2,interactionOptions:{findCondition:""},componentOptions:{selection:!0,className:"label_words_2",text:a.a.provinceId,enableNullValue:!0}},cityId:{type:"select",width:2,interactionOptions:{findCondition:""},componentOptions:{className:"label_words_2",selection:!0,text:a.a.cityId,enableNullValue:!0}},address1:{type:"input",width:8,interactionOptions:{findCondition:""},componentOptions:{text:a.a.address1}},postNo:{type:"input",width:5,interactionOptions:{findCondition:""},componentOptions:{text:a.a.postNo}},tele_ctno:{type:"input",width:6,interactionOptions:{findCondition:""},componentOptions:{text:a.a.tele_ctno}},email_eml:{type:"input",width:5,interactionOptions:{findCondition:""},componentOptions:{text:a.a.email_eml}},contact:{type:"input",width:5,interactionOptions:{findCondition:""},componentOptions:{text:a.a.contact}},contact_ctno:{type:"input",width:11,interactionOptions:{findCondition:""},componentOptions:{text:a.a.contact_ctno}},seq:{type:"input",width:5,interactionOptions:{findCondition:""},componentOptions:{checkType:"zhinteger",text:a.a.seq}},memo:{type:"input",width:11,interactionOptions:{findCondition:""},componentOptions:{text:a.a.memo}}},formData:{syschannelId:"",channelCd:"",channelNm:"",statusFlg:"1",channelNmEn:"",corpNo:"",channelNmRef:"",ifFlg:"",ifsvcverId:"",crsnoPrefix:"",countryId:"",provinceId:"",cityId:"",address1:"",postNo:"",tele_ctno:"",contact:"",contact_ctno:"",email_eml:"",memo:"",seq:"",channelFlg:"S"},dictionaryData:[]}},2771:function(t,n,e){"use strict";(function(t){function a(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,e){function a(i,o){try{var r=n[i](o),s=r.value}catch(t){return void e(t)}if(!r.done)return Promise.resolve(s).then(function(t){a("next",t)},function(t){a("throw",t)});t(s)}return a("next")})}}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",function(){return d});var o=e(38),r=e.n(o),s=e(257),c=e(489),p=e(260),u=new c.a,d=function n(){var e=this;i(this,n),this.init=function(){var t=a(r.a.mark(function t(n,a){var i,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.channelNo){t.next=7;break}return t.next=3,Promise.all([Object(s.a)("/bs/3550010/CrsCcmChannel/getCrsCcmSwitch","get",n),u.queryDictionary(a),e.queryIftypeIds()]);case 3:return i=t.sent,t.abrupt("return",{data:i[0].resultData,dictTyps:i[1],IftypeDta:Object(p.b)(i[2].data,["ifsvcver_id","brand_drpt"],"ifsvcver_id")});case 7:return t.next=9,Promise.all([u.queryDictionary(a),e.queryIftypeIds()]);case 9:return o=t.sent,t.abrupt("return",{data:{},dictTyps:o[0],IftypeDta:Object(p.b)(o[1].data,["ifsvcver_id","brand_drpt"],"ifsvcver_id")});case 11:case"end":return t.stop()}},t,e)}));return function(n,e){return t.apply(this,arguments)}}(),this.queryIftypeIds=a(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(s.a)("/bs/3130011/PlfPdtIfsvcVer/queryChannelIfsvcDic","get",{wsNo:t.__WSNO__});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n,e)})),this.getDictionary=function(){var t=a(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3550010/CrsDictionary/getDictionary","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(n){return t.apply(this,arguments)}}(),this.updateCrsCcmSwitch=function(){var t=a(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3550010/CrsCcmChannel/updateCrsCcmSwitch","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(n){return t.apply(this,arguments)}}(),this.saveCrsCcmSwtich=function(){var t=a(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3550010/CrsCcmChannel/saveCrsCcmSwtich","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(n){return t.apply(this,arguments)}}()}}).call(n,e(15))}});