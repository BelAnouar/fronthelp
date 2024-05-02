<?php

namespace App\DataTransferObjects;

use App\Http\Requests\UserRoleRequest;

class UserRoleDto
{
    public function __construct(
        public readonly string $roleName,
        public readonly bool $dashboardAccess
    )
    {
    }

    public static function fromRequest(UserRoleRequest $request): UserRoleDto
    {
        return new self(
            roleName: $request->validated('role_name'),
            dashboardAccess: $request->validated('dashboard_access')
        );
    }

}
