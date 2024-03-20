<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function store(Request $request){


        $user = User::create([
            'name' => $request->userName,
            'email' => $request->email,
            'password' => bcrypt($request->password)

        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));

    }
}
