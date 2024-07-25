import bg from '../assets/images/bg.png'
import AsistenciaForm from './AsistenciaForm'

function Asistencia() {
    return (
        <section className="h-screen bg-cover bg-center flex flex-col justify-center gap-12 px-4" style={{ backgroundImage: `url(${bg})` }}>
            <h2 className='font-montserrat text-2xl text-white text-center' translate='no'>¡Confirma tu asistencia y participá de sorteos!</h2>
            <AsistenciaForm/>
        </section>
    )
}

export default Asistencia
