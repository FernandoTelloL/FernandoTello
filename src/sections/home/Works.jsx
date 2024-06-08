export const Works = () => {
  return (
    <section
      id='experiencia'
      data-section='experiencia'
      className='section scroll-m-20 w-full mx-auto my-24 container lg:max-w-4xl md:max-w-2xl'
    >
      <h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3'>
        <svg
          className='size-8'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' />
          <path d='M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2' />
          <path d='M12 12l0 .01' />
          <path d='M3 13a20 20 0 0 0 18 0' />
        </svg>
        Experiencia laboral
      </h2>

      <ol className='relative mt-16'>
        {/* <li>
          <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4">
            <div className='relative pb-12 md:col-span-2'>
              <div className='sticky top-0'>
                <span className='text-yellow-400 -left-[42px] absolute rounded-full text-5xl'>
                  •
                </span>
                <h3 className='text-xl font-bold text-yellow-400'>
                  Creador de Contenido
                </h3>
                <h4 className='font-semibold text-xl text-gray-600 dark:text-white'>
                  Twitch
                </h4>
                <time className='p-0 m-0 text-sm text-gray-600/80 dark:text-white/80'>
                  Actualmente...
                </time>
              </div>
            </div>

            <div className='relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3'>
              Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.
              <a
                href='https://twitch.tv/midudev'
                role='link'
                className='inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700'
              >
                Saber más
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 icon icon-tabler icon-tabler-chevron-right'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M9 6l6 6l-6 6' />
                </svg>
              </a>
            </div>
          </div>
        </li> */}

        <li>
          <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4">
            <div className='relative pb-12 md:col-span-2'>
              <div className='sticky top-0'>
                <span className='text-accent-dark -left-[42px] absolute rounded-full text-5xl'>
                  •
                </span>
                <h3 className='text-xl font-bold text-accent-dark'>
                  Asistente de Unidad de Tecnología de la Información
                </h3>
                <h4 className='font-semibold text-xl e'>
                  Municipalidad Distrital de Chicama
                </h4>
                <time className='p-0 m-0 text-sm 0'>
                  Enero 2022 - Diciembre 2022
                </time>
              </div>
            </div>

            <div className='relative flex flex-col gap-2 pb-4 md:col-span-3'>
              Encargado del mantenimiento preventivo y correctivo de equipos cómputo, supervisar la conexión de red, crear y dar mantenimiento a páginas web institucionales, crear nuevos sistemas de información y mantener los sistemas existentes.
            </div>
          </div>
        </li>
      </ol>
    </section>
  )
}
