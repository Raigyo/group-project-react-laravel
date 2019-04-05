<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class listOfParticipant extends Model
{
    protected $fillable = [
        'participant',
        'event'
    ];

    public function participants(){
        return $this->hasMany('App\User', 'users');
    }

    public function events(){
        return $this->hasMany('App\Event', 'events');
    }

    public function participantByEvent(){
        $events = DB::table('listOfParticipant lp', 'users u')
            ->select('u.username', 'lp.event')
            ->where('lp.participant', '=', 'u.id')
            ->orderBy('lp.event')
            ->get();

        return $events;
    }
}
