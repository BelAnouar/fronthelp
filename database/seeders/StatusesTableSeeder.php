<?php

namespace Database\Seeders;

use App\Models\Statuse;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (Statuse::count() === 0) {
            $now = Carbon::now();
            Statuse::insert([
                ['name' => 'Open', 'created_at' => $now, 'updated_at' => $now],
                ['name' => 'Pending', 'created_at' => $now, 'updated_at' => $now],
                ['name' => 'Resolved', 'created_at' => $now, 'updated_at' => $now],
                ['name' => 'Closed', 'created_at' => $now, 'updated_at' => $now],
            ]);
        }
    }
}
