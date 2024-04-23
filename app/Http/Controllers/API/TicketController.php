<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\FileAttachament;
use App\Models\ticket;
use App\Models\ticketReplie;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $tickets=ticket::with('TicketReplies',"User","Prioritie","Statue")->get();

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
        $ticket->user_id=1;
        $ticket->save();


        $ticketReplie = new ticketReplie();

        $ticketReplie->body = $request['body'];
        $ticketReplie->ticket_id=$ticket->id;
        $ticketReplie->user_id=1;

        $ticketReplie->save();

        // Create a new file attachment instance
        $fileAttachment = new FileAttachament();
        $fileAttachment->filename = $request->file('image')->getClientOriginalName();
        $fileAttachment->filePath = $request->file('image')->store('public/attachments'); // You might need to adjust the storage path
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
        $ticketReplie->user_id=2;

        $ticketReplie->save();

       if($request->file('image')) {
           $fileAttachment = new FileAttachament();
           $fileAttachment->filename = $request->file('image')->getClientOriginalName();
           $fileAttachment->filePath = $request->file('image')->store('attachments');
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
}
