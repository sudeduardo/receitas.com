<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    private $jwtAuth;

    public function __construct(JWTAuth $JWTAuth)
    {
        $this->jwtAuth = $JWTAuth;
    }

    public function login(Request $request)
    {

        $credentials = request(['email', 'password']);

        if (!$token = $this->jwtAuth->attempt($credentials)) {
            return response()->json(['error' => 'invalid_credentials'], 401);
        }

        return response()->json(compact('token'));

    }

    public function logout()
    {
        $token = $this->jwtAuth->getToken();
        $this->jwtAuth->invalidate($token);
        return response()->json(compact($token));
    }

    protected function refresh()
    {
        $token = $this->jwtAuth->getToken();
        $this->jwtAuth->refresh($token);
        return response()->json("token refresh");
    }


}
