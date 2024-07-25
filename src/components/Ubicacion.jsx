import bg from '../assets/images/bg.png'
import { MapPinIcon } from '../icons/MapPinIcon'
import { redirectTo } from '../utils'

function Ubicacion() {
    return (
        <section className="h-screen bg-cover bg-center flex flex-col items-center justify-center gap-12 px-4" style={{ backgroundImage: `url(${bg})` }}>
            <h2 className='font-montserrat text-2xl text-white' translate='no'>¿Dónde?</h2>
            <p className='font-montserrat text-2xl text-secondary text-center' translate='no'>Capilla de la Catedral de Carapeguá</p>
            <button className='flex items-center justify-center gap-4 bg-secondary w-full shadow-md rounded-md p-4' onClick={() => { redirectTo('https://maps.app.goo.gl/aJBzmhQTHX84pnwp6') }}>
                <MapPinIcon />
                <p className='font-montserrat text-xl text-white' translate='no'>VER UBICACIÓN</p>
            </button>
            <section className='flex gap-2 items-center'>
            </section>
        </section>
    )
}

export default Ubicacion
