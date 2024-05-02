<?php

namespace App\Services;

use App\DataTransferObjects\UserDto;
use App\Models\User;

class UserService
{
    public function store(UserDto $userDto)
    {
        return User::create([
            'name' => $userDto->name,
            'email' => $userDto->email,
            'password' => bcrypt($userDto->password),
            'user_role_id' => $userDto->userRoleId
        ]);
    }
    public function update(UserDto $userDto , User $user)
    {
        return tap($user)->update([
            'name' => $userDto->name,
            'email' => $userDto->email,
            'user_role_id' => $userDto->userRoleId,
        ]);

    }
}
