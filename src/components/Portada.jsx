import bg from '../assets/images/bg.png'

function Portada() {
    return (
        <section className="h-screen bg-cover bg-center flex flex-col items-center justify-center gap-12 px-4" style={{ backgroundImage: `url(${bg})` }}>
            <p className='font-montserrat text-2xl text-center text-secondary' translate='no'>Parroquia Inmaculada Concepción de María Carapeguá </p>
            <h1 className='font-gistesy text-5xl text-center text-white' translate='no'>Encuentro Juvenil Parroquial</h1>
            <h2 className='font-montserrat text-5xl text-center text-white' translate='no'><span className='text-secondary'>LIDERAZGO</span> JUVENIL</h2>
            <section className='flex flex-col gap-2'>
                <section className='flex items-center gap-2'>
                    <p className='font-montserrat text-white text-3xl/loose font-bold border-y border-secondary' translate='no'>DOMINGO</p>
                    <p className='font-montserrat text-secondary text-5xl font-bold' translate='no'>11</p>
                    <p className='font-montserrat text-white text-3xl/loose font-bold border-y border-secondary' translate='no'>AGOSTO</p>
                </section>
                <p className='font-montserrat text-secondary text-3xl font-bold text-center' translate='no'>9:30HS a 11:30HS</p>
            </section>
        </section>
    )
}

export default Portada
