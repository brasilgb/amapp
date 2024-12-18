<?php

use App\Http\Controllers\Admin\CompanyController as AdminCompanyController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\OrganizationController as AdminOrganizationController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\Customer\DashboardController as CustomerDashboardController;

use App\Http\Controllers\Customer\AssociationController;
use App\Http\Controllers\Customer\CliSettingsController;
use App\Http\Controllers\Customer\CliUserController;
use App\Http\Controllers\Customer\SalesController;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Route::get('/admin', [HomeController::class, 'index'])->name('admin');
Route::middleware(['auth', 'isAdmin'])->group(function () {
    Route::resource('/organizations', AdminOrganizationController::class);
    Route::resource('/companies', AdminCompanyController::class);
    Route::resource('/settings', SettingsController::class);
    Route::get('/deleteorgdata/{id}', [AdminOrganizationController::class, 'deleteorgdata'])->name('deleteorgdata');
});
Route::middleware(['auth'])->group(function () {
    Route::get('/', [CustomerDashboardController::class, 'index']);

});

Route::middleware('auth')->group(function () {
    Route::resource('/users', UserController::class);
    Route::resource('/clientes/cliusers', CliUserController::class)->parameters(['cliusers' => 'user']);
    Route::resource('/clientes/clisettings', CliSettingsController::class)->parameters(['clisettings' => 'setting']);
    // Route::get('/unauthorized', [HomeController::class, 'unauthorized'])->name('unauthorized');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', [HomeController::class, 'index'])->name('admin')->middleware(['auth', 'isAdmin']);
Route::get('/clientes', [CustomerDashboardController::class, 'index'])->name('clientes')->middleware(['auth', 'isCustomer']);
Route::get('/faturamento/resumo', [SalesController::class, 'index'])->name('invoicing.summary')->middleware(['auth', 'isCustomer']);
Route::get('/faturamento/associacao', [AssociationController::class, 'index'])->name('invoicing.association')->middleware(['auth', 'isCustomer']);

require __DIR__ . '/auth.php';
