import Kpis from "@/Components/kpis"
import CustomerLayout from "@/Layouts/CustomerLayout"
import { Link } from "@inertiajs/react"
import { LogOut } from "lucide-react"
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <CustomerLayout>
      <main className="p-4">
        <div className="grid sm:grid-cols-4 gap-4">
          <Kpis title={""} value={""} />
          <Kpis title={""} value={""} />
          <Kpis title={""} value={""} />
          <Kpis title={""} value={""} />
        </div>
      </main>

    </CustomerLayout>
  )
}

export default Dashboard