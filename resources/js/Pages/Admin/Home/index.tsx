
import { Card, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card"
import AdminLayout from "@/Layouts/AdminLayout"
import { Building, Building2, User } from "lucide-react"

const Home = () => {
  return (
    <AdminLayout>
      <main className="p-4">
        <section className="grid grid-cols-3 gap-4">
        <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Organizações
                </CardTitle>
                <Building2 size={32} className="ml-auto" />
              </div>
              <CardDescription>
                Organizações cadastradas
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Filiais
                </CardTitle>
                <Building size={32} className="ml-auto" />
              </div>
              <CardDescription>
                Filiais cadastradas
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Usuários
                </CardTitle>
                <User size={32} className="ml-auto" />
              </div>
              <CardDescription>
                Usuários cadastrados
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
      </main>
    </AdminLayout>
  )
}

export default Home