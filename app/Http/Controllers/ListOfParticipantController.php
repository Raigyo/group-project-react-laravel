<?php

namespace App\Http\Controllers;

use App\listOfParticipant;
use Illuminate\Http\Request;

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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\listOfParticipant  $listOfParticipant
     * @return \Illuminate\Http\Response
     */
    public function show(listOfParticipant $listOfParticipant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\listOfParticipant  $listOfParticipant
     * @return \Illuminate\Http\Response
     */
    public function edit(listOfParticipant $listOfParticipant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\listOfParticipant  $listOfParticipant
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, listOfParticipant $listOfParticipant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\listOfParticipant  $listOfParticipant
     * @return \Illuminate\Http\Response
     */
    public function destroy(listOfParticipant $listOfParticipant)
    {
        //
    }
}
