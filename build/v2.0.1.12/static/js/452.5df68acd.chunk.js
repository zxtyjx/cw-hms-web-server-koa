webpackJsonp([452],{1408:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o(38),i=o.n(e),r=o(256),s=o.n(r),a=o(2506),p=o(2507),c=new p.a,u={namespace:"M01328050A050LP00301",state:a.a,effects:{init:i.a.mark(function t(n,o){var e,r,p,u,d=o.select,m=o.put,l=o.call;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=["PARA_ROOMTYPE","BUILDING","AREA","FLOOR","ROOMFEATURETYP"],t.next=3,l(c.init,e);case 3:return r=t.sent,t.next=6,d(function(t){return t.M01328050A050LP00301});case 6:return p=t.sent,u=s()(p.elements),u.roomtypId.componentOptions.options=r.PARA_ROOMTYPE,u.areaId.componentOptions.options=r.AREA,u.buildingId.componentOptions.options=r.BUILDING,u.floorId.componentOptions.options=r.FLOOR,u.roomfeatruetypIds.componentOptions.options=r.ROOMFEATURETYP,t.next=15,m({type:"initComplete",data:Object.assign({},a.a,{elements:u,bussinessDictionary:{PARA_ROOMTYPE:r.PARA_ROOMTYPE,ROOMFEATURETYP:r.ROOMFEATURETYP}})});case 15:case"end":return t.stop()}},t,this)}),batchAddRoom:i.a.mark(function t(n,o){var e,r=o.select,s=o.put,a=o.call;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(function(t){return t});case 2:return e=t.sent,n.paramdata.displayData=e,t.next=6,a(c.batchAddRoom,n.paramdata);case 6:return n.close(),t.next=9,s({type:"M01328050A050LT00101/queryHptHkRoomList"});case 9:case"end":return t.stop()}},t,this)})},reducers:{updateFormData:function(t,n){return Object.assign({},t,{formData:Object.assign({},t.formData,n.formData)})},updateRootStateProp:function(t,n){return Object.assign({},t,n.updateObj)},initComplete:function(t,n){return Object.assign({},t,n.data)}}};n.default=u},2506:function(t,n,o){"use strict";var e=o(568);n.a={groupOptions:[{inline:!1},{inline:!1},{inline:!1}],elements:{roomtypId:{type:"select",groupIndex:0,width:6,interactionOptions:{isMust:!0},componentOptions:{text:e.a.roomtypId,selection:!0}},areaId:{type:"select",groupIndex:0,width:6,interactionOptions:{isMust:!0},componentOptions:{text:e.a.areaId,selection:!0}},buildingId:{type:"select",groupIndex:0,width:6,interactionOptions:{isMust:!0},componentOptions:{text:e.a.buildingId,selection:!0}},floorId:{type:"select",groupIndex:1,width:6,interactionOptions:{isMust:!0},componentOptions:{text:e.a.floorId,selection:!0}},roomfeatruetypIds:{type:"select",groupIndex:1,width:12,interactionOptions:{},componentOptions:{text:e.a.roomfeatruetypIds,selection:!0,multiple:!0}},roomnumprefix:{type:"input",groupIndex:2,width:4,interactionOptions:{},componentOptions:{text:e.a.roomnumprefix}},startroomnum:{type:"input",groupIndex:2,width:4,interactionOptions:{isMust:!0},componentOptions:{text:e.a.startroomnum}},roomcount:{type:"input",groupIndex:2,width:4,interactionOptions:{isMust:!0},componentOptions:{text:e.a.roomcount}},ignoresuffix4:{type:"checkbox",groupIndex:2,width:2,interactionOptions:{},componentOptions:{text:e.a.ignoresuffix,label:"4"}},ignoresuffix7:{type:"checkbox",groupIndex:2,width:2,interactionOptions:{},componentOptions:{label:"7"}}},formData:{roomtypId:"",areaId:"",buildingId:"",floorId:"",roomfeatruetypIds:[],roomnumprefix:"",startroomnum:"",roomcount:"",ignoresuffix4:!1,ignoresuffix7:!1},columnData:[{title:e.a.colRoomNum,field:"roomNum",width:"100px"},{title:e.a.colRoomtypId,field:"roomtypId",width:"200px",className:"add-room-column"},{title:e.a.colRoomfeatruetypIds,field:"roomfeatruetypIds",width:"300px",className:"add-room-column"}],listData:[],bussinessDictionary:{}}},2507:function(t,n,o){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}o.d(n,"a",function(){return a});var i=o(257),r=o(489),s=new r.a,a=function t(){e(this,t),this.init=function(t){return s.queryDictionary(t)},this.batchAddRoom=function(t){return Object(i.a)("/bs/3250010/HptHkRoom/saveHptHkRoom","post",t)}}}});