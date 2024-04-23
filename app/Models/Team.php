<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;
    protected $fillable=["name","departement_id"];

    public function  Tickets(){
      return  $this->hasMany(ticket::class);
    }
    public function  TeamMember(){
      return  $this->hasOne(TeamMember::class);
    }
    public function Users()
    {
        return $this->hasManyThrough(User::class, TeamMember::class, 'team_id', 'id', 'id', 'user_id');
    }

}
