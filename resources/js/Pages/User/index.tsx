
import React from 'react'
import { Card, CardHeader, CardTitle } from '@/Components/ui/card'
import AdminLayout from '@/Layouts/AdminLayout'
import { Link } from "@inertiajs/react"
import { Edit, Plus, Trash2, User2 } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table'
import { roleUserByValue, statusValueByLabel } from '@/Utils/functions'
import moment from 'moment'
import { Button } from '@/Components/ui/button'

const User = ({ users }: any) => {

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
                <User2 size={28} className="mr-1 " />
                <CardTitle className="text-lg sm:text-xl select-none uppercase">
                  Usuários
                </CardTitle>
              </div>

              <Link
                href={route('users.create')}
                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                bg-green-700 hover:bg-green-700/90 text-white transition-colors hover:text-gray-100'
              >
                <Plus className='h-5 w-5' />
                <span className='sr-only'>Adicionar Usuário</span>
              </Link>

            </div>
          </CardHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">NOME</TableHead>
                <TableHead className="w-[100px]">E-MAIL</TableHead>
                <TableHead>ROLES</TableHead>
                <TableHead>CADASTRO</TableHead>
                <TableHead className="text-right">STATUS</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users?.data?.map((user: any) => (
                <TableRow key={user?.id}>
                  <TableCell className="font-medium w-80">{user?.name}</TableCell>
                  <TableCell className="font-medium">{user?.email}</TableCell>
                  <TableCell>{roleUserByValue(user?.roles)}</TableCell>
                  <TableCell>{moment(
                    user?.created_at,
                  ).format("DD/MM/YYYY")}</TableCell>
                  <TableCell className="text-right"><span className={`py-1 px-3 text-sm text-gray-100 font-medium rounded-full ${colorsStatus(user?.status)}`}>{statusValueByLabel(user?.status)}</span>
                  </TableCell>
                  <TableCell  className='flex gap-1.5 items-center justify-end'>

                    <Button size="icon" asChild>
                      <Link
                        className='bg-amber-600 hover:bg-amber-600/90'
                        href={route("users.edit", user?.id)}
                        as="button"
                        type="button"
                      >
                        <Edit className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button size="icon" asChild>
                      <Link
                        className='bg-red-700 hover:bg-red-700/90'
                        href={route("users.edit", user?.id)}
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

export default User
