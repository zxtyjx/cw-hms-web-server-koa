webpackJsonp([500],{1663:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.M01328000A070LT00201;return{reportData:t.reportData,updateFilePath:t.updateFilePath}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),p=n.n(l),c=n(36),u=(n.n(c),n(166)),s=n(37),f=n(547),d=function(){var e="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,a){var r=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&r)for(var l in r)void 0===n[l]&&(n[l]=r[l]);else n||(n=r||{});if(1===i)n.children=a;else if(i>1){for(var p=Array(i),c=0;c<i;c++)p[c]=arguments[c+3];n.children=p}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=function(e){function t(){var e,n,r,i;o(this,t);for(var l=arguments.length,p=Array(l),c=0;c<l;c++)p[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),r._onClick=function(e,t){if("submitBtn"===t.name){var n=r.reportData,o=n.files[0];if(!(r.props.reportData&&r.props.updateFilePath&&o))return r.props.dispatch({type:"SystemModel/updateMessageState",statecode:2,message:f.a.warning_noselectdata}),null;r.props.dispatch({type:"M01328000A070LT00201/uploadRpt"})}else r.props.dispatch({type:"SystemModel/updateModalWindowState"})},r._onChange=function(e,t){var n=r.reportData,o=n.files[0],a="",i="";if(o){i=o.name;var l=new FileReader;l.readAsDataURL(o),l.onload=function(){a=l.result,r.props.dispatch({type:"M01328000A070LT00201/readFilesComplete",reportData:a,updateFilePath:i})}}else r.props.dispatch({type:"M01328000A070LT00201/readFilesComplete",reportData:a,updateFilePath:i})},i=n,a(r,i)}return r(t,e),y(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.props.dispatch(Object.assign({type:"M01328000A070LT00201/init"},this.props.modalParams))}},{key:"componentWillReceiveProps",value:function(e){}},{key:"componentWillUpdate",value:function(e,t){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return d("div",{className:"sub-view Sub01328000A070LT00201"},void 0,d("div",{className:"upfile"},void 0,d("span",{className:"upfileSpan"},void 0,"(",f.a.Title_red,")"),p.a.createElement("input",{className:"upfileInput",type:"file",onChange:this._onChange,ref:function(t){return e.reportData=t},accept:".zip"})),d(s.q.Actions,{className:"modal_actions"},"btn",d(u.a,{keyboard:"GF11",name:"submitBtn",onClick:this._onClick},"submitBtn",f.a.save),d(u.a,{name:"cancelBtn",onClick:this._onClick},"cancelBtn",f.a.cancel)))}}]),t}(l.Component);t.default=Object(c.connect)(i)(m)}});