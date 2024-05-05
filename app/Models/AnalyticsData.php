<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnalyticsData extends Model
{
    protected $fillable = ['ResTime', 'ResolutionTime', 'ticket_id'];
    use HasFactory;
}
