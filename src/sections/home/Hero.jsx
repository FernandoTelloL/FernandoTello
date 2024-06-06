export const Hero = () => {
  return (
    <section className='h-[70vh] flex flex-col items-center justify-center text-center'>
      <img src='./img/foto.png' className='w-[200px] h-[200px] object-cover rounded-full mb-12 border border-accent-dark p-3 ' alt='Fernando Tello' />
      <h1 className='text-3xl font-bold mb-4 sm:text-5xl text-textColorDark-primary'>FERNANDO TELLO</h1>
      <h2 className='text-2xl text-accent-dark sm:text-3xl'>Full Stack Developer</h2>
    </section>

  )
}
