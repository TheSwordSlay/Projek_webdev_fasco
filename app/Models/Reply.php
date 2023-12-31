<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function komentar() {
        return $this->belongsTo(Komentar::class);
    }

    public function replier() {
        return $this->belongsTo(User::class, 'replierId');
    }
}
