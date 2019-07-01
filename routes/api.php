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

Route::post("/login", "AuthController@login");
Route::post('/refresh', 'AuthController@refresh');
Route::post('/logout', 'AuthController@logout');


Route::group(['middleware' => 'jwt.auth'], function () {

    Route::get('/recipe', 'RecipeController@getRecipes');
    Route::get('/recipe/{id}', 'RecipeController@getRecipe');
    Route::post('/recipe', 'RecipeController@createRecipe');
    Route::put('/recipe/{id}', 'RecipeController@updateRecipe');
    Route::delete('/recipe/{id}', 'RecipeController@deleteRecipe');
});