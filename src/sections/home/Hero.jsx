export const Hero = () => {
  return (
    <section id='inicio' className='h-[80vh] flex flex-col md:flex-row items-center justify-center text-center'>
      <div className='mb-16'>
        <img src='./img/foto.png' className='w-[200px] h-[200px] object-cover rounded-full mb-3 border border-accent-dark p-1 bg-accent-dark/10 backdrop-blur-sm' alt='Fernando Tello' />

        <p className='text-xs rounded-full border py-1 border-accent-dark bg-accent-dark/10'>Disponible para trabajar</p>
      </div>
      <div>
        <h1 className='text-3xl font-bold mb-2 sm:text-6xl text-textColorDark-primary'>FERNANDO TELLO</h1>
        <h2 className='text-2xl text-accent-dark sm:text-3xl'>Full Stack Developer</h2>
      </div>
    </section>

  )
}
