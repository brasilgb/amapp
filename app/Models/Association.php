<?php

namespace App\Models;

use App\Models\Scopes\CompanyScope;
use App\Models\Scopes\OrganizationScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Association extends Model
{
    use HasFactory;

    protected $fillable = [
        "organization_id",
        'company_id',
        'id',
        'cnpj',
        'filial',
        'dtvenda',
        'assoc',
        'descassoc',
        'valdevolucao',
        'valvenda',
        'margem',
        'representa',
        'valmeta'
    ];
    
    // protected static function boot()
    // {
    //     parent::boot();
    //     // static::addGlobalScope(new OrganizationScope);
    //     static::addGlobalScope(new CompanyScope);
    // }
    
    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
