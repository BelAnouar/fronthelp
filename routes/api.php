<?php

use App\Http\Controllers\API\Auth\LoginController;
use App\Http\Controllers\API\Auth\RegisterController;
use App\Http\Controllers\API\Auth\SocialiteController;
use App\Http\Controllers\API\NotificationController;
use App\Http\Controllers\API\StatisticsController;
use Illuminate\Support\Facades\Route;


Route::apiResource('/user', \App\Http\Controllers\API\UserController::class);
Route::apiResource("/departement", \App\Http\Controllers\API\DepartementController::class);
Route::apiResource("/blog", \App\Http\Controllers\API\BlogController::class)->middleware("auth:sanctum");
Route::apiResource("/teams", \App\Http\Controllers\TeamController::class);
Route::apiResource("/teamsMembre", \App\Http\Controllers\API\TeamMembreController::class);
Route::apiResource("/ticket", \App\Http\Controllers\API\TicketController::class)->middleware("auth:sanctum");;
Route::middleware(['web'])->group(function () {
    Route::get("auth/{provide}", [SocialiteController::class, "redirectTo"]);

    Route::get("auth/{provide}/callback", [SocialiteController::class, "handleProviderCallback"]);

});
Route::post("/resetpassword", [\App\Http\Controllers\API\Auth\ResetPassword::class, "ResetPassword"]);

Route::get("/authUser", [\App\Http\Controllers\API\UserController::class, "AuthUser"])->middleware("auth:sanctum");

Route::post("register", [RegisterController::class, "store"]);
Route::post("login", [LoginController::class, "login"]);
Route::post("role", [\App\Http\Controllers\API\UserRoleController::class, "store"]);
Route::get("role", [\App\Http\Controllers\API\UserRoleController::class, "index"]);


Route::post("/forget", [\App\Http\Controllers\API\Auth\ResetPassword::class, "sendResetLinkEmail"]);

Route::post("/ticketReplie", [\App\Http\Controllers\API\TicketController::class, "ticketReplie"])->middleware("auth:sanctum");

Route::get("/priorite", \App\Http\Controllers\API\PrioriteController::class);
Route::get("/statue", \App\Http\Controllers\API\StatusController::class);

Route::patch('/ticket/priorite/{ticket}', [\App\Http\Controllers\API\TicketController::class, 'assignPriorite']);
Route::patch('/ticket/statue/{ticket}', [\App\Http\Controllers\API\TicketController::class, 'assignStatue']);


Route::get('/ticket-statistics', [StatisticsController::class, 'ticketStatistics']);
Route::get('/completed-ticket-statistics', [StatisticsController::class, 'completedTicketStatistics']);
Route::get('/opened-ticket-statistics', [StatisticsController::class, 'openedTicketStatistics']);
Route::get('/team-statistics', [StatisticsController::class, 'teamStatistics']);
Route::get('/user-statistics', [StatisticsController::class, 'userStatistics']);
Route::put("/user-profile/{user}",\App\Http\Controllers\API\ProfileController::class);
Route::post('/tickets/{ticket}/assign-to', [\App\Http\Controllers\API\TicketController::class, 'assignTo']);

Route::get('/notifications', [NotificationController::class, '__invoke'])->middleware("auth:sanctum");
