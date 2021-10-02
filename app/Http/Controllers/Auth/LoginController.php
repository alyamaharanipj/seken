<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;
use App\Model\Penjual;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    public function login(Request $request)
    {

//        $rules = [
//            'username' => 'required',
//            'password' => 'required'
//        ];
//
//        $customMessages = [
//            'required' => ':attribute tidak boleh kosong'
//        ];
//
//        try {
//            $this->validate($request, $rules, $customMessages);
//        } catch (ValidationException $ex) {
//            $res['status'] = false;
//            $res['message'] = $ex->getMessage();
//            return response($res, 401);
//        }

        $username    = $request->input('username');
        try {
            $login = Penjual::where('username', $username)->first();
            if ($login) {
                if ($login->count() > 0) {
                    if (Hash::check($request->input('password'), $login->password)) {
                        try {
                            $token = sha1($login->username.time());

                            $create_token = Penjual::where('username', $login->username)->update(['token' => $token]);
                            $res['status'] = true;
                            $res['message'] = 'Success login';
                            $res['data'] =  $login;
                            $res['token'] =  $token;

                            return response($res, 200);

                        } catch (\Illuminate\Database\QueryException $ex) {
                            $res['password'] = false;

                            $res['status'] = false;
                            $res['message'] = $ex->getMessage();
                            return response($res, 500);
                        }
                    } else {
                        $res['password'] = false;

                        $res['status'] = false;
                        $res['message'] = 'Wrong Username / email / password';
                        return response($res, 401);
                    }
                } else {
                    $res['password'] = false;
                    $res['status'] = false;
                    $res['message'] = 'Wrong Username / email / password';
                    return response($res, 401);
                }
            } 
            else {
                $res['username'] = false;
                $res['status'] = false;
                $res['message'] = 'Wrong Username / email / password';
                return response($res, 401);
            }
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['status'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
    }

}
