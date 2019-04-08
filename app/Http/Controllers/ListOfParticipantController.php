<?php

namespace App\Http\Controllers;

use App\listOfParticipant;
use App\Event;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ListOfParticipantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $participants = listOfParticipant::all();
        return response()->json($participants);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        $sub = DB::insert('insert into list_of_participants (participant, event) values (?, ?)',
                [auth('api')->user()->id, $id]);
        return response()->json([
            'message' => 'Inscription successful'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\listOfParticipant  $listOfParticipant
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $unsub = DB::table('list_of_participants')
            ->where('participant','=', auth('api')->user()->id)
            ->where('event','=', $id)
            ->delete();

        return response()->json([
            "message" => "Record deleted"
        ]);
    }
}
