(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{234:function(e,t,n){},236:function(e,t,n){},251:function(e,t){},260:function(e,t){},278:function(e,t){},280:function(e,t){},299:function(e,t){},300:function(e,t){},363:function(e,t){},365:function(e,t){},398:function(e,t){},400:function(e,t){},401:function(e,t){},406:function(e,t){},408:function(e,t){},414:function(e,t){},416:function(e,t){},429:function(e,t){},441:function(e,t){},444:function(e,t){},449:function(e,t){},457:function(e,t){},466:function(e,t){},468:function(e,t){},537:function(e,t,n){},538:function(e,t,n){},539:function(e,t,n){},540:function(e,t,n){},541:function(e,t,n){},542:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(88),s=n.n(a),r=(n(234),n(0));function o(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"title",children:" 1 of 1 INFANTS "}),Object(r.jsx)("section",{className:"carousel","aria-label":"Gallery",children:Object(r.jsxs)("ol",{className:"carousel__viewport",children:[Object(r.jsx)("li",{id:"carousel__slide1",tabindex:"0",className:"carousel__slide",children:Object(r.jsxs)("div",{className:"carousel__snapper",children:[Object(r.jsx)("a",{href:"#carousel__slide4",className:"carousel__prev",children:"Go to last slide"}),Object(r.jsx)("a",{href:"#carousel__slide2",className:"carousel__next",children:"Go to next slide"})]})}),Object(r.jsxs)("li",{id:"carousel__slide2",tabindex:"0",className:"carousel__slide",children:[Object(r.jsx)("div",{className:"carousel__snapper"}),Object(r.jsx)("a",{href:"#carousel__slide1",className:"carousel__prev",children:"Go to previous slide"}),Object(r.jsx)("a",{href:"#carousel__slide3",className:"carousel__next",children:"Go to next slide"})]}),Object(r.jsxs)("li",{id:"carousel__slide3",tabindex:"0",className:"carousel__slide",children:[Object(r.jsx)("div",{className:"carousel__snapper"}),Object(r.jsx)("a",{href:"#carousel__slide2",className:"carousel__prev",children:"Go to previous slide"}),Object(r.jsx)("a",{href:"#carousel__slide4",className:"carousel__next",children:"Go to next slide"})]}),Object(r.jsxs)("li",{id:"carousel__slide4",tabindex:"0",className:"carousel__slide",children:[Object(r.jsx)("div",{className:"carousel__snapper"}),Object(r.jsx)("a",{href:"#carousel__slide3",className:"carousel__prev",children:"Go to previous slide"}),Object(r.jsx)("a",{href:"#carousel__slide1",className:"carousel__next",children:"Go to first slide"})]})]})})]})}var i=n(548),l=(n(236),function(e){var t=e.bgcolor,n=e.progress,c={height:e.height,width:"90%",backgroundColor:"whitesmoke",borderRadius:40,margin:10},a={height:"100%",width:"".concat(n,"%"),backgroundColor:t,borderRadius:40,textAlign:"right"};return Object(r.jsx)("div",{style:c,children:Object(r.jsx)("div",{style:a,children:Object(r.jsx)("span",{style:{padding:10,color:"black",fontWeight:900},children:"".concat(n,"%")})})})});function u(){return Object(r.jsxs)("div",{className:"roadMapContainer",children:[Object(r.jsx)(i.a,{className:"roadMapBG2",children:Object(r.jsx)("div",{className:"Carousel",children:Object(r.jsx)(o,{})})}),Object(r.jsx)(i.a,{className:"roadMapBG",children:Object(r.jsxs)("div",{className:"progress",children:[Object(r.jsx)("h1",{className:"heading",children:"ROAD MAP!"}),Object(r.jsx)("br",{}),Object(r.jsx)("h2",{className:"roadMapText",children:" STAGE 1: LEGACY COLLECTION"}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{className:"roadMapText",children:"300 Pre Minted Infants that will act as EXCLUSIVE all access passes for future drops!"}),Object(r.jsx)(l,{bgcolor:"orange",color:"white",progress:"100",height:30}),Object(r.jsx)("p",{className:"roadMapText",children:"Social Media and Marketing Campaign"}),Object(r.jsx)(l,{bgcolor:"red",progress:"100",height:30}),Object(r.jsx)("p",{className:"roadMapText",children:"Website Launch and Minting Begin!"}),Object(r.jsx)(l,{bgcolor:"yellow",progress:"100",height:30}),Object(r.jsx)("p",{className:"roadMapText",children:"Donation Event With Children's Miracle network"}),Object(r.jsx)(l,{bgcolor:"#99ff66",progress:"10",height:30}),Object(r.jsx)("p",{className:"roadMapText",children:"Release Of The Immature Pets Club!"}),Object(r.jsx)(l,{bgcolor:"#ff00ff",progress:"0",height:30}),Object(r.jsx)("p",{className:"roadMapText",children:"The Rest Of The Infants Will Be Released!"}),Object(r.jsx)(l,{bgcolor:"#99ccff",progress:"0",height:30}),Object(r.jsx)("p",{className:"roadMapText",children:"Coloring Books To Be Released!"}),Object(r.jsx)(l,{bgcolor:"#99ccff",progress:"0",height:30}),Object(r.jsx)("p",{className:"roadMapText",children:" BABY BOTTLE SERUM "}),Object(r.jsx)(l,{bgcolor:"blue",progress:"0",height:30})]})})]})}var j=n(15),d=n.n(j),h=n(46),b=n(33),O=n(61),f=n(71),p=n.n(f),m=n(226),x=n.n(m),N=n(72),g=n(227),_=n(7),C={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(_.a)(Object(_.a)({},C),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(_.a)(Object(_.a)({},C),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(_.a)(Object(_.a)({},e),{},{account:t.payload.account});default:return e}},E={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(_.a)(Object(_.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(_.a)(Object(_.a)({},E),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},A=Object(N.b)({blockchain:T,data:v}),S=[g.a],y=Object(N.c)(N.a.apply(void 0,S)),M=Object(N.d)(A,y),w=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},I=function(){return function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,M.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(w("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},k=function(e){return{type:"CONNECTION_FAILED",payload:e}},R=function(e){return function(){var t=Object(h.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(I());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};n(537);function L(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("a",{href:"https://twitter.com/Immatureinfants",class:"fa fa-twitter2"}),Object(r.jsx)("a",{href:"https://www.instagram.com/theimmatureinfantsclub/",class:"fa fa-instagram2"}),Object(r.jsx)("a",{href:"https://discord.gg/3gdM5mZHmB",class:"fa fa-discord"}),Object(r.jsx)("a",{href:"https://opensea.io/collection/the-immature-infants-club-official",class:"fa fa-opensea"})]})}n(538);var D=n(546),U=n(547),G=n(549);var B=function(){var e,t,n=Object(O.b)(),a=Object(O.c)((function(e){return e.blockchain})),s=Object(O.c)((function(e){return e.data})),o=Object(c.useState)(!1),l=Object(b.a)(o,2),u=l[0],j=l[1],f=Object(c.useState)("Click buy to mint your NFT."),m=Object(b.a)(f,2),N=m[0],g=m[1],_=Object(c.useState)(1),C=Object(b.a)(_,2),T=C[0],E=C[1],v=Object(c.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),A=Object(b.a)(v,2),S=A[0],y=A[1],M=function(){""!==a.account&&null!==a.smartContract&&n(I(a.account))},w=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,y(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){w()}),[]),Object(c.useEffect)((function(){M()}),[a.account]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"nftData",children:[Object(r.jsx)(D.a,{src:"/config/images/bg3.png",className:"logo"}),Object(r.jsxs)(i.a,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(L,{})}),Object(r.jsx)(U.a,{className:"mintNumber",children:"MINT COUNT:"}),Object(r.jsx)("br",{}),Object(r.jsxs)(U.a,{className:"mintNumber",children:[s.totalSupply," / ",S.MAX_SUPPLY]}),Object(r.jsx)("p",{className:"mintNumber3",children:Object(r.jsx)("a",{target:"_blank",href:S.SCAN_LINK,children:(e=S.CONTRACT_ADDRESS,t=15,e.length>t?"".concat(e.substring(0,t),"..."):e)})}),Number(s.totalSupply)>=S.MAX_SUPPLY?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"The sale has ended."}),Object(r.jsxs)("p",{children:["You can still find ",S.NFT_NAME," on"]}),Object(r.jsx)("a",{target:"_blank",href:S.MARKETPLACE_LINK,children:S.MARKETPLACE})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(U.a,{className:"mintNumber",children:["1 ",S.SYMBOL," costs ",S.DISFormTextLAY_COST,"6 ",S.NETWORK.SYMBOL]}),Object(r.jsx)("br",{}),Object(r.jsx)(U.a,{className:"mintNumber2",children:"Excluding gas fees."}),Object(r.jsx)("br",{}),Object(r.jsx)(U.a,{className:"mintNumber5",children:"DUE TO NETWORK ISSUES PLEASE SET PRIORITY TO MEDIUM OR HIGH FOR MINTING"}),Object(r.jsx)("br",{}),""===a.account||null===a.smartContract?Object(r.jsxs)("div",{children:[Object(r.jsxs)(U.a,{className:"mintNumber2",children:["Connect to the ",S.NETWORK.NAME," network"]}),Object(r.jsx)("br",{}),Object(r.jsx)(G.a,{className:"mintButton",variant:"primary",onClick:function(e){e.preventDefault(),n(function(){var e=Object(h.a)(d.a.mark((function e(t){var n,c,a,s,r,o,i,l,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=e.sent,e.next=12,a.json();case 12:if(s=e.sent,r=window,!(o=r.ethereum)||!o.isMetaMask){e.next=33;break}return p.a.setProvider(o),i=new x.a(o),e.prev=18,e.next=21,o.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,o.request({method:"net_version"});case 24:e.sent==s.NETWORK.ID?(u=new p.a(c,s.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:i}}),o.on("accountsChanged",(function(e){t(R(e[0]))})),o.on("chainChanged",(function(){window.location.reload()}))):t(k("Change network to ".concat(s.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(k("Something went wrong."));case 31:e.next=34;break;case 33:t(k("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),M()},children:"CONNECT YOUR WALLET"}),""!==a.errorMsg?Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("p",{children:a.errorMsg})}):null]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(U.a,{children:N}),Object(r.jsxs)("div",{children:[Object(r.jsx)(G.a,{className:"mintButton2",disabled:u?1:0,onClick:function(e){e.preventDefault(),function(){var e=T+1;e>10&&(e=10),E(e)}()},children:"+"}),Object(r.jsx)("p",{children:T}),Object(r.jsx)(G.a,{className:"mintButton2",disabled:u?1:0,onClick:function(e){e.preventDefault(),function(){var e=T-1;e<1&&(e=1),E(e)}()},children:"-"})]}),Object(r.jsx)("div",{children:Object(r.jsx)(G.a,{className:"mintButton",disabled:u?1:0,onClick:function(e){e.preventDefault(),function(){var e=S.WEI_COST,t=S.GAS_LIMIT,c=String(e*T),s=String(t*T);console.log("Cost: ",c),console.log("Gas limit: ",s),g("Minting your ".concat(S.NFT_NAME,"...")),j(!0),a.smartContract.methods.mint(T).send({gasLimit:String(s),to:S.CONTRACT_ADDRESS,from:a.account,value:c}).once("error",(function(e){console.log(e),g("Sorry, something went wrong please try again later."),j(!1)})).then((function(e){console.log(e),g("Welcome to the club! the ".concat(S.NFT_NAME," is yours! go visit Opensea.io to view it.")),j(!1),n(I(a.account))}))}(),M()},children:u?"INCUBATING INFANT":"MINT"})})]})]})]})]}),Object(r.jsxs)(i.a,{className:"polyInfo",children:[Object(r.jsxs)(U.a,{className:"mintNumber3",children:["Please make sure you are connected to the right network (",S.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(r.jsxs)("p",{className:"mintNumber3",children:["We have set the gas limit to ",S.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]}),Object(r.jsx)("br",{}),Object(r.jsx)(U.a,{className:"mintNumber4",children:"The Immature Infants Club\xa9"})]})]})};n(539);n(540);function K(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"nftData",children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("h1",{children:" Our Goal "}),Object(r.jsx)(U.a,{children:"Our goal with The IIC is create an ongoing community driven story arch that will span from collection to collection! With a rich lore and storyline we can take our infants ANYWHERE! We are committed to our community and doing things naturally! We want our growth to be real and genuine! The main purpose of The IIC is not only to foster an AMAZING community but to also give back to those in need! 10% of each phase sales will go to The Children's Miracle Network, that works directly with Children's Hospitals!"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)(i.a,{className:"charityInfo1",children:[Object(r.jsx)("h1",{children:"\ud83d\udcd3 COLORING BOOKS \ud83d\udcd3"}),Object(r.jsx)("p",{children:"With such a rich backstory and almost unlimited amount of characters to choose from we will be creating our very own IMMATURE INFANT COLORING BOOKS! - They will be made from YOUR infants and aside from each token holder receiving a book we will be donating 1 book for each holder to the Children's Hospital where we will personally hand them out to kids! - We will release a book for each of our future collections!"})]})]})})}function W(){return Object(r.jsxs)("div",{className:"appContainer",children:[Object(r.jsx)(K,{}),Object(r.jsx)(B,{}),Object(r.jsx)(u,{})]})}var F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,550)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(541);s.a.render(Object(r.jsx)(O.a,{store:M,children:Object(r.jsx)(W,{})}),document.getElementById("root")),F()}},[[542,1,2]]]);
//# sourceMappingURL=main.8b1238ac.chunk.js.map