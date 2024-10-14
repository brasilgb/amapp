<?php

use App\Http\Controllers\Api\AssociationController;
use App\Http\Controllers\Api\JsonToDatabaseController;
use App\Http\Controllers\Api\SaleController;
use App\Http\Controllers\Api\SettingsController;
use App\Http\Controllers\Api\TotalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/datainsert', [JsonToDatabaseController::class, 'index'])->name('datainsert');
Route::get('/vendas', [SaleController::class, 'getSales'])->name('vendas');
Route::get('/graficovendas', [SaleController::class, 'getSalesChart'])->name('graficovendas');
Route::get('/associacoes', [AssociationController::class, 'getAssociations'])->name('associacoes');
// Route::get('/settings', [SettingsController::class, 'getSettingsForOrganization'])->name('settings');
Route::get('/totais', [TotalController::class, 'getTotals'])->name('totais');
