<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\OwnerController;
use App\Http\Controllers\RestaurantController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ReservationController;

Route::get('/', [RestaurantController::class, 'index'])->name('index');
Route::get('/detail/{id}', [RestaurantController::class, 'detail'])->name('detail');

Route::get('/register', [UserController::class, 'register'])->name('login.register');
Route::post('/register', [UserController::class, 'store'])->name('login.store');
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
// 管理者用
Route::prefix('admin')->group(function () {
    Route::get('/login', [AdminController::class, 'login'])->name('admin.login');
    Route::post('/login', [AdminController::class, 'authenticate'])->name('admin.login.authenticate');
    Route::middleware(['auth:admin'])->group(function () {
        Route::get('/logout', [AdminController::class, 'logout'])->name('admin.logout');
        Route::get('/createOwner', [OwnerController::class, 'register'])->name('owner.login.register');
        Route::post('/createOwner', [OwnerController::class, 'store'])->name('owner.login.store');
    });
});


