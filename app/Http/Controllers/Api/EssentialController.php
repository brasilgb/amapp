<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Company;
use Illuminate\Http\Request;

class EssentialController extends Controller
{
    public function response($value, $label)
    {
        return response()->json([
            "response" => [
                "success" => true,
                "status" => 201,
                $label => $value
            ],
        ], 201);
    }

    public function getCompanies(Request $request)
    {
        $companies = Company::where('organization_id', $request->org)->get();
        return $this->response($companies, 'companies');
    }
}
