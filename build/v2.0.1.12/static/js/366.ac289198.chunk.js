webpackJsonp([366],{1509:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=n(38),r=n.n(s),i=n(17),o=n.n(i),c=n(256),u=n.n(c),l=n(2638),p=n(2240),d=n(60),f=(n.n(d),n(488)),m=n(2639),b=new m.a,x={namespace:"M01353020A010LP00701",state:Object.assign({},l.a),subscriptions:{},effects:{init:r.a.mark(function e(n,a){var s,i,o,c,d,m,x,k,v,h,y,D=(a.select,a.put),g=a.call;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.modalParams,i=s.formData,o=s.mainId,c=s.subids,d={mainId:o,subids:[c]},m=["BLKLSTTYP","BLKLSTCXLRSN"],e.next=5,g(b.init,m,d);case 5:return x=e.sent,k=x.dictTyps,v=x.detailList,h=u()(l.a.elements),h.blklsttypId.componentOptions.options=k.BLKLSTTYP,h.blklstcxlrsnId.componentOptions.options=k.BLKLSTCXLRSN,y={blklstcxlrsnId:h.blklstcxlrsnId},v.length>0&&"1"===v[0].statusFlg&&(h.statusFlg.componentOptions.disabled=!!f.a.CheckPermsCode(p.a[35200144],t),delete h.blklstcxlrsnId,v[0].blklstcxlrsnId=""),-1===c&&(delete h.statusFlg,delete h.blklstcxlrsnId),e.next=16,D({type:"initComplete",elements:h,posPoint:y,detailList:v,formData:Object.assign({},l.a.formData,v[0])});case 16:case"end":return e.stop()}},e,this)}),submitFormData:r.a.mark(function t(e,n){var a,s,i,o,c,l,p,d,f=n.select,m=n.put,x=n.call;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.formData,s=e.paramId,i=e.mainId,t.next=3,f(function(t){return t});case 3:if(o=t.sent,c=o.M01353020A010LP00701,l=u()(c.formData),Object.assign(l,a),-1!==s){t.next=13;break}return p={submitData:[l],mainId:""+i},t.next=11,x(b.Createblackguest,p);case 11:t.next=16;break;case 13:return d={originData:c.detailList,submitData:[l],mainId:""+i},t.next=16,x(b.Updateblackguest,d);case 16:return t.next=18,m({type:"SystemModel/updateModalWindowState",key:"01352010A020LP01001",title:"\u9ed1\u540d\u5355\u5217\u8868",customContentStyle:{height:"500px"},params:{mainId:i}});case 18:return t.next=20,m({type:"M01352010A020LP01001/queryList",paramdata:{mainId:i}});case 20:case"end":return t.stop()}},t,this)})},reducers:{initComplete:function(t,e){var n=e.formData,a=e.elements,s=e.posPoint,r=e.detailList;return Object.assign({},l.a,{elements:a,formData:n,posPoint:s,detailList:r})},updateFormData:function(t,e){var n=null,s=null;return n=o()(e,"formData")?Object.assign({},t.formData,e.formData):Object.assign({},t.formData,a({},e.fieldName,e.fieldValue)),"0"===e.formData.statusFlg?s=Object.assign({},t.elements,t.posPoint):(delete t.elements.blklstcxlrsnId,s=Object.assign({},t.elements)),"1"===e.formData.statusFlg&&(n.blklstcxlrsnId=""),Object.assign({},t,{elements:s,formData:n})}}};e.default=x}.call(e,n(15))},2240:function(t,e,n){"use strict";e.a={35200141:["35200141","35200141G","35200141H"],35200142:["35200142","35200142G","35200142H"],35200144:["35200144","35200144G","35200144H"]}},2638:function(t,e,n){"use strict";(function(t){var a=n(591);t.__GETBUSINESSDT__&&t.__GETBUSINESSDT__();e.a={elements:{blklsttypId:{type:"select",width:8,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.blklsttypId}},statusFlg:{type:"select",width:8,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.statusFlg,options:[{key:"1",text:a.a.statusFlg_options1,value:"0"},{key:"2",text:a.a.statusFlg_options2,value:"1"}]}},note:{type:"input",width:8,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.note}},blklstcxlrsnId:{type:"select",width:8,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.blklstcxlrsnId}}},formData:{blklsttypId:"",statusFlg:"1",blklstcxlrsnId:"",note:""},posPoint:{}}}).call(e,n(15))},2639:function(t,e,n){"use strict";function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function a(s,r){try{var i=e[s](r),o=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}return a("next")})}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return l});var r=n(38),i=n.n(r),o=n(257),c=n(489),u=new c.a,l=function t(){var e=this;s(this,t),this.init=function(){var t=a(i.a.mark(function t(n,a){var s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([u.queryDictionary(n),e.GetDataDetail(a)]);case 2:return s=t.sent,t.abrupt("return",{dictTyps:s[0],detailList:s[1]});case 4:case"end":return t.stop()}},t,e)}));return function(e,n){return t.apply(this,arguments)}}(),this.GetDataDetail=function(){var t=a(i.a.mark(function t(n){var a,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3520010/GrpCrmCorpBlacklist/getGrpCrmCorpBlacklist","get",n);case 2:return a=t.sent,s=a.resultData,t.abrupt("return",s);case 5:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.Createblackguest=function(){var t=a(i.a.mark(function t(n){var a,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3520010/GrpCrmCorpBlacklist/saveGrpCrmCorpBlacklist","post",n);case 2:return a=t.sent,s=a.resultData,t.abrupt("return",s);case 5:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.Updateblackguest=function(){var t=a(i.a.mark(function t(n){var a,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3520010/GrpCrmCorpBlacklist/updateGrpCrmCorpBlacklist","post",n);case 2:return a=t.sent,s=a.resultData,t.abrupt("return",s);case 5:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()}}});