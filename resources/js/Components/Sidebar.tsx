import React, { useState } from 'react'
import UserItem from "./UserItem"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command"
import { ChevronLeft, User } from "lucide-react"

type Props = {}

export default function Sidebar({ }: Props) {
    const [collapseSide, setCollapseSide ] = useState<boolean>(false);

    const collapseSidebar = () => {

    }

    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    icon: <User />,
                    text: "Profile"
                },
                {
                    link: "/",
                    icon: <User />,
                    text: "Inbox"
                },
                {
                    link: "/",
                    icon: <User />,
                    text: "Billing"
                },
                {
                    link: "/",
                    icon: <User />,
                    text: "Notifications"
                },
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    icon: <User />,
                    text: "General Settings"
                },
                {
                    link: "/",
                    icon: <User />,
                    text: "Privacy"
                },
                {
                    link: "/",
                    icon: <User />,
                    text: "Logs"
                }
            ]
        },
    ]
    return (
        <div className={`relative ${collapseSide ? 'w-80 min-w-80':  'w-20 min-w-20'} duration-300 flex flex-col gap-4 border-r min-h-screen p-4`}>
            <div className={`absolute -right-3 top-2 h-6 w-6 flex items-center justify-center bg-gray-100 border rounded-md duration-500 ${collapseSide ? 'rotate-0' : '-rotate-180'}`} onClick={() => setCollapseSide(state => !state)}>
            <ChevronLeft size={18} />
            </div>
            <UserItem />
            <div className="grow">
                <Command style={{ overflow: 'visible' }}>
                    <CommandList style={{ overflow: 'visible' }}>
                        {menuList.map((menu: any, idx: number) => (
                            <CommandGroup key={idx} heading={menu.group}>
                                {menu.items.map((option: any, optidx: number) => (
                                    <CommandItem key={optidx} className="flex gap-2 cursor-pointer">
                                        {option.icon}
                                        {option.text}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        ))}
                    </CommandList>
                </Command>

            </div>
            <div className="">footer</div>
        </div>
    )
}