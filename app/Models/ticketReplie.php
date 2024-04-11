<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ticketReplie extends Model
{
    use HasFactory;
    protected $fillable = [
        'body',"ticket_id","user_id"
    ];
}
