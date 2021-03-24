(function(t){function e(e){for(var r,i,l=e[0],u=e[1],o=e[2],p=0,b=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&b.push(s[i][0]),s[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(b.length)b.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var u=n[l];0!==s[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-5",attrs:{id:"app"}},[n("Banner",{attrs:{title:"Examples"}},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("b",[t._v("Input:")]),n("br"),t._v(" • Base: 2 "),n("br"),t._v(" • Binary number: 110 "),n("br"),n("b",[t._v("Output:")]),t._v(" "),n("br"),t._v(" • Decimal result: 6 "),n("br"),t._v(" • Equation: 0x2^0 + 1x2^1 + 1x2^2 "),n("br"),n("br"),n("br"),n("b",[t._v("Input:")]),t._v(" "),n("br"),t._v(" • Base: 2 "),n("br"),t._v(" • Binary number: 11,001 "),n("br"),n("b",[t._v("Output:")]),t._v(" "),n("br"),t._v(" • Decimal result: 3.125 "),n("br"),t._v(" • Equation: 1x2^1 + 1x2^0 + 0x2^-1 + 0x2^-2 + 1x2^-3 "),n("br")]),n("div",{staticClass:"column"},[n("b",[t._v("Input:")]),t._v(" "),n("br"),t._v(" • Base: 16 "),n("br"),t._v(" • Hex number: 1A,B "),n("br"),n("b",[t._v("Output:")]),t._v(" "),n("br"),t._v(" • Decimal result: 26.6875 "),n("br"),t._v(" • Equation: 1x16^1 + 10x16^0 + 11x16^-1 "),n("br"),n("br"),n("br"),n("b",[t._v("Input:")]),t._v(" "),n("br"),t._v(" • Base: 16 "),n("br"),t._v(" • Hex number: 1AB "),n("br"),n("b",[t._v("Output:")]),n("br"),t._v(" • Decimal result: 427 "),n("br"),t._v(" • Equation: 1x16^2 + 10x16^1 + 11x16^0 "),n("br")])])]),n("div",{staticClass:"columns is-mobile is-centered"},[n("div",{staticClass:"column is-half mt-5"},[n("div",{staticClass:"field"},[n("div",{staticClass:"field-body m-2"},[n("Input",{attrs:{type:"number",placeholder:"Base"},model:{value:t.base,callback:function(e){t.base=e},expression:"base"}})],1),n("div",{staticClass:"field-body m-2"},[n("Input",{attrs:{type:"text",placeholder:"Number"},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}})],1),n("div",{staticClass:"field-body m-2"},[t.calcAgain?t._e():n("Button",{attrs:{disabled:t.calculateIsDisabled,text:"Calculate",event:t.calculate}}),t.calcAgain?n("Button",{attrs:{text:"Clear",event:t.clear}}):t._e()],1)]),t.result?n("BoxResult",{attrs:{result:t.result,equation:t.equation}}):t._e()],1)])],1)},a=[],i=(n("99af"),n("7db0"),n("4160"),n("caad"),n("4fad"),n("ac1f"),n("2532"),n("1276"),n("498a"),n("159b"),n("3835")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button is-outlined is-fullwidth is-dark",attrs:{disabled:t.disabled},domProps:{innerHTML:t._s(t.text)},on:{click:t.event}})},u=[],o={name:"Button",props:{text:{type:String},event:{type:Function,required:!0},disabled:{type:Boolean,default:!1}}},c=o,p=n("2877"),b=Object(p["a"])(c,l,u,!1,null,null,null),f=b.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-dark"},[n("div",{staticClass:"hero-body"},[n("p",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),n("p",{staticClass:"subtitle mt-3"},[t._t("default")],2)])])},v=[],h={name:"Banner",props:{title:String}},m=h,_=Object(p["a"])(m,d,v,!1,null,null,null),x=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field"},[n("p",{class:["control",t.hasIcon()?"has-icons-left":""]},[n("input",{class:["input","is-"+t.color],attrs:{type:t.type,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)},change:t.emitValue}}),t.hasIcon()?n("span",{staticClass:"icon is-small is-left",domProps:{innerHTML:t._s(t.displayIcon())}}):t._e()])])},g=[],C=(n("a9e3"),{name:"Input",props:{type:{type:String,required:!0},placeholder:{type:String,required:!0},color:{type:String,default:"dark"},icon:{type:String},value:{type:[String,Number]}},data:function(){return{model:null}},methods:{displayIcon:function(){return this.hasIcon()?'<i class="fas fa-'.concat(this.icon,'"></i></span>'):""},hasIcon:function(){return this.icon},emitValue:function(){this.$emit("change",this.value)}}}),O=C,B=(n("729a"),Object(p["a"])(O,y,g,!1,null,"51ec6f7a",null)),q=B.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("p",{staticClass:"title is-size-4"},[t._v(" Result ")]),n("p",{staticClass:"subtitle mt-3 is-size-6"},[t._v(" "+t._s(t.result)+" ")]),n("p",{staticClass:"title is-size-4 mt-5"},[t._v(" Equation ")]),n("p",{staticClass:"subtitle mt-3 is-size-6"},[t._v(" "+t._s(t.equation)+" ")])])},I=[],w={name:"BoxResult",props:{result:Number,equation:String}},E=w,S=Object(p["a"])(E,j,I,!1,null,null,null),P=S.exports,k=16,A={name:"App",components:{Input:q,Button:f,Banner:x,BoxResult:P},data:function(){return{base:"",number:"",result:0,equation:"",calcAgain:!1}},computed:{calculateIsDisabled:function(){return!this.base||!this.number},numbers:function(){if(this.number.includes(",")){var t=this.number.trim().split(","),e=Object(i["a"])(t,2),n=e[0],r=e[1];return{int:this.number.trim(),float:{left:n.split(""),right:r.split("")}}}return{int:this.number.trim().split("")}},hexValues:function(){return{A:"10",B:"11",C:"12",D:"13",E:"14",F:"15"}}},methods:{calculate:function(){var t=this.numbers,e=t.float,n=t.int;k&&e?(this.updateNumbersToHex("float.left"),this.updateNumbersToHex("float.right")):k&&this.updateNumbersToHex("int"),this.converter(e?e.left:n),e&&this.converterFloat(this.numbers.float.right),this.calcAgain=!0},exponentials:function(t){for(var e=[],n=t.length-1;n>=0;n--)e.push({power:Math.pow(this.base,n),exponent:n});return e},converter:function(t){for(var e=0;e<t.length;e++){var n=this.exponentials(t)[e],r=n.power,s=n.exponent,a=t[e];this.result+=parseInt(a)*r,this.equation+="".concat(a,"x").concat(this.base,"^").concat(s),e<t.length-1&&(this.equation+=" + ")}},updateNumbersToHex:function(t){for(var e=this,n=this.deepGet(this.numbers,t),r=function(r){var s=n[r].toUpperCase(),a=Object.entries(e.hexValues).find((function(t){var e=Object(i["a"])(t,1),n=e[0];return n===s}));if(a&&t.includes("float")){var l=t.split("."),u=Object(i["a"])(l,2),o=u[0],c=u[1];e.numbers[o][c][r]=e.hexValues[s]}else a&&(e.numbers[t][r]=e.hexValues[s])},s=0;s<n.length;s++)r(s)},converterFloat:function(t){this.equation+=" + ";for(var e=0;e<t.length;e++){var n=t[e];this.result+=parseInt(n)*Math.pow(this.base,-(e+1)),this.equation+="".concat(n,"x").concat(this.base,"^-").concat(e+1),e<t.length-1&&(this.equation+=" + ")}},clear:function(){this.base="",this.number="",this.result=0,this.equation="",this.calcAgain=!1},deepGet:function(t,e){var n=t;return e.split(".").forEach((function(t){n=n[t]})),n}}},T=A,H=Object(p["a"])(T,s,a,!1,null,null,null),M=H.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(M)}}).$mount("#app")},"729a":function(t,e,n){"use strict";n("7c07")},"7c07":function(t,e,n){}});
//# sourceMappingURL=app.a331b479.js.map