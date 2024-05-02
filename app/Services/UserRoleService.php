<?php

namespace App\Services;

use App\DataTransferObjects\UserRoleDto;
use App\Models\UserRole;

class UserRoleService
{

    public function getAllRoles(){
        return UserRole::all();

    }
    public function store(UserRoleDto $userRoleDto)
    {
        return   UserRole::create([
            'name' => $userRoleDto->roleName,
            'dashboard_access' => $userRoleDto->dashboardAccess
        ]);


    }
}
