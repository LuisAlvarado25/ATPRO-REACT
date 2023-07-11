import React from 'react'
import './Home.css'


function Home() {
  return (
  <>
  <div className='container-home'>
    <img className='img1' src="./ATPRO_logo.jpg"></img>
    <h2 className='Brand'><strong>Advanced Technology Products and Solutions</strong></h2>
  </div>
  <div className='container-about'>
  <img className='img2' src="./Home2.jpg"></img>
  <h1 className='title-about'><b>Expertos en Automatización Industrial</b></h1>
  <div className='About'>
  <p ><strong>Somos una empresa dedicada al ramo de automatización industrial, nuestra especialidad es brindar los productos de automatización necesarios para la mejora de tus procesos productivos.</strong></p>
  <p ><b>Acompáñanos&nbsp;a nuestros clientes con la asesoría técnica y el soporte necesario para resolver sus problemas de automatización y convertirlas en soluciones con los mejores productos del entorno de la administración&nbsp;energética, datos y señales de marcas prestigiadas, de alta tecnología y gran calidad.</b></p>
  <p ><strong>Mejorando y optimizando los procesos productivos de nuestros clientes, por medio de los mejores productos para automatizar, medir y controlar todos tus procesos productivos.</strong></p>
  <p ><strong>Con más de 20 años en la industria en ATPRO somos expertos en automatización industrial para que tu no tengas que serlo.</strong></p>
  </div>
  <img className='img3' src="./Danfoss.png"></img>
  </div>
  </>
  )
}

export default Home