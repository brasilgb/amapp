<?php

use App\Http\Controllers\Admin\CompanyController as AdminCompanyController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\OrganizationController as AdminOrganizationController;
use App\Http\Controllers\Customer\DashboardController as CustomerDashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->middleware(['auth', 'isCustomer'])->group(function () {
    Route::get('/', [HomeController::class, 'index']);
    Route::resource('/organizations', AdminOrganizationController::class);
    Route::get('/deleteorgdata/{id}', [AdminOrganizationController::class, 'deleteorgdata'])->name('deleteorgdata');
});
Route::prefix('clientes')->middleware(['auth', 'isAdmin'])->group(function () {
    Route::get('/', [CustomerDashboardController::class, 'index']);
});

Route::middleware('auth')->group(function () {
    Route::get('/unauthorized', [HomeController::class, 'unauthorized'])->name('unauthorized');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
