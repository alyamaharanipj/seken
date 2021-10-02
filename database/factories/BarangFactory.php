<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Barang;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Barang::class, function (Faker $faker) {
    return [
        'nama_barang' => $faker->word,
        'kategori' => $faker->word,
        'deskripsi' => $faker->sentence,
        'harga' => $faker->numberBetween(5000,5000000),
        'foto' => $faker->imageUrl(),
    ];
});
