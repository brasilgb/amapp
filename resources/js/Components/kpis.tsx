import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
import { ChartSpline } from 'lucide-react'

interface KpisProps{
    title: string;
    value: string;
}

const kpis = ({title, value}: KpisProps) => {
  return (
    <Card>
    <CardHeader>
      <div className="flex items-center justify-center">
        <CardTitle className="text-lg sm:text-xl text-gray-500 select-none">
          {title}
        </CardTitle>
        <ChartSpline size={32} className="ml-auto text-blue-600" />
      </div>
      <CardDescription className="flex">
        <div className="text-2xl font-bold bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center">{value}</div>
      </CardDescription>
    </CardHeader>
  </Card>
  )
}

export default kpis