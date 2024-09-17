@extends('layout.layout')

@vite('resources/js/app.js')

@section('title' , 'blackjack')

@section('content')
    <div class="main">
        <div>
            <div>
                <div id="dealer" class="dealer"></div>
                <div id="player" class="player"></div>
            </div>
            <div class="player-buttons">
                <input type="button" id="hit" value="Hit">
                <input type="button" id="stand" value="Stand">
                <input type="button" id="doubleDown" value="Double-Down">
                <input type="button" id="split" value="Split">
            </div>
        </div>
    </div>
@endsection
