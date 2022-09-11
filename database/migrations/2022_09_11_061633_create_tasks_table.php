<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title', 256);
            $table->string('description', 1024)->nullable();
            $table->unsignedBigInteger('creator_id');
            $table->unsignedBigInteger('roster_id');
            $table->dateTime('started_at', $precision = 0)->nullable();
            $table->dateTime('end_at', $precision = 0)->nullable();
            $table->unsignedTinyInteger('status');
            $table->timestamps();
            $table->foreign('creator_id')->references('id')->on('users');
            $table->foreign('roster_id')->references('id')->on('rosters');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
