import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Button } from "@/Components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import { Link, usePage } from "@inertiajs/react"

export function DropdownMenuAdmin() {
    const { auth } = usePage().props as any
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="text-gray-500 p-0" variant="outline" size="icon"><User /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60 mr-2">
                <DropdownMenuLabel className="text-gray-500 flex items-center gap-1"><User size={18} />{auth.user.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link
                            className="flex items-center gap-2"
                            href={route('users.edit', auth.user.id)}
                        >
                            <User />
                            <span>Profile</span>
                        </Link>
                    </DropdownMenuItem>
                    {!auth.user.company_id &&
                        <>
                            <DropdownMenuItem>
                                <Link
                                    className="flex items-center gap-2"
                                    href={route('users.index')}
                                >
                                    <Users />
                                    <span>Gerenciar usuários</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    className="flex items-center gap-2"
                                    href={route('settings.index')}
                                >
                                    <Settings />
                                    <span>Configurações</span>
                                </Link>
                            </DropdownMenuItem>
                        </>
                    }
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link
                        className="flex items-center gap-2"
                        method="post"
                        as="button"
                        type="button"
                        href={route('logout')}
                    >
                        <LogOut />
                        <span>Log out</span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
