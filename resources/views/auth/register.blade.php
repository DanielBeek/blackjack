@extends('layout.auth-layout')

@section('title' , 'Register')

@section('content')
    <div class="login/register">
        <div>
            <div id="cardCorner1" class="registerCardColor">
                <p id="letters">q</p>
                <p id="faces">{</p>
            </div>
            <div class="cardMiddle">
                <form method="post" action="{{route('register')}}">
                    @csrf
                    <div class="topCardForm">
                        <p class="registerCardColor">{</p>
                        <p>Register</p>
                    </div>
                    <div id="middleCardForm" class="middleCardFormRegister">
                        <div>
                            <label for="email">E-mail</label>
                            <input type="text" name="email" id="email" placeholder="Blackjack@gmail.com" required>
                            @error('email')
                            {{$message}}
                            @enderror
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Blackjack123" required>
                            @error('password')
                            {{$message}}
                            @enderror
                        </div>
                        <div class="thirdChildRegister">
                            <label for="password_confirmation">Repeat password</label>
                            <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Blackjack123">
                            @error('password')
                            {{$message}}
                            @enderror
                        </div>
                        <div>
                            <button class="registerConfirm" type="submit">Submit</button>
                        </div>
                    </div>
                    <div class="bottomCardForm">
                        <p>Already have an account?</p>
                        <div>
                            <a href="/">Login</a>
                            <p class="registerCardColor">{</p>
                        </div>
                    </div>

                </form>
            </div>
            <div id="cardCorner2" class="registerCardColor">
                <p id="letters">q</p>
                <p id="faces">{</p>
            </div>
        </div>
    </div>
@endsection
