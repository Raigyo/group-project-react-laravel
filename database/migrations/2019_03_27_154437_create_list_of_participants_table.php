<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListOfParticipantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('list_of_participants', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->integer('event');
            $table->integer('participant');
            $table->foreign('event')->references('id')->on('events');
            $table->foreign('participant')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('list_of_participants');
    }
}
