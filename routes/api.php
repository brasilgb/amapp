<?php

use App\Http\Controllers\Api\AssociationController;
use App\Http\Controllers\Api\EssentialController;
use App\Http\Controllers\Api\RemoteDataSaveController;
use App\Http\Controllers\Api\SaleController;
use App\Http\Controllers\Api\TotalController;
use Illuminate\Support\Facades\Route;

Route::post('/datainsert', [RemoteDataSaveController::class, 'index'])->name('datainsert');
Route::get('/sales', [SaleController::class, 'getSales'])->name('sales');
Route::get('/salesmonth', [SaleController::class, 'getSalesMonth'])->name('salesmonth');
Route::get('/associations', [AssociationController::class, 'getAssociations'])->name('associations');
Route::get('/companies', [EssentialController::class, 'getCompanies'])->name('companies');
// Route::get('/settings', [SettingsController::class, 'getSettingsForOrganization'])->name('settings');
Route::get('/totals', [TotalController::class, 'getTotals'])->name('totals');
