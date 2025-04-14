<?php

namespace App\Http\Controllers;

use App\Models\Area;
use App\Models\Genre;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RestaurantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {   $datas=$request->only('genre','area','keyword');
        // 通信量削減のため必要なカラムのみ取得
        $restaurants = Restaurant::with(['genre','area'])->search($datas)->select('id','name','image_url','genre_id','area_id')->get();
        $genres = Genre::all()->select('name');
        $areas = Area::all()->select('name');
        $user = auth()->user();
        return Inertia::render('index',compact('restaurants','genres','areas','user'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function detail(string $id)
    {
        $restaurant = Restaurant::with(['genre','area'])->select('id','name','image_url','description','genre_id','area_id')->find($id);
        return Inertia::render('detail',compact('restaurant'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
