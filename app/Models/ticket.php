<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
class ticket extends Model
{
    use HasFactory;
    protected $fillable = [
        'subject',
        'statuse_id',"uuid",
        'prioritie_id',
        'team_id',
         "user_id", 'assign_to'
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


    public function scopeBelongsToOrAssignedTo(Builder $query, $user_id)
    {
        return $query->where(function ($query) use ($user_id) {
            $query->where('user_id', $user_id)
                ->orWhere('assign_to', $user_id);
        });
    }


}
