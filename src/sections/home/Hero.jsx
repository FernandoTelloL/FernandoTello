export const Hero = () => {
  return (
    <section id='inicio' className='h-[80vh] flex flex-col items-center justify-center text-center'>
      <img src='./img/foto.png' className='w-[200px] h-[200px] object-cover rounded-full mb-12 border border-accent-dark p-1 bg-accent-dark/10 backdrop-blur-sm' alt='Fernando Tello' />
      <h1 className='text-3xl font-bold mb-4 sm:text-6xl text-textColorDark-primary'>FERNANDO TELLO</h1>
      <h2 className='text-2xl text-accent-dark sm:text-3xl'>Full Stack Developer</h2>
    </section>

  )
}
