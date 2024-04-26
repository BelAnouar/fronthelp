<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prioritie extends Model
{
    use HasFactory;

    protected  $fillable=['name'];


    public  function  Ticket(){
        return $this->hasMany(ticket::class,"prioritie_id");
    }
}
