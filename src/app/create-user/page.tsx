'use client'
import Button from '../components/ui/button'

function CreateUser() {
  return (
    <div className="mt-32">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-extrabold text-center">User generation</h2>
        <p className="dark:text-gray-300 text-gray-700">
          To start an conversation you have to create an random id
        </p>
        <Button size="normal" className="mt-2" disabled variant="secondary">
          Create User
        </Button>
      </div>
    </div>
  )
}

export default CreateUser
