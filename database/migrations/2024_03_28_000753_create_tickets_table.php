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
            $table->foreignIdFor(\App\Models\Statuse::class)->nullOnDelete();
            $table->foreignIdFor(\App\Models\Prioritie::class)->nullOnDelete();
            $table->foreignIdFor(\App\Models\Team::class)->nullOnDelete();

            $table->foreignIdFor(\App\Models\ticketReplie::class)->nullOnDelete();


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
