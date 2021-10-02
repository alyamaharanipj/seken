<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Penjual;
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

$factory->define(Penjual::class, function (Faker $faker) {
    return [
        'username' => $faker->userName,
        'nama' => $faker->name,
        'kontak' => $faker->phoneNumber,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'token' => $faker->sha256,
        'remember_token' => $faker->sha256,
    ];
});
