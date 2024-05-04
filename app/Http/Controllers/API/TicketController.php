<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\FileAttachament;
use App\Models\Notification;
use App\Models\ticket;
use App\Models\ticketReplie;
use App\Models\User;
use App\Notifications\TicketAssignedNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = Auth::id();
        $user_role_id = Auth::user()->user_role_id;

        if ($user_role_id == 1) {
            $tickets = Ticket::with('TicketReplies', 'User', 'Prioritie', 'Statue')
                ->whereNull('assign_to')
                ->orWhere('user_id', $user_id)
                ->get();
        } else {
            $tickets = Ticket::with('TicketReplies', 'User', 'Prioritie', 'Statue')
                ->belongsToOrAssignedTo($user_id)
                ->get();
        }

        return response()->json($tickets);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $ticket = new ticket();
        $ticket->uuid = Str::uuid();
        $ticket->subject = $request['subject'];
        $ticket->team_id = $request['team'];
        $ticket->user_id=Auth::user()->id;
        $ticket->save();


        $ticketReplie = new ticketReplie();

        $ticketReplie->body = $request['body'];
        $ticketReplie->ticket_id=$ticket->id;
        $ticketReplie->user_id=Auth::user()->id;

        $ticketReplie->save();


        $fileAttachment = new FileAttachament();
        $fileAttachment->filename = $request->file('image')->getClientOriginalName();
        $filePath = $request->file('image')->store('public/attachments');


        $filePathWithoutPublic = str_replace('public/', '', $filePath);


        $fileAttachment->filePath = $filePathWithoutPublic;
        $fileAttachment->type = $request->file('image')->getClientMimeType();
        $fileAttachment->uuid = Str::uuid();
        $fileAttachment->attachable()->associate($ticketReplie);
        $fileAttachment->save();


        return response()->json(['message' => 'Ticket created successfully']);

    }

    /**
     * Display the specified resource.
     */
    public function show(ticket $ticket)
    {
        $ticket = $ticket->load([
            'TicketReplies' => function ($query) {
                $query->orderByDesc('created_at')->with('FileAttachaments');
            },
            'User','Team'

        ]);
        if($ticket->statuse_id == 2 ) {
            $ticket->update(['statuse_id' => 1,'open_at' => Carbon::now()]);

        }
        return response()->json($ticket);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ticket $ticket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ticket $ticket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ticket $ticket)
    {
        //
    }

    public  function ticketReplie(Request $request){

        $ticketReplie = new ticketReplie();

        $ticketReplie->body = $request['body'];
        $ticketReplie->ticket_id=$request->idTicket;
        $ticketReplie->user_id=Auth::user()->id;

        $ticketReplie->save();

       if($request->file('image')) {
           $fileAttachment = new FileAttachament();
           $fileAttachment->filename = $request->file('image')->getClientOriginalName();
           $filePath = $request->file('image')->store('public/attachments');


           $filePathWithoutPublic = str_replace('public/', '', $filePath);


           $fileAttachment->filePath = $filePathWithoutPublic;
           $fileAttachment->type = $request->file('image')->getClientMimeType();
           $fileAttachment->uuid = Str::uuid();
           $fileAttachment->attachable()->associate($ticketReplie);
           $fileAttachment->save();
       }


        return response()->json(['message' => 'Ticket created successfully']);
    }


    public function assignPriorite(ticket $ticket,Request $request)
    {



        $ticket->prioritie_id = $request->id;
        $ticket->save();

        return response()->json(['message' => 'Priorite assigned successfully'], 200);
    }

    public function assignStatue(ticket $ticket,Request $request)
    {



        $ticket->statuse_id = $request->id;
        $ticket->save();

        return response()->json(['message' => 'Statue assigned successfully'], 200);
    }

    public function assignTo(Ticket $ticket, Request $request)
    {
        $userId = $request->id;
        $ticket->assign_to = $userId;
        $ticket->save();

        $notification = new Notification();
        $notification->message = "You have been assigned to a ticket.";
        $notification->user_id = $userId;
        $notification->ticket_id = $ticket->id;
        $notification->save();

        return response()->json(['message' => 'User assigned successfully'], 200); }
}
