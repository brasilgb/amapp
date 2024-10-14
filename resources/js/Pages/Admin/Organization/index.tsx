
import { Card, CardTitle } from '@/Components/ui/card'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table'
import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'

const Organization = () => {
  return (
    <AdminLayout>
      <div className='p-4 bg-background'>
        <div className='text-xl font-medium'>Organizações</div>

        {/* <Card>
        <CardTitle></CardTitle>
        <div></div>
      </Card> */}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">CNPJ</TableHead>
              <TableHead>Filiais</TableHead>
              <TableHead>Cadastro</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">9585236985</TableCell>
              <TableCell>2</TableCell>
              <TableCell>01/01/1985</TableCell>
              <TableCell className="text-right">Ativo</TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </div>
    </AdminLayout>
  )
}

export default Organization