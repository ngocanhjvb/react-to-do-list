(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{101:function(e,t){},103:function(e,t){},135:function(e,t){},136:function(e,t){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(88),o=a.n(r),l=(a(95),a(6)),i=a(7),c=a(4),m=a(8),u=a(9),d=(a(96),a(30)),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={id:null,name:"",status:!0},e.cancelForm=e.cancelForm.bind(Object(c.a)(e)),e.onHandleChange=e.onHandleChange.bind(Object(c.a)(e)),e.onHandleSubmit=e.onHandleSubmit.bind(Object(c.a)(e)),e}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this.props.itemEditing&&null!==this.props.itemEditing.id?this.setState({id:this.props.itemEditing.id,name:this.props.itemEditing.name,status:this.props.itemEditing.status}):this.onClear()}},{key:"componentWillReceiveProps",value:function(e,t){e.itemEditing&&null!==e.itemEditing.id?this.setState({id:e.itemEditing.id,name:e.itemEditing.name,status:e.itemEditing.status}):this.onClear()}},{key:"onClear",value:function(){this.setState({id:null,name:"",status:!0})}},{key:"cancelForm",value:function(){this.props.closeForm()}},{key:"onHandleChange",value:function(e){var t=e.target.name,a=e.target.value;"status"===t&&(a="true"===e.target.value),this.setState(Object(d.a)({},t,a))}},{key:"onHandleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state)}},{key:"render",value:function(){return s.a.createElement("div",{className:"panel panel-warning"},s.a.createElement("div",{className:"panel-heading"},s.a.createElement("h3",{className:"panel-title"},null!==this.props.itemEditing?"C\u1eadp nh\u1eadt c\xf4ng viec":"Th\xeam C\xf4ng Vi\u1ec7c")),s.a.createElement("div",{className:"panel-body"},s.a.createElement("form",{onSubmit:this.onHandleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"T\xean :"),s.a.createElement("input",{type:"text",className:"form-control",name:"name",value:this.state.name,onChange:this.onHandleChange})),s.a.createElement("label",null,"Tr\u1ea1ng Th\xe1i :"),s.a.createElement("select",{className:"form-control",required:"required",name:"status",value:this.state.status,onChange:this.onHandleChange},s.a.createElement("option",{value:!0},"K\xedch Ho\u1ea1t"),s.a.createElement("option",{value:!1},"\u1ea8n")),s.a.createElement("br",null),s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{type:"submit",className:"btn btn-warning"},null!==this.props.itemEditing?"C\u1eadp nh\u1eadt":"Th\xeam"),"\xa0",s.a.createElement("button",{type:"button",onClick:this.cancelForm,className:"btn btn-danger"},"H\u1ee7y B\u1ecf")))))}}]),a}(s.a.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onHandleChange=n.onHandleChange.bind(Object(c.a)(n)),n.onHandleSearch=n.onHandleSearch.bind(Object(c.a)(n)),n.state={search:""},n}return Object(i.a)(a,[{key:"onHandleChange",value:function(e){var t=e.target.value;this.setState({search:t})}},{key:"onHandleSearch",value:function(){this.props.onSearch(this.state.search)}},{key:"render",value:function(){return s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a...",name:"search",onChange:this.onHandleChange}),s.a.createElement("span",{className:"input-group-btn"},s.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:this.onHandleSearch},s.a.createElement("span",{className:"fa fa-search mr-5"}),"T\xecm")))}}]),a}(s.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onClick=function(e,t){n.props.onSort(e,t)},n.onClick=n.onClick.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"dropdown"},s.a.createElement("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"},"S\u1eafp X\u1ebfp ",s.a.createElement("span",{className:"fa fa-caret-square-o-down ml-5"})),s.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1"},s.a.createElement("li",{onClick:function(){return e.onClick("name",1)}},s.a.createElement("a",{role:"button",className:"name"===this.props.sortBy&&1===this.props.sortValue?"sort_selected":""},s.a.createElement("span",{className:"fa fa-sort-alpha-asc pr-5"},"T\xean A-Z"))),s.a.createElement("li",{onClick:function(){return e.onClick("name",-1)}},s.a.createElement("a",{role:"button",className:"name"===this.props.sortBy&&-1===this.props.sortValue?"sort_selected":""},s.a.createElement("span",{className:"fa fa-sort-alpha-desc pr-5"},"T\xean Z-A"))),s.a.createElement("li",{role:"separator",className:"divider"}),s.a.createElement("li",{onClick:function(){return e.onClick("status",1)}},s.a.createElement("a",{role:"button",className:"status"===this.props.sortBy&&1===this.props.sortValue?"sort_selected":""},"Tr\u1ea1ng Th\xe1i K\xedch Ho\u1ea1t")),s.a.createElement("li",{onClick:function(){return e.onClick("status",-1)}},s.a.createElement("a",{role:"button",className:"status"===this.props.sortBy&&-1===this.props.sortValue?"sort_selected":""},"Tr\u1ea1ng Th\xe1i \u1ea8n"))))}}]),a}(s.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row mt-15"},s.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},s.a.createElement(h,{onSearch:this.props.onSearch})),s.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},s.a.createElement(b,{onSort:this.props.onSort,sortBy:this.props.sortBy,sortValue:this.props.sortValue})))}}]),a}(s.a.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onChangeStatus=function(){e.props.onUpdateStatus(e.props.item.id)},e.onDelete=function(){e.props.onDeleteItem(e.props.item.id)},e.onUpdate=function(){e.props.onUpdateItem(e.props.item)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.name,n=e.status;return s.a.createElement("tr",null,s.a.createElement("td",null,t),s.a.createElement("td",null,a),s.a.createElement("td",{className:"text-center"},s.a.createElement("span",{className:n?"label label-success":"label label-danger",onClick:this.onChangeStatus},n?"K\xedch Ho\u1ea1t":"\u1ea8n")),s.a.createElement("td",{className:"text-center"},s.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.onUpdate},s.a.createElement("span",{className:"fa fa-pencil mr-5"}),"S\u1eeda"),"\xa0",s.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.onDelete},s.a.createElement("span",{className:"fa fa-trash mr-5"}),"X\xf3a")))}}]),a}(s.a.Component),g=a(49),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).generateData=n.generateData.bind(Object(c.a)(n)),n.state={filterName:"",filterStatus:-1},n.onHandleChange=n.onHandleChange.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"generateData",value:function(){var e=[{id:1,name:g.generate(7),status:!0},{id:2,name:g.generate(7),status:!1},{id:3,name:g.generate(7),status:!1}];this.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e))}},{key:"onHandleChange",value:function(e){var t=e.target.name,a=e.target.value;this.props.onFilter("filterName"===t?a:this.state.filterName,"filterStatus"===t?a:this.state.filterStatus),this.setState(Object(d.a)({},t,a))}},{key:"render",value:function(){var e=this,t=this.props.tasks,a=this.state,n=a.filterName,r=a.filterStatus,o=t.map((function(t,a){return s.a.createElement(E,{key:a,item:t,onUpdateStatus:e.props.onUpdateStatus,onDeleteItem:e.props.onDeleteItem,onUpdateItem:e.props.onUpdateItem})}));return s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},s.a.createElement("button",{className:"btn btn-danger",onClick:this.generateData},"T\u1ea1o 3 data m\u1eabu"),s.a.createElement("table",{className:"table table-bordered table-hover"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"text-center"},"STT"),s.a.createElement("th",{className:"text-center"},"T\xean"),s.a.createElement("th",{className:"text-center"},"Tr\u1ea1ng Th\xe1i"),s.a.createElement("th",{className:"text-center"},"H\xe0nh \u0110\u1ed9ng"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null),s.a.createElement("td",null,s.a.createElement("input",{type:"text",className:"form-control",name:"filterName",value:n,onChange:this.onHandleChange})),s.a.createElement("td",null,s.a.createElement("select",{className:"form-control",name:"filterStatus",onChange:this.onHandleChange,value:r},s.a.createElement("option",{value:"-1"},"T\u1ea5t C\u1ea3"),s.a.createElement("option",{value:"0"},"\u1ea8n"),s.a.createElement("option",{value:"1"},"K\xedch Ho\u1ea1t"))),s.a.createElement("td",null)),o)))}}]),a}(s.a.Component),S=a(89),k=a.n(S),y=a(49),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onStatusUpdate=function(e){var t=n.state.tasks,a=k.a.findIndex(t,(function(t){return t.id==e}));t[a].status=!t[a].status,n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t))},n.onDeleteItem=function(e){var t=n.state.tasks.filter((function(t){return t.id!==e}));n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t))},n.onUpdateItem=function(e){n.setState({itemEditing:e,isDisplayForm:!0})},n.onSort=function(e,t){n.setState({sortBy:e,sortValue:t})},n.state={tasks:[],isDisplayForm:!1,itemEditing:null,filter:{name:"",status:-1},keyword:""},n.onShowForm=n.onShowForm.bind(Object(c.a)(n)),n.onCloseForm=n.onCloseForm.bind(Object(c.a)(n)),n.onSubmit=n.onSubmit.bind(Object(c.a)(n)),n.onFilter=n.onFilter.bind(Object(c.a)(n)),n.onSearch=n.onSearch.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({tasks:JSON.parse(localStorage.getItem("tasks"))})}},{key:"onShowForm",value:function(){this.setState({isDisplayForm:!0,itemEditing:null})}},{key:"onCloseForm",value:function(){this.setState({isDisplayForm:!1,itemEditing:null})}},{key:"onSubmit",value:function(e){var t=this.state.tasks;null===e.id?(e.id=y.generate(5),t.push(e)):t=t.map((function(t,a){return t.id===e.id&&(t=e),t})),this.setState({tasks:t,itemEditing:null}),localStorage.setItem("tasks",JSON.stringify(t)),this.onCloseForm()}},{key:"onFilter",value:function(e,t){this.setState({filter:{name:e.toLowerCase(),status:t}})}},{key:"onSearch",value:function(e){this.setState({keyword:e.toLowerCase()})}},{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.isDisplayForm,n=e.itemEditing,r=e.filter,o=e.keyword,l=e.sortBy,i=e.sortValue;r&&(r.name&&(t=t.filter((function(e){return-1!==e.name.toLowerCase().search(r.name)}))),r.status&&(t=t.filter((function(e){return-1==r.status?e:e.status==(1==r.status)})))),o&&(t=t.filter((function(e){return-1!==e.name.toLowerCase().search(o)}))),"name"===l?t.sort((function(e,t){return e.name>t.name?i:e.name<t.name?-i:0})):t.sort((function(e,t){return e.status>t.status?-i:e.status<t.status?i:0}));var c=a?s.a.createElement(p,{onSubmit:this.onSubmit,closeForm:this.onCloseForm,itemEditing:n}):"";return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"text-center"},s.a.createElement("h1",null,"Qu\u1ea3n L\xfd C\xf4ng Vi\u1ec7c"),s.a.createElement("hr",null)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4"},c),s.a.createElement("div",{className:a?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"},s.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.onShowForm},s.a.createElement("span",{className:"fa fa-plus mr-5"}),"Th\xeam C\xf4ng Vi\u1ec7c"),s.a.createElement(f,{onSearch:this.onSearch,onSort:this.onSort,sortBy:l,sortValue:i}),s.a.createElement("div",{className:"row mt-15"},s.a.createElement(v,{tasks:t,onUpdateStatus:this.onStatusUpdate,onDeleteItem:this.onDeleteItem,onUpdateItem:this.onUpdateItem,onFilter:this.onFilter})))))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){e.exports=a(180)},95:function(e,t,a){},96:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.254a936f.chunk.js.map