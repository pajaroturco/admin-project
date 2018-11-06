<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('contenido.contenido');
});

Route::resource('categorias', 'CategoriaController')->parameters([
    'categorias' => 'categoria'
])->only(['index','store','update']);

Route::put('categorias/activar/{categoria_uuid}','CategoriaController@activar')->name('categorias.active');
Route::put('categorias/desactivar/{categoria_uuid}','CategoriaController@desactivar')->name('categorias.desactive');

Route::get('categorias/{uuid}','CategoriaController@show')->name('categorias.show');
