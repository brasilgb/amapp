<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Sale;
use App\Models\Total;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {

        $wquery = Total::where('datatu', '20241029')->where('organization_id', 2)->where('filial', 0)->first();
        if ($wquery) {
            $totals = Total::where('datatu', '20241029')->where('organization_id', 2)->where('filial', 0)->first();
        } else {
            $lastDate = Total::where('organization_id', 2)->where('filial',0)->orderBy('datatu', 'DESC')->first();
            if ($lastDate !== null)
                $totals = Total::where('datatu', $lastDate->datatu)->where('organization_id', 2)->where('filial', 0)->first();
        }

        $mquery = Sale::where('anomes', '202410')->where('organization_id', 2)->where('filial', 0)->first();
        if ($mquery) {
            $salesmonth = Sale::where('anomes', '202410')->where('organization_id', 2)->where('filial', 0)->get();
        } else {
            $lastDate = Sale::where('organization_id', 2)->where('filial', 0)->orderBy('anomes', 'DESC')->first();
            if ($lastDate !== null)
                $salesmonth = Sale::where('anomes', $lastDate->anomes)->where('organization_id', 2)->where('filial', 0)->get();
        }

        $companies = Company::get();
        return Inertia::render('Customer/Dashboard', ['totals' => $totals, 'salesmonth' => $salesmonth, 'companies' => $companies]);
    }
}
