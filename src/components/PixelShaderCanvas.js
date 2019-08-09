import React , {Component} from 'react'
import {Scene, OrthographicCamera, WebGLRenderer, Shape, Vector2, ShapeBufferGeometry, Mesh, ShaderMaterial} from 'three'
import vert from '../shaders/vert.glsl'
import frag from '../shaders/frag.glsl'

class PixelShaderCanvas extends Component {
    constructor(props) {
        super(props);

        this.animate = this.animate.bind(this)
    }
    componentDidMount() {
        this.scene = new Scene()
        this.camera = new OrthographicCamera(-1, 1, 1, -1, 0.5, 100)
        this.camera.position.z = 5
        console.log(this.camera)
        this.renderer = new WebGLRenderer({canvas: this.canvas})
        this.renderer.setClearColor('#000000')
        this.renderer.setSize(this.props.texSize, this.props.texSize)
        
        this.shape = new Shape([
            new Vector2(-1, -1),
            new Vector2(-1, 1),
            new Vector2(1, 1),
            new Vector2(1, -1)
        ])
        this.geo = new ShapeBufferGeometry(this.shape)
        this.material = new ShaderMaterial({
            vertexShader: vert,
            fragmentShader: frag
        })
        this.mesh = new Mesh(this.geo, this.material)
        this.scene.add(this.mesh)
        console.log(this.scene)
        this.renderer.domElement.style.height = "100%"
        this.renderer.domElement.style.width = ""
        this.renderer.domElement.style.margin = "0 auto"
        this.renderer.domElement.style.display = "block"

        this.start()
    }
    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }
    animate() {
        this.renderScene()
        this.frameId = requestAnimationFrame(this.animate)
    }
    renderScene() {
        this.renderer.render(this.scene, this.camera)
    }
    render() {
        return (<>
            <script src={vert}></script>
            <script src={frag}></script>
            <canvas ref={(canv)=>{this.canvas = canv}} 
                    style={{height:"100%", display: "block", margin: "0 auto"}} 
                    width={this.props.texSize} 
                    height={this.props.texSize}/>
        </>)
    }
}

export default PixelShaderCanvas