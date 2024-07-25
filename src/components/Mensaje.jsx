import bg2 from '../assets/images/bg2.png'

function Mensaje() {
    return (
        <section className="h-screen bg-cover bg-center flex flex-col items-center justify-center gap-12 px-4" style={{ backgroundImage: `url(${bg2})` }}>
            <p className='font-montserrat text-2xl text-center text-primary'>Acompáñanos en un evento transformador donde exploraremos el poder del liderazgo juvenil dentro de nuestra comunidad. </p>
        </section>
    )
}

export default Mensaje
