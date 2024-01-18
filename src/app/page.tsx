'use client'

import { useRouter } from 'next/navigation'
import Button from './components/ui/button'

export default function Home() {
  const { push } = useRouter()

  return (
    <main>
      <h1 className="text-6xl font-extrabold text-center pt-32 bg-gradient-to-b from-sec-gray/80 to-sec-gray dark:from-white dark:to-gray-300 text-transparent bg-clip-text">
        Volatile Chat
      </h1>
      <p className="text-center text-xl text-sec-gray/80 dark:text-white/70">
        Starts chats{' '}
        <span className="text-black dark:text-white">peer to peer</span> with 1
        click without need of sign in or sign up
      </p>
      <div className="flex justify-center mt-4 relative z-20 gap-2">
        <Button size="large" onClick={() => push('/create-user')}>
          Get Started
        </Button>
      </div>
    </main>
  )
}
