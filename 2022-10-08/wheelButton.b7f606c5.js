import{_ as C,s as F,i as o,x,y as M,o as c,b as r,f as n,a as b,w as k,J as B,k as _,u as G,g as W,t as Y,z as h,A as g,n as w,q as S,p as z,m as D,B as X}from"./1.47be6668.js";const O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAEZJREFUKFONz8ERgEAIQ9G3RWoRFmQRWoStOTnI4GU1p8B8CAxc2HF6a8E2EHNgbVD1AkQdSl0DD9Ch+Nr2G5hGfB45ffMGToUWMQXrCUgAAAAASUVORK5CYII=",T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAD9JREFUKFNjZCASMBKpjoEGCvX09HT+//8/8f///9+wOYORkZHr79+/eYxaWlrazMzMk/ApZGRkzKeBG6kePADJoxFq63/zxAAAAABJRU5ErkJggg==",Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAFZJREFUKFNjZEAD2traWiChq1evXkOWYkRXqKOjsx8kduXKFUcaK9TR0dFjYGCYxMDA8BVqlQWUPgGluf///5/PqK2trc/IyDgRn0IGBoa8gfQMsQEOAKb0Km3irbhKAAAAAElFTkSuQmCC";const $=e=>(z("data-v-6c1e7799"),e=e(),D(),e),J={class:"button-list"},V=$(()=>n("img",{src:O},null,-1)),H={key:0,src:T},q={key:1,src:Q},Z={key:0,class:"app-name"},j=["src"],L={class:"content"},P={__name:"window",props:{appName:String,icon:String,headerBg:{type:String,default:"linear-gradient(90deg, #fafafa, #fafafa)"},showClose:{type:Boolean,default:!0},showExpand:{type:Boolean,default:!0},closeFun:{type:Function,default:()=>{}}},setup(e){const a=e,u=F(),s=o(!1),i=()=>{setTimeout(()=>{u.closeApp(),a.closeFun()},200),s.value=!0},t=o(!1),d=()=>{t.value=!t.value,setTimeout(()=>u.dockHide=t.value,t.value?0:500)},l=S(),A=o("12%"),p=o("0px"),y=o("20%"),N=o("0px"),R=o("auto"),m=o(!1);return x(()=>{M({dom:l.refs.header,mouseMove:(f,v)=>{const U=f.offsetX,E=f.offsetY,K=v.clientX-U,I=v.clientY-E;A.value=`${I}px`,y.value=`${K}px`,R.value="0",m.value=!0},mouseUp:()=>m.value=!1})}),(f,v)=>(c(),r("div",{class:w({window:!0,outting:s.value,"default-size":!t.value,"max-size":t.value,"is-moving":m.value}),style:h({top:A.value,bottom:p.value,right:N.value,left:y.value}),ref:"window"},[n("div",{class:"header",ref:"header",onDblclick:d,style:h({background:e.headerBg})},[n("div",J,[e.showClose?(c(),b(B,{key:0,onClick:i,type:"icon",bg:"red",size:16},{icon:k(()=>[V]),_:1})):_("",!0),e.showExpand?(c(),b(B,{key:1,style:{"margin-left":"5px"},onClick:d,type:"icon",bg:"green",size:16},{icon:k(()=>[t.value?(c(),r("img",H)):(c(),r("img",q))]),_:1})):_("",!0)]),e.appName?(c(),r("div",Z,[n("img",{class:"icon",src:G(W)(e.icon)},null,8,j),n("span",null,Y(e.appName),1)])):_("",!0)],36),n("div",L,[g(f.$slots,"default",{style:"height: 100%; width: 100%"},void 0,!0)])],6))}},ne=C(P,[["__scopeId","data-v-6c1e7799"]]);const ee={class:"wheel-button",ref:"wheel-button"},te={class:"center"},se={__name:"wheelButton",props:{leftWidth:{type:Number,default:40},rightWidth:{type:Number,default:40}},setup(e){const a=o(1),u=S();let s=0,i=0,t=null;const d=l=>{const{deltaX:A,deltaY:p}=l;i<30&&i>-30&&l.preventDefault(),s!==null&&(s+=A,i+=p,s>=200||s<=-200?(s>=200?a.value=Math.min(2,a.value+1):a.value=Math.max(0,a.value-1),s=null,clearTimeout(t),t=setTimeout(()=>{s=0,i=0},600)):(clearTimeout(t),t=setTimeout(()=>{s=0,i=0},1500)))};return x(()=>{u.refs["wheel-button"].onmousewheel=d}),X(()=>{u.refs["wheel-button"].onmousewheel=null}),(l,A)=>(c(),r("div",ee,[n("div",{ref:"left",class:w(["btn left",{"btn-no":a.value!==0}]),style:h({width:`${e.leftWidth}px`})},[g(l.$slots,"left",{},void 0,!0)],6),n("div",te,[g(l.$slots,"center",{},void 0,!0)]),n("div",{ref:"right",style:h({width:`${e.rightWidth}px`}),class:w(["btn right",{"btn-no":a.value!==2}])},[g(l.$slots,"right",{},void 0,!0)],6)],512))}},ae=C(se,[["__scopeId","data-v-5ae4ec9d"]]);export{ae as W,ne as a};
