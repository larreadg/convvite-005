import bg2 from '../assets/images/bg2.png'
import ma from '../assets/images/ma.png'

function Expositor() {
    return (
        <section className="h-screen bg-cover bg-center flex flex-col items-center justify-center gap-12 px-4" style={{ backgroundImage: `url(${bg2})` }}>
            <h2 className='font-montserrat text-2xl text-primary' translate='no'>Expositor</h2>
            <section className='flex flex-col items-center gap-2'>
                <section className='w-24 h-24 rounded-full border-secondary border-2'>
                    <img src={ma} alt="Marco Aponte" className='w-24 h-24 rounded-full' />
                </section>
                <p className='font-montserrat text-4xl text-secondary text-center' translate='no'>Marco Aponte</p>
                <p className='font-montserrat text-2xl text-primary' translate='no'>Ingeniero</p>
            </section>
        </section>
    )
}

export default Expositor
