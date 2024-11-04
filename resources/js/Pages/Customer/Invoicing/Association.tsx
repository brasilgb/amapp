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

const Association = (props: Props) => {
  const { auth } = usePage().props as any;
  const { filialAnalise, dataFiltro, setLoading, loading } = useAuthContext();
  const [associations, setAssociations] = useState<any>([]);
  const [salesMonth, setSalesMonth] = useState<any>([]);

  useEffect(() => {
    const getCompanies = async () => {
      setLoading(true);
      const adata = moment(dataFiltro).format("YYYYMMDD");
      await apiautomagico.get(`associations?dt=${adata}&org=${auth?.user?.organization_id}&fl=${filialAnalise}`)
        .then((res) => {
          setAssociations(res.data.response.association);
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
            <TableHead className="w-[100px]">Associação</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Meta</TableHead>
            <TableHead>Venda</TableHead>
            <TableHead>Margem</TableHead>
            <TableHead>Representa</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {associations?.sort((a:any, b: any) => (a.valvenda < b.valvenda ? 1 : -1)).map((assoc:any, idx: number) => (
            <TableRow key={idx}>
            <TableCell>{assoc.assoc}</TableCell>
            <TableCell>{assoc.descricao}</TableCell>
            <TableCell>{moment(assoc.dtvenda).format("DD/MM/YYYY")}</TableCell>
            <TableCell>{parseValueMoney(assoc.valmeta)}</TableCell>
            <TableCell>{parseValueMoney(assoc.valvenda)}</TableCell>
            <TableCell>{assoc.margem}%</TableCell>
            <TableCell>{assoc.representa}%</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomerLayout>
  )
}

export default Association