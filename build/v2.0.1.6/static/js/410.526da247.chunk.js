webpackJsonp([410],{1788:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var n=r(36),a=r.n(n),i=r(18),p=r.n(i),o=r(256),s=r.n(o),u=r(489),c=r.n(u),l=r(3036),f=r(70),m=r.n(f),d=r(3037),_=new d.a,y={namespace:"01378028A010LT00201",state:l.a,subscriptions:{historyListenEvent:function(t){var r=t.history,n=t.dispatch;return r.listen(function(t){var r=c()("/main/:tabIndex/0137/80/28/A/010/L/T/002/01/:paramobject/:encryptstr").exec(t.pathname);if(r){var a=e.__COMPARISON__&&e.__COMPARISON__(r);n({type:"updateAll",routeParams:a})}})}},effects:{initData:a.a.mark(function t(r,n){var i,p,o,u,c,l,f,d=r.ifedit,y=r.item,h=r.usecache,x=n.select,v=n.put,b=n.call;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!h){t.next=4;break}return t.next=3,v(Object.assign({type:"updateAll"},h));case 3:return t.abrupt("return",t.sent);case 4:return t.next=6,b(_.getMenberList);case 6:return i=t.sent,t.next=9,x(function(e){return e["01378028A010LT00201"]});case 9:if(p=t.sent,o=s()(p.elements),u=s()(p.formdata),c=s()(p.elements_order),l=p.oldeditdata,o.preferentiallev.componentOptions.options=i.data.map(function(e,t){return{key:t,value:String(e.memberrank_id),text:e.memberrank_nm}}),d){t.next=21;break}return u={preferentialcode:"",preferentialname:"",preferentiallev:[],preferentialnum:"",preferentialtype:"100",preferentialtext:"",preferential_starttime:Number(e.__BUSINESSDT__),preferential_endtime:m()(Number(e.__BUSINESSDT__)).add("year",1).valueOf(),preferential_price:[],preferential_house:[],preferential_order:"",preferential_dela_hour:!0,preferential_dela_time:!1,preferential_dela_time_input:"00:00"},t.next=19,v({type:"changeTypeState",newstate:!0});case 19:t.next=47;break;case 21:return t.next=23,b(_.geteExatData,{favourpolicyId:y.favourpolicy_id});case 23:f=t.sent,u.preferentialcode=f.resultData.favourpolicyCd,u.preferentialname=f.resultData.favourpolicyNm,u.favourpolicy_typ=f.resultData.favourpolicyTyp,u.preferentialtext=f.resultData.note,u.preferentiallev=f.resultData.rankDtos.map(function(e){return String(e.memberrankId)}),u.preferentialtype=f.resultData.favourpolicyTyp,u.preferentialnum=f.resultData.seq,l=f.resultData,t.t0=f.resultData.favourpolicyTyp,t.next="100"===t.t0?35:"501"===t.t0?42:47;break;case 35:return t.next=37,v({type:"changeTypeState",newstate:!0});case 37:return u.preferential_starttime=f.resultData.beginDt,u.preferential_endtime=f.resultData.endDt,u.preferential_house=f.resultData.itemMap.ROOMTYP.map(function(e){return String(e.roomtypeId)}),u.preferential_price=[f.resultData.paramMap.rateId],t.abrupt("break",47);case 42:return t.next=44,v({type:"changeTypeState",newstate:!1});case 44:return u.preferential_order=m()(f.resultData.paramMap.retainTime).format("HH:MM"),"2"==f.resultData.paramMap.delayFlg?(u.preferential_dela_time=!0,u.preferential_dela_hour=!1,c.preferential_dela_time_input.type="timepicker",u.preferential_dela_time_input=m()(f.resultData.paramMap.fixedTime).format("HH:MM")):(u.preferential_dela_time=!1,u.preferential_dela_hour=!0,c.preferential_dela_time_input.type="input",u.preferential_dela_time_input=m()(f.resultData.paramMap.fixedTime).format("HH:MM")),t.abrupt("break",47);case 47:return t.next=49,v({type:"updateAll",elements:o,formdata:u,elements_order:c,elements_prices:p.elements_prices,oldeditdata:l});case 49:case"end":return t.stop()}},t,this)}),getRoomAndRate:a.a.mark(function e(t,r){var n,i,o,u,c=t.params,l=t.ortype,f=r.select,m=r.put,d=r.call;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(_.getDataFactory,c);case 2:return n=e.sent,e.next=5,f(function(e){return e["01378028A010LT00201"]});case 5:return i=e.sent,o=s()(i.elements_prices),u={},n&&n.responseData&&p()(n.responseData,function(e,t){var r=[];p()(e,function(e,t){r.push({text:e.param_cd+" "+e.param_drpt,value:""+e.param_id,key:t})}),u[t]=r}),"rate"===l&&(o.preferential_price.componentOptions.options=u.PARA_RATE||[]),"room"===l&&(o.preferential_house.componentOptions.options=u.PARA_ROOMTYPE||[]),e.next=13,m({type:"updateAll",elements:i.elements,formdata:i.formdata,elements_order:i.elements_order,elements_prices:o});case 13:case"end":return e.stop()}},e,this)}),changeRadioState:a.a.mark(function e(t,r){var n,i,p,o=t.filename,u=r.select,c=r.put;r.call;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(function(e){return e["01378028A010LT00201"]});case 2:return n=e.sent,i=s()(n.formdata),p=s()(n.elements_order),"preferential_dela_hour"==o?i.preferential_dela_time=!i.preferential_dela_time:i.preferential_dela_hour=!i.preferential_dela_hour,p.preferential_dela_time_input.type=i.preferential_dela_hour?"input":"timepicker",e.next=9,c({type:"updateAll",elements:n.elements,formdata:i,elements_order:p,elements_prices:n.elements_prices});case 9:case"end":return e.stop()}},e,this)}),editPolicy:a.a.mark(function e(t,r){var n,i,p=t.data,o=t.ifedit,s=r.select,u=(r.put,r.call);return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(function(e){return e["01378028A010LT00201"]});case 2:if(n=e.sent,i={favourpolicyCd:p.preferentialcode,favourpolicyNm:p.preferentialname,favourpolicyTyp:p.preferentialtype,seq:p.preferentialnum,note:p.preferentialtext,rankDtos:p.preferentiallev.map(function(e){return{memberrankId:Number(e),mcardrankId:""}})},"100"===p.preferentialtype?(i.beginDt=p.preferential_starttime,i.endDt=p.preferential_endtime,i.paramMap={rateId:Number(p.preferential_price)},i.itemMap={ROOMTYP:p.preferential_house.map(function(e){return{roomtypeId:Number(e)}})}):i.paramMap={delayFlg:p.preferential_dela_hour?1:2,delayMinute:p.preferential_dela_time_input,retainTime:new Date(p.preferential_order).getTime(),fixedTime:new Date(p.preferential_dela_time_input).getTime()},!o){e.next=12;break}return i.favourpolicyId=n.oldeditdata.favourpolicyId,i.version=n.oldeditdata.version,e.next=10,u(_.editPolicy,{submitData:i,originData:Object.assign({},null)});case 10:e.next=14;break;case 12:return e.next=14,u(_.addNewPolicy,{submitData:i,originData:Object.assign({},null)});case 14:case"end":return e.stop()}},e,this)}),updateViewForm:a.a.mark(function e(t,r){var n,i=t._formdata,p=r.select,o=r.put;r.call;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(function(e){return e["01378028A010LT00201"]});case 2:return n=e.sent,e.next=5,o({type:"updateAll",elements:n.elements,formdata:i,elements_order:n.elements_order,elements_prices:n.elements_prices});case 5:case"end":return e.stop()}},e,this)})},reducers:{updateAll:function(e,t){return Object.assign({},e,t)},changeTypeState:function(e,t){var r=t.newstate;return Object.assign({},e,{pricediscount:r})}}};t.default=y}.call(t,r(16))},2265:function(e,t,r){"use strict";t.a={code:"\u4ee3\u7801",name:"\u540d\u79f0",memberlev:"\u4f1a\u5458\u7b49\u7ea7",type:"\u7c7b\u578b",price_discount:"\u623f\u4ef7\u4f18\u60e0",order_time:"\u8ba2\u5355\u65f6\u95f4",startdate:"\u5f00\u59cb\u65e5\u671f",enddate:"\u7ed3\u675f\u65e5\u671f",price:"\u4ef7\u683c",roomtype:"\u623f\u578b",seq:"\u5e8f\u53f7",note:"\u5907\u6ce8",order_savetime:"\u9884\u8ba2\u4fdd\u7559\u65f6\u95f4","MemberSpecialOffersFormCom-Master-11-Text":"\u5ef6\u8fdf\u9000\u623f\u65f6\u95f4",hour:"\u5c0f\u65f6",fixedtime:"\u56fa\u5b9a\u65f6\u95f4",success:"\u64cd\u4f5c\u6210\u529f"}},3036:function(e,t,r){"use strict";(function(e){var n=r(1),a=(r.n(n),r(70)),i=r.n(a),p=r(2265);t.a={routeParams:{},rightOperTop:{save:{text:"\u4fdd\u5b58",className:"icon32 img81",keyboard:"GF08"},back:{text:"\u53d6\u6d88",className:"icon32 img83",keyboard:"GF10"}},oldeditdata:{},pricediscount:!0,formdata:{preferentialcode:"",preferentialname:"",preferentiallev:[],preferentialnum:"",preferentialtype:"100",preferentialtext:"",preferential_starttime:Number(e.__BUSINESSDT__),preferential_endtime:i()(Number(e.__BUSINESSDT__)).add("year",1).valueOf(),preferential_price:[],preferential_house:[],preferential_order:"",preferential_dela_hour:!0,preferential_dela_time:!1,preferential_dela_time_input:"00:00"},elements:{preferentialcode:{type:"input",width:4,interactionOptions:{isMust:!0},componentOptions:{text:p.a.code}},preferentialname:{type:"input",width:4,interactionOptions:{isMust:!0},componentOptions:{text:p.a.name}},preferentialnum:{type:"input",width:4,componentOptions:{text:p.a.seq}},preferentialtype:{type:"select",width:4,interactionOptions:{isMust:!0},componentOptions:{text:p.a.type,selection:!0,options:[{key:"0",value:"100",text:p.a.price_discount}]}},preferentiallev:{type:"select",width:8,interactionOptions:{isMust:!0},componentOptions:{text:p.a.memberlev,selection:!0,multiple:!0,options:[]}},preferentialtext:{type:"input",width:8,componentOptions:{text:p.a.note}}},elements_prices:{preferential_starttime:{type:"datepicker",width:4,interactionOptions:{isMust:!0},componentOptions:{text:p.a.startdate}},preferential_endtime:{type:"datepicker",width:4,interactionOptions:{isMust:!0},componentOptions:{text:p.a.enddate}},preferential_price:{type:"select",width:8,interactionOptions:{isMust:!0},componentOptions:{text:p.a.price,selection:!0,options:[]}},preferential_house:{type:"select",width:16,interactionOptions:{isMust:!0},componentOptions:{text:p.a.roomtype,selection:!0,multiple:!0,options:[]}}},elements_order:{preferential_order:{type:"input",width:8,componentOptions:{text:p.a.order_savetime}},preferential_dela_hour:{type:"checkbox",width:2,className:"order_before",componentOptions:{label:p.a.hour,radio:!0}},preferential_dela_time:{type:"checkbox",width:2,componentOptions:{label:p.a.fixedtime,radio:!0}},preferential_dela_time_input:{type:"input",width:2}}}}).call(t,r(16))},3037:function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,i){try{var p=t[a](i),o=p.value}catch(e){return void r(e)}if(!p.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}return n("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",function(){return s});var i=r(36),p=r.n(i),o=r(257),s=function e(){var t=this;a(this,e),this.getMenberList=n(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)("/bs/3540010/LpsCmmMemberrank/queryMemberrankList","get",{});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,t)})),this.geteExatData=function(){var e=n(p.a.mark(function e(r){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)("/bs/3540010/LpsSetFavourpolicy/getLpsSetFavourpolicy","get",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}(),this.addNewPolicy=function(){var e=n(p.a.mark(function e(r){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)("/bs/3540010/LpsSetFavourpolicy/saveLpsSetFavourpolicy","post",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}(),this.editPolicy=function(){var e=n(p.a.mark(function e(r){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)("/bs/3540010/LpsSetFavourpolicy/updateLpsSetFavourpolicy","post",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}(),this.getDataFactory=function(){var e=n(p.a.mark(function e(r){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)("/bs/Dictionary/getDictionary","get",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()}}});