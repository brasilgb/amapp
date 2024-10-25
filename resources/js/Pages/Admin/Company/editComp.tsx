import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import AdminLayout from "@/Layouts/AdminLayout"
import { Link, router, usePage } from "@inertiajs/react"
import { ArrowBigLeft, Building2, Check, Loader2, Save } from "lucide-react"
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
import { Textarea } from "@/Components/ui/textarea"
import { maskCep, maskCpfCnpj, maskInscEstadual, maskPhone, unMask } from "@/Utils/mask"

const formSchema = z.object({
    corpreason: z.string().min(1, { message: "O campo razão social deve ser preenchido" }),
    organization: z.string().optional(),
    subnumber: z.string().min(1, { message: "O campo número filial deve ser preenchido" }),
    subname: z.string().min(1, { message: "O campo nome filial deve ser preenchido" }),
    cep: z.string().min(1, { message: "O campo cep deve ser preenchido" }),
    address: z.string().min(1, { message: "O campo endereço deve ser preenchido" }),
    number: z.string().min(1, { message: "O campo número deve ser preenchido" }),
    county: z.string().min(1, { message: "O campo município deve ser preenchido" }),
    state: z.string().min(1, { message: "O campo estado deve ser preenchido" }),
    neighborhood: z.string().min(1, { message: "O campo bairro deve ser preenchido" }),
    cnpj: z.string().min(1, { message: "O campo cnpj deve ser preenchido" }),
    statereg: z.string().min(1, { message: "O campo inscrição estadual deve ser preenchido" }),
    telephone: z.string().min(1, { message: "O campo telefone deve ser preenchido" }),
    organization_id: z.string(),
    altername: z.string(),
    status: z.string(),
    whatsapp: z.string(),
    observation: z.string(),
});

const editComp = ({ companies, organizations }: any) => {
    const { errors, flash } = usePage().props as any;
    const [filterSearch, setFilterSearch] = useState<any>([]);

    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            organization_id: companies.organization_id.toString(),
            corpreason: companies.corpreason,
            altername: companies.altername,
            organization: companies.organization.name,
            status: companies.status,
            subnumber: companies.subnumber,
            subname: companies.subname,
            address: companies.address,
            number: companies.number.toString(),
            cep: companies.cep,
            county: companies.county,
            state: companies.state,
            neighborhood: companies.neighborhood,
            cnpj: companies.cnpj,
            statereg: companies.statereg,
            telephone: companies.telephone,
            whatsapp: companies.whatsapp,
            observation: companies.observation,
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.patch(route("companies.update", companies.id), values);
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

    const getCep = (cep: string) => {
        const cleanCep = unMask(cep);
        fetch(`https://viacep.com.br/ws/${cleanCep}/json/`)
            .then((response) => response.json())
            .then((result) => {
                form.setValue('state', result.uf);
                form.setValue('county', result.localidade);
                form.setValue('neighborhood', result.bairro);
                form.setValue('address', result.logradouro);
            })
            .catch((error) => console.error(error));
    };

    return (
        <AdminLayout>
            <div className='p-4 bg-background'>
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between border-b pb-2">
                            <div className="flex text-gray-600">
                                <Building2 size={28} className="mr-1 " />
                                <CardTitle className="text-lg sm:text-xl select-none uppercase">
                                    Filiais
                                </CardTitle>
                            </div>

                            <Link
                                href={route('companies.index')}
                                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                         bg-green-700 hover:bg-green-700/90 text-white transition-colors hover:text-gray-100'
                            >
                                <ArrowBigLeft className='h-5 w-5' />
                                <span className='sr-only'>Voltar a Filial</span>
                            </Link>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {flash.message &&
                            <div className="bg-green-500 text-white text-sm font-semibold flex items-center justify-start gap-1 p-2 rounded-md transition-all duration-300"><Check className="w-4 h-4" /> {flash.message}</div>
                        }
                        <div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <div className="grid sm:grid-cols-7 gap-4 mt-4">
                                        <div className="col-span-2">
                                            <FormField
                                                control={form.control}
                                                name="corpreason"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Razão social</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <FormField
                                                control={form.control}
                                                name="altername"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Nome alternativo</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="col-span-2 relative">
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
                                                            <Input placeholder="" {...field} value={field.value} onChange={(e) => handleSearch(e.target.value)} />
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
                                        <div>
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
                                    <div className="grid sm:grid-cols-6 gap-4 mt-4">
                                        <div className="">
                                            <FormField
                                                control={form.control}
                                                name="subnumber"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Nº Filial</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <FormField
                                                control={form.control}
                                                name="subname"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Nome filial</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="">
                                            <FormField
                                                control={form.control}
                                                name="cep"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>CEP</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} value={maskCep(field.value)} onBlur={() => getCep(field.value)} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <FormField
                                                control={form.control}
                                                name="address"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Endereço</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-6 gap-4 mt-4">
                                        <div className="">
                                            <FormField
                                                control={form.control}
                                                name="number"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Número</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <FormField
                                                control={form.control}
                                                name="county"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Município</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="">
                                            <FormField
                                                control={form.control}
                                                name="state"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>UF</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <FormField
                                                control={form.control}
                                                name="neighborhood"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Bairro</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-4 gap-4 mt-4">
                                        <div className="">
                                            <FormField
                                                control={form.control}
                                                name="cnpj"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>CNPJ</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} value={maskCpfCnpj(field.value)} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="">
                                            <FormField
                                                control={form.control}
                                                name="statereg"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Inscrição</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} value={maskInscEstadual(field.value)} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="">
                                            <FormField
                                                control={form.control}
                                                name="telephone"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Telefone</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} value={maskPhone(field.value)} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="">
                                            <FormField
                                                control={form.control}
                                                name="whatsapp"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Whatsapp(Ex.: 5551985471163)</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <FormField
                                            control={form.control}
                                            name="observation"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col">
                                                    <FormLabel>Observações</FormLabel>
                                                    <FormControl>
                                                        <Textarea placeholder="" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
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

export default editComp;
