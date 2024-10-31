import React from 'react'
import { DatePicker } from './DatePicker'
import SelectFilial from './SelectFilial'
import { Button } from '../ui/button';
import { Link } from '@inertiajs/react';
import { RotateCcw } from 'lucide-react';

interface ControllHeadProps {
    data: any;
}

const ControlHead = ({ data }: ControllHeadProps) => {
    return (
        <div className='flex items-center justify-start gap-4 bg-slate-50 px-4 py-2 mb-4 border-b border-b-slate-100'>
            <div>
                <DatePicker />
            </div>
            <div>
                <SelectFilial data={data} />
            </div>
            <div>
                <Button variant="outline" size="icon" asChild>
                    <Link
                    href={''}>
                        <RotateCcw  className="h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default ControlHead
