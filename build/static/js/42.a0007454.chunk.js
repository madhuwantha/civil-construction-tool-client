(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[42],{542:function(e,t,a){"use strict";var n=a(12),i=a(32),s=a(1),o=a.n(s),r=a(21),l=a.n(r),c=a(171),p=a.n(c),u=a(538),h={tag:u.q,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},d=function(e){var t=e.className,a=e.cssModule,s=e.color,r=e.body,l=e.inverse,c=e.outline,h=e.tag,d=e.innerRef,m=Object(i.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(u.m)(p()(t,"card",!!l&&"text-white",!!r&&"card-body",!!s&&(c?"border":"bg")+"-"+s),a);return o.a.createElement(h,Object(n.a)({},m,{className:f,ref:d}))};d.propTypes=h,d.defaultProps={tag:"div"},t.a=d},543:function(e,t,a){"use strict";var n=a(12),i=a(32),s=a(1),o=a.n(s),r=a(21),l=a.n(r),c=a(171),p=a.n(c),u=a(538),h={tag:u.q,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},d=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,r=e.tag,l=Object(i.a)(e,["className","cssModule","innerRef","tag"]),c=Object(u.m)(p()(t,"card-body"),a);return o.a.createElement(r,Object(n.a)({},l,{className:c,ref:s}))};d.propTypes=h,d.defaultProps={tag:"div"},t.a=d},545:function(e,t,a){"use strict";var n=a(12),i=a(32),s=a(1),o=a.n(s),r=a(21),l=a.n(r),c=a(171),p=a.n(c),u=a(538),h={tag:u.q,className:l.a.string,cssModule:l.a.object},d=function(e){var t=e.className,a=e.cssModule,s=e.tag,r=Object(i.a)(e,["className","cssModule","tag"]),l=Object(u.m)(p()(t,"card-header"),a);return o.a.createElement(s,Object(n.a)({},r,{className:l}))};d.propTypes=h,d.defaultProps={tag:"div"},t.a=d},550:function(e,t,a){"use strict";var n=a(12),i=a(32),s=a(541),o=a(1),r=a.n(o),l=a(21),c=a.n(l),p=a(171),u=a.n(p),h=a(435),d=a(538),m=Object(s.a)({},h.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:d.q,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),f=Object(s.a)({},h.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:d.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var t=e.tag,a=e.baseClass,s=e.baseClassActive,o=e.className,l=e.cssModule,c=e.children,p=e.innerRef,m=Object(i.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),f=Object(d.o)(m,d.c),g=Object(d.n)(m,d.c);return r.a.createElement(h.Transition,f,(function(e){var i="entered"===e,h=Object(d.m)(u()(o,a,i&&s),l);return r.a.createElement(t,Object(n.a)({className:h},g,{ref:p}),c)}))}g.propTypes=m,g.defaultProps=f,t.a=g},600:function(e,t,a){"use strict";a.d(t,"b",(function(){return j}));var n=a(12),i=a(539),s=a(34),o=a(1),r=a.n(o),l=a(21),c=a.n(l),p=a(32),u=a(541),h=a(53),d=a.n(h),m=a(171),f=a.n(m),g=a(777),b=a(538),O=a(550);var v={children:c.a.node.isRequired,popperClassName:c.a.string,placement:c.a.string,placementPrefix:c.a.string,arrowClassName:c.a.string,hideArrow:c.a.bool,tag:b.q,isOpen:c.a.bool.isRequired,cssModule:c.a.object,offset:c.a.oneOfType([c.a.string,c.a.number]),fallbackPlacement:c.a.oneOfType([c.a.string,c.a.array]),flip:c.a.bool,container:b.r,target:b.r.isRequired,modifiers:c.a.object,boundariesElement:c.a.oneOfType([c.a.string,b.a]),onClosed:c.a.func,fade:c.a.bool,transition:c.a.shape(O.a.propTypes)},T={boundariesElement:"scrollParent",placement:"auto",hideArrow:!1,isOpen:!1,offset:0,fallbackPlacement:"flip",flip:!0,container:"body",modifiers:{},onClosed:function(){},fade:!0,transition:Object(u.a)({},O.a.defaultProps)},E=function(e){function t(t){var a;return(a=e.call(this,t)||this).setTargetNode=a.setTargetNode.bind(Object(i.a)(a)),a.getTargetNode=a.getTargetNode.bind(Object(i.a)(a)),a.getRef=a.getRef.bind(Object(i.a)(a)),a.onClosed=a.onClosed.bind(Object(i.a)(a)),a.state={isOpen:t.isOpen},a}Object(s.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.isOpen&&!t.isOpen?{isOpen:e.isOpen}:null};var a=t.prototype;return a.componentDidUpdate=function(){this._element&&this._element.childNodes&&this._element.childNodes[0]&&this._element.childNodes[0].focus&&this._element.childNodes[0].focus()},a.setTargetNode=function(e){this.targetNode="string"===typeof e?Object(b.j)(e):e},a.getTargetNode=function(){return this.targetNode},a.getContainerNode=function(){return Object(b.j)(this.props.container)},a.getRef=function(e){this._element=e},a.onClosed=function(){this.props.onClosed(),this.setState({isOpen:!1})},a.renderChildren=function(){var e=this.props,t=e.cssModule,a=e.children,i=e.isOpen,s=e.flip,o=(e.target,e.offset),l=e.fallbackPlacement,c=e.placementPrefix,h=e.arrowClassName,d=e.hideArrow,m=e.popperClassName,v=e.tag,T=(e.container,e.modifiers),E=e.boundariesElement,y=(e.onClosed,e.fade),j=e.transition,N=e.placement,w=Object(p.a)(e,["cssModule","children","isOpen","flip","target","offset","fallbackPlacement","placementPrefix","arrowClassName","hideArrow","popperClassName","tag","container","modifiers","boundariesElement","onClosed","fade","transition","placement"]),C=Object(b.m)(f()("arrow",h),t),_=Object(b.m)(f()(m,c?c+"-auto":""),this.props.cssModule),D=Object(u.a)({offset:{offset:o},flip:{enabled:s,behavior:l},preventOverflow:{boundariesElement:E}},T),x=Object(u.a)({},O.a.defaultProps,{},j,{baseClass:y?j.baseClass:"",timeout:y?j.timeout:0});return r.a.createElement(O.a,Object(n.a)({},x,w,{in:i,onExited:this.onClosed,tag:v}),r.a.createElement(g.a,{referenceElement:this.targetNode,modifiers:D,placement:N},(function(e){var t=e.ref,n=e.style,i=e.placement,s=e.arrowProps;return r.a.createElement("div",{ref:t,style:n,className:_,"x-placement":i},a,!d&&r.a.createElement("span",{ref:s.ref,className:C,style:s.style}))})))},a.render=function(){return this.setTargetNode(this.props.target),this.state.isOpen?"inline"===this.props.container?this.renderChildren():d.a.createPortal(r.a.createElement("div",{ref:this.getRef},this.renderChildren()),this.getContainerNode()):null},t}(r.a.Component);E.propTypes=v,E.defaultProps=T;var y=E,j={placement:c.a.oneOf(b.b),target:b.r.isRequired,container:b.r,isOpen:c.a.bool,disabled:c.a.bool,hideArrow:c.a.bool,boundariesElement:c.a.oneOfType([c.a.string,b.a]),className:c.a.string,innerClassName:c.a.string,arrowClassName:c.a.string,popperClassName:c.a.string,cssModule:c.a.object,toggle:c.a.func,autohide:c.a.bool,placementPrefix:c.a.string,delay:c.a.oneOfType([c.a.shape({show:c.a.number,hide:c.a.number}),c.a.number]),modifiers:c.a.object,offset:c.a.oneOfType([c.a.string,c.a.number]),innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object]),trigger:c.a.string,fade:c.a.bool,flip:c.a.bool},N={show:0,hide:50},w={isOpen:!1,hideArrow:!1,autohide:!1,delay:N,toggle:function(){},trigger:"click",fade:!0};function C(e,t){return t&&(e===t||t.contains(e))}function _(e,t){return void 0===t&&(t=[]),t&&t.length&&t.find((function(t){return C(e,t)}))}var D=function(e){function t(t){var a;return(a=e.call(this,t)||this)._targets=[],a.currentTargetElement=null,a.addTargetEvents=a.addTargetEvents.bind(Object(i.a)(a)),a.handleDocumentClick=a.handleDocumentClick.bind(Object(i.a)(a)),a.removeTargetEvents=a.removeTargetEvents.bind(Object(i.a)(a)),a.toggle=a.toggle.bind(Object(i.a)(a)),a.showWithDelay=a.showWithDelay.bind(Object(i.a)(a)),a.hideWithDelay=a.hideWithDelay.bind(Object(i.a)(a)),a.onMouseOverTooltipContent=a.onMouseOverTooltipContent.bind(Object(i.a)(a)),a.onMouseLeaveTooltipContent=a.onMouseLeaveTooltipContent.bind(Object(i.a)(a)),a.show=a.show.bind(Object(i.a)(a)),a.hide=a.hide.bind(Object(i.a)(a)),a.onEscKeyDown=a.onEscKeyDown.bind(Object(i.a)(a)),a.getRef=a.getRef.bind(Object(i.a)(a)),a.state={isOpen:t.isOpen},a._isMounted=!1,a}Object(s.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this._isMounted=!0,this.updateTarget()},a.componentWillUnmount=function(){this._isMounted=!1,this.removeTargetEvents(),this._targets=null,this.clearShowTimeout(),this.clearHideTimeout()},t.getDerivedStateFromProps=function(e,t){return e.isOpen&&!t.isOpen?{isOpen:e.isOpen}:null},a.onMouseOverTooltipContent=function(){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._hideTimeout&&this.clearHideTimeout(),this.state.isOpen&&!this.props.isOpen&&this.toggle())},a.onMouseLeaveTooltipContent=function(e){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._showTimeout&&this.clearShowTimeout(),e.persist(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide")))},a.onEscKeyDown=function(e){"Escape"===e.key&&this.hide(e)},a.getRef=function(e){var t=this.props.innerRef;t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e)),this._popover=e},a.getDelay=function(e){var t=this.props.delay;return"object"===typeof t?isNaN(t[e])?N[e]:t[e]:t},a.show=function(e){if(!this.props.isOpen){if(this.clearShowTimeout(),this.currentTargetElement=e?e.currentTarget||e.target:null,e&&e.composedPath&&"function"===typeof e.composedPath){var t=e.composedPath();this.currentTargetElement=t&&t[0]||this.currentTargetElement}this.toggle(e)}},a.showWithDelay=function(e){this._hideTimeout&&this.clearHideTimeout(),this._showTimeout=setTimeout(this.show.bind(this,e),this.getDelay("show"))},a.hide=function(e){this.props.isOpen&&(this.clearHideTimeout(),this.currentTargetElement=null,this.toggle(e))},a.hideWithDelay=function(e){this._showTimeout&&this.clearShowTimeout(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide"))},a.clearShowTimeout=function(){clearTimeout(this._showTimeout),this._showTimeout=void 0},a.clearHideTimeout=function(){clearTimeout(this._hideTimeout),this._hideTimeout=void 0},a.handleDocumentClick=function(e){var t=this.props.trigger.split(" ");t.indexOf("legacy")>-1&&(this.props.isOpen||_(e.target,this._targets))?(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen&&!C(e.target,this._popover)?this.hideWithDelay(e):this.props.isOpen||this.showWithDelay(e)):t.indexOf("click")>-1&&_(e.target,this._targets)&&(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen?this.hideWithDelay(e):this.showWithDelay(e))},a.addEventOnTargets=function(e,t,a){this._targets.forEach((function(n){n.addEventListener(e,t,a)}))},a.removeEventOnTargets=function(e,t,a){this._targets.forEach((function(n){n.removeEventListener(e,t,a)}))},a.addTargetEvents=function(){if(this.props.trigger){var e=this.props.trigger.split(" ");-1===e.indexOf("manual")&&((e.indexOf("click")>-1||e.indexOf("legacy")>-1)&&document.addEventListener("click",this.handleDocumentClick,!0),this._targets&&this._targets.length&&(e.indexOf("hover")>-1&&(this.addEventOnTargets("mouseover",this.showWithDelay,!0),this.addEventOnTargets("mouseout",this.hideWithDelay,!0)),e.indexOf("focus")>-1&&(this.addEventOnTargets("focusin",this.show,!0),this.addEventOnTargets("focusout",this.hide,!0)),this.addEventOnTargets("keydown",this.onEscKeyDown,!0)))}},a.removeTargetEvents=function(){this._targets&&(this.removeEventOnTargets("mouseover",this.showWithDelay,!0),this.removeEventOnTargets("mouseout",this.hideWithDelay,!0),this.removeEventOnTargets("keydown",this.onEscKeyDown,!0),this.removeEventOnTargets("focusin",this.show,!0),this.removeEventOnTargets("focusout",this.hide,!0)),document.removeEventListener("click",this.handleDocumentClick,!0)},a.updateTarget=function(){var e=Object(b.j)(this.props.target,!0);e!==this._targets&&(this.removeTargetEvents(),this._targets=e?Array.from(e):[],this.currentTargetElement=this.currentTargetElement||this._targets[0],this.addTargetEvents())},a.toggle=function(e){return this.props.disabled||!this._isMounted?e&&e.preventDefault():this.props.toggle(e)},a.render=function(){if(!this.props.isOpen)return null;this.updateTarget();var e=this.props,t=e.className,a=e.cssModule,i=e.innerClassName,s=e.isOpen,o=e.hideArrow,l=e.boundariesElement,c=e.placement,p=e.placementPrefix,u=e.arrowClassName,h=e.popperClassName,d=e.container,m=e.modifiers,f=e.offset,g=e.fade,O=e.flip,v=Object(b.n)(this.props,Object.keys(j)),T=Object(b.m)(h,a),E=Object(b.m)(i,a);return r.a.createElement(y,{className:t,target:this.currentTargetElement||this._targets[0],isOpen:s,hideArrow:o,boundariesElement:l,placement:c,placementPrefix:p,arrowClassName:u,popperClassName:T,container:d,modifiers:m,offset:f,cssModule:a,fade:g,flip:O},r.a.createElement("div",Object(n.a)({},v,{ref:this.getRef,className:E,role:"tooltip",onMouseOver:this.onMouseOverTooltipContent,onMouseLeave:this.onMouseLeaveTooltipContent,onKeyDown:this.onEscKeyDown})))},t}(r.a.Component);D.propTypes=j,D.defaultProps=w;t.a=D},816:function(e,t,a){"use strict";a.r(t);var n=a(90),i=a(91),s=a(172),o=a(93),r=a(92),l=a(1),c=a.n(l),p=a(548),u=a(12),h=a(171),d=a.n(h),m=a(600),f=function(e){var t=d()("tooltip","show",e.popperClassName),a=d()("tooltip-inner",e.innerClassName);return c.a.createElement(m.a,Object(u.a)({},e,{popperClassName:t,innerClassName:a}))};f.propTypes=m.b,f.defaultProps={placement:"top",autohide:!0,placementPrefix:"bs-tooltip",trigger:"hover focus"};var g=f,b=a(542),O=a(545),v=a(543),T=a(541),E=a(539),y=a(34),j=a(21),N=a.n(j),w=a(538),C=["defaultOpen"],_=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(E.a)(a)),a}Object(y.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return c.a.createElement(g,Object(u.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(w.n)(this.props,C)))},t}(l.Component);_.propTypes=Object(T.a)({defaultOpen:N.a.bool},g.propTypes);var D=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).toggle=i.toggle.bind(Object(s.a)(i)),i.state={tooltipOpen:!1},i}return Object(i.a)(a,[{key:"toggle",value:function(){this.setState({tooltipOpen:!this.state.tooltipOpen})}},{key:"render",value:function(){return c.a.createElement("span",null,c.a.createElement(p.a,{className:"mr-1",color:"secondary",id:"Tooltip-"+this.props.id},this.props.item.text),c.a.createElement(g,{placement:this.props.item.placement,isOpen:this.state.tooltipOpen,target:"Tooltip-"+this.props.id,toggle:this.toggle},"Tooltip Content!"))}}]),a}(c.a.Component),x=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).toggle=i.toggle.bind(Object(s.a)(i)),i.state={tooltipOpen:[!1,!1],tooltips:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},i}return Object(i.a)(a,[{key:"toggle",value:function(e){var t=this.state.tooltipOpen.map((function(t,a){return a===e&&!t}));this.setState({tooltipOpen:t})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(b.a,null,c.a.createElement(O.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Tooltips"),c.a.createElement("div",{className:"card-header-actions"},c.a.createElement("a",{href:"https://reactstrap.github.io/components/tooltips/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},c.a.createElement("small",{className:"text-muted"},"docs")))),c.a.createElement(v.a,null,c.a.createElement("p",null,"Somewhere in here is a ",c.a.createElement("a",{href:"#",id:"TooltipExample"},"tooltip"),"."),c.a.createElement(g,{placement:"right",isOpen:this.state.tooltipOpen[0],target:"TooltipExample",toggle:function(){e.toggle(0)}},"Hello world!"))),c.a.createElement(b.a,null,c.a.createElement(O.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Tooltip"),c.a.createElement("small",null," disable autohide")),c.a.createElement(v.a,null,c.a.createElement("p",null,"Sometimes you need to allow users to select text within a ",c.a.createElement("a",{href:"#",id:"DisabledAutoHideExample"},"tooltip"),"."),c.a.createElement(g,{placement:"top",isOpen:this.state.tooltipOpen[1],autohide:!1,target:"DisabledAutoHideExample",toggle:function(){e.toggle(1)}},"Try to select this text!"))),c.a.createElement(b.a,null,c.a.createElement(O.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Tooltip"),c.a.createElement("small",null," list")),c.a.createElement(v.a,null,this.state.tooltips.map((function(e,t){return c.a.createElement(D,{key:t,item:e,id:t})})))),c.a.createElement(b.a,null,c.a.createElement(O.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Tooltip"),c.a.createElement("small",null," uncontrolled")),c.a.createElement(v.a,null,c.a.createElement("p",null,"Somewhere in here is a ",c.a.createElement("a",{href:"#",id:"UncontrolledTooltipExample"},"tooltip"),"."),c.a.createElement(_,{placement:"right",target:"UncontrolledTooltipExample"},"Hello world!"))))}}]),a}(l.Component);t.default=x}}]);
//# sourceMappingURL=42.a0007454.chunk.js.map