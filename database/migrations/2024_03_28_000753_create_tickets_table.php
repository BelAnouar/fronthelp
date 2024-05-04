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
        Schema::disableForeignKeyConstraints();
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->index();
            $table->string("subject");
            $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignIdFor(\App\Models\Statuse::class)->nullable()->nullOnDelete()->default(2);
            $table->foreignIdFor(\App\Models\Prioritie::class)->nullable()->nullOnDelete();
            $table->foreignIdFor(\App\Models\Team::class)->nullable()->nullOnDelete();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
