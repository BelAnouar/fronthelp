<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $fillable = [
        'message',
        'user_id',
        'ticket_id',
        'read_at',
    ];
    use HasFactory;

    public function  User(){
        return $this->belongsTo(User::class,);
    }
    public function  Ticket(){
        return $this->belongsTo(ticket::class);
    }
}
