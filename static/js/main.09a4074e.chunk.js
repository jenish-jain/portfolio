(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n.n(i),c=n(11),a=n.n(c),s=(n(21),n(3)),r=(n(22),n(0));function l(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=(t[0],t[1]);return Object(i.useEffect)((function(){n("/"===window.location.pathname)}),[]),Object(r.jsx)("header",{className:"site-header",children:Object(r.jsx)("a",{href:"/",rel:"home",className:"home",children:"Jenish Jain"})})}function d(e){var t=e.children;return Object(r.jsx)("main",{children:t})}n(24);function j(){return Object(r.jsxs)("footer",{className:"footer",children:[Object(r.jsx)("span",{children:"powered by free weekends"}),Object(r.jsxs)("nav",{className:"footer-nav",children:[Object(r.jsx)("a",{href:"/posts",children:"posts"}),Object(r.jsx)("a",{href:"https://github.com/jenish-jain/portfolio",children:"source code"})]})]})}function h(e){var t=e.children,n={darkMode:!1,toggleDarkMode:!1,soundEnabled:!0,toggleSound:!1}.darkMode;return Object(r.jsxs)("div",{className:"outer ".concat(n?"dark":"light"),children:[Object(r.jsx)(l,{}),Object(r.jsx)(d,{children:t}),Object(r.jsx)(j,{})]})}var u=n(12);function b(e){var t=e.title,n=void 0===t?"Jenish Jain's Portfolio":t,i=e.description,o=void 0===i?"Personal portfolio for jenish jain":i,c=e.url,a=void 0===c?"https://jenishjain.in/":c,s=e.image,l=void 0===s?"https://res.cloudinary.com/jenishjain/image/upload/v1638108545/portfolio/images/jenishjain.jpg":s,d=e.post,j=void 0!==d&&d,h={darkMode:!1,toggleDarkMode:!1,soundEnabled:!0,toggleSound:!1}.darkMode;return Object(r.jsxs)(u.a,{defer:!1,children:[Object(r.jsx)("title",{children:n}),Object(r.jsx)("link",{rel:"canonical",href:a}),Object(r.jsx)("meta",{name:"description",content:o}),Object(r.jsx)("meta",{name:"image",content:l}),Object(r.jsx)("meta",{name:"theme-color",content:"#ffe742"}),Object(r.jsx)("meta",{property:"og:type",content:j?"article":"website"}),Object(r.jsx)("meta",{property:"og:url",content:a}),Object(r.jsx)("meta",{property:"og:description",content:o}),Object(r.jsx)("meta",{property:"og:image",content:l}),Object(r.jsx)("meta",{name:"twitter:widgets:theme",content:h?"dark":"light"}),Object(r.jsx)("meta",{name:"twitter:dnt",content:"on"}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(r.jsx)("meta",{name:"twitter:creator",content:"@jenishjain6"}),Object(r.jsx)("meta",{name:"twitter:title",content:n}),Object(r.jsx)("meta",{name:"twitter:description",content:o}),Object(r.jsx)("meta",{name:"twitter:image",content:l}),Object(r.jsx)("body",{className:h?"dark":"light"})]})}var p=n(5),f=n(9),m=(n(27),["color","children","id"]);var g=function(e){var t,n=e.color,i=e.children,o=e.id,c=Object(f.a)(e,m),a=null!==(t=c.class)&&void 0!==t?t:"";return Object(r.jsx)("div",Object(p.a)(Object(p.a)({},c),{},{id:o,className:"block ".concat(n," ").concat(a),children:i}))},v=n(4),O=n.n(v),x=n(15),y=O.a,w=y.Engine,k=y.Render,E=y.Runner,S=y.World,J=y.Bodies,C=y.Mouse,_=y.Events,P=y.Common,I=y.Body,M=w.create({gravity:{y:0,x:0,scale:.1}}),N=E.create();function B(){var e=Object(i.useRef)();Object(i.useEffect)((function(){var t=e.current;if(t){var n=e.current.clientHeight,i=e.current.clientWidth,o=k.create({element:"div",canvas:t,engine:M,options:{showVelocity:!1,width:i,height:n,wireframes:!1,background:"#f0f0f0"}});E.run(N,M),k.run(o);var c=J.circle(o.options.width/2,o.options.height/2,50,{render:{fillStyle:"#f0f0f0",strokeStyle:"#f0f0f0",lineWidth:0},isStatic:!0,plugin:{attractors:[function(e,t){return{x:5e-6*(e.position.x-t.position.x),y:5e-6*(e.position.y-t.position.y)}}]}});S.add(M.world,c);var a=C.create(o.canvas);return o.mouse=a,_.on(M,"afterUpdate",(function(){a.position.x&&I.translate(c,{x:.12*(a.position.x-c.position.x),y:.12*(a.position.y-c.position.y)})})),{engine:M,runner:N,render:o,canvas:o.canvas,stop:function(){v.Render.stop(o),v.Runner.stop(N)}}}}),[e]);return{ref:e,addAttractor:function(){!function(){for(var e=0;e<150;e+=1){var t=J.polygon(P.random(0,1112),P.random(0,745),P.random(1,5),P.random()>.9?P.random(15,25):P.random(5,10));S.add(M.world,t)}}()}}}function H(e){var t=B().ref;return Object(r.jsx)("canvas",{ref:t,className:e.class,style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}})}v.use(x);n(28);var A=function(){var e=B().addAttractor;return Object(i.useEffect)((function(){e()}),[]),[Object(r.jsx)(H,{className:"attractor"}),Object(r.jsxs)("div",{className:"hero",children:[Object(r.jsx)("span",{className:"hero-first-line",children:"Jenish"}),Object(r.jsx)("span",{className:"hero-box",children:"Jain"})]})]},D=n(16);function q(e){var t=e.wrapperClass,n=void 0===t?"":t,i=e.imageClass,o=void 0===i?"":i,c=e.alt,a=e.publicId,s=e.width,l=e.height,d=e.transformations,j=void 0===d?[]:d,h=["q_auto","f_auto","c_fill","w_".concat(s),"h_".concat(l)].concat(Object(D.a)(j)).join(","),u="".concat("https://res.cloudinary.com/jenishjain/image/upload/","/").concat(h,"/").concat(a);return Object(r.jsx)("div",{class:n,style:{height:0,maxWidth:"100%",paddingBottom:"".concat(l/s*100,"%"),position:"relative",width:"".concat(s,"px")},children:Object(r.jsx)("img",{loading:"lazy",src:u,alt:c,class:o,height:l,width:s,style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}})})}var z={};function R(e,t){if(!t.soundEnabled)return[function(){}];try{if(z[e])return[function(){return z[e].play()}];var n=new Audio(e);return z[e]=n,[function(){return z[e].play()}]}catch(i){return[function(){}]}}var W=["children","handleClick","hoverSound","clickSound","forceSoundEnabled"];function F(e){var t=e.children,n=e.handleClick,i=e.hoverSound,o=void 0===i?function(){}:i,c=e.clickSound,a=void 0===c?function(){}:c,s=e.forceSoundEnabled,l=void 0!==s&&s,d=Object(f.a)(e,W);return Object(r.jsx)("button",Object(p.a)(Object(p.a)({class:d.class,onKeyPress:function(e){"Enter"===e.key&&(n(e),a({forceSoundEnabled:l}))},onMouseDown:function(e){e.preventDefault(),e.stopPropagation(),n(e),a({forceSoundEnabled:l})},onMouseEnter:o,onFocus:o},d),{},{children:t}))}n(29);var T=[{publicId:"v1638108545/portfolio/images/jenishjain",alt:"Jenish Jain smiling",caption:"This is Jenish\u2019s most common profile photo.",width:300,height:400},{publicId:"v1640535281/portfolio/images/jenish-jain-take-a-break",alt:"Jenish Jain chiling at Goa.",caption:"Once in a while Jenish likes to take a break from work",width:300,height:400},{publicId:"v1640528439/portfolio/images/jenish-jain-1",alt:"Jenish smiling ",caption:"Smiling is Jenish\u2019s favourite hobbie",width:300,height:400}];function G(e){var t=e.photo,n=e.handleClick,i=function(){var e=!0,t=R("https://res.cloudinary.com/jenishjain/video/upload/v1638096412/portfolio/audio/boop.mp3",{soundEnabled:e,volume:.5}),n=Object(s.a)(t,1)[0],i=R("https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/pop.mp3",{soundEnabled:e,volume:.5}),o=Object(s.a)(i,1)[0],c=R("https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/click.mp3",{soundEnabled:e,volume:.5}),a=Object(s.a)(c,1)[0],r=R("https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/airhorn.mp3",{soundEnabled:e,volume:.5,interrupt:!0}),l=Object(s.a)(r,1)[0],d=R("https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/power-up.mp3",{soundEnabled:e,volume:.5}),j=Object(s.a)(d,1)[0],h=R("https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395253/jason.af/sfx/power-down.mp3",{soundEnabled:e,volume:.5}),u=Object(s.a)(h,1)[0],b=R("https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/hooray.mp3",{soundEnabled:e,volume:.5});return{playAirhorn:l,playBoop:n,playClick:a,playHooray:Object(s.a)(b,1)[0],playPop:o,playPowerUp:j,playPowerDown:u}}(),o=i.playClick,c=i.playPop;return Object(r.jsx)("li",{class:"gallery-thumb",children:Object(r.jsx)(F,{class:"gallery-thumb-link",hoverSound:c,clickSound:o,handleClick:n,children:Object(r.jsx)(q,{publicId:t.publicId,alt:t.alt,width:50,height:50,transformations:["g_faces","c_thumb"]})})})}function L(e){var t=Object(i.useState)(T[0]),n=Object(s.a)(t,2),o=n[0],c=n[1];return Object(r.jsxs)("div",{class:e.class,children:[Object(r.jsxs)("figure",{class:"gallery-image",children:[Object(r.jsx)(q,{publicId:o.publicId,alt:o.alt,width:400,height:400,transformations:["g_faces","c_fill"]}),Object(r.jsxs)("figcaption",{children:[o.caption,Object(r.jsxs)("div",{class:"gallery-links",children:[Object(r.jsx)("a",{class:"gallery-fullsize-link",target:"_blank",rel:"noopener noreferrer",href:"https://res.cloudinary.com/jenishjain/image/upload/".concat(o.publicId,".jpg"),children:"open full size"}),o.credit?Object(r.jsxs)("span",{class:"gallery-credit",children:["Photo: ",Object(r.jsx)("a",{href:o.creditLink,children:o.credit})]}):""]})]})]}),Object(r.jsxs)("div",{class:"gallery-options",children:[Object(r.jsx)("h2",{class:"gallery-heading",children:"You can use any of these photos with credit:"}),Object(r.jsx)("ul",{class:"gallery-thumbnails",children:T.map((function(e,t){return Object(r.jsx)(G,{photo:e,isCurrent:o.publicId===e.publicId,handleClick:function(){c(e)}},"photo-".concat(t))}))})]})]})}n(30);function K(){return Object(r.jsxs)("div",{className:"bio",children:[Object(r.jsx)("strong",{children:"Jenish Jain "}),Object(r.jsxs)("span",{children:["works at ",Object(r.jsx)("a",{href:"https://rapido.bike/",children:"Rapido"})," as a Product Engineer in pricing team."]}),Object(r.jsx)("span",{children:"\xa0 He and his team are responsible for building products to control realtime marketplace pricing according to business needs."}),Object(r.jsxs)("span",{children:["\xa0 He likes to share his ideas and experiences as ",Object(r.jsx)("a",{href:"https://medium.com/@jenishjain6",children:"blogs"}),"."]}),"\xa0 In his free time he likes to draw cartoons and stream movies. He lives in ",Object(r.jsx)("a",{href:"https://goo.gl/maps/YwjhHvZvzX3je9Q7A",children:"Surat"}),", Gujarat."]})}var U=function(){return Object(r.jsxs)("section",{class:"bio-container",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"bio-heading",children:"Who is He?"}),Object(r.jsx)(K,{}),Object(r.jsxs)("div",{class:"bio-social",children:[Object(r.jsx)("h2",{class:"bio-connect",children:"Connect With Jenish:"}),Object(r.jsx)("ul",{class:"bio-profiles",children:[{id:"twitter",svg:Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 80 80",children:[Object(r.jsx)("defs",{}),Object(r.jsx)("path",{fill:"#6B6971",d:"M25.158 72.502c30.19 0 46.701-25.011 46.701-46.7 0-.711 0-1.418-.048-2.122A33.396 33.396 0 0080 15.184a32.762 32.762 0 01-9.427 2.582 16.47 16.47 0 007.216-9.078 32.895 32.895 0 01-10.423 3.984 16.429 16.429 0 00-27.97 14.97 46.6 46.6 0 01-33.828-17.15 16.426 16.426 0 005.082 21.91A16.292 16.292 0 013.2 30.35v.207a16.419 16.419 0 0013.168 16.09 16.388 16.388 0 01-7.411.282A16.432 16.432 0 0024.29 58.326 32.934 32.934 0 010 65.13a46.467 46.467 0 0025.158 7.36"})]}),src:"/images/twitter.svg",link:"https://twitter.com/jenishjain6",label:"Twitter"},{id:"github",svg:Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 81 80",children:[Object(r.jsx)("defs",{}),Object(r.jsx)("g",{"clip-path":"url(#clip0)",children:Object(r.jsx)("path",{fill:"#6B6971","fill-rule":"evenodd",d:"M40.5 0C18.4 0 .5 17.9.5 40c0 17.68 11.467 32.658 27.354 37.962 1.99.368 2.726-.86 2.726-1.94 0-.958-.025-3.462-.05-6.802-11.123 2.407-13.48-5.353-13.48-5.353C15.233 59.251 12.606 58 12.606 58c-3.635-2.48.27-2.431.27-2.431 4.002.294 6.138 4.125 6.138 4.125 3.56 6.114 9.356 4.346 11.64 3.315.368-2.578 1.4-4.346 2.529-5.353-8.865-.982-18.196-4.42-18.196-19.742 0-4.371 1.547-7.931 4.126-10.73-.418-1.032-1.793-5.084.368-10.584 0 0 3.364-1.08 11 4.1 3.193-.883 6.606-1.325 10.019-1.35 3.389.025 6.826.467 10.018 1.35 7.637-5.18 11.001-4.1 11.001-4.1 2.185 5.5.81 9.577.393 10.583 2.554 2.8 4.1 6.36 4.1 10.73 0 15.372-9.355 18.736-18.268 19.743 1.424 1.228 2.725 3.683 2.725 7.416 0 5.353-.049 9.65-.049 10.976 0 1.08.712 2.308 2.75 1.915C69.057 72.658 80.5 57.68 80.5 40.024 80.5 17.902 62.6 0 40.5 0z","clip-rule":"evenodd"})}),Object(r.jsx)("defs",{children:Object(r.jsx)("clipPath",{id:"clip0",children:Object(r.jsx)("path",{fill:"#fff",d:"M0 0h80v80H0z",transform:"translate(.5)"})})})]}),src:"/images/github.svg",link:"https://github.com/jenish-jain",label:"GitHub"}].map((function(e){return Object(r.jsx)("li",{class:"bio-profile",children:Object(r.jsxs)("a",{href:e.link,class:"bio-link",onMouseDown:function(e){e.stopPropagation()},onKeyDown:function(e){"Enter"===e.key&&e.stopPropagation()},children:[e.svg,Object(r.jsx)("span",{class:"visually-hidden",children:e.label})]})})}))})]})]}),Object(r.jsx)(L,{class:"bio-image-container"})]})};var Y=function(){return[Object(r.jsx)(b,{}),Object(r.jsxs)(h,{children:[Object(r.jsx)(g,{color:"dirty-white",children:Object(r.jsx)(A,{})}),Object(r.jsx)(g,{id:"bio",children:Object(r.jsx)(U,{})})]})]},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),o(e),c(e),a(e)}))};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Y,{})}),document.getElementById("root")),Q()}},[[31,1,2]]]);
//# sourceMappingURL=main.09a4074e.chunk.js.map