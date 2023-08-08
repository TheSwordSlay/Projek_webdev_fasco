<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResepController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', [ResepController::class, 'index']);

Route::get('/dashboard', [ResepController::class, 'showDashboard'])->middleware(['auth', 'verified'])->name('dashboard');
Route::post('/tambahresep', [ResepController::class, 'store'])->middleware(['auth', 'verified'])->name('tambahresep');

Route::get('/add-resep', function () {
    return Inertia::render('AddResep', ["accName" => auth()->user()]);
})->middleware(['auth', 'verified'])->name('add-resep');

Route::get('/resep', function () {
    return Inertia::render('Resep');
});

Route::get('/resep/{resep:id}', [ResepController::class, 'show'])->name('resep');

Route::post('/resep/delete', [ResepController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.resep');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ^yg diatas ini versi react

Route::get('/tes', function () {
    return view('test_tailwind');
});

Route::get('/homepage', function () {
    return view('homepage');
});

require __DIR__.'/auth.php';
