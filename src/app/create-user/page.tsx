'use client'
import { useState } from 'react'
import Button from '../components/ui/button'
import useFakeSession from '../store/fakeSession'

function CreateUser() {
  const [isLoading, setIsLoading] = useState(false)

  const { changeTag, tag } = useFakeSession()

  const handleUserCreation = () => {
    setIsLoading(true)
    fetch('/api/create-user', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem('vctag', response.data)
        changeTag(response.data)
      })
      .catch((err) => console.log('error on user creation', err))
      .finally(() => setIsLoading(false))
  }

  return (
    <div className="mt-32">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-extrabold text-center">User generation</h2>
        <p className="dark:text-gray-300 text-gray-700">
          To start an conversation you have to create an random id
        </p>
        <Button
          size="normal"
          className="mt-2"
          variant="secondary"
          isLoading={isLoading}
          onClick={handleUserCreation}
        >
          Create User
        </Button>
        <span className="text-xl mt-4 p-2 bg-gray-100/10 rounded-md"># {tag}</span>
      </div>
    </div>
  )
}

export default CreateUser
