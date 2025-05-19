<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    protected $fillable = [
        'name',
        'image_url',
        'description',
        'genre_id',
        'area_id',
        'owner_id',
    ];
    public function Genre()
    {
        return $this->belongsTo(Genre::class)->select('id','name');
    }
    public function Area()
    {
        return $this->belongsTo(Area::class)->select('id','name');
    }
    public function favorites()
    {
        return $this->belongsToMany(User::class, 'favorites');
    }

    public function scopeSearch($query, $datas)
    {
        if(isset($datas['genre'])){
            if($datas['genre']!='All genre'){
                $query->whereHas('genre',function($query) use($datas){
                    $query->where('name',$datas['genre']);
                });
            }
        }
        if(isset($datas['area'])){
            if($datas['area']!='All area'){
                $query->whereHas('area',function($query) use($datas){
                    $query->where('name',$datas['area']);
                });
            }
        }
        if(isset($datas['keyword'])){
            $query->where('name','like','%'.$datas['keyword'].'%');
        }
        return $query;
    }

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
    protected function reservationsCount(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->reservations()->count(),
        );
    }
    protected function isFavorite(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->favorites()->where('user_id', auth()->id())->exists(),
        );
    }
    protected $appends = ['is_favorite'];
    // toArrayをオーバーライドして、ownerガードでログインしている場合のみreservations_countを追加
    public function toArray()
    {
        $array = parent::toArray();
        if (auth()->guard('owner')->check()) {
            $array['reservations_count'] = $this->reservationsCount;
        }
        return $array;
    }
}
