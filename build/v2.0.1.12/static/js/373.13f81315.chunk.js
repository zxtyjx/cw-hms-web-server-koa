webpackJsonp([373],{1861:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=n(38),s=n.n(i),o=n(256),r=n.n(o),u=n(3162),c=n(491),p=n.n(c),d=(n(260),n(510)),m=n(3164),l=new m.a,y={namespace:"M01338020A031LT00201",state:u.a,subscriptions:{historyListenEvent:function(e){var n=e.history,a=e.dispatch;return n.listen(function(e){var n=p()("/main/:tabIndex/0133/80/20/A/031/L/T/002/01/:paramobject/:encryptstr").exec(e.pathname);if(n){var i=t.__COMPARISON__&&t.__COMPARISON__(n);a({type:"updateState",routeParams:i})}})}},effects:{init:s.a.mark(function t(e,n){var a,i,o,c,p,d,m,y,f,_,g,x,h,v=n.select,O=n.put,k=n.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(l.listGetData,{paramTyp:"POSMAKETYP",pageLength:"1000",pageStart:"1",statusFlg:"1"});case 2:return a=t.sent,t.next=5,k(l.queryPosMakeList,{validFlg:"1",pageLength:"1000",pageStart:"1"});case 5:return i=t.sent,t.next=8,k(l.listGetData,{paramTyp:"POSDEMANDTYP",pageLength:"1000",pageStart:"1",statusFlg:"1"});case 8:return o=t.sent,t.next=11,k(l.listGetData,{paramTyp:"POSDEMAND",pageLength:"1000",pageStart:"1",statusFlg:"1"});case 11:return c=t.sent,p={pageLength:"1000",pageStart:"1"},d={pageLength:"1000",pageStart:"1"},t.next=16,k(l.queryMenuTyps,{menuTypGrade:"2",pageLength:999,pageStart:1});case 16:return m=t.sent,t.next=19,k(l.queryConfigStatsTyp,{pageLength:999,pageStart:1,statsTypGrade:"2"});case 19:return y=t.sent,f={typs:["MENUSPEC"]},t.next=23,k(l.init,"",p,d,f);case 23:return _=t.sent,g=_.dictTyps,t.next=27,v(function(t){return t.M01338020A031LT00201});case 27:return x=t.sent,h=r()(x.elementsGroup),h[0].elements.mainMenuTypId.componentOptions.options=g.BIGMENU,h[0].elements.mainStatsTypId.componentOptions.options=g.BIGSTATUS,h[0].elements.menu_typ_id.componentOptions.options=m.data.map(function(t,e){return{key:e,value:String(t.menu_typ_id),text:t.menu_typ_nm,code:t.menu_typ_cd}}),h[0].elements.stats_typ_id.componentOptions.options=y.data.map(function(t,e){return{key:e,value:String(t.stats_typ_id),text:t.stats_typ_nm,code:t.stats_typ_cd}}),t.next=35,O({type:"initComplete",elementsGroup:h,packagePriceData:[],dictionaryData:g,practiceCategory:a.data,dishesPractice:i.data,adHocRequestCategory:o.data,adHocRequest:c.data,formData:u.a.formData});case 35:case"end":return t.stop()}},t,this)}),updateItem:s.a.mark(function t(e,n){var a=e.ifedit,i=e.postdata,o=(n.select,n.put,n.call);return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(a?l.savePosUpdConfigMenu:l.savePosInsConfigMenu,i);case 2:case"end":return t.stop()}},t,this)}),getDetail:s.a.mark(function t(e,n){var a,i,o,c,p=e.id,d=(n.select,n.put),m=n.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(l.queryConfigMenuById,{menuId:p});case 2:a=t.sent,i=r()(u.a.formData);for(o in i)for(c in i[o])i[o][c]=a[c];return t.next=7,d({type:"updateState",formData:i,packagePriceData:a.price,makeIds:a.makeIds,demandIds:a.demandIds,detaildata:a});case 7:case"end":return t.stop()}},t,this)}),addPriceEf:s.a.mark(function t(e,n){var a,i,o=e.paramdata,u=e.ifedit,c=e.index,p=n.select,m=(n.call,n.put);return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(function(t){return t.M01338020A031LT00201});case 2:if(a=t.sent,i=r()(a.packagePriceData),o.menu_id=a.detaildata.menu_id,o.menu_cd=a.formData[0].menu_cd,u?i[c]=o:i.push(o),new Set(i.map(function(t){return t.menu_spec_id})).size==i.length){t.next=10;break}throw d.a.no_repeat_to_add;case 10:return t.next=12,m({type:"updateState",packagePriceData:i});case 12:return t.next=14,m({type:"SystemModel/updateModalWindowState"});case 14:case"end":return t.stop()}},t,this)}),deletePriceEf:s.a.mark(function t(e,n){var a,i,o=e.id,u=n.select,c=(n.call,n.put);return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(function(t){return t.M01338020A031LT00201});case 2:return a=t.sent,i=r()(a.packagePriceData),i.splice(o,1),t.next=7,c({type:"deletePrice",packagePriceData:i});case 7:case"end":return t.stop()}},t,this)}),getMainMenu:s.a.mark(function t(e,n){var a,i,o,u=e.value,c=e.index,p=n.select,d=n.call,m=n.put;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(function(t){return t.M01338020A031LT00201});case 2:return a=t.sent,i=r()(a.elementsGroup),t.next=6,d(l.queryMenuTyps,{menuTypGrade:"2",pageLength:999,pageStart:1,parentTypId:u});case 6:return o=t.sent,i[c].elements.menu_typ_id.componentOptions.options=o.data.map(function(t,e){return{key:e,value:String(t.menu_typ_id),text:t.menu_typ_nm,code:t.menu_typ_cd}}),t.next=10,m({type:"updateState",elementsGroup:i});case 10:case"end":return t.stop()}},t,this)}),getMainStats:s.a.mark(function t(e,n){var a,i,o,u=e.value,c=e.index,p=n.select,d=n.call,m=n.put;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(function(t){return t.M01338020A031LT00201});case 2:return a=t.sent,i=r()(a.elementsGroup),t.next=6,d(l.queryConfigStatsTyp,{pageLength:999,pageStart:1,statsTypGrade:"2",parentTypId:u});case 6:return o=t.sent,i[c].elements.stats_typ_id.componentOptions.options=o.data.map(function(t,e){return{key:e,value:String(t.stats_typ_id),text:t.stats_typ_nm,code:t.stats_typ_cd}}),t.next=10,m({type:"updateState",elementsGroup:i});case 10:case"end":return t.stop()}},t,this)})},reducers:{updateState:function(t,e){return Object.assign({},t,e)},initComplete:function(t,e){return Object.assign({},t,e)},updateFormData:function(t,e){var n=e.index;e.formData;return Object.assign({},t,a({},"formData"+n,e.formData))},addPrice:function(t,e){return Object.assign({},t,{packagePriceData:e.packagePriceData})},deletePrice:function(t,e){return Object.assign({},t,{packagePriceData:e.packagePriceData})}}};e.default=y}.call(e,n(15))},3162:function(t,e,n){"use strict";var a=n(510);n(3163);e.a={detaildata:{},makeIds:[],demandIds:[],practiceCategory:[],dishesPractice:[],adHocRequestCategory:[],adHocRequest:[],routeParams:{},rightOperTop:{save:{text:"\u4fdd\u5b58",className:"icon32 img81",keyboard:"GF08"},back:{text:"\u53d6\u6d88",className:"icon32 img83",keyboard:"GF10"}},elementsGroup:[{title:a.a.title1,elements:{menu_cd:{type:"input",width:4,interactionOptions:{isMust:!0},componentOptions:{text:a.a.menuCd}},menu_nm:{type:"input",width:4,interactionOptions:{isMust:!0},componentOptions:{text:a.a.menuNm}},mainMenuTypId:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.mainMenuTypId}},menu_typ_id:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.menuTypId}},mainStatsTypId:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.mainStatsTypId}},stats_typ_id:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.statsTypId}},menu_alias:{type:"input",width:4,interactionOptions:{isMust:!0},componentOptions:{text:a.a.menuAlias}}}},{title:a.a.title2,elements:{service_flg:{type:"select",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.serviceFlg,options:[{key:"0",text:a.a.free,value:"0"},{key:"1",text:a.a.whole,value:"1"}]}},service_typ:{type:"select",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.serviceTyp,options:[{key:"0",text:a.a.ratio,value:"0"},{key:"1",text:a.a.money,value:"1"}]}},service_value:{type:"input",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:a.a.serviceValue}},discount_flg:{type:"select",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.discountFlg,options:[{key:"0",text:a.a.free,value:"0"},{key:"1",text:a.a.whole,value:"1"}]}},discount_typ:{type:"select",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.serviceTyp,options:[{key:"0",text:a.a.ratio,value:"0"},{key:"1",text:a.a.money,value:"1"}]}},discount_value:{type:"input",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:a.a.discountValue}},commission_flg:{type:"select",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.commissionFlg,options:[{key:"0",text:a.a.free,value:"0"},{key:"1",text:a.a.configuration_dishes,value:"1"},{key:"2",text:a.a.user_role,value:"1"}]}},commission_typ:{type:"select",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.commissionTyp,options:[{key:"0",text:a.a.ratio,value:"0"},{key:"1",text:a.a.money,value:"1"}]}},commission_value:{type:"input",width:5,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:a.a.commissionValue}}}},{title:a.a.title3,elements:{clear_flg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.clearFlg,options:[{key:"0",text:a.a.vegetable_selling,value:"0"},{key:"1",text:a.a.Recipes,value:"1"}]}},edit_name_flg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.editNameFlg,options:[{key:"0",text:a.a.no,value:"0"},{key:"1",text:a.a.yes,value:"1"}]}},edit_price_flg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.editPriceFlg,options:[{key:"0",text:a.a.no,value:"0"},{key:"1",text:a.a.yes,value:"1"}]}},show_passed_flg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.showPassedFlg,options:[{key:"0",text:a.a.no,value:"0"},{key:"1",text:a.a.yes,value:"1"}]}},menu_seq:{type:"input",width:4,interactionOptions:{findCondition:""},componentOptions:{text:a.a.menuSeq}},display_seq:{type:"input",width:4,interactionOptions:{findCondition:""},componentOptions:{text:a.a.displaySeq}},show_make_flg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.showMakeFlg,options:[{key:"0",text:a.a.no,value:"0"},{key:"1",text:a.a.yes,value:"1"}]}},show_demand_flg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.showDemandFlg,options:[{key:"0",text:a.a.no,value:"0"},{key:"1",text:a.a.yes,value:"1"}]}},must_make_flg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.mustMakeFlg,options:[{key:"0",text:a.a.no,value:"0"},{key:"1",text:a.a.yes,value:"1"}]}},weighed_flg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.weighedFlg,options:[{key:"0",text:a.a.no,value:"0"},{key:"1",text:a.a.yes,value:"1"}]}},minimums_flg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.minimumsFlg,options:[{key:"0",text:a.a.no,value:"0"},{key:"1",text:a.a.yes,value:"1"}]}},unge_flg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.ungeFlg,options:[{key:"0",text:a.a.no,value:"0"},{key:"1",text:a.a.yes,value:"1"}]}}}},{title:a.a.title4,elements:{ingredient_memo:{type:"input",width:4,interactionOptions:{findCondition:""},componentOptions:{text:a.a.ingredientMemo}},taste_memo:{type:"input",width:4,interactionOptions:{findCondition:""},componentOptions:{text:a.a.tasteMemo}},make_memo:{type:"input",width:4,interactionOptions:{findCondition:""},componentOptions:{text:a.a.makeMemo}},memo:{type:"input",width:4,interactionOptions:{findCondition:""},componentOptions:{text:a.a.memo}}}}],formData:[{menu_cd:"",menu_nm:"",mainMenuTypId:"",menu_typ_id:"",mainStatsTypId:"",stats_typ_id:"",menu_alias:""},{service_flg:"1",service_typ:"0",service_value:"0",discount_flg:"1",discount_typ:"0",discount_value:"0",commission_flg:"1",commission_typ:"0",commission_value:"0"},{clear_flg:"1",edit_name_flg:"0",edit_price_flg:"0",show_passed_flg:"1",menu_seq:"",display_seq:"",show_make_flg:"0",show_demand_flg:"0",must_make_flg:"0",weighed_flg:"0",minimums_flg:"1",unge_flg:"0"},{ingredient_memo:"",taste_memo:"",make_memo:"",memo:""}],packagePriceData:[]}},3163:function(t,e,n){"use strict"},3164:function(t,e,n){"use strict";function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function a(i,s){try{var o=e[i](s),r=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(r).then(function(t){a("next",t)},function(t){a("throw",t)});t(r)}return a("next")})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return _});var s=n(38),o=n.n(s),r=n(167),u=n.n(r),c=n(22),p=n.n(c),d=n(10),m=n.n(d),l=n(257),y=n(489),f=n(260),_=(n(510),new y.a,function t(){var e=this;i(this,t),this.init=function(){var t=a(o.a.mark(function t(n,a,i,s){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._init(a,i,s));case 1:case"end":return t.stop()}},t,e)}));return function(e,n,a,i){return t.apply(this,arguments)}}(),this._init=function(){var t=a(o.a.mark(function t(n,a,i){var s,r,c,d,l,y;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.queryMenuTyps(n),e.queryConfigStatsTyp(a),e.queryPosParamByTypAndSalerList(i)]);case 2:if(s=t.sent,m()(s)&&0!=p()(s)){t.next=5;break}throw"\u521d\u59cb\u5316\u914d\u7f6e\u5931\u8d25";case 5:return r={},c=u()(s[0].data,function(t){return 1===t.menu_typ_grade}),r.BIGMENU=Object(f.b)(c,["menu_typ_cd","menu_typ_nm"],"menu_typ_id"),d=u()(s[0].data,function(t){return 2===t.menu_typ_grade}),r.SMALLMENU=Object(f.b)(d,["menu_typ_cd","menu_typ_nm"],"menu_typ_id"),l=u()(s[1].data,function(t){return 1===t.stats_typ_grade}),r.BIGSTATUS=Object(f.b)(l,["stats_typ_cd","stats_typ_nm"],"stats_typ_id"),y=u()(s[1].data,function(t){return 2===t.stats_typ_grade}),r.SMALLSTATUS=Object(f.b)(s[1].data,["stats_typ_cd","stats_typ_nm"],"stats_typ_id"),r.MENUSPEC=Object(f.b)(s[2].responseData.MENUSPEC,["param_drpt"],"param_id"),t.abrupt("return",{dictTyps:r});case 16:case"end":return t.stop()}},t,e)}));return function(e,n,a){return t.apply(this,arguments)}}(),this.queryConfigMenuById=function(){var t=a(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)("/bs/3310010/PosCookbook/listGetConfigMenuById","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.savePosInsConfigMenu=function(){var t=a(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)("/bs/3310010/PosCookbook/savePosInsConfigMenu","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.savePosUpdConfigMenu=function(){var t=a(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)("/bs/3310010/PosCookbook/savePosUpdConfigMenu","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryMenuTyps=function(){var t=a(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)("/bs/3310010/PosCookbook/listGetConfigMenuTyp","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryConfigStatsTyp=function(){var t=a(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)("/bs/3310010/PosCookbook/listGetConfigStatsTyp","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryPosParamByTypAndSalerList=function(){var t=a(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)("/bs/Dictionary/getPosParamByTypAndSalerList","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.listGetData=function(){var t=a(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)("/bs/3130010/CmmPosParam/listGetData","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryPosMakeList=function(){var t=a(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)("/bs/3310010/PosTran/queryPosMakeList","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()})}});