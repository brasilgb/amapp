import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Link } from '@inertiajs/react'
import { Building, Building2, Home, LogOut, Menu, Package, PanelBottom, SlidersHorizontal, User } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'


type Props = {}

export function Sidebar({ }: Props) {
    return (
        <div className='flex flex-col bg-muted/40'>

            <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col'>

                <nav className='flex flex-col items-center gap-4 px-2 py-5'>

                    <TooltipProvider>
                        <Link
                            href={route('admin')}
                            className='flex h-9 w-9 shrink-0 items-center justify-center bg-green-700 text-primary-foreground rounded-full'
                        >
                            <Package className='h-4 w-4' />
                            <span className='sr-only'>Dashboard avatar</span>
                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={route('admin')}
                                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                    text-muted-foreground transition-colors hover:text-foreground'
                                >
                                    <Home className='h-5 w-5' />
                                    <span className='sr-only'>Home</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>
                                Home
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={route('organizations.index')}
                                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                    text-muted-foreground transition-colors hover:text-foreground'
                                >
                                    <Building2 className='h-5 w-5' />
                                    <span className='sr-only'>Organizações</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>
                                Organizações
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={route('companies.index')}
                                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                    text-muted-foreground transition-colors hover:text-foreground'
                                >
                                    <Building className='h-5 w-5' />
                                    <span className='sr-only'>Filiais</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>
                                Filiais
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                    text-muted-foreground transition-colors hover:text-foreground'
                                >
                                    <SlidersHorizontal className='h-5 w-5' />
                                    <span className='sr-only'>Configurações</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>
                                Configurações
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                    text-muted-foreground transition-colors hover:text-foreground'
                                >
                                    <User className='h-5 w-5' />
                                    <span className='sr-only'>Usuários</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>
                                Usuários
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>

                <nav className='mt-auto flex flex-col items-center gap-4 px-2 py-5'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    method="post"
                                    as="button"
                                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                    text-muted-foreground transition-colors hover:text-foreground'
                                >
                                    <LogOut className='h-5 w-5 text-red-500' />
                                    <span className='sr-only'>Sair</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>
                                Sair
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>

            <div className='sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
                <header className='sticky top-0 z-30 flex h-10 items-center  gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent'>
                    <Sheet >
                        <SheetTrigger asChild>
                            <Button size="icon" variant="ghost" className='sm:hidden absolute'>
                                <Menu className='w-5 h-5' />
                                <span className='sr-only'>Abrir / Fechar menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <nav className='grid gap-6 text-lg font-medium'>
                                <Link
                                    href="#"
                                    className='flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2'
                                >
                                    <Package className='h-5 w-5 transition-all' />
                                    <span className='sr-only'>Logo da Empresa</span>
                                </Link>

                                <Link
                                    href="#"
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                    <Home className='h-5 w-5 transition-all' />
                                    Home
                                </Link>

                                <Link
                                    href="#"
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                    <Building2 className='h-5 w-5 transition-all' />
                                    Organizações
                                </Link>

                                <Link
                                    href="#"
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                    <Building className='h-5 w-5 transition-all' />
                                    Filiais
                                </Link>

                                <Link
                                    href="#"
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                    <SlidersHorizontal className='h-5 w-5 transition-all' />
                                    Configurações
                                </Link>

                                <Link
                                    href="#"
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                >
                                    <User className='h-5 w-5 transition-all' />
                                    Usuários
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>
            </div>
        </div>
    )
}
