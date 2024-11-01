<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Sale;
use App\Models\Total;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SaleController extends Controller
{
    public function response($value)
    {
        return response()->json([
            "response" => [
                "success" => true,
                "status" => 201,
                "sales" => $value
            ],
        ], 201);
    }

    public function getSales(Request $request)
    {
        $wquery = Sale::where('dtvenda', $request->dt)->where('organization_id', $request->org)->where('filial', $request->fl)->first();
        if ($wquery) {
            $sales = Sale::where('dtvenda', $request->dt)->where('organization_id', $request->org)->where('filial', $request->fl)->get();
        } else {
            $lastDate = Sale::where('organization_id', $request->org)->where('filial', $request->fl)->orderBy('dtvenda', 'DESC')->first();
            if ($lastDate !== null)
                $sales = Sale::where('dtvenda', $lastDate->dtvenda)->where('organization_id', $request->org)->where('filial', $request->fl)->get();
        }
        return $this->response($sales);
    }

    public function getSalesMonth(Request $request)
    {

        $mquery = Sale::where('anomes', $request->dt)->where('organization_id', $request->org)->where('filial', $request->fl)->first();
        if ($mquery) {
            $salesmonth = Sale::where('anomes', $request->dt)->where('organization_id', $request->org)->where('filial', $request->fl)->get();
        } else {
            $lastDate = Sale::where('organization_id', $request->org)->where('filial', $request->fl)->orderBy('anomes', 'DESC')->first();
            if ($lastDate !== null)
                $salesmonth = Sale::where('anomes', $lastDate->anomes)->where('organization_id', $request->org)->where('filial', $request->fl)->get();
        }
        return $this->response($salesmonth);
    }
}
