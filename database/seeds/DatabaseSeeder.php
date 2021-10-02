<?php

use App\Model\Penjual;
use App\Model\Barang;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(Penjual::class,5)->create()->each(function ($penjual) {
            factory(Barang::class,5)->create(['id_penjual'=>$penjual->id]);
        });
    }
}
