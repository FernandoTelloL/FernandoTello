/* eslint-disable react/prop-types */

import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }) => {
  return (
    <div className='bg-primary-dark text-textColorDark-primary font-inter'>
      <div className='w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
        <Header />
        <main className=''>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
