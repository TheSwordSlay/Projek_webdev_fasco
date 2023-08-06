<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resep extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $casts = [
        'langkah' => 'array',
        'bahan' => 'array'
    ];

    public function komentars() {
        return $this->hasMany(Komentar::class);
    }

    public function author() {
        return $this->belongsTo(User::class, 'user_id');
    }
}
