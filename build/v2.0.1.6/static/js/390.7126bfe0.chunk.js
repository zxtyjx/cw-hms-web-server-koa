webpackJsonp([390],{1735:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){function r(t){var e=t.baseFormData;return{ids:[],statusFlg:e.status_flg,currentPage:t.currentPage,pageSize:t.pageSize,fastquery:e.fastquery}}var n=a(36),s=a.n(n),u=a(2961),i=a(489),c=a.n(i),o=a(2209),p=new o.a,l={namespace:"M01328005A031LT00101",state:u.a,subscriptions:{historyListenEvent:function(e){var a=e.history,r=e.dispatch;return a.listen(function(e){var a=c()("/main/:tabindex/0132/80/05/A/031/L/T/001/01/:paramobject/:encryptstr").exec(e.pathname);if(a){var n=t.__COMPARISON__&&t.__COMPARISON__(a);r({type:"init",routeParams:n})}})}},effects:{init:s.a.mark(function e(a,n){var i,c,o,l,f,d,m,y,g,h,b,x=n.select,v=n.put,T=n.call;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(function(t){return t.M01328005A031LT00101});case 2:return i=e.sent,e.next=5,T(t.__GETCACHEDATA__,"M01328005A031LT00101",null,[]);case 5:if(c=e.sent,o=["WORKTITLE","POSITION","PARA_DEPT","PARA_USER","EMPLROLE"],!c){e.next=19;break}return l=r(c),l.currentPage=1,l.pageSize=c.currentPage*c.pageSize,e.next=13,T(p.init,l,o);case 13:return f=e.sent,d=f.satffListData,m=f.dictTyps,e.next=18,v({type:"initComplete",data:Object.assign({},c,{recordsTotal:d.recordsTotal,staffList:d.data,columnData:u.a.columnData,dictionaryData:m})});case 18:return e.abrupt("return");case 19:return y=r(i),e.next=22,T(p.init,y,o);case 22:return g=e.sent,h=g.satffListData,b=g.dictTyps,e.next=27,v({type:"initComplete",data:{currentPage:h.currentPage,pageSize:h.pageSize,recordsTotal:h.recordsTotal,staffList:h.data,routeParams:a.routeParams,dictionaryData:b}});case 27:case"end":return e.stop()}},e,this)}),currentPageChange:s.a.mark(function t(e,a){var n,u,i,c,o=a.select,l=a.put,f=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(function(t){return t.M01328005A031LT00101});case 2:return n=t.sent,u=r(n),u=Object.assign({},u,e.paramdata),t.next=7,f(p.queryList,u);case 7:return i=t.sent,c=Object.assign([],n.satffList),n.currentPage>i.currentPage?c.unshift.apply(c,i.data):c.push.apply(c,i.data),t.next=12,l({type:"queryListComplete",data:{currentPage:i.currentPage,pageSize:i.pageSize,recordsTotal:i.recordsTotal,staffList:c}});case 12:case"end":return t.stop()}},t,this)}),queryListData:s.a.mark(function t(e,a){var n,u,i,c=a.select,o=a.put,l=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(function(t){return t.M01328005A031LT00101});case 2:return n=t.sent,u=r(n),u.currentPage=1,t.next=7,l(p.queryList,u);case 7:return i=t.sent,t.next=10,o({type:"queryListComplete",data:{currentPage:i.currentPage,pageSize:i.pageSize,recordsTotal:i.recordsTotal,staffList:i.data}});case 10:case"end":return t.stop()}},t,this)}),updateDelData:s.a.mark(function t(e,a){var n,u,i,c=a.select,o=a.put,l=a.call;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(function(t){return t.M01328005A031LT00101});case 2:return n=t.sent,t.next=5,l(p.updateSetStatusFlgByIds,e.paramdata);case 5:return u=r(n),t.next=8,l(p.queryList,u);case 8:return i=t.sent,t.next=11,o({type:"updateConfirm"});case 11:return t.next=13,o({type:"queryListComplete",data:{currentPage:i.currentPage,pageSize:i.pageSize,recordsTotal:i.recordsTotal,staffList:i.data}});case 13:case"end":return t.stop()}},t,this)})},reducers:{updateBaseFormData:function(t,e){return Object.assign({},t,{baseFormData:Object.assign({},t.baseFormData,e.formData)})},updateRootStateProp:function(t,e){return Object.assign({},t,e.updateObj)},initComplete:function(t,e){return Object.assign({},t,e.data)},queryListComplete:function(t,e){return Object.assign({},t,e.data)},updateEffectDelData:function(t,e){return Object.assign({},t,{open:!0,dispatchParams:e.dispatchParams})},updateConfirm:function(t,e){return Object.assign({},t,{open:!1,checkedData:[]})}}};e.default=l}.call(e,a(16))},2209:function(t,e,a){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){function r(n,s){try{var u=e[n](s),i=u.value}catch(t){return void a(t)}if(!u.done)return Promise.resolve(i).then(function(t){r("next",t)},function(t){r("throw",t)});t(i)}return r("next")})}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",function(){return p});var s=a(36),u=a.n(s),i=a(257),c=a(487),o=new c.a,p=function t(){var e=this;n(this,t),this.init=function(){var t=r(u.a.mark(function t(a,r){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.queryList(a),o.queryDictionary(r)]);case 2:return n=t.sent,t.abrupt("return",{satffListData:n[0],dictTyps:n[1]});case 4:case"end":return t.stop()}},t,e)}));return function(e,a){return t.apply(this,arguments)}}(),this.queryList=function(){var t=r(u.a.mark(function t(a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.a)("/bs/3140010/GrpCmmEmployee/listGetData","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.updateSetStatusFlgByIds=function(){var t=r(u.a.mark(function t(a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.a)("/bs/3140010/GrpCmmEmployee/setStatusFlgByIds","post",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.updateSaveGrpCmmEmployee=function(){var t=r(u.a.mark(function t(a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.a)("/bs/3140010/GrpCmmEmployee/saveGrpCmmEmployee","post",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.updateGrpCmmEmployee=function(){var t=r(u.a.mark(function t(a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.a)("/bs/3140010/GrpCmmEmployee/updateGrpCmmEmployee","post",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryGrpCmmEmployee=function(){var t=r(u.a.mark(function t(a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.a)("/bs/3140010/GrpCmmEmployee/getGrpCmmEmployee","get",a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()}},2210:function(t,e,a){"use strict";e.a={32800007:["32800007","32800007G","32800007H"],32800009:["32800009","32800009G","32800009H"]}},2961:function(t,e,a){"use strict";var r=a(642),n=a(2210);e.a={rightOperTop:{},rightOperCenter:{new:{text:r.a.new,className:"icon20 img45",permsCode:n.a[32800007],keyboard:"GF16"},updateDelData:{text:r.a.batchinvalid,className:"icon20 img48",permsCode:n.a[32800009],keyboard:"GF18"}},rightOperBottom:{},baseElements:{fastquery:{type:"input",componentOptions:{text:r.a.fastquery,placeholder:""}},status_all:{type:"checkbox",componentOptions:{label:r.a.status_all,radio:!0}},status_valid:{type:"checkbox",componentOptions:{label:r.a.status_valid,radio:!0}},status_invalid:{type:"checkbox",componentOptions:{label:r.a.status_invalid,radio:!0}}},baseFormData:{fastquery:"",status_flg:"1"},columnData:[{title:r.a.seq,field:"seq"},{title:r.a.employee_cd,field:"employee_cd"},{title:r.a.employee_nm,field:"employee_nm"},{title:r.a.dept_nm,field:"dept_nm"},{title:r.a.onjob_flg,field:"onjob_flg",template:function(t){var e=r.a.onthejob,a=r.a.departure;return"1"===t.text?{toolTipText:e,content:e}:{toolTipText:a,content:a}}},{title:r.a.status_flg,field:"status_flg",width:"100px",template:function(t){var e=r.a.status_valid,a=r.a.status_invalid;return"1"===t.text?{toolTipText:e,content:e}:{toolTipText:a,content:a}}}],checkedData:[],currentPage:1,pageSize:60,recordsTotal:0,staffList:[],dictionaryData:{},dispatchParams:{},routeParams:{},open:!1,permsData:n.a}}});