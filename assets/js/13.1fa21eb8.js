(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{394:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"系统日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统日志"}},[t._v("#")]),t._v(" 系统日志")]),t._v(" "),s("p",[t._v("本系统使用 "),s("code",[t._v("AOP")]),t._v(" 方式记录用户操作日志，只需要在 "),s("code",[t._v("controller")]),t._v(" 的方法上使用 "),s("code",[t._v('@Log("")')]),t._v(" 注解，就可以将用户操作记录到数据库，源码可查看 "),s("code",[t._v("eladmin-logging")]),t._v(" "),s("br"),t._v("\n模块具体使用如下：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"新增用户"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResponseEntity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Validated")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestBody")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" resources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResponseEntity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CREATED")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("页面上可以看到 "),s("code",[t._v("操作日志")]),t._v("和"),s("code",[t._v("异常日志")])]),t._v(" "),s("h2",{attrs:{id:"操作日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作日志"}},[t._v("#")]),t._v(" 操作日志")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://eladmin.vip/images/2020/07/07/image.jpg",alt:"image.jpg"}})]),t._v(" "),s("h2",{attrs:{id:"异常日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常日志"}},[t._v("#")]),t._v(" 异常日志")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://eladmin.vip/images/2020/07/07/imagea9d688d59a73612d.jpg",alt:"imagea9d688d59a73612d.jpg"}})]),t._v(" "),s("Vssue",{attrs:{title:t.$title}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);