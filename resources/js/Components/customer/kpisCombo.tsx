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
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-xs sm:text-sm text-gray-500 select-none">
                        {props.title}
                    </CardTitle>
                    {props.icon}
                </div>
                <CardContent className="grid sm:grid-cols-4 content-center w-full bg-red-100 p-0">
                    <div className="flex flex-col items-center justify-start bg-gray-100 w-full">
                        <div>
                          <h1>Meta</h1>
                        <p>{props.valueMeta}</p>
                        </div>

                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                        <div>
                         <h1>Venda</h1>
                        <p>{props.valueVenda}</p>
                        </div>

                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                        <div>
                          <h1>Margem</h1>
                        <p>{props.valueMargem}</p>
                        </div>

                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                        <div>
                           <h1>Rep</h1>
                        <p>{props.valueRep}</p>
                        </div>

                    </div>
                </CardContent>
            </CardHeader>
        </Card>
    )
}

export default KpisCombo;
