import { Link, usePage } from '@inertiajs/react'
import { Gauge, HandCoins, LogOut, Settings, User, Users } from 'lucide-react';
import React from 'react'
import { Button } from '@/Components/ui/button';
import { DropdownMenuUser } from './DropDownUser';

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
          ${route().current('clientes') ? 'bg-green-600 text-white hover:text-white/80' : 'bg-gray-200 text-green-600 hover:text-green-600/60'}
          `}
                        href={route('clientes')}>
                        <Gauge className='h-5 w-5' />
                        <span className='sm:flex hidden'>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className={`flex items-center justify-center gap-2 rounded-lg py-1 px-3 text-base font-semibold
                        ${route().current('invoicing.*') ? 'bg-green-600 text-white hover:text-white/80' : 'bg-gray-200 text-green-600 hover:text-green-600/60'}
                        `}
                        href={route('invoicing.summary')}>
                        <HandCoins className='h-5 w-5' />
                        <span className='sm:flex hidden'>Faturamento</span>
                    </Link>
                </li>
            </ul>
            <ul className='flex items-center'>
                <li>
                    <DropdownMenuUser />
                </li>
            </ul>
        </div>
    )
}

export default Header
