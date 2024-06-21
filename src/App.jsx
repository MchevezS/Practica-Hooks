import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InicioSesion from './Componentes/InicioSesion/InicioSesion'
import './App.css'
import Input from './Componentes/Input'
import Button from './Componentes/Button'


function App() {
  // const InicioSesion =()=>{
  //   const apiUrl = "http://localhost:3000/api/task/";
  //   const PostData = async (usuarios) =>{
  //       try {
  //         let response = await fetch(apiUrl, {
  //           estado:usuarios[nombre, clave],
  //           method: "POST",
  //           mode: "cors",
  //           credentials: "same-origin",
  //           headers:{
  //               "content-Type": "application/json",
  //           },
  //           body: JSON.stringify(usuarios)
  //         });
  //         let data = await response.json();
  //         return data;
            
  //       } catch (e) {
  //           console.log(e);
  //           return null;  
            
  //       }
        
  //   }
  // }
  return (
    <>
      <InicioSesion/>
      
    </>
  )
}

export default App
