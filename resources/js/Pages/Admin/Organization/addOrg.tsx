import { Card, CardHeader, CardTitle } from "@/Components/ui/card"
import AdminLayout from "@/Layouts/AdminLayout"
import { Link } from "@inertiajs/react"
import { ArrowBigLeft, Building2 } from "lucide-react"
import React from 'react'

type Props = {}

const addOrg = (props: Props) => {
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
                                href={route('organizations.index')}
                                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                         bg-green-700 hover:bg-green-700/90 text-white transition-colors hover:text-gray-100'
                            >
                                <ArrowBigLeft className='h-5 w-5' />
                                <span className='sr-only'>Voltar a Organização</span>
                            </Link>

                        </div>
                    </CardHeader>
                    <div>addOrg</div>
                </Card>
            </div>
        </AdminLayout>
    )
}

export default addOrg;