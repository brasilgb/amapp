<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssociationController extends Controller
{
    public function index() {
        return Inertia::render('Customer/Invoicing/Association');
    }
}
