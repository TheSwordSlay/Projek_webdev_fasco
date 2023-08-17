<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Komentar extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function replies() {
        return $this->hasMany(Reply::class);
    }

    public function resep() {
        return $this->belongsTo(Resep::class, 'resep_id');
    }

    public function commenter() {
        return $this->belongsTo(User::class, 'commenterId');
    }
}
