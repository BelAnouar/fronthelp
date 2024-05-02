<?php

namespace App\Http\Controllers\API;

use App\DataTransferObjects\UserRoleDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRoleRequest;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserRoleResource;
use App\Models\UserRole;
use App\Services\UserRoleService;
use Illuminate\Http\Request;

class UserRoleController extends Controller
{

    protected $userRoleService;

    public function __construct(UserRoleService $userRoleService)
    {
        $this->userRoleService = $userRoleService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $roles = $this->userRoleService->getAllRoles();

        return UserRoleResource::collection($roles);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRoleRequest $request): UserRoleResource
    {


        $userRole = $this->userRoleService->store(
            UserRoleDto::fromRequest($request),
        );

        return UserRoleResource::make($userRole);
    }

    /**
     * Display the specified resource.
     */
    public function show(UserRole $userRole)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserRole $userRole)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserRole $userRole)
    {
        //
    }
}
