<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ticket;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    public function ticketStatistics()
    {
        $totalTickets = Ticket::count();

        return response()->json( ["ticketTotal"=>$totalTickets]);
    }


    public function completedTicketStatistics()
    {
        $completedTickets = Ticket::where('status', 'completed')->count();

        return response()->json(['completed_tickets' => $completedTickets]);
    }


    public function teamStatistics()
    {
        $teams = User::select('team', \DB::raw('count(*) as total'))
            ->groupBy('team')
            ->get();

        return response()->json(['teams' => $teams]);
    }


    public function userStatistics()
    {
        $users = User::select('id', 'name', 'email', 'team')
            ->withCount('tickets')
            ->get();

        return response()->json(['users' => $users]);
    }
}
