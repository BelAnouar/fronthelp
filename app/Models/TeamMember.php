<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    use HasFactory;
    protected $fillable=["TeamName", "team_id", "user_id"];


    public function Users()
    {
        return $this->belongsToMany(User::class, 'team_member_user', 'team_id', 'user_id');
    }

    public function Team()
    {
        return $this->belongsTo(Team::class);
    }
}
