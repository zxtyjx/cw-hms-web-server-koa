webpackJsonp([332],{1614:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(38),a=r.n(n),s=r(256),c=r.n(s),u=r(2759),o=r(2761),i=new o.a,p={namespace:"M01372020A031LP00301",state:u.a,effects:{init:a.a.mark(function e(t,r){var n,s,u,o,p,d,f,m=t.memberNo,l=t.ifreopen,y=t.mcardNo,b=r.select,x=r.put,h=r.call;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(i.queryMcardtypeList);case 2:return n=e.sent,e.next=5,h(i.getInitData,{memberNo:m,mcardNo:y});case 5:return s=e.sent,e.next=8,h(i.queryLpsCmmMcardrank);case 8:return u=e.sent,e.next=11,b(function(e){return e.M01372020A031LP00301});case 11:return o=e.sent,p=c()(o.formData),d=c()(o.elements_base),f=c()(o.formData_extra),d.cardType.componentOptions.options=n.responseData.PARA_MCARDTYPE.map(function(e,t){return{key:t,value:String(e.id),text:e.name}}),d.cardLev.componentOptions.options=u.responseData.PARA_MCARDRANK.map(function(e,t){return{key:t,value:String(e.param_id),text:e.name}}),p.cardNum=s.resultData.mcardNo,p.referenceno=s.resultData.referNum,p.cardType=s.resultData.mcardtypId.toString(),p.cardLev=s.resultData.mcardrankId,p.note=s.resultData.memo,p.status=s.resultData.mcardStus,f.entity_card="",f.reference_num="",l&&(o.printedNum=s.resultData.lpsBnsRealcardDtos[0].printedNum),e.next=28,x({type:"updateForm",formData:p,elements_base:d,hasCard:!0,formData_extra:f,cardInfo:s.resultData,printedNum:o.printedNum});case 28:case"end":return e.stop()}},e,this)}),translateCard:a.a.mark(function e(t,r){var n=t.data,s=(r.select,r.put);r.call;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"updateForm",hasCard:n.checked});case 2:case"end":return e.stop()}},e,this)}),addNewCard:a.a.mark(function e(t,r){var n,s,c,u=t.memberNo,o=t.ifreopen,p=t.mcardNo,d=r.select,f=(r.put,r.call);return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(function(e){return e.M01372020A031LP00301});case 2:if(n=e.sent,!o){e.next=11;break}if(s={submitData:{lpsBnsRealcardDtos:[{mcardNo:p,printedNum:n.formData_extra.reference_num,subDto:{typCRUD:"1"}},{realcardId:n.cardInfo.lpsBnsRealcardDtos[0].realcardId,printedNum:n.cardInfo.lpsBnsRealcardDtos[0].printedNum,subDto:{typCRUD:"4"}}]}},e.t0=n.hasCard,!e.t0){e.next=9;break}return e.next=9,f(i.editNewRealCard,s);case 9:e.next=16;break;case 11:if(c={submitData:{mcardNo:p,memberNo:u,printedNum:n.formData_extra.reference_num}},e.t1=n.hasCard,!e.t1){e.next=16;break}return e.next=16,f(i.addNewRealCard,c);case 16:case"end":return e.stop()}},e,this)})},reducers:{updateForm:function(e,t){return Object.assign({},e,t)}}};t.default=p},2264:function(e,t,r){"use strict";t.a={cardNum:"\u5361\u53f7",cardType:"\u5361\u7c7b\u578b",cardGrade:"\u5361\u7b49\u7ea7",ref:"\u53c2\u8003\u53f7",memo:"\u5907\u6ce8",status:"\u72b6\u6001",entityCardNum:"\u5b9e\u4f53\u5361\u53f7",entityRef:"\u5370\u5237\u5361\u53f7",confirm:"\u786e\u5b9a",cancel:"\u53d6\u6d88",operation:"\u64cd\u4f5c\u6210\u529f",member_info:"\u4f1a\u5458\u5361\u4fe1\u606f",creact_realcard:"\u5efa\u7acb\u5b9e\u4f53\u5361",reopen_realcard:"\u91cd\u65b0\u53d1\u5b9e\u4f53\u5361\u4fe1\u606f",last_physical:"\u5df2\u53d1\u6700\u540e\u4e00\u5f20\u5b9e\u4f53\u5361\u5c06\u88ab\u4f5c\u5e9f",effective:"\u6709\u6548",invalid:"\u65e0\u6548"}},2759:function(e,t,r){"use strict";var n=r(2264),a=r(2760);t.a={permsData:a.a,hasCard:!0,cardInfo:{},printedNum:"",formData:{cardNum:"",referenceno:"",cardType:[],cardLev:[],note:"",status:""},formData_extra:{entity_card:"",reference_num:""},elements_extra:{reference_num:{type:"input",width:5,interactionOptions:{isMust:!0},componentOptions:{text:n.a.entityRef}}},elements_base:{cardNum:{type:"input",width:5,componentOptions:{text:n.a.cardNum,disabled:!0}},referenceno:{type:"input",width:5,componentOptions:{text:n.a.ref,disabled:!0}},cardType:{type:"select",width:5,componentOptions:{text:n.a.cardType,selection:!0,disabled:!0}},cardLev:{type:"select",width:5,componentOptions:{text:n.a.cardGrade,selection:!0,disabled:!0}},note:{type:"input",width:5,componentOptions:{text:n.a.memo,disabled:!0}},status:{type:"select",width:5,componentOptions:{text:n.a.status,selection:!0,disabled:!0,options:[{key:0,value:"1",text:n.a.effective},{key:1,value:"0",text:n.a.invalid}]}}}}},2760:function(e,t,r){"use strict";t.a={35400205:["35400205","35400205G","35400205H"]}},2761:function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,s){try{var c=t[a](s),u=c.value}catch(e){return void r(e)}if(!c.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}return n("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",function(){return i});var s=r(38),c=r.n(s),u=r(257),o=r(489),i=(new o.a,function e(){var t=this;a(this,e),this.getInitData=function(){var e=n(c.a.mark(function e(r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)("/bs/3540010/LpsBnsMember/getMemberInfoByNo","get",Object.assign({},r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}(),this.queryMcardtypeList=function(){var e=n(c.a.mark(function e(r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)("/bs/3540010/LpsBnsMember/queryLpsDictionary","get",{reqData:{PARA_MCARDTYPE:{PARA_MCARDTYPE:{status_flg:"1"}}}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}(),this.queryLpsCmmMcardrank=function(){var e=n(c.a.mark(function e(r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)("/bs/3540010/LpsBnsMember/queryLpsDictionary","get",{reqData:{PARA_MCARDRANK:{PARA_MCARDRANK:{status_flg:"1"}}}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}(),this.editNewRealCard=function(){var e=n(c.a.mark(function e(r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)("/bs/3540010/LpsBnsRealcard/resaveLpsBnsRealcard","post",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}(),this.addNewRealCard=function(){var e=n(c.a.mark(function e(r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)("/bs/3540010/LpsBnsRealcard/saveLpsBnsRealcard","post",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()})}});