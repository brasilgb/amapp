import { Link, usePage } from '@inertiajs/react'
import { Gauge, HandCoins, LogOut, Settings, User } from 'lucide-react';
import React from 'react'
import { Button } from '@/Components/ui/button';

type Props = {}

const Header = (props: Props) => {
  const { settings } = usePage().props.auth as any;
  return (
    <div className='h-12 px-4 bg-gray-100 flex items-center justify-between border-b gap-2'>
      <ul className='flex items-center gap-4'>
        <li>
          <Link
            href={route('clientes')}
            className='flex h-9 w-9 shrink-0 items-center justify-center bg-green-700 text-primary-foreground rounded-full'
          >
            <img
              className='h-8 w-8 rounded-full object-content'
              src={`/storage/images/${settings?.logo ? settings?.logo : "default.png"}`}
              alt="Imagem de logo"
            />
          </Link>
        </li>
        <li>
          <Link
            className={`flex items-center justify-center gap-2 rounded-lg py-1 px-3 text-base font-semibold
          ${route().current('clientes') ? 'bg-green-600 text-white hover:text-white/80' : 'bg-gray-100 text-green-600 hover:text-green-600/60'}
          `}
            href={route('clientes')}>
            <Gauge className='h-5 w-5' /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            className={`flex items-center justify-center gap-2 rounded-lg py-1 px-3 text-base font-semibold
                        ${route().current('invoicing.*') ? 'bg-green-600 text-white hover:text-white/80' : 'bg-gray-100 text-green-600 hover:text-green-600/60'}
                        `}
            href={route('invoicing.summary')}>
            <HandCoins className='h-5 w-5' /> <span>Faturamento</span>
          </Link>
        </li>
      </ul>
      <ul className='flex items-center'>
        <li>
          <Button variant="ghost" asChild>
            <Link
              className='text-gray-500 hover:text-gray-500/90'
              method='post'
              href={route('logout')}
              type='button'
              as='button'
            >
              <Settings />
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="ghost" asChild>
            <Link
              className='text-gray-500 hover:text-gray-500/80'
              method='post'
              href={route('logout')}
              type='button'
              as='button'
            >
              <User />
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="ghost" asChild>
            <Link
              className='text-red-500 hover:text-red-500/80'
              method='post'
              href={route('logout')}
              type='button'
              as='button'
            >
              <LogOut />
            </Link>
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default Header