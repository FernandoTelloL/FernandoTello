import { useState } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='bg-gray-800 text-white sticky top-0 z-50'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        <div className='text-lg font-bold'>FernandoT-Dev</div>
        <nav className='hidden md:flex space-x-4'>
          <a href='#inicio' className='hover:text-gray-400'>Inicio</a>
          <a href='#nosotros' className='hover:text-gray-400'>Nosotros</a>
        </nav>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-gray-800 p-4'>
          <a href='#inicio' className='block py-2 px-4 hover:bg-gray-700 rounded'>Inicio</a>
          <a href='#nosotros' className='block py-2 px-4 hover:bg-gray-700 rounded'>Nosotros</a>
        </div>
      )}
    </header>
  )
}
