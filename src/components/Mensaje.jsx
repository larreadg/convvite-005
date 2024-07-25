import bg2 from '../assets/images/bg2.png'
import DownCounter from './Downcounter'

function Mensaje() {
    return (
        <section className="h-screen bg-cover bg-center flex flex-col items-center justify-center gap-6 px-4" style={{ backgroundImage: `url(${bg2})` }}>
            <p className='font-montserrat text-2xl text-center text-primary' translate='no'>Acompáñanos en un evento transformador donde exploraremos el poder del liderazgo juvenil dentro de nuestra comunidad. </p>
            <h2 className='font-montserrat text-2xl text-primary' translate='no'>¡Ya falta poco!</h2>
            <DownCounter fecha='2024-08-11'/>
        </section>
    )
}

export default Mensaje
