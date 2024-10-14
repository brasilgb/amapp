import { Link } from "@inertiajs/react"
import { LogOut } from "lucide-react"
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <>
      <div>Dashboard</div>
      <div>
        <Link
          href={route('logout')}
          method="post"
          as="button"
          className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                    text-muted-foreground transition-colors hover:text-foreground'
        >
          <LogOut className='h-5 w-5 text-red-500' />
          <span className='sr-only'>Sair</span>
        </Link>
      </div>
    </>
  )
}

export default Dashboard