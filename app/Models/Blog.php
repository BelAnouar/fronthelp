<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{

    use HasFactory;

    protected $fillable=["title","description",'tag',"user_id"];
    public function FileAttachament()
    {
        return $this->morphOne(FileAttachament::class, 'attachable');
    }

    public function user(){
        return $this->belongsTo(User::class,"user_id");
    }
}
