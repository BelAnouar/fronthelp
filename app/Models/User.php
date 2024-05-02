<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Notifications\ResetPasswordNotification;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable,HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $fillable = [
        'name',
        'email',
        'password',"social_id","social","user_role_id", 'nationality',
        'phone_number',
        'date_of_birth',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    public function sendPasswordResetNotification($token)
    {

        $url = 'http://localhost:5174/restpassword?token=' . $token;

        $this->notify(new ResetPasswordNotification($url));
    }
   public function  Tickets(){
      return  $this->hasMany(ticket::class);
   }

   public function TicketReplies(){
      return  $this->hasMany(ticketReplie::class);
   }

    public function userRole()
    {
        return $this->belongsTo(UserRole::class, 'user_role_id');
    }
    public function TeamMember()
    {
        return $this->hasOne(TeamMember::class, 'user_id');
    }

    public function team()
    {
        return $this->hasOneThrough(Team::class, TeamMember::class, 'user_id', 'id', 'id', 'team_id');
    }
}
