import { create } from 'zustand'

interface Store {
  tag: string | null
  changeTag: (newValue: string | null) => void
}

const useFakeSession = create<Store>((set) => ({
  tag: null,
  changeTag: (newValue) => set(() => ({ tag: newValue })),
}))

export default useFakeSession
