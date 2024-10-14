import moment from 'moment'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='flex items-center justify-start text-sm px-4 py-2 border-t'>
      {moment().format("YYYY")}&copy;Automágico - Todos os direitos reservados. 
    </div>
  )
}