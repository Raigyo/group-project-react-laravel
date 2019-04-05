<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $events = Event::all();
        return response()->json($events);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $params = $request->all();
        $params['author'] = auth('api')->user()->id;
        $event = Event::create($params);
        $event['author'] = $event->author()->get()[0];
        return response()->json([
            'message' => 'Event created',
            'event' => $event
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Event::where('id', '=', $id)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $id)
    {
        $event = Event::where('id', '=', $id)->get();
        $event->update($request->all());
        return response()->json([
            'message' => 'Event updated',
            'event' => $event
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        $event->delete();

        return response()->json([
            'message' => 'Event deleted'
        ]);
    }

    public function myEvent(){
        $events = DB::table('events')
            ->where('author', auth('api')->user()->id)
            ->get();;
        return response()->json($events);
    }

    public function past(){
        $events = DB::table('events')
            ->join('users','users.id', '=', 'events.author')
            ->select('users.name as username', 'events.name', 'events.date_event', 'events.description')
            ->where('events.date_event', '<','NOW()')
            ->orderBy('events.date_event', 'desc')
            ->get();
        return response()->json($events);
    }

    public function futur(){
        $events = DB::table('events')
            ->join('users','users.id', '=', 'events.author')
            ->select('users.name as username', 'events.name', 'events.date_event', 'events.description')
            ->where('events.date_event', '>=','NOW()')
            ->orderBy('events.date_event', 'asc')
            ->get();

        return response()->json($events);
    }
}
