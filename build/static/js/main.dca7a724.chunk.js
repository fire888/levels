(this.webpackJsonplevels=this.webpackJsonplevels||[]).push([[0],{25:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);function o(e){var t=e,n={up:!1,left:!1,right:!1,s:!1,m:!1,w:!1},o=function(e,o){switch(e){case 38:n.up=o;break;case 37:n.left=o;break;case 39:n.right=o;break;case 83:n.s=o;break;case 77:n.m=o;break;case 87:n.w=o}t.emit("keyEvent")(n)};document.addEventListener("keydown",function(e){o(e.keyCode,!0)}.bind(this)),document.addEventListener("keyup",function(e){o(e.keyCode,!1)}.bind(this));var a=document.querySelector(".butt-left");a.addEventListener("mousedown",(function(){o(37,!0)})),a.addEventListener("mouseup",(function(){o(37,!1)})),a.addEventListener("touchstart",(function(){o(37,!0)})),a.addEventListener("touchend",(function(){o(37,!1)}));var r=document.querySelector(".butt-right");r.addEventListener("mousedown",(function(){o(39,!0)})),r.addEventListener("mouseup",(function(){o(39,!1)})),r.addEventListener("touchstart",(function(){o(39,!0)})),r.addEventListener("touchend",(function(){o(39,!1)}));var i=document.querySelector(".butt-front");i.addEventListener("mousedown",(function(){o(38,!0)})),i.addEventListener("mouseup",(function(){o(38,!1)})),i.addEventListener("touchstart",(function(){o(38,!0)})),i.addEventListener("touchend",(function(){o(38,!1)}))}var a=null,r=function(e){return function(t){return e[t]=e[t]||[]}},i=a=a||function(){var e={};return{emit:function(t){return function(n){return r(e)(t).forEach((function(e){return e(n)}))}},subscribe:function(t){return function(n){return r(e)(t).push(n),function(){return e[t]=e[t].filter((function(e){return e!==n}))}}},showAll:function(){var t={};for(var n in e)t[n]=e[n].length;console.log(t)}}}(),s=n(39),l=n.p+"static/media/px.2be78f43.jpg",c=n.p+"static/media/nx.b2401269.jpg",u=n.p+"static/media/py.659ebc34.jpg",d=n.p+"static/media/ny.462f1251.jpg",m=n.p+"static/media/pz.8ea5ba14.jpg",p=n.p+"static/media/nz.7f255b96.jpg",f=n.p+"static/media/posx.be2d83a2.jpg",h=n.p+"static/media/negx.d016c8e7.jpg",g=n.p+"static/media/posy.01cfd221.jpg",v=n.p+"static/media/negy.f01f8356.jpg",y=n.p+"static/media/posz.ef37b8e1.jpg",b=n.p+"static/media/negz.f346a80a.jpg",_=n.p+"static/media/map-walls-bump.40f05869.png",w=n.p+"static/media/level-rooms.6513b781.obj",N=n.p+"static/media/floor_outer_map.35e50f6e.jpg",S=n.p+"static/media/botMap.972e276e.png",k=[{type:"obj",filename:w,key:"level-rooms"},{type:"glb",filename:n.p+"static/media/botAnim.5bfca6de.glb",key:"bot"},{type:"cubeTextures",filename:{px:l,nx:c,py:u,ny:d,pz:m,nz:p},key:"skyBox"},{type:"cubeTextures",filename:{px:f,nx:h,py:g,ny:v,pz:y,nz:b},key:"ironEnv"},{type:"img",filename:S,key:"botMap"},{type:"img",filename:_,key:"bumpWalls"},{type:"img",filename:N,key:"mapFloorOuter",wrap:!0}],j={wall:{mat:"MeshPhongMaterial",props:{color:16777215,emissive:13192,specular:16777215,shininess:60,bumpMap:"bumpWalls",bumpScale:.1,envMap:"skyBox",reflectivity:.5,map:"bumpWalls"}},iron:{mat:"MeshPhongMaterial",props:{color:16777215,emissive:13192,specular:16777215,shininess:60,bumpMap:"botMap",bumpScale:.1,envMap:"ironEnv",reflectivity:.5,map:"botMap",skinning:!0}},green:{mat:"MeshPhongMaterial",props:{color:17510,emissive:16777215,map:"mapFloorOuter",bumpMap:"mapFloorOuter",bumpScale:1,envMap:"skyBox",reflectivity:.5}},road:{mat:"MeshPhongMaterial",props:{color:10556063,emissive:10556063,map:"mapFloorOuter",bumpMap:"mapFloorOuter",bumpScale:1,envMap:"skyBox",reflectivity:.5}}},A=175.335,O="FRAME_UPDATE",M={"-2":{outer:{fogNear:-200,fogFar:500,color:1582461},corridorLight:{fogNear:-40,fogFar:150,color:7012460},default:{fogNear:-40,fogFar:150,color:8914344}},"-1":{outer:{fogNear:20,fogFar:500,color:1582461},firstRoomLight:{fogNear:-40,fogFar:150,color:9054},corridorLight:{fogNear:-40,fogFar:150,color:7012460},default:{fogNear:-40,fogFar:150,color:3019147}},0:{default:{fogNear:-40,fogFar:150,color:3950848}},1:{default:{fogNear:-40,fogFar:150,color:933458}},2:{default:{fogNear:0,fogFar:80,color:661347}},3:{default:{fogNear:0,fogFar:80,color:680768}},4:{default:{fogNear:0,fogFar:80,color:11272192}}},L=[{oldState:"outer",newState:"corridor",oldQuadrant:[0,-2,4],newQuadrant:[0,-2,3],emitData:[{emitKey:"changeEnvironment",environmentMode:"corridorLight"},{emitKey:"toggleImgSceneBack",backgroundImg:!1}]},{oldState:"corridor",newState:"outer",oldQuadrant:[0,-2,3],newQuadrant:[0,-2,4],emitData:[{emitKey:"changeEnvironment",environmentMode:"outer"}]},{oldState:"corridor",newState:"firstRoom",oldQuadrant:[0,-1,2],newQuadrant:[0,-1,1],emitData:[{emitKey:"changeEnvironment",environmentMode:"firstRoomLight"}]},{oldState:"firstRoom",newState:"corridor",oldQuadrant:[0,-1,1],newQuadrant:[0,-1,2],emitData:[{emitKey:"changeEnvironment",environmentMode:"corridorLight"}]},{oldState:"firstRoom",newState:"playLevel",oldQuadrant:[0,-1,0],newQuadrant:[0,-1,"ANY_MINUS_ONE"],emitData:[{emitKey:"destroyStartCorridor"},{emitKey:"changeLevel"}]},{oldState:"firstRoom",newState:"playLevel",oldQuadrant:[0,-1,0],newQuadrant:["ANY_MINUS_ONE",-1,0],emitData:[{emitKey:"destroyStartCorridor"},{emitKey:"changeLevel"}]},{oldState:"firstRoom",newState:"playLevel",oldQuadrant:[0,-1,0],newQuadrant:["ANY_PLUS_ONE",-1,0],emitData:[{emitKey:"destroyStartCorridor"},{emitKey:"changeLevel"}]},{oldState:"playLevel",newState:"playLevel",oldQuadrant:["ANY","ANY","ANY"],newQuadrant:["ANY","ANY_PLUS_ONE","ANY"],emitData:[{emitKey:"changeEnvironment",environmentMode:"default"},{emitKey:"changeLevel",counter:function(){return 0}}]},{oldState:"playLevel",newState:"playLevel",oldQuadrant:["ANY","ANY","ANY"],newQuadrant:["ANY","ANY_MINUS_ONE","ANY"],emitData:[{emitKey:"changeEnvironment",environmentMode:"default"},{emitKey:"changeLevel"}]},{oldState:"playLevel",newState:"playLevel",oldQuadrant:["ANY","ANY","ANY"],newQuadrant:["ANY","ANY","ANY_MINUS_ONE"],emitData:[{emitKey:"changeLevel",counter:function(e){return++e}}]},{oldState:"playLevel",newState:"playLevel",oldQuadrant:["ANY","ANY","ANY"],newQuadrant:["ANY_MINUS_ONE","ANY","ANY"],emitData:[{emitKey:"changeLevel",counter:function(e){return++e}}]},{oldState:"playLevel",newState:"playLevel",oldQuadrant:["ANY","ANY","ANY"],newQuadrant:["ANY_PLUS_ONE","ANY","ANY"],emitData:[{emitKey:"changeLevel",counter:function(e){return++e}}]},{oldState:"playLevel",newState:"playLevel",oldQuadrant:["ANY","ANY","ANY"],newQuadrant:["ANY","ANY","ANY_PLUS_ONE"],emitData:[{emitKey:"changeLevel",counter:function(e){return++e}}]}],E={canId:"webgl-canvas",rendererCon:{antialias:!0},clearColor:M[-1].outer.color,backgroundColor:M[-1].outer.color,amb:{color:M[-1].outer.color,strength:.8}},x={speed:.8,speedRot:.02,speedDown:-.45,offsetFromFloor:10,offsetFromFloorFactor:.5,offsetWallCollision:3.5,level:-13,startRot:[0,0,0],startPos:[100,-60,1e3],cameraData:{fov:90,ratio:window.innerWidth/window.innerHeight,near:.1,far:1e3,pos:[0,2,-.5]},frontObjPos:[0,0,-1],lightDataOne:{color:12768499,strength:.5,pos:[0,100,0]},lightDataTwo:{color:16711680,strength:.4,pos:[0,-30,40]}};var D,C,R,I,Y=n(5),T=n(7),B="outer",F=function(e,t){for(var n=0;n<L.length;++n){var o=P(Object(T.a)(e),Object(T.a)(t),Object(Y.a)(Object(Y.a)({},L[n]),{},{oldQuadrant:Object(T.a)(L[n].oldQuadrant),newQuadrant:Object(T.a)(L[n].newQuadrant)}));if(o)return o}return{levelState:B}},P=function(e,t,n){var o=n.oldState,a=n.newState,r=n.oldQuadrant,i=n.newQuadrant,s=n.emitData;if(B===o&&("ANY"===r[0]&&(r[0]=e[0]),"ANY"===r[1]&&(r[1]=e[1]),"ANY"===r[2]&&(r[2]=e[2]),"ANY"===i[0]&&(i[0]=t[0]),"ANY"===i[1]&&(i[1]=t[1]),"ANY"===i[2]&&(i[2]=t[2]),"ANY_PLUS_ONE"===i[0]&&(i[0]=e[0]+1),"ANY_PLUS_ONE"===i[1]&&(i[1]=e[1]+1),"ANY_PLUS_ONE"===i[2]&&(i[2]=e[2]+1),"ANY_MINUS_ONE"===i[0]&&(i[0]=e[0]-1),"ANY_MINUS_ONE"===i[1]&&(i[1]=e[1]-1),"ANY_MINUS_ONE"===i[2]&&(i[2]=e[2]-1),r[0]===e[0]&&r[1]===e[1]&&r[2]===e[2]&&i[0]===t[0]&&i[1]===t[1]&&i[2]===t[2]))return B=a,s.map((function(e){return Object(Y.a)(Object(Y.a)({},e),{},{levelState:B,oldQuadrant:Object(T.a)(r),newQuadrant:Object(T.a)(i)})}))},Q=function(){var e=[];return{update:function(t){var n=t.x,o=t.y,a=t.z,r=[Math.floor(n/A),Math.floor(o/70),Math.floor(a/A)];if(r[0]!==e[0]||r[1]!==e[1]||r[2]!==e[2]){var i={isChanged:!0,currentQuadrant:r,oldQuadrant:e};return e=[].concat(r),i}return{isChanged:!1}}}},G=n(0),q=n(19),K=n(20),W=null,z=null,U={},H=0,V=function(e){"obj"===e.type&&D.load(e.filename,(function(t){U[e.key]=t,J()})),"glb"!==e.type&&"gltf"!==e.type||R.load(e.filename,(function(t){U[e.key]=t,J()})),"img"===e.type&&C.load(e.filename,(function(t){U[e.key]=t,J()})),"cubeTextures"===e.type&&I.load([e.filename.px,e.filename.nx,e.filename.py,e.filename.ny,e.filename.pz,e.filename.nz],(function(t){U[e.key]=t,J()}))},J=function(){++H<z.length?V(z[H]):W(U)};var X=function(e){for(var t in e)e[t].wrapS&&(e[t].wrapS=e[t].wrapT=G.RepeatWrapping);var n=["bumpMap","envMap","map"],o={},a=function(t){o[t]=new G[j[t].mat](Object(Y.a)({},j[t].props)),n.map((function(n){return j[t].props[n]&&(o[t][n]=e[j[t].props[n]])}))};for(var r in j)a(r);return o},Z=n(13);var $=[],ee=function(e){return $.push(e)},te=function(e){return $=$.filter((function(t){return t!==e}))},ne=[],oe=function(e){return ne.push(e)},ae=function(e){return ne=ne.filter((function(t){return e!==t}))},re=[];function ie(e){var t,n=e,o=x.startPos,a=x.startRot,r=x.cameraData,i=x.frontObjPos,s=x.lightDataOne,l=x.speed,c=x.offsetFromFloor,u=x.offsetFromFloorFactor,d=x.speedDown,m=x.offsetWallCollision,p=x.speedRot,f={},h=!1,g=!0,v=new G.Object3D;v.position.fromArray(o),v.rotation.fromArray(a);var y=new G.Object3D;y.position.fromArray(i),v.add(y);var b=r.fov,_=r.ratio,w=r.near,N=r.far,S=r.pos;(t=new G.PerspectiveCamera(b,_,w,N)).position.fromArray(S),v.add(t);var k=s.color,j=s.strenth,A=s.pos,M=new G.PointLight(k,j);M.position.fromArray(A),v.add(M);var L=function(e,t,n,o){var a=e,r=t,i=n,s=o,l=new G.Vector3,c=new G.Vector3(0,-1,0),u=!0;return{check:function(e){if(!u){l.copy(a.position);var t=new G.Raycaster(l,c).intersectObjects($);t&&t[0]&&t[0].distance>r+i?a.position.y+=s*e.count:!t||t[0]?a.position.y=t[0].point.y+r:a.position.y+=s*e.count}},start:function(){u=!1}}}(v,c,u,d),E=function(e,t,n){var o=n,a=e,r=t,i=new G.Vector3,s=new G.Vector3;return{check:function(){r.getWorldPosition(s),i.copy(a.position),s.sub(i);var e=new G.Raycaster(i,s).intersectObjects(ne);return e[0]&&e[0].distance<o}}}(v,y,m),D=function(e,t){return function(){re.forEach((function(n){e.position.distanceTo(n.position)<10&&!n.userData.nearPlayer&&(n.userData.nearPlayer=!0,t.emit("nearMesh")({toNear:!0,mesh:n})),e.position.distanceTo(n.position)>=10&&n.userData.nearPlayer&&(n.userData.nearPlayer=!1,t.emit("nearMesh")({toNear:!1,mesh:n}))}))}}(v,n);return n.subscribe("keyEvent")((function(e){return f=e})),n.subscribe(O)((function(e){if(!h&&!g&&(L.check(e),f)){if(f.up){if(E.check())return;v.translateZ(-l*e.count),D(),n.emit("playerMove")(v.position)}f.left&&(v.rotation.y+=p*e.count),f.right&&(v.rotation.y-=p*e.count)}})),n.subscribe("toggleDialog")((function(e){return h=e.isOpen})),{start:function(){g=!1,L.start()},getObj:function(){return v},getCamera:function(){return t},setToPos:function(e,t,n){return v.position.set(e,t,n)}}}n(25);var se=document.querySelector(".progress"),le=-100,ce=!0;!function e(){ce&&setTimeout((function(){0==++le&&(le=-100),se.style.marginLeft=le+"%",e()}),30)}();var ue={ru:{"After a long wandering in the desert...":"\u041f\u043e\u0441\u043b\u0435 \u0434\u043e\u043b\u0433\u043e\u0433\u043e \u0431\u043b\u0443\u0436\u0434\u0430\u043d\u0438\u044f \u043f\u043e \u043f\u0443\u0441\u0442\u043e\u0448\u0438...","Stranger, I threw you a terminal with a pass phrase. Remember:":"\u041d\u0435\u0437\u043d\u0430\u043a\u043e\u043c\u0435\u0446, \u044f \u0441\u0431\u0440\u043e\u0441\u0438\u043b \u0442\u0435\u0431\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b \u0441 \u043f\u0430\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0444\u0440\u0430\u0437\u043e\u0439. \u0417\u0430\u043f\u043e\u043c\u043d\u0438:","And blood-black nothingness began to spin...":"\u041a\u0440\u043e\u0432\u0430\u0432\u043e-\u0447\u0435\u0440\u043d\u043e\u0435 \u043d\u0438\u0447\u0442\u043e \u043f\u0443\u0441\u0442\u0438\u043b\u043e\u0441\u044c \u0432\u0438\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u043a\u043b\u0435\u0442\u043e\u043a,","A system of cells interlinked within cells interlinked within cells interlinked within one stem...":"\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0432\u043d\u0443\u0442\u0440\u0438, \u043a\u043b\u0435\u0442\u043e\u043a, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0432\u043d\u0443\u0442\u0440\u0438, \u043a\u043b\u0435\u0442\u043e\u043a \u0432 \u0435\u0434\u0438\u043d\u043e\u043c \u0441\u0442\u0435\u0431\u043b\u0435 \u0438 \u044f\u0432\u0441\u0442\u0432\u0435\u043d\u043d\u043e,","And dreadfully distinct against the dark, a tall white fountain played.":"\u0434\u043e \u0436\u0443\u0442\u0438 \u043d\u0430 \u0444\u043e\u043d\u0435 \u0442\u044c\u043c\u044b \u0432\u0432\u044b\u0441\u044c \u0431\u0435\u043b\u044b\u043c \u0431\u0438\u043b \u0444\u043e\u043d\u0442\u0430\u043d.","Officer K-D-six-dash-three-dot-seven, let's begin. Ready?":"\u041e\u0444\u0438\u0446\u0435\u0440 \u041a\u0435\u0439 \u0414\u0438 6.3.7. \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u043c. \u0413\u043e\u0442\u043e\u0432\u044b?","Yes, sir.":"\u0413\u043e\u0442\u043e\u0432","No.":"\u041d\u0435 \u0433\u043e\u0442\u043e\u0432","Recite your baseline.":"\u0412\u0430\u0448\u0430 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u0430\u044f \u0444\u0440\u0430\u0437\u0430.","I do not remember.":"\u042f \u0437\u0430\u0431\u044b\u043b.","I'll come back later.":"\u042f \u0437\u0430\u0439\u0434\u0443 \u043f\u043e\u043f\u043e\u0437\u0436\u0435.","Cells.":"\u041a\u043b\u0435\u0442\u043a\u0438.","Have you ever been in an institution? Cells.":"\u0414\u043e\u0432\u043e\u0434\u0438\u043b\u043e\u0441\u044c \u043b\u0438 \u0432\u0430\u043c \u0431\u044b\u0432\u0430\u0442\u044c \u0432 \u0442\u044e\u0440\u044c\u043c\u0435? \u041a\u043b\u0435\u0442\u043a\u0438.","Do they keep you in a cell? Cells.":"\u0412\u0430\u0441 \u0434\u0435\u0440\u0436\u0430\u0442 \u0432 \u043a\u043b\u0435\u0442\u043a\u0435? \u041a\u043b\u0435\u0442\u043a\u0438.","When you're not performing your duties do they keep you in a little box? Cells.":"\u041a\u043e\u0433\u0434\u0430 \u0432\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0435 \u043e\u0431\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u0438, \u0432\u0430\u0441 \u0434\u0435\u0440\u0436\u0430\u0442 \u0432 \u043a\u043e\u0440\u043e\u0431\u043a\u0435? \u041a\u043b\u0435\u0442\u043a\u0438.","Interlinked.":"\u0421\u0432\u044f\u0437\u0430\u043d\u044b.","What's it like to hold the hand of someone you love? Interlinked.":"\u0427\u0442\u043e \u0432\u044b \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0435 \u0434\u0435\u0440\u0436\u0430 \u0437\u0430 \u0440\u0443\u043a\u0443 \u0442\u043e\u0433\u043e \u043a\u043e\u0433\u043e \u043b\u044e\u0431\u0438\u0442\u0435? \u0421\u0432\u044f\u0437\u0430\u043d\u044b.","Did they teach you how to feel finger to finger? Interlinked.":"\u0412\u0430\u0441 \u0443\u0447\u0438\u043b\u0438 \u043f\u0440\u0438\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0430\u043b\u0435\u0446 \u043a \u043f\u0430\u043b\u044c\u0446\u0443? \u0421\u0432\u044f\u0437\u0430\u043d\u044b.","Do you long for having your heart interlinked? Interlinked.":"\u0412\u044b \u0436\u0430\u0436\u0434\u0435\u0442\u0435 \u0441\u0432\u044f\u0437\u0430\u0442\u044c \u0441 \u043a\u0435\u043c-\u043d\u0438\u0431\u0443\u0434\u044c \u0441\u0435\u0440\u0434\u0446\u0435? \u0421\u0432\u044f\u0437\u0430\u043d\u044b.","Do you dream about being interlinked? Interlinked.":"\u0412\u0430\u043c \u0441\u043d\u0438\u0442\u0441\u044f \u0441\u0432\u044f\u0437\u044c \u0441 \u043a\u0435\u043c-\u043b\u0438\u0431\u043e? \u0421\u0432\u044f\u0437\u0430\u043d\u044b.","What's it like to hold your child in your arms? Interlinked.":"\u0427\u0442\u043e \u0432\u044b \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0435, \u0434\u0435\u0440\u0436\u0430 \u0432 \u0440\u0443\u043a\u0430\u0445 \u0441\u0432\u043e\u0435\u0433\u043e \u0440\u0435\u0431\u0435\u043d\u043a\u0430? \u0421\u0432\u044f\u0437\u0430\u043d\u044b.","Do you feel that there's a part of you that's missing? Interlinked.":"\u0412\u044b \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0435, \u0447\u0442\u043e \u0432\u0430\u043c \u0447\u0435\u0433\u043e-\u0442\u043e \u043d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442? \u0421\u0432\u044f\u0437\u0430\u043d\u044b.","Within cells interlinked.":"\u041a\u043b\u0435\u0442\u043e\u043a \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0432\u043d\u0443\u0442\u0440\u0438.","Why don't you say that three times: Within cells interlinked.":'\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0442\u0440\u0438 \u0440\u0430\u0437\u0430 "\u043a\u043b\u0435\u0442\u043e\u043a \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0432\u043d\u0443\u0442\u0440\u0438',"We're done... Constant K, you can pick up your bonus.":"\u041d\u0430 \u044d\u0442\u043e\u043c \u0432\u0441\u0435. \u041a\u0435\u0439 \u0441\u0442\u0430\u0431\u0438\u043b\u0435\u043d, \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0439\u0442\u0438 \u0437\u0430 \u0431\u043e\u043d\u0443\u0441\u043e\u043c.","Thank you, sir.":"\u0421\u043f\u0430\u0441\u0438\u0431\u043e, \u0441\u044d\u0440.","...If you read it, you find dropped terminal and got top level of desert. Welcome...":"...\u0415\u0441\u043b\u0438 \u0442\u044b \u0447\u0438\u0442\u0430\u0435\u0448\u044c \u044d\u0442\u043e, \u0442\u044b \u043d\u0430\u0448\u0435\u043b \u0443\u043f\u0430\u0432\u0448\u0438\u0439 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b \u0438 \u0434\u043e\u0431\u0440\u0430\u043b\u0441\u044f \u0434\u043e \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u043f\u0443\u0441\u0442\u043e\u0448\u0438.","Who are you?":"\u041a\u0442\u043e \u0442\u044b?","It does not matter. Later. May be..":"\u042d\u0442\u043e \u043d\u0435\u0432\u0430\u0436\u043d\u043e. \u041f\u043e\u0437\u0436\u0435. \u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c..","Hey...":"\u042d\u0439...",open:"\u043f\u0443\u0441\u043a","Previous part: ":"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f \u0447\u0430\u0441\u0442\u044c: ","Author: ":"\u0410\u0432\u0442\u043e\u0440: ",link:"\u0441\u0441\u044b\u043b\u043a\u0430","/factory":"/ru/factory/"}},de="en";var me=function(e){return ue[de]&&ue[de][e]||e},pe=["room_02","room_03","room_04","room_05"],fe=["outer_walls","outer_floor","outer_road"];var he=n(1),ge=n(2),ve={x:55,z:75},ye=function(){function e(){Object(he.a)(this,e),this.inScene=!1,this._state="go",this._targetAngle=null,this.container=new G.Group,this._modelGroup=new G.Group,this._modelGroup.position.x=ve.x,this._modelGroup.position.z=ve.z,this._modelGroup.rotation.y=Math.random()*(2*Math.PI),this.container.add(this._modelGroup),this._objFrom=new G.Object3D,this._modelGroup.add(this._objFrom),this._objTo=new G.Object3D,this._objTo.position.set(0,0,1),this._modelGroup.add(this._objTo);var t=function(e){var t={animations:e.animations,scene:e.scene.clone(!0)},n={};e.scene.traverse((function(e){e.isSkinnedMesh&&(n[e.name]=e)}));var o={},a={};for(var r in t.scene.traverse((function(e){e.isBone&&(o[e.name]=e),e.isSkinnedMesh&&(a[e.name]=e)})),n){for(var i=n[r].skeleton,s=a[r],l=[],c=0;c<i.bones.length;++c){var u=o[i.bones[c].name];l.push(u)}s.bind(new G.Skeleton(l,i.boneInverses),s.matrixWorld)}return t}(e.botScene);this.model=t.scene.children[0],this.model.children[1].material=e.botMaterial,this._animations=e.botScene.animations,this._mixer=new G.AnimationMixer(this.model.children[1]),this._walkAction=this._mixer.clipAction(this._animations[0]),this._walkAction.play(),this._modelGroup.add(this.model)}return Object(ge.a)(e,[{key:"update",value:function(e){this._mixer.update(e.delta),this._componentCollision&&this._updateState()}},{key:"setCollisionMesh",value:function(e){this._collisionMeshes=[e],this.container.add(e),e.material.visible=!1,this._componentCollision=be(this._objFrom,this._objTo,7,this._collisionMeshes)}},{key:"removeCollisionMesh",value:function(){this._collisionMeshes=null,this._componentCollision=null}},{key:"prepareToSay",value:function(e){this._state="say",this._modelGroup.lookAt(e.x,this.container.position.y,e.z)}},{key:"_updateState",value:function(){"go"===this._state&&(this._componentCollision.check()?this._startRotate():this._modelGroup.translateZ(.1));"rotate"===this._state&&(this._modelGroup.rotation.y+=this._targetAngle-this._modelGroup.rotation.y<0?-.01:.01,this._modelGroup.rotation.y%=2*Math.PI,Math.abs(this._modelGroup.rotation.y-this._targetAngle)<.5&&this._startGo())}},{key:"_startGo",value:function(){this._state="go"}},{key:"_startRotate",value:function(){this._state="rotate",this._targetAngle=(this._modelGroup.rotation.y+1.5+4*Math.random())%(2*Math.PI)}}]),e}();ye.botScene=null,ye.botMaterial=null;var be=function(e,t,n,o){var a=new G.Vector3,r=new G.Vector3;return{check:function(){return t.getWorldPosition(r),e.getWorldPosition(a),r.sub(a),!!new G.Raycaster(a,r,0,20).intersectObject(o[0],!0)[0]}}},_e=n(8),we=function(e){return{changeBot:function(t){e({type:"CHANGE_BOT",phrase:t})},clickPhrase:function(t){e({type:"CLICK_PHRASE",phrase:t}),setTimeout((function(){e({type:"PHRASE_EVENT",phrase:t}),t.levelEvent&&i.emit("changeLevelMode")(t.levelEvent)}),1e3)},toggleDialog:function(t){e({type:"TOGGLE_DIALOG",isDialog:t})},toggleButtonDialog:function(t){e({type:"TOGGLE_BUTTON",isButtonDialog:t})}}},Ne=n(6),Se=Object(_e.b)((function(e){return{userReplicies:e.app.userReplicies}}))((function(e){return Object(Ne.jsx)("div",{className:"userReplicies",children:e.userReplicies.map((function(t){return Object(Ne.jsx)("button",{onClick:function(){we(e.dispatch).clickPhrase(t)},children:t.q},Math.floor(1e5*Math.random()))}))})})),ke=Object(_e.b)((function(e){return{botAnswers:e.app.botAnswers}}))((function(e){return Object(Ne.jsx)("div",{className:"botAnswers",children:e.botAnswers.map((function(e){return Object(Ne.jsxs)("div",{children:[Object(Ne.jsx)("div",{className:"q",children:e.q}),Object(Ne.jsx)("div",{className:"a",children:e.a})]},Math.floor(1e5*Math.random()))}))})}));var je=0;i.subscribe("changeLevel")((function(e){e.direction,e.oldQuadrant,e.newQuadrant,e.counter;++je>2&&(we(Ae.dispatch).changeBot(),je=0)}));var Ae={dispatch:null},Oe=Object(_e.b)((function(e){return{isButtonDialog:e.app.isButtonDialog,isDialog:e.app.isDialog}}))((function(e){return!Ae.dispatch&&(Ae.dispatch=e.dispatch),Object(Ne.jsxs)("div",{className:"App",children:[Object(Ne.jsx)("div",{className:"dialog",children:e.isDialog&&Object(Ne.jsxs)("div",{className:"dialog-inner",children:[Object(Ne.jsx)(ke,{}),Object(Ne.jsx)(Se,{})]})}),e.isButtonDialog&&Object(Ne.jsx)("button",{className:"last-elem",onClick:function(){we(e.dispatch).toggleDialog(!e.isDialog)},children:e.isDialog?"close dialog":"open dialog"})]})})),Me=175.335,Le=(n(3),n(12)),Ee=n.n(Le),xe=n(9),De=n(22),Ce={isCanChangeBotIndex:!0,isDialogAnswered:!1,botIndex:-1,phraseIndex:0,phrasesData:[{phrases:[{q:"\u041f\u0440\u0438\u0432\u0435\u0442 !",a:"\u0414\u0435\u043d\u044c \u0434\u043e\u0431\u0440\u044b\u0439, \u043a\u0440\u0435\u043c\u043d\u0438\u0435\u0432\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u0436\u0438\u0437\u043d\u0438.",event:"nextReply",levelEvent:null},{q:"\u0427\u0442\u043e \u044d\u0442\u043e \u0437\u0430 \u043c\u0435\u0441\u0442\u043e ?",a:"\u042d\u0442\u043e \u044d\u043d\u0442\u0440\u043e\u043f\u0438\u0439\u043d\u044b\u0439 \u0433\u0438\u043f\u043f\u0435\u0440\u043b\u0430\u0431\u0438\u0440\u0438\u043d\u0442.",event:"close",levelEvent:null}]},{phrases:[{q:"\u0427\u0442\u043e \u0442\u044b \u0441\u0434\u0435\u0441\u044c \u0434\u0435\u043b\u0430\u0435\u0448\u044c !",a:"\u0421\u043e\u0431\u0438\u0440\u0430\u044e \u044d\u043d\u0435\u0440\u0433\u0438\u044e \u043d\u043e\u0447\u0438.",event:"nextReply",levelEvent:null},{q:"\u042f \u0443\u0436\u0435 \u0434\u043e\u043b\u0433\u043e \u0438\u0434\u0443 !",a:"\u0422\u0432\u043e\u0439 \u043f\u0443\u0442\u044c \u0435\u0449\u0435 \u043d\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d.",event:"close",levelEvent:null}]},{phrases:[{q:"\u042d\u0442\u043e \u0442\u044b \u0438\u043b\u0438 \u043d\u0435 \u0442\u044b?",a:"\u042f \u044d\u0442\u043e \u044f.",event:"nextReply",levelEvent:null},{q:"\u042f \u0443\u0436\u0435 \u0434\u043e\u043b\u0433\u043e \u0438\u0434\u0443 !",a:"\u0422\u0432\u043e\u0439 \u043f\u0443\u0442\u044c \u0435\u0449\u0435 \u043d\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d.",event:"close",levelEvent:"addStairs"}]},{phrases:[{q:"\u0427\u0442\u043e \u0442\u044b \u0441\u0434\u0435\u0441\u044c \u0434\u0435\u043b\u0430\u0435\u0448\u044c !",a:"\u0421\u043e\u0431\u0438\u0440\u0430\u044e \u044d\u043d\u0435\u0440\u0433\u0438\u044e \u0434\u043d\u044f.",event:"close",levelEvent:"addWell"}]},null],botAnswers:[],userReplicies:[],history:[],isDialog:!1,isButtonDialog:!1},Re=Object(xe.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;if("CLICK_PHRASE"===t.type)return Object(Y.a)(Object(Y.a)({},e),{},{botAnswers:[].concat(Object(T.a)(e.botAnswers),[t.phrase]),userReplicies:[]});if("PHRASE_EVENT"===t.type){var n=t.phrase.event;if("nextReply"===n){var o=e.phrasesData[e.botIndex],a=[o.phrases[e.phraseIndex+1]];return Object(Y.a)(Object(Y.a)({},e),{},{phraseIndex:e.phraseIndex++,userReplicies:a})}if("close"===n)return Object(Y.a)(Object(Y.a)({},e),{},{isDialogAnswered:!0,userReplicies:[],isButtonDialog:!0})}if("CHANGE_BOT"===t.type)return Object(Y.a)(Object(Y.a)({},e),{},{isCanChangeBotIndex:!0});if("TOGGLE_DIALOG"===t.type){if(!e.isCanChangeBotIndex&&e.isDialogAnswered)return Object(Y.a)(Object(Y.a)({},e),{},{isDialog:t.isDialog,isButtonDialog:!0});var r=e.isCanChangeBotIndex?e.botIndex+1:e.botIndex,i=[e.phrasesData[r].phrases[e.phraseIndex]];return Object(Y.a)(Object(Y.a)({},e),{},{botIndex:r,userReplicies:i,botAnswers:[],isDialog:t.isDialog,isCanChangeBotIndex:!1,isButtonDialog:!1})}return"TOGGLE_BUTTON"===t.type?Object(Y.a)(Object(Y.a)({},e),{},{isDialog:!1,isButtonDialog:t.isButtonDialog}):e}}),Ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||xe.d,Ye=Object(xe.e)(Re,Ie(Object(xe.a)(De.a)));Ee.a.render(Object(Ne.jsx)(_e.a,{store:Ye,children:Object(Ne.jsx)(Oe,{})}),document.getElementById("root")),function(){var e=document.querySelector(".app-wrapper"),t=document.querySelector("#butt-fullscreen");t.addEventListener("click",(function(){document.fullscreenElement||(e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen())}));var n=function(n){e.style.width=window.innerWidth+"px",e.style.height=window.innerHeight+"px",e.style.fontSize=Math.max(Math.min(Math.min(window.innerWidth,window.innerHeight),400),350)/50+"px",t.style.display=document.fullscreenElement?"none":"flex"};window.addEventListener("resize",n),n()}();var Te=function(e){!function(e){var t=e.emit(O),n={time:0,delta:0,count:0,oldTime:0},o=s.a((function(){return n}),(function(e){return e.time=Date.now(),e}),(function(e){return e.delta=.001*(e.time-e.oldTime),(isNaN(e.delta)||e.delta>1e3||0==e.delta)&&(e.delta=1e3/60*.001),e}),(function(e){return e.count=e.delta/(1/60),e}),(function(e){return t(e),e}),(function(e){return e.oldTime=e.time,e}),(function(e){return n=e}));!function e(){requestAnimationFrame(e),o(n)}()}(i),i.subscribe(O)((function(){return Z.b()}));var t=function(e,t){var n=E.canId,o=E.rendererCon,a=E.clearColor,r=E.amb,i=document.getElementById(n);o.canvas=i;var s=new G.WebGLRenderer(o);s.setClearColor(a),s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight);var l=new G.Scene;l.background=t.skyBox;var c,u=M[-1].outer,d=u.color,m=u.fogNear,p=u.fogFar;l.fog=new G.Fog(d,m,p);var f=r.color,h=r.strength;c=new G.AmbientLight(f,h),l.add(c);var g=null,v=function(){var e={width:window.innerWidth,height:window.innerHeight};s.setSize(e.width,e.height),g&&(g.aspect=e.width/e.height,g.updateProjectionMatrix())};window.addEventListener("resize",v),v();var y=l.add.bind(l);return e.subscribe(O)((function(){return g&&s.render(l,g)})),e.subscribe("toggleImgSceneBack")((function(e){var n=e.backgroundImg;console.log("backgroundImg",n),l.background=n?t.skyBox:null})),e.subscribe("changeEnvironment")((function(e){var t=e.newQuadrant,n=e.environmentMode;if(M[t[1]]){var o=M[t[1]][n],a=o.fogNear,r=o.fogFar,i=o.color,u={color:l.fog.color,near:l.fog.near,far:l.fog.far},d={color:new G.Color(i),near:a,far:r};new Z.a(u).to(d,3e3).onUpdate((function(){l.fog.color=u.color,l.fog.near=u.near,l.fog.far=u.far,c.color=u.color,s.setClearColor(u.color)})).start()}})),{setCamera:function(e){return g=e},addToScene:y}}(i,e);new o(i);var n=ie(i);t.setCamera(n.getCamera()),t.addToScene(n.getObj());var a=function(e){var t=X(e),n={},o={};return e.collisionsBotsRooms={},e["level-rooms"].traverse((function(a){if(a.name.includes("room_")){var r=new G.Mesh(a.geometry);n[a.name]=r,r.name=a.name,o[a.name]=r}if(a.name.includes("collision_")){var i=new G.Mesh(a.geometry);e.collisionsBotsRooms[a.name]=i,i.name=a.name,o[a.name]=i}if(a.name.includes("outer_walls")){var s=new G.Mesh(a.geometry);s.name=a.name,o[a.name]=s}if(a.name.includes("outer_road")){var l=new G.Mesh(a.geometry,t.green);l.name=a.name,o[a.name]=l}if(a.name.includes("outer_floor")){var c=new G.Mesh(a.geometry,t.road);c.name=a.name,o[a.name]=c}})),{rooms:n,allMeshes:o,materials:t}}(e),r=a.allMeshes,l=a.rooms,c=a.materials,u=function(e,t,n){var o=new G.Group,a={},r="normal",i=function n(r,i){var s=i||pe[Math.floor(Math.random()*pe.length)],l="r_".concat(r[0],"_").concat(r[1],"_").concat(r[2]),c=t[s].clone();c.position.set(r[0]*A,70*r[1],r[2]*A),ee(c),oe(c),o.add(c),a[l]=c,e.emit("levelChanged")({typeLevelChange:"createRoom",instanceKey:s,objKey:l,kv:r,isAddBot:"room_01"===s}),"room_06"===s&&n([r[0],r[1]+1,r[2]],"room_dummy")},s=function t(n){var r="r_".concat(n[0],"_").concat(n[1],"_").concat(n[2]);if(a[r]){var i=a[r].name;o.remove(a[r]),te(a[r]),ae(a[r]),delete a[r],e.emit("levelChanged")({typeLevelChange:"destroyRoom",instanceKey:i,objKey:r,kv:n,isRemoveBot:"room_01"===i}),"room_dummy"===i&&t([n[0],n[1]-1,n[2]]),"room_06"===i&&t([n[0],n[1]+1,n[2]])}};i([0,-1,0],"room_02"),i([0,-1,-1],"room_02"),i([-1,-1,0],"room_02"),i([1,-1,0],"room_02");for(var l={},c=0;c<fe.length;++c){var u=n[fe[c]].clone();ee(u),oe(u),o.add(u),u.position.set(0,-70,0),l[fe[c]]=u}e.subscribe("destroyStartCorridor")((function(){for(var e in l)te(l[e]),ae(l[e]),o.remove(l[e])}));var d=0,m=!1;return e.subscribe("changeLevel")((function(t){t.direction;var n=t.oldQuadrant,o=t.newQuadrant,l=t.counter;console.log(n,o,l);var c=!1;l&&(d=l(d),console.log("wentLevels",d),m?m=!1:(d<3?r="normal":"normal"===r&&(r="addBot"),"addBot"===r&&(c="room_01",m=!0),"addStairs"===r&&(c="room_06",m=!0),"addWell"===r&&(c="room_07"))),e.subscribe("changeLevelMode")((function(e){return r=e}));var u=n,p=o;p[0]<u[0]&&(console.log("----------- west"),s([u[0]+1,u[1],u[2]]),a["r_".concat(p[0]+1,"_").concat(p[1],"_").concat(p[2])]=a["r_".concat(u[0],"_").concat(u[1],"_").concat(u[2])],i([u[0]-2,u[1],u[2]],c),s([u[0],u[1],u[2]-1]),i([p[0],p[1],p[2]-1],c),s([u[0],u[1],u[2]+1]),i([p[0],p[1],p[2]+1],c)),p[0]>u[0]&&(console.log("----------- east"),s([u[0]-1,u[1],u[2]]),a["r_".concat(p[0]-1,"_").concat(p[1],"_").concat(p[2])]=a["r_".concat(u[0],"_").concat(u[1],"_").concat(u[2])],i([u[0]+2,u[1],u[2]],c),s([u[0],u[1],u[2]-1]),i([p[0],p[1],p[2]-1],c),s([u[0],u[1],u[2]+1]),i([p[0],p[1],p[2]+1],c)),p[2]<u[2]&&(console.log("-----------north"),s([u[0],u[1],u[2]+1]),a["r_".concat(p[0],"_").concat(p[1],"_").concat(p[2]+1)]=a["r_".concat(u[0],"_").concat(u[1],"_").concat(u[2])],i([u[0],u[1],u[2]-2],c),s([u[0]-1,u[1],u[2]]),i([p[0]-1,p[1],p[2]],c),s([u[0]+1,u[1],u[2]]),i([p[0]+1,p[1],p[2]],c)),p[2]>u[2]&&(console.log("-----------south"),s([u[0],u[1],u[2]-1]),a["r_".concat(p[0],"_").concat(p[1],"_").concat(p[2]-1)]=a["r_".concat(u[0],"_").concat(u[1],"_").concat(u[2])],i([u[0],u[1],u[2]+2],c),s([u[0]-1,u[1],u[2]]),i([p[0]-1,p[1],p[2]],c),s([u[0]+1,u[1],u[2]]),i([p[0]+1,p[1],p[2]],c)),(p[1]>u[1]||p[1]<u[1])&&(console.log("-----------top"),s([u[0],u[1],u[2]-1]),i([p[0],p[1],p[2]-1]),s([u[0],u[1],u[2]+1]),i([p[0],p[1],p[2]+1]),s([u[0]-1,u[1],u[2]]),i([p[0]-1,p[1],p[2]]),s([u[0]+1,u[1],u[2]]),i([p[0]+1,p[1],p[2]]))})),{group:o}}(i,l,r).group;t.addToScene(u);var d=function(e,t,n){ye.botMaterial=t.iron,ye.botScene=e.bot;for(var o=new G.Group,a=[],r=0;r<5;++r){var i=new ye;o.add(i.container),i.container.position.set(30*r-30,-92,750),i.inScene="aaa",i.setCollisionMesh(e.collisionsBotsRooms.collision_r_01.clone()),a.push(i)}return n.subscribe(O)((function(e){for(var t=0;t<a.length;++t)a[t].inScene&&a[t].update(e)})),n.subscribe("destroyStartCorridor")((function(){for(var e=0;e<a.length;++e)a[e].inScene=null,a[e].container.position.y=-1e4,a[e].removeCollisionMesh()})),n.subscribe("levelChanged")((function(t){t.typeLevelChange,t.instanceKey;var n=t.objKey,o=t.kv,r=t.isAddBot,i=t.isRemoveBot;if(r)for(var s=0;s<a.length;++s)if(!a[s].inScene){a[s].inScene=n,a[s].container.position.set(o[0]*Me,70*o[1]+14,o[2]*Me),a[s].setCollisionMesh(e.collisionsBotsRooms.collision_r_01.clone());break}if(i)for(var l=0;l<a.length;++l)a[l].inScene===n&&(a[l].inScene=null,a[l].container.position.y=-1e4,a[l].removeCollisionMesh())})),n.subscribe("playerMove")((function(e){for(var t=0;t<a.length;++t)if(a[t].inScene){var n=new G.Vector3;a[t]._modelGroup.getWorldPosition(n);var o=n.distanceTo(e);"say"===a[t]._state&&o>30?(a[t]._startRotate(),we(Ae.dispatch).toggleButtonDialog(!1)):"say"!==a[t]._state&&o<30&&(a[t].prepareToSay(e),we(Ae.dispatch).toggleButtonDialog(!0))}})),{groupBots:o}}(e,c,i);t.addToScene(d.groupBots),function(){var e=Q();i.subscribe("playerMove")((function(t){var n=e.update(t),o=n.currentQuadrant,a=n.oldQuadrant;if(n.isChanged){var r=F(a,o);r.length&&r.forEach((function(e){return i.emit(e.emitKey)(e)}))}}))}(),setTimeout((function(){return n.start()}),500),function(e){var t=document.createElement("div");t.style.display="none",t.classList.add("info-cont");var n=document.createElement("div");n.classList.add("info-wrap"),t.appendChild(n);var o=document.createElement("div"),a=function(){o.innerHTML=me('Previous part "Factory": '),o.innerHTML+="<a href='http://js.otrisovano.ru".concat(me("/bridge"),'\' target="blanck">').concat(me("link"),"</a></br>"),o.innerHTML+=me("Author: "),o.innerHTML+="<a href='http://otrisovano.ru' target=\"blanck\">".concat(me("link"),"</a></br>"),o.innerHTML+=me("Github: "),o.innerHTML+="<a href='https://github.com/fire888/levels' target=\"blanck\">".concat(me("link"),"</a></br>")};a(),n.appendChild(o);var r=document.createElement("button");r.classList.add("control"),r.innerText="x",r.addEventListener("click",(function(){t.style.display="none"})),n.appendChild(r),document.querySelector("#butt-info").addEventListener("click",(function(){t.style.display="flex"})),e.subscribe("setLanguage")((function(e){de=e,a()})),document.querySelector(".app-wrapper").appendChild(t)}(i),function(e){var t=document.querySelector(".startbuttons-wrapper"),n=document.querySelector(".progress-wrapper");ce=!1,t.style.display="flex",t.addEventListener("click",(function(t){e.emit("setLanguage")(t.target.dataset.lang),document.querySelector(".start-screen").style.display="none"})),n.style.display="none"}(i)};window.addEventListener("load",(function(){return(e=k,new Promise((function(t){z=e,W=t,H=0,D=D||new q.a,C=C||new G.TextureLoader,R=R||new K.a,I=I||new G.CubeTextureLoader,V(z[H])}))).then(Te);var e}))}},[[37,1,2]]]);
//# sourceMappingURL=main.dca7a724.chunk.js.map