(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(e,t,s){},20:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),l=s(13),n=s.n(l),i=(s(19),s.p,s(20),s(0));function r(){return Object(i.jsx)("div",{className:"bg-success fontOdibee text-white",style:{PaddingBottom:"5%"},children:Object(i.jsx)("center",{children:Object(i.jsxs)("h1",{classname:"mb-4 d-inline",children:["<Built-With-What /> ",Object(i.jsx)("span",{style:{fontSize:"small"},className:"d-inline fontVersion",children:"v1.0 by Salman Qureshi"})]})})})}var j=s(3),o=s(14),b=s.n(o),m=s.p+"static/media/preloader.0ac0e9d1.gif";var h=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),s=t[0],c=t[1],l=Object(a.useState)(!1),n=Object(j.a)(l,2),r=(n[0],n[1]),o=Object(a.useState)(!0),h=Object(j.a)(o,2),d=h[0],x=h[1],O=Object(a.useState)(!1),f=Object(j.a)(O,2),g=f[0],u=f[1],p=Object(a.useState)("loading..."),N=Object(j.a)(p,2),w=N[0],v=N[1],y=Object(a.useState)("Enter Domain Name To Get Details...."),k=Object(j.a)(y,2),A=k[0],S=k[1],L=Object(a.useState)(""),C=Object(j.a)(L,2),P=C[0],z=C[1];return Object(i.jsxs)("div",{className:"container bg-white mb-4",style:{paddingTop:"5%",paddingBottom:"5%"},children:[Object(i.jsxs)("div",{className:"heading1",style:{textAlign:"center"},children:[Object(i.jsx)("h1",{style:{textAlign:"center"},className:"fontOsawld",children:"Enter a Valid Domain Name"}),Object(i.jsx)("small",{className:"text-danger",children:"Without http or https"})]}),Object(i.jsx)("div",{style:{textAlign:"center"},children:Object(i.jsx)("input",{type:"text",className:"border-success mt-3 col-5",placeholder:"example.com",autoComplete:"off",value:s,onChange:function(e){c(e.target.value),""!==s&&x(!1),""===s&&x(!0),r(!1)},required:!0})}),Object(i.jsx)("div",{style:{textAlign:"center"},children:Object(i.jsx)("button",{className:"btn-success mt-3",disabled:d,onClick:function(){""===s?(x(!0),alert("URL can't empty!")):/(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{1,63}(?<!-)\.)+[a-zA-Z]{2,63}$)/.test(s)?(console.log("correct"),u(!1),S(Object(i.jsx)("img",{src:m,alt:"Preloader"})),console.log("clicked"),b.a.get("https://45cslh.deta.dev/get/"+s).then((function(e){console.log(e.data),v(e.data),z(s),u(!0),console.log(typeof w)}))):alert("Please enter a valid URL. (eg) isalman.xyz")},children:"Get Details"})}),Object(i.jsx)("div",{className:"mt-4",children:g?Object(i.jsxs)("div",{style:{textAllign:"center",justifyContent:"center",marginLeft:"10%",marginRight:"10%",fontSize:"35px",backgroundColor:"#e6e8e6"},className:"border border-warning mb-4",children:[Object(i.jsx)("center",{children:Object(i.jsxs)("h3",{className:"text-primary",children:[Object(i.jsx)("i",{className:"fa fa-chain text-info mx-2"})," ",Object(i.jsxs)("u",{children:["Details For: ",P]})]})}),Object(i.jsxs)("div",{style:{paddingLeft:"5%"},children:[w["programming-languages"]?Object(i.jsxs)("p",{className:"fontOsawld",children:[Object(i.jsx)("i",{className:"fa fa-laptop mx-2"}),"Programming Languages: ",w["programming-languages"]]}):null,w["programming-languages"]?Object(i.jsxs)("p",{className:"fontOsawld",children:[Object(i.jsx)("i",{className:"fa fa-hourglass-1 mx-2"}),"CDN: ",w.cdn]}):null,w["font-scripts"]?Object(i.jsxs)("p",{className:"fontOsawld",children:[Object(i.jsx)("i",{className:"fa fa-font mx-2"}),"Fonts: ",w["font-scripts"]]}):null,w["javascript-frameworks"]?Object(i.jsxs)("p",{className:"fontOsawld",children:[Object(i.jsx)("i",{className:"fa fa-bolt mx-2"}),"Javascript Frameworks: ",w["javascript-frameworks"]]}):null,w["javascript-graphics"]?Object(i.jsxs)("p",{className:"fontOsawld",children:[Object(i.jsx)("i",{className:"fa fa-file-movie-o mx-2"}),"Javascript Graphics: ",w["javascript-graphics"]]}):null,w["web-frameworks"]?Object(i.jsxs)("p",{className:"fontOsawld",children:[Object(i.jsx)("i",{className:"fa fa-compass mx-2"}),"Web Frameworks: ",w["web-frameworks"]]}):null,w["web-servers"]?Object(i.jsxs)("p",{className:"fontOsawld",children:[Object(i.jsx)("i",{className:"fa fa-server mx-2"}),"Web Server: ",w["web-servers"]]}):null,w.blogs?Object(i.jsxs)("p",{className:"fontOsawld",children:[Object(i.jsx)("i",{className:"fas fa-blog mx-2"}),"Blogs: ",w.blogs]}):null,w.cms?Object(i.jsxs)("p",{className:"fontOsawld",children:[Object(i.jsx)("i",{className:"fa fa-indent mx-2"}),"CMS: ",w.cms]}):null,w.ecommerce?Object(i.jsxs)("p",{className:"fontOsawld",children:[Object(i.jsx)("i",{className:"fa fa-dollar mx-2"}),"E-commerce: ",w.ecommerce]}):null,w["photo-galleries"]?Object(i.jsxs)("p",{className:"fontOsawld",children:[Object(i.jsx)("i",{className:"fa fa-photo mx-2"}),"Photo Galleries: ",w["photo-galleries"]]}):null,w["tag-managers"]?Object(i.jsxs)("p",{className:"fontOsawld",children:[Object(i.jsx)("i",{className:"fa fa-tags mx-2"}),"Tags Manager: ",w["tag-managers"]]}):null,w.analytics?Object(i.jsxs)("p",{className:"fontOsawld",children:[Object(i.jsx)("i",{className:"fa fa-bar-chart mx-2"}),"Analytics: ",w.analytics]}):null,w.miscellaneous?Object(i.jsxs)("p",{className:"fontOsawld",children:[Object(i.jsx)("i",{className:"fa fa-plus mx-2"}),"Miscellaneous: ",w.miscellaneous]}):null]})]}):Object(i.jsx)("center",{children:A})})]})};function d(){return Object(i.jsx)("div",{children:Object(i.jsxs)("footer",{className:"footer mt-2 bg-warning",children:[Object(i.jsxs)("h3",{children:["Designed by \ud83d\ude06 ",Object(i.jsx)("a",{href:"https://isalman.xyz",children:"Salman Qureshi"})]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("a",{href:"https://github.com/hotheadhacker",target:"_BLANK",children:Object(i.jsx)("i",{className:"fab fa-github fa-2x mx-2 github"})}),Object(i.jsx)("a",{href:"https://twitter.com/salmanually",target:"_BLANK",children:Object(i.jsx)("i",{className:"fab fa-twitter fa-2x mx-2 twitter"})}),Object(i.jsx)("a",{href:"https://instagram.com/salmanually",target:"_BLANK",children:Object(i.jsx)("i",{className:"fab fa-instagram fa-2x mx-2 instagram"})}),Object(i.jsx)("a",{href:"https://isalman.xyz",target:"_BLANK",children:Object(i.jsx)("i",{className:"fas fa-mouse-pointer fa-2x mx-2 website"})}),Object(i.jsx)("a",{href:"mailto:isalmanqureshi@gmail.com",target:"_BLANK",children:Object(i.jsx)("i",{className:"fas fa-envelope fa-2x mx-2 email"})}),Object(i.jsx)("a",{href:"https://blog.isalman.xyz",target:"_BLANK",children:Object(i.jsx)("i",{className:"fas fa-blog fa-2x mx-2 blog"})})]})]})})}function x(){return Object(i.jsxs)("div",{className:"container borderApi mt-4 mb-4 text-white",children:[Object(i.jsx)("center",{children:Object(i.jsx)("h1",{className:"text-warning",children:Object(i.jsx)("u",{children:"About"})})}),Object(i.jsxs)("p",{style:{fontSize:"20px"},className:"my-4",children:["This App Works on Open API developed by ",Object(i.jsx)("a",{href:"isalman.xyz?ref=builtwithwhat",target:"_blank",children:"Salman Qureshi"}),", The full documentation of API will be updated here",Object(i.jsx)("br",{}),Object(i.jsx)("span",{className:"text-warning",children:"With this portal or API you can get all information about any website, what it is made up of, what technology it uses --Reverse Engineering."}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{children:"Features:"}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["Get Direct API Calls ",Object(i.jsx)("a",{href:"https://45cslh.deta.dev/get/isalman.xyz",target:"_blank",children:"https://45cslh.deta.dev/get/isalman.xyz"})," ",Object(i.jsxs)("small",{style:{color:"black"},children:["(Eg. https://45cslh.deta.dev/get/",Object(i.jsx)("span",{style:{color:"brown"},children:"<Domain_Name>)"})]})]}),Object(i.jsxs)("li",{children:["Live API End-Point Testing ",Object(i.jsx)("a",{href:"https://45cslh.deta.dev/docs",target:"_blank",children:"here"})]}),Object(i.jsxs)("li",{children:["Cross-Origin Support ",Object(i.jsxs)("small",{className:"text-warning",children:["(No ",Object(i.jsx)("span",{className:"text-secondary",children:"CORS"})," problem)"]})]}),Object(i.jsx)("li",{children:"Open-Source"}),Object(i.jsx)("li",{children:"No API Call Limits"}),Object(i.jsx)("li",{children:"Developer Friendly"}),Object(i.jsxs)("li",{children:["Want to contribute or wanna check source-code ",Object(i.jsx)("a",{href:"https://github.com/hotheadhacker/built-with-what",target:"_blank",children:"hotheadhacker/built-with-what"})]})]})]}),Object(i.jsxs)("blockquote",{className:"blockquote text-center",children:[Object(i.jsxs)("p",{className:"text-warning",children:[Object(i.jsx)("span",{className:"text-danger",children:"Note: "}),"This project is in beta phase! There might be some errors \u274c or bugs bugs \ud83d\udc1b "]}),Object(i.jsxs)("footer",{className:"blockquote-footer text-white",children:["\ud83d\udd09 ",Object(i.jsx)("cite",{title:"Source Title",children:"If you found one, kindly mail \ud83d\udce7 me@isalman.xyz"})]})]})]})}var O=function(){return Object(i.jsxs)("div",{className:"container-fluid bg-main",children:[Object(i.jsx)(r,{}),Object(i.jsx)(h,{}),Object(i.jsx)(x,{}),Object(i.jsx)(d,{})]})},f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),l(e),n(e)}))};n.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),f()}},[[40,1,2]]]);
//# sourceMappingURL=main.8af682db.chunk.js.map