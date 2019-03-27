<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// ------ ROUTE AUTH ------
//login
Route::post('/login', 'AuthController@login');
//logout
Route::post('/logout', 'AuthController@logout');
//get register
Route::post('/register', 'AuthController@register');

// ------ ROUTE EVENT ------
//get pastEvent
Route::get('/pastEvent', 'EventController@past')->name('event.past');
//get events
Route::get('/events', 'EventController@all')->name('event.all');
//get event/:id
Route::get('/event/{id}', 'EventController@show')->name('event.show');
//update event/:id
Route::put('/event/{id}', 'EventController@update')->name('event.update');
//post event
Route::post('/event', 'EventController@create')->name('event.create');
