
import React from 'react'
import { Card, CardHeader, CardTitle } from '@/Components/ui/card'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table'
import AdminLayout from '@/Layouts/AdminLayout'
import { statusValueByLabel } from "@/Utils/functions"
import moment from "moment"
import { Button } from "@/Components/ui/button"
import { Building, Building2, DatabaseBackup, Edit, Plus, Trash2 } from "lucide-react"
import { Link } from "@inertiajs/react"
import { maskCnpj, maskCpfCnpj, maskInscEstadual } from '@/Utils/mask'

const Company = ({ companies }: any) => {

  const colorsStatus = (status: string) => {
    switch (status) {
      case 'active':
        return "bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";
      case 'waiting':
        return "bg-sky-600/50 border border-sky-600 text-sky-800 text-xs uppercase";
      case 'suspended':
        return "bg-orange-600/50 border border-orange-600 text-orange-800 text-xs uppercase";
      case 'canceled':
        return "bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase";
    }
  }

  return (
    <AdminLayout>
      <div className='p-4 bg-background'>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex text-gray-600">
                <Building size={28} className="mr-1 " />
                <CardTitle className="text-lg sm:text-xl select-none uppercase">
                  Filiais
                </CardTitle>
              </div>

              <Link
                href={route('companies.create')}
                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                bg-green-700 hover:bg-green-700/90 text-white transition-colors hover:text-gray-100'
              >
                <Plus className='h-5 w-5' />
                <span className='sr-only'>Adicionar Filial</span>
              </Link>

            </div>
          </CardHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ORGANIZAÇÃO</TableHead>
                <TableHead className="w-[100px]">Nº FILIAL</TableHead>
                <TableHead>FILIAL</TableHead>
                <TableHead>CNPJ</TableHead>
                <TableHead>INSC. ESTADUAL</TableHead>
                <TableHead>TELEFONE</TableHead>
                <TableHead>CADASTRO</TableHead>
                <TableHead className="text-right">STATUS</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companies?.data?.map((company: any) => (
                <TableRow key={company?.id}>
                  <TableCell className="font-medium w-80">{company?.organization.name}</TableCell>
                  <TableCell className="font-medium">{maskCpfCnpj(company?.subnumber)}</TableCell>
                  <TableCell className="font-medium">{maskCpfCnpj(company?.subname)}</TableCell>
                  <TableCell>{maskCnpj(company.cnpj.toString())}</TableCell>
                  <TableCell>{maskInscEstadual(company.statereg.toString())}</TableCell>
                  <TableCell className="font-medium">{company.telephone}</TableCell>
                  <TableCell>{moment(
                    company?.created_at,
                  ).format("DD/MM/YYYY")}</TableCell>
                  <TableCell className="text-right"><span className={`py-1 px-3 text-sm text-gray-100 font-medium rounded-full ${colorsStatus(company?.status)}`}>{statusValueByLabel(company?.status)}</span>
                  </TableCell>
                  <TableCell  className='flex gap-1.5 items-center justify-end'>
                    <Button size="icon" asChild>
                      <Link
                        className='bg-orange-700 hover:bg-orange-700/90'
                        href={route("companies.edit", company?.id)}
                        as="button"
                        type="button"
                      >
                        <Edit className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button size="icon" asChild>
                      <Link
                        className='bg-red-700 hover:bg-red-700/90'
                        href={route("companies.edit", company?.id)}
                        as="button"
                        type="button"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </AdminLayout>
  )
}

export default Company