(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,function(e,t){t.sitesInfo={jenishjainin:{name:"jenishjain.in",icon:"https://res.cloudinary.com/jenishjain/image/fetch/v1642959509/https://www.jason.af/favicon-32x32.png"},rapidolabs:{name:"rapido-labs",icon:"https://res.cloudinary.com/jenishjain/image/upload/v1640938129/portfolio/blog-assets/rapido-labs-icon.png"},medium:{name:"medium",icon:"https://res.cloudinary.com/jenishjain/image/upload/v1640938582/portfolio/blog-assets/medium-icon.png"},drawings_jenishjain_in:{name:"drawings.jenishjain.in",icon:"https://res.cloudinary.com/jenishjain/image/fetch/v1642959509/https://www.jason.af/favicon-32x32.png"}}},,,,,,,,,,,,function(e,t,i){},function(e,t,i){},,function(e,t,i){},,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(2),s=i.n(n),o=i(8),a=i.n(o),c=(i(17),i(18),i(0));function r(){const[e,t]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{t("/"===window.location.pathname)}),[]),Object(c.jsx)("header",{className:"site-header",children:Object(c.jsx)("a",{href:"/",rel:"home",className:"home",children:"Jenish Jain"})})}function l(e){let{children:t}=e;return Object(c.jsx)("main",{children:t})}i(20);function d(){return Object(c.jsxs)("footer",{className:"footer",children:[Object(c.jsx)("span",{children:"powered by free weekends"}),Object(c.jsxs)("nav",{className:"footer-nav",children:[Object(c.jsx)("a",{href:"/posts",children:"posts"}),Object(c.jsx)("a",{href:"https://github.com/jenish-jain/portfolio",children:"source code"})]})]})}var h=i(6);h.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GOOGLE_TRACKING_ID);var j=e=>{let{children:t}=e;const{darkMode:i}={darkMode:!1,toggleDarkMode:!1,soundEnabled:!0,toggleSound:!1};return Object(n.useEffect)((()=>{h.a.pageview(window.location.pathname+window.location.search)}),[]),Object(c.jsxs)("div",{className:"outer ".concat(i?"dark":"light"),children:[Object(c.jsx)(r,{}),Object(c.jsx)(l,{children:t}),Object(c.jsx)(d,{})]})},p=i(9);function u(e){let{title:t="Jenish Jain",description:i="My personal website",url:n="https://jenishjain.in/",image:s="https://res.cloudinary.com/jenishjain/image/upload/v1638108545/portfolio/images/jenishjain.jpg",post:o=!1}=e;const{darkMode:a}={darkMode:!1,toggleDarkMode:!1,soundEnabled:!0,toggleSound:!1};return Object(c.jsxs)(p.a,{defer:!1,children:[Object(c.jsx)("title",{children:t}),Object(c.jsx)("link",{rel:"canonical",href:n}),Object(c.jsx)("meta",{name:"description",content:i}),Object(c.jsx)("meta",{name:"image",content:s}),Object(c.jsx)("meta",{name:"theme-color",content:"#ffe742"}),Object(c.jsx)("meta",{name:"keywords",content:"jenish, jenish jain, software engineer, electrical engineer, developer, rapido, tech blogs"}),Object(c.jsx)("meta",{property:"og:site_name",content:"Jenish Jain"}),Object(c.jsx)("meta",{property:"og:title",content:t}),Object(c.jsx)("meta",{property:"og:type",content:o?"article":"website"}),Object(c.jsx)("meta",{property:"og:url",content:n}),Object(c.jsx)("meta",{property:"og:description",content:i}),Object(c.jsx)("meta",{property:"og:image",content:s}),Object(c.jsx)("meta",{name:"twitter:widgets:theme",content:a?"dark":"light"}),Object(c.jsx)("meta",{name:"twitter:dnt",content:"on"}),Object(c.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(c.jsx)("meta",{name:"twitter:creator",content:"@jenishjain6"}),Object(c.jsx)("meta",{name:"twitter:title",content:t}),Object(c.jsx)("meta",{name:"twitter:description",content:i}),Object(c.jsx)("meta",{name:"twitter:image",content:s}),Object(c.jsx)("body",{className:a?"dark":"light"})]})}i(23);var m=function(e){var t;let{color:i,children:n,id:s,...o}=e;const a=null!==(t=o.class)&&void 0!==t?t:"";return Object(c.jsx)("div",{...o,id:s,className:"block ".concat(i," ").concat(a),children:n})},b=i(3),g=i.n(b),f=i(12);const{Engine:x,Render:w,Runner:O,World:v,Bodies:y,Mouse:k,Events:_,Common:N,Body:C}=g.a,E=x.create({gravity:{y:0,x:0,scale:.1}}),S=O.create();function M(){const e=Object(n.useRef)();Object(n.useEffect)((()=>{const t=e.current;if(!t)return;const i=e.current.clientHeight,n=e.current.clientWidth,s=w.create({element:"div",canvas:t,engine:E,options:{showVelocity:!1,width:n,height:i,wireframes:!1,background:"#f0f0f0"}});O.run(S,E),w.run(s);const o=y.circle(s.options.width/2,s.options.height/2,50,{render:{fillStyle:"#f0f0f0",strokeStyle:"#f0f0f0",lineWidth:0},isStatic:!0,plugin:{attractors:[function(e,t){return{x:5e-6*(e.position.x-t.position.x),y:5e-6*(e.position.y-t.position.y)}}]}});v.add(E.world,o);const a=k.create(s.canvas);return s.mouse=a,_.on(E,"afterUpdate",(function(){a.position.x&&C.translate(o,{x:.12*(a.position.x-o.position.x),y:.12*(a.position.y-o.position.y)})})),{engine:E,runner:S,render:s,canvas:s.canvas,stop:function(){b.Render.stop(s),b.Runner.stop(S)}}}),[e]);return{ref:e,addAttractor:()=>{!function(){for(let e=0;e<150;e+=1){const e=y.polygon(N.random(0,1112),N.random(0,745),N.random(1,5),N.random()>.9?N.random(15,25):N.random(5,10));v.add(E.world,e)}}()}}}function J(e){const{ref:t}=M();return Object(c.jsx)("canvas",{ref:t,className:e.class,style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}})}b.use(f);i(24);var P=function(){const{addAttractor:e}=M();return Object(n.useEffect)((()=>{e()}),[]),[Object(c.jsx)(J,{className:"attractor"}),Object(c.jsxs)("div",{className:"hero",children:[Object(c.jsx)("span",{className:"hero-first-line",children:"Jenish"}),Object(c.jsx)("span",{className:"hero-box",children:"Jain"})]})]};function I(e){let{wrapperClass:t="",imageClass:i="",alt:n,publicId:s,width:o,height:a,transformations:r=[]}=e;const l=["q_auto","f_auto","c_fill","w_".concat(o),"h_".concat(a),...r].join(","),d="".concat("https://res.cloudinary.com/jenishjain/image/upload/","/").concat(l,"/").concat(s);return Object(c.jsx)("div",{className:t,style:{height:0,maxWidth:"100%",paddingBottom:"".concat(a/o*100,"%"),position:"relative",width:"".concat(o,"px")},children:Object(c.jsx)("img",{loading:"lazy",src:d,alt:n,className:i,height:a,width:o,style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}})})}const R={};function B(e,t){let{soundEnabled:i}=t;if(!i)return[()=>{}];try{if(R[e])return[()=>R[e].play()];{const t=new Audio(e);return R[e]=t,[()=>R[e].play()]}}catch(n){return[()=>{}]}}function z(e){let{children:t,handleClick:i,hoverSound:n=(()=>{}),clickSound:s=(()=>{}),forceSoundEnabled:o=!1,...a}=e;return Object(c.jsx)("button",{className:a.class,onKeyPress:e=>{"Enter"===e.key&&(i(e),s({forceSoundEnabled:o}))},onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),i(e),s({forceSoundEnabled:o})},onMouseEnter:n,onFocus:n,...a,children:t})}i(25);const A=[{publicId:"v1700920184/portfolio/images/jenishjain-with-chopsticks",alt:"Jenish Jain smiling",caption:"This is Jenish\u2019s most common profile photo right now.",width:300,height:400},{publicId:"v1640535281/portfolio/images/jenish-jain-take-a-break",alt:"Jenish Jain chiling at Goa.",caption:"Once in a while Jenish likes to take a break from work",width:300,height:400},{publicId:"v1700919977/portfolio/images/jenish-on-a-horse",alt:"Jenish On a horse ",caption:"A snap from his most recent vacation",width:300,height:400}];function D(e){let{photo:t,handleClick:i}=e;const{playClick:n,playPop:s}=function(){const{soundEnabled:e}={darkMode:!1,toggleDarkMode:!1,soundEnabled:!0,toggleSound:!1},[t]=B("https://res.cloudinary.com/jenishjain/video/upload/v1638096412/portfolio/audio/boop.mp3",{soundEnabled:e,volume:.5}),[i]=B("https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/pop.mp3",{soundEnabled:e,volume:.5}),[n]=B("https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/click.mp3",{soundEnabled:e,volume:.5}),[s]=B("https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/airhorn.mp3",{soundEnabled:e,volume:.5,interrupt:!0}),[o]=B("https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/power-up.mp3",{soundEnabled:e,volume:.5}),[a]=B("https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395253/jason.af/sfx/power-down.mp3",{soundEnabled:e,volume:.5}),[c]=B("https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1593395252/jason.af/sfx/hooray.mp3",{soundEnabled:e,volume:.5});return{playAirhorn:s,playBoop:t,playClick:n,playHooray:c,playPop:i,playPowerUp:o,playPowerDown:a}}();return Object(c.jsx)("li",{className:"gallery-thumb",children:Object(c.jsx)(z,{className:"gallery-thumb-link",hoverSound:s,clickSound:n,handleClick:i,children:Object(c.jsx)(I,{publicId:t.publicId,alt:t.alt,width:50,height:50,transformations:["g_faces","c_thumb"]})})})}function T(e){const[t,i]=Object(n.useState)(A[0]);return Object(c.jsxs)("div",{className:e.class,children:[Object(c.jsxs)("figure",{className:"gallery-image",children:[Object(c.jsx)(I,{publicId:t.publicId,alt:t.alt,width:400,height:400,transformations:["g_faces","c_fill"]}),Object(c.jsxs)("figcaption",{children:[t.caption,Object(c.jsxs)("div",{className:"gallery-links",children:[Object(c.jsx)("a",{className:"gallery-fullsize-link",target:"_blank",rel:"noopener noreferrer",href:"https://res.cloudinary.com/jenishjain/image/upload/".concat(t.publicId,".jpg"),children:"open full size"}),t.credit?Object(c.jsxs)("span",{className:"gallery-credit",children:["Photo: ",Object(c.jsx)("a",{href:t.creditLink,children:t.credit})]}):""]})]})]}),Object(c.jsxs)("div",{className:"gallery-options",children:[Object(c.jsx)("h2",{className:"gallery-heading",children:"You can use any of these photos with credit:"}),Object(c.jsx)("ul",{className:"gallery-thumbnails",children:A.map(((e,n)=>Object(c.jsx)(D,{photo:e,isCurrent:t.publicId===e.publicId,handleClick:()=>{i(e)}},"photo-".concat(n))))})]})]})}i(26);function H(){return Object(c.jsxs)("div",{className:"bio",children:[Object(c.jsx)("strong",{children:"Jenish Jain "}),Object(c.jsxs)("span",{children:["is a Senior Product Engineer on the Pricing team at"," ",Object(c.jsx)("a",{href:"https://rapido.bike/",children:"Rapido"}),"."]}),Object(c.jsx)("span",{children:"\xa0There, he tackles the challenge of building products that dynamically adjust marketplace pricing based on real-time business needs."}),Object(c.jsxs)("span",{children:["\xa0Passionate about sharing knowledge, Jenish enjoys expressing his ideas and experiences through"," ",Object(c.jsx)("a",{href:"https://blog.jenishjain.in",children:"blog posts"}),"."]}),"\xa0 When he's not immersed in the world of product development, Jenish unleashes his creative side by drawing"," ",Object(c.jsx)("a",{href:"https://www.instagram.com/p/BsBp5eDB1UK4ktjQDzdh9bhEyWWcbLf1Ulddww0/",children:"cartoons"}),". He also enjoys unwinding with a good movie stream. He lives in"," ",Object(c.jsx)("a",{href:"https://goo.gl/maps/YwjhHvZvzX3je9Q7A",children:"Surat"}),", Gujarat."]})}var W=function(){return Object(c.jsxs)("section",{className:"bio-container",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"bio-heading",children:"Who is He?"}),Object(c.jsx)(H,{}),Object(c.jsxs)("div",{className:"bio-social",children:[Object(c.jsx)("h2",{className:"bio-connect",children:"Connect With Jenish:"}),Object(c.jsx)("ul",{className:"bio-profiles",children:[{id:"linkedin",svg:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 240 240",width:"150",children:[Object(c.jsx)("defs",{}),Object(c.jsx)("g",{clipPath:"url(#clip0)",children:Object(c.jsx)("path",{fill:"#6B6971",fillRule:"evenodd",d:"M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z",clipRule:"evenodd"})})]}),src:"/images/linkedin.svg",link:"https://www.linkedin.com/in/jenish-jain/",label:"Linkedin"},{id:"github",svg:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 80 80",children:[Object(c.jsx)("defs",{}),Object(c.jsx)("g",{clipPath:"url(#clip0)",children:Object(c.jsx)("path",{fill:"#6B6971",fillRule:"evenodd",d:"M40.5 0C18.4 0 .5 17.9.5 40c0 17.68 11.467 32.658 27.354 37.962 1.99.368 2.726-.86 2.726-1.94 0-.958-.025-3.462-.05-6.802-11.123 2.407-13.48-5.353-13.48-5.353C15.233 59.251 12.606 58 12.606 58c-3.635-2.48.27-2.431.27-2.431 4.002.294 6.138 4.125 6.138 4.125 3.56 6.114 9.356 4.346 11.64 3.315.368-2.578 1.4-4.346 2.529-5.353-8.865-.982-18.196-4.42-18.196-19.742 0-4.371 1.547-7.931 4.126-10.73-.418-1.032-1.793-5.084.368-10.584 0 0 3.364-1.08 11 4.1 3.193-.883 6.606-1.325 10.019-1.35 3.389.025 6.826.467 10.018 1.35 7.637-5.18 11.001-4.1 11.001-4.1 2.185 5.5.81 9.577.393 10.583 2.554 2.8 4.1 6.36 4.1 10.73 0 15.372-9.355 18.736-18.268 19.743 1.424 1.228 2.725 3.683 2.725 7.416 0 5.353-.049 9.65-.049 10.976 0 1.08.712 2.308 2.75 1.915C69.057 72.658 80.5 57.68 80.5 40.024 80.5 17.902 62.6 0 40.5 0z",clipRule:"evenodd"})})]}),src:"/images/github.svg",link:"https://github.com/jenish-jain",label:"GitHub"},{id:"instagram",svg:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 100 100",width:"60",children:[Object(c.jsx)("defs",{}),Object(c.jsx)("g",{clipPath:"url(#clip0)",children:Object(c.jsx)("path",{fill:"#6B6971",fillRule:"evenodd",d:"M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z",clipRule:"evenodd"})})]}),src:"/images/instagram.svg",link:"https://www.instagram.com/jenishjain6/",label:"Instagram"},{id:"twitter",svg:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 80 80",children:[Object(c.jsx)("defs",{}),Object(c.jsx)("path",{fill:"#6B6971",d:"M25.158 72.502c30.19 0 46.701-25.011 46.701-46.7 0-.711 0-1.418-.048-2.122A33.396 33.396 0 0080 15.184a32.762 32.762 0 01-9.427 2.582 16.47 16.47 0 007.216-9.078 32.895 32.895 0 01-10.423 3.984 16.429 16.429 0 00-27.97 14.97 46.6 46.6 0 01-33.828-17.15 16.426 16.426 0 005.082 21.91A16.292 16.292 0 013.2 30.35v.207a16.419 16.419 0 0013.168 16.09 16.388 16.388 0 01-7.411.282A16.432 16.432 0 0024.29 58.326 32.934 32.934 0 010 65.13a46.467 46.467 0 0025.158 7.36"})]}),src:"/images/twitter.svg",link:"https://twitter.com/jenishjain6",label:"Twitter"}].map((e=>Object(c.jsx)("li",{className:"bio-profile",children:Object(c.jsxs)("a",{href:e.link,className:"bio-link",onMouseDown:e=>{e.stopPropagation()},onKeyDown:e=>{"Enter"===e.key&&e.stopPropagation()},children:[e.svg,Object(c.jsx)("span",{className:"visually-hidden",children:e.label})]},e.id)},e.id)))})]})]}),Object(c.jsx)(T,{className:"bio-image-container"})]})};i(27);var L=[{title:"Layman\u2019s guide to Kafka",description:"A kick starter blog for someone who wish to know about one of the best event streaming solution available in industry",image:"https://res.cloudinary.com/jenishjain/image/upload/v1640938669/portfolio/blog-assets/laymans-guide-to-kafka-cover.jpg",url:"https://medium.com/@jenishjain6/laymans-guide-to-kafka-203089f1dbd0",featured:!0,site:"medium"},{title:"My internship experience at Rapido",description:"Everything about my experience as an intern with rapido :)",image:"https://res.cloudinary.com/jenishjain/image/upload/v1640938458/portfolio/blog-assets/internship-experience-cover.png",url:"https://medium.com/rapido-labs/my-internship-experience-at-rapido-91a141116090",featured:!0,site:"rapidolabs"},{title:"Automating GST reporting for my father using Cloud Run",description:"My journey to create an automated tax reporting tool to save a sunday for me and my father",image:"https://res.cloudinary.com/jenishjain/image/upload/v1701582547/portfolio/blog-assets/bean_counter.jpg",url:"https://medium.com/@jenishjain6/how-i-automated-tax-reporting-for-my-father-b4db1edbcbd2",featured:!0,site:"medium"},{title:"How did i convert my PDFs to audiobooks",description:"This fun guide shows you how to build your own audiobook factory using Google Cloud",image:"https://res.cloudinary.com/jenishjain/image/upload/v1712392347/portfolio/blog-assets/pdf-to-audiobook-factory.jpg",url:"https://medium.com/@jenishjain6/from-pdfs-to-speech-my-diy-audiobook-factory-fcf12df311fe",featured:!0,site:"medium"}],q=(i(28),i(5));var F=function(e){let{posts:t}=e;const[i,s]=Object(n.useState)(1);return Object(n.useEffect)((()=>{s(Math.min(4,Math.floor((.9*window.innerWidth+48)/298)))}),[]),Object(c.jsx)("div",{className:"post-previews",children:t.map(((e,t)=>Object(c.jsxs)("div",{className:"post-preview",children:[e.site&&Object(c.jsxs)("p",{className:"post-preview-site",children:[Object(c.jsx)("img",{src:"https://res.cloudinary.com/jenishjain/image/fetch/w_32,h_32,c_fill,g_face,q_auto,f_auto/".concat(q.sitesInfo[e.site].icon),alt:q.sitesInfo[e.site].name,loading:"lazy",height:16,width:16}),q.sitesInfo[e.site].name]}),t<i&&Object(c.jsx)("img",{src:e.image.match(/^https:\/\/res.cloudinary/)?e.thumb||e.image:"https://res.cloudinary.com/jenishjain/image/fetch/w_500,h_250,c_fill,g_face,q_auto,f_auto/".concat(e.image),alt:"",className:"post-preview-image",loading:"lazy",width:"drawings_jenishjain_in"===e.site?125:250,height:"drawings_jenishjain_in"===e.site?250:125}),Object(c.jsx)("h3",{className:"post-preview-title",children:Object(c.jsx)("a",{href:e.url||"/".concat(e.slug),className:"post-preview-title-link",children:e.title})}),Object(c.jsx)("p",{className:"post-preview-description",children:e.description}),Object(c.jsx)("span",{"aria-hidden":"true",className:"post-preview-link",children:"See this post \u2192"})]},"featured-post-".concat(t))))})};i(29);const G=e=>{let{children:t,post:i,...n}=e;return i?Object(c.jsx)("h1",{...n,children:t}):Object(c.jsx)("h2",{...n,children:t})};var K=function(e){let{headline:t,children:i,post:n=!1}=e;return[Object(c.jsxs)("div",{className:"intro",children:[Object(c.jsx)(G,{className:"intro-headline",post:n,children:t}),Object(c.jsx)("div",{className:"intro-lede",children:i})]})]};var U=function(){const e=L.filter((e=>e.featured));return Object(c.jsxs)("section",{className:"writing",children:[Object(c.jsx)(K,{headline:"Some of Jenish\u2019s Posts.",children:Object(c.jsxs)("p",{children:["Jenish likes to share his experiences and knowledge in form of ",Object(c.jsx)("a",{href:"https://blog.jenishjain.in",children:"blogs"}),", He is not a regular contributor but here are few of his writings."]})}),Object(c.jsx)("div",{children:Object(c.jsx)(F,{posts:e})}),Object(c.jsxs)("a",{href:"https://blog.jenishjain.in/posts",className:"writing-button",children:["see all posts"," "]})]})};i(30);var V=[{title:"Whimsical pen holding girl",description:"girl holding pen between lips and nose",image:"https://res.cloudinary.com/jenishjain/image/upload/v1740302113/drawings/whimsical_pen_hold_girl.jpg",url:"https://drawings.jenishjain.in/whimsical-pen-hold-girl/",featured:!0,site:"drawings_jenishjain_in"},{title:"Sick Men",description:"sick and bored men",image:"https://res.cloudinary.com/jenishjain/image/upload/v1740302114/drawings/sick_men.jpg",url:"https://drawings.jenishjain.in/sick-men/",featured:!0,site:"drawings_jenishjain_in"}];var Q=function(){const e=V.filter((e=>e.featured));return Object(c.jsxs)("section",{className:"sketches",children:[Object(c.jsx)(K,{headline:"And yes, I draw sometimes too.",children:Object(c.jsxs)("p",{children:["Jenish is creative by heart, he ocassionally shares his drawings ",Object(c.jsx)("a",{href:"https://drawings.jenishjain.in/posts/",children:"here"})]})}),Object(c.jsx)("div",{children:Object(c.jsx)(F,{posts:e})}),Object(c.jsxs)("a",{href:"https://drawings.jenishjain.in/posts",className:"writing-button",children:["see all drawings"," "]})]})};var Y=function(){return[Object(c.jsx)(u,{}),Object(c.jsxs)(j,{children:[Object(c.jsx)(m,{color:"dirty-white",children:Object(c.jsx)(P,{})}),Object(c.jsx)(m,{id:"bio",children:Object(c.jsx)(W,{})}),Object(c.jsx)(m,{id:"writings",color:"yellow",children:Object(c.jsx)(U,{})}),Object(c.jsx)(m,{id:"sketches",color:"dirty-white",children:Object(c.jsx)(Q,{})})]})]};var X=e=>{e&&e instanceof Function&&i.e(3).then(i.bind(null,32)).then((t=>{let{getCLS:i,getFID:n,getFCP:s,getLCP:o,getTTFB:a}=t;i(e),n(e),s(e),o(e),a(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(Y,{})}),document.getElementById("root")),X()}],[[31,1,2]]]);
//# sourceMappingURL=main.b653e8a8.chunk.js.map