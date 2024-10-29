<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Organization;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {
        $organization = Organization::count();
        $company = Company::count();
        $user = User::count();
        $kpis = [
            'organization' => $organization,
            'company' => $company,
            'user' => $user
        ];
        return Inertia::render('Admin/Home/index', ['kpis' => $kpis]);
    }
    public function unauthorized()
    {
        return Inertia::render('Unauthorized');
    }
}
