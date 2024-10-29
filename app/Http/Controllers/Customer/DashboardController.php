<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
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

        return Inertia::render('Customer/Dashboard', ['totals' => $totals]);
    }
}
