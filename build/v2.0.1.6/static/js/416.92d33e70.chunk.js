webpackJsonp([416],{1562:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){function r(t,e,n){return e.countryId=""+t.curcountry_id,e.countryDrpt=t.country.param_drpt,e.provinceId=""+t.curprovince_id,e.cityId=""+t.curcity_id,e.districtId=""+t.curdistrict_id,n.PROVINCE=t.province,n.CITY=t.city,n.DISTRICT=t.district,e}function a(t,e){var n=e._isIdentityCard(t.certificatetyp_id),r=t.gender_id;return n&&(r=e._getGenderFromNum(t.certificate_no).gender),{submitData:{picStr:t.pic_data,picUrl:t.pic_extension,address:t.address,birthday:y()(t.birthday).valueOf(),certeffactstartDt:y()(t.effective_dt).valueOf(),certeffactendDt:y()(t.expiring_dt).valueOf(),certificateNum:t.certificate_no,certificatenationId:1,certificatetypId:""+t.certificatetyp_id,provinceId:t.province_id,cityId:t.city_id,gender:r,guestNm:t.name,nation:t.nation_id}}}var i=n(36),c=n.n(i),s=n(22),u=n.n(s),o=n(86),d=n.n(o),p=n(256),f=n.n(p),l=n(2691),m=n(70),y=n.n(m),I=n(2692),g=new I.a,h={namespace:"M01322010A071LP00101",state:l.a,effects:{init:c.a.mark(function e(n,r){var a,i,s,o,p,m,y=r.call,I=r.select,h=r.put;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(g.init,{dictyp:["IFSUBTYPE","CERTIFICATETYP","NATION"],wsParams:{wsNo:t.__WSNO__},listParams:{guestNm:""}});case 2:return a=e.sent,i=f()(l.a.formData),s=a.dicData.IFSUBTYPE.filter(function(t){return"240001"==t["data-datasource"].paramgrp_id}),n.certTypeId?(o=d()(s,function(t){return t["data-datasource"].param_num1==n.certTypeId}))&&(i.certificatetypId=o.value):u()(s)>0&&(i.certificatetypId=s[0].value),e.next=8,I(function(t){return t.M01322010A071LP00101});case 8:return p=e.sent,m=f()(p.elements),m.certificatetypId.componentOptions.options=s,e.next=13,h({type:"initComplete",data:Object.assign({},l.a,{wsInfo:a.wsInfo,identityList:a.list.data,dictionaryData:Object.assign({},a.dicData,{IFSUBTYPE:s}),formData:i,elements:m})});case 13:case"end":return e.stop()}},e,this)}),scanCardInterface:c.a.mark(function t(e,n){var r,i,s,u=(n.select,n.put),o=n.call;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.requestData){t.next=13;break}return t.next=3,o(g.scanCardInterface,e);case 3:if(!(r=t.sent)){t.next=13;break}if(!r.responseData){t.next=13;break}return i=a(r.responseData,e.scope),t.next=9,o(g.saveScanCard,i);case 9:return s=t.sent,e.isSkip=!0,t.next=13,u({type:"getScanCardList",listParams:e.listParams,CheckedId:s.resultData.id,scope:e.scope});case 13:case"end":return t.stop()}},t,this)}),getScanCardList:c.a.mark(function t(e,n){var r,a,i,s=(n.select,n.put),u=n.call;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(g.getScanCardList,e);case 2:if(r=t.sent,a=r.data,!(a.length>0)){t.next=9;break}return e.isSkip=!0,i=e.CheckedId||a[0].id,t.next=9,s({type:"getScanCardInfo",singleParams:{id:i},scope:e.scope});case 9:return t.next=11,s({type:"getScanCardListComplete",listData:a});case 11:case"end":return t.stop()}},t,this)}),getScanCardInfo:c.a.mark(function t(e,n){var a,i,s,u,o,d=(n.select,n.put),p=n.call;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(g.getScanCardInfo,e);case 2:if(a=t.sent,i=a.resultData,s={},!(u=e.scope._isIdentityCard(i.certificatetypId))){t.next=12;break}return t.next=9,p(g.queryAddress,{identityCard:i.certificateNum});case 9:o=t.sent,o=o.resultDicts[0],i=r(o,i,s);case 12:return i.nationId=i.nation,i.nation=e.scope._getNationInfoById(i.nation).drpt,t.next=16,d({type:"getScanCardInfoComplete",redata:i,busDict:s});case 16:case"end":return t.stop()}},t,this)}),queryAddress:c.a.mark(function t(e,n){var a,i,s,u=(n.select,n.call),o=n.put;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(g.queryAddress,e.addrParams);case 2:return a=t.sent,a=a.resultDicts[0],i=e.otherData||{},s={},i=r(a,i,s),t.next=9,o({type:"queryAddressComplete",redata:i,busDict:s});case 9:case"end":return t.stop()}},t,this)}),deleteScanCard:c.a.mark(function t(e,n){var r=(n.select,n.put),a=n.call;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(g.deleteScanCard,e.requestData);case 2:return t.next=4,r({type:"deleteComplete"});case 4:return e.isSkip=!0,t.next=7,r({type:"getScanCardList",listParams:e.listParams,scope:e.scope});case 7:case"end":return t.stop()}},t,this)})},reducers:{initComplete:function(t,e){return Object.assign({},t,e.data)},getScanCardListComplete:function(t,e){return Object.assign({},t,{identityList:e.listData})},getScanCardInfoComplete:function(t,e){return Object.assign({},t,{formData:e.redata,addressDict:e.busDict,checkedData:[e.redata.id]})},queryAddressComplete:function(t,e){return Object.assign({},t,{formData:Object.assign({},t.formData,e.redata),addressDict:e.busDict})},deleteComplete:function(t,e){return Object.assign({},t,{formData:l.a.formData})},updateRootStateProp:function(t,e){return Object.assign({},t,e.updateObj)}}};e.default=h}.call(e,n(16))},2234:function(t,e,n){"use strict";e.a={certificatetypId:"\u7c7b\u578b",certificateNum:"\u53f7\u7801",guestNm:"\u59d3\u540d",countryDrpt:"\u56fd\u7c4d",nation:"\u6c11\u65cf",gender:"\u6027\u522b",sexMale:"\u7537",sexFemale:"\u5973",address:"\u4f4f\u5740",birthday:"\u751f\u65e5",guest_nm:"\u59d3\u540d",certificate_num:"\u8bc1\u4ef6\u53f7",certificate_unit_cd:"\u64cd\u4f5c\u5458",certificate_dhms:"\u626b\u63cf\u65f6\u95f4",scan:"\u626b\u63cf\u8bc1\u4ef6",confirm:"\u786e \u5b9a",cancel:"\u53d6 \u6d88",delete:"\u5220 \u9664",scanContent:"\u8bf7\u626b\u63cf\u6216\u9009\u62e9\u8bc1\u4ef6",certificate_tip:"\u8bf7\u9009\u62e9\u8bc1\u4ef6\u7c7b\u578b",deleteSuccess:"\u5220\u9664\u6210\u529f"}},2691:function(t,e,n){"use strict";var r=n(2234),a=n(70),i=n.n(a);e.a={groupOptions:[{inline:!1},{inline:!1},{inline:!1}],elements:{certificatetypId:{type:"select",width:8,groupIndex:0,componentOptions:{text:r.a.certificatetypId,isMust:!0,selection:!0}},certificateNum:{type:"input",width:4,groupIndex:1,componentOptions:{label:r.a.certificateNum}},guestNm:{type:"input",width:4,groupIndex:1,componentOptions:{label:r.a.guestNm}},countryDrpt:{type:"input",width:4,groupIndex:1,componentOptions:{label:r.a.countryDrpt}},nation:{type:"input",width:4,groupIndex:1,componentOptions:{label:r.a.nation}},gender:{type:"select",width:4,groupIndex:2,componentOptions:{text:r.a.gender,options:[{value:"0",text:r.a.sexMale},{value:"1",text:r.a.sexFemale}],selection:!0}},address:{type:"input",width:8,groupIndex:2,componentOptions:{label:r.a.address}},birthday:{type:"datepicker",width:4,groupIndex:2,componentOptions:{text:r.a.birthday}}},formData:{certificatetypId:"",certificateNum:"",guestNm:"",countryDrpt:"",nation:"",gender:"",address:"",birthday:"",picStr:""},columnData:[{title:r.a.guest_nm,field:"guest_nm",width:"70px"},{title:r.a.certificate_num,field:"certificate_num",width:"110px"},{title:r.a.certificate_unit_cd,field:"certificate_unit_cd",width:"70px"},{title:r.a.certificate_dhms,field:"certificate_dhms",width:"70px",template:function(t){return i()(t.text).format("L")}}],checkedData:[],queryStr:"",identityList:[],wsInfo:{},dictionaryData:{},addressDict:{}}},2692:function(t,e,n){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(a,i){try{var c=e[a](i),s=c.value}catch(t){return void n(t)}if(!c.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}return r("next")})}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return p});var i=n(36),c=n.n(i),s=n(257),u=n(487),o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d=new u.a,p=function(){function t(){var e=this;a(this,t),this.init=function(){var t=r(c.a.mark(function t(n){var r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([d.queryDictionary(n.dictyp),Object(s.a)("/bs/3140010/GrpCmmWorkstation/queryWsInfo","get",n.wsParams),Object(s.a)("/bs/GrpIdscanInfo/queryLogIdscanInfoListNoPage","get",n.listParams)]);case 2:return r=t.sent,t.abrupt("return",{dicData:r[0],wsInfo:r[1],list:r[2]});case 4:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.scanCardInterface=function(){var t=r(c.a.mark(function t(n){var r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="http://localhost:9001/"+n.routerParams.manufactures+"/"+n.routerParams.brand+"/"+n.routerParams.model+"/"+n.routerParams.version+"/readCard",t.next=3,Object(s.a)(r,"get",n.requestData);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.saveScanCard=function(){var t=r(c.a.mark(function t(n){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/GrpIdscanInfo/saveLogIdscanInfo","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.getScanCardList=function(){var t=r(c.a.mark(function t(n){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/GrpIdscanInfo/queryLogIdscanInfoListNoPage","get",n.listParams);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.getScanCardInfo=function(){var t=r(c.a.mark(function t(n){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(s.a)("/bs/GrpIdscanInfo/getLogIdscanInfo","get",n.singleParams));case 1:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.deleteScanCard=function(){var t=r(c.a.mark(function t(n){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/GrpIdscanInfo/delLogIdscanInfo","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()}return o(t,[{key:"queryAddress",value:function(t){return Object(s.a)("/bs/PlfCmmParameter/queryDictionary","get",t)}}]),t}()}});