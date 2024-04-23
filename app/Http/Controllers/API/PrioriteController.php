<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Prioritie;
use Illuminate\Http\Request;

class PrioriteController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $proprieties = Prioritie::all();
        return response()->json($proprieties);
    }
}
