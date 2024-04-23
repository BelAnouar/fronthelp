<?php

namespace Database\Seeders;

use App\Models\Prioritie;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PrioritiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (Prioritie::count() === 0) {
            $now = Carbon::now();
            Prioritie::insert([
                [ 'name' => 'Low', 'created_at' => $now, 'updated_at' => $now],
                [ 'name' => 'Medium', 'created_at' => $now, 'updated_at' => $now],
                [ 'name' => 'High', 'created_at' => $now, 'updated_at' => $now],
                ['name' => 'Urgent', 'created_at' => $now, 'updated_at' => $now],
            ]);
        }
    }
}
