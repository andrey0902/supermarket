<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mission2;
use App\Http\Requests;

class HomeController extends Controller
{
    public function goods(){
        $tempData = Mission2::all();
        $fetchData = array();
        foreach ($tempData as $val){
            $fetchData[] = $val;
        }
        return json_encode($fetchData);

       /* return dd(Mission2::all());*/
    }
    public function product($id){
        return json_encode(Mission2::find($id));
        /* return dd(Mission2::all());*/
    }
}
