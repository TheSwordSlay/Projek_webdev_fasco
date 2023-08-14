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

    public function scopeFilter($query, array $filters){
        $query->when($filters['search'] ?? false, function($query, $search) {
            return $query->where('title', 'like', '%'.$search.'%');
        });

        $query->when($filters['daerah'] ?? false, function($query, $daerah) {
            return $query->where('daerah', 'like', '%'.$daerah.'%');
        });

        $query->when($filters['tipe'] ?? false, function($query, $tipe) {
            return $query->where('tipe', 'like', '%'.$tipe.'%');
        });
    }

    public function komentars() {
        return $this->hasMany(Komentar::class);
    }

    public function author() {
        return $this->belongsTo(User::class, 'user_id');
    }
}
