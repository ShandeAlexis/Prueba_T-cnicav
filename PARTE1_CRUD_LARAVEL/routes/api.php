<?php

use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('products')->group(function () {
    Route::get('/', [ProductController::class, 'list']);
    Route::get('/{id}', [ProductController::class, 'findById']); 
    Route::post('/', [ProductController::class, 'create']);
    Route::put('/{id}', [ProductController::class, 'edit']);
    Route::delete('/{id}', [ProductController::class, 'delete']);
});
