<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'name',
        'date_event',
        'author',
        'description',
        'reminder',
        'imageURL'
    ];

    public function author(){
        return $this->belongsTo('App\User', 'author');
    }

    public function users(){
        return $this->belongsToMany('App\User', 'listOfParticipant');
    }

    public function pastEvent(){
        $events = DB::table('events e', 'users u')
            ->select('u.username', 'e.name', 'e.date_event', 'e.description')
            ->where('u.id', '=', 'e.author','AND', 'e.date_event', '<','NOW()')
            ->orderBy('e.date_event', 'desc')
            ->get();

        return $events;
    }
}
