<?php


namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class Penjual extends Model {

    protected $table = 'penjual';
    protected $fillable = [
        'username','nama','email','password','token','kontak',
    ];

    protected $hidden = [
        'password', 'token'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
