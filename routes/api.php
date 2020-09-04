<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;



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



Route::apiResource('projects','ProjectController');

// Route::post('/create-user', function (Request $request) {
//     try {
//         $request['password'] = Hash::make($request['password']);
//         App\User::create($request->all());
//     } catch (Exception $ex) { 
//         abort(500, 'Registration Failed. Please Try Again.');
//     }
// });

Route::post('register', 'UserController@register');
Route::get('open', 'DataController@open');
Route::post('login', 'UserController@authenticate');

Route::apiResource('users','UserController');

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('me', 'UserController@getAuthenticatedUser');
    Route::get('closed', 'DataController@closed');
});



Route::middleware('auth')->get('/user', function (Request $request) {
    return $request->user();
});
