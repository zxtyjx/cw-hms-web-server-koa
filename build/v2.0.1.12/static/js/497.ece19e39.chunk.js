webpackJsonp([497],{1573:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t){var e=t.M01321010A020LP00101;return{unitTurnList:e.unitTurnList,selectTurn:e.selectTurn}}Object.defineProperty(e,"__esModule",{value:!0});var a,c=n(36),s=(n.n(c),n(1)),l=n.n(s),p=n(60),f=n.n(p),m=n(5),d=n.n(m),y=n(166),v=n(37),b=n(2709),h=n(70),_=function(){var t="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,r,o){var i=e&&e.defaultProps,u=arguments.length-3;if(n||0===u||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===u)n.children=o;else if(u>1){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+3];n.children=c}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),T=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),C=Object(h.a)(a=function(t){function e(){var t,n,i,u;r(this,e);for(var a=arguments.length,c=Array(a),s=0;s<a;s++)c[s]=arguments[s];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),i._onConfirm=function(){var t=i.props.selectTurn;t?i.props.dispatch({type:"M01321010A020LP00101/setUnitTurn",turnId:t.turn_id,turnDrpt:t.turn_nm,turnTm:f()(t.begin_tm).format("HH:mm")+"---"+f()(t.end_tm).format("HH:mm")}).then(function(){i.props.onClose()}):i.props.dispatch({type:"SystemModel/updateMessageState",statecode:2,message:b.a.alertContent})},i._itemClick=function(t){i.props.dispatch({type:"M01321010A020LP00101/updateRootStateProp",updateObj:{selectTurn:t}})},u=n,o(i,u)}return i(e,t),T(e,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"M01321010A020LP00101/init",close:this.props.onClose})}},{key:"render",value:function(){var t=this;return _("div",{className:"turn-main"},void 0,_("div",{className:"turn-list"},void 0,this.props.unitTurnList.map(function(e,n){var r=!!t.props.selectTurn&&e.turn_id===t.props.selectTurn.turn_id;return _("section",{className:d()("turn-item",{"ti-select":r}),onClick:t._itemClick.bind(t,e)},void 0,_("div",{},void 0,e.turn_nm),_("div",{},void 0,"("+f()(e.begin_tm).format("HH:mm")+"---"+f()(e.end_tm).format("HH:mm")+")"))})),_(v.q.Actions,{className:"modal_actions turn-action"},"btn",_(y.a,{keyboard:"GF11",onClick:this._onConfirm},void 0,b.a.confirm)))}}]),e}(l.a.Component))||a;e.default=Object(c.connect)(u)(C)},2709:function(t,e,n){"use strict";e.a={title:"\u73ed\u6b21\u9009\u62e9",confirm:"\u786e  \u5b9a",alertTitle:"\u7cfb\u7edf\u6d88\u606f",alertContent:"\u8bf7\u9009\u62e9\u73ed\u6b21\uff01"}}});