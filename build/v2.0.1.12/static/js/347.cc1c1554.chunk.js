webpackJsonp([347],{1842:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){function r(t){var e=t.baseFormData;t.moreFormData;return{statusFlg:e.status_flg,filter:e.fastquery,currentPage:t.currentPage,pageSize:t.pageSize,pageLength:t.pageSize,pageStart:t.currentPage}}var n=a(38),s=a.n(n),i=a(22),o=a.n(i),c=a(2274),u=a(492),p=a.n(u),l=a(3127),d=new l.a,_={namespace:"M01338010A012LT00101",state:c.a,subscriptions:{historyListenEvent:function(e){var a=e.history,r=e.dispatch;return a.listen(function(e){var a=p()("/main/:tabindex/0133/80/10/A/012/L/T/001/01/:paramobject/:encryptstr").exec(e.pathname);if(a){var n=t.__COMPARISON__&&t.__COMPARISON__(a);r({type:"init",routeParams:n})}})}},effects:{init:s.a.mark(function e(a,n){var i,o,c,u,p,l,_,f,m,y,x,g=n.select,h=n.put,v=n.call;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(function(t){return t.M01338010A012LT00101});case 2:return i=e.sent,o={typs:["SALESGROUP","PRODUCEDEPT"]},c={statusFlg:"1"},u={cookbookIds:null,filter:null,pageStart:1,pageLength:1e3},p={reqData:{TAX1:{TAX1:null},TAX2:{TAX2:null},TAX3:{TAX3:null},TAX4:{TAX4:null},TAX5:{TAX5:null}}},e.next=9,v(t.__GETCACHEDATA__,"M01338010A012LT00101",i,[]);case 9:return l=e.sent,_={},l?(_=r(l),_.currentPage=1,_.pageSize=l.currentPage*l.pageSize,_.pageStart=1,_.pageLength=l.currentPage*l.pageSize):_=r(i),f={paramTyp:"TAXTYPE"},e.next=15,v(d.init,_,o,c,u,p,f);case 15:return m=e.sent,y=m.salesData,x=m.dictTyps,e.next=20,h({type:"initComplete",data:{currentPage:y.currentPage,pageSize:y.pageSize,recordsTotal:y.recordsTotal,list:y.data,routeParams:a.routeParams,dictionaryData:x},cacheData:l});case 20:case"end":return e.stop()}},e,this)}),queryList:s.a.mark(function t(e,a){var n,i,o,c=a.select,u=a.put,p=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(function(t){return t.M01338010A012LT00101});case 2:return n=t.sent,i=r(n),t.next=6,p(d.queryListConfigSales,i);case 6:return o=t.sent,t.next=9,u({type:"queryListComplete",data:{pageStart:o.currentPage,currentPage:o.currentPage,pageLength:o.pageSize,pageSize:o.pageSize,recordsTotal:o.recordsTotal,list:o.data}});case 9:case"end":return t.stop()}},t,this)}),updatePosValidConfigSales:s.a.mark(function t(e,a){var r,n=e.params,i=a.select,o=a.put,c=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(function(t){return t.M01338010A012LT00101});case 2:return r=t.sent,t.next=5,c(d.updatePosValidConfigSales,n);case 5:return t.next=7,o({type:"init",routeParams:r.routeParams});case 7:case"end":return t.stop()}},t,this)}),currentPageChange:s.a.mark(function t(e,a){var n,i,o,c,u=a.select,p=a.put,l=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(function(t){return t.M01338010A012LT00101});case 2:return n=t.sent,i=r(n),i=Object.assign({},i,e.paramdata),t.next=7,l(d.queryListConfigSales,i);case 7:return o=t.sent,c=Object.assign([],n.list),n.currentPage>o.currentPage?c.unshift.apply(c,o.data):c.push.apply(c,o.data),t.next=12,p({type:"queryListComplete",data:{currentPage:o.currentPage,pageSize:o.pageSize,recordsTotal:o.recordsTotal,list:c}});case 12:case"end":return t.stop()}},t,this)}),confirmCbDispatch:s.a.mark(function t(e,a){var r=(a.select,a.put);a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=3;break}return t.next=3,r({type:e.cbParams.cbDispatchTyp,params:e.cbParams.paramdata,successmessage:e.cbParams.successmessage});case 3:case"end":return t.stop()}},t,this)})},reducers:{updateBaseFormData:function(t,e){return Object.assign({},t,{baseFormData:Object.assign({},t.baseFormData,e.formData)})},updateRootStateProp:function(t,e){return Object.assign({},t,e.updateObj)},initComplete:function(t,e){return o()(e.cacheData)>0?Object.assign({},e.cacheData,{columnData:c.a.columnData,list:e.data.list,recordsTotal:e.data.recordsTotal,currentPage:e.data.currentPage,pageSize:e.data.pageSize}):Object.assign({},t,e.data)},queryListComplete:function(t,e){return Object.assign({},t,e.data)}}};e.default=_}.call(e,a(15))},2123:function(t,e,a){"use strict";e.a={fastquery:"\u4ee3\u7801/\u540d\u79f0/....",status_all:"\u5168\u90e8",status_valid:"\u6709\u6548",status_invalid:"\u65e0\u6548",operation:"\u64cd\u4f5c",edit:"\u7f16\u8f91",void:"\u4f5c\u5e9f",recover:"\u6062\u590d",new:"\u65b0\u5efa",batchInvalid:"\u6279\u91cf\u65e0\u6548",total:"\u603b\u5171",item:"\u6761",query:"\u67e5\u8be2",salesId:"\u9500\u552e\u70b9",sales_cd:"\u4ee3\u7801",sales_nm:"\u540d\u79f0",group_nm:"\u9500\u552e\u70b9\u5206\u7ec4",sales_typ_nm:"\u9500\u552e\u70b9\u7c7b\u578b",cookbook_nm:"\u83dc\u8c31",dept_nm:"\u90e8\u95e8",service_rate:"\u670d\u52a1\u8d39\u7387",discount_rate:"\u6298\u6263\u7387",tax1_id:"\u7a0e\u73871",tax2_id:"\u7a0e\u73872",tax3_id:"\u7a0e\u73873",tax4_id:"\u7a0e\u73874",tax5_id:"\u7a0e\u73875",service_tax1_id:"\u670d\u52a1\u8d39\u7a0e\u73871",service_tax2_id:"\u670d\u52a1\u8d39\u7a0e\u73872",service_tax3_id:"\u670d\u52a1\u8d39\u7a0e\u73873",service_tax4_id:"\u670d\u52a1\u8d39\u7a0e\u73874",service_tax5_id:"\u670d\u52a1\u8d39\u7a0e\u73875",room_no:"\u623f\u53f7",max_person_num:"\u5bb9\u7eb3\u4eba\u6570",status_flg:"\u662f\u5426\u6709\u6548",service:"\u670d\u52a1",sales_typ_catering:"\u9910\u996e",sales_typ_conference_room:"\u4f1a\u8bae\u5ba4",sales_typ_kangle:"\u5eb7\u4e50",sales_typ_sauna:"\u6851\u62ff",sales_typ_business_centre:"\u5546\u52a1\u4e2d\u5fc3",sales_typ_market:"\u5546\u573a",sales_typ_laundry:"\u6d17\u8863",sales_typ_multifunction_room:"\u591a\u529f\u80fd\u5385",save:"\u4fdd\u5b58",back:"\u8fd4\u56de",successmessage:"\u64cd\u4f5c\u6210\u529f",noCheckedMessage:"\u8bf7\u9009\u62e9\u65e0\u6548\u6570\u636e"}},2274:function(t,e,a){"use strict";var r=a(2123),n=a(2275);e.a={rightOperTop:{},rightOperCenter:{new:{text:r.a.new,className:"icon20 img50",permsCode:n.a[33200002],keyboard:"GF16"},batchInvalid:{text:r.a.batchInvalid,className:"icon20 img48",permsCode:n.a[33200003],keyboard:"GF18"}},rightOperBottom:{},baseElements:{fastquery:{type:"input",componentOptions:{text:"",placeholder:r.a.fastquery}},status_all:{type:"checkbox",componentOptions:{label:r.a.status_all,radio:!0}},status_valid:{type:"checkbox",componentOptions:{label:r.a.status_valid,radio:!0}},status_invalid:{type:"checkbox",componentOptions:{label:r.a.status_invalid,radio:!0}}},baseFormData:{fastquery:"",status_flg:"1"},columnData:[{title:r.a.sales_cd,field:"sales_cd",width:"100px"},{title:r.a.sales_nm,field:"sales_nm",width:"100px"},{title:r.a.group_nm,field:"group_nm",width:"100px"},{title:r.a.sales_typ_nm,field:"sales_typ",width:"100px",template:function(t){switch(t.text){case"0":return{toolTipText:r.a.sales_typ_catering,content:r.a.sales_typ_catering};case"1":return{toolTipText:r.a.sales_typ_conference_room,content:r.a.sales_typ_conference_room};case"2":return{toolTipText:r.a.sales_typ_kangle,content:r.a.sales_typ_kangle};case"3":return{toolTipText:r.a.sales_typ_sauna,content:r.a.sales_typ_sauna};case"4":return{toolTipText:r.a.sales_typ_business_centre,content:r.a.sales_typ_business_centre};case"5":return{toolTipText:r.a.sales_typ_market,content:r.a.sales_typ_market};case"6":return{toolTipText:r.a.sales_typ_laundry,content:r.a.sales_typ_laundry};case"7":return{toolTipText:r.a.sales_typ_multifunction_room,content:r.a.sales_typ_multifunction_room}}}},{title:r.a.cookbook_nm,field:"cookbook_nm",width:"100px"},{title:r.a.dept_nm,field:"dept_id",width:"100px"},{title:r.a.service_rate,field:"service_rate",width:"100px",template:function(t){if(null!==t.text)return{toolTipText:t.text+"%",content:t.text+"%"}}},{title:r.a.discount_rate,field:"discount_rate",width:"100px",template:function(t){if(null!==t.text)return{toolTipText:t.text+"%",content:t.text+"%"}}},{title:"",field:"tax1_id",width:"100px"},{title:"",field:"tax2_id",width:"100px"},{title:"",field:"tax3_id",width:"100px"},{title:"",field:"tax4_id",width:"100px"},{title:"",field:"tax5_id",width:"100px"},{title:"",field:"service_tax1_id",width:"100px"},{title:"",field:"service_tax2_id",width:"100px"},{title:"",field:"service_tax3_id",width:"100px"},{title:"",field:"service_tax4_id",width:"100px"},{title:"",field:"service_tax5_id",width:"100px"},{title:r.a.room_no,field:"room_no",width:"100px"},{title:r.a.max_person_num,field:"max_person_num",width:"100px"},{title:r.a.status_flg,field:"status_flg",width:"100px",template:function(t){var e=r.a.status_valid,a=r.a.status_invalid;return"1"===t.datasource.valid_flg?{toolTipText:e,content:e}:{toolTipText:a,content:a}}}],salesTypData:[{key:"0",value:"0",text:r.a.sales_typ_catering},{key:"1",value:"1",text:r.a.sales_typ_conference_room},{key:"2",value:"2",text:r.a.sales_typ_kangle},{key:"3",value:"3",text:r.a.sales_typ_sauna},{key:"4",value:"4",text:r.a.sales_typ_business_centre},{key:"5",value:"5",text:r.a.sales_typ_market},{key:"6",value:"6",text:r.a.sales_typ_laundry},{key:"7",value:"7",text:r.a.sales_typ_multifunction_room}],dataIdentityPropName:"sales_id",setFor:"sales",checkedData:[],currentPage:1,pageSize:30,recordsTotal:0,list:[],dictionaryData:{},routeParams:{},permsData:n.a}},2275:function(t,e,a){"use strict";e.a={33200002:["33200002","33200002G","33200002H"],33200003:["33200003","33200003G","33200003H"]}},3127:function(t,e,a){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function r(n,s){try{var i=e[n](s),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",function(){return p});var s=a(38),i=a.n(s),o=a(257),c=a(260),u=a(489),p=(new u.a,function t(){var e=this;n(this,t),this.init=function(){var t=r(i.a.mark(function t(a,r,n,s,o,u){var p,l,d,_,f;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.queryListConfigSales(a),e.queryPosParamByTypAndSalerList(r),e.queryGrpCmmDepartmentList(n),e.queryConfigCookbook(s),e.queryDictionary(o),e.getDicTaxTyp(u)]);case 2:p=t.sent,console.log("resultData",p),l={},l.PRODUCEDEPT=Object(c.b)(p[1].responseData.PRODUCEDEPT,["param_drpt"],"param_id"),l.SALESGROUP=Object(c.b)(p[1].responseData.SALESGROUP,["param_drpt"],"param_id"),l.DEPT=p[2].data&&p[2].data.map(function(t){return{"data-datasource":t,key:t.dept_id,value:t.dept_id,text:t.dept_nm}}),l.DEPT=Object(c.b)(p[2].data,["dept_nm"],"dept_id"),l.COOKBOOK=p[3].data&&p[3].data.map(function(t){return{"data-datasource":t,key:t.cookbook_id,value:t.cookbook_id,text:t.cookbook_nm}});for(d in p[4].responseData)p[4].responseData.hasOwnProperty(d)&&p[4].responseData[d].length&&(p[4].responseData[d]=p[4].responseData[d].map(function(t){return{"data-datasource":t,key:t.param_id,value:t.param_id,text:t.param_drpt}}));_=[];for(f in p[4].responseData)p[4].responseData.hasOwnProperty(f)&&p[4].responseData[f].length&&(_=_.concat(p[4].responseData[f]));return l.TOTALTAX=_,l.TAXTYP=p[5].data&&p[5].data.map(function(t){return{"data-datasource":t,key:t.param_id,value:t.param_id,text:t.param_drpt}}),t.abrupt("return",{salesData:p[0],dictTyps:l});case 16:case"end":return t.stop()}},t,e)}));return function(e,a,r,n,s,i){return t.apply(this,arguments)}}(),this.queryListConfigSales=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosSales/listGetConfigSales","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.savePosInsConfigSales=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosSales/savePosInsConfigSales","post",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.savePosUpdConfigSales=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosSales/savePosUpdConfigSales","post",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.updatePosValidConfigSales=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosSales/savePosValidConfigSales","post",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryListConfigSalesById=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosSales/listGetConfigSalesById","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryPosParamByTypAndSalerList=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/Dictionary/getPosParamByTypAndSalerList","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryGrpCmmDepartmentList=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3140010/GrpCmmDepartment/queryGrpCmmDepartmentList","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryConfigCookbook=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosCookbook/listGetConfigCookbook","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryDictionary=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/Dictionary/getDictionary","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.getDicTaxTyp=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/Dictionary/getDicTaxTyp","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()})}});