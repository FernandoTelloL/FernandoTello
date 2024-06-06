/* eslint-disable react/prop-types */

import { Header } from './Header'

export const Layout = ({ children }) => {
  return (
    <div className='bg-primary-dark text-primary-light'>
      <Header />
      <main className='bg-primary-dark text-primary-light'>
        {children}
      </main>
    </div>
  )
}
