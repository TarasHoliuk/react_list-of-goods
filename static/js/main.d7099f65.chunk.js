(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(9),r=n.n(s),a=n(2),c=n(3),i=n(5),o=n(4),l=n(1),u=n.n(l),b=(n(14),n(8),n(7)),d=n(0),h=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isReversed:!1,sortBy:null,isDefault:!0},t.reverseGoods=function(){t.setState((function(t){return{isReversed:!t.isReversed,isDefault:!1}}))},t.alphabetSort=function(){t.setState({sortBy:"alphabet",isDefault:!1})},t.lengthSort=function(){t.setState({sortBy:"length",isDefault:!1})},t.reset=function(){t.setState({isDefault:!0})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isReversed,n=t.sortBy,s=t.isDefault,r=this.props.goodsList,a=Object(b.a)(r);return a.sort((function(t,e){switch(n){case"alphabet":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),e&&a.reverse(),s&&(a=Object(b.a)(r)),Object(d.jsxs)("div",{className:"d-flex w-50 justify-content-center",children:[Object(d.jsx)("ul",{className:"p-4",children:a.map((function(t){return Object(d.jsx)("li",{children:t},t)}))}),Object(d.jsxs)("div",{className:"d-flex flex-column p-4",children:[Object(d.jsxs)("div",{className:"d-flex flex-column border border-success rounded p-2 mb-4",children:["Sort by:",Object(d.jsx)("button",{type:"button",className:"btn btn-warning my-2",onClick:this.alphabetSort,children:"Alphabet"}),Object(d.jsx)("button",{type:"button",className:"btn btn-warning",onClick:this.lengthSort,children:"length"})]}),Object(d.jsx)("button",{type:"button",className:"btn btn-warning mb-2",onClick:this.reverseGoods,children:"Reverse"}),Object(d.jsx)("button",{type:"button",className:"btn btn-danger",onClick:this.reset,children:"Reset"})]})]})}}]),n}(l.PureComponent),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isStarted:!1},t.start=function(){t.setState((function(t){return{isStarted:!t.isStarted}}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.isStarted;return Object(d.jsxs)("div",{className:"App d-flex flex-column align-items-center bg-light vh-100",children:[Object(d.jsx)("h1",{className:"display-1 text-center",children:"Goods"}),!t&&Object(d.jsx)("button",{type:"button",className:"btn btn-success w-50",onClick:this.start,children:"Start"}),t&&Object(d.jsx)(h,{goodsList:j})]})}}]),n}(u.a.Component);r.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d7099f65.chunk.js.map