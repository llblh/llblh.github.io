"use strict";(self.webpackChunkuefa_data_admin=self.webpackChunkuefa_data_admin||[]).push([[749],{3749:(ct,v,r)=>{r.r(v),r.d(v,{UsersModule:()=>pt});var F=r(1679),g=r(7910),t=r(4650),_=r(4354),u=r(9804),f=r(8599),z=r(2480);const O=function(){return{front:!0,total:!0}};let P=(()=>{class e{constructor(){this.interactionData={loading:!1,listData:{},columns:[{title:"\u65e5\u671f",index:"day"},{title:"\u89c6\u9891\u70b9\u8d5e",index:"video_like"},{title:"\u65b0\u95fb\u70b9\u8d5e",index:"news_like"},{title:"\u53c2\u4e0e\u6295\u7968",index:"vote"},{title:"\u652f\u6301\u7403\u961f",index:"club"},{title:"\u53c2\u4e0e\u62bd\u5956",index:"luck_draw"},{title:"\u53c2\u4e0e\u5151\u6362",index:"exchange"}],list:[]}}ngOnInit(){console.log("html5")}onInteractionChange(a){const n={},i={},s={},l={},h={},d={},p=[];for(let D=a[0];D<a[1];D+=86400){const c=(0,g.Z)(1e3*D,"yyyy-MM-dd"),ut={day:c,video_like:Math.floor(100*Math.random())+1,news_like:Math.floor(80*Math.random())+2,vote:Math.floor(70*Math.random())+2,club:Math.floor(10*Math.random())+3,luck_draw:Math.floor(10*Math.random())+3,exchange:Math.floor(10*Math.random())+3};n[c]=Math.floor(1e3*Math.random()),i[c]=Math.floor(1e3*Math.random()),s[c]=Math.floor(1e3*Math.random()),l[c]=Math.floor(1e3*Math.random()),h[c]=Math.floor(1e3*Math.random()),d[c]=Math.floor(1e3*Math.random()),p.push(ut)}this.interactionData.listData={\u70b9\u8d5e\u89c6\u9891:n,\u70b9\u8d5e\u65b0\u95fb:i,\u53c2\u4e0e\u6295\u7968:s,\u652f\u6301\u7403\u961f:l,\u53c2\u4e0e\u62bd\u5956:h,\u53c2\u4e0e\u5151\u6362:d},this.interactionData.list=p}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-users-engagement"]],decls:5,vars:11,consts:[["title","\u4e92\u52a8\u91cf",3,"show-import","date-ranges","date-change"],[3,"loading","data"],[1,"mt-xl",3,"data","columns","pi","ps","page","loading"],["st",""]],template:function(a,n){1&a&&(t._UZ(0,"page-header"),t.TgZ(1,"app-card",0),t.NdJ("date-change",function(s){return n.onInteractionChange(s)}),t._UZ(2,"g2-line",1)(3,"st",2,3),t.qZA()),2&a&&(t.xp6(1),t.Q6J("show-import",!0)("date-ranges",!1),t.xp6(1),t.Q6J("loading",n.interactionData.loading)("data",n.interactionData.listData),t.xp6(1),t.Q6J("data",n.interactionData.list)("columns",n.interactionData.columns)("pi",1)("ps",10)("page",t.DdM(10,O))("loading",n.interactionData.loading))},dependencies:[_.q,u.A5,f.A,z.Z],encapsulation:2,changeDetection:0}),e})();var m=r(6895),y=r(3679),M=r(7044),J=r(4383),T=r(1971),x=r(7570),U=r(1102),A=r(8800),N=r(4511),L=r(7859),j=r(2410);function B(e,o){if(1&e&&(t.TgZ(0,"h4",21),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const a=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,a.total,"1.0-1"))}}const E=function(e){return{width:e}};function $(e,o){if(1&e&&(t.TgZ(0,"div",15),t._UZ(1,"img",16),t.ALo(2,"publicurl"),t.TgZ(3,"div")(4,"span",17),t._uU(5),t.qZA(),t._UZ(6,"i",18),t.qZA(),t.YNc(7,B,3,4,"h4",19),t.TgZ(8,"p",20),t._uU(9),t.ALo(10,"percentage"),t.qZA()()),2&e){const a=o.$implicit,n=t.oxw();t.Q6J("ngStyle",t.VKq(10,E,100/n.userPrifileData.data.length+"%")),t.xp6(1),t.Q6J("src",t.lcZ(2,6,a.icon),t.LSH),t.xp6(4),t.Oqu(a.title),t.xp6(1),t.Q6J("nzTooltipTitle",a.tooltip),t.xp6(1),t.Q6J("ngIf","time"!==a.unit),t.xp6(2),t.Oqu(t.lcZ(10,8,a.total/n.userTotal))}}function Y(e,o){if(1&e&&(t._UZ(0,"nz-avatar",22),t.TgZ(1,"span"),t._uU(2),t.qZA()),2&e){const a=o.$implicit;t.Q6J("nzSrc",a.icon),t.xp6(2),t.Oqu(a.name||"unknown")}}function I(e,o){if(1&e&&(t._UZ(0,"nz-avatar",22),t.TgZ(1,"span"),t._uU(2),t.qZA()),2&e){const a=o.$implicit;t.Q6J("nzSrc",a.icon),t.xp6(2),t.Oqu(a.name||"unknown")}}const Z=function(){return{front:!0,total:!0}};let b=(()=>{class e{constructor(){this.userTotal=Math.floor(100*Math.random())+2e4,this.userPrifileData={loading:!1,data:[{title:"\u59d3\u540d",tooltip:"\u6307\u793a\u8bf4\u660e",total:Math.floor(100*Math.random())+1e4,icon:"/assets/UserProfile/name.svg"},{title:"\u6027\u522b",tooltip:"\u6307\u793a\u8bf4\u660e",total:Math.floor(100*Math.random())+1e4,icon:"/assets/UserProfile/gender.svg"},{title:"\u624b\u673a",tooltip:"\u6307\u793a\u8bf4\u660e",total:Math.floor(100*Math.random())+1e4,icon:"/assets/UserProfile/phone.svg"},{title:"\u751f\u65e5",tooltip:"\u6307\u793a\u8bf4\u660e",total:Math.floor(100*Math.random())+1e4,icon:"/assets/UserProfile/birthday.svg"},{title:"\u90ae\u7bb1",tooltip:"\u6307\u793a\u8bf4\u660e",total:Math.floor(100*Math.random())+1e4,icon:"/assets/UserProfile/email.svg"},{title:"\u57ce\u5e02",tooltip:"\u6307\u793a\u8bf4\u660e",total:Math.floor(100*Math.random())+1e4,icon:"/assets/UserProfile/city.svg"},{title:"\u5730\u5740",tooltip:"\u6307\u793a\u8bf4\u660e",total:Math.floor(100*Math.random())+1e4,icon:"/assets/UserProfile/location.svg"},{title:"\u559c\u6b22\u7403\u961f",tooltip:"\u6307\u793a\u8bf4\u660e",total:Math.floor(100*Math.random())+1e4,icon:"/assets/UserProfile/team.svg"},{title:"\u559c\u6b22\u7403\u5458",tooltip:"\u6307\u793a\u8bf4\u660e",total:Math.floor(100*Math.random())+1e4,icon:"/assets/UserProfile/player.svg"}]},this.userGenderData={loading:!1,listData:{}},this.userConstellationData={loading:!1,listData:{}},this.cityData={columns:[{title:"\u7701\u4efd",index:"name"},{title:"\u6ce8\u518c\u6570",index:"user_count"},{title:"\u5360\u6bd4",index:"rate"}],list:[{name:"Beijing",user_count:8217,rate:"16.1%"},{name:"Guangdong",user_count:7813,rate:"15.4%"},{name:"Jiangsu",user_count:3270,rate:"6.4%"},{name:"Zhejiang",user_count:3014,rate:"5.9%"},{name:"Shanghai",user_count:2861,rate:"5.6%"},{name:"Sichuan",user_count:2704,rate:"5.3%"},{name:"Guangxi",user_count:1755,rate:"3.4%"},{name:"Shandong",user_count:1749,rate:"3.4%"},{name:"Tianjin",user_count:1681,rate:"3.3%"},{name:"Henan",user_count:1512,rate:"3.0%"}]},this.favouriteClubsData={columns:[{title:"\u4ff1\u4e50\u90e8",index:"name",render:"name"},{title:"\u7c89\u4e1d\u6570",index:"user_count",width:120}],list:[{en_name:"Astana",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/2600605.png",id:2600605,name:"\u963f\u65af\u5854\u7eb3\u706b\u8f66\u5934",sub_count:7031,type:1},{en_name:"Barcelona",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/50080.png",id:50080,name:"\u5df4\u585e\u7f57\u90a3",sub_count:4706,type:1},{en_name:"Real Madrid",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/50051.png",id:50051,name:"\u7687\u5bb6\u9a6c\u5fb7\u91cc",sub_count:4520,type:1},{en_name:"Bayern",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/50037.png",id:50037,name:"\u62dc\u4ec1\u6155\u5c3c\u9ed1",sub_count:4413,type:1},{en_name:"Paris",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/52747.png",id:52747,name:"\u5df4\u9ece\u5723\u65e5\u8033\u66fc",sub_count:4215,type:1},{en_name:"Ajax",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/50143.png",id:50143,name:"\u963f\u8d3e\u514b\u65af",sub_count:4156,type:1},{en_name:"Man. United",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/52682.png",id:52682,name:"\u66fc\u8054",sub_count:4105,type:1},{en_name:"Olympiacos",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/2610.png",id:2610,name:"\u5965\u6797\u5339\u4e9a\u79d1\u65af",sub_count:4074,type:1},{en_name:"Omonoia",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/50077.png",id:50077,name:"\u5965\u83ab\u5c3c\u4e9a",sub_count:3825,type:1},{en_name:"Man City",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/52919.png",id:52919,name:"\u66fc\u57ce",sub_count:2945,type:1}]},this.favouritePlayerData={columns:[{title:"\u4ff1\u4e50\u90e8",index:"name",render:"name"},{title:"\u7c89\u4e1d\u6570",index:"user_count",width:120}],list:[{en_name:"Meirambek Kalmyrza",icon:"https://img.uefa.com/imgml/TP/players/1/2021/324x324/250135443.jpg",id:250135443,name:"Meirambek Kalmyrza",sub_count:2268,type:2},{en_name:"Sanzhar Shurakhanov",icon:"https://img.uefa.com/imgml/TP/players/1/2021/324x324/250135455.jpg",id:250135455,name:"Sanzhar Shurakhanov",sub_count:1623,type:2},{en_name:"Alikhan Umbitaliyev",icon:"https://img.uefa.com/imgml/TP/players/1/2021/324x324/250124601.jpg",id:250124601,name:"Alikhan Umbitaliyev",sub_count:1572,type:2},{en_name:"Lionel Messi",icon:"https://img.uefa.com/imgml/TP/players/1/2023/324x324/95803.jpg",id:95803,name:"\u91cc\u5965\u5185\u5c14\xb7\u6885\u897f",sub_count:1350,type:2},{en_name:"Charalambos Kyriakidis",icon:"https://img.uefa.com/imgml/TP/players/1/2022/324x324/250128983.jpg",id:250128983,name:"Charalambos Kyriakidis",sub_count:999,type:2},{en_name:"Ousseynou Ba",icon:"https://img.uefa.com/imgml/TP/players/1/2023/324x324/250132240.jpg",id:250132240,name:"\u4e4c\u8d5b\u8bfa\xb7\u5df4",sub_count:988,type:2},{en_name:"Antony",icon:"https://img.uefa.com/imgml/TP/players/1/2022/324x324/250144211.jpg",id:250144211,name:"\u5b89\u4e1c\u5c3c",sub_count:967,type:2},{en_name:"Samat Mazhit",icon:"https://img.uefa.com/imgml/TP/players/1/2021/324x324/250124617.jpg",id:250124617,name:"Samat Mazhit",sub_count:876,type:2},{en_name:"Kostas Tzolakis",icon:"https://img.uefa.com/imgml/TP/players/1/2023/324x324/250129408.jpg",id:250129408,name:"\u5eb7\u65af\u5854\u65af\xb7\u4f50\u62c9\u57fa\u65af",sub_count:830,type:2},{en_name:"Lisandro Mart\xednez",icon:"https://img.uefa.com/imgml/TP/players/1/2022/324x324/250132803.jpg",id:250132803,name:"\u5229\u6851\u5fb7\u7f57\xb7\u9a6c\u4e01\u5185\u65af",sub_count:826,type:2}]}}ngOnInit(){console.log("html5")}onUserProfileChange(){}onUserGenderChange(){console.log("first"),this.userGenderData.listData={\u7537\u6027:Math.floor(2e3*Math.random()),\u5973\u6027:Math.floor(2e3*Math.random()),\u5176\u5b83\u6027\u522b:Math.floor(2e3*Math.random())}}onUserConstellationChange(){this.userConstellationData.listData={\u767d\u7f8a\u5ea7:Math.floor(2e3*Math.random()),\u91d1\u725b\u5ea7:Math.floor(2e3*Math.random()),\u53cc\u5b50\u5ea7:Math.floor(2e3*Math.random()),\u5de8\u87f9\u5ea7:Math.floor(2e3*Math.random()),\u72ee\u5b50\u5ea7:Math.floor(2e3*Math.random()),\u5904\u5973\u5ea7:Math.floor(2e3*Math.random()),\u5929\u79f0\u5ea7:Math.floor(2e3*Math.random()),\u5929\u874e\u5ea7:Math.floor(2e3*Math.random()),\u5c04\u624b\u5ea7:Math.floor(2e3*Math.random()),\u6469\u7faf\u5ea7:Math.floor(2e3*Math.random()),\u6c34\u74f6\u5ea7:Math.floor(2e3*Math.random()),\u53cc\u9c7c\u5ea7:Math.floor(2e3*Math.random())}}onFavouriteClubsChange(){}onFavouritePlayerChange(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-users-profile"]],decls:25,vars:33,consts:[["title","Profile",3,"extra","date-change"],[3,"nzBorderless"],["ngFor","",3,"ngForOf"],["nz-row","","nzGutter","24"],["nz-col","","nzSpan","12"],["title","\u6027\u522b",3,"extra","date-change"],[3,"loading","data"],["title","\u661f\u5ea7",3,"extra","date-change"],["nz-col","","nzSpan","24"],["title","Locations",3,"extra","date-change"],[3,"data","columns","pi","ps","page","loading"],["st",""],["title","\u70ed\u95e8\u4ff1\u4e50\u90e8",3,"extra","date-change"],["st-row","name"],["title","\u70ed\u95e8\u7403\u5458",3,"extra","date-change"],["nz-card-grid","",1,"text-center",3,"ngStyle"],["alt","",1,"d-block",2,"margin","0 auto 10px","width","30px","height","30px",3,"src"],["nz-typography","","nzType","secondary"],["nz-tooltip","","nz-icon","","nzType","info-circle",2,"opacity","0.3",3,"nzTooltipTitle"],["class","mt-sm","nz-typography","",4,"ngIf"],[1,"m0"],["nz-typography","",1,"mt-sm"],["nzIcon","user",1,"mr-sm",3,"nzSrc"]],template:function(a,n){1&a&&(t._UZ(0,"page-header"),t.TgZ(1,"app-card",0),t.NdJ("date-change",function(){return n.onUserProfileChange()}),t.TgZ(2,"nz-card",1),t.YNc(3,$,11,12,"ng-template",2),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"app-card",5),t.NdJ("date-change",function(){return n.onUserGenderChange()}),t._UZ(7,"g2-donut",6),t.qZA()(),t.TgZ(8,"div",4)(9,"app-card",7),t.NdJ("date-change",function(){return n.onUserConstellationChange()}),t._UZ(10,"g2-donut",6),t.qZA()(),t.TgZ(11,"div",8)(12,"app-card",9),t.NdJ("date-change",function(){return n.onUserConstellationChange()}),t._UZ(13,"st",10,11),t.qZA()(),t.TgZ(15,"div",4)(16,"app-card",12),t.NdJ("date-change",function(){return n.onFavouriteClubsChange()}),t.TgZ(17,"st",10,11),t.YNc(19,Y,3,2,"ng-template",13),t.qZA()()(),t.TgZ(20,"div",4)(21,"app-card",14),t.NdJ("date-change",function(){return n.onFavouritePlayerChange()}),t.TgZ(22,"st",10,11),t.YNc(24,I,3,2,"ng-template",13),t.qZA()()()()),2&a&&(t.xp6(1),t.Q6J("extra",!1),t.xp6(1),t.Q6J("nzBorderless",!0),t.xp6(1),t.Q6J("ngForOf",n.userPrifileData.data),t.xp6(3),t.Q6J("extra",!1),t.xp6(1),t.Q6J("loading",n.userGenderData.loading)("data",n.userGenderData.listData),t.xp6(2),t.Q6J("extra",!1),t.xp6(1),t.Q6J("loading",n.userConstellationData.loading)("data",n.userConstellationData.listData),t.xp6(2),t.Q6J("extra",!1),t.xp6(1),t.Q6J("data",n.cityData.list)("columns",n.cityData.columns)("pi",1)("ps",10)("page",t.DdM(30,Z))("loading",n.cityData.loading),t.xp6(3),t.Q6J("extra",!1),t.xp6(1),t.Q6J("data",n.favouriteClubsData.list)("columns",n.favouriteClubsData.columns)("pi",1)("ps",10)("page",t.DdM(31,Z))("loading",n.favouriteClubsData.loading),t.xp6(4),t.Q6J("extra",!1),t.xp6(1),t.Q6J("data",n.favouritePlayerData.list)("columns",n.favouritePlayerData.columns)("pi",1)("ps",10)("page",t.DdM(32,Z))("loading",n.favouritePlayerData.loading))},dependencies:[m.sg,m.O5,m.PC,_.q,u.A5,u.wZ,y.t3,y.SK,M.w,J.Dz,T.bd,T.hC,x.SY,U.Ls,A.ZU,f.A,N.z,m.JJ,L.W,j.J],encapsulation:2,changeDetection:0}),e})();var K=r(4815);function k(e,o){if(1&e&&t._UZ(0,"i",12),2&e){const a=t.oxw().$implicit;t.Q6J("nzTooltipTitle",a.tooltip)}}function R(e,o){if(1&e&&(t.TgZ(0,"div",9)(1,"g2-card",10),t.ALo(2,"number"),t.YNc(3,k,1,1,"ng-template",null,11,t.W1O),t.qZA()()),2&e){const a=o.$implicit,n=t.MAs(4);t.Q6J("nzSpan",8),t.xp6(1),t.Q6J("title",a.title)("total",t.xi3(2,4,a.total,"1.0-1")+"")("action",a.tooltip?n:"")}}function G(e,o){if(1&e&&(t._UZ(0,"nz-avatar",13),t.TgZ(1,"span"),t._uU(2),t.qZA()),2&e){const a=o.$implicit;t.Q6J("nzSrc",a.icon),t.xp6(2),t.Oqu(a.name||"unknown")}}function H(e,o){if(1&e&&(t._UZ(0,"nz-avatar",13),t.TgZ(1,"span"),t._uU(2),t.qZA()),2&e){const a=o.$implicit;t.Q6J("nzSrc",a.icon),t.xp6(2),t.Oqu(a.name||"unknown")}}function V(e,o){if(1&e&&(t._UZ(0,"nz-avatar",13),t.TgZ(1,"span"),t._uU(2),t.qZA()),2&e){const a=o.$implicit;t.Q6J("nzSrc",a.icon),t.xp6(2),t.Oqu(a.name||"unknown")}}const C=function(){return{front:!0,total:!0}};let Q=(()=>{class e{constructor(){this.totalData={data:[{title:"\u7403\u961f\u8ba2\u9605\u603b\u91cf",tooltip:"\u6307\u793a\u8bf4\u660e",total:20322},{title:"\u7403\u5458\u8ba2\u9605\u603b\u91cf",tooltip:"\u6307\u793a\u8bf4\u660e",total:12022},{title:"\u4e13\u9898\u8ba2\u9605\u603b\u91cf",tooltip:"\u6307\u793a\u8bf4\u660e",total:23423}]},this.favouriteClubsData={columns:[{title:"\u4ff1\u4e50\u90e8",index:"name",render:"name"},{title:"\u7c89\u4e1d\u6570",index:"user_count",width:120}],list:[{en_name:"Astana",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/2600605.png",id:2600605,name:"\u963f\u65af\u5854\u7eb3\u706b\u8f66\u5934",sub_count:7031,type:1},{en_name:"Barcelona",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/50080.png",id:50080,name:"\u5df4\u585e\u7f57\u90a3",sub_count:4706,type:1},{en_name:"Real Madrid",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/50051.png",id:50051,name:"\u7687\u5bb6\u9a6c\u5fb7\u91cc",sub_count:4520,type:1},{en_name:"Bayern",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/50037.png",id:50037,name:"\u62dc\u4ec1\u6155\u5c3c\u9ed1",sub_count:4413,type:1},{en_name:"Paris",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/52747.png",id:52747,name:"\u5df4\u9ece\u5723\u65e5\u8033\u66fc",sub_count:4215,type:1},{en_name:"Ajax",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/50143.png",id:50143,name:"\u963f\u8d3e\u514b\u65af",sub_count:4156,type:1},{en_name:"Man. United",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/52682.png",id:52682,name:"\u66fc\u8054",sub_count:4105,type:1},{en_name:"Olympiacos",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/2610.png",id:2610,name:"\u5965\u6797\u5339\u4e9a\u79d1\u65af",sub_count:4074,type:1},{en_name:"Omonoia",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/50077.png",id:50077,name:"\u5965\u83ab\u5c3c\u4e9a",sub_count:3825,type:1},{en_name:"Man City",icon:"https://img.uefa.com/imgml/TP/teams/logos/240x240/52919.png",id:52919,name:"\u66fc\u57ce",sub_count:2945,type:1}]},this.favouritePlayerData={columns:[{title:"\u4ff1\u4e50\u90e8",index:"name",render:"name"},{title:"\u7c89\u4e1d\u6570",index:"user_count",width:120}],list:[{en_name:"Meirambek Kalmyrza",icon:"https://img.uefa.com/imgml/TP/players/1/2021/324x324/250135443.jpg",id:250135443,name:"Meirambek Kalmyrza",sub_count:2268,type:2},{en_name:"Sanzhar Shurakhanov",icon:"https://img.uefa.com/imgml/TP/players/1/2021/324x324/250135455.jpg",id:250135455,name:"Sanzhar Shurakhanov",sub_count:1623,type:2},{en_name:"Alikhan Umbitaliyev",icon:"https://img.uefa.com/imgml/TP/players/1/2021/324x324/250124601.jpg",id:250124601,name:"Alikhan Umbitaliyev",sub_count:1572,type:2},{en_name:"Lionel Messi",icon:"https://img.uefa.com/imgml/TP/players/1/2023/324x324/95803.jpg",id:95803,name:"\u91cc\u5965\u5185\u5c14\xb7\u6885\u897f",sub_count:1350,type:2},{en_name:"Charalambos Kyriakidis",icon:"https://img.uefa.com/imgml/TP/players/1/2022/324x324/250128983.jpg",id:250128983,name:"Charalambos Kyriakidis",sub_count:999,type:2},{en_name:"Ousseynou Ba",icon:"https://img.uefa.com/imgml/TP/players/1/2023/324x324/250132240.jpg",id:250132240,name:"\u4e4c\u8d5b\u8bfa\xb7\u5df4",sub_count:988,type:2},{en_name:"Antony",icon:"https://img.uefa.com/imgml/TP/players/1/2022/324x324/250144211.jpg",id:250144211,name:"\u5b89\u4e1c\u5c3c",sub_count:967,type:2},{en_name:"Samat Mazhit",icon:"https://img.uefa.com/imgml/TP/players/1/2021/324x324/250124617.jpg",id:250124617,name:"Samat Mazhit",sub_count:876,type:2},{en_name:"Kostas Tzolakis",icon:"https://img.uefa.com/imgml/TP/players/1/2023/324x324/250129408.jpg",id:250129408,name:"\u5eb7\u65af\u5854\u65af\xb7\u4f50\u62c9\u57fa\u65af",sub_count:830,type:2},{en_name:"Lisandro Mart\xednez",icon:"https://img.uefa.com/imgml/TP/players/1/2022/324x324/250132803.jpg",id:250132803,name:"\u5229\u6851\u5fb7\u7f57\xb7\u9a6c\u4e01\u5185\u65af",sub_count:826,type:2}]},this.featureData={columns:[{title:"\u540d\u79f0",index:"name"},{title:"\u8ba2\u9605\u91cf",index:"user_count",width:120}],list:[{name:"\u559c\u529b\xae\u540c\u573a \u4e16\u754c\u540c\u9891",user_count:19},{name:"\u6b27\u51a0\u6700\u4f73\u955c\u5934",user_count:0},{name:"\u6b27\u51a0\u672c\u5468\u6700\u4f73\u9635\u5bb9",user_count:25},{name:"\u6b27\u51a0\u672c\u5468\u6700\u4f73\u8fdb\u7403",user_count:433},{name:"\u6b27\u51a0\u661f\u699c",user_count:26},{name:"\u6b27\u51a0\u672c\u5468\u6700\u4f73\u7403\u5458",user_count:425},{name:"\u6b27\u51a0\u6bd4\u8d5b\u96c6\u9526",user_count:490},{name:"\u6b27\u51a0\u6251\u6551",user_count:316},{name:"\u6b27\u51a0\u7cbe\u534e\u65f6\u523b",user_count:418},{name:"\u6b27\u51a0\u672c\u5468\u6700\u4f73\u52a9\u653b",user_count:293}]}}ngOnInit(){console.log("html5")}onFavouriteClubsChange(){}onFavouritePlayerChange(){}onFeatureChange(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-users-subscription"]],decls:18,vars:25,consts:[["nz-row","","nzGutter","24"],["ngFor","",3,"ngForOf"],["nz-col","","nzSpan","12"],["title","\u70ed\u95e8\u4ff1\u4e50\u90e8",3,"extra","date-change"],[3,"data","columns","pi","ps","page","loading"],["st",""],["st-row","name"],["title","\u70ed\u95e8\u7403\u5458",3,"extra","date-change"],["title","\u4e13\u9898\u8ba2\u9605\u91cf",3,"extra","date-change"],["nz-col","",3,"nzSpan"],[3,"title","total","action"],["totalActionTemp",""],["nz-tooltip","","nz-icon","","nzType","info-circle",3,"nzTooltipTitle"],["nzIcon","user",1,"mr-sm",3,"nzSrc"]],template:function(a,n){1&a&&(t._UZ(0,"page-header"),t.TgZ(1,"div",0),t.YNc(2,R,5,7,"ng-template",1),t.TgZ(3,"div",2)(4,"app-card",3),t.NdJ("date-change",function(){return n.onFavouriteClubsChange()}),t.TgZ(5,"st",4,5),t.YNc(7,G,3,2,"ng-template",6),t.qZA()()(),t.TgZ(8,"div",2)(9,"app-card",7),t.NdJ("date-change",function(){return n.onFavouritePlayerChange()}),t.TgZ(10,"st",4,5),t.YNc(12,H,3,2,"ng-template",6),t.qZA()()(),t.TgZ(13,"div",2)(14,"app-card",8),t.NdJ("date-change",function(){return n.onFeatureChange()}),t.TgZ(15,"st",4,5),t.YNc(17,V,3,2,"ng-template",6),t.qZA()()()()),2&a&&(t.xp6(2),t.Q6J("ngForOf",n.totalData.data),t.xp6(2),t.Q6J("extra",!1),t.xp6(1),t.Q6J("data",n.favouriteClubsData.list)("columns",n.favouriteClubsData.columns)("pi",1)("ps",10)("page",t.DdM(22,C))("loading",n.favouriteClubsData.loading),t.xp6(4),t.Q6J("extra",!1),t.xp6(1),t.Q6J("data",n.favouritePlayerData.list)("columns",n.favouritePlayerData.columns)("pi",1)("ps",10)("page",t.DdM(23,C))("loading",n.favouritePlayerData.loading),t.xp6(4),t.Q6J("extra",!1),t.xp6(1),t.Q6J("data",n.featureData.list)("columns",n.featureData.columns)("pi",1)("ps",10)("page",t.DdM(24,C))("loading",n.featureData.loading))},dependencies:[m.sg,_.q,u.A5,u.wZ,K.n,y.t3,y.SK,M.w,J.Dz,x.SY,U.Ls,f.A,m.JJ],encapsulation:2,changeDetection:0}),e})();var X=r(2868),W=r(9541);function tt(e,o){if(1&e&&(t.TgZ(0,"h4",15),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const a=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,a.total,"1.0-1"))}}function at(e,o){if(1&e&&(t.TgZ(0,"h4",15),t._uU(1),t.ALo(2,"minutes"),t.qZA()),2&e){const a=t.oxw().$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,a.total))}}const S=function(e){return{width:e}};function et(e,o){if(1&e&&(t.TgZ(0,"div",10)(1,"div")(2,"span",11),t._uU(3),t.qZA(),t._UZ(4,"i",12),t.qZA(),t.YNc(5,tt,3,4,"h4",13),t.YNc(6,at,3,3,"h4",13),t.TgZ(7,"div")(8,"span",11),t._uU(9),t.qZA(),t._UZ(10,"span",14),t.ALo(11,"growthPercentageCalculator"),t.qZA()()),2&e){const a=o.$implicit,n=t.oxw();t.Q6J("ngStyle",t.VKq(10,S,100/n.userData.data.length+"%")),t.xp6(3),t.Oqu(a.title),t.xp6(1),t.Q6J("nzTooltipTitle",a.tooltip),t.xp6(1),t.Q6J("ngIf","time"!==a.unit),t.xp6(1),t.Q6J("ngIf","time"===a.unit),t.xp6(3),t.Oqu(a.sub_title),t.xp6(1),t.Q6J("innerHTML",t.xi3(11,7,a.total,a.before_total),t.oJD)}}function nt(e,o){1&e&&(t._uU(0),t.ALo(1,"minutes")),2&e&&t.hij(" ",t.lcZ(1,1,o.$implicit.access_duration)," ")}function ot(e,o){if(1&e&&(t.TgZ(0,"h4",15),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const a=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,a.total,"1.0-1"))}}function it(e,o){if(1&e&&(t.TgZ(0,"h4",15),t._uU(1),t.ALo(2,"minutes"),t.qZA()),2&e){const a=t.oxw().$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,a.total))}}function st(e,o){if(1&e&&(t.TgZ(0,"div",10)(1,"div")(2,"span",11),t._uU(3),t.qZA(),t._UZ(4,"i",12),t.qZA(),t.YNc(5,ot,3,4,"h4",13),t.YNc(6,it,3,3,"h4",13),t.TgZ(7,"div")(8,"span",11),t._uU(9),t.qZA(),t._UZ(10,"span",14),t.ALo(11,"growthPercentageCalculator"),t.qZA()()),2&e){const a=o.$implicit;t.Q6J("ngStyle",t.VKq(10,S,100/6+"%")),t.xp6(3),t.Oqu(a.title),t.xp6(1),t.Q6J("nzTooltipTitle",a.tooltip),t.xp6(1),t.Q6J("ngIf","time"!==a.unit),t.xp6(1),t.Q6J("ngIf","time"===a.unit),t.xp6(3),t.Oqu(a.sub_title),t.xp6(1),t.Q6J("innerHTML",t.xi3(11,7,a.total,a.before_total),t.oJD)}}const rt=function(){return{show:!1}};let w=(()=>{class e{constructor(){this.userData={loading:!1,listData:{},list:[]},this.userRetainData={loading:!1,columns:[{title:"\u5173\u6ce8\u65e5\u671f",index:"time"},{title:"\u5f53\u65e5\u5173\u6ce8",index:"same_day_follow",format:a=>`${a.same_day_follow}%`},{title:"\u5f53\u65e5\u7559\u5b58",index:"same_day_retain",format:a=>`${a.same_day_retain}%`},{title:"\u6b21\u65e5\u7559\u5b58",index:"next_day_retain",format:a=>`${a.next_day_retain}%`},{title:"7\u65e5\u7559\u5b58",index:"next7_day_retain",format:a=>`${a.next7_day_retain}%`},{title:"30\u65e5\u7559\u5b58",index:"next30_day_retain",format:a=>`${a.next30_day_retain}%`}],list:[]},this.userLoginData={loading:!1,listData:{},list:[]},this.newAddUserData={loading:!1,data:[{title:"\u6b27\u51a0\u5c0f\u7a0b\u5e8f\u5e73\u5747\u505c\u7559\u65f6\u957f",tooltip:"\u6307\u793a\u8bf4\u660e",total:456,unit:"time",before_total:150,sub_title:"\u540c\u671f"},{title:"\u6b27\u51a0H5\u5e73\u5747\u505c\u7559\u65f6\u957f",tooltip:"\u6307\u793a\u8bf4\u660e",total:394,unit:"time",before_total:150,sub_title:"\u540c\u671f"}],listData:{}}}ngOnInit(){console.log("users trend")}onUserChange(a){const n={},i={};for(let s=a[0];s<a[1];s+=86400){const l=(0,g.Z)(1e3*s,"yyyy-MM-dd");n[l]=Math.floor(100*Math.random())+100,i[l]=Math.floor(100*Math.random())+100}this.userData.listData={"\u6b27\u51a0(\u5c0f\u7a0b\u5e8f/H5)":n,"\u56fd\u5bb6\u961f(\u6b27\u6d32\u676f/\u6b27\u56fd\u676f/\u4e16\u754c\u676f\u9884\u9009\u8d5b)":i}}onRetainChange(a){const n=[];for(let i=a[0];i<a[1];i+=86400){const s=(0,g.Z)(1e3*i,"yyyy-MM-dd");n.push({time:s,same_day_follow:Math.floor(100*Math.random())+10,same_day_retain:Math.floor(100*Math.random())+10,next_day_retain:Math.floor(100*Math.random())+10,next7_day_retain:Math.floor(100*Math.random())+10,next30_day_retain:Math.floor(100*Math.random())+10})}this.userRetainData.list=n}onLoginChange(a){const n={},i={};for(let s=a[0];s<a[1];s+=86400){const l=(0,g.Z)(1e3*s,"yyyy-MM-dd");n[l]=Math.floor(100*Math.random())+100,i[l]=Math.floor(100*Math.random())+100}this.userLoginData.listData={\u6b27\u51a0:n,\u56fd\u5bb6\u961f:i}}onNewAddUserChange(a){const n={},i={},s={},l={},h={};for(let d=a[0];d<a[1];d+=86400){const p=(0,g.Z)(1e3*d,"yyyy-MM-dd");n[p]=Math.floor(100*Math.random())+100,i[p]=Math.floor(100*Math.random())+100,s[p]=Math.floor(100*Math.random())+100,l[p]=Math.floor(100*Math.random())+100,h[p]=Math.floor(100*Math.random())+100}this.newAddUserData.listData={\u6b27\u51a0\u5c0f\u7a0b\u5e8f:n,\u6b27\u51a0H5:i,\u6b27\u6d32\u676f:s,\u6b27\u56fd\u8054:l,\u9884\u9009\u8d5b:h}}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-users-trend"]],decls:15,vars:25,consts:[["title","\u6ce8\u518c\u7528\u6237\u8d8b\u52bf",3,"show-import","date-ranges","date-change"],[3,"nzBorderless"],["ngFor","",3,"ngForOf"],[3,"loading","data"],["title","\u6ce8\u518c\u7528\u6237\u7559\u5b58\u7387",3,"show-import","date-ranges","date-change"],[3,"data","columns","pi","ps","page","loading"],["st",""],["st-row","accessDuration"],["title","\u767b\u5f55\u7528\u6237\u8d8b\u52bf",3,"show-import","date-ranges","date-change"],["title","\u65b0\u589e\u7528\u6237\u8d8b\u52bf",3,"show-import","date-ranges","date-change"],["nz-card-grid","",3,"ngStyle"],["nz-typography","","nzType","secondary"],["nz-tooltip","","nz-icon","","nzType","info-circle",2,"opacity","0.3",3,"nzTooltipTitle"],["nz-typography","",4,"ngIf"],[1,"ml-sm",3,"innerHTML"],["nz-typography",""]],template:function(a,n){1&a&&(t._UZ(0,"page-header"),t.TgZ(1,"app-card",0),t.NdJ("date-change",function(s){return n.onUserChange(s)}),t.TgZ(2,"nz-card",1),t.YNc(3,et,12,12,"ng-template",2),t.qZA(),t._UZ(4,"g2-line",3),t.qZA(),t.TgZ(5,"app-card",4),t.NdJ("date-change",function(s){return n.onRetainChange(s)}),t.TgZ(6,"st",5,6),t.YNc(8,nt,2,3,"ng-template",7),t.qZA()(),t.TgZ(9,"app-card",8),t.NdJ("date-change",function(s){return n.onLoginChange(s)}),t._UZ(10,"g2-line",3),t.qZA(),t.TgZ(11,"app-card",9),t.NdJ("date-change",function(s){return n.onNewAddUserChange(s)}),t.TgZ(12,"nz-card",1),t.YNc(13,st,12,12,"ng-template",2),t.qZA(),t._UZ(14,"g2-line",3),t.qZA()),2&a&&(t.xp6(1),t.Q6J("show-import",!0)("date-ranges",!1),t.xp6(1),t.Q6J("nzBorderless",!0),t.xp6(1),t.Q6J("ngForOf",n.userData.data),t.xp6(1),t.Q6J("loading",n.userData.loading)("data",n.userData.listData),t.xp6(1),t.Q6J("show-import",!0)("date-ranges",!1),t.xp6(1),t.Q6J("data",n.userRetainData.list)("columns",n.userRetainData.columns)("pi",1)("ps",10)("page",t.DdM(24,rt))("loading",n.userRetainData.loading),t.xp6(3),t.Q6J("show-import",!0)("date-ranges",!1),t.xp6(1),t.Q6J("loading",n.userLoginData.loading)("data",n.userLoginData.listData),t.xp6(1),t.Q6J("show-import",!0)("date-ranges",!1),t.xp6(1),t.Q6J("nzBorderless",!0),t.xp6(1),t.Q6J("ngForOf",n.newAddUserData.data),t.xp6(1),t.Q6J("loading",n.newAddUserData.loading)("data",n.newAddUserData.listData))},dependencies:[m.sg,m.O5,m.PC,_.q,u.A5,u.wZ,M.w,T.bd,T.hC,x.SY,U.Ls,A.ZU,f.A,z.Z,m.JJ,X.F,W.q],encapsulation:2,changeDetection:0}),e})();var q=r(9132);const lt=[{path:"trend",component:w},{path:"profile",component:b},{path:"engagement",component:P},{path:"subscription",component:Q}];let mt=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[q.Bz.forChild(lt),q.Bz]}),e})(),pt=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[F.m,mt]}),e})()}}]);