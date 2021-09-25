var Avatar=function(){"use strict";function t(t,i){return t+i&4294967295}function i(i,a,e,u,s,r){return a=t(t(a,i),t(u,r)),t(a<<s|a>>>32-s,e)}function a(t,a,e,u,s,r,n){return i(a&e|~a&u,t,a,s,r,n)}function e(t,a,e,u,s,r,n){return i(a&u|e&~u,t,a,s,r,n)}function u(t,a,e,u,s,r,n){return i(a^e^u,t,a,s,r,n)}function s(t,a,e,u,s,r,n){return i(e^(a|~u),t,a,s,r,n)}function r(i,r){let n=i[0],L=i[1],g=i[2],l=i[3];n=a(n,L,g,l,r[0],7,-680876936),l=a(l,n,L,g,r[1],12,-389564586),g=a(g,l,n,L,r[2],17,606105819),L=a(L,g,l,n,r[3],22,-1044525330),n=a(n,L,g,l,r[4],7,-176418897),l=a(l,n,L,g,r[5],12,1200080426),g=a(g,l,n,L,r[6],17,-1473231341),L=a(L,g,l,n,r[7],22,-45705983),n=a(n,L,g,l,r[8],7,1770035416),l=a(l,n,L,g,r[9],12,-1958414417),g=a(g,l,n,L,r[10],17,-42063),L=a(L,g,l,n,r[11],22,-1990404162),n=a(n,L,g,l,r[12],7,1804603682),l=a(l,n,L,g,r[13],12,-40341101),g=a(g,l,n,L,r[14],17,-1502002290),L=a(L,g,l,n,r[15],22,1236535329),n=e(n,L,g,l,r[1],5,-165796510),l=e(l,n,L,g,r[6],9,-1069501632),g=e(g,l,n,L,r[11],14,643717713),L=e(L,g,l,n,r[0],20,-373897302),n=e(n,L,g,l,r[5],5,-701558691),l=e(l,n,L,g,r[10],9,38016083),g=e(g,l,n,L,r[15],14,-660478335),L=e(L,g,l,n,r[4],20,-405537848),n=e(n,L,g,l,r[9],5,568446438),l=e(l,n,L,g,r[14],9,-1019803690),g=e(g,l,n,L,r[3],14,-187363961),L=e(L,g,l,n,r[8],20,1163531501),n=e(n,L,g,l,r[13],5,-1444681467),l=e(l,n,L,g,r[2],9,-51403784),g=e(g,l,n,L,r[7],14,1735328473),L=e(L,g,l,n,r[12],20,-1926607734),n=u(n,L,g,l,r[5],4,-378558),l=u(l,n,L,g,r[8],11,-2022574463),g=u(g,l,n,L,r[11],16,1839030562),L=u(L,g,l,n,r[14],23,-35309556),n=u(n,L,g,l,r[1],4,-1530992060),l=u(l,n,L,g,r[4],11,1272893353),g=u(g,l,n,L,r[7],16,-155497632),L=u(L,g,l,n,r[10],23,-1094730640),n=u(n,L,g,l,r[13],4,681279174),l=u(l,n,L,g,r[0],11,-358537222),g=u(g,l,n,L,r[3],16,-722521979),L=u(L,g,l,n,r[6],23,76029189),n=u(n,L,g,l,r[9],4,-640364487),l=u(l,n,L,g,r[12],11,-421815835),g=u(g,l,n,L,r[15],16,530742520),L=u(L,g,l,n,r[2],23,-995338651),n=s(n,L,g,l,r[0],6,-198630844),l=s(l,n,L,g,r[7],10,1126891415),g=s(g,l,n,L,r[14],15,-1416354905),L=s(L,g,l,n,r[5],21,-57434055),n=s(n,L,g,l,r[12],6,1700485571),l=s(l,n,L,g,r[3],10,-1894986606),g=s(g,l,n,L,r[10],15,-1051523),L=s(L,g,l,n,r[1],21,-2054922799),n=s(n,L,g,l,r[8],6,1873313359),l=s(l,n,L,g,r[15],10,-30611744),g=s(g,l,n,L,r[6],15,-1560198380),L=s(L,g,l,n,r[13],21,1309151649),n=s(n,L,g,l,r[4],6,-145523070),l=s(l,n,L,g,r[11],10,-1120210379),g=s(g,l,n,L,r[2],15,718787259),L=s(L,g,l,n,r[9],21,-343485551),i[0]=t(n,i[0]),i[1]=t(L,i[1]),i[2]=t(g,i[2]),i[3]=t(l,i[3])}function n(t){const i=[];for(let a=0;a<64;a+=4)i[a>>2]=t.charCodeAt(a)+(t.charCodeAt(a+1)<<8)+(t.charCodeAt(a+2)<<16)+(t.charCodeAt(a+3)<<24);return i}const L="0123456789abcdef".split("");function g(t){let i="",a=0;for(;a<4;a++)i+=L[t>>8*a+4&15]+L[t>>8*a&15];return i}var l=t=>function(t){for(let i=0;i<t.length;i++)t[i]=g(t[i]);return t.join("")}(function(t){const i=t.length,a=[1732584193,-271733879,-1732584194,271733878];let e;for(e=64;e<=t.length;e+=64)r(a,n(t.slice(e-64,e)));t=t.slice(Math.max(0,e-64));const u=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<t.length;e++)u[e>>2]|=t.charCodeAt(e)<<(e%4<<3);if(u[e>>2]|=128<<(e%4<<3),e>55)for(r(a,u),e=0;e<16;e++)u[e]=0;return u[14]=8*i,r(a,u),a}(t));class M{constructor(t,i={}){if(!t)throw new Error("No image element provided.");this.element=t,this.settings={useGravatar:!0,allowGravatarFallback:!1,initials:"",initial_fg:"#888888",initial_bg:"#f4f6f7",initial_size:0,initial_weight:100,initial_font_family:"'Lato', 'Lato-Regular', 'Helvetica Neue'",hash:"",email:"",size:80,fallback:"mm",rating:"x",forcedefault:!1,fallbackImage:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBmaWxsPSIjYmNjN2NlIiBkPSJNMCAwaDYwdjYwaC02MHoiLz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNhNGIxYjkiIGQ9Ik0zMC4xIDU0LjhjLTYuNyAwLTEzLjEtMi44LTE3LjYtNy43bC0uNS0uNXYtMi42aC4yYy40LTQgMS42LTYuNyAzLjQtNy42IDEuMy0uNiAyLjktMS4xIDQuOS0xLjZ2LTFsMS0uM3MuNy0uMiAxLjctLjVjMC0uNS0uMS0uNy0uMS0uOS0uNi0xLTEuNS0zLjMtMi4xLTZsLTEuNy0xLjQuMi0uOXMuMi0uOSAwLTEuOWMtLjItLjkuMS0xLjUuMy0xLjguMy0uMy42LS41IDEtLjYuMy0xLjYuOS0zLjEgMS43LTQuMy0xLjMtMS41LTEuNy0yLjYtMS41LTMuNS4yLS45IDEtMS41IDEuOS0xLjUuNyAwIDEuMy4zIDEuOS42LjMtLjcuOS0xLjEgMS43LTEuMS43IDAgMS40LjQgMi40LjguNS4zIDEuMi42IDEuNi43IDMuNC4xIDcuNiAyLjIgOC45IDcuNi4zLjEuNi4zLjguNS40LjUuNSAxLjEuMyAxLjktLjIgMS4yIDAgMi40IDAgMi40bC4yLjgtMS4yIDEuMmMtLjUgMi44LTEuNiA1LjQtMi4yIDYuNS0uMS4xLS4xLjQtLjEuOCAxIC4zIDEuNy41IDEuNy41bDEgLjR2LjhjMi41LjUgNC42IDEuMSA2LjEgMS45IDEuOC45IDIuOSAzLjUgMy40IDcuOGwuMS42LS40LjVjLTQuNiA1LjktMTEuNSA5LjQtMTkgOS40eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00NS40IDM2LjhjLTEuNS0uOC0zLjktMS41LTctMnYtLjlzLTEtLjQtMi42LS43Yy0uMi0uOC0uMy0yIC4yLTIuOC41LS45IDEuNy0zLjYgMi4xLTYuNWwuOS0uOXMtLjMtMS40IDAtM2MuMi0uOS0uNC0uNy0uOS0uNS0uOS03LjEtNi4zLTcuNy03LjgtNy43LTEuNC0uMi0zLjktMi4yLTQuMS0xLjMtLjEuOSAxLjIgMS44LS40IDEuNC0xLjYtLjQtMy4xLTEuOC0zLjMtLjgtLjIuNyAxLjIgMi4zIDIgMy4xLTEuMiAxLjMtMi4xIDMuMi0yLjQgNi4xLS41LS4zLTEuNC0uNy0xLjEuMi4zIDEuMyAwIDIuNiAwIDIuNmwxLjQgMS4yYy41IDIuNyAxLjUgNS4xIDIgNiAuNS44LjMgMi4xLjIgMi44LTEuNS4zLTIuNi43LTIuNi43djEuMmMtMi41LjUtNC40IDEuMS01LjggMS43LTIgMS0yLjYgNS43LTIuNyA3Ljl2LjRjNC4xIDQuNCAxMCA3LjIgMTYuNSA3LjIgNy4zIDAgMTMuNy0zLjUgMTcuOC04LjgtLjEtMi4zLS44LTUuNy0yLjQtNi42eiIvPjwvZz48L3N2Zz4=",github_id:0,setSourceCallback:()=>{},...i};let a=this.settings.fallbackImage;return this.settings.useGravatar&&this.settings.allowGravatarFallback?a=M.gravatarUrl(this.settings):this.settings.useGravatar?this.gravatarValid():this.settings.github_id?a=M.githubAvatar(this.settings):this.settings.initials.length>0&&(a=M.initialAvatar(this.settings)),this.setSource(a),this}static from(t,i){return new M(t,i)}setSource(t){if(!this.element)throw new Error("No image element set.");t&&(this.element.src=t,this.settings.setSourceCallback(t))}gravatarValid(){if(!this.settings.email&&!this.settings.hash)return;const t=this.settings.email?l(this.settings.email):this.settings.hash,i=new window.Image;i.addEventListener("load",this.gravatarValidOnLoad.bind(this)),i.addEventListener("error",this.gravatarValidOnError.bind(this)),i.src=`https://secure.gravatar.com/avatar/${t}?d=404`}gravatarValidOnLoad(){this.setSource(M.gravatarUrl(this.settings))}gravatarValidOnError(){this.settings.initials.length>0?this.setSource(M.initialAvatar(this.settings)):this.setSource(this.settings.fallbackImage)}static initialAvatar(t){const i=document.createElement("canvas"),a=t.size,e=t.size,u=Math.max(window.devicePixelRatio,1);i.width=a*u,i.height=e*u,i.style.width=`${a}px`,i.style.height=`${e}px`;const s=i.getContext("2d");return s.scale(u,u),s.rect(0,0,i.width,i.height),s.fillStyle=t.initial_bg,s.fill(),s.font=`${t.initial_weight} ${t.initial_size||e/2}px ${t.initial_font_family}`,s.textAlign="center",s.textBaseline="middle",s.fillStyle=t.initial_fg,s.fillText(t.initials,a/2,e/2),i.toDataURL("image/png")}static gravatarUrl(t={}){const i=t.size>=1&&t.size<=2048?t.size:80;let a=t.hash||t.email;a&&"string"==typeof a||(a="00000000000000000000000000000000"),a=a.toLowerCase().trim();return`https://secure.gravatar.com/avatar/${null!==a.match(/@/g)?l(a):a}?s=${i}&d=${t.fallback?encodeURIComponent(t.fallback):"mm"}&r=${t.rating||"x"}${t.forcedefault?"&f=y":""}`}static githubAvatar(t={}){return`https://avatars${Math.floor(2*Math.random())+0}.githubusercontent.com/u/${t.github_id||0}?s=${t.size||80}&v=4`}}return M}();