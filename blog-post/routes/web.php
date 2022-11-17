<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

Route::get('/dashboard', function () {
    $posts = App\Models\Post::all();
    foreach($posts as $post) {
        if($post->user) {
            $post->username = $post->user->name;
        }
    }
    return view('dashboard', ["posts" => $posts]);
})->middleware(['auth'])->name('dashboard');

Route::get('/test', function () {
    $posts = App\Models\Post::all();
    return view('test', ["posts" => $posts]);
});

require __DIR__.'/auth.php';
Route::view('{any}','dashboard')
    ->middleware('auth')
    ->where('any','.*');