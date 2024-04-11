<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileAttachament extends Model
{
    use HasFactory;
    protected $fillable = ['filename', 'filePath', 'type', 'uuid'];
    public function attachable()
    {
        return $this->morphTo();
    }
}
