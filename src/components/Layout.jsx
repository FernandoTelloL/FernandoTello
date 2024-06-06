/* eslint-disable react/prop-types */

import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }) => {
  return (
    <div className='bg-primary-dark text-textColorDark-primary font-inter'>
      <div className=' md:max-w-[1100px] w-[80dvw] m-auto'>
        <Header />
        <main className=''>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
