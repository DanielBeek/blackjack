@extends('layout.auth-layout')

@section('title' , 'Login')

@section('content')
    <div class="login/register">
        <div>
            <div id="cardCorner1">
                <p id="letters">k</p>
                <p id="faces">}</p>
            </div>
            <div class="cardMiddle">
                <form method="post" action="{{route('login')}}">
                    @csrf
                    <div class="topCardForm">
                        <p>}</p>
                        <p>Login</p>
                    </div>
                    <div id="middleCardForm" class="middleCardFormLogin">
                        <div>
                            <label for="email">E-mail</label>
                            <input type="text" name="mail" id="email" placeholder="Blackjack@gmail.com">
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Blackjack123">
                        </div>
                        <div>
                            <button class="loginConfirm"  type="submit">Submit</button>
                        </div>
                    </div>
                    <div class="bottomCardForm">
                        <p>Don't have an account yet?</p>
                        <div>
                            <a href="/register">Register</a>
                            <p>}</p>
                        </div>
                    </div>
                </form>
            </div>
            <div id="cardCorner2">
                <p id="letters">k</p>
                <p id="faces">}</p>
            </div>
        </div>
    </div>
@endsection
