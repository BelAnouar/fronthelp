<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserProfileRequest;
use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(UpdateUserProfileRequest $request,User $user)
    {


        $user->update([
            'name' => $request->input('firstName') . ' ' . $request->input('surname'),
            'email' => $request->input('email'),
            'national_code' => $request->input('nationalCode'),
            'phone_number' => $request->input('phoneNumber'),
            'date_of_birth' => $request->input('dateOfBirth'),

        ]);


        $user->refresh();

        return response()->json($user);
    }
}
