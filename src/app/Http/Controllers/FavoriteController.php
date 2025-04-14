<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function store(Request $request)
    {
        $restaurant_id = $request->only('restaurant_id');
        $user = auth()->user();
        $user->favorites()->attach($restaurant_id);
    }
    public function destroy(Request $request)
    {
        $restaurant_id = $request->only('restaurant_id');
        $user = auth()->user();
        $user->favorites()->detach($restaurant_id);
    }
}
