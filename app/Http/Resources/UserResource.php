<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'name' => $this->name,
            'email' => $this->email,
            'password' => $this->password,
            'social_id' => $this->social_id,
            'social' => $this->social,
            'user_role_id' => $this->user_role_id,
            'nationality' => $this->nationality,
            'phone_number' => $this->phone_number,
            'date_of_birth' => $this->date_of_birth,
        ];
    }
}
