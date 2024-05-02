<?php

namespace App\DataTransferObjects;

use App\Http\Requests\UserRequest;

class UserDto
{
    public function __construct(
        public readonly string $name,
        public readonly string $email,
        public readonly ?string $password,
        public readonly ?string $socialId,
        public readonly ?string $social,
        public readonly ?int $userRoleId,
        public readonly ?string $nationality,
        public readonly ?string $phoneNumber,
        public readonly ?string $dateOfBirth
    )
    {
    }

    public static function fromRequest(UserRequest $request): UserDto
    {
        $validatedData = $request->validated();

        return new self(
            name: $validatedData['userName'],
            email: $validatedData['email'],
            password: $validatedData['password'] ?? null,
            socialId: $validatedData['social_id'] ?? null,
            social: $validatedData['social'] ?? null,
            userRoleId: $validatedData['role'],
            nationality: $validatedData['nationality'] ?? null,
            phoneNumber: $validatedData['phone_number'] ?? null,
            dateOfBirth: $validatedData['date_of_birth'] ?? null
        );
    }
}
