<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Barang extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('barang', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_penjual')->unsigned();
            $table->foreign('id_penjual')->references('id')
                ->on('penjual')->onDelete('cascade')->onUpdate('cascade');
            $table->string('nama_barang',64);
            $table->string('kategori',64);
            $table->string('deskripsi',255)->nullable();
            $table->float('harga',8,0);
            $table->string('foto',255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('barang');
    }
}
