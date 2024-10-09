<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Sale;
use App\Models\Total;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SaleController extends Controller
{
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

        return response()->json([
            "response" => [
                "success" => true,
                "status" => 201,
                "sales" => $sales
            ],
        ], 201);
    }

    public function getSalesChart(Request $request)
    {
        $wquery = Sale::where('anomes', $request->dt)->where('organization_id', $request->org)->where('filial', $request->fl)->first();
        if ($wquery) {
            $saleschart = Sale::where('anomes', $request->dt)->where('organization_id', $request->org)->where('filial', $request->fl)->get();
        } else {
            $lastDate = Sale::where('organization_id', $request->org)->where('filial', $request->fl)->orderBy('anomes', 'DESC')->first();
            if ($lastDate !== null)
                $saleschart = Sale::where('anomes', $lastDate->anomes)->where('organization_id', $request->org)->where('filial', $request->fl)->get();
        }
        return response()->json([
            "response" => [
                "success" => true,
                "status" => 201,
                "saleschart" => $saleschart
            ],
        ], 201);
    }
}
