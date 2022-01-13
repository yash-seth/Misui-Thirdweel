import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function App() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
     <div className="w-md h-96 bg-primary-600">

     </div>
    </>
  )
}
