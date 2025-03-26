<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    public function Genre()
    {
        return $this->belongsTo(Genre::class)->select('id','name');
    }
    public function Area()
    {
        return $this->belongsTo(Area::class)->select('id','name');
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
}
