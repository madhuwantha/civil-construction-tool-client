(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{542:function(e,t,a){"use strict";var n=a(12),r=a(32),o=a(1),l=a.n(o),s=a(21),c=a.n(s),i=a(171),d=a.n(i),u=a(538),p={tag:u.q,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var t=e.className,a=e.cssModule,o=e.color,s=e.body,c=e.inverse,i=e.outline,p=e.tag,m=e.innerRef,f=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(u.m)(d()(t,"card",!!c&&"text-white",!!s&&"card-body",!!o&&(i?"border":"bg")+"-"+o),a);return l.a.createElement(p,Object(n.a)({},f,{className:g,ref:m}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},543:function(e,t,a){"use strict";var n=a(12),r=a(32),o=a(1),l=a.n(o),s=a(21),c=a.n(s),i=a(171),d=a.n(i),u=a(538),p={tag:u.q,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,s=e.tag,c=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.m)(d()(t,"card-body"),a);return l.a.createElement(s,Object(n.a)({},c,{className:i,ref:o}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},544:function(e,t,a){"use strict";var n=a(12),r=a(32),o=a(1),l=a.n(o),s=a(21),c=a.n(s),i=a(171),d=a.n(i),u=a(538),p=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:p,offset:p})]),f={tag:u.q,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,o=e.widths,s=e.tag,c=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(t,n){var r=e[t];if(delete c[t],r||""===r){var o=!n;if(Object(u.k)(r)){var l,s=o?"-":"-"+t+"-",p=h(o,t,r.size);i.push(Object(u.m)(d()(((l={})[p]=r.size||""===r.size,l["order"+s+r.order]=r.order||0===r.order,l["offset"+s+r.offset]=r.offset||0===r.offset,l)),a))}else{var m=h(o,t,r);i.push(m)}}})),i.length||i.push("col");var p=Object(u.m)(d()(t,i),a);return l.a.createElement(s,Object(n.a)({},c,{className:p}))};b.propTypes=f,b.defaultProps=g,t.a=b},545:function(e,t,a){"use strict";var n=a(12),r=a(32),o=a(1),l=a.n(o),s=a(21),c=a.n(s),i=a(171),d=a.n(i),u=a(538),p={tag:u.q,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),c=Object(u.m)(d()(t,"card-header"),a);return l.a.createElement(o,Object(n.a)({},s,{className:c}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},546:function(e,t,a){"use strict";var n=a(12),r=a(32),o=a(1),l=a.n(o),s=a(21),c=a.n(s),i=a(171),d=a.n(i),u=a(538),p=c.a.oneOfType([c.a.number,c.a.string]),m={tag:u.q,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},f={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,s=e.tag,c=e.form,i=e.widths,p=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(t,a){var n=e[t];if(delete p[t],n){var r=!a;m.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var f=Object(u.m)(d()(t,o?"no-gutters":null,c?"form-row":"row",m),a);return l.a.createElement(s,Object(n.a)({},p,{className:f}))};g.propTypes=m,g.defaultProps=f,t.a=g},566:function(e,t,a){"use strict";var n=a(12),r=a(541),o=a(32),l=a(34),s=a(1),c=a.n(s),i=a(21),d=a.n(i),u=a(171),p=a.n(u),m=a(777),f=a(547),g=a(538),h={tag:g.q,children:d.a.node.isRequired,right:d.a.bool,flip:d.a.bool,modifiers:d.a.object,className:d.a.string,cssModule:d.a.object,persist:d.a.bool,positionFixed:d.a.bool},b={flip:{enabled:!1}},E={up:"top",left:"left",right:"right",down:"bottom"},v=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.className,l=t.cssModule,s=t.right,i=t.tag,d=t.flip,u=t.modifiers,f=t.persist,h=t.positionFixed,v=Object(o.a)(t,["className","cssModule","right","tag","flip","modifiers","persist","positionFixed"]),O=Object(g.m)(p()(a,"dropdown-menu",{"dropdown-menu-right":s,show:this.context.isOpen}),l),j=i;if(f||this.context.isOpen&&!this.context.inNavbar){var w=(E[this.context.direction]||"bottom")+"-"+(s?"end":"start"),N=d?u:Object(r.a)({},u,{},b),y=!!h;return c.a.createElement(m.a,{placement:w,modifiers:N,positionFixed:y},(function(t){var a=t.ref,r=t.style,o=t.placement;return c.a.createElement(j,Object(n.a)({tabIndex:"-1",role:"menu",ref:a,style:r},v,{"aria-hidden":!e.context.isOpen,className:O,"x-placement":o}))}))}return c.a.createElement(j,Object(n.a)({tabIndex:"-1",role:"menu"},v,{"aria-hidden":!this.context.isOpen,className:O,"x-placement":v.placement}))},t}(c.a.Component);v.propTypes=h,v.defaultProps={tag:"div",flip:!0},v.contextType=f.a,t.a=v},567:function(e,t,a){"use strict";var n=a(12),r=a(32),o=a(539),l=a(34),s=a(1),c=a.n(s),i=a(21),d=a.n(i),u=a(171),p=a.n(u),m=a(547),f=a(538),g={children:d.a.node,active:d.a.bool,disabled:d.a.bool,divider:d.a.bool,tag:f.q,header:d.a.bool,onClick:d.a.func,className:d.a.string,cssModule:d.a.object,toggle:d.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a.getTabIndex=a.getTabIndex.bind(Object(o.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(f.n)(this.props,["toggle"]),o=a.className,l=a.cssModule,s=a.divider,i=a.tag,d=a.header,u=a.active,m=Object(r.a)(a,["className","cssModule","divider","tag","header","active"]),g=Object(f.m)(p()(o,{disabled:m.disabled,"dropdown-item":!s&&!d,active:u,"dropdown-header":d,"dropdown-divider":s}),l);return"button"===i&&(d?i="h6":s?i="div":m.href&&(i="a")),c.a.createElement(i,Object(n.a)({type:"button"===i&&(m.onClick||this.props.toggle)?"button":void 0},m,{tabIndex:e,role:t,className:g,onClick:this.onClick}))},t}(c.a.Component);h.propTypes=g,h.defaultProps={tag:"button",toggle:!0},h.contextType=m.a,t.a=h},569:function(e,t,a){"use strict";var n=a(12),r=a(32),o=a(539),l=a(34),s=a(1),c=a.n(s),i=a(21),d=a.n(i),u=a(171),p=a.n(u),m=a(558),f=a.n(m),g=a(553),h=a.n(g),b=a(554),E=a.n(b),v=a(555),O=a.n(v),j=a(557),w=a.n(j),N=a(556),y=a(559),x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return t=e.call.apply(e,[this].concat(n))||this,O()(h()(t),"refHandler",(function(e){Object(y.b)(t.props.innerRef,e),Object(y.a)(t.props.setReferenceNode,e)})),t}E()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){Object(y.b)(this.props.innerRef,null)},a.render=function(){return w()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),Object(y.c)(this.props.children)({ref:this.refHandler})},t}(s.Component);function C(e){return s.createElement(N.b.Consumer,null,(function(t){return s.createElement(x,f()({setReferenceNode:t},e))}))}var A=a(547),k=a(538),T=a(548),M={caret:d.a.bool,color:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,disabled:d.a.bool,onClick:d.a.func,"aria-haspopup":d.a.bool,split:d.a.bool,tag:k.q,nav:d.a.bool},R=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.context.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},a.render=function(){var e,t=this,a=this.props,o=a.className,l=a.color,s=a.cssModule,i=a.caret,d=a.split,u=a.nav,m=a.tag,f=a.innerRef,g=Object(r.a)(a,["className","color","cssModule","caret","split","nav","tag","innerRef"]),h=g["aria-label"]||"Toggle Dropdown",b=Object(k.m)(p()(o,{"dropdown-toggle":i||d,"dropdown-toggle-split":d,"nav-link":u}),s),E=g.children||c.a.createElement("span",{className:"sr-only"},h);return u&&!m?(e="a",g.href="#"):m?e=m:(e=T.a,g.color=l,g.cssModule=s),this.context.inNavbar?c.a.createElement(e,Object(n.a)({},g,{className:b,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:E})):c.a.createElement(C,{innerRef:f},(function(a){var r,o=a.ref;return c.a.createElement(e,Object(n.a)({},g,((r={})["string"===typeof e?"ref":"innerRef"]=o,r),{className:b,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:E}))}))},t}(c.a.Component);R.propTypes=M,R.defaultProps={"aria-haspopup":!0,color:"secondary"},R.contextType=A.a;t.a=R},606:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(541),r=a(12),o=a(539),l=a(34),s=a(1),c=a.n(s),i=a(21),d=a.n(i),u=a(564),p=a(538),m=["defaultOpen"],f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(o.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.toggle=function(e){this.setState({isOpen:!this.state.isOpen}),this.props.onToggle&&this.props.onToggle(e,!this.state.isOpen)},a.render=function(){return c.a.createElement(u.a,Object(r.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(p.n)(this.props,m)))},t}(s.Component);f.propTypes=Object(n.a)({defaultOpen:d.a.bool,onToggle:d.a.func},u.a.propTypes)},781:function(e,t,a){"use strict";a.r(t);var n=a(90),r=a(91),o=a(172),l=a(93),s=a(92),c=a(1),i=a.n(c),d=a(546),u=a(544),p=a(542),m=a(545),f=a(543),g=a(564),h=a(569),b=a(566),E=a(567),v=a(606),O=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).toggle=r.toggle.bind(Object(o.a)(r)),r.state={dropdownOpen:new Array(6).fill(!1)},r}return Object(r.a)(a,[{key:"toggle",value:function(e){var t=this.state.dropdownOpen.map((function(t,a){return a===e&&!t}));this.setState({dropdownOpen:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(d.a,null,i.a.createElement(u.a,{xs:"12"},i.a.createElement(p.a,null,i.a.createElement(m.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Dropdowns"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement("a",{href:"https://reactstrap.github.io/components/dropdowns/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},i.a.createElement("small",{className:"text-muted"},"docs")))),i.a.createElement(f.a,null,i.a.createElement(g.a,{isOpen:this.state.dropdownOpen[0],toggle:function(){e.toggle(0)}},i.a.createElement(h.a,{caret:!0},"Dropdown"),i.a.createElement(b.a,null,i.a.createElement(E.a,{header:!0},"Header"),i.a.createElement(E.a,{disabled:!0},"Action"),i.a.createElement(E.a,null,"Another Action"),i.a.createElement(E.a,{divider:!0}),i.a.createElement(E.a,null,"Another Action"))))),i.a.createElement(p.a,null,i.a.createElement(m.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Dropdowns"),i.a.createElement("small",null," alignment")),i.a.createElement(f.a,null,i.a.createElement(g.a,{isOpen:this.state.dropdownOpen[1],toggle:function(){e.toggle(1)}},i.a.createElement(h.a,{caret:!0},"This dropdown's menu is right-aligned"),i.a.createElement(b.a,{right:!0},i.a.createElement(E.a,{header:!0},"Header"),i.a.createElement(E.a,{disabled:!0},"Action"),i.a.createElement(E.a,null,"Another Action"),i.a.createElement(E.a,{divider:!0}),i.a.createElement(E.a,null,"Another Action"))))),i.a.createElement(p.a,null,i.a.createElement(m.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Dropdowns"),i.a.createElement("small",null," sizing")),i.a.createElement(f.a,null,i.a.createElement(g.a,{isOpen:this.state.dropdownOpen[2],toggle:function(){e.toggle(2)},size:"lg",className:"mb-3"},i.a.createElement(h.a,{caret:!0},"Large Dropdown"),i.a.createElement(b.a,null,i.a.createElement(E.a,{header:!0},"Header"),i.a.createElement(E.a,{disabled:!0},"Action"),i.a.createElement(E.a,null,"Another Action"),i.a.createElement(E.a,{divider:!0}),i.a.createElement(E.a,null,"Another Action"))),i.a.createElement(g.a,{isOpen:this.state.dropdownOpen[3],toggle:function(){e.toggle(3)},className:"mb-3"},i.a.createElement(h.a,{caret:!0},"Normal Dropdown"),i.a.createElement(b.a,null,i.a.createElement(E.a,{header:!0},"Header"),i.a.createElement(E.a,{disabled:!0},"Action"),i.a.createElement(E.a,null,"Another Action"),i.a.createElement(E.a,{divider:!0}),i.a.createElement(E.a,null,"Another Action"))),i.a.createElement(g.a,{isOpen:this.state.dropdownOpen[4],toggle:function(){e.toggle(4)},size:"sm"},i.a.createElement(h.a,{caret:!0},"Small Dropdown"),i.a.createElement(b.a,null,i.a.createElement(E.a,{header:!0},"Header"),i.a.createElement(E.a,{disabled:!0},"Action"),i.a.createElement(E.a,null,"Another Action"),i.a.createElement(E.a,{divider:!0}),i.a.createElement(E.a,null,"Another Action"))))),i.a.createElement(p.a,null,i.a.createElement(m.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Custom Dropdowns")),i.a.createElement(f.a,null,i.a.createElement(g.a,{isOpen:this.state.dropdownOpen[5],toggle:function(){e.toggle(5)}},i.a.createElement(h.a,{tag:"span",onClick:function(){e.toggle(5)},"data-toggle":"dropdown","aria-expanded":this.state.dropdownOpen[5]},"Custom Dropdown Content ",i.a.createElement("strong",null," * ")),i.a.createElement(b.a,null,i.a.createElement("div",{className:"dropdown-item",onClick:function(){e.toggle(5)}},"Custom dropdown item 1"),i.a.createElement("div",{className:"dropdown-item",onClick:function(){e.toggle(5)}},"Custom dropdown item 2"),i.a.createElement("div",{className:"dropdown-item-text",onClick:function(){e.toggle(5)}},"Custom dropdown text 3"),i.a.createElement("hr",{className:"my-0 dropdown-item-text"}),i.a.createElement("div",{onClick:function(){e.toggle(5)}},"Custom dropdown item 4"))))),i.a.createElement(p.a,null,i.a.createElement(m.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Uncontrolled Dropdown")),i.a.createElement(f.a,null,i.a.createElement(v.a,null,i.a.createElement(h.a,{caret:!0},"Uncontrolled Dropdown"),i.a.createElement(b.a,null,i.a.createElement(E.a,{header:!0},"Header"),i.a.createElement(E.a,{disabled:!0},"Action"),i.a.createElement(E.a,null,"Another Action"),i.a.createElement(E.a,{divider:!0}),i.a.createElement(E.a,null,"Another Action"))))))))}}]),a}(c.Component);t.default=O}}]);
//# sourceMappingURL=19.b8c6eae6.chunk.js.map