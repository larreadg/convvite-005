import bg from '../assets/images/bg.png'
import cruz from '../assets/images/cruz.png'

function Portada() {
    return (
        <section className="h-screen bg-cover bg-center flex flex-col items-center justify-center gap-12 px-4" style={{ backgroundImage: `url(${bg})` }}>
            <img src={cruz} alt='Cruz' className='w-16 h-16' />
            <p className='font-montserrat text-2xl text-center text-white'>Parroquia Inmaculada Concepción de María Carapeguá </p>
            <h1 className='font-gistesy text-5xl text-center text-white'>Encuentro Juvenil Parroquial</h1>
            <h2 className='font-montserrat text-5xl text-center text-white'><span className='text-secondary'>LIDERAZGO</span> JUVENIL</h2>
        </section>
    )
}

export default Portada
