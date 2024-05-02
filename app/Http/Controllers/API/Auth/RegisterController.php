<?php

namespace App\Http\Controllers\API\Auth;

use App\DataTransferObjects\UserDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserRoleResource;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    protected $userService;


    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function store(UserRequest $request)
    {
       $user = $this->userService->store(UserDto::fromRequest($request));
        return UserResource::make($user);
    }
}
