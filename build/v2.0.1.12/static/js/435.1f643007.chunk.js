webpackJsonp([435],{1513:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=n(38),i=n.n(a),o=n(18),s=n.n(o),c=n(17),p=n.n(c),u=n(22),d=n.n(u),l=n(256),m=n.n(l),f=n(2645),b=n(60),U=(n.n(b),n(2646)),g=new U.a,x={namespace:"M01353020A020LP00701",state:Object.assign({},f.a),subscriptions:{},effects:{init:i.a.mark(function e(n,r){var a,o,s,c,p,u,l,b,U,x,y=(r.select,r.put),h=r.call;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.modalParams.formData,o=n.modalParams.type||"",s={corpNo:n.modalParams.corpNo,id:parseInt(n.modalParams.id),subIds:[parseInt(n.modalParams.id)]},c={corpNo:n.modalParams.corpNo,subId:n.modalParams.id},p=["CORPCLS","CORPSUBCLS","CORPRANK","CORPGRP","MARKET","PARA_SALER"],e.next=7,h(g.init,c,p,s,o);case 7:return u=e.sent,l=u.dictTyps,b=u.UnitList,U=u.detailList,x=m()(f.a.elements),n.modalParams.type&&"IMPORT"===n.modalParams.type?(delete x.mngUnitUid,f.a.formData.UnitUid=t.__UNITINFO__.UnitCd+" "+t.__UNITINFO__.UnitNm):(delete x.UnitUid,x.mngUnitUid.componentOptions.options=O(b.data)),d()(U)>0&&(x.mngUnitUid.componentOptions.disabled=!0),x.corpclsId.componentOptions.options=l.CORPCLS,x.corpsubclsId.componentOptions.options=l.CORPSUBCLS,x.corprankId.componentOptions.options=l.CORPRANK,x.corpgrpId.componentOptions.options=l.CORPGRP,x.marketId.componentOptions.options=l.MARKET,x.salerId.componentOptions.options=l.PARA_SALER,e.next=22,y({type:"initComplete",elements:x,formData:Object.assign({},f.a.formData,U[0]),originData:U});case 22:case"end":return e.stop()}},e,this)}),submitFormData:i.a.mark(function t(e,n){var r,a,o,s,c,p,u,d,l,f,b,U=n.select,x=n.put,O=n.call;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.formData,a=e.id,o=e.corpNo,s=e.opentype,c=e.onrefeshEvent,t.next=3,U(function(t){return t});case 3:if(p=t.sent,u=p.M01353020A020LP00701,d=m()(u.formData),d.UnitUid&&(d.mngUnitUid=d.UnitUid,r.mngUnitUid=d.UnitUid,delete d.UnitUid,delete r.UnitUid),Object.assign(d,r),""!==s){t.next=20;break}if(-1!==a){t.next=15;break}return l={submitData:[d],corpNo:""+o},t.next=13,O(g.Createblackguest,l);case 13:t.next=18;break;case 15:return f={originData:u.originData,submitData:[d],corpNo:""+o},t.next=18,O(g.Updateblackguest,f);case 18:t.next=24;break;case 20:if("IMPORT"!==s){t.next=24;break}return b={submitData:[d],corpNo:""+o},t.next=24,O(g.CreateImport,b);case 24:if(""!==s){t.next=31;break}return t.next=27,x({type:"SystemModel/updateModalWindowState",key:"01353020A020LP00601",title:"\u5355\u4f4d\u4fe1\u606f",customContentStyle:{height:"500px"},params:{corp_No:o}});case 27:return t.next=29,x({type:"01353020A020LP00601/queryList"});case 29:t.next=36;break;case 31:if("IMPORT"!==s){t.next=36;break}return t.next=34,x({type:"SystemModel/updateModalWindowState"});case 34:e.isSkip=!0,c();case 36:case"end":return t.stop()}},t,this)})},reducers:{initComplete:function(t,e){var n=e.formData,r=e.elements,a=e.originData;return Object.assign({},f.a,{elements:r,formData:n,originData:a})},updateFormData:function(t,e){var n=null;return n=p()(e,"formData")?Object.assign({},t.formData,e.formData):Object.assign({},t.formData,r({},e.fieldName,e.fieldValue)),Object.assign({},t,{formData:n})}}},O=function(t){var e=[];return s()(t,function(t,n){e.push({value:t.unit_uid,text:t.unit_cd+" "+t.unit_nm})}),e};e.default=x}.call(e,n(15))},2645:function(t,e,n){"use strict";(function(t){var r=n(592);t.__GETBUSINESSDT__&&t.__GETBUSINESSDT__();e.a={elements:{UnitUid:{type:"input",width:5,componentOptions:{disabled:!0,text:r.a.mngUnitUid}},mngUnitUid:{type:"select",width:5,interactionOptions:{},componentOptions:{selection:!0,text:r.a.mngUnitUid}},contractFlg:{type:"select",width:5,componentOptions:{selection:!0,text:r.a.contractFlg,options:[{key:"1",text:r.a.contractFlgoptions1,value:"1"},{key:"2",text:r.a.contractFlgoptions2,value:"0"}]}},corpclsId:{type:"select",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:r.a.corpclsId}},corpsubclsId:{type:"select",width:5,componentOptions:{selection:!0,text:r.a.corpsubclsId}},corprankId:{type:"select",width:5,componentOptions:{selection:!0,text:r.a.corprankId}},corpgrpId:{type:"select",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:r.a.corpgrpId}},marketId:{type:"select",width:5,componentOptions:{selection:!0,text:r.a.marketId}},salerId:{type:"select",width:5,componentOptions:{selection:!0,text:r.a.salerId}}},formData:{mngUnitUid:"",contractFlg:"",corpclsId:"",corpsubclsId:"",corprankId:"",corpgrpId:"",marketId:"",salerId:""}}}).call(e,n(15))},2646:function(t,e,n){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(a,i){try{var o=e[a](i),s=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}return r("next")})}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return u});var i=n(38),o=n.n(i),s=n(257),c=n(489),p=new c.a,u=function t(){var e=this;a(this,t),this.init=function(){var t=r(o.a.mark(function t(n,r,a,i){var s,c,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(-1!==a.id||""!==i){t.next=7;break}return t.next=3,Promise.all([e.grpUnitList(n),p.queryDictionary(r)]);case 3:return s=t.sent,t.abrupt("return",{UnitList:s[0],dictTyps:s[1],detailList:[]});case 7:if(-1!==a.id||"IMPORT"!==i){t.next=14;break}return t.next=10,Promise.all([p.queryDictionary(r)]);case 10:return c=t.sent,t.abrupt("return",{UnitList:[],dictTyps:c[0],detailList:[]});case 14:return t.next=16,Promise.all([e.grpUnitList(n),p.queryDictionary(r),e.GetDataDetail(a)]);case 16:return u=t.sent,t.abrupt("return",{UnitList:u[0],dictTyps:u[1],detailList:u[2]});case 18:case"end":return t.stop()}},t,e)}));return function(e,n,r,a){return t.apply(this,arguments)}}(),this.GetDataDetail=function(){var t=r(o.a.mark(function t(n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3520010/GrpCrmCorpManageunit/getGrpCrmCorpManageunit","get",n);case 2:return r=t.sent,a=r.resultData,t.abrupt("return",a);case 5:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.Createblackguest=function(){var t=r(o.a.mark(function t(n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3520010/GrpCrmCorpManageunit/saveGrpCrmCorpManageunit","post",n);case 2:return r=t.sent,a=r.resultData,t.abrupt("return",a);case 5:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.CreateImport=function(){var t=r(o.a.mark(function t(n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3520010/GrpCrmCorpManageunit/saveGrpCrmCorpManageunitImport","post",n);case 2:return r=t.sent,a=r.resultData,t.abrupt("return",a);case 5:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.Updateblackguest=function(){var t=r(o.a.mark(function t(n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3520010/GrpCrmCorpManageunit/updateGrpCrmCorpManageunit","post",n);case 2:return r=t.sent,a=r.resultData,t.abrupt("return",a);case 5:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.grpUnitList=function(){var t=r(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("/bs/3520010/GrpCrmCorpManageunit/queryListUnit","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()}}});