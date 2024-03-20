<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\SocialiteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::middleware(['web'])->group(function () {
    Route::get("auth/{provide}", [SocialiteController::class, "redirectTo"]);

    Route::get("auth/{provide}/callback", [SocialiteController::class, "handleProviderCallback"]);

});

Route::post("register", [RegisterController::class, "store"]);
