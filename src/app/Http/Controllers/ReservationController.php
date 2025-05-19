<?php
namespace App\Http\Controllers;

use App\Http\Requests\ReservationRequest;
use Illuminate\Http\Request;
class ReservationController extends Controller
{
    public function store(ReservationRequest $request)
    {
        $data = $request->only([
            'restaurant_id',
            'date',
            'time',
            'guest_count',
        ]);
        auth()->user()->reservations()->create($data);
        return redirect()->route('mypage');
    }
    public function update(ReservationRequest $request, $id)
    {
        $data = $request->only([
            'date',
            'time',
            'guest_count',
        ]);
        auth()->user()->reservations()->find($id)->update($data);
        return redirect()->route('mypage');
    }
    public function destroy(request $request)
    {
        $id = $request->input('id');
        auth()->user()->reservations()->find($id)->delete();
        return redirect()->route('mypage');
    }
    public function Review(Request $request)
    {
        $reservation = auth()->user()->reservations()->find($request->input('id'));
        $reservation->update([
            'review' => $request->input('review'),
            'rating' => $request->input('rating'),
        ]);
        return redirect()->route('mypage');
    }
}
