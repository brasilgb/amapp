
import { Card, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card"
import AdminLayout from "@/Layouts/AdminLayout"
import { Building, Building2, User } from "lucide-react"

const Home = ({ kpis }: any) => {
  return (
    <AdminLayout>
      <main className="p-4">
        <section className="grid grid-cols-3 gap-4">
        <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-500 select-none">
                  Organizações
                </CardTitle>
                <Building2 size={32} className="ml-auto text-blue-600" />
              </div>
              <CardDescription className="flex">
                <div className="text-2xl font-bold bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center">{kpis?.organization}</div>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Filiais
                </CardTitle>
                <Building size={32} className="ml-auto text-cyan-600" />
              </div>
              <CardDescription>
              <div className="text-2xl font-bold bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center">{kpis?.company}</div>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Usuários
                </CardTitle>
                <User size={32} className="ml-auto text-red-500" />
              </div>
              <CardDescription>
              <div className="text-2xl font-bold bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center">{kpis?.user}</div>
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
      </main>
    </AdminLayout>
  )
}

export default Home