import { User } from 'lucide-react'
import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className="flex items-center justify-end bg-muted/40 border-b py-2 px-4">
      <User size={18}/>
      <span className='pl-1'>Anderson Brasil</span>
    </div>
  )
}