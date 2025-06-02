<?php

namespace App\Http\Controllers;

use App\Http\Requests\RestaurantRequest;
use App\Models\Area;
use App\Models\Genre;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class RestaurantController extends Controller
{
    public function index(Request $request)
    {   $datas=$request->only('genre','area','keyword');
        // 通信量削減のため必要なカラムのみ取得
        $restaurants = Restaurant::with(['genre','area'])->search($datas)->select('id','name','image_url','genre_id','area_id')->get();
        $genres = Genre::all()->select('name');
        $areas = Area::all()->select('name');
        $user = auth()->user();
        return Inertia::render('index',compact('restaurants','genres','areas','user'));
    }

    public function create()
    {
        $genres = Genre::all()->select('id','name');
        $areas = Area::all()->select('id','name');
        return Inertia::render('owner/restaurantCreate',compact('genres','areas'));
    }

    public function store(RestaurantRequest $request)
    {
        $filePath = $request->file('restaurant_image')->store('restaurants', 's3');
        $url = Storage::disk('s3')->url($filePath);

        Restaurant::create([
            'name' => $request->restaurant_name,
            'image_url' => $url,
            'description' => $request->description,
            'genre_id' => $request->genre,
            'area_id' => $request->area,
            'owner_id' => auth()->user()->id,
        ]);
        return redirect()->route('owner.index');
    }

    public function detail(string $id)
    {
        $restaurant = Restaurant::with(['genre','area'])->select('id','name','image_url','description','genre_id','area_id')->find($id);
        $user = auth()->user();
        return Inertia::render('detail',compact('restaurant','user'));
    }

}
