<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function company()
    {
        return $this->hasMany(Company::class);
    }
}
