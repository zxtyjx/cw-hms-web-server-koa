webpackJsonp([343],{1667:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){function o(t,e){var n=s()(t);return n.roomtypId.componentOptions.options=e.PARA_ROOMTYPE,n.buildingId.componentOptions.options=e.BUILDING,n.areaId.componentOptions.options=e.AREA,n.floorId.componentOptions.options=e.FLOOR,n.bedtypId.componentOptions.options=e.BEDTYP,n.roomfeatruetypIds.componentOptions.options=e.ROOMFEATURETYP,n}var a=n(36),r=n.n(a),i=n(256),s=n.n(i),p=n(10),c=n.n(p),u=n(86),d=n.n(u),m=n(2828),f=n(489),l=n.n(f),y=n(2830),x=new y.a,O={namespace:"M01328050A050LP00201",state:m.a,subscriptions:{historyListenEvent:function(e){var n=e.history,o=e.dispatch;return n.listen(function(e){var n=l()("/main/:tabindex/0132/80/50/A/050/L/P/002/01/:paramobject/:encryptstr").exec(e.pathname);if(n){var a=t.__COMPARISON__&&t.__COMPARISON__(n);o({type:"init",routeParams:a})}})}},effects:{init:r.a.mark(function e(n,a){var i,s,p,u,f,l,y,O,g,h=a.select,v=a.put,b=a.call;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(function(t){return t.M01328050A050LP00201});case 2:return i=e.sent,s={dictTyps:["ROOMFEATURETYP","AREA","FLOOR","BUILDING","PARA_ROOMTYPE","BEDTYP"]},n.routeParams.id&&(s.paramdata={id:n.routeParams.id}),e.next=7,b(x.init,s);case 7:if(p=e.sent,u=p.roomData,f=p.dictTyps,!u){e.next=18;break}return e.next=13,b(t.__GETCACHEDATA__,"M01328050A050LP00201",{formData:u},["formData.id","formData.version"]);case 13:if(!(l=e.sent)){e.next=18;break}return e.next=17,v({type:"initComplete",data:l});case 17:return e.abrupt("return");case 18:return y=o(i.elements,f),O=Object.assign({},m.a,{routeParams:n.routeParams,elements:y,bussinessDictionary:f}),u&&(O.formData=u,g=d()(f.PARA_ROOMTYPE,function(t){return t.value===""+u.roomtypId}),g&&(g=g["data-datasource"],O.formData.roomtypGroup=g.roomtypgrp_drpt),O.formData.bedtypId=""+u.bedtypId,O.formData.roomfeatruetypIds=c()(u.roomfeatruetypIds)?u.roomfeatruetypIds.map(function(t){return""+t.roomfeatruetypId}):[]),e.next=23,v({type:"initComplete",data:O});case 23:case"end":return e.stop()}},e,this)}),saveHptHkRoom:r.a.mark(function e(n,o){var a,i,s,p=o.select,c=o.put,u=o.call;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(function(t){return t});case 2:return a=e.sent,n.paramdata.displayData=a,e.next=6,u(x.saveHptHkRoom,n.paramdata);case 6:return i=e.sent,s=t.__ENCRYPT__.Encrypt(escape(JSON.stringify({id:i.id}))),e.next=10,c({type:"SystemRouterModel/push",url:"/0132/80/50/A/050/L/P/002/01/"+s.orgData+"/"+s.encryptData});case 10:case"end":return e.stop()}},e,this)}),updateHptHkRoom:r.a.mark(function e(n,o){var a,i,s,p=o.select,c=o.put,u=o.call;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(function(t){return t});case 2:return a=e.sent,n.paramdata.displayData=a,e.next=6,u(x.updateHptHkRoom,n.paramdata);case 6:return i=e.sent,s=t.__ENCRYPT__.Encrypt(escape(JSON.stringify({id:i.id}))),e.next=10,c({type:"SystemRouterModel/push",url:"/0132/80/50/A/050/L/P/002/01/"+s.orgData+"/"+s.encryptData});case 10:case"end":return e.stop()}},e,this)})},reducers:{updateFormData:function(t,e){return Object.assign({},t,{formData:Object.assign({},t.formData,e.formData)})},initComplete:function(t,e){return Object.assign({},t,e.data)},updateComplete:function(t,e){return Object.assign({},t,{formData:e.formData})}}};e.default=O}.call(e,n(16))},2255:function(t,e,n){"use strict";e.a={title:"\u57fa\u672c\u4fe1\u606f",roomNum:"\u623f\u53f7",roomtypId:"\u623f\u578b",roomtypGroup:"\u623f\u578b\u7ec4",buildingId:"\u697c\u5ea7",areaId:"\u697c\u533a",floorId:"\u697c\u5c42",occupancyMax:"\u6700\u5927\u4eba\u6570",occupancyMin:"\u6807\u51c6\u4eba\u6570",bedtypId:"\u5e8a\u578b",area:"\u9762\u79ef",smokingFlg:"\u65e0\u70df\u623f",smokingFlgText0:"\u662f",smokingFlgText1:"\u5426",smokingFlgText2:"\u672a\u77e5",handicapFlg:"\u6b8b\u75be\u4eba\u623f",handicapFlgText0:"\u662f",handicapFlgText1:"\u5426",statusFlg:"\u662f\u5426\u6709\u6548",statusFlgText0:"\u662f",statusFlgText1:"\u5426",roomfeatruetypIds:"\u623f\u95f4\u7279\u70b9",memo:"\u5907\u6ce8",eidtSuccessMessage:"\u4fee\u6539\u6210\u529f",addSuccessMessage:"\u65b0\u5efa\u6210\u529f",btnSave:"\u4fdd\u5b58",btnBack:"\u8fd4\u56de"}},2828:function(t,e,n){"use strict";var o=n(2255),a=n(2829);e.a={routeParams:{},elements:{roomNum:{type:"input",width:4,interactionOptions:{isMust:!0,findCondition:"",autoFocus:"autofocus"},componentOptions:{text:o.a.roomNum}},roomtypId:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:o.a.roomtypId,selection:!0}},roomtypGroup:{type:"input",width:4,interactionOptions:{findCondition:""},componentOptions:{text:o.a.roomtypGroup,disabled:!0}},buildingId:{type:"select",width:4,interactionOptions:{findCondition:""},componentOptions:{text:o.a.buildingId,selection:!0}},areaId:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:o.a.areaId,selection:!0}},floorId:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:o.a.floorId}},occupancyMax:{type:"input",width:4,interactionOptions:{findCondition:""},componentOptions:{text:o.a.occupancyMax}},occupancyMin:{type:"input",width:4,interactionOptions:{findCondition:""},componentOptions:{text:o.a.occupancyMin}},bedtypId:{type:"select",width:4,interactionOptions:{findCondition:""},componentOptions:{text:o.a.bedtypId,selection:!0,disabled:!0}},area:{type:"input",width:4,interactionOptions:{findCondition:""},componentOptions:{text:o.a.area}},smokingFlg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:o.a.smokingFlg,options:[{key:"Y",value:"Y",text:o.a.smokingFlgText0},{key:"N",value:"N",text:o.a.smokingFlgText1},{key:"U",value:"U",text:o.a.smokingFlgText2}],selection:!0}},handicapFlg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:o.a.handicapFlg,selection:!0,options:[{key:"Y",text:o.a.handicapFlgText0,value:"Y"},{key:"N",text:o.a.handicapFlgText1,value:"N"}]}},statusFlg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:o.a.statusFlg,selection:!0,options:[{key:"1",text:o.a.statusFlgText0,value:"1"},{key:"0",text:o.a.statusFlgText1,value:"0"}]}},roomfeatruetypIds:{type:"select",width:4,interactionOptions:{findCondition:""},componentOptions:{text:o.a.roomfeatruetypIds,selection:!0,multiple:!0}},memo:{type:"input",width:16,interactionOptions:{findCondition:""},componentOptions:{text:o.a.memo}}},formData:{roomNum:"",roomtypId:"",roomtypGroup:"",buildingId:"",areaId:"",floorId:"",occupancyMax:"",occupancyMin:"",bedtypId:"",area:"",smokingFlg:"N",handicapFlg:"N",statusFlg:"1",roomfeatruetypIds:[],memo:""},bussinessDictionary:{},rightOperTop:{save:{text:o.a.btnSave,className:"icon32 img81",permsCode:a.a[32803007],keyboard:"GF08"},back:{text:o.a.btnBack,className:"icon32 img83",keyboard:"GF10"}},rightOperCenter:{},rightOperBottom:{}}},2829:function(t,e,n){"use strict";e.a={32803007:["32803007","32803007G","32803007H"]}},2830:function(t,e,n){"use strict";function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function o(a,r){try{var i=e[a](r),s=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(s).then(function(t){o("next",t)},function(t){o("throw",t)});t(s)}return o("next")})}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return u});var r=n(36),i=n.n(r),s=n(257),p=n(487),c=new p.a,u=function t(){var e=this;a(this,t),this.init=function(){var t=o(i.a.mark(function t(n){var o,a,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o={},!n.paramdata){t.next=9;break}return t.next=4,Promise.all([e.getHptHkRoom(n.paramdata),c.queryDictionary(n.dictTyps)]);case 4:a=t.sent,o.roomData=a[0],o.dictTyps=a[1],t.next=13;break;case 9:return t.next=11,c.queryDictionary(n.dictTyps);case 11:r=t.sent,o.dictTyps=r;case 13:return t.abrupt("return",o);case 14:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.getHptHkRoom=function(){var t=o(i.a.mark(function t(n){var o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3250010/HptHkRoom/getHptHkRoom","get",n);case 2:return o=t.sent,t.abrupt("return",o.resultData);case 4:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.saveHptHkRoom=function(){var t=o(i.a.mark(function t(n){var o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3250010/HptHkRoom/saveHptHkRoom","post",n);case 2:return o=t.sent,t.abrupt("return",o.resultData[0]);case 4:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.updateHptHkRoom=function(){var t=o(i.a.mark(function t(n){var o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3250010/HptHkRoom/updateHptHkRoom","post",n);case 2:return o=t.sent,t.abrupt("return",o.resultData);case 4:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()}}});