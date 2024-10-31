import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
import { ChartSpline } from 'lucide-react'
import { parseValueMoney } from '@/Utils/mask';

interface KpisProps{
    title: string;
    value: string;
    icon: any;
}

const kpis = ({title, value, icon}: KpisProps) => {
  return (
    <Card>
    <CardHeader>
      <div className="flex items-center justify-center">
        <CardTitle className="text-lg sm:text-xl text-gray-500 select-none">
          {title}
        </CardTitle>
        {icon}
      </div>
      <CardDescription className="flex">
        <div className="text-2xl font-bold text-gray-600 rounded-full flex items-center justify-center">{parseValueMoney(value)}</div>
      </CardDescription>
    </CardHeader>
  </Card>
  )
}

export default kpis
