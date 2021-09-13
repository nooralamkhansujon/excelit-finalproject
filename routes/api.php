<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\Auth\AdminLoginController;
use App\Http\Controllers\Admin\Auth\AdminLogOutController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\SoftwareTeamController;
use App\Http\Controllers\Frontend\Auth\LoginController;
use App\Http\Requests\AdminProfileRequest;
use App\Http\Resources\AdminProfileResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return Auth::guard('sanctum')->user();
});


Route::prefix('admin')->middleware(['auth:sanctum'])->group(function () {
    Route::post('logout',[AdminLogOutController::class,'logout']);
    Route::get('/',function(){
       $admin = new AdminProfileResource(Auth::guard('sanctum')->user());
       return response()->json(['admin'=> $admin]);
    });

   Route::post('/profile/update/{admin_id}',[AdminController::class,'updateProfile']);


   //software team routes
    Route::prefix('softwareteam')->group(function () {
        Route::get('/list',[SoftwareTeamController::class,'index']);
        Route::get('/show/{softwareteam_id}',[SoftwareTeamController::class,'show']);
        Route::post('/store',[SoftwareTeamController::class,'store']);
        Route::post('/update/{softwareteam_id}',[SoftwareTeamController::class,'update']);
        Route::delete('/delete/{softwareteam_id}',[SoftwareTeamController::class,'destroy']);
    }); //end software routes

   //software team routes
    Route::prefix('slider')->group(function () {
        Route::get('/list',[SliderController::class,'index']);
        Route::get('/show/{slider_id}',[SliderController::class,'show']);
        Route::post('/store',[SliderController::class,'store']);
        Route::post('/update/{slider_id}',[SliderController::class,'update']);
        Route::delete('/delete/{slider_id}',[SliderController::class,'destroy']);
    }); //end software routes

   //management team routes
    Route::prefix('management')->group(function () {
        Route::get('/list',[SliderController::class,'index']);
        Route::get('/show/{slider_id}',[SliderController::class,'show']);
        Route::post('/store',[SliderController::class,'store']);
        Route::post('/update/{slider_id}',[SliderController::class,'update']);
        Route::delete('/delete/{slider_id}',[SliderController::class,'destroy']);
    }); //end software routes

});

Route::post('/admin/login',[AdminLoginController::class,'login']);



Route::post('/user/login',[LoginController::class,'login']);