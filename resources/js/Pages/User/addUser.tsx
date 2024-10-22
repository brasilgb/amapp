import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import AdminLayout from "@/Layouts/AdminLayout"
import { Link, router, usePage } from "@inertiajs/react"
import { ArrowBigLeft, Building2, Loader2, Save } from "lucide-react"
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/Components/ui/form";

import { Button } from "@/Components/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select"
import { statusClient } from "@/Utils/dataSelect"
import { Input } from "@/Components/ui/input"
import { maskCpfCnpj } from "@/Utils/mask"

const formSchema = z.object({
    organization_id: z.string().min(1, { message: "Digite um nome" }),
    company_id: z.string().min(1, { message: "Digite o CNPJ" }),
    organization: z.string().min(1, { message: "Digite um nome" }),
    name: z.string().min(1, { message: "Digite um nome" }),
    email: z.string().min(1, { message: "Digite o CNPJ" }),
    roles: z.string().min(1, { message: "Digite um nome" }),
    status: z.string(),
    password: z.string().min(1, { message: "Digite o CNPJ" }),
    password_confirmation: z.string().min(1, { message: "Digite o CNPJ" }),
});

const addUser = () => {
    const { auth, errors } = usePage().props as any;

    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            organization_id: auth.user.organization_id !== null ? auth.user.organization_id : "",
            company_id: "",
            organization: "",
            name: "",
            email: "",
            password: "",
            roles: "",
            status: "",
            password_confirmation: "",
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.post(route("organizations.store"), values);
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
                                href={route('organizations.index')}
                                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                         bg-green-700 hover:bg-green-700/90 text-white transition-colors hover:text-gray-100'
                            >
                                <ArrowBigLeft className='h-5 w-5' />
                                <span className='sr-only'>Voltar a Organização</span>
                            </Link>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <div className="grid sm:grid-cols-3 gap-4 mt-4">

                                        {auth.user.organization_id !== null &&
                                            <div className="col-span-2">
                                                <FormField
                                                    control={form.control}
                                                    name="company_id"
                                                    render={({ field }) => (
                                                        <FormItem className="flex flex-col">
                                                            <FormLabel>Filial</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        }
                                        {auth.user.organization_id === null &&
                                            <div className="col-span-2">
                                                <FormField
                                                    control={form.control}
                                                    name="organization"
                                                    render={({ field }) => (
                                                        <FormItem className="flex flex-col">
                                                            <FormLabel>Nome</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="nome" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        }
                                        <div className="col-span-2">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Nome</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                        {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>}
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>E-mail</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                        {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>}
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-4 gap-4 mt-4">

                                        <div className="col-span-2">
                                            <FormField
                                                control={form.control}
                                                name="password"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>E-mail</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                        {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>}
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <FormField
                                                control={form.control}
                                                name="password_confirmation"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>E-mail</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                        {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>}
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <FormField
                                                control={form.control}
                                                name="roles"
                                                render={({ field }: any) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Status</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                                            <SelectTrigger className="">
                                                                <SelectValue placeholder={field.value} />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {statusClient.map((stat: any, idx: number) => (
                                                                    <SelectItem key={idx} value={stat.value}>{stat.label}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <FormField
                                                control={form.control}
                                                name="status"
                                                render={({ field }: any) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Status</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                                            <SelectTrigger className="">
                                                                <SelectValue placeholder={field.value} />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {statusClient.map((stat: any, idx: number) => (
                                                                    <SelectItem key={idx} value={stat.value}>{stat.label}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end">
                                        <Button className="flex gap-2 bg-blue-600 hover:bg-blue-600/90" type='submit'>
                                            {loading
                                                ? <Loader2 size={18} className="animate-spin" />
                                                : <Save size={18} />
                                            }
                                            <span>Salvar</span>
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    )
}

export default addUser;
