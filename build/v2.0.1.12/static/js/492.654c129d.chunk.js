webpackJsonp([492],{1564:function(t,e,n){"use strict";function a(t,e){var n=e;return"["+(s()(n,{value:t})||{}).text+"]"}Object.defineProperty(e,"__esModule",{value:!0});var o=n(38),i=n.n(o),p=n(86),s=n.n(p),r=n(256),c=n.n(r),l=n(2699),m=n(60),u=(n.n(m),n(260),{namespace:"M01338030A030LP00401",state:Object.assign({},l.a),effects:{init:i.a.mark(function t(e,n){var a,o,p,s=(n.call,n.put);return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.elments,o=c()(l.a),p=o.elementLineElements,p.element.componentOptions.options=e.modalParams.originState.dictionarydata.ELEMENTSOPTIONS,t.next=6,s({type:"initComplete",data:Object.assign({},l.a,{elementLineElements:p,dictionarydata:e.modalParams.originState.dictionarydata,lineData:e.modalParams.lineData,modalParams:e.modalParams})});case 6:case"end":return t.stop()}},t,this)}),submitData:i.a.mark(function(t,e){var n,o,p,s,r=(e.call,e.select),l=e.put;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(function(t){return t.M01338030A030LP00401});case 2:return n=t.sent,o=c()(n.lineData),p=n.modalParams,s=Object.assign({},n.topFormData,n.bottomFormData,{packageText:"0"===n.topFormData.packageFlg?n.bottomFormData.text:a(n.bottomFormData.element),tempFormatPackageId:Date.now()}),o.push(s),t.next=9,l({type:"SystemModel/updateModalWindowState",key:p.parentKey,customContentStyle:{width:"800px",height:"600px"},title:p.parentTitle,params:{openSource:"subwindow",componentType:"groupLine",topFormData:p.parentFormdata,lineData:o,dictionarydata:p.originState.dictionarydata,receiptsListData:p.originState.receiptsListData}});case 9:case"end":return t.stop()}},s,this)}),updateComponentType:i.a.mark(function t(e,n){var a,o=(n.call,n.select,n.put);return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o({type:"updateTopFormData",formData:e.formData});case 2:return a="",a="0"===e.value?"textLine":"elementLine",t.next=6,o({type:"updateComponentComplete",componentType:a});case 6:case"end":return t.stop()}},t,this)})},reducers:{initComplete:function(t,e){return Object.assign({},t,e.data)},updateTopFormData:function(t,e){return Object.assign({},t,{topFormData:e.formData})},updateBottomFormData:function(t,e){return Object.assign({},t,{bottomFormData:e.formData})},updateComponentComplete:function(t,e){return Object.assign({},t,{componentType:e.componentType,checkedData:[],bottomFormData:{},lineData:[]})},merge:function(t,e){return Object.assign({},t,e.payload)}}});e.default=u},2699:function(t,e,n){"use strict";var a=n(601),o=n(1);n.n(o);e.a={topElements:{packageFlg:{type:"select",width:16,interactionOptions:{},componentOptions:{text:a.a.elementsTyp,selection:!0,options:[{key:"0",value:"0",text:a.a.textLine},{key:"1",value:"1",text:a.a.elementsLine}]}}},topFormData:{},textLineElements:{text:{type:"input",width:16,interactionOptions:{isMust:!0},componentOptions:{text:a.a.text}},fontFlg:{type:"select",width:8,interactionOptions:{isMust:!0},componentOptions:{text:a.a.fontFlg,selection:!0,options:[{key:"0",value:"0",text:a.a.fontOption_0},{key:"1",value:"1",text:a.a.fontOption_1},{key:"2",value:"2",text:a.a.fontOption_2},{key:"3",value:"3",text:a.a.fontOption_3}]}},packageSeq:{type:"input",width:8,interactionOptions:{isMust:!0},componentOptions:{text:a.a.seq}},underLineLabel:{type:"label",componentOptions:{detail:a.a.underLineLabel}},underLineFlg:{type:"checkbox",componentOptions:{toggle:!0}},blodLabel:{type:"label",componentOptions:{detail:a.a.blodLabel}},blodFlg:{type:"checkbox",componentOptions:{toggle:!0}}},elementLineElements:{prefix:{type:"input",width:16,interactionOptions:{isMust:!0},componentOptions:{text:a.a.prefix}},element:{type:"select",width:16,interactionOptions:{isMust:!0},componentOptions:{text:a.a.element,selection:!0}},fontFlg:{type:"select",width:8,interactionOptions:{isMust:!0},componentOptions:{text:a.a.fontFlg,selection:!0,options:[{key:"0",value:"0",text:a.a.fontOption_0},{key:"1",value:"1",text:a.a.fontOption_1},{key:"2",value:"2",text:a.a.fontOption_2},{key:"3",value:"3",text:a.a.fontOption_3}]}},format:{type:"input",width:8,interactionOptions:{isMust:!0},componentOptions:{text:a.a.format}},packageSeq:{type:"input",width:8,interactionOptions:{isMust:!0},componentOptions:{text:a.a.seq}},underLineLabel:{type:"label",componentOptions:{detail:a.a.underLineLabel}},underLineFlg:{type:"checkbox",componentOptions:{toggle:!0}},blodLabel:{type:"label",componentOptions:{detail:a.a.blodLabel}},blodFlg:{type:"checkbox",componentOptions:{toggle:!0}}},bottomFormData:{},componentType:""}}});