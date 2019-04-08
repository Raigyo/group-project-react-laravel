
<!DOCTYPE html>
    <html lang="{{ app()->getLocale() }}">
    <head>
    <link rel="icon" href="./public/images/pandadab.ico" />
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>EventDab</title>
        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        
    </head>
    <body>
        <div id="example"></div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
    </html>
