<?php


namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Barang extends Model {
    protected $table = 'barang';
    protected $fillable = [
        'nama_barang','kategori','deskripsi','harga','foto','id_penjual',
    ];
}
