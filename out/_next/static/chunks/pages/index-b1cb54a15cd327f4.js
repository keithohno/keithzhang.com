(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(674)}])},674:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Kn}});var r=t(5944),i=t(1998),o=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){a(n,e,t[e])}))}return n}var u={rotAxisX:0,rotAxisY:1,rotAxisZ:0,offsetX:0,offsetY:0,offsetZ:2,sqrtRotPerMs:.005,fov:.3},l=(0,o.createContext)(c({},u,{setParams:function(){}})),f=function(n,e){return c({},n,e)},s=function(n){var e=n.children,t=(0,o.useReducer)(f,u),i=t[0],a=t[1];return(0,r.tZ)(l.Provider,{value:c({},i,{setParams:a}),children:e})},d=function(){return(0,o.useContext)(l)},h=t(4051),m=t.n(h),v=t(5975),p=t(7160),g=function(n,e,t){var r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS)?r:(console.error("failed to compile shader: ",n.getShaderInfoLog(r)),void n.deleteShader(r))},b=function(n,e){n.width=n.parentElement.clientWidth,n.height=n.parentElement.clientHeight,e.viewport(0,0,n.width,n.height)},w=function(n){switch(n){case 77:return[1,.5,.3];case 75:return[1,.7,.4];case 71:return[1,.8,.7];case 70:default:return[.9,.9,.9];case 65:return[.7,.8,1];case 66:return[.4,.7,1];case 79:return[.2,.4,1];case 83:case 67:return[1,.3,.2];case 87:return[1,1,1]}};function y(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function x(n,e,t,r,i,o,a){try{var c=n[o](a),u=c.value}catch(l){return void t(l)}c.done?e(u):Promise.resolve(u).then(r,i)}function Z(n){return function(n){if(Array.isArray(n))return y(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"===typeof n)return y(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(){var n,e,t=(n=["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-image: linear-gradient(black, #07182a);\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return A=function(){return t},t}var B=function(){var n,e=(n=m().mark((function n(e){var t,r,i,o,a,c,u,l,f,s,d,h,v,p;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=[],r=[],i=[],n.next=5,fetch("BSC5ra-small");case 5:return n.next=7,n.sent.blob();case 7:return n.next=9,n.sent.arrayBuffer();case 9:for(o=n.sent,a=0;a<o.byteLength;a+=23)u=new Float64Array(o.slice(a,a+8))[0],l=new Float64Array(o.slice(a+8,a+16))[0],f=1e-5*new Float32Array(o.slice(a+16,a+20))[0],t.push(f*Math.cos(u)*Math.cos(l)),t.push(f*Math.sin(u)*Math.cos(l)),t.push(f*Math.sin(l)),s=new Int16Array(o.slice(a+20,a+22)),r.push((s[0]-600)/6),d=new Uint8Array(o.slice(a+22,a+23))[0],(c=i).push.apply(c,Z(w(d)));return h=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,new Float32Array(t),e.STATIC_DRAW),v=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,v),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r),e.STATIC_DRAW),p=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,new Float32Array(i),e.STATIC_DRAW),n.abrupt("return",{positions:h,sizes:v,colors:p});case 21:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){x(o,r,i,a,c,"next",n)}function c(n){x(o,r,i,a,c,"throw",n)}a(void 0)}))});return function(n){return e.apply(this,arguments)}}();var M=i.Z.div(A()),z=function(){var n=function(n){var e=(0,o.useState)(),t=e[0],r=e[1];return(0,o.useEffect)((function(){var e=document.getElementById(n),t=e.getContext("webgl");t?(r(t),b(e,t),window.addEventListener("resize",(function(){b(e,t)}))):console.error("WebGL not supported, some elements may not render correctly")}),[]),{gl:t,setGl:r}}("canvas").gl,e=(0,o.useState)(),t=e[0],i=e[1],a=(0,o.useState)(),c=a[0],u=a[1],l=d(),f=l.rotAxisX,s=l.rotAxisY,h=l.rotAxisZ,m=l.offsetX,w=l.offsetY,y=l.offsetZ,x=l.sqrtRotPerMs,Z=l.fov,A=(0,o.useState)(v.Ue()),z=A[0],P=A[1],R=(0,o.useState)(0),C=R[0],O=R[1],S=(0,o.useRef)(0),_=function(n){var e=n-C;e>10&&(O(n),j(e*Math.pow(x,2))),S.current=requestAnimationFrame(_)};(0,o.useEffect)((function(){return S.current=requestAnimationFrame(_),function(){return cancelAnimationFrame(S.current)}}),[C]);var j=function(n){var e=v.Ue(),t=p.al(f,s,h);v.Us(e,n,t);var r=v.Ue();v.Jp(r,e,z),P(r)};return(0,o.useEffect)((function(){n&&B(n).then((function(n){u(n)}))}),[n]),(0,o.useEffect)((function(){if(n){var e=function(n){var e=g(n,n.VERTEX_SHADER,"\n  attribute vec4 aPosition;\n  attribute float aSize;\n  attribute vec3 aColor;\n  \n  varying lowp vec3 vColor;\n\n  uniform mat4 uModel;\n  uniform mat4 uView;\n  uniform mat4 uProjection;\n\n  void main() {\n    gl_Position = uProjection * uView * uModel * aPosition;\n    gl_PointSize = aSize * (1.5 / (0.5 + gl_Position.w));\n    vColor = aColor;\n  }\n"),t=g(n,n.FRAGMENT_SHADER,"\n  precision lowp float;\n\n  varying lowp vec3 vColor;\n\n  void main() {\n    vec2 xy_norm = 2.0 * gl_PointCoord - 1.0;\n    float r2 = dot(xy_norm, xy_norm);\n    if (r2 > 1.0) {\n      discard;\n    }\n    gl_FragColor = vec4(vColor, 0.7 / (r2 * 45.0 + 0.5));\n  }\n");if(e&&t){var r=n.createProgram();if(n.attachShader(r,e),n.attachShader(r,t),n.linkProgram(r),n.getProgramParameter(r,n.LINK_STATUS))return n.useProgram(r),r;console.error("failed to link shaders: ",n.getProgramInfoLog(r))}}(n);e&&(i({uProjection:n.getUniformLocation(e,"uProjection"),uModel:n.getUniformLocation(e,"uModel"),uView:n.getUniformLocation(e,"uView")}),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA))}}),[n]),(0,o.useEffect)((function(){n&&c&&function(n,e,t,r,i,o){n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT);var a=n.canvas.width/n.canvas.height,c=v.Ue();v.G3(c,o,a,.1,100);var u=v.Ue();v.Iu(u,u,i),n.uniformMatrix4fv(e.uProjection,!1,c),n.uniformMatrix4fv(e.uView,!1,u),n.uniformMatrix4fv(e.uModel,!1,r),n.bindBuffer(n.ARRAY_BUFFER,t.positions),n.vertexAttribPointer(0,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(0),n.bindBuffer(n.ARRAY_BUFFER,t.sizes),n.vertexAttribPointer(1,1,n.FLOAT,!1,0,0),n.enableVertexAttribArray(1),n.bindBuffer(n.ARRAY_BUFFER,t.colors),n.vertexAttribPointer(2,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(2),n.drawArrays(n.POINTS,0,2e3)}(n,t,c,z,p.al(m,w,-y),Z)}),[z,c]),(0,r.tZ)(r.HY,{children:(0,r.tZ)(M,{children:(0,r.tZ)("canvas",{id:"canvas"})})})};function P(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function R(){var n=P(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return R=function(){return n},n}function C(){var n=P(["\n  min-height: calc(100vh - 6rem);\n  max-width: 800px;\n  width: 100%;\n\n  font-family: KoHo;\n  font-weight: 400;\n  color: #e5e5e0;\n  font-size: calc(16px + 0.2vw);\n"]);return C=function(){return n},n}var O=function(n){var e=n.children,t=n.id;return(0,r.tZ)(S,{children:(0,r.tZ)(_,{id:t,children:e})})},S=i.Z.div(R()),_=i.Z.div(C()),j=function(){return(0,r.BX)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:[(0,r.tZ)("title",{children:"github"}),(0,r.tZ)("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",fill:"currentColor"})]})},E=function(){return(0,r.BX)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:[(0,r.tZ)("title",{children:"linkedin"}),(0,r.tZ)("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",fill:"currentColor"})]})},F=function(){return(0,r.BX)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:[(0,r.tZ)("title",{children:"visibility"}),(0,r.tZ)("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",fill:"currentColor"})]})},X=function(){return(0,r.BX)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:[(0,r.tZ)("title",{children:"visibility-off"}),(0,r.tZ)("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z",fill:"currentColor"})]})};function H(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function L(){var n=H(["\n  height: 100%;\n  width: 95%;\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  padding-bottom: 4rem;\n  @media (max-width: 600px) {\n    padding-top: 2rem;\n    flex-direction: column;\n  }\n"]);return L=function(){return n},n}function U(){var n=H(["\n  width: 200px;\n  height: 200px;\n"]);return U=function(){return n},n}function k(){var n=H(["\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  @media (max-width: 600px) {\n    align-items: center;\n    text-align: center;\n  }\n"]);return k=function(){return n},n}function N(){var n=H(["\n  display: flex;\n  gap: 1rem;\n  @media (min-width: 600px) {\n    padding-right: 1rem;\n  }\n"]);return N=function(){return n},n}function T(){var n=H(["\n  box-sizing: content-box;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  padding-bottom: 4px;\n  border-bottom: 2px solid rgb(0, 0, 0, 0);\n  transition: all 0.2s ease-in-out;\n  :hover {\n    transform: scale(1.1);\n    border-bottom: 2px solid #e5e5e0;\n  }\n"]);return T=function(){return n},n}function I(){var n=H(["\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 300;\n"]);return I=function(){return n},n}function Y(){var n=H(["\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 300;\n"]);return Y=function(){return n},n}function K(){var n=H(["\n  font-weight: 400;\n  color: #cdcdff;\n  :hover {\n    color: #dbdbff;\n  }\n"]);return K=function(){return n},n}var V=i.Z.div(L()),D=i.Z.img(U()),G=i.Z.div(k()),W=i.Z.div(N()),q=i.Z.div(T()),J=i.Z.p(I()),$=i.Z.p(Y()),Q=i.Z.a(K()),nn=function(){return(0,r.tZ)(O,{id:"biosection",children:(0,r.BX)(V,{children:[(0,r.tZ)(D,{src:"me.jpeg"}),(0,r.BX)(G,{children:[(0,r.BX)(J,{children:["Hi, my name is ",(0,r.tZ)("strong",{children:"Keith"}),"."]}),(0,r.BX)($,{children:["...and I'm a ",(0,r.tZ)("strong",{children:"software engineer"})," based in NYC. I love learning new things and building cool stuff, so if you have an exciting opportunity, feel free to reach out!"]}),(0,r.BX)($,{children:["Most recently, I've been"," ",(0,r.tZ)(Q,{href:"https://github.com/keithohno/learning/tree/main/ml",children:"exploring GANs and VAEs for unsupervised learning"}),"."]}),(0,r.BX)(W,{children:[(0,r.tZ)("a",{href:"https://www.github.com/keithohno",children:(0,r.tZ)(q,{children:(0,r.tZ)(j,{})})}),(0,r.tZ)("a",{href:"https://www.linkedin.com/in/keith-zhang",children:(0,r.tZ)(q,{children:(0,r.tZ)(E,{})})})]})]})]})})};function en(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function tn(){var n=en(["\n  display: flex;\n"]);return tn=function(){return n},n}function rn(){var n=en(["\n  width: 1rem;\n"]);return rn=function(){return n},n}var on=function(n){var e=n.paramName,t=n.sliderMin,i=n.sliderMax,o=n.label,a=n.step,c=d(),u=c[e],l=c.setParams;return(0,r.BX)(an,{children:[o&&(0,r.tZ)(cn,{children:o}),(0,r.tZ)("input",{type:"range",min:t,max:i,step:a||"any",value:u,onChange:function(n){var t,r,i;l((t={},r=e,i=+n.currentTarget.value,r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t))}})]})},an=i.Z.div(tn()),cn=i.Z.div(rn());function un(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function ln(){var n=un(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n"]);return ln=function(){return n},n}function fn(){var n=un(["\n  font-size: 1.25rem;\n"]);return fn=function(){return n},n}function sn(){var n=un(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  grid-auto-flow: row;\n  gap: 1rem;\n"]);return sn=function(){return n},n}function dn(){var n=un(["\n  padding: 0.5rem;\n  border: 1px solid rgba(255, 239, 223, 0.4);\n"]);return dn=function(){return n},n}function hn(){var n=un(["\n  padding-bottom: 0.5rem;\n"]);return hn=function(){return n},n}function mn(){var n=un(["\n  position: sticky;\n  flex-grow: 1;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-bottom: 1rem;\n"]);return mn=function(){return n},n}function vn(){var n=un(["\npadding: 8px;\nheight: 52px;\nwidth: 52px;\ndisplay: flex;\nalign-items: center\nuser-select: none;\nborder: 2px solid rgba(255, 255, 255, 0.4);\nbackground-color: rgba(255, 255, 255, 0.1);\n:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n}\n"]);return vn=function(){return n},n}var pn=i.Z.div(ln()),gn=i.Z.div(fn()),bn=i.Z.div(sn()),wn=i.Z.div(dn()),yn=i.Z.div(hn()),xn=i.Z.div(mn()),Zn=i.Z.div(vn()),An=function(){var n=(0,o.useState)(!0),e=n[0],t=n[1];return(0,r.tZ)(O,{id:"starsection",children:(0,r.BX)(pn,{children:[(0,r.tZ)(gn,{"aria-hidden":!e,style:{visibility:e?"visible":"hidden"},children:"The background of this page is a realistic 3D star map rendered with WebGL. I used a public dataset (Yale BSC5) to approximate the position, color, and brightness of each star."}),(0,r.tZ)(gn,{"aria-hidden":!e,style:{visibility:e?"visible":"hidden"},children:"I may add interactive controls in the future, but for now here are a bunch of sliders and a visibility toggle:"}),(0,r.BX)(bn,{"aria-hidden":!e,style:{visibility:e?"visible":"hidden"},children:[(0,r.BX)(wn,{children:[(0,r.tZ)(yn,{children:"Rotation axis:"}),(0,r.tZ)(on,{paramName:"rotAxisX",sliderMin:-1,sliderMax:1,step:.1,label:"x"}),(0,r.tZ)(on,{paramName:"rotAxisY",sliderMin:-1,sliderMax:1,step:.1,label:"y"}),(0,r.tZ)(on,{paramName:"rotAxisZ",sliderMin:-1,sliderMax:1,step:.1,label:"z"})]}),(0,r.BX)(wn,{children:[(0,r.tZ)(yn,{children:"Position offset:"}),(0,r.tZ)(on,{paramName:"offsetX",sliderMin:-1,sliderMax:1,label:"x"}),(0,r.tZ)(on,{paramName:"offsetY",sliderMin:-1,sliderMax:1,label:"y"}),(0,r.tZ)(on,{paramName:"offsetZ",sliderMin:1,sliderMax:4,label:"z"})]}),(0,r.BX)(wn,{children:[(0,r.tZ)(yn,{children:"Rotation speed:"}),(0,r.tZ)(on,{paramName:"sqrtRotPerMs",sliderMin:0,sliderMax:.03})]}),(0,r.BX)(wn,{children:[(0,r.tZ)(yn,{children:"FOV:"}),(0,r.tZ)(on,{paramName:"fov",sliderMin:.1,sliderMax:.5})]})]}),(0,r.tZ)(xn,{children:(0,r.tZ)(Zn,{onClick:function(){return t(!e)},children:e?(0,r.tZ)(X,{}):(0,r.tZ)(F,{})})})]})})};function Bn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Mn(){var n=Bn(["\n  font-family: KoHo;\n  font-size: 2rem;\n  font-weight: 500;\n"]);return Mn=function(){return n},n}function zn(){var n=Bn(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 1rem;\n  font-family: KoHo;\n  font-size: 1.5rem;\n  font-weight: 400;\n"]);return zn=function(){return n},n}function Pn(){var n=Bn(["\n  color: #e0e0d6;\n  border-bottom: 2px solid rgb(0, 0, 0, 0);\n  :hover {\n    border-bottom: 2px solid #e5e5e0;\n  }\n"]);return Pn=function(){return n},n}function Rn(){var n=Bn(["\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 10px;\n"]);return Rn=function(){return n},n}function Cn(){var n=Bn(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: scroll;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  scroll-behavior: smooth;\n"]);return Cn=function(){return n},n}function On(){var n=Bn(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  background-image: linear-gradient(black, #040e17);\n  @media (min-width: 500px) {\n    padding: 1.5rem;\n  }\n"]);return On=function(){return n},n}function Sn(){var n=Bn(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  @media (min-width: 500px) {\n    border: 1px solid #8a8a85;\n  }\n"]);return Sn=function(){return n},n}function _n(){var n=Bn(["\n  position: relative;\n  z-index: 1;\n  padding: 1rem 1.5rem;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  color: #e0e0d6;\n"]);return _n=function(){return n},n}var jn=i.Z.div(Mn()),En=i.Z.div(zn()),Fn=i.Z.a(Pn()),Xn=i.Z.div(Rn()),Hn=i.Z.div(Cn()),Ln=i.Z.div(On()),Un=i.Z.div(Sn()),kn=i.Z.div(_n()),Nn=function(){return(0,r.tZ)(s,{children:(0,r.tZ)(Ln,{children:(0,r.BX)(Un,{children:[(0,r.BX)(kn,{children:[(0,r.BX)(Xn,{children:[(0,r.tZ)(jn,{children:"Keith Zhang"}),(0,r.BX)(En,{children:[(0,r.tZ)(Fn,{href:"#biosection",children:"bio"}),(0,r.tZ)(Fn,{href:"#starsection",children:"\u22c6\uff61\xb0\u2729"})]})]}),(0,r.BX)(Hn,{children:[(0,r.tZ)(nn,{}),(0,r.tZ)(An,{})]})]}),(0,r.tZ)(z,{})]})})})},Tn=t(917);function In(){var n,e,t=(n=['\n  @font-face {\n    font-family: "KoHo";\n    src: url("/fonts/KoHo-ExtraLight.ttf") format("truetype");\n    font-weight: 200;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: "KoHo";\n    src: url("/fonts/KoHo-Light.ttf") format("truetype");\n    font-weight: 300;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: "KoHo";\n    src: url("/fonts/KoHo-Regular.ttf") format("truetype");\n    font-weight: 400;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: "KoHo";\n    src: url("/fonts/KoHo-Medium.ttf") format("truetype");\n    font-weight: 500;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: "KoHo";\n    src: url("/fonts/KoHo-SemiBold.ttf") format("truetype");\n    font-weight: 600;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: "KoHo";\n    src: url("/fonts/KoHo-Bold.ttf") format("truetype");\n    font-weight: 700;\n    font-style: normal;\n  }\n'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return In=function(){return t},t}var Yn=(0,Tn.iv)(In()),Kn=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(Tn.xB,{styles:Yn}),(0,r.tZ)(Nn,{})]})}}},function(n){n.O(0,[519,774,888,179],(function(){return e=8312,n(n.s=e);var e}));var e=n.O();_N_E=e}]);