<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('file_attachaments', function (Blueprint $table) {
            $table->id();
            $table->string('filename');
            $table->string('filePath');
            $table->string('type');

            $table->uuid('uuid')->index();
            $table->foreignIdFor(\App\Models\ticket::class)->nullOnDelete();
            $table->foreignIdFor(\App\Models\Blog::class)->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('file_attachaments');
    }
};
