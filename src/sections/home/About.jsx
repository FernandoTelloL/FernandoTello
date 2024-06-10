export const About = () => {
  return (
    <section id='about' className='mt-14 mb-16 md:max-w-[50%]'>
      <h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3 '>
        <svg
          className='size-8' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'
        >
          <path
            stroke='none' d='M0 0h24v24H0z' fill='none'
          />
          <path
            d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'
          />
          <path d='M6 21v-2a4 4 0 0 1 4 -4h4' />
          <path d='M15 19l2 2l4 -4' />
        </svg>

        Acerca de mí
      </h2>

      <p className=''>
        Mi enfoque es crear aplicaciones web que sean fáciles de usar y que cumplan las necesidades de los usuarios. Estoy dispuesto a aprender y mejorar mi conocimiento en cada proyecto, y a trabajar en equipo con otros desarrolladoress para crear soluciones innovadoras.
      </p>
    </section>
  )
}
