<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::any('/goods', ['as'=> 'goods','uses' => 'HomeController@goods']);
Route::any('/product/{id}', ['as'=> 'product','uses' => 'HomeController@product']);


/*Route::get('/tasks', function () {
    echo 'lol';
   dd() ;  return json_encode(Mission2::all());
});*/