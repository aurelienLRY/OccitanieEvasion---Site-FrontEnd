import React, { useRef } from 'react'

type Props = {}

function FormContact({}: Props) {
    const ref = useRef<HTMLFormElement | null>(null) 

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(ref.current!) 
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        }
        console.log(data)
    }

  return (
    <form onSubmit={handleOnSubmit} ref={ref}>
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Envoyer</button>
    </form>
  )
}

export default FormContact