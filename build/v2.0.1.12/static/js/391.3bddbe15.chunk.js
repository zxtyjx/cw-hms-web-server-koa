webpackJsonp([391],{1745:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){function r(t){t.baseFormData;return{pageStart:t.currentPage,pageLength:t.pageSize}}var n=a(38),s=a.n(n),o=a(256),u=a.n(o),c=a(2976),i=a(492),p=a.n(i),d=a(2978),m=new d.a,f={namespace:"M01328040A050LT00101",state:c.a,subscriptions:{historyListenEvent:function(e){var a=e.history,r=e.dispatch;return a.listen(function(e){var a=p()("/main/:tabindex/0132/80/40/A/050/L/T/001/01/:paramobject/:encryptstr").exec(e.pathname);if(a){var n=t.__COMPARISON__&&t.__COMPARISON__(a);r({type:"init",routeParams:n})}})}},effects:{init:s.a.mark(function t(e,a){var n,o,i,p,d=(a.select,a.put),f=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u()(c.a),o=r(n),t.next=4,f(m.init,o);case 4:return i=t.sent,p=i.pseudoRoomListData,t.next=8,d({type:"initComplete",data:{currentPage:p.currentPage,pageSize:p.pageSize,recordsTotal:p.recordsTotal,pseudoRoomList:p.data,routeParams:e.routeParams}});case 8:case"end":return t.stop()}},t,this)}),currentPageChange:s.a.mark(function t(e,a){var n,o,u,c,i=a.select,p=a.put,d=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(function(t){return t.M01328040A050LT00101});case 2:return n=t.sent,o=r(n),o=Object.assign({},o,e.paramdata),t.next=7,d(m.queryPseudoConfigList,o);case 7:return u=t.sent,c=Object.assign([],n.pseudoRoomList),n.currentPage>u.currentPage?c.unshift.apply(c,u.data):c.push.apply(c,u.data),t.next=12,p({type:"queryListComplete",data:{currentPage:u.currentPage,pageSize:u.pageSize,recordsTotal:u.recordsTotal,pseudoRoomList:c}});case 12:case"end":return t.stop()}},t,this)}),queryPseudoConfigList:s.a.mark(function t(e,a){var n,o,u,c=a.select,i=a.put,p=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(function(t){return t.M01328040A050LT00101});case 2:return n=t.sent,o=r(n),t.next=6,p(m.queryPseudoConfigList,o);case 6:return u=t.sent,t.next=9,i({type:"queryListComplete",data:{currentPage:u.currentPage,pageSize:u.pageSize,recordsTotal:u.recordsTotal,pseudoRoomList:u.data}});case 9:case"end":return t.stop()}},t,this)}),updateDelData:s.a.mark(function t(e,a){var n,o,u,c=a.select,i=a.put,p=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(function(t){return t.M01328040A050LT00101});case 2:return n=t.sent,t.next=5,p(m.deleteTurn,e.paramdata);case 5:return o=r(n),t.next=8,p(m.queryPseudoConfigList,o);case 8:return u=t.sent,t.next=11,i({type:"updateConfirm"});case 11:return t.next=13,i({type:"queryListComplete",data:{currentPage:u.currentPage,pageSize:u.pageSize,recordsTotal:u.recordsTotal,pseudoRoomList:u.data}});case 13:case"end":return t.stop()}},t,this)})},reducers:{updateRootStateProp:function(t,e){return Object.assign({},t,e.updateObj)},initComplete:function(t,e){return Object.assign({},t,e.data)},queryListComplete:function(t,e){return Object.assign({},t,e.data)},updateEffectDelData:function(t,e){return Object.assign({},t,{dispatchParams:e.dispatchParams})},updateConfirm:function(t,e){return Object.assign({},t,{open:!1})}}};e.default=f}.call(e,a(15))},2976:function(t,e,a){"use strict";var r=a(645),n=a(60),s=(a.n(n),a(2977));e.a={rightOperTop:{},rightOperCenter:{new:{text:r.a.add,className:"icon20 img45",permsCode:s.a[32805019],keyboard:"GF16"},pseudoCheckIn:{text:r.a.pseudoCheckIn,className:"icon20 img48",permsCode:s.a[32200550]}},rightOperBottom:{},columnData:[{title:r.a.param_cd,field:"param_cd",width:"15%"},{title:r.a.param_drpt,field:"param_drpt",width:"15%"},{title:r.a.param_typ,field:"param_typ",width:"15%"},{title:r.a.param_str1,field:"param_str1",width:"15%"},{title:r.a.param_num1,field:"param_num1",width:"15%",template:function(t){var e=!t.datasource.param_num1&&!t.datasource.param_num2&&!t.datasource.param_num3&&!t.datasource.param_num4&&!t.datasource.param_num4&&!t.datasource.param_num5&&!t.datasource.param_num6;return{toolTipText:e?r.a.yes:r.a.no,content:e?r.a.yes:r.a.no}}},{title:r.a.statusFlg,field:"status_flg",width:"15%",template:function(t){return{toolTipText:r.a["status_flg_"+t.text],content:r.a["status_flg_"+t.text]}}}],checkedData:[],currentPage:1,pageSize:30,recordsTotal:0,pseudoRoomList:[],dispatchParams:{},routeParams:{},open:!1,permsData:s.a}},2977:function(t,e,a){"use strict";e.a={32805019:["32805019","32805019H","32805019G"],32200550:["32200550","32200550H","32200550G"]}},2978:function(t,e,a){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function r(n,s){try{var o=e[n](s),u=o.value}catch(t){return void a(t)}if(!o.done)return Promise.resolve(u).then(function(t){r("next",t)},function(t){r("throw",t)});t(u)}return r("next")})}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",function(){return x});var s=a(38),o=a.n(s),u=a(10),c=a.n(u),i=a(86),p=a.n(i),d=a(18),m=a.n(d),f=a(17),l=a.n(f),g=a(22),b=a.n(g),h=a(257),P=a(260),v=a(489),y=new v.a,x=function t(){var e=this;n(this,t),this.init=function(){var t=r(o.a.mark(function t(a,r){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.queryPseudoConfigList(a)]);case 2:return n=t.sent,t.abrupt("return",{pseudoRoomListData:n[0]});case 4:case"end":return t.stop()}},t,e)}));return function(e,a){return t.apply(this,arguments)}}(),this.queryPseudoConfigList=function(){var t=r(o.a.mark(function t(a){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.a)("/bs/3130010/CmmBaseParam/queryListWithType","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.delPseudoConfig=function(){var t=r(o.a.mark(function t(a){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.a)("/bs/3130010/CmmBaseParam/deleteCmmBaseParamWithPos","post",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryPseudoConfigInfo=function(){var t=r(o.a.mark(function t(a,r){var n,s,u,c,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.initPseudoConfig(r),Object(h.a)("/bs/3130010/CmmBaseParam/getCmmBaseParamWithCheck","get",{param_id:a})]);case 2:if(n=t.sent,n[0]){t.next=7;break}throw"\u521d\u59cb\u5316\u5047\u623f\u914d\u7f6e\u5931\u8d25";case 7:if(n[1]&&n[1].data.resultData&&0!=b()(n[1].data.resultData)){t.next=9;break}throw"\u67e5\u8be2\u5047\u623f\u914d\u7f6e\u5931\u8d25";case 9:return t.next=11,e.queryPeriodFrontConfig(n[1].data.resultData[0].param_cd);case 11:return s=t.sent,u={},s&&l()(s,"PeriodFrontData")&&(c=n[1].data.resultData[0].mapPosList,m()(s.PeriodFrontData,function(t,e){var a=Object.assign([],t);a[1].posTrncode=c[e].paramNum1,a[2].posTrncode=c[e].paramNum2,a[3].posTrncode=c[e].paramNum3,a[4].posTrncode=c[e].paramNum4,a[5].posTrncode=c[e].paramNum5,a[6].posTrncode=c[e].paramNum6,a[8].posTrncode=c[e].paramNum7,a[9].posTrncode=c[e].paramNum8,a[10].posTrncode=c[e].paramNum9,a[11].posTrncode=c[e].paramNum10,a[12].posTrncode=c[e].paramNum11,a[13].posTrncode=c[e].paramNum12,u[e]=a})),i=p()(n[0].FORFRONT,function(t){return t.ItemValue==n[1].data.resultData[0].param_cd}),n[1].data.resultData[0].salesTyp=i.datasource.salestyp,t.abrupt("return",{dictyp:n[0],pseudoConfigData:Object.assign({pseudoConfigInfo:n[1].data.resultData[0]},u),periodFrontData:{PERIODFRONTDATA:s.PeriodFrontConfig}});case 17:case"end":return t.stop()}},t,e)}));return function(e,a){return t.apply(this,arguments)}}(),this.queryPeriodFrontConfig=function(){var t=r(o.a.mark(function t(a){var r,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return",[]);case 2:return t.next=4,Promise.all([Object(h.a)("/bs/PosPeriod/listGetPeriodFront","get",{salesId:a,validFlg:"1"}),Object(h.a)("/bs/3130010/CmmBaseParam/getCmmBaseParamByTax","get",{})]);case 4:return r=t.sent,n={},m()(r[0].data,function(t,e){for(var a={},s=0;s<5;s++)r[1].data.resultData[s]?a[s]={isEnabled:!0,colText:r[1].data.resultData[s].param_drpt}:a[s]={isEnabled:!1};n[t["data-datasource"].periodflg]=[{posTrncode:"-1",rowText:"\u9910\u70b9"},{posTrncode:"",isEnabled:!0,colText:""},Object.assign({posTrncode:""},a[0]),Object.assign({posTrncode:""},a[1]),Object.assign({posTrncode:""},a[2]),Object.assign({posTrncode:""},a[3]),Object.assign({posTrncode:""},a[4]),{posTrncode:"-1",rowText:"\u670d\u52a1\u8d39"},{posTrncode:"",isEnabled:!0},Object.assign({posTrncode:""},a[0]),Object.assign({posTrncode:""},a[1]),Object.assign({posTrncode:""},a[2]),Object.assign({posTrncode:""},a[3]),Object.assign({posTrncode:""},a[4])]}),t.abrupt("return",{PeriodFrontConfig:r[0].data.data,PeriodFrontData:n});case 8:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.initPseudoConfig=function(){var t=r(o.a.mark(function t(a){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([Object(h.a)("/bs/PosSales/listGetSalesFront","get",{validFlg:"1"}),Object(h.a)("/bs/3250010/HptHkRoom/queryRooms","get",{pseudoFlg:["IF"],roomStus:["O"]}),y.queryDictionary(a)]);case 2:if(r=t.sent,c()(r)&&0!=b()(r)){t.next=7;break}throw"\u521d\u59cb\u5316\u5047\u623f\u914d\u7f6e\u5931\u8d25";case 7:if(r[0]&&c()(r[0].data.data)){t.next=11;break}throw"\u67e5\u8be2\u9500\u552e\u70b9\u5931\u8d25";case 11:if(r[1]&&c()(r[1].data.data)){t.next=13;break}throw"\u67e5\u8be2\u5047\u623f\u5931\u8d25";case 13:return t.abrupt("return",Object.assign({FORFRONT:Object(P.b)(r[0].data.data,"salesnm","salesid"),IFROOMNUM:Object(P.b)(r[1].data.data,"room_num","room_num")},r[2]));case 14:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.CreatePseudoConfig=function(){var t=r(o.a.mark(function t(a){var r,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.a)("/bs/3130010/CmmBaseParam/saveCmmBaseParamWithCheck","post",a);case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.UpdatePseudoConfig=function(){var t=r(o.a.mark(function t(a){var r,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.a)("/bs/3130010/CmmBaseParam/updateCmmBaseParamWithCheck","post",a);case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.DelPseudoConfig=function(){var t=r(o.a.mark(function t(a){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.a)("/bs/3130010/CmmBaseParam/deleteCmmBaseParamWithPos","post",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.InitCheckIn=function(){var t=r(o.a.mark(function t(a){var r,n,s,u,c,i=a.acctNo,p=a.histStus;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={},t.next=3,Promise.all([Object(h.a)("/bs/3130010/GrpHkUnitRoomtype/queryRoomTypList","get",{pseudoFlgs:["PF","IF","LS"],roomStus:["V"]}),y.queryDictionary(["MARKET"])]);case 3:if(n=t.sent,s=null,!i){t.next=10;break}return t.next=8,Object(h.a)("/bs/3220010/RsvAccount/getPseudoRoomByAcctNo","get",{acctNo:i,histStus:p});case 8:s=t.sent,s&&s.data&&s.data.resultData&&(u=s.data.resultData,s={userNm:u.altNm,marketId:u.marketId,arrDt:u.arrDt,departureDt:u.dptDt,roomtypId:u.roomtypId,roomNum:u.roomNum,freememo:u.freememo,reguestId:u.reguestId});case 10:return n&&n[0]&&n[0].data&&n[0].data.responseDto&&(c=Object(P.b)(n[0].data.responseDto,"name","key"),r.ROOMTYP=c),r.MARKET=n[1].MARKET,t.abrupt("return",{bussinessDic:r,acctData:s});case 13:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryIfRooms=function(){var t=r(o.a.mark(function t(a){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.a)("/bs/3250010/HptHkRoom/queryRooms","get",{pseudoFlg:["IF","LS","PF"],roomStus:["V"],roomtypId:[a]});case 2:return r=t.sent,t.abrupt("return",{bussinessDic:{IFROOMNUM:Object(P.b)(r.data.data,"room_num","room_num")}});case 4:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.checkInIfRoom=function(){var t=r(o.a.mark(function t(a){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.a)("/bs/3220010/RsvAccount/creatPseudoRoom","post",a);case 2:return r=t.sent,t.abrupt("return",r.data.resultData[0].acctNo);case 4:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.updateIfRoom=function(){var t=r(o.a.mark(function t(a){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.a)("/bs/3220010/RsvAccount/editPseudoRoom","post",a);case 2:return r=t.sent,t.abrupt("return",r.data.resultData[0].acctNo);case 4:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.getPseudoRoomByAcctNo=function(t){return Object(h.a)("/bs/3220010/RsvAccount/getPseudoRoomByAcctNo","get",t)},this.editFreeMemo=function(t){return Object(h.a)("/bs/3220010/RsvAccount/editFreeMemo","post",t)}}}});