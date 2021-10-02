<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Model\Penjual;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    public function register(Request $request)
    {
        $rules = [
            'username' => 'required',
            'nama' => 'required',
            'kontak' => 'required',
            'email' => 'required',
            'password' => 'required',
        ];

        $customMessages = [
            'required' => 'Please fill attribute :attribute'
        ];
        
        $regis = Penjual::where('username', $request->username);
        if ($regis->count() > 0) {
            $res['username'] = false;
            return response($res, 500);
        }
        $regis = Penjual::where('email', $request->email);
        if ($regis->count() > 0) {
            $res['email'] = false;
            return response($res, 500);
        }
        $regis = Penjual::where('kontak', $request->kontak);
        if ($regis->count() > 0) {
            $res['kontak'] = false;
            return response($res, 500);
        }



        try {
            $this->validate($request, $rules, $customMessages);
        } catch (ValidationException $ex) {
            $res['status'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 406);
        }

        try {
            $hasher = app()->make('hash');
            $username = $request->input('username');
            $nama = $request->input('nama');
            $kontak = $request->input('kontak');
            $email = $request->input('email');
            $password = $hasher->make($request->input('password'));

            $save = Penjual::create([
                'username'=> $username,
                'nama' => $nama,
                'kontak' => $kontak,
                'email'=> $email,
                'password'=> $password,
                'token'=> ''
            ]);
            $res['status'] = true;
            $res['message'] = 'Registration success!';
            return response($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['status'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }

    public function getUser()
    {
        $user = Penjual::all();
        if ($user) {
            $res['status'] = true;
            $res['message'] = $user;

            return response($res);
        }else{
            $res['status'] = false;
            $res['message'] = 'Cannot find user!';

            return response($res);
        }
    }
}
