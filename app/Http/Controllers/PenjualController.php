<?php


namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use App\Model\Penjual;
use Illuminate\Http\Request;

class PenjualController extends Controller
{
    public function index() {
        $penjual = Penjual::all();
        return response()->json($penjual);
    }
    public function show($username)
    {
        $penjual = Penjual::where('username','LIKE',$username)->get();
        return response()->json($penjual);
    }
    public function editprofile($id,Request $request)
    {          
        if($request->nama == null)
        {
            $res['nama'] = false;
            return response($res,500);
        }
              
        if($request->kontak == null)
        {
            $res['kontak'] = false;
            return response($res,500);
        }
               
        if($request->password == null)
        {
            $res['password'] = false;
            return response($res,500);
        }
        
        
        $hasher = app()->make('hash');
        $penjual= Penjual::find($id);
        $penjual->nama = $request->nama;
        $penjual->kontak = $request->input('kontak');
        $penjual->password = $hasher->make($request->input('password'));
        $penjual->save();
        return response()->json($penjual);  
       
    }
    public function showallpenjual() {
        $penjual = Penjual::all();
        return response()->json($penjual);
    }

    public function destroy($id)
    {
        $penjual = Penjual::find($id);
        $penjual->delete();
        return response()->json('penjual removed successfully');
    }
}
