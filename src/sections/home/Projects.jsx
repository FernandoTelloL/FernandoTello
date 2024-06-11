export const Projects = () => {
  return (
    <section
      id='proyectos'
      data-section='proyectos'
      className='scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl my-24 md:mb-32'
    >
      <h2 className='flex items-center mb-10 text-3xl font-semibold gap-x-3'>
        <svg
          className='size-7'
          xmlns='http://www.w3.org/2000/svg'
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
          <path d='M7 8l-4 4l4 4' />
          <path d='M17 8l4 4l-4 4' />
          <path d='M14 4l-4 16' />
        </svg>
        Proyectos
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16'>

        {/* <!-- Proyecto 1 --> */}
        <article className='flex flex-col group space-y-4 border-accent-dark/15 border-2 border-solid border-opacity-10 rounded-xl p-4'>
          <div className='w-full mt-4'>
            <div className='overflow-clip rounded-xl '>

              <img alt='Recién llegado vs 5 años en Nueva Zelanda' className='object-cover w-full h-56 transition duration-500 sm:h-full md:scale-110' src='./img/bloggio.png' />

            </div>
          </div>
          <div className='w-full space-y-4 group'>
            <h3 className='text-2xl font-bold '>
              Bloggio
            </h3>

            <div className='flex flex-wrap'>

              <div className=''>
                Proyecto de blog hecho en colaboración, mi trabajo fue hacer todo el front mientras mis compañeros crearon el backend utilizando Spring boot y PostgreSQL.
              </div>

              <ul className='flex flex-row my-3 gap-x-2'>

                <li>
                  <span className='flex gap-x-2 rounded-full text-xs bg-slate-800 text-white py-1 px-2'>

                    <svg className='size-4' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z' fill='#53C1DE' />
                      <path fillRule='evenodd' clipRule='evenodd' d='M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z' fill='#53C1DE' />
                    </svg>
                    React
                  </span>
                </li>

                <li>
                  <span className='flex gap-x-2 rounded-full text-xs bg-[#003159] text-white py-1 px-2'>
                    <svg className='size-4' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 54 33'>
                      <g clipPath='url(#a)'>
                        <path fill='#38bdf8' fillRule='evenodd' d='M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z' clipRule='evenodd' />
                      </g>
                      <defs>
                        <clipPath id='a'>
                          <path fill='#fff' d='M0 0h54v32.4H0z' />
                        </clipPath>
                      </defs>
                    </svg>
                    Tailwind CSS
                  </span>
                </li>
              </ul>
              <footer className='flex flex-col md:flex-row md:space-y-0 w-full mt-4 space-y-3 text-sm mb-4'>
                <a
                  href='https://github.com/FernandoTelloL/bloggio'
                  target='_blank'
                  rel='noopener noreferrer'
                  role='link'
                  className='inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit min-w-full rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black md:text-xs md:max-w-[50%] md:min-w-[40%]'
                >
                  <svg className='size-6 md:size-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.5 1 -.5 2v3.5' />
                  </svg>
                  Ver en Github
                </a>
                <a
                  href='https://bloggio-web.onrender.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  role='link'
                  className='inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit min-w-full  rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black md:text-xs md:max-w-[50%] md:min-w-[40%]'
                >
                  <svg className='size-6 md:size-4' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0 -2.25 2.25V9m10.5 0v9A2.25 2.25 0 0 1 16.5 20.25H7.5a2.25 2.25 0 0 1 -2.25 -2.25V9m10.5 0h-9' />
                  </svg>
                  Visitar el sitio
                </a>
              </footer>
            </div>
          </div>
        </article>
        {/* <!-- Fin de Proyecto 1 --> */}

        {/* <!-- Proyecto 2 --> */}
        {/* <article className='flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0'>
          <div className='w-full md:w-1/2'>
            <div className='relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50'>
              <img alt='Recién llegado vs 5 años en Nueva Zelanda' className='object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105' loading='lazy' src='/projects/adventjs.webp' />
            </div>
          </div>
          <div className='w-full md:w-1/2 md:max-w-lg'>
            <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>AdventJS - Retos de programación con JavaScript y TypeScript</h3>
            <div className='flex flex-wrap mt-2'>
              <ul className='flex flex-row mb-2 gap-x-2'>
                <li>
                  <span className='flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2'>
                    <svg className='size-4' xmlns='http://www.w3.org/2000/svg' width='256' height='256' preserveAspectRatio='xMidYMid' viewBox='0 0 256 256'>
                      <defs>
                        <linearGradient id='c' x1='55.633%' x2='83.228%' y1='56.385%' y2='96.08%'>
                          <stop offset='0%' stopColor='#FFF' />
                          <stop offset='100%' stopColor='#FFF' stopOpacity='0' />
                        </linearGradient>
                        <linearGradient id='d' x1='50%' x2='49.953%' y1='0%' y2='73.438%'>
                          <stop offset='0%' stopColor='#FFF' />
                          <stop offset='100%' stopColor='#FFF' stopOpacity='0' />
                        </linearGradient>
                        <circle id='a' cx='128' cy='128' r='128' />
                      </defs>
                      <mask id='b' fill='#fff'>
                        <use xlinkHref='#a' />
                      </mask>
                      <g mask='url(#b)'>
                        <circle cx='128' cy='128' r='128' />
                        <path fill='url(#c)' d='M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z' />
                        <path fill='url(#d)' d='M163.556 76.8h17.067v102.4h-17.067z' />
                      </g>
                    </svg>
                    Next.js
                  </span>
                </li>
                <li>
                  <span className='flex gap-x-2 rounded-full text-xs bg-[#003159] text-white py-1 px-2'>
                    <svg className='size-4' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 54 33'>
                      <g clipPath='url(#a)'>
                        <path fill='#38bdf8' fillRule='evenodd' d='M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z' clipRule='evenodd' />
                      </g>
                      <defs>
                        <clipPath id='a'>
                          <path fill='#fff' d='M0 0h54v32.4H0z' />
                        </clipPath>
                      </defs>
                    </svg>
                    Tailwind CSS
                  </span>
                </li>
              </ul>
              <div className='mt-2 text-gray-700 dark:text-gray-400'>
                Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.
              </div>
              <footer className='flex items-end justify-start mt-4 gap-x-4'>
                <a href='https://adventjs.dev' role='link' className='inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'>
                  <svg className='size-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
                    <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
                  </svg>
                  Preview
                </a>
              </footer>
            </div>
          </div>
        </article> */}
        {/* <!-- Fin de Proyecto 2 --> */}

      </div>
    </section>
  )
}
