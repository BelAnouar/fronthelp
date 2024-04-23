<?php

namespace Database\Seeders;

use App\Models\UserRole;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (UserRole::count() === 0) {

            $userRole = new UserRole();
            $userRole->name = 'admin';
            $userRole->dashboard_access = 1;
            $userRole->save();




        }
        $userRole = new UserRole();
        $userRole->name = 'Customer';
        $userRole->dashboard_access = 0;
        $userRole->save() ;
    }
}
