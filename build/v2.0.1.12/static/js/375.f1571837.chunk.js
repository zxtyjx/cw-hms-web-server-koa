webpackJsonp([375],{1855:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){function r(t){var e=t.baseFormData;t.moreFormData;return{parentTypId:e.fastquery,pageLength:t.pageSize,pageStart:t.currentPage}}var n=a(38),s=a.n(n),i=a(256),o=a.n(i),c=a(3149),u=a(491),p=a.n(u),f=a(3151),l=new f.a,d={namespace:"M01338020A021LT00101",state:c.a,subscriptions:{historyListenEvent:function(e){var a=e.history,r=e.dispatch;return a.listen(function(e){var a=p()("/main/:tabindex/0133/80/20/A/021/L/T/001/01/:paramobject/:encryptstr").exec(e.pathname);if(a){var n=t.__COMPARISON__&&t.__COMPARISON__(a);r({type:"init",routeParams:n})}})}},effects:{init:s.a.mark(function t(e,a){var n,i,c,u,p,f,d,y,m,T,g,b=a.select,h=a.put,v=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(function(t){return t.M01338020A021LT00101});case 2:return n=t.sent,i=r(n),i.statsTypGrade="2",c={typs:["FINANCE"]},u={paramTyp:"TAXTYPE"},p={reqData:{TAX1:{TAX1:null},TAX2:{TAX2:null},TAX3:{TAX3:null},TAX4:{TAX4:null},TAX5:{TAX5:null}}},f={statsTypGrade:"1",pageLength:"1000",pageStart:"1"},t.next=11,v(l.init,i,c,u,p,f);case 11:return d=t.sent,y=d.listData,m=d.dictTyps,T=o()(n.baseElements),g=o()(n.columnData),g.map(function(t,e){var a=m.TAXTYP.findIndex(function(e){return e["data-datasource"].param_str1===t.mark});a>0&&(g[e].title=m.TAXTYP[a]["data-datasource"].param_drpt)}),T.fastquery.componentOptions.options=m.BIGSTATUS,t.next=20,h({type:"initComplete",data:{currentPage:y.currentPage,pageSize:y.pageSize,recordsTotal:y.recordsTotal,list:y.data,routeParams:e.routeParams,baseElements:T,dictionaryData:m,columnData:g}});case 20:case"end":return t.stop()}},t,this)}),queryList:s.a.mark(function t(e,a){var n,i,o,c=a.select,u=a.put,p=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(function(t){return t.M01338020A021LT00101});case 2:return n=t.sent,i=r(n),i.statsTypGrade="2",t.next=7,p(l.queryListConfigStatsTyp,i);case 7:return o=t.sent,t.next=10,u({type:"queryListComplete",data:{pageStart:o.currentPage,currentPage:o.currentPage,pageLength:o.pageSize,pageSize:o.pageSize,recordsTotal:o.recordsTotal,list:o.data}});case 10:case"end":return t.stop()}},t,this)}),deleteItem:s.a.mark(function t(e,a){a.select,a.put,a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.confirm&&e.cbParams();case 1:case"end":return t.stop()}},t,this)}),updatePosValidConfig:s.a.mark(function t(e,a){var r,n=e.params,i=e.cb,o=a.select,c=(a.put,a.call);return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(function(t){return t.M01338020A021LT00101});case 2:return r=t.sent,t.next=5,c(l.updatePosDelConfigStatsTyp,n);case 5:i();case 6:case"end":return t.stop()}},t,this)}),queryById:s.a.mark(function t(e,a){var r,n,i=(a.put,a.call);a.select;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(l.queryConfigStatsTypById,e);case 2:r=t.sent,n=r.data;case 4:case"end":return t.stop()}},t,this)}),currentPageChange:s.a.mark(function t(e,a){var n,i,o,c,u=a.select,p=a.put,f=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(function(t){return t.M01338020A021LT00101});case 2:return n=t.sent,i=r(n),i=Object.assign({},i,e.paramdata),t.next=7,f(l.queryListConfigStatsTyp,i);case 7:return o=t.sent,c=Object.assign([],n.list),n.currentPage>o.currentPage?c.unshift.apply(c,o.data):c.push.apply(c,o.data),t.next=12,p({type:"queryListComplete",data:{currentPage:o.currentPage,pageSize:o.pageSize,recordsTotal:o.recordsTotal,list:c}});case 12:case"end":return t.stop()}},t,this)})},reducers:{updateBaseFormData:function(t,e){return Object.assign({},t,{baseFormData:Object.assign({},t.baseFormData,e.formData)})},updateMoreFormData:function(t,e){return Object.assign({},t,{moreFormData:Object.assign({},t.moreFormData,e.formData)})},updateRootStateProp:function(t,e){return Object.assign({},t,e.updateObj)},initComplete:function(t,e){return Object.assign({},t,e.data)},queryListComplete:function(t,e){return Object.assign({},t,e.data)}}};e.default=d}.call(e,a(15))},3149:function(t,e,a){"use strict";var r=a(672),n=a(3150),s=a(1),i=(a.n(s),function(){var t="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,a,r,n){var s=e&&e.defaultProps,i=arguments.length-3;if(a||0===i||(a={}),a&&s)for(var o in s)void 0===a[o]&&(a[o]=s[o]);else a||(a=s||{});if(1===i)a.children=n;else if(i>1){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+3];a.children=c}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:a,_owner:null}}}());e.a={baseElements:{fastquery:{type:"select",width:4,componentOptions:{text:r.a.parentTypId,selection:!0}}},baseFormData:{fastquery:"",status_flg:"1"},columnData:[{title:r.a.stats_typ_cd,field:"stats_typ_cd"},{title:r.a.stats_typ_nm,field:"stats_typ_nm"},{title:r.a.parent_typ_cd,field:"parent_detail"},{title:r.a.finance_nm,field:"finance_nm"},{title:r.a.income_flg,field:"income_flg",template:function(t){var e=t.text;return i("span",{},void 0,r.a["income_flg_"+e])}},{title:r.a.tax1_id,field:"tax1_id",mark:"TAX1"},{title:r.a.tax2_id,field:"tax2_id",mark:"TAX2"},{title:r.a.tax3_id,field:"tax3_id",mark:"TAX3"},{title:r.a.tax4_id,field:"tax4_id",mark:"TAX4"},{title:r.a.tax5_id,field:"tax5_id",mark:"TAX5"},{title:r.a.stats_typ_seq,field:"stats_typ_seq"}],rightOperTop:{},rightOperCenter:{new:{text:r.a.btnNew,className:"icon20 img45",permsCode:n.a[33200039]},batchInvalid:{text:r.a.btnBatchInvalid,className:"icon20 img48",permsCode:n.a[33200040]}},rightOperBottom:{},dataIdentityPropName:"stats_typ_id",setFor:"statsTyp",checkedData:[],currentPage:1,pageSize:30,recordsTotal:0,list:[],dictionaryData:{},routeParams:{},permsData:n.a}},3150:function(t,e,a){"use strict";e.a={33200039:["33200039","33200039G","33200039"],33200040:["33200040","33200040G","33200040"]}},3151:function(t,e,a){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function r(n,s){try{var i=e[n](s),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",function(){return p});var s=a(38),i=a.n(s),o=a(257),c=a(260),u=a(489),p=(new u.a,function t(){var e=this;n(this,t),this.init=function(){var t=r(i.a.mark(function t(a,r,n,s,o){var u,p,f,l;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.queryListConfigStatsTyp(a),e.queryPosParamByTypAndSalerList(r),e.queryDicTaxTyp(n),e.queryDictionary(s),e.queryListConfigStatsTyp(o)]);case 2:u=t.sent,p={},p.FINANCE=Object(c.b)(u[1].responseData.FINANCE,["param_cd","param_drpt"],"param_id"),p.TAXTYP=Object(c.b)(u[2].data,["param_drpt"],"param_id"),p.BIGSTATUS=Object(c.b)(u[4].data,["stats_typ_cd","stats_typ_nm"],"stats_typ_id"),f=[];for(l in u[3].responseData)u[3].responseData.hasOwnProperty(l)&&u[3].responseData[l].length&&(f=f.concat(u[3].responseData[l]));return p.TOTALTAX=Object(c.b)(f,["param_drpt"],"param_id"),t.abrupt("return",{listData:u[0],dictTyps:p});case 11:case"end":return t.stop()}},t,e)}));return function(e,a,r,n,s){return t.apply(this,arguments)}}(),this.queryListConfigStatsTyp=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosCookbook/listGetConfigStatsTyp","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.savePosInsConfigStatsTyp=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosCookbook/savePosInsConfigStatsTyp","post",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.savePosUpdConfigStatsTyp=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosCookbook/savePosUpdConfigStatsTyp","post",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.updatePosDelConfigStatsTyp=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosCookbook/savePosDelConfigStatsTyp","post",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryConfigStatsTypById=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosCookbook/listGetConfigStatsTypById","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryPosParamByTypAndSalerList=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/Dictionary/getPosParamByTypAndSalerList","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryDicTaxTyp=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/Dictionary/getDicTaxTyp","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryDictionary=function(){var t=r(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/Dictionary/getDictionary","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()})}});