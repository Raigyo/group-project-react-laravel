<!DOCTYPE html>
<html>
<head>
    <title>Reminder on EventDab</title>
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
    <h2>Hello {{$user['name']}} !</h2>
    <br />
    <img src="https://zupimages.net/up/19/15/xpo1.png" alt="logo EventDab" width="100px" height="100px">
    <article>
        <p>
         This is a reminder for an event you're interested to.
        </p>
        <p>
            We'll hope you'll find the best events around you or you'll share your events with the <i>EventDab
                Community</i> !
        </p>
        <p>See you soon on <b>EventDab!</b></p>
        <a href="#" class="button">Click here to go back to Event Dab!</a>
    </article>
</body>
</html>