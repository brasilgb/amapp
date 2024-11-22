import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import AdminLayout from "@/Layouts/AdminLayout";
import { router, usePage } from "@inertiajs/react";
import { Check, Loader2, Save, SlidersHorizontal } from "lucide-react";
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/Components/ui/form";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import CustomerLayout from "@/Layouts/CustomerLayout";

const formSchema = z.object({
    logo: z.any(),
});

const Settings = ({ settings }: any) => {
    const { errors, flash } = usePage().props as any;
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            logo: null
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.post(route("clisettings.update", settings.id), {
            _method: "put",
            logo: values.logo
        });
    }

    return (
        <CustomerLayout>
            <div className='p-4 bg-background'>
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between border-b pb-2">
                            <div className="flex text-gray-600">
                                <SlidersHorizontal size={28} className="mr-1 " />
                                <CardTitle className="text-lg sm:text-xl select-none uppercase">
                                    Configurações
                                </CardTitle>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {flash.message &&
                            <div className="bg-green-500 text-white text-sm font-semibold flex items-center justify-start gap-1 p-2 rounded-md transition-all duration-300"><Check className="w-4 h-4" /> {flash.message}</div>
                        }
                        <div>
                            <div className="flex mt-4">
                                <div className="p-1 bg-green-700 w-auto rounded-full">
                                    <div className="flex h-24 w-24 shrink-0 items-center justify-center bg-green-700 text-primary-foreground rounded-full">
                                        <img
                                            className='h-24 w-24 rounded-full object-cover'
                                            src={`/storage/images/${settings?.logo ? settings?.logo : "default.png"}`}
                                            alt="Imagem de logo"
                                        />
                                    </div>
                                </div>
                            </div>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" autoComplete="off">
                                    <div className="mt-4">
                                        <div className="">
                                            <FormField
                                                control={form.control}
                                                name="logo"
                                                render={({ field: { value, onChange, ...field } }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Selecione o logo</FormLabel>
                                                        <FormControl>
                                                            <Input type="file" placeholder="" {...field}
                                                                onChange={(e: any) => {
                                                                    onChange(e.target.files[0]);
                                                                }} />
                                                        </FormControl>
                                                        <FormMessage />
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
        </CustomerLayout>
    )
}

export default Settings;
