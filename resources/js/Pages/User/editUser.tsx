import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import AdminLayout from "@/Layouts/AdminLayout"
import { Link, router, usePage } from "@inertiajs/react"
import { ArrowBigLeft, Building2, Check, Eye, EyeOff, Loader2, Save, User2 } from "lucide-react"
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
import { roleUser, statusClient } from "@/Utils/dataSelect"
import { Input } from "@/Components/ui/input"

const formSchema = z.object({
    organization_id: z.any().optional(),
    company_id: z.any().optional(),
    organization: z.string().min(1, { message: "Selecione a organização" }),
    name: z.string().min(1, { message: "Digite um nome" }),
    email: z.string().min(1, { message: "Digite o CNPJ" }),
    roles: z.string().min(1, { message: "Selecione oa função" }),
    status: z.string().min(1, { message: "Selecione o status" }),
    password: z.string().optional(),
    password_confirmation: z.string().optional(),
}).refine((data) => data.password === data.password_confirmation, {
    message: "As senhas são diferentes",
    path: ["password_confirmation"],
});

const editUser = ({ organizations, user }: any) => {
    const { auth, errors, flash } = usePage().props as any;

    const [loading, setLoading] = useState(false);
    const [filterSearch, setFilterSearch] = useState<any>([]);
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            organization_id: user.organization_id && user.organization_id.toString(),
            company_id: user.company_id,
            organization: user.organization_id ? user.organization.name : 'Automágico',
            name: user.name,
            email: user.email,
            roles: user.roles,
            status: user.status,
            password: "",
            password_confirmation: "",
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.patch(route("users.update", user.id), values);
    }

    const handleSearch = (value: any) => {
        form.setValue('organization', value);
        if (value.length > 2) {
            const client = value.toLowerCase();
            const result = organizations?.filter((cl: any) => (cl.name.toLowerCase().includes(client)));
            setFilterSearch(result);
        }
    };

    const handleChangeCustomer = (id: any, nome: any) => {
        form.setValue('organization_id', `${id}`);
        form.setValue('organization', nome);
        setFilterSearch([]);
    };

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
                                href={route('users.index')}
                                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                         bg-green-700 hover:bg-green-700/90 text-white transition-colors hover:text-gray-100'
                            >
                                <ArrowBigLeft className='h-5 w-5' />
                                <span className='sr-only'>Voltar aos Usuários</span>
                            </Link>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {flash.message &&
                            <div className="bg-green-500 text-white text-sm font-semibold flex items-center justify-start gap-1 p-2 rounded-md transition-all duration-300"><Check className="w-4 h-4" /> {flash.message}</div>
                        }
                        <div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" autoComplete="off">
                                    <div className="grid sm:grid-cols-3 gap-4 mt-4">

                                        {auth.user.organization_id !== null &&
                                            <div className="">
                                                <FormField
                                                    control={form.control}
                                                    name="company_id"
                                                    render={({ field }: any) => (
                                                        <FormItem className="flex flex-col">
                                                            <FormLabel>Filial do usuário</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                                                <SelectTrigger className="">
                                                                    <SelectValue placeholder="Selecione a filial" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {organizations[0].company?.map((stat: any, idx: number) => (
                                                                        <SelectItem key={idx} value={stat.subnumber}>{stat.altername}</SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        }
                                        {auth.user.organization_id === null &&
                                            <div className="relative">
                                                <FormField
                                                    control={form.control}
                                                    name="organization_id"
                                                    render={({ field }) => (
                                                        <FormItem className="hidden">
                                                            <FormControl>
                                                                <Input {...field} value={field.value} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="organization"
                                                    render={({ field }) => (
                                                        <FormItem className="flex flex-col">
                                                            <FormLabel>Organização</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="" {...field} value={field.value} onChange={(e) => handleSearch(e.target.value)} readOnly={user.organization_id === null ? true : false} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                {filterSearch.length > 0 &&
                                                    <div className="absolute z-20 bg-gray-50 border-2 border-white shadow-md w-full rounded-sm top-16 max-h-52 overflow-y-auto">
                                                        <ul className="p-1">
                                                            {filterSearch.map((organization: any, idx: number) => (
                                                                <li key={idx} className={`flex items-center justify-normal ${idx < (filterSearch.length - 1) ? 'border-b border-gray-200' : ''}`}>
                                                                    <div
                                                                        className="text-sm text-gray-600 p-1 cursor-pointer inline-block w-full"
                                                                        onClick={() => handleChangeCustomer(organization.id, organization.name)}
                                                                    >
                                                                        {organization.name}
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                }
                                            </div>
                                        }
                                        <div className="">
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
                                        <div className="">
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
                                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                        <div className="">
                                            <FormField
                                                control={form.control}
                                                name="password"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Senha</FormLabel>
                                                        <div className="relative">
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                            <Button
                                                                type="button"
                                                                className="absolute right-0.5 top-0.5"
                                                                onClick={() => setPasswordVisibility(!passwordVisibility)}
                                                                size="icon"
                                                                variant="link"
                                                            >
                                                                {passwordVisibility ? <EyeOff /> : <Eye />}
                                                            </Button>
                                                        </div>
                                                        {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>}
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="">
                                            <FormField
                                                control={form.control}
                                                name="password_confirmation"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Repita a senha</FormLabel>
                                                        <div className="relative">
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                            <Button
                                                                type="button"
                                                                className="absolute right-0.5 top-0.5"
                                                                onClick={() => setPasswordVisibility(!passwordVisibility)}
                                                                size="icon"
                                                                variant="link"
                                                            >
                                                                {passwordVisibility ? <EyeOff /> : <Eye />}
                                                            </Button>
                                                        </div>
                                                        {errors.cnpj && <div className="text-red-600 text-sm font-medium">{errors.cnpj}</div>}
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                        <div className="">
                                            <FormField
                                                control={form.control}
                                                name="roles"
                                                render={({ field }: any) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Função do usuário</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                                            <SelectTrigger className="">
                                                                <SelectValue placeholder="Selecione a função" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {roleUser.map((stat: any, idx: number) => (
                                                                    <SelectItem key={idx} value={stat.value}>{stat.label}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="">
                                            <FormField
                                                control={form.control}
                                                name="status"
                                                render={({ field }: any) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Status</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                                            <SelectTrigger className="">
                                                                <SelectValue placeholder="Selecione o status" />
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

export default editUser;
