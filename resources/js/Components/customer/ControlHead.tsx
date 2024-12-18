import React from 'react'
import { DatePicker } from './DatePicker'
import SelectFilial from './SelectFilial'
import { Button } from '../ui/button';
import { Link } from '@inertiajs/react';
import { Network, RotateCcw } from 'lucide-react';
import { useAuthContext } from '@/Contexts';

const ControlHead = () => {
    const { setFilialAnalise } = useAuthContext();
    return (
        <div className='flex items-center justify-start gap-4 bg-slate-50 px-4 py-2 mb-4 border-b border-b-slate-100'>
            <div>
                <DatePicker />
            </div>
            <div>
                <SelectFilial />
            </div>
        </div>
    )
}

export default ControlHead
