webpackJsonp([463],{1440:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0});var r=n(38),o=n.n(r),s=n(17),i=n.n(s),p=n(256),u=n.n(p),c=n(2544),m=n(492),l=(n.n(m),n(260),n(2227)),f=new l.a,d={namespace:"M01328005A031LP00201",state:c.a,effects:{init:o.a.mark(function t(e,n){var a,r,s,i,p,m=n.select,l=n.put,d=n.call;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(function(t){return t.M01328005A031LP00201});case 2:if(a=t.sent,r={},"-1"===e.id){t.next=9;break}return t.next=7,d(f.queryGrpCmmEmployee,{id:e.id});case 7:s=t.sent,r=Object.assign({},s.resultData,{emplroleIds:y(s.resultData.emplroleIds),seq:s.resultData.seq?s.resultData.seq:0===s.resultData.seq?"0":""});case 9:if(i=u()(c.a.elements),i.deptId.componentOptions.options=e.dictionaryData.PARA_DEPT,i.employeeWorktitleId.componentOptions.options=e.dictionaryData.WORKTITLE,i.employeePositionId.componentOptions.options=e.dictionaryData.POSITION,i.userUid.componentOptions.options=e.dictionaryData.PARA_USER,i.emplroleIds.componentOptions.options=e.dictionaryData.EMPLROLE,!e.guestData){t.next=21;break}return p={employeeAltnm:e.guestData.altNm?e.guestData.altNm:""+e.guestData.firstNm+e.guestData.lastNm,profileNo:e.guestData.profileNo,employeeNm:e.guestData.altNm?e.guestData.altNm:""+e.guestData.firstNm+e.guestData.lastNm||""},t.next=19,l({type:"initComplete",data:Object.assign({},c.a,{elements:i,formData:Object.assign({},c.a.formData,e.formData,p)})});case 19:t.next=23;break;case 21:return t.next=23,l({type:"initComplete",data:Object.assign({},c.a,{elements:i,formData:Object.assign({},c.a.formData,r)})});case 23:case"end":return t.stop()}},t,this)}),submitFormData:o.a.mark(function t(e,n){var a,r,s,i,p,c,m=n.select,l=n.put,d=n.call;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(function(t){return t});case 2:if(a=t.sent,r=e.formData,s=e.id,i=a.M01328005A031LP00201,p=u()(i.formData),Object.assign(p,r),c={submitData:p},Object.assign(c,{displayData:a}),Object.assign(c,{originData:{}}),"-1"!==e.id){t.next=15;break}return t.next=13,d(f.updateSaveGrpCmmEmployee,c);case 13:t.next=17;break;case 15:return t.next=17,d(f.updateGrpCmmEmployee,c);case 17:return t.next=19,l({type:"SystemModel/updateModalWindowState"});case 19:case"end":return t.stop()}},t,this)}),updataName:o.a.mark(function t(e,n){var a=(n.select,n.put);n.call;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a({type:"updataNameComplete",formData:{employeeAltnm:e.guestData.altNm?e.guestData.altNm:""+e.guestData.firstNm+e.guestData.lastNm,profileNo:e.guestData.profileNo,employeeNm:e.guestData.altNm?e.guestData.altNm:""+e.guestData.firstNm+e.guestData.lastNm||""}});case 2:case"end":return t.stop()}},t,this)})},reducers:{initComplete:function(t,e){return Object.assign({},c.a,e.data)},updateFormData:function(t,e){if(i()(e,"formData")){var n=Object.assign({},t.formData,e.formData);return Object.assign({},t,{formData:n})}return Object.assign({},t,{formData:Object.assign({},t.formData,a({},e.fieldName,e.fieldValue))})},updataNameComplete:function(t,e){return Object.assign({},t,{formData:Object.assign({},t.formData,e.formData)})}}},y=function(t){for(var e=[],n=0;n<t.length;n++)e.push(""+t[n]);return e};e.default=d},2227:function(t,e,n){"use strict";function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function a(r,o){try{var s=e[r](o),i=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(i).then(function(t){a("next",t)},function(t){a("throw",t)});t(i)}return a("next")})}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return c});var o=n(38),s=n.n(o),i=n(257),p=n(489),u=new p.a,c=function t(){var e=this;r(this,t),this.init=function(){var t=a(s.a.mark(function t(n,a){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.queryList(n),u.queryDictionary(a)]);case 2:return r=t.sent,t.abrupt("return",{satffListData:r[0],dictTyps:r[1]});case 4:case"end":return t.stop()}},t,e)}));return function(e,n){return t.apply(this,arguments)}}(),this.queryList=function(){var t=a(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.a)("/bs/3140010/GrpCmmEmployee/listGetData","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.updateSetStatusFlgByIds=function(){var t=a(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.a)("/bs/3140010/GrpCmmEmployee/setStatusFlgByIds","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.updateSaveGrpCmmEmployee=function(){var t=a(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.a)("/bs/3140010/GrpCmmEmployee/saveGrpCmmEmployee","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.updateGrpCmmEmployee=function(){var t=a(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.a)("/bs/3140010/GrpCmmEmployee/updateGrpCmmEmployee","post",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}(),this.queryGrpCmmEmployee=function(){var t=a(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.a)("/bs/3140010/GrpCmmEmployee/getGrpCmmEmployee","get",n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()}},2544:function(t,e,n){"use strict";var a=n(574);e.a={elements:{seq:{type:"input",width:4,interactionOptions:{findCondition:""},componentOptions:{checkType:"zhinteger",text:a.a.seq}},employeeCd:{type:"input",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:a.a.employee_cd}},employeeAltnm:{type:"input",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{readOnly:!0,text:a.a.employee_nm,signs:[{className:"icon20 img135"}]}},employeeTyp:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{text:a.a.employeeTyp,selection:!0,options:[{text:a.a.employeeTyp_0,key:"0",value:"0"},{text:a.a.employeeTyp_1,key:"1",value:"1"},{text:a.a.employeeTyp_2,key:"9",value:"9"}]}},deptId:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.dept_nm}},employeeWorktitleId:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.employeeWorktitleId}},employeePositionId:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.employeePositionId}},userUid:{type:"select",width:4,interactionOptions:{findCondition:""},componentOptions:{selection:!0,text:a.a.userUid}},onjobFlg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.onjob_flg,options:[{text:a.a.onjobFlg_0,key:"0",value:"0"},{text:a.a.onjobFlg_1,key:"1",value:"1"}]}},statusFlg:{type:"select",width:4,interactionOptions:{isMust:!0,findCondition:""},componentOptions:{selection:!0,text:a.a.statusFlg,options:[{text:a.a.statusFlg_0,key:"0",value:"0"},{text:a.a.statusFlg_1,key:"1",value:"1"}]}},emplroleIds:{type:"select",width:16,interactionOptions:{findCondition:""},componentOptions:{multiple:!0,selection:!0,text:a.a.emplroleIds}}},formData:{emplroleIds:[],employeeAltnm:"",onjobFlg:"1",statusFlg:"1"}}}});