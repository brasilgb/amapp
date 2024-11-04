import React from 'react'
import { Card } from '../ui/card'
import { Link } from '@inertiajs/react'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'

type Props = {}

const BarAnalise = (props: Props) => {
    return (
        <div className='flex items-center justify-start bg-slate-100 px-4 py-2 gap-4'>
            <Link
            className={`w-48 flex items-center justify-center py-1 shadow uppercase text-sm font-semibold ${route().current('invoicing.summary') ? 'bg-green-600 text-white border-white' : 'bg-white border-gray-50 text-green-700'}`}
                href={route('invoicing.summary')}
            >
                <span className='drop-shadow'>Resumo</span>
            </Link>
            <Link
            className={`w-48 flex items-center justify-center py-1 shadow uppercase text-sm font-semibold ${route().current('invoicing.association') ? 'bg-green-600 text-white border-white' : 'bg-white border-gray-50 text-green-700'}`}
                href={route('invoicing.association')}
            >
                <span className='drop-shadow'>Associação</span>
            </Link>
        </div>
    )
}

export default BarAnalise