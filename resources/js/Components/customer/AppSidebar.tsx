import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { Building, Building2, Calendar, Home, Inbox, Search, Settings, SlidersHorizontal, Users } from "lucide-react"
import { Link, usePage } from '@inertiajs/react'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarFallback, AvatarImage } from '../ui/avatar'
const AppSidebar = () => {


    const { settings } = usePage().props.auth as any;
    const items = [
        {
            title: "Dashboard",
            url: 'admin',
            icon: Home,
        },
        {
            title: "Organizações",
            url: 'organizations',
            icon: Building2,
        },
        {
            title: "Filiais",
            url: 'companies',
            icon: Building,
        },
        {
            title: "Configurações",
            url: 'settings',
            icon: Settings,
        },
        {
            title: "Usuários",
            url: 'users',
            icon: Users,
        },
    ]
    return (
        <Sidebar collapsible="icon">
            <SidebarContent>

                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href={'/'}>
                                    <img
                                        className='h-8 w-8 rounded-full object-content'
                                        src={`/storage/images/${settings?.logo ? settings?.logo : "default.png"}`}
                                        alt="Imagem de logo"
                                    />
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>

                <SidebarGroup >
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton variant={'default'} asChild isActive={route().current(`${item.url}.*`) ? true : false}>
                                        <Link
                                            href={route(item.url == 'admin' ? item.url :`${item.url}.index`)}
                                        >
                                            <item.icon/>
                                            <span className='font-semi text-base'>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar
