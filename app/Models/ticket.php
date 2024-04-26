<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ticket extends Model
{
    use HasFactory;
    protected $fillable = [
        'subject',
        'statuse_id',"uuid",
        'prioritie_id',
        'team_id',
         "user_id"
    ];



    public function TicketReplies(){
        return $this->hasMany(ticketReplie::class);
    }
    public function Statue(){
        return $this->belongsTo(Statuse::class,"statuse_id");
    }
    public function Prioritie(){
        return $this->belongsTo(Prioritie::class,"prioritie_id");
    }
    public function User(){
        return $this->belongsTo(User::class);
    }
    public function Team(){
        return $this->belongsTo(Team::class, 'team_id')->with('Users');
    }


}
