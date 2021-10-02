@extends('layouts.app')

@section('content')
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <body>
        <div id="about"></div>
        <!-- <div id="footer"></div> -->
    </body>
    <script src="/js/app.js"></script>
</html>
@endsection
