webpackJsonp([1],{11:function(e,t,n){function i(e){n(49)}var o=n(5)(n(18),n(15),i,null,null);e.exports=o.exports},13:function(e,t){},14:function(e,t,n){function i(e){n(50)}var o=n(5)(n(19),n(16),i,null,null);e.exports=o.exports},15:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("tree-grid",{attrs:{items:e.data,columns:e.columns},on:{"on-row-click":e.rowClick,"on-selection-change":e.selectionClick,"on-sort-change":e.sortClick}})],1)},staticRenderFns:[]}},16:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"autoTbale",style:{width:e.tableWidth}},[n("table",{staticClass:"table table-bordered",attrs:{id:"hl-tree-table"}},[n("thead",[n("tr",e._l(e.cloneColumns,function(t,i){return n("th",["selection"===t.type?n("Checkbox",{attrs:{value:e.checks},on:{"update:value":function(t){e.checks=t}},nativeOn:{click:function(t){t.preventDefault(),e.handleCheckAll(t)}}}):n("label",[e._v("\n                        "+e._s(e.renderHeader(t,i))+"\n                        "),t.sortable?n("span",{staticClass:"ivu-table-sort"},[n("Icon",{class:{on:"asc"===t._sortType},attrs:{type:"arrow-up-b"},nativeOn:{click:function(t){e.handleSort(i,"asc")}}}),e._v(" "),n("Icon",{class:{on:"desc"===t._sortType},attrs:{type:"arrow-down-b"},nativeOn:{click:function(t){e.handleSort(i,"desc")}}})],1):e._e()])],1)}))]),e._v(" "),n("tbody",e._l(e.initItems,function(t,i){return n("tr",{directives:[{name:"show",rawName:"v-show",value:e.show(t),expression:"show(item)"}],class:{"child-tr":t.parent}},e._l(e.columns,function(o,c){return n("td",{style:e.tdWidth(o.width)},["selection"===o.type?n("Checkbox-group",{on:{"on-change":e.checkAllGroupChange},model:{value:e.checkGroup,callback:function(t){e.checkGroup=t},expression:"checkGroup"}},[n("Checkbox",{attrs:{label:t.id}},[n("span",{staticStyle:{display:"none"}},[e._v(" ")])])],1):e._e(),e._v(" "),"action"===o.type?n("div",e._l(o.actions,function(c){return n("i-button",{key:o.text,attrs:{type:c.type,size:"small"},on:{click:function(n){e.RowClick(t,n,i)}}},[e._v(e._s(c.text))])})):e._e(),e._v(" "),o.type?e._e():n("label",{on:{click:function(n){e.toggle(i,t)}}},[1==c?n("span",[t.children&&t.children.length>0?n("i",{staticClass:"ivu-icon",class:{"ivu-icon-plus-circled":!t.expanded,"ivu-icon-minus-circled":t.expanded}}):n("i",{staticClass:"ms-tree-space"}),e._v(" "),n("i",{domProps:{innerHTML:e._s(t.spaceHtml)}})]):e._e(),e._v(" "+e._s(e.renderBody(t,o))+"\n                    ")])],1)}))}))])])},staticRenderFns:[]}},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),o=n.n(i);t.default={name:"app",data:function(){return{columns:[{type:"selection",width:"50"},{title:"编码",key:"code",sortable:!0,width:"150"},{title:"名称",key:"name",width:"150"},{title:"状态",key:"status",width:"150"},{title:"备注",key:"remark",width:"150"},{title:"操作",type:"action",actions:[{type:"primary",text:"编辑"},{type:"error",text:"删除"}],width:"150"}],data:[{id:"1",code:"0001",name:"测试数据1",status:"启用",remark:"测试数据测试数据"},{id:"2",code:"0002",name:"测试数据2",status:"启用",remark:"测试数据测试数据",children:[{id:"01",code:"00001",name:"测试数据01",status:"启用",remark:"测试数据测试数据"},{id:"02",code:"00002",name:"测试数据02",status:"启用",remark:"测试数据测试数据"}]},{id:"3",code:"0003",name:"测试数据3",status:"启用",remark:"测试数据测试数据"},{id:"4",code:"0004",name:"测试数据4",status:"启用",remark:"测试数据测试数据"}]}},components:{treeGrid:o.a},methods:{rowClick:function(e,t,n){console.log("当前行数据:"+e),console.log("点击行号:"+t),console.log("点击事件:"+n)},selectionClick:function(e){console.log("选中数据id数组:"+e)},sortClick:function(e,t){console.log("排序字段:"+e),console.log("排序规则:"+t)}}}},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(21),o=n.n(i);t.default={name:"treeGrid",props:{columns:Array,items:Array},data:function(){return{initItems:[],cloneColumns:[],checkGroup:[],checks:!1,screenWidth:document.body.clientWidth,tdsWidth:0,timer:!1}},computed:{tableWidth:function(){return this.tdsWidth>this.screenWidth&&this.screenWidth>0?this.screenWidth+"px":"100%"}},watch:{screenWidth:function(e){var t=this;this.timer||(this.screenWidth=e,this.timer=!0,setTimeout(function(){t.timer=!1},400))},items:function(){this.items&&(this.checks=!1,this.initData(this.items,1,null))},columns:{handler:function(){this.cloneColumns=this.makeColumns()},deep:!0}},mounted:function(){var e=this;this.items&&(this.initData(this.items,1,null),this.cloneColumns=this.makeColumns()),this.$nextTick(function(){e.screenWidth=document.body.clientWidth}),window.onresize=function(){return function(){window.screenWidth=document.body.clientWidth,e.screenWidth=window.screenWidth}()}},methods:{tdWidth:function(e){if(e)return{"min-width":e+"px"}},handleSort:function(e,t){this.cloneColumns.forEach(function(e){return e._sortType="normal"}),this.cloneColumns[e]._sortType===t?this.cloneColumns[e]._sortType="normal":this.cloneColumns[e]._sortType=t,this.$emit("on-sort-change",this.cloneColumns[e].key,this.cloneColumns[e]._sortType)},RowClick:function(e,t,n){this.$emit("on-row-click",e,t,n)},makeColumns:function(){var e=this,t=this.deepCopy(this.columns);return this.tdsWidth=0,t.forEach(function(t,n){t._index=n,t._width=t.width?t.width:"",t._sortType="normal",e.tdsWidth+=t.width?parseFloat(t.width):0}),t},initData:function(e,t,n){var i=this;this.initItems=[];for(var c="",s=1;s<t;s++)c+="<i class='ms-tree-space'></i>";e.forEach(function(e,s){e=o()({},e,{parent:n,level:t,spaceHtml:c}),void 0===e.expanded&&(e=o()({},e,{expanded:!1})),void 0===e.show&&(e=o()({},e,{isShow:!1})),e=o()({},e,{load:!!e.expanded}),i.initItems.push(e),e.children&&e.expanded&&i.initData(e.children,t+1,e)})},show:function(e){return 1==e.level||e.parent&&e.parent.expanded&&e.isShow},toggle:function(e,t){for(var n=this,i=t.level+1,c="",s=1;s<i;s++)c+="<i class='ms-tree-space'></i>";t.children&&(t.expanded?(t.expanded=!t.expanded,this.close(e,t)):(t.expanded=!t.expanded,t.load?this.open(e,t):(t.load=!0,t.children.forEach(function(s,r){n.initItems.splice(e+r+1,0,s),n.initItems[e+r+1]=o()({},n.initItems[e+r+1],{parent:t,level:i,spaceHtml:c,isShow:!0,expanded:!1})}))))},open:function(e,t){var n=this;t.children&&t.children.forEach(function(t,i){t.isShow=!0,t.children&&n.open(e+i+1,t.children)})},close:function(e,t){var n=this;t.children&&t.children.forEach(function(t,i){t.isShow=!1,t.children&&n.close(e+i+1,t.children)})},handleCheckAll:function(){this.checks=!this.checks,this.checks?this.checkGroup=this.checkGroup.concat(this.All(this.items)):this.checkGroup=[],this.$emit("on-selection-change",this.checkGroup)},checkAllGroupChange:function(e){e.length===this.items.length?this.checks=!0:this.checks=!1,this.$emit("on-selection-change",this.checkGroup)},All:function(e){var t=this,n=[];return e.forEach(function(e){n.push(e.id),e.children&&e.children.length>0&&(n=n.concat(t.All(e.children)))}),n},renderHeader:function(e,t){return"renderHeader"in this.columns[t]?this.columns[t].renderHeader(e,t):e.title||"#"},renderBody:function(e,t,n){return e[t.key]},deepCopy:function(e){var t,n,i,o=this.type(e);if("array"===o)t=[];else{if("object"!==o)return e;t={}}if("array"===o){for(n=0,i=e.length;n<i;n++)t.push(this.deepCopy(e[n]));return t}if("object"===o){for(n in e)t[n]=this.deepCopy(e[n]);return t}},type:function(e){var t=Object.prototype.toString;return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[t.call(e)]}}}},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),o=n(11),c=n.n(o),s=n(12),r=n.n(s),l=n(13);n.n(l);i.default.config.productionTip=!1,i.default.use(r.a),new i.default({el:"#app",template:"<App/>",components:{App:c.a}})},49:function(e,t){},50:function(e,t){}},[20]);
//# sourceMappingURL=app.81b68849ce58ef95f6c2.js.map