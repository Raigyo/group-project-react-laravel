<!DOCTYPE html>
<html>
<head>
    <title>Thanks for registrating on Event-Dab !</title>
    <style>
        body {
            background-color: #C0B283;
            color: #040312;
            margin: 0px;
            padding: 0px;
            text-align: center;
        }

        h2 {
            border: 1px solid #F4F4F4;
            background-color: #B3A26A;
            margin: 10px;
            padding: 10px;
            border-radius: 10px;
            color: #F4F4F4;
        }

        article {
            background-color: #F4F4F4;
            margin: 10px 10px 50px 10px;
            padding: 10px;
            border: 1px solid #F4F4F4;
            border-radius: 10px;
            background-color: #B3A26A;
        }

        a.button {
            -webkit-appearance: button;
            -moz-appearance: button;
            appearance: button;
            width: 100%;
            text-decoration: none;
            color: #F4F4F4;
            background-color: #B3A26A;
            border: 2px solid #F4F4F4;
            border-radius: 10px;
        }

        ul{
            text-align: left;
        }

    </style>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
</head>

<body>
    <h2>Welcome to EventDab</h2>
    <br />
    <article>
        <p>
            Thanks <b>{{$user['name']}}</b> for signing up to <b>EventDab</b> !
        </p>
        <p>
            Your registered email-id is <b>{{$user['email']}}</b>
        </p>
        <quote>
            We'll hope you'll find the best events around you or you'll share your events with the <i>EventDab
                Community</i> !
        </quote>
        <p class="ul">Here is what you can do on our website:</p>
        <div class="ul">
            <p class="li">&bull; Participate at any events</p>
            <p class="li">You can receive mail notifications to not forget events you are interested</p>
            <p class="li">Create your own event or share one you would like to go</p>
            <p class="li">See all your own events and edit them</p>
        </div>

        <p>See you soon on <b>EventDab!</b></p>
        <a href="#" class="button">Click here to go back to Event Dab!</a>
    </article>
</body>
</html>