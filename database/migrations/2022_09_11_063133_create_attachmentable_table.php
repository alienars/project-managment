<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAttachmentableTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attachmentable', function (Blueprint $table) {
            $table->unsignedBigInteger('attachment_id');
            $table->unsignedBigInteger('attachmentable_id');
            $table->string('attachmentable_type',64);
            $table->primary(array('attachment_id','attachmentable_id'));
            $table->foreign('attachment_id')->references('id')->on('attachments');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attachmentable');
    }
}
