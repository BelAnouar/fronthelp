<?php

use App\Http\Controllers\API\Auth\LoginController;
use App\Http\Controllers\API\Auth\RegisterController;
use App\Http\Controllers\API\Auth\SocialiteController;
use Illuminate\Support\Facades\Route;




Route::apiResource('/user', \App\Http\Controllers\API\UserController::class);
Route::apiResource("/departement",\App\Http\Controllers\API\DepartementController::class);
Route::apiResource("/blog",\App\Http\Controllers\API\BlogController::class)->middleware("auth:sanctum");

Route::middleware(['web'])->group(function () {
    Route::get("auth/{provide}", [SocialiteController::class, "redirectTo"]);

    Route::get("auth/{provide}/callback", [SocialiteController::class, "handleProviderCallback"]);

});

Route::post("register", [RegisterController::class, "store"]);
Route::post("login", [LoginController::class, "login"]);
Route::post("role", [\App\Http\Controllers\API\UserRoleController::class, "store"]);
Route::get("role", [\App\Http\Controllers\API\UserRoleController::class, "index"]);
