webpackJsonp([488],{1596:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(36),c=a.n(r),n=a(256),i=a.n(n),s=a(489),u=(a.n(s),a(2245)),o={namespace:"M01378025A120LP00501",state:{formData:{charge_price:"",charge_calculation:[],charge_every:"",charge_reward:"",charge_figures:"",charge_carry:[]},elements:{charge_price:{type:"input",width:8,interactionOptions:{isMust:!0},componentOptions:{text:u.a.price}},charge_calculation:{type:"select",width:8,interactionOptions:{isMust:!0},componentOptions:{text:u.a.calculation,selection:!0,options:[{key:0,value:"N",text:u.a.fixed_value},{key:1,value:"P",text:u.a.numerical},{key:2,value:"F",text:u.a.persent}]}},charge_every:{type:"input",width:8,interactionOptions:{isMust:!0},componentOptions:{text:u.a.per_recharge}},charge_reward:{type:"input",width:8,interactionOptions:{isMust:!0},componentOptions:{text:u.a.reward}},charge_figures:{type:"input",width:8,componentOptions:{text:u.a.keep_figures}},charge_carry:{type:"select",width:8,interactionOptions:{isMust:!0},componentOptions:{text:u.a.carry_way,selection:!0,options:[{key:0,value:"R",text:u.a.rounded},{key:1,value:"C",text:u.a.carry_up},{key:2,value:"F",text:u.a.truncation_down}]}}}},effects:{initState:c.a.mark(function e(t,a){var r,n,s=t.ifedit,u=t.params,o=a.put,p=(a.call,a.select);return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(function(e){return e.M01378025A120LP00501});case 2:return r=e.sent,n=i()(r.formData),s?(n.charge_price=u.classAmt,n.charge_calculation=[u.calcTyp],n.charge_every=u.perAmt,n.charge_reward=u.pcntAmt,n.charge_figures=u.keepDigits,n.charge_carry=[u.fractionFlg],n.charge_state=["0"]):n={charge_price:"",charge_calculation:[],charge_every:"",charge_reward:"",charge_figures:"",charge_carry:[],charge_state:[]},e.next=7,o({type:"updateState",formData:n});case 7:case"end":return e.stop()}},e,this)}),updateFrom:c.a.mark(function e(t,a){var r,n=t._formData,i=a.put,s=(a.call,a.select);return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(function(e){return e.M01378025A120LP00501});case 2:return r=e.sent,e.next=5,i({type:"updateState",formData:n});case 5:case"end":return e.stop()}},e,this)})},reducers:{updateState:function(e,t){return Object.assign({},e,t)}}};t.default=o},2245:function(e,t,a){"use strict";t.a={sure:"\u786e\u5b9a",cancel:"\u53d6\u6d88",price:"\u91d1\u989d",fixed_value:"\u56fa\u5b9a\u503c",numerical:"\u6570\u503c",persent:"\u767e\u5206\u6bd4",per_recharge:"\u6bcf\u5145\u503c\u91d1\u989d",reward:"\u5956\u52b1",keep_figures:"\u4fdd\u7559\u4f4d\u6570",carry_way:"\u8fdb\u4f4d\u65b9\u5f0f",rounded:"\u56db\u820d\u4e94\u5165",carry_up:"\u5411\u4e0a\u4f4d\u8fdb",truncation_down:"\u5411\u4e0b\u820d\u4f4d",state:"\u72b6\u6001",effective:"\u6709\u6548",invalid:"\u65e0\u6548",calculation:"\u8ba1\u7b97\u65b9\u5f0f"}}});