<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRostersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rosters', function (Blueprint $table) {
            $table->id();
            $table->string('title', 256);
            $table->string('description', 1024)->nullable();
            $table->unsignedBigInteger('creator_id');
            $table->unsignedBigInteger('board_id');
            $table->unsignedTinyInteger('status');
            $table->timestamps();
            $table->foreign('creator_id')->references('id')->on('users');
            $table->foreign('board_id')->references('id')->on('boards');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rosters');
    }
}
