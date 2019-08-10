(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{190:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(192),o=n(206),s=n.n(o);n(208);var u=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{align:"center",style:{margin:"2% 0 0 0"}},"Noise generation"),r.a.createElement("h4",{align:"center"},"Made by ",r.a.createElement("a",{href:"https://xallt.github.io"},"Xallt")))},a}(r.a.Component);n(209),n(38);var l=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).state={value:(e.dataTransform||function(t){return t})(e.defaultValue||e.min||0)},n}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this,e=this.props,n=e.min,a=e.max,i=e.segmentation,o=e.name,s=e.defaultValue,u=e.dataTransform;return i=i||1,n=n||0,s=s||n,u=u||function(t){return t},r.a.createElement(r.a.Fragment,null,o,":  ",r.a.createElement("input",{id:"i"+o,type:"range",min:n*i,max:a*i,onInput:function(e){t.props.onInput(u(e.target.value/i)),t.setState({value:u(e.target.value/i)})},defaultValue:s*i})," ",r.a.createElement("mark",{className:"invert"},this.state.value),r.a.createElement("br",null))},a}(a.Component);var p=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).state={value:e.defaultValue||0},n}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this,e=this.props,n=e.defaultValue,a=e.name;return n=n||0,r.a.createElement(r.a.Fragment,null,a,":  ",r.a.createElement("input",{id:"i"+a,type:"number",onInput:function(e){t.props.onInput(parseInt(e.target.value)||0),t.setState({value:e.target.value})},defaultValue:n}))},a}(a.Component);function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var m=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).sendInput=n.sendInput.bind(c(n)),n.onParamInput=n.onParamInput.bind(c(n)),n.params={resolution:128,octaves:5,seed:0,gain:.5,lacunarity:2,scale:10},n}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=a.prototype;return i.componentDidMount=function(){this.sendInput()},i.sendInput=function(){this.props.onInput(this.params)},i.onParamInput=function(t){var e=this;return function(n){e.params[t]=n,e.sendInput()}},i.render=function(){return r.a.createElement("div",{style:{width:"90%",margin:"1% auto",padding:"1%"}},r.a.createElement(l,{name:"Resolution",min:0,max:11,segmentation:100,defaultValue:7,onInput:this.onParamInput("resolution"),dataTransform:function(t){return Math.round(Math.pow(2,t))}}),r.a.createElement(l,{name:"Octaves",min:1,max:8,defaultValue:5,onInput:this.onParamInput("octaves")}),r.a.createElement(l,{name:"Scale",min:1,max:30,segmentation:100,defaultValue:10,onInput:this.onParamInput("scale")}),r.a.createElement(l,{name:"Gain",min:0,max:3,segmentation:100,defaultValue:.5,onInput:this.onParamInput("gain")}),r.a.createElement(l,{name:"Lacunarity",min:1,max:8,segmentation:100,defaultValue:2,onInput:this.onParamInput("lacunarity")}),r.a.createElement(p,{name:"Seed",defaultValue:0,onInput:this.onParamInput("seed")}))},a}(r.a.Component),h=(n(30),n(29),n(13),n(210),n(212)),d=n(239),f=n.n(d),v=n(240),y=n.n(v);var g=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).animate=n.animate.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)),n}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=a.prototype;return i.componentDidMount=function(){this.scene=new h.c,this.camera=new h.b(-1,1,1,-1,.5,100),this.camera.position.z=5,this.renderer=new h.h({canvas:this.canvas}),this.renderer.setSize(this.props.texSize,this.props.texSize),this.shape=new h.e([new h.g(-1,-1),new h.g(-1,1),new h.g(1,1),new h.g(1,-1)]),this.geo=new h.f(this.shape),this.constructUniforms(),this.material=new h.d({uniforms:this.uniforms,vertexShader:f.a,fragmentShader:y.a}),this.mesh=new h.a(this.geo,this.material),this.scene.add(this.mesh),this.renderer.domElement.style.height="100%",this.renderer.domElement.style.width="",this.renderer.domElement.style.margin="0 auto",this.renderer.domElement.style.display="block",this.start()},i.constructUniforms=function(){this.uniforms={};for(var t=0,e=Object.entries(this.props.uniformValues);t<e.length;t++){var n=e[t],a=n[0],r=n[1];this.uniforms[a]={value:r}}},i.setUniforms=function(){for(var t=0,e=Object.entries(this.props.uniformValues);t<e.length;t++){var n=e[t],a=n[0],r=n[1];this.uniforms[a].value=r}},i.componentDidUpdate=function(){this.renderer.setSize(this.props.texSize,this.props.texSize),this.renderer.domElement.style.height="100%",this.renderer.domElement.style.width="",this.setUniforms()},i.start=function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))},i.animate=function(){this.renderScene(),this.frameId=requestAnimationFrame(this.animate)},i.renderScene=function(){this.renderer.render(this.scene,this.camera)},i.render=function(){var t=this;return r.a.createElement("canvas",{ref:function(e){t.canvas=e},style:{height:"100%",display:"block",margin:"0 auto"},width:this.props.texSize,height:this.props.texSize})},a}(a.Component);var w=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t={seed:this.props.inputParams.seed,scale:this.props.inputParams.scale,gain:this.props.inputParams.gain,lacunarity:this.props.inputParams.lacunarity,octaves:this.props.inputParams.octaves};return r.a.createElement(g,{texSize:this.props.inputParams.resolution,uniformValues:t})},a}(r.a.Component);function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var I=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).state={windowWidth:0,windowHeight:0,inputParams:{}},n.handleInput=n.handleInput.bind(E(n)),n.updateSize=n.updateSize.bind(E(n)),n}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=a.prototype;return i.componentDidMount=function(){window.onresize=this.updateSize,this.updateSize(),s()(function(){s()("html").fadeIn(500)})},i.updateSize=function(){this.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})},i.handleInput=function(t){this.setState({inputParams:t})},i.render=function(){return r.a.createElement("div",{style:{margin:"0 auto",width:.9*this.state.windowWidth,height:Math.min(.5*this.state.windowWidth,.9*this.state.windowHeight),fontSize:"1.5vw"}},r.a.createElement("div",{style:{height:"100%"}},r.a.createElement("div",{style:{height:"100%",width:"30%",float:"left"}},r.a.createElement("div",{style:{height:"20%"}},r.a.createElement(u,null)),r.a.createElement("div",{style:{height:"80%"}},r.a.createElement(m,{onInput:this.handleInput}))),r.a.createElement("div",{style:{height:"100%",width:"70%",float:"right"}},r.a.createElement(w,{inputParams:this.state.inputParams}))))},a}(r.a.Component);e.default=function(){return r.a.createElement(i.a,{title:"Beginner's title"},r.a.createElement(I,null))}},192:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(195);n(197);e.a=function(t){var e=t.children,n=t.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Helmet,null,r.a.createElement("title",null,n),r.a.createElement("link",{rel:"stylesheet"})),r.a.createElement("main",null,e))}},239:function(t,e){t.exports="#define GLSLIFY 1\nvarying vec2 vPos;\n\nvoid main() {\n    gl_Position = vec4(position.xy, 0., 1.);\n    vPos = position.xy / 2. + .5;\n}"},240:function(t,e){t.exports="#define GLSLIFY 1\nvarying vec2 vPos;\n\nuniform float seed;\n\n#define MAX_OCTAVES 20\n\nuniform float scale;\nuniform float gain, lacunarity;\nuniform int octaves;\n\nfloat random(float x) {\n    return fract(sin(x * 1238.412 + seed * 56.21) * 219.32 + .76 - seed * 89.1);\n}\nfloat random(vec2 p) {\n    return random(random(p.x) * random(p.y) + random(p.x * p.y) - random(p.x - p.y) * 129.);\n}\n\nfloat noise(vec2 p) {\n    vec2 n = floor(p), f = fract(p);\n    f = smoothstep(0., 1., f);\n    float c = random(n + vec2(0., 1.)), d = random(n + vec2(1., 1.)),\n          a = random(n + vec2(0., 0.)), b = random(n + vec2(1., 0.));\n    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\n// Fractional brownian motion\nvoid main() {\n    vec2 st = vPos;\n    float res = 0.;\n    float amplitude = 1.;\n    st = st * scale;\n    for (int i = 0; i < MAX_OCTAVES; ++i) {\n        if (i >= octaves) {\n            break;\n        }\n        res += amplitude * noise(st);\n        amplitude *= gain;\n        st *= lacunarity;\n    }\n    if (gain == 1.) {\n        res = res / float(octaves);\n    }\n    else {\n        res = res * (gain - 1.) / (pow(gain, float(octaves)) - 1.); \n    }\n\n    gl_FragColor = vec4(vec3(res), 1.);\n}"}}]);
//# sourceMappingURL=component---src-pages-index-js-e7609249e08d7e698773.js.map