<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;
class UserController extends Controller
{
    function mypage()
    {
        $user = Auth::user();
        $restaurants = $user->favorites()->with(['genre','area'])->select('restaurants.id','name','image_url','genre_id','area_id')->get();
        $reservations = $user->reservations()->with(['restaurant'=>fn($query) => $query->select('id','name')])
                            ->select('id','restaurant_id','date','time','guest_count')->orderBy('date','asc')->orderBy('time','asc')->get();
        return Inertia::render('mypage',compact('user','restaurants','reservations'));
    }
    
    public function login()
    {
        return Inertia::render('login');
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('login');
    }

    public function register()
    {
        return Inertia::render('register');
    }

    public function authenticate(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended(route('mypage'));
        }

        return back()->withErrors([
            'email' => __('auth.failed'),
        ])->onlyInput('email');
    }
    
    public function registerUser(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'confirmed', 'min:8'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        Auth::login($user);

        return redirect()->intended('dashboard');
    }
}
