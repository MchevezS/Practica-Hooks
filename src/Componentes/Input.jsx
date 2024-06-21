import { useState } from "react"
import App from "../App"
import Button from "./Button"

const Input =({text}) =>{
    const Nombre = useRef('')
    const Clave = useRef('')
    const nombre = useState('')
    const clave = useState('')

    const validarVacio = () =>{
        if (!Nombre.current.value && !Clave.current.value) {
                alert("INPUT VACIO")
                return
        }
        text()
    }
    const PostData = async (usuarios) =>{
        try {
          let response = await fetch(apiUrl, {
            estado:usuarios[nombre, clave],
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers:{
                "content-Type": "application/json",
            },
            body: JSON.stringify(usuarios)
          });
          let data = await response.json();
          return data;
            
        } catch (e) {
            console.log(e);
            return null;  
            
        }
    }
    
    return(
        <>
<input id="nombreUsuario" placeholder="Nombre de Usuario" ref={Nombre}></input>
<br></br>
<input id="clave" placeholder="Password" ref={Clave}></input>
<br></br>

<Button handleClick={validarVacio} label={"Iniciar Sesion"} type={"button"}/>


</>
)
}
export default Input
