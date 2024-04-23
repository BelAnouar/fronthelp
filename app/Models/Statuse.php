<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statuse extends Model
{
    use HasFactory;
    protected  $fillable=['name'];


    public  function  Ticket(){
        return $this->hasOne(ticket::class,"statuse_id");
    }
}
