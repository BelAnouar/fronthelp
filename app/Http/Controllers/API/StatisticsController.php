<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Team;
use App\Models\ticket;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StatisticsController extends Controller
{
    public function ticketStatistics()
    {
        $totalTickets = Ticket::count();

        return response()->json( ["ticketTotal"=>$totalTickets]);
    }


    public function completedTicketStatistics()
    {

        $completedTickets = Ticket::select(DB::raw('DATE(updated_at) as date'), DB::raw('count(*) as total'))
            ->where('statuse_id', 4)
            ->groupBy(DB::raw('DATE(updated_at)'))
            ->get();
        return response()->json(['completed_tickets' => $completedTickets]);
    }
public function openedTicketStatistics()
    {

        $openedTickets = Ticket::select(DB::raw('DATE(updated_at) as date'), DB::raw('count(*) as total'))
            ->where('statuse_id', 1)
            ->groupBy(DB::raw('DATE(updated_at)'))
            ->get();
        return response()->json(['opened_tickets' => $openedTickets]);
    }


    public function teamStatistics()
    {
        $teams = Team::count();

        return response()->json(['teams' => $teams]);
    }


    public function userStatistics()
    {
        $users = User::count();

        return response()->json(['users' => $users]);
    }
}
