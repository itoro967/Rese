<?php

use App\Http\Controllers\RestaurantController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
Route::get('/', [RestaurantController::class, 'index']);
Route::get('/detail/{id}', [RestaurantController::class, 'detail']);

Route::get('/login', [UserController::class, 'login'])->name('login');
Route::get('/register', [UserController::class, 'register']);
// Route::post('/login', [UserController::class, 'authenticate'])->name('login.authenticate');
Route::post('/register', [UserController::class, 'registerUser']);