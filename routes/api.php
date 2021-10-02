<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// // Homepage
// Route::get('/', 'BarangController@index');

// // Show detail product
// Route::get('/{id}','BarangController@show');

// // post barang
// Route::post('/','BarangController@create');

// // Update Barang
// Route::put('/{id}','BarangController@update');

// // delete barang
// Route::delete('/{id}','BarangController@destroy');

// // Login, Register
// Route::prefix('auth')->group(function () {
//     Route::post('/', 'Auth\LoginController@login');
//     Route::post('/register', 'Auth\RegisterController@register');
// //    Route::post('/{id}/editProfile','');
// });

// // Show product by category
// Route::prefix('category')->group(function () {
//     Route::get('/{kategori}','BarangController@showCategory');
// //    Route::get('/{kategori}/{nama_barang}', 'BarangController@showProductFromCategory');
// });

// // Show Merchant detail
// Route::get('{username}/detail','PenjualController@show');

// // Show all Products from Merchant
// Route::get('{username}','BarangController@showProductsFromMerchant');

// Homepage
Route::get('/penjual', 'PenjualController@index');
// Router untuk Barang byvalue
Route::get('/byvalue', 'BarangController@indexbybetween');
// Router untuk Barang bymin
Route::get('/bymin', 'BarangController@indexbymin');
// Router untuk Barang bymax
Route::get('/bymax', 'BarangController@indexbymax');
// Router untuk Barang byname asc
Route::get('/bynameasc', 'BarangController@indexbynameasc');
// Router untuk Barang bynamedesc
Route::get('/bynamedesc', 'BarangController@indexbynamedesc');
// Router untuk Barang
Route::get('/', 'BarangController@index');
// Show detail product
Route::get('showBarang/{id}','BarangController@findProductById');
// Show detail product
Route::get('findDetail/{id}','BarangController@findDetail');
// Show detail product
Route::get('findStore/{id_penjual}','BarangController@findStore');
// post barang
Route::post('/create','BarangController@create');

Route::get('findSeller/{id}','BarangController@findSeller');
// Update Barang
Route::put('/{id}','BarangController@update');

// delete barang
Route::delete('delete/{id}','BarangController@destroy');
//delete all product
Route::delete('deleteallproduct/{id}','BarangController@destroyallproduct');


// Show product by category
Route::prefix('category')->group(function () {
    Route::get('/{kategori}','BarangController@showCategory');
//    Route::get('/{kategori}/{nama_barang}', 'BarangController@showProductFromCategory');
});
Route::get('kategori/{kategori}','BarangController@showCategory');
// Show Merchant detail
Route::get('{username}','BarangController@showProductsFromMerchant');
//find product by nama_barang
Route::get('find/{product}','BarangController@findProduct');
Route::post('editbarang/{id}','BarangController@editbarang');
Route::put('editsold/{id}','BarangController@editsold');


// Router untuk penjual

Route::get('/penjual','PenjualController@showallpenjual');
// Login, Register
Route::prefix('auth')->group(function () {
    Route::post('/login', 'Auth\LoginController@login');
    Route::post('/register', 'Auth\RegisterController@register');
//    Route::post('/{id}/editProfile','');
});
Route::get('{username}/detail','PenjualController@show');
//edit profile penjual
Route::put('editprofile/{id}','PenjualController@editprofile');
//Delete penjual
Route::delete('deletepenjual/{id}','PenjualController@destroy');
