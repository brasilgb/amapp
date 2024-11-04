"use client"

import * as React from "react"

import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/Components/ui/button"
import { Calendar } from "@/Components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover"
import moment from "moment"
import { useAuthContext } from "@/Contexts"
import { PopoverClose } from "@radix-ui/react-popover"
import { ptBR } from "date-fns/locale";

export function DatePicker() {

    const { setDataFiltro, dataFiltro } = useAuthContext();
    const [calendarOpen, setCalendarOpen] = React.useState(false);

    return (
        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !dataFiltro && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon />
                    {moment(dataFiltro).format("DD/MM/YYYY")}
                </Button>
            </PopoverTrigger>
            <PopoverContent className={`w-auto p-0 `}>
                <Calendar
                    locale={ptBR}
                    mode="single"
                    selected={dataFiltro}
                    initialFocus
                    onDayClick={() => setCalendarOpen(false)}
                    onSelect={setDataFiltro}
                    defaultMonth={dataFiltro}
                />
            </PopoverContent>

        </Popover>
    )
}
