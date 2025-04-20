<?php

use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\RestaurantController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ReservationController;

Route::get('/', [RestaurantController::class, 'index'])->name('index');
Route::get('/detail/{id}', [RestaurantController::class, 'detail'])->name('detail');

Route::get('/register', [UserController::class, 'register'])->name('login.register');
Route::post('/register', [UserController::class, 'registerUser']);
Route::get('/login', [UserController::class, 'login'])->name('login');
Route::post('/login', [UserController::class, 'authenticate'])->name('login.authenticate');

Route::middleware(['auth'])->group(function () {
    Route::get('/mypage', [UserController::class, 'mypage'])->name('mypage');
    Route::post('/favorite', [FavoriteController::class, 'store'])->name('favorite.store');
    Route::post('/unfavorite', [FavoriteController::class, 'destroy'])->name('favorite.destroy');
    Route::post('/logout', [UserController::class, 'logout'])->name('logout');
    Route::post('/reservation', [ReservationController::class, 'store'])->name('reservation.store');
    Route::post('/reservation/update/{id}', [ReservationController::class, 'update'])->name('reservation.update');
    Route::post('/reservation/delete', [ReservationController::class, 'destroy'])->name('reservation.destroy');
});


