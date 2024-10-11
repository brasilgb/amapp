import React from 'react'

type Props = {}

export default function UserItem({ }: Props) {
    return (
        <div className="flex items-center justify-between gap-2 border rounded-md p-2">
            <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-bold flex items-center justify-center">
                AB
            </div>
            <div className="grow">
            <p className="text-lg font-bold">Anderson Brasil</p>
            <p className="text-xs text-neutral-500 ">Andersonbrasil@gmail.com</p>
            </div>
        </div>
    )
}