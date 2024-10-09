<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Company;
use Inertia\Inertia;

class InvoicingController extends Controller
{
    public function index()
    {
        $companies = Company::get();
        return Inertia::render('Invoicing/index', [
            'companies' => $companies
        ]);
    }
}
