(()=>{function L(){}var De=t=>t;function it(t,e){for(let n in e)t[n]=e[n];return t}function je(t){return t()}function ot(){return Object.create(null)}function B(t){t.forEach(je)}function Y(t){return typeof t=="function"}function W(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function st(t){return Object.keys(t).length===0}function ge(t,e,n,o){if(t){let s=lt(t,e,n,o);return t[0](s)}}function lt(t,e,n,o){return t[1]&&o?it(n.ctx.slice(),t[1](o(e))):n.ctx}function be(t,e,n,o){if(t[2]&&o){let s=t[2](o(n));if(e.dirty===void 0)return s;if(typeof s=="object"){let i=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)i[l]=e.dirty[l]|s[l];return i}return e.dirty|s}return e.dirty}function ye(t,e,n,o,s,i){if(s){let r=lt(e,n,o,i);t.p(r,s)}}function we(t){if(t.ctx.length>32){let e=[],n=t.ctx.length/32;for(let o=0;o<n;o++)e[o]=-1;return e}return-1}function Re(t){return t??""}function ct(t){return t&&Y(t.destroy)?t.destroy:L}var at=typeof window<"u",Nt=at?()=>window.performance.now():()=>Date.now(),We=at?t=>requestAnimationFrame(t):L;var ae=new Set;function ut(t){ae.forEach(e=>{e.c(t)||(ae.delete(e),e.f())}),ae.size!==0&&We(ut)}function Lt(t){let e;return ae.size===0&&We(ut),{promise:new Promise(n=>{ae.add(e={c:t,f:n})}),abort(){ae.delete(e)}}}var ft=!1;function Bt(){ft=!0}function qt(){ft=!1}function _(t,e){t.appendChild(e)}function dt(t){if(!t)return document;let e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function jt(t){let e=y("style");return Rt(dt(t),e),e.sheet}function Rt(t,e){_(t.head||t,e)}function F(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function I(){return O(" ")}function te(){return O("")}function C(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Wt(t){return Array.from(t.childNodes)}function q(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ue(t,e){t.value=e??""}function ze(t,e,n){t.classList[n?"add":"remove"](e)}function mt(t,e,n=!1){let o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}var Oe=new Map,Ce=0;function Ut(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function zt(t,e){let n={stylesheet:jt(e),rules:{}};return Oe.set(t,n),n}function rt(t,e,n,o,s,i,r,l=0){let c=16.666/o,a=`{
`;for(let g=0;g<=1;g+=c){let v=e+(n-e)*i(g);a+=g*100+`%{${r(v,1-v)}}
`}let m=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Ut(m)}_${l}`,u=dt(t),{stylesheet:b,rules:d}=Oe.get(u)||zt(u,t);d[f]||(d[f]=!0,b.insertRule(`@keyframes ${f} ${m}`,b.cssRules.length));let p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${o}ms linear ${s}ms 1 both`,Ce+=1,f}function Ht(t,e){let n=(t.style.animation||"").split(", "),o=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),s=n.length-o.length;s&&(t.style.animation=o.join(", "),Ce-=s,Ce||Gt())}function Gt(){We(()=>{Ce||(Oe.forEach(t=>{let{stylesheet:e}=t,n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),Oe.clear())})}var he;function _e(t){he=t}function $e(){if(!he)throw new Error("Function called outside component initialization");return he}function He(t){$e().$$.on_mount.push(t)}function J(t){$e().$$.on_destroy.push(t)}function ne(){let t=$e();return(e,n)=>{let o=t.$$.callbacks[e];if(o){let s=mt(e,n);o.slice().forEach(i=>{i.call(t,s)})}}}function Ge(t,e){$e().$$.context.set(t,e)}var me=[];var V=[],Ee=[],Be=[],Jt=Promise.resolve(),qe=!1;function Vt(){qe||(qe=!0,Jt.then(ht))}function ee(t){Ee.push(t)}function _t(t){Be.push(t)}var Ne=new Set,Ie=0;function ht(){let t=he;do{for(;Ie<me.length;){let e=me[Ie];Ie++,_e(e),Yt(e.$$)}for(_e(null),me.length=0,Ie=0;V.length;)V.pop()();for(let e=0;e<Ee.length;e+=1){let n=Ee[e];Ne.has(n)||(Ne.add(n),n())}Ee.length=0}while(me.length);for(;Be.length;)Be.pop()();qe=!1,Ne.clear(),_e(t)}function Yt(t){if(t.fragment!==null){t.update(),B(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ee)}}var pe;function Kt(){return pe||(pe=Promise.resolve(),pe.then(()=>{pe=null})),pe}function Le(t,e,n){t.dispatchEvent(mt(`${e?"intro":"outro"}${n}`))}var Me=new Set,G;function oe(){G={r:0,c:[],p:G}}function re(){G.r||B(G.c),G=G.p}function S(t,e){t&&t.i&&(Me.delete(t),t.i(e))}function D(t,e,n,o){if(t&&t.o){if(Me.has(t))return;Me.add(t),G.c.push(()=>{Me.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}var Qt={duration:0};function ve(t,e,n,o){let s=e(t,n),i=o?0:1,r=null,l=null,c=null;function a(){c&&Ht(t,c)}function m(u,b){let d=u.b-i;return b*=Math.abs(d),{a:i,b:u.b,d,duration:b,start:u.start,end:u.start+b,group:u.group}}function f(u){let{delay:b=0,duration:d=300,easing:p=De,tick:g=L,css:v}=s||Qt,M={start:Nt()+b,b:u};u||(M.group=G,G.r+=1),r||l?l=M:(v&&(a(),c=rt(t,i,u,d,b,p,v)),u&&g(0,1),r=m(M,d),ee(()=>Le(t,u,"start")),Lt(k=>{if(l&&k>l.start&&(r=m(l,d),l=null,Le(t,r.b,"start"),v&&(a(),c=rt(t,i,r.b,r.duration,0,p,s.css))),r){if(k>=r.end)g(i=r.b,1-i),Le(t,r.b,"end"),l||(r.b?a():--r.group.r||B(r.group.c)),r=null;else if(k>=r.start){let j=k-r.start;i=r.a+r.d*p(j/r.duration),g(i,1-i)}}return!!(r||l)}))}return{run(u){Y(s)?Kt().then(()=>{s=s(),f(u)}):f(u)},end(){a(),r=l=null}}}var Ln=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function gt(t,e,n){let o=t.$$.props[e];o!==void 0&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function ke(t){t&&t.c()}function ue(t,e,n,o){let{fragment:s,on_mount:i,on_destroy:r,after_update:l}=t.$$;s&&s.m(e,n),o||ee(()=>{let c=i.map(je).filter(Y);r?r.push(...c):B(c),t.$$.on_mount=[]}),l.forEach(ee)}function ie(t,e){let n=t.$$;n.fragment!==null&&(B(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Xt(t,e){t.$$.dirty[0]===-1&&(me.push(t),Vt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,n,o,s,i,r,l=[-1]){let c=he;_e(t);let a=t.$$={fragment:null,ctx:null,props:i,update:L,not_equal:s,bound:ot(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ot(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let m=!1;if(a.ctx=n?n(t,e.props||{},(f,u,...b)=>{let d=b.length?b[0]:u;return a.ctx&&s(a.ctx[f],a.ctx[f]=d)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](d),m&&Xt(t,f)),u}):[],a.update(),m=!0,B(a.before_update),a.fragment=o?o(a.ctx):!1,e.target){if(e.hydrate){Bt();let f=Wt(e.target);a.fragment&&a.fragment.l(f),f.forEach(x)}else a.fragment&&a.fragment.c();e.intro&&S(t.$$.fragment),ue(t,e.target,e.anchor,e.customElement),qt(),ht()}_e(c)}var Zt;typeof HTMLElement=="function"&&(Zt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(je).filter(Y);for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){B(this.$$.on_disconnect)}$destroy(){ie(this,1),this.$destroy=L}$on(t,e){let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let o=n.indexOf(e);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!st(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var R=class{$destroy(){ie(this,1),this.$destroy=L}$on(e,n){let o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{let s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!st(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var Te={maptiles:"https://tiles.search.brave.com/maptiles",production:!0,watch_mode:!1};var en=(()=>{if(typeof window>"u")return{};let t=window?.document?.getElementById("js-shared")?.getAttribute("data");if(!t)return{};try{return JSON.parse(t)}catch{return{}}})(),Xn=Te.production?()=>{}:console.log,Zn=Te.production?()=>{}:console.error;function bt(t,e){let n=o=>{let s=!1;for(let i of e){let r=document.getElementById(i);if(r&&r.contains(o.target)){s=!0;return}}t&&!t.contains(o.target)&&!o.defaultPrevented&&!s&&t.dispatchEvent(new CustomEvent("click_outside",t))};return document.addEventListener("click",n,!0),{destroy(){document.removeEventListener("click",n,!0)}}}function yt(){if(document.cookie){let t=document.cookie.split(";").map(n=>n.trim()).map(n=>n.split("=")),e={};for(let n=0;n<t.length;n+=1){let[o,s]=t[n];e[o]=s}return e}return{}}function tn(){try{return document.documentElement.lang.slice(0,2)}catch{return"en"}}function nn(){try{let t=document.getElementById("js-ask-location");if(!t)return;let e=JSON.parse(t.getAttribute("data"));return`${e.lat}x${e.long}`}catch{return}}function on(){return new URL(window.location.href).searchParams.get("geoloc")}function rn(){let t=on();if(t)return t;let e=yt();return e.geoloc?e.geoloc:nn()}function wt({withGeoloc:t=!0}={}){let e=new URL(window.location.href),{reproducible_parameters:n={}}=en;for(let[i,r]of Object.entries(n))e.searchParams.has(i)===!1&&r!==null&&e.searchParams.set(i,r);let o=yt();for(let i of["spellcheck","safesearch","country","external"])e.searchParams.has(i)===!1&&o[i]!==void 0&&e.searchParams.set(i,o[i]);let s=tn();if(e.searchParams.has("search_lang")===!1&&e.searchParams.set("search_lang",s),t){if(e.searchParams.has("geoloc")===!1){let i=rn();i&&e.searchParams.set("geoloc",i)}}else e.searchParams.delete("geoloc");return e.searchParams.set("bypass_cache","1"),e.href}function sn(t,e){return fetch(t,{credentials:Te.production?"omit":"same-origin",method:"POST",mode:"no-cors",body:JSON.stringify(e),referrerPolicy:"no-referrer",headers:{"Referrer-Policy":"no-referrer"}})}function vt(t){return sn("/api/feedback",t)}function Pe(){let t,e,n;return{disableScroll:()=>{t=window.scrollY,e=document.body.style.position,n=document.body.style.overflow,document.body.style.position="fixed",document.body.style.top=`-${t}px`,document.body.style.overflow="hidden"},enableScroll:()=>{document.body.style.position=e||"",document.body.style.top="",document.body.style.overflow=n||"",window.scrollTo(0,t)}}}function Ae(t,e){if(t&&e.key==="Tab"){let n=t.querySelectorAll("*"),o=Array.from(n).filter(i=>i.tabIndex>=0);if(!o.length)return;let s=o.indexOf(document.activeElement);s===-1&&e.shiftKey&&(s=0),s+=o.length+(e.shiftKey?-1:1),s%=o.length,o[s].focus(),e.preventDefault()}}function ln(t){let e,n,o,s,i,r,l=t[4].default,c=ge(l,t,t[3],null);return{c(){e=y("div"),n=I(),o=y("div"),c&&c.c(),h(e,"class","modal-background svelte-1a9nkpz"),h(o,"class","modal-js svelte-1a9nkpz"),h(o,"role","dialog"),h(o,"aria-modal","true")},m(a,m){F(a,e,m),F(a,n,m),F(a,o,m),c&&c.m(o,null),t[5](o),s=!0,i||(r=[C(window,"keydown",t[2]),C(e,"click",t[1])],i=!0)},p(a,[m]){c&&c.p&&(!s||m&8)&&ye(c,l,a,a[3],s?be(l,a[3],m,null):we(a[3]),null)},i(a){s||(S(c,a),s=!0)},o(a){D(c,a),s=!1},d(a){a&&x(e),a&&x(n),a&&x(o),c&&c.d(a),t[5](null),i=!1,B(r)}}}function cn(t,e,n){let{$$slots:o={},$$scope:s}=e,i=ne(),{disableScroll:r,enableScroll:l}=Pe(),c=()=>{l(),i("close")},a,m=b=>{if(a&&b.key==="Escape"){c();return}Ae(a,b)},f=typeof document<"u"&&document.activeElement;f&&J(()=>{f.focus()}),J(()=>{c()}),He(()=>{r()});function u(b){V[b?"unshift":"push"](()=>{a=b,n(0,a)})}return t.$$set=b=>{"$$scope"in b&&n(3,s=b.$$scope)},[a,c,m,s,o,u]}var Je=class extends R{constructor(e){super(),K(this,e,cn,ln,W,{})}},Ve=Je;var $={value:"helpful",type:"positive",label:"This is helpful"},Q={value:"irrelevant",type:"negative",label:"This isn't relevant"},U={value:"wrong",type:"negative",label:"Something is wrong"},A={value:"not_useful",type:"negative",label:"This isn't useful"},Ye={type:"negative",value:"wrong_location",label:"The location is wrong"},an={type:"negative",value:"wrong_weather",label:"The weather is wrong"},un={type:"negative",value:"wrong_currency",label:"The currency is wrong"},fn={type:"negative",value:"wrong_currency_rate",label:"The currency rate is wrong"},dn={type:"negative",value:"wrong_currency",label:"The cryptocurrency is wrong"},pn={type:"negative",value:"wrong_cryptocurrency",label:"The cryptocurrency price is wrong"},mn={type:"negative",value:"wrong_unit",label:"The unit is wrong"},_n={type:"negative",value:"wrong_timezone",label:"The times are wrong"},hn={type:"negative",value:"wrong_stock",label:"The stock is wrong"},gn={type:"negative",value:"wrong_stock_data",label:"The stock price is wrong"},kt={generic:[$,Q,U,A],qanda:[$,Q,U,A],infobox:[$,Q,U,A],locations:[$,Q,Ye,A],weather:[$,an,Ye,A],currency:[$,un,fn,A],cryptocurrency:[$,dn,pn,A],timezones:[$,Q,_n,Ye,A],unitConversion:[$,mn,A],stocks:[$,hn,gn,A],faq:[$,Q,U,A],formula1:[$,Q,U],timer:[$,U,A],basketball:[$,U,A],football:[$,U,A],baseball:[$,U,A],discussions:[$,Q,U,A]};var fe='<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" d="M12.232 1.844A1.08 1.08 0 0010.704.316L6.548 4.472 2.393.317A1.08 1.08 0 00.865 1.845L5.02 6 .865 10.155a1.08 1.08 0 101.528 1.528l4.155-4.155 4.156 4.156a1.08 1.08 0 101.528-1.528L8.076 6l4.156-4.156z" clip-rule="evenodd"/></svg>';var de=[];function xt(t,e=L){let n,o=new Set;function s(l){if(W(t,l)&&(t=l,n)){let c=!de.length;for(let a of o)a[1](),de.push(a,t);if(c){for(let a=0;a<de.length;a+=2)de[a][0](de[a+1]);de.length=0}}}function i(l){s(l(t))}function r(l,c=L){let a=[l,c];return o.add(a),o.size===1&&(n=e(s)||L),l(t),()=>{o.delete(a),o.size===0&&(n(),n=null)}}return{set:s,update:i,subscribe:r}}function Ft(t){let e=t-1;return e*e*e+1}function Ke(t,{delay:e=0,duration:n=400,easing:o=De}={}){let s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:o,css:i=>`opacity: ${i*s}`}}function Qe(t,{delay:e=0,duration:n=400,easing:o=Ft,x:s=0,y:i=0,opacity:r=0}={}){let l=getComputedStyle(t),c=+l.opacity,a=l.transform==="none"?"":l.transform,m=c*(1-r);return{delay:e,duration:n,easing:o,css:(f,u)=>`
			transform: ${a} translate(${(1-f)*s}px, ${(1-f)*i}px);
			opacity: ${c-m*u}`}}var yn=t=>({}),St=t=>({});function It(t){let e,n,o,s,i,r,l,c,a,m,f,u=t[1]&&Et(t),b=t[15].default,d=ge(b,t,t[14],null),p=(t[1]||t[6])&&Ot(t);return{c(){e=y("div"),u&&u.c(),n=I(),o=y("div"),d&&d.c(),l=I(),p&&p.c(),c=te(),h(o,"class","wrapper svelte-17u4s0t"),h(e,"ref",t[3]),h(e,"class",s=Re(`ContextMenu ${t[2]}`)+" svelte-17u4s0t"),h(e,"role","dialog"),h(e,"aria-modal","true"),ze(e,"ContextMenu--FullView",t[6])},m(g,v){F(g,e,v),u&&u.m(e,null),_(e,n),_(e,o),d&&d.m(o,null),t[18](e),F(g,l,v),p&&p.m(g,v),F(g,c,v),a=!0,m||(f=[C(e,"introstart",t[16]),C(e,"outroend",t[17]),ct(i=bt.call(null,e,[t[5]])),C(e,"click_outside",t[10])],m=!0)},p(g,v){t=g,t[1]?u?(u.p(t,v),v&2&&S(u,1)):(u=Et(t),u.c(),S(u,1),u.m(e,n)):u&&(oe(),D(u,1,1,()=>{u=null}),re()),d&&d.p&&(!a||v&16384)&&ye(d,b,t,t[14],a?be(b,t[14],v,null):we(t[14]),null),(!a||v&8)&&h(e,"ref",t[3]),(!a||v&4&&s!==(s=Re(`ContextMenu ${t[2]}`)+" svelte-17u4s0t"))&&h(e,"class",s),i&&Y(i.update)&&v&32&&i.update.call(null,[t[5]]),v&68&&ze(e,"ContextMenu--FullView",t[6]),t[1]||t[6]?p?(p.p(t,v),v&66&&S(p,1)):(p=Ot(t),p.c(),S(p,1),p.m(c.parentNode,c)):p&&(oe(),D(p,1,1,()=>{p=null}),re())},i(g){a||(S(u),S(d,g),ee(()=>{r||(r=ve(e,Qe,t[1]?t[12]:t[13],!0)),r.run(1)}),S(p),a=!0)},o(g){D(u),D(d,g),r||(r=ve(e,Qe,t[1]?t[12]:t[13],!1)),r.run(0),D(p),a=!1},d(g){g&&x(e),u&&u.d(),d&&d.d(g),t[18](null),g&&r&&r.end(),g&&x(l),p&&p.d(g),g&&x(c),m=!1,B(f)}}}function Et(t){let e,n,o,s=t[15].header,i=ge(s,t,t[14],St),r=i||wn(t);return{c(){e=y("div"),n=y("div"),r&&r.c(),h(n,"class","wrapper svelte-17u4s0t"),h(e,"class","header svelte-17u4s0t")},m(l,c){F(l,e,c),_(e,n),r&&r.m(n,null),o=!0},p(l,c){i?i.p&&(!o||c&16384)&&ye(i,s,l,l[14],o?be(s,l[14],c,yn):we(l[14]),St):r&&r.p&&(!o||c&16)&&r.p(l,o?c:-1)},i(l){o||(S(r,l),o=!0)},o(l){D(r,l),o=!1},d(l){l&&x(e),r&&r.d(l)}}}function Mt(t){let e,n;return{c(){e=y("h2"),n=O(t[4]),h(e,"class","header-text svelte-17u4s0t")},m(o,s){F(o,e,s),_(e,n)},p(o,s){s&16&&q(n,o[4])},d(o){o&&x(e)}}}function wn(t){let e,n,o,s,i=t[4]&&Mt(t);return{c(){i&&i.c(),e=I(),n=y("button"),h(n,"class","btn btn--icon btn--sm close-btn svelte-17u4s0t")},m(r,l){i&&i.m(r,l),F(r,e,l),F(r,n,l),n.innerHTML=fe,o||(s=C(n,"click",t[10]),o=!0)},p(r,l){r[4]?i?i.p(r,l):(i=Mt(r),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null)},d(r){i&&i.d(r),r&&x(e),r&&x(n),o=!1,s()}}}function Ot(t){let e,n,o,s,i;return{c(){e=y("div"),h(e,"class","ContextMenu__background svelte-17u4s0t")},m(r,l){F(r,e,l),o=!0,s||(i=C(e,"click",t[10]),s=!0)},p:L,i(r){o||(ee(()=>{n||(n=ve(e,Ke,{duration:150},!0)),n.run(1)}),o=!0)},o(r){n||(n=ve(e,Ke,{duration:150},!1)),n.run(0),o=!1},d(r){r&&x(e),r&&n&&n.end(),s=!1,i()}}}function vn(t){let e,n,o,s,i=t[0]&&It(t);return{c(){i&&i.c(),e=te()},m(r,l){i&&i.m(r,l),F(r,e,l),n=!0,o||(s=C(window,"keydown",t[11]),o=!0)},p(r,[l]){r[0]?i?(i.p(r,l),l&1&&S(i,1)):(i=It(r),i.c(),S(i,1),i.m(e.parentNode,e)):i&&(oe(),D(i,1,1,()=>{i=null}),re())},i(r){n||(S(i),n=!0)},o(r){D(i),n=!1},d(r){i&&i.d(r),r&&x(e),o=!1,s()}}}var kn=Symbol();function xn(t,e,n){let{$$slots:o={},$$scope:s}=e,i=ne(),{disableScroll:r,enableScroll:l}=Pe(),{show:c=!1}=e,{is_mobile:a=!1}=e,{classes:m=""}=e,{ref:f=null}=e,{header:u=null}=e,{triggeringId:b=null}=e,{isFullView:d=!1}=e,p=()=>{i("close")},g,v=w=>{if(g&&w.key==="Escape"){p();return}Ae(g,w)},M=typeof document<"u"&&document.activeElement;M&&J(()=>{M.focus()});let k=[],j=new Map,X=xt(new Map);Ge(kn,{registerPane:w=>{j.set(w.id,w),J(()=>{j.delete(w.id),X.update(T=>(T.has(w.id)&&T.delete(w.id),T))})},registerTrigger:w=>{k.push(w),J(()=>{let T=k.indexOf(w);k.splice(T,1)})},openPane:w=>{let T=j.get(w.to);X.update(Se=>Se.set(T.id,T))},closePane:w=>{X.update(T=>(T.delete(w.id),T))},openedPanes:X}),J(()=>{p(),l()});let z={y:200,duration:200},Fe={y:-20,duration:200},se=()=>r(),Z=()=>l();function le(w){V[w?"unshift":"push"](()=>{g=w,n(7,g)})}return t.$$set=w=>{"show"in w&&n(0,c=w.show),"is_mobile"in w&&n(1,a=w.is_mobile),"classes"in w&&n(2,m=w.classes),"ref"in w&&n(3,f=w.ref),"header"in w&&n(4,u=w.header),"triggeringId"in w&&n(5,b=w.triggeringId),"isFullView"in w&&n(6,d=w.isFullView),"$$scope"in w&&n(14,s=w.$$scope)},[c,a,m,f,u,b,d,g,r,l,p,v,z,Fe,s,o,se,Z,le]}var Xe=class extends R{constructor(e){super(),K(this,e,xn,vn,W,{show:0,is_mobile:1,classes:2,ref:3,header:4,triggeringId:5,isFullView:6})}},Ze=Xe;function Ct(t,e,n){let o=t.slice();return o[16]=e[n],o}function Dt(t){let e,n,o;var s=t[1]?Ze:Ve;function i(r){return{props:{classes:"feedback-modal-container",is_mobile:r[1],header:r[6]?r[2]["Thank you for your feedback!"]:r[2]["Help us improve Brave Search"],triggeringId:r[3],show:r[0],$$slots:{default:[In]},$$scope:{ctx:r}}}}return s&&(e=new s(i(t)),e.$on("close",t[9])),{c(){e&&ke(e.$$.fragment),n=te()},m(r,l){e&&ue(e,r,l),F(r,n,l),o=!0},p(r,l){let c={};if(l&2&&(c.is_mobile=r[1]),l&68&&(c.header=r[6]?r[2]["Thank you for your feedback!"]:r[2]["Help us improve Brave Search"]),l&8&&(c.triggeringId=r[3]),l&1&&(c.show=r[0]),l&524404&&(c.$$scope={dirty:l,ctx:r}),s!==(s=r[1]?Ze:Ve)){if(e){oe();let a=e;D(a.$$.fragment,1,0,()=>{ie(a,1)}),re()}s?(e=new s(i(r)),e.$on("close",r[9]),ke(e.$$.fragment),S(e.$$.fragment,1),ue(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(r){o||(e&&S(e.$$.fragment,r),o=!0)},o(r){e&&D(e.$$.fragment,r),o=!1},d(r){r&&x(n),e&&ie(e,r)}}}function Fn(t){let e,n,o,s,i,r,l=t[2]["Thank you for your feedback!"]+"",c,a,m,f=t[2]["Your feedback helps us improve the Brave Search experience for everyone"]+"",u,b,d,p,g,v;return{c(){e=y("div"),n=y("div"),o=y("div"),s=I(),i=y("div"),r=y("div"),c=O(l),a=I(),m=y("div"),u=O(f),b=O("."),d=I(),p=y("div"),p.innerHTML='<img id="logo" src="https://cdn.search.brave.com/serp/v1/static/brand/a443569b91f221f0db8b3bee3124d3285513835087c5fa1eebbe16e8ec401c4e-brave-logo-embellished.svg" alt="brave-logo" class="svelte-su8bcr"/>',h(o,"class","icon-wrapper svelte-su8bcr"),h(n,"id","close"),h(n,"class","svelte-su8bcr"),h(r,"class","h5 mb-15 svelte-su8bcr"),h(i,"class","header svelte-su8bcr"),h(p,"class","feedback-footer mt-15 svelte-su8bcr"),h(e,"class","feedback-modal svelte-su8bcr")},m(M,k){F(M,e,k),_(e,n),_(n,o),o.innerHTML=fe,_(e,s),_(e,i),_(i,r),_(r,c),_(i,a),_(i,m),_(m,u),_(m,b),_(e,d),_(e,p),g||(v=C(n,"click",t[9]),g=!0)},p(M,k){k&4&&l!==(l=M[2]["Thank you for your feedback!"]+"")&&q(c,l),k&4&&f!==(f=M[2]["Your feedback helps us improve the Brave Search experience for everyone"]+"")&&q(u,f)},d(M){M&&x(e),g=!1,v()}}}function Sn(t){let e,n,o,s,i,r,l=t[2]["Help us improve Brave Search"]+"",c,a,m,f,u=t[2]["What do you think of the information shown?"]+"",b,d,p,g,v,M,k=t[2]["Comments or suggestions?"]+"",j,X,z,Fe,se,Z,le=t[2].Submit+"",w,T,Se,ce=t[7],N=[];for(let E=0;E<ce.length;E+=1)N[E]=$t(Ct(t,ce,E));return{c(){e=y("div"),n=y("div"),o=y("div"),s=I(),i=y("div"),r=y("div"),c=O(l),a=I(),m=y("div"),f=y("div"),b=O(u),d=I(),p=y("div");for(let E=0;E<N.length;E+=1)N[E].c();g=I(),v=y("div"),M=y("div"),j=O(k),X=I(),z=y("textarea"),Fe=I(),se=y("div"),Z=y("button"),w=O(le),h(o,"class","icon-wrapper svelte-su8bcr"),h(n,"id","close"),h(n,"class","svelte-su8bcr"),h(r,"class","h5 mb-15 svelte-su8bcr"),h(i,"class","header svelte-su8bcr"),h(f,"class","h6 mb-0 svelte-su8bcr"),h(p,"class","form-group svelte-su8bcr"),h(m,"class","structured-input svelte-su8bcr"),h(M,"class","h6 svelte-su8bcr"),h(z,"class","text-sm svelte-su8bcr"),h(z,"maxlength","8192"),h(v,"class","text-input svelte-su8bcr"),h(Z,"class","btn btn--filled"),h(se,"class","feedback-footer mt-15 svelte-su8bcr"),h(e,"class","feedback-modal svelte-su8bcr")},m(E,H){F(E,e,H),_(e,n),_(n,o),o.innerHTML=fe,_(e,s),_(e,i),_(i,r),_(r,c),_(e,a),_(e,m),_(m,f),_(f,b),_(m,d),_(m,p);for(let P=0;P<N.length;P+=1)N[P].m(p,null);_(e,g),_(e,v),_(v,M),_(M,j),_(v,X),_(v,z),Ue(z,t[4]),_(e,Fe),_(e,se),_(se,Z),_(Z,w),T||(Se=[C(n,"click",t[9]),C(z,"input",t[12]),C(Z,"click",t[8])],T=!0)},p(E,H){if(H&4&&l!==(l=E[2]["Help us improve Brave Search"]+"")&&q(c,l),H&4&&u!==(u=E[2]["What do you think of the information shown?"]+"")&&q(b,u),H&164){ce=E[7];let P;for(P=0;P<ce.length;P+=1){let nt=Ct(E,ce,P);N[P]?N[P].p(nt,H):(N[P]=$t(nt),N[P].c(),N[P].m(p,null))}for(;P<N.length;P+=1)N[P].d(1);N.length=ce.length}H&4&&k!==(k=E[2]["Comments or suggestions?"]+"")&&q(j,k),H&16&&Ue(z,E[4]),H&4&&le!==(le=E[2].Submit+"")&&q(w,le)},d(E){E&&x(e),pt(N,E),T=!1,B(Se)}}}function $t(t){let e,n,o,s,i,r=t[2][t[16].label]+"",l,c,a,m;function f(){return t[11](t[16])}return{c(){e=y("label"),n=y("input"),o=I(),s=y("i"),i=I(),l=O(r),c=I(),h(n,"type","radio"),h(n,"name","feedback"),h(s,"class","form-icon"),h(e,"class","form-radio svelte-su8bcr")},m(u,b){F(u,e,b),_(e,n),_(e,o),_(e,s),_(e,i),_(e,l),_(e,c),a||(m=C(e,"click",f),a=!0)},p(u,b){t=u,b&4&&r!==(r=t[2][t[16].label]+"")&&q(l,r)},d(u){u&&x(e),a=!1,m()}}}function In(t){let e;function n(i,r){return i[6]?Fn:Sn}let o=n(t,-1),s=o(t);return{c(){s.c(),e=te()},m(i,r){s.m(i,r),F(i,e,r)},p(i,r){o===(o=n(i,r))&&s?s.p(i,r):(s.d(1),s=o(i),s&&(s.c(),s.m(e.parentNode,e)))},d(i){s.d(i),i&&x(e)}}}function En(t){let e,n,o=t[0]&&Dt(t);return{c(){o&&o.c(),e=te()},m(s,i){o&&o.m(s,i),F(s,e,i),n=!0},p(s,[i]){s[0]?o?(o.p(s,i),i&1&&S(o,1)):(o=Dt(s),o.c(),S(o,1),o.m(e.parentNode,e)):o&&(oe(),D(o,1,1,()=>{o=null}),re())},i(s){n||(S(o),n=!0)},o(s){D(o),n=!1},d(s){o&&o.d(s),s&&x(e)}}}function Mn(t,e,n){let{optionSet:o}=e,{showModal:s}=e,{isMobile:i}=e,{i18n:r={}}=e,{triggeringId:l}=e,c=ne(),a=kt[o],m="",f,u=!1;async function b(k){window.dispatchEvent(new Event("SearchFeedback"));try{await vt({payload:k})}catch(j){console.log(j)}}async function d(){let k={structuredFeedback:f,feedback:f.type,text:m,debug_url:wt(),target:o};await b(k)}async function p(){await d(),n(6,u=!0)}function g(){c("modalClosed"),n(6,u=!1)}let v=k=>{n(5,f=k)};function M(){m=this.value,n(4,m)}return t.$$set=k=>{"optionSet"in k&&n(10,o=k.optionSet),"showModal"in k&&n(0,s=k.showModal),"isMobile"in k&&n(1,i=k.isMobile),"i18n"in k&&n(2,r=k.i18n),"triggeringId"in k&&n(3,l=k.triggeringId)},[s,i,r,l,m,f,u,a,p,g,o,v,M]}var et=class extends R{constructor(e){super(),K(this,e,Mn,En,W,{optionSet:10,showModal:0,isMobile:1,i18n:2,triggeringId:3})}},Tt=et;function Pt(t){let e;function n(i,r){if(i[0].page==="settings"||i[0].page==="default")return Cn;if(i[0].page==="search"||i[0].page==="news"||i[0].page==="videos")return On}let o=n(t,-1),s=o&&o(t);return{c(){e=y("div"),s&&s.c(),h(e,"class","h6 text-center mb-6 svelte-mpw268")},m(i,r){F(i,e,r),s&&s.m(e,null)},p(i,r){o===(o=n(i,r))&&s?s.p(i,r):(s&&s.d(1),s=o&&o(i),s&&(s.c(),s.m(e,null)))},d(i){i&&x(e),s&&s.d()}}}function On(t){let e=t[1]["How were the search results?"]+"",n;return{c(){n=O(e)},m(o,s){F(o,n,s)},p(o,s){s&2&&e!==(e=o[1]["How were the search results?"]+"")&&q(n,e)},d(o){o&&x(n)}}}function Cn(t){let e;return{c(){e=O("Was this useful?")},m(n,o){F(n,e,o)},p:L,d(n){n&&x(e)}}}function Dn(t){let e,n,o=t[1].Feedback+"",s,i,r;return{c(){e=y("div"),n=y("button"),s=O(o),h(n,"class","btn btn--text btn--sm"),h(e,"class","flex-hcenter")},m(l,c){F(l,e,c),_(e,n),_(n,s),i||(r=C(n,"click",t[4]),i=!0)},p(l,c){c&2&&o!==(o=l[1].Feedback+"")&&q(s,o)},d(l){l&&x(e),i=!1,r()}}}function $n(t){let e,n=t[1]["Thank you!"]+"",o;return{c(){e=y("div"),o=O(n),h(e,"class","h6 svelte-mpw268")},m(s,i){F(s,e,i),_(e,o)},p(s,i){i&2&&n!==(n=s[1]["Thank you!"]+"")&&q(o,n)},d(s){s&&x(e)}}}function Tn(t){let e,n,o,s,i,r,l,c=t[0].is_mobile&&Pt(t);function a(d,p){return d[2]?$n:Dn}let m=a(t,-1),f=m(t);function u(d){t[6](d)}let b={optionSet:"generic",isMobile:t[0].is_mobile,i18n:t[1]};return t[3]!==void 0&&(b.showModal=t[3]),i=new Tt({props:b}),V.push(()=>gt(i,"showModal",u)),i.$on("feedbackSubmitted",t[7]),i.$on("modalClosed",t[5]),{c(){e=y("div"),c&&c.c(),n=I(),o=y("div"),f.c(),s=I(),ke(i.$$.fragment),h(o,"class","feedback-controls svelte-mpw268"),h(e,"id","page-feedback"),h(e,"class","svelte-mpw268")},m(d,p){F(d,e,p),c&&c.m(e,null),_(e,n),_(e,o),f.m(o,null),F(d,s,p),ue(i,d,p),l=!0},p(d,[p]){d[0].is_mobile?c?c.p(d,p):(c=Pt(d),c.c(),c.m(e,n)):c&&(c.d(1),c=null),m===(m=a(d,p))&&f?f.p(d,p):(f.d(1),f=m(d),f&&(f.c(),f.m(o,null)));let g={};p&1&&(g.isMobile=d[0].is_mobile),p&2&&(g.i18n=d[1]),!r&&p&8&&(r=!0,g.showModal=d[3],_t(()=>r=!1)),i.$set(g)},i(d){l||(S(i.$$.fragment,d),l=!0)},o(d){D(i.$$.fragment,d),l=!1},d(d){d&&x(e),c&&c.d(),f.d(),d&&x(s),ie(i,d)}}}function Pn(t,e,n){let{context:o={is_mobile:!0,page:void 0}}=e,{i18n:s}=e,i=!1,r=!1,l=()=>{n(3,r=!r)},c=()=>{n(3,r=!1)};function a(f){r=f,n(3,r)}let m=()=>{n(2,i=!0)};return t.$$set=f=>{"context"in f&&n(0,o=f.context),"i18n"in f&&n(1,s=f.i18n)},[o,s,i,r,l,c,a,m]}var tt=class extends R{constructor(e){super(),K(this,e,Pn,Tn,W,{context:0,i18n:1})}},At=tt;var xe=JSON.parse(document.getElementById("js-feedback").getAttribute("data"));(xe.is_mobile===void 0||xe.is_mobile===null)&&(xe.is_mobile=!0);var An=JSON.parse(document.getElementById("js-shared").getAttribute("data")),Nn={...An.i18n,...xe.i18n},Xo=new At({target:document.getElementById("feedback"),props:{context:xe,i18n:Nn}});})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */