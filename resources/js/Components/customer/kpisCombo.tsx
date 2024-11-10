import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/Components/ui/card'
import { ChartSpline } from 'lucide-react'
import { parseValueMoney, parseValuePercent } from '@/Utils/mask';

interface KpisProps {
    title: string;
    valueMeta: any;
    valueVenda: any;
    valueMargem: any;
    valueRep: any;
    icon: any;
}

const KpisCombo = (props: KpisProps) => {
    return (
        <Card>
            <CardHeader className='p-2'>
                <div className="flex items-center justify-between text-gray-500">
                    <CardTitle className="text-xs sm:text-sm select-none">
                        {props.title}
                    </CardTitle>
                    {props.icon}
                </div>
                <CardContent className="grid grid-cols-4 w-full p-0">
                    <div className='flex flex-col items-center justify-start w-full'>
                        <h1 className='text-sm sm:text-base text-gray-500'>Meta</h1>
                        <p className='text-xs font-semibold'>{parseValueMoney(props.valueMeta)}</p>
                    </div>
                    <div className='flex flex-col items-center justify-start w-full'>
                        <h1 className='text-sm sm:text-base text-gray-500'>Venda</h1>
                        <p className='text-xs font-semibold'>{parseValueMoney(props.valueVenda)}</p>
                    </div>
                    <div className='flex flex-col items-center justify-start w-full'>
                        
                        <h1 className='text-sm sm:text-base text-gray-500'>Margem</h1>
                        <p className='text-xs font-semibold'>{parseValuePercent(props.valueMargem)}</p>
                    </div>
                    <div className='flex flex-col items-center justify-start w-full'>
                        <h1 className='text-sm sm:text-base text-gray-500'>Rep</h1>
                        <p className='text-xs font-semibold'>{parseValuePercent(props.valueRep)}</p>
                    </div>
                </CardContent>
            </CardHeader>
        </Card>
    )
}

export default KpisCombo;
