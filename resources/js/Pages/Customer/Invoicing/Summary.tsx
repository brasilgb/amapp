import apiautomagico from '@/bootstrap';
import BarAnalise from '@/Components/customer/BarAnalise';
import LoadingPage from '@/Components/customer/LoadingPage';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import { useAuthContext } from '@/Contexts';
import CustomerLayout from '@/Layouts/CustomerLayout'
import { parseValueMoney } from '@/Utils/mask';
import { usePage } from '@inertiajs/react';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

type Props = {}

const Sales = (props: Props) => {
  const { auth } = usePage().props as any;
  const { filialAnalise, dataFiltro, setLoading, loading } = useAuthContext();
  const [sales, setSales] = useState<any>([]);

  useEffect(() => {
    const getCompanies = async () => {
      setLoading(true);
      const adata = moment(dataFiltro).format("YYYYMMDD");
      await apiautomagico.get(`sales?dt=${adata}&org=${auth?.user?.organization_id}&fl=${filialAnalise}`)
        .then((res) => {
          setSales(res.data.response.sales);
        }).catch((err) => {
          console.log(err);
        }).finally(() => setLoading(false));
    };
    getCompanies();
  }, [auth, filialAnalise, dataFiltro]);

  return (
    <CustomerLayout>
      {loading && <LoadingPage />}
      <BarAnalise />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Data</TableHead>
            <TableHead>Filial</TableHead>
            <TableHead>Meta</TableHead>
            <TableHead>Venda</TableHead>
            <TableHead>Margem</TableHead>
            <TableHead>Representa</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sales?.map((sale: any, idx: number) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{moment(sale.dtvenda).format("DD/MM/YYYY")}</TableCell>
              <TableCell>{sale.descfilial}</TableCell>
              <TableCell>{parseValueMoney(sale.valmeta)}</TableCell>
              <TableCell className="text-right">{parseValueMoney(sale.valvenda)}</TableCell>
              <TableCell className="text-right">{sale.margem}%</TableCell>
              <TableCell className="text-right">{sale.representa}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomerLayout>
  )
}

export default Sales