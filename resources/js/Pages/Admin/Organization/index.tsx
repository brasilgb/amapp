
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table'
import AdminLayout from '@/Layouts/AdminLayout'
import { statusValueByLabel } from "@/Utils/functions"
import moment from "moment"
import { Button } from "@/Components/ui/button"
import { Building, Building2, Check, DatabaseBackup, Edit, Plus, Trash2 } from "lucide-react"
import { Link, usePage } from "@inertiajs/react"
import { maskCpfCnpj } from '@/Utils/mask'
import ModalDelete from '@/Components/ModalDelete'

const Organization = ({ organizations }: any) => {
    const { flash } = usePage().props as any;
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
                                <Building2 size={28} className="mr-1 " />
                                <CardTitle className="text-lg sm:text-xl select-none uppercase">
                                    Organizações
                                </CardTitle>
                            </div>

                            <Link
                                href={route('organizations.create')}
                                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                bg-green-700 hover:bg-green-700/90 text-white transition-colors hover:text-gray-100'
                            >
                                <Plus className='h-5 w-5' />
                                <span className='sr-only'>Adicionar Organização</span>
                            </Link>

                        </div>
                    </CardHeader>
                    <CardContent>
                        {flash.message &&
                            <div className="bg-green-500 text-white text-sm font-semibold flex items-center justify-start gap-1 p-2 rounded-md transition-all duration-300"><Check className="w-4 h-4" /> {flash.message}</div>
                        }
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">ORGANIZAÇÂO</TableHead>
                                    <TableHead className="w-[100px]">CNPJ</TableHead>
                                    <TableHead>FILIAIS</TableHead>
                                    <TableHead>CADASTRO</TableHead>
                                    <TableHead className="text-right">STATUS</TableHead>
                                    <TableHead className="text-right"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {organizations?.data?.map((org: any) => (
                                    <TableRow key={org?.id}>
                                        <TableCell className="font-medium w-80">{org?.name}</TableCell>
                                        <TableCell className="font-medium">{maskCpfCnpj(org?.cnpj)}</TableCell>
                                        <TableCell>{org?.company.length}</TableCell>
                                        <TableCell>{moment(
                                            org.created_at,
                                        ).format("DD/MM/YYYY")}</TableCell>
                                        <TableCell className="text-right"><span className={`py-1 px-3 text-sm text-gray-100 font-medium rounded-full ${colorsStatus(org?.status)}`}>{statusValueByLabel(org?.status)}</span>
                                        </TableCell>
                                        <TableCell className='flex gap-1.5 items-center justify-end'>
                                            <Button size="icon" variant="btnone" asChild>
                                                <Link
                                                    href={route("deleteorgdata", org.id)}
                                                    as="button"
                                                    type="button"
                                                >
                                                    <DatabaseBackup className="h-5 w-5" />
                                                </Link>
                                            </Button>
                                            <Button size="icon" variant="btntwo" asChild>
                                                <Link
                                                    href={`companies?o=${org.id}`}
                                                    as="button"
                                                    type="button"
                                                >
                                                    <Building className="h-5 w-5" />
                                                </Link>
                                            </Button>
                                            <Button size="icon" variant="edit" asChild>
                                                <Link
                                                    href={route("organizations.edit", org.id)}
                                                    as="button"
                                                    type="button"
                                                >
                                                    <Edit className="h-5 w-5" />
                                                </Link>
                                            </Button>
                                            <ModalDelete
                                                url="organizations.destroy"
                                                param={org?.id}
                                                title='Excluir organização'
                                                content={`a organização ${org?.name}`}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>

                </Card>



            </div>
        </AdminLayout>
    )
}

export default Organization
