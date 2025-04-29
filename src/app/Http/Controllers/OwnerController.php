<?php

namespace App\Http\Controllers;

use App\Models\Owner;
use App\Models\Restaurant;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class OwnerController extends Controller
{
    public function index()
    {
        $restaurants = Restaurant::with(['genre','area'])->select('id','name','image_url','genre_id','area_id')->get();
        return Inertia::render('owner/index',compact('restaurants'));
    }
    public function login()
    {
        return Inertia::render('owner/login');
    }
    public function logout(Request $request): RedirectResponse
    {
        Auth::guard('owner')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('owner.login');
    }

    public function authenticate(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::guard('owner')->attempt($credentials)) {
            $request->session()->regenerate();
            
            return redirect()->intended(route('owner.index'));
        }

        return back()->withErrors([
            'email' => __('auth.failed'),
        ])->onlyInput('email');
    }

    public function register()
    {
        return Inertia::render('admin/createOwner');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'confirmed', 'min:8'],
        ]);

        $user = Owner::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return redirect()->back();
    }
}
