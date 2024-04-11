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
        //
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
        $ticket->save();


        $ticketReplie = new ticketReplie();

        $ticketReplie->body = $request['body'];
        $ticketReplie->ticket_id=$ticket->id;
        $ticketReplie->user_id=1;

        $ticketReplie->save();

        // Create a new file attachment instance
        $fileAttachment = new FileAttachament();
        $fileAttachment->filename = $request->file('image')->getClientOriginalName();
        $fileAttachment->filePath = $request->file('image')->store('attachments'); // You might need to adjust the storage path
        $fileAttachment->type = $request->file('image')->getClientMimeType();
        $fileAttachment->uuid = Str::uuid();
        $fileAttachment->attachable()->associate($ticketReplie); // Assuming you want to attach the file to the ticket reply
        $fileAttachment->save();

        // Assuming everything saved successfully, you can return a response or redirect
        return response()->json(['message' => 'Ticket created successfully']);

    }

    /**
     * Display the specified resource.
     */
    public function show(ticket $ticket)
    {
        //
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
}
