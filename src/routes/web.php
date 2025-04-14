<?php

use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\RestaurantController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use GuzzleHttp\Middleware;

Route::get('/', [RestaurantController::class, 'index'])->name('index');

Route::middleware(['auth'])->group(function () {
    Route::get('/mypage', [UserController::class, 'mypage'])->name('mypage');
    Route::post('/favorite', [FavoriteController::class, 'store'])->name('favorite.store');
    Route::post('/unfavorite', [FavoriteController::class, 'destroy'])->name('favorite.destroy');
});

Route::get('/detail/{id}', [RestaurantController::class, 'detail'])->name('detail');

Route::get('/login', [UserController::class, 'login'])->name('login');
Route::get('/register', [UserController::class, 'register'])->name('login.register');
Route::post('/login', [UserController::class, 'authenticate'])->name('login.authenticate');
Route::post('/register', [UserController::class, 'registerUser']);