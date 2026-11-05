
import { createContext, useState, useCallback } from 'react'
import type { ReactNode } from 'react'

type PendaftarContextType = {
  totalPendaftar: number;
  tambahPendaftar: () => void;
}

export const PendaftarContext =
  createContext<PendaftarContextType | null>(null)

export function PendaftarProvider({
  children
}: {
  children: ReactNode
}) {
  const [totalPendaftar, setTotalPendaftar] = useState(0)

  const tambahPendaftar = useCallback(() => {
    setTotalPendaftar(prev => prev + 1)
  }, [])

  return (
    <PendaftarContext.Provider
      value={{ totalPendaftar, tambahPendaftar }}
    >
      {children}
    </PendaftarContext.Provider>
  )
}
