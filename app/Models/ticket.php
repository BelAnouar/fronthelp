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
        'ticket_replie_id',
    ];
    public function FileAttachaments()
    {
        return $this->morphMany(FileAttachament::class, 'attachable');
    }
}
