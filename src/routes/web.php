<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\OwnerController;
use App\Http\Controllers\RestaurantController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ReservationController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;

Route::get('/', [RestaurantController::class, 'index'])->name('index');
Route::get('/detail/{id}', [RestaurantController::class, 'detail'])->name('detail');

Route::get('/register', [UserController::class, 'register'])->name('login.register');
Route::post('/register', [UserController::class, 'store'])->name('login.store');
Route::get('/login', [UserController::class, 'login'])->name('login');
Route::post('/login', [UserController::class, 'authenticate'])->name('login.authenticate');

// メール確認通知
Route::get('/email/verify', function () {
    return inertia('auth/VerifyEmail');

})->middleware('auth')->name('verification.notice');

// メール検証
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
    return redirect()->route('mypage');
})->middleware(['auth', 'signed'])->name('verification.verify');

// 確認メール再送信
Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return back()->with('message', '確認メールを送信しました！');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::middleware(['auth:user','verified'])->group(function () {
    Route::get('/mypage', [UserController::class, 'mypage'])->name('mypage');
    Route::post('/favorite', [FavoriteController::class, 'store'])->name('favorite.store');
    Route::post('/unfavorite', [FavoriteController::class, 'destroy'])->name('favorite.destroy');
    Route::post('/logout', [UserController::class, 'logout'])->name('logout');
    Route::post('/reservation', [ReservationController::class, 'store'])->name('reservation.store');
    Route::post('/reservation/update/{id}', [ReservationController::class, 'update'])->name('reservation.update');
    Route::post('/reservation/delete', [ReservationController::class, 'destroy'])->name('reservation.destroy');
    Route::post('/reservation/review', [ReservationController::class, 'review'])->name('reservation.review');
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

// 店舗代表者用
Route::prefix('owner')->group(function () {
    Route::get('/login', [OwnerController::class, 'login'])->name('owner.login');
    Route::post('/login', [OwnerController::class, 'authenticate'])->name('owner.login.authenticate');
    Route::middleware(['auth:owner'])->group(function () {
        Route::get('/logout', [OwnerController::class, 'logout'])->name('owner.logout');
        Route::get('/index', [OwnerController::class, 'index'])->name('owner.index');
        Route::get('/detail/{id}', [OwnerController::class, 'detail'])->name('owner.detail');
        Route::get('/create', [RestaurantController::class, 'create'])->name('restaurant.create');
        Route::post('/create', [RestaurantController::class, 'store'])->name('restaurant.store');
    });
});
