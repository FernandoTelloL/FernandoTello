import { CssIcon, FirebaseIcon, GitIcon, HtmlIcon, JavascriptIcon, MySQLIcon, PostgresIcon, ReactIcon, SkillsIcon } from '../../components'

export const Skills = () => {
  return (
    <section id='skills' className='mt-8 pt-12 sm:mb-24'>
      {/* titulo */}
      <div className='flex items-center gap-3 sm:mb-6'>
        <SkillsIcon />
        <h2 className='text-3xl sm:text-3xl font-bold '>Habilidades</h2>
      </div>

      <div className='sm:flex sm:gap-4'>
        {/* cards con los svg de todas las Tecnologías Frontend */}
        <section className='mt-10 sm:mt-0 sm:w-1/2 sm:flex-1'>
          <p className='text-base font-normal text-textColorDark-primary bg-accent-dark/10 border-accent-dark/10 border p-2 rounded-tl-xl rounded-tr-xl'>Tecnologías Frontend</p>
          <div className=' grid grid-cols-2 md:grid-cols-3 gap-8 rounded-b-xl p-6  border-accent-dark/15 border sm:flex-1'>
            <div className='flex flex-col items-center'>
              <JavascriptIcon
                classIcon='h-[50px] w-auto self-center text-sm me-0 flex origin-center transition-all ease-in-out'
              />
              <span className='sm:text-xs text-sm font-medium '>JavaScript</span>
            </div>

            <div className='flex flex-col items-center'>
              <CssIcon
                classIcon='h-[50px] w-auto self-center text-sm me-0 flex origin-center transition-all ease-in-out'
              />

              <span className='sm:text-xs text-sm font-medium'>CSS</span>
            </div>

            <div className='flex flex-col items-center'>
              <HtmlIcon
                classIcon='h-[50px] w-auto self-center text-sm me-0 flex origin-center transition-all ease-in-out'
              />
              <span className='sm:text-xs text-sm font-medium'>HTML</span>
            </div>

            <div className='flex flex-col items-center'>
              <ReactIcon
                classIcon='h-[50px] w-auto self-center text-sm me-0 flex origin-center transition-all ease-in-out'
              />
              <span className='sm:text-xs text-sm font-medium'>
                React
              </span>
            </div>

            <div className='flex flex-col items-center'>
              <GitIcon
                classIcon='h-[50px] w-auto self-center text-sm me-0 flex origin-center transition-all ease-in-out'
              />
              <span className='sm:text-xs text-sm font-medium md:text-base  '>Git</span>
            </div>

          </div>
        </section>

        {/* cards con los svg de todas las Tecnologías Backend */}
        <section className='mt-12 sm:mt-0 sm:w-1/2 min-h-full sm:flex-1'>
          <p className='text-base font-normal text-textColorDark-primary bg-accent-dark/10 border-accent-dark/10 border p-2 rounded-tl-xl rounded-tr-xl'>
            Tecnologías Backend
          </p>
          <div className=' grid grid-cols-2 md:grid-cols-3 gap-8 rounded-b-xl p-6  border-accent-dark/15 border sm:flex-1'>

            <div className='flex flex-col items-center'>
              <MySQLIcon
                classIcon='h-[50px] w-auto self-center text-sm me-0 flex origin-center transition-all ease-in-out'
              />
              <span className='text-sm font-medium md:text-base  '>MySQL</span>
            </div>
            <div className='flex flex-col items-center'>
              <PostgresIcon
                classIcon='h-[50px] w-auto self-center text-sm me-0 flex origin-center transition-all ease-in-out'
              />
              <span className='text-sm font-medium md:text-base'>PostgreSQL</span>
            </div>
            <div className='flex flex-col items-center'>
              <FirebaseIcon
                classIcon='h-[50px] w-auto self-center text-sm me-0 flex origin-center transition-all ease-in-out'
              />
              <span className='text-sm font-medium md:text-base'>Firebase</span>
            </div>
          </div>
        </section>

      </div>

    </section>

  )
}
