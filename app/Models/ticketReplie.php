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

    public  function  Ticket(){
        return $this->belongsTo(ticket::class,"id");
    }

    public function User(){
        return  $this->belongTo(User::class);
    }

    public function FileAttachaments()
    {
        return $this->morphMany(FileAttachament::class, 'attachable');
    }
}
