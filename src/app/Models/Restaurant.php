<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    public function Genre()
    {
        return $this->belongsTo(Genre::class);
    }
    public function Area()
    {
        return $this->belongsTo(Area::class);
    }
}
