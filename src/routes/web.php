<?php

use App\Http\Controllers\RestaurantController;
use Illuminate\Support\Facades\Route;

Route::get('/', [RestaurantController::class, 'index']);
Route::get('/detail/{id}', [RestaurantController::class, 'detail']);