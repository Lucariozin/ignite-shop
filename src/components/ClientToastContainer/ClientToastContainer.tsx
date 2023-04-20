'use client'

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export const ClientToastContainer = () => {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={4000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      style={{
        maxWidth: '40rem',
        width: '100%',
      }}
    />
  )
}
