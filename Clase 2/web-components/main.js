import './style.css'

//creamos template
const template = document.createElement("template")
template.innerHTML =`
<h1>Hola mundo</h1>
`
//creamos clase para conusmir el template y definir el web component

class HeaderComponent extends HTMLElement{
  constructor(){
    super()
    //añadir la sombra a la clase
    this.attachShadow({mode: "open"})
   // obtener el contenido del template
   const shadowTemplate = template.content.cloneNode(true)
   //agregamos el clon del template al shadowRoot de la clase
    this.shadowRoot.append(shadowTemplate)
  }
}
//registrar el component que vamos a utilizar
customElements.define("header-component", HeaderComponent)
export default HeaderComponent;