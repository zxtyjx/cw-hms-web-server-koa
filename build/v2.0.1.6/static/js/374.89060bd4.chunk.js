webpackJsonp([374],{1855:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var a=n(36),r=n.n(a),s=n(256),i=n.n(s),o=n(3148),c=n(489),p=n.n(c),u=(n(260),n(3150)),f=new u.a,y={namespace:"M01338020A021LT00201",state:o.a,subscriptions:{historyListenEvent:function(e){var n=e.history,a=e.dispatch;return n.listen(function(e){var n=p()("/main/:tabIndex/0133/80/20/A/021/L/T/002/01/:paramobject/:encryptstr").exec(e.pathname);if(n){var r=t.__COMPARISON__&&t.__COMPARISON__(n);a({type:"updateState",routeParams:r})}})}},effects:{init:r.a.mark(function t(e,n){var a,s,c,p,u,y,d,x,m,_,l=n.select,h=n.call,T=n.put;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(f.getDictionary,["TAX1","TAX2","TAX3","TAX4","TAX5"]);case 2:return a=t.sent,t.next=5,h(f.getPosParamByTypAndSalerList,{typs:["FINANCE"]});case 5:return s=t.sent,t.next=8,h(f.getDicTaxTyp,{paramTyp:"TAXTYPE"});case 8:return c=t.sent,p=c.data,t.next=12,h(f.queryListConfigStatsTyp,{statsTypGrade:"1",pageLength:"1000",pageStart:"1"});case 12:return u=t.sent,t.next=15,l(function(t){return t.M01338020A021LT00201});case 15:y=t.sent,d=i()(y.taxelements),x=i()(y.elements),d.tax1_id.componentOptions.options=a.TAX1,d.tax2_id.componentOptions.options=a.TAX2,d.tax3_id.componentOptions.options=a.TAX3,d.tax4_id.componentOptions.options=a.TAX4,d.tax5_id.componentOptions.options=a.TAX5,x.finance_id.componentOptions.options=s.responseData.FINANCE.map(function(t,e){return{key:e,value:String(t.key),text:t.name}}),x.parent_typ_id.componentOptions.options=u.data.map(function(t,e){return{key:e,value:String(t.stats_typ_id),text:t.stats_typ_nm,code:t.stats_typ_cd}}),m=function(t){var e=p.findIndex(function(e){return e.param_str1==d[t].mark});e>0&&(d[t].componentOptions.text=p[e].param_drpt)};for(_ in d)m(_);return t.next=29,T({type:"updateState",taxelements:d,elements:x,taxtypes:p,formData:o.a.formData});case 29:case"end":return t.stop()}},t,this)}),detail:r.a.mark(function t(e,n){var a,s,o,c,p,u=e.id,y=n.select,d=n.call,x=n.put;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(f.queryConfigStatsTypById,{stats_typ_id:u});case 2:return a=t.sent,s=a.data,t.next=6,y(function(t){return t.M01338020A021LT00201});case 6:return o=t.sent,c=i()(o.formData),p=i()(o.taxformData),c.stats_typ_cd=s[0].stats_typ_cd,c.stats_typ_nm=s[0].stats_typ_nm,c.finance_id=String(s[0].finance_id),c.income_flg=s[0].income_flg,c.statsTaxFlg=s[0].statstaxflg||"0",c.stats_typ_seq=s[0].stats_typ_seq,c.parent_typ_id=s[0].parent_typ_id,p.tax1_id=s[0].tax1_id,p.tax2_id=s[0].tax2_id,p.tax3_id=s[0].tax3_id,p.tax4_id=s[0].tax4_id,p.tax5_id=s[0].tax5_id,t.next=23,x({type:"updateState",formData:c,taxformData:p,detailitem:s[0]});case 23:case"end":return t.stop()}},t,this)}),save:r.a.mark(function t(e,n){var a=e.ifedit,s=e.postdata,i=(n.select,n.call);n.put;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(a?f.savePosUpdConfigStatsTyp:f.savePosInsConfigStatsTyp,s);case 2:case"end":return t.stop()}},t,this)})},reducers:{updateState:function(t,e){return Object.assign({},t,e)}}};e.default=y}.call(e,n(16))},3148:function(t,e,n){"use strict";var a=n(562);n(3149);e.a={routeParams:{},taxtypes:[],detailitem:{},rightOperTop:{save:{text:"\u4fdd\u5b58",className:"icon32 img81",keyboard:"GF08"},back:{text:"\u53d6\u6d88",className:"icon32 img83",keyboard:"GF10"}},taxformData:{},taxelements:{tax1_id:{type:"select",width:4,mark:"TAX1",componentOptions:{selection:!0,text:a.a.tax_rate1}},tax2_id:{type:"select",width:4,mark:"TAX2",componentOptions:{selection:!0,text:a.a.tax_rate2}},tax3_id:{type:"select",width:4,mark:"TAX3",componentOptions:{selection:!0,text:a.a.tax_rate3}},tax4_id:{type:"select",width:4,mark:"TAX4",componentOptions:{selection:!0,text:a.a.tax_rate4}},tax5_id:{type:"select",width:4,mark:"TAX5",componentOptions:{selection:!0,text:a.a.tax_rate5}}},elements:{parent_typ_id:{type:"select",width:4,interactionOptions:{isMust:!0},componentOptions:{selection:!0,text:a.a.parent_typ_id}},stats_typ_cd:{type:"input",width:4,interactionOptions:{isMust:!0},componentOptions:{text:a.a.statsTypCd,maxLength:2,minLength:2,checkType:"zhfloat"}},stats_typ_nm:{type:"input",width:4,interactionOptions:{isMust:!0},componentOptions:{text:a.a.statsTypNm,maxLength:20}},finance_id:{type:"select",width:4,componentOptions:{selection:!0,text:a.a.financeId}},income_flg:{type:"select",width:4,interactionOptions:{isMust:!0},componentOptions:{selection:!0,text:a.a.incomeFlg,options:[{key:"0",text:a.a.no,value:"0"},{key:"1",text:a.a.yes,value:"1"}]}},statsTaxFlg:{type:"select",width:4,interactionOptions:{isMust:!0},componentOptions:{selection:!0,text:a.a.statsTaxFlg,options:[{key:"0",text:a.a.no,value:"0"},{key:"1",text:a.a.yes,value:"1"}]}},stats_typ_seq:{type:"input",width:4,componentOptions:{text:a.a.statsTypSeq}}},formData:{stats_typ_cd:"",stats_typ_nm:"",finance_id:"",income_flg:"1",statsTaxFlg:"0",stats_typ_seq:""}}},3149:function(t,e,n){"use strict"},3150:function(t,e,n){"use strict";function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function a(r,s){try{var i=e[r](s),o=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}return a("next")})}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return u});var s=n(36),i=n.n(s),o=n(257),c=n(487),p=(n(260),n(562),new c.a),u=function t(){var e=this;r(this,t),this.getDictionary=function(){var t=a(i.a.mark(function t(n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.queryDictionary(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.getPosParamByTypAndSalerList=function(){var t=a(i.a.mark(function t(n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/Dictionary/getPosParamByTypAndSalerList","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.getDicTaxTyp=function(){var t=a(i.a.mark(function t(n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/Dictionary/getDicTaxTyp","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryListConfigStatsTyp=function(){var t=a(i.a.mark(function t(n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosCookbook/listGetConfigStatsTyp","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryConfigStatsTypById=function(){var t=a(i.a.mark(function t(n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosCookbook/listGetConfigStatsTypById","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.savePosInsConfigStatsTyp=function(){var t=a(i.a.mark(function t(n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosCookbook/savePosInsConfigStatsTyp","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.savePosUpdConfigStatsTyp=function(){var t=a(i.a.mark(function t(n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/3310010/PosCookbook/savePosUpdConfigStatsTyp","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryPosParamByTypAndSalerList=function(){var t=a(i.a.mark(function t(n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("/bs/Dictionary/getPosParamByTypAndSalerList","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()}}});