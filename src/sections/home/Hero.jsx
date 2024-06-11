import { DownloadButton } from '../../components'

export const Hero = () => {
  return (
    <section id='inicio' className='h-[70vh] flex flex-col items-center justify-center text-center'>
      <section className='mb-16'>
        <img src='./img/foto.png' className='w-[200px] h-[200px] object-cover rounded-full mb-3 border border-accent-dark p-1 bg-accent-dark/10 backdrop-blur-sm' alt='Fernando Tello' />

        <p className='text-xs rounded-full border py-1 border-accent-dark bg-accent-dark/10'>Disponible para trabajar</p>
      </section>
      <section className='mb-5'>
        <h1 className=' text-4xl md:text-5xl font-extrabold mb-1 text-textColorDark-primary'>FERNANDO TELLO</h1>
        <h2 className='text-xl text-accent-dark sm:text-3xl'>Full Stack Developer</h2>
      </section>

      <section className='flex items-center justify-center w-full mt-1'>
        <DownloadButton />

        <p className='text-xs border rounded-full px-4 py-2 leading-3 bg-accent-dark/10 border-accent-dark text-textColorDark-primary ml-4'> fernando_tellol@hotmail.com</p>
      </section>
    </section>

  )
}
