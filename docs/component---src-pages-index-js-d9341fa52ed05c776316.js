(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{190:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(192),i=n(206),s=n.n(i);n(208);var u=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this;return r.a.createElement("div",{ref:function(e){t.el=e},className:"fill text-autosize"},r.a.createElement("h1",{align:"center",style:{margin:"4.5% 0 0 0"}},"Noise generation"),r.a.createElement("h4",{align:"center"},"Made by ",r.a.createElement("a",{href:"https://xallt.github.io"},"Xallt")))},a}(r.a.Component);n(209),n(38),n(210);var l=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).state={value:(e.dataTransform||function(t){return t})(e.defaultValue||e.min||0)},n}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this,e=this.props,n=e.min,a=e.max,o=e.segmentation,i=e.name,s=e.defaultValue,u=e.dataTransform;o=o||1,n=n||0,s=s||n,u=u||function(t){return t};var l=r.a.createElement(r.a.Fragment,null," ",r.a.createElement("mark",{className:"invert"},this.state.value));return this.props.hideValue&&(l=r.a.createElement(r.a.Fragment,null)),r.a.createElement(r.a.Fragment,null,i,":  ",r.a.createElement("input",{id:"i"+i,className:"slider",type:"range",min:n*o,max:a*o,onInput:function(e){t.props.onInput(u(e.target.value/o)),t.setState({value:u(e.target.value/o)})},defaultValue:s*o,style:{width:"10vw"}}),l,r.a.createElement("br",null))},a}(a.Component);var p=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).state={value:e.defaultValue||0},n}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this,e=this.props,n=e.defaultValue,a=e.name;return n=n||0,r.a.createElement(r.a.Fragment,null,a,":  ",r.a.createElement("input",{id:"i"+a,type:"number",onInput:function(e){t.props.onInput(parseInt(e.target.value)||0),t.setState({value:e.target.value})},defaultValue:n}))},a}(a.Component);function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var m=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).sendInput=n.sendInput.bind(c(n)),n.onParamInput=n.onParamInput.bind(c(n)),n.params={resolution:1024,octaves:5,seed:0,gain:.5,lacunarity:2,scale:6,dissolution:.01,motionSteps:1,offsetScale:10},n}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){this.sendInput()},o.sendInput=function(){this.props.onInput(this.params)},o.onParamInput=function(t){var e=this;return function(n){e.params[t]=n,e.sendInput()}},o.render=function(){var t=this;return r.a.createElement("div",{ref:function(e){t.el=e},style:{width:"90%",margin:"1% auto",padding:"1%"}},r.a.createElement(l,{name:"Resolution",min:0,max:11,segmentation:100,defaultValue:10,onInput:this.onParamInput("resolution"),dataTransform:function(t){return Math.round(Math.pow(2,t))}}),r.a.createElement(l,{name:"Octaves",min:1,max:8,defaultValue:5,onInput:this.onParamInput("octaves")}),r.a.createElement(l,{name:"Scale",min:1,max:30,segmentation:100,defaultValue:6,onInput:this.onParamInput("scale")}),r.a.createElement(l,{name:"Gain",min:0,max:3,segmentation:100,defaultValue:.5,onInput:this.onParamInput("gain")}),r.a.createElement(l,{name:"Lacunarity",min:1,max:8,segmentation:100,defaultValue:2,onInput:this.onParamInput("lacunarity")}),r.a.createElement("h4",{style:{margin:"3% 0"}},"Noise offsetting"),r.a.createElement(l,{name:"Motion steps",min:0,max:5,defaultValue:1,onInput:this.onParamInput("motionSteps")}),r.a.createElement(l,{name:"Dissolution",min:.001,max:1,segmentation:1e3,defaultValue:.1,onInput:this.onParamInput("dissolution"),hideValue:!0}),r.a.createElement(l,{name:"Offset scale",min:1,max:20,segmentation:100,defaultValue:10,onInput:this.onParamInput("offsetScale"),hideValue:!0}),r.a.createElement(p,{name:"Seed",defaultValue:0,onInput:this.onParamInput("seed")}))},a}(r.a.Component),d=(n(30),n(29),n(13),n(211),n(213)),h=n(240),f=n.n(h),v=n(241),y=n.n(v);var g=function(t){var e,n;function a(){return t.apply(this,arguments)||this}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){this.scene=new d.c,this.camera=new d.b(-1,1,1,-1,.5,100),this.camera.position.z=5,this.renderer=new d.h({canvas:this.canvas}),this.renderer.setSize(this.props.texSize,this.props.texSize),this.shape=new d.e([new d.g(-1,-1),new d.g(-1,1),new d.g(1,1),new d.g(1,-1)]),this.geo=new d.f(this.shape),this.constructUniforms(),this.material=new d.d({uniforms:this.uniforms,vertexShader:f.a,fragmentShader:y.a}),this.mesh=new d.a(this.geo,this.material),this.scene.add(this.mesh),this.renderer.domElement.style.height="100%",this.renderer.domElement.style.width="",this.renderer.domElement.style.margin="0 auto",this.renderer.domElement.style.display="block"},o.constructUniforms=function(){this.uniforms={};for(var t=0,e=Object.entries(this.props.uniformValues);t<e.length;t++){var n=e[t],a=n[0],r=n[1];this.uniforms[a]={value:r}}},o.setUniforms=function(){for(var t=0,e=Object.entries(this.props.uniformValues);t<e.length;t++){var n=e[t],a=n[0],r=n[1];this.uniforms[a].value=r}},o.componentDidUpdate=function(){this.renderer.setSize(this.props.texSize,this.props.texSize),this.renderer.domElement.style.height="100%",this.renderer.domElement.style.width="",this.setUniforms(),this.renderer.render(this.scene,this.camera)},o.render=function(){var t=this;return r.a.createElement("canvas",{ref:function(e){t.canvas=e},style:{height:"100%",display:"block",margin:"0 auto"},width:this.props.texSize,height:this.props.texSize})},a}(a.Component);var w=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t={seed:this.props.inputParams.seed,scale:this.props.inputParams.scale,gain:this.props.inputParams.gain,lacunarity:this.props.inputParams.lacunarity,octaves:this.props.inputParams.octaves,motionSteps:this.props.inputParams.motionSteps,dissolution:this.props.inputParams.dissolution,offsetScale:this.props.inputParams.offsetScale};return r.a.createElement(g,{texSize:this.props.inputParams.resolution,uniformValues:t})},a}(r.a.Component);function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var _=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).state={windowWidth:0,windowHeight:0,inputParams:{}},n.handleInput=n.handleInput.bind(E(n)),n.updateSize=n.updateSize.bind(E(n)),n}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){window.onresize=this.updateSize,this.updateSize(),s()(function(){s()("html").fadeIn(500)})},o.updateSize=function(){this.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})},o.handleInput=function(t){this.setState({inputParams:t})},o.render=function(){return r.a.createElement("div",{style:{margin:"0 auto",width:.9*this.state.windowWidth,height:Math.min(.5*this.state.windowWidth,.9*this.state.windowHeight),fontSize:"1.5vw"}},r.a.createElement("div",{style:{height:"100%"}},r.a.createElement("div",{style:{height:"100%",width:"30%",float:"left"}},r.a.createElement("div",{style:{height:"20%"}},r.a.createElement(u,null)),r.a.createElement("div",{style:{height:"80%"}},r.a.createElement(m,{onInput:this.handleInput}))),r.a.createElement("div",{style:{height:"100%",width:"70%",float:"right"}},r.a.createElement(w,{inputParams:this.state.inputParams}))))},a}(r.a.Component);e.default=function(){return r.a.createElement(o.a,{title:"Beginner's title"},r.a.createElement(_,null))}},192:function(t,e,n){"use strict";var a=n(0),r=n.n(a),o=n(195);n(197);e.a=function(t){var e=t.children,n=t.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Helmet,null,r.a.createElement("title",null,n),r.a.createElement("link",{rel:"stylesheet"})),r.a.createElement("main",null,e))}},240:function(t,e){t.exports="#define GLSLIFY 1\nvarying vec2 vPos;\n\nvoid main() {\n    gl_Position = vec4(position.xy, 0., 1.);\n    vPos = position.xy / 2. + .5;\n}"},241:function(t,e){t.exports="#define GLSLIFY 1\nvarying vec2 vPos;\n\nuniform float seed;\n\n#define MAX_OCTAVES 20\n\nuniform float scale;\nuniform float gain, lacunarity, dissolution, offsetScale;\nuniform int octaves, motionSteps;\n\nfloat random(float x) {\n    return fract(sin(x * 1238.412 + seed * 56.21) * 219.32 + .76 - seed * 89.1);\n}\nfloat random(vec2 p) {\n    return random(random(p.x) * random(p.y) + random(p.x * p.y) - random(p.x - p.y) * 129.);\n}\n\nvec2 rotate(vec2 p, float a) {\n    return vec2(\n        p.x * cos(a) - p.y * sin(a),\n        p.x * sin(a) + p.y * cos(a)\n    );\n}\n\n// Perlin noise\nfloat noise(vec2 p) {\n    vec2 n = floor(p), f = fract(p);\n    f = smoothstep(0., 1., f);\n    float c = random(n + vec2(0., 1.)), d = random(n + vec2(1., 1.)),\n          a = random(n + vec2(0., 0.)), b = random(n + vec2(1., 0.));\n    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\n// Fractional brownian motion\nfloat fbm(vec2 st) {\n    float res = 0.;\n    float amplitude = 1.;\n    st = st * scale;\n    // st += vec2(19.421, -2138.);\n    // st = rotate(st, 5.12);\n    for (int i = 0; i < MAX_OCTAVES; ++i) {\n        if (i >= octaves) {\n            break;\n        }\n        res += amplitude * noise(rotate(st, 5.12 * float(i)));\n        amplitude *= gain;\n        st *= lacunarity;\n        // st += vec2(19.421, -2138.);\n        // st = rotate(st, 5.12);\n    }\n    if (gain == 1.) {\n        res = res / float(octaves);\n    }\n    else {\n        res = res * (gain - 1.) / (pow(gain, float(octaves)) - 1.); \n    }\n    return res;\n}\n\nvoid main() {\n    vec2 st = vPos;\n    for (int i = 0; i < 20; ++i) {\n        if (i >= motionSteps) {\n            break;\n        }\n        float r_a = random(float(i)) - .5, r_B = random(r_a) * 100. - 50., r_C = random(r_B) * 100. - 50., \n              r_d = random(r_C)  - .5, r_E = random(r_d) * 100. - 50., r_F = random(r_E) * 100. - 50.;\n        vec2 ost = st * offsetScale;\n        vec2 offset = vec2(fbm(vec2(ost.y * r_a + r_B, ost.x * r_a + r_C)), fbm(vec2(ost.y * r_d + r_E, ost.x * r_d + r_F)));\n        st = st + offset * dissolution;\n    }\n    float res = fbm(st);\n    // res = fbm(vPos + vec2(res));\n    gl_FragColor = vec4(vec3(res), 1.);\n}"}}]);
//# sourceMappingURL=component---src-pages-index-js-d9341fa52ed05c776316.js.map