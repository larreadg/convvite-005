import { Formik } from 'formik'
import * as Yup from 'yup'
import { CheckIcon } from '../icons/CheckIcon'
import Loader from './Loader'

function AsistenciaForm() {

    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required('Nombre requerido'),
        ci: Yup.number('Debe ser numérico').required('Nro. de CI requerido'),
        edad: Yup.number().min(12, 'Edad mínima de 12').required('Edad requerida'),
        celular: Yup.string().required('Nro. de celular requerido')
            .matches(/^[0-9]+$/, 'Nro. de celular debe ser numérico')
            .matches(/^09/, 'Nro. de celular debe comenzar con 09')
            .length(10, 'Nro. de celular debe tener 10 caracteres'),
    })

    return (
        <Formik
            initialValues={{
                nombre: '',
                ci: '',
                edad: '',
                celular: ''
            }}
            validationSchema={validationSchema}

            onSubmit={async (values, { setSubmitting }) => {

                try {
                    const body = new FormData()
                    body.append('Nombre', values.nombre)
                    body.append('CI', values.ci)
                    body.append('Edad', values.edad)
                    body.append('Celular', values.celular)
    
                    const response = await fetch('https://script.google.com/macros/s/AKfycbynIShkiv73cigBC3jk0ObkOjAYtIeQ7gn5vA2V5I6_C-LCqovNQLCTI4wkWCZrFqsipw/exec', {
                        method: 'POST',
                        body,
                    })
    
                    setSubmitting(false)
                    if (!response.ok) {
                        alert('No se ha podido guardar la confirmación')
                    }
                    alert('Has confirmado tu asistencia')
                } catch(e){
                    alert('No se ha podido guardar la confirmación')
                }
                
            }}
        >

            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    {isSubmitting && <Loader />}
                    <section>
                        <label htmlFor="nombre" className='font-montserrat text-secondary text-lg' translate='no'>Nombre y Apellido</label>
                        <input type="text" name="nombre" onChange={handleChange} onBlur={handleBlur} value={values.nombre} className='w-full px-4 py-2 outline-none border border-primary rounded-lg focus:border-primary focus:ring focus:ring-primary transition duration-200 text-primary' />
                        {errors.nombre && touched.nombre && (
                            <p className='font-montserrat text-sm text-red-300 py-1'>{errors.nombre}</p>
                        )}
                    </section>
                    <section>
                        <label htmlFor="ci" className='font-montserrat text-secondary text-lg' translate='no'>Nro. CI</label>
                        <input type="number" name="ci" onChange={handleChange} onBlur={handleBlur} value={values.ci} className='w-full px-4 py-2 outline-none border border-primary rounded-lg focus:border-primary focus:ring focus:ring-primary transition duration-200 text-primary' />
                        {errors.ci && touched.ci && (
                            <p className='font-montserrat text-sm text-red-300 py-1'>{errors.ci}</p>
                        )}
                    </section>
                    <section>
                        <label htmlFor="edad" className='font-montserrat text-secondary text-lg' translate='no'>Edad</label>
                        <input type="number" name="edad" onChange={handleChange} onBlur={handleBlur} value={values.edad} className='w-full px-4 py-2 outline-none border border-primary rounded-lg focus:border-primary focus:ring focus:ring-primary transition duration-200 text-primary' />
                        {errors.edad && touched.edad && (
                            <p className='font-montserrat text-sm text-red-300 py-1'>{errors.edad}</p>
                        )}
                    </section>
                    <section>
                        <label htmlFor="celular" className='font-montserrat text-secondary text-lg' translate='no'>Nro. de teléfono</label>
                        <input type="text" name="celular" onChange={handleChange} onBlur={handleBlur} value={values.celular} className='w-full px-4 py-2 outline-none border border-primary rounded-lg focus:border-primary focus:ring focus:ring-primary transition duration-200 text-primary' />
                        {errors.celular && touched.celular && (
                            <p className='font-montserrat text-sm text-red-300 py-1'>{errors.celular}</p>
                        )}
                    </section>
                    <section>
                        <button className='flex items-center justify-center gap-4 bg-secondary w-full shadow-md rounded-md p-4 mt-4' type='submit'>
                            <CheckIcon/>
                            <p className='font-montserrat text-xl text-white'>CONFIRMAR</p>
                        </button>
                    </section>
                </form>
            )}
        </Formik>
    )
}

export default AsistenciaForm