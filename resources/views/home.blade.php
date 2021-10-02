<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#442A6B"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Seken." />
        <meta name="description" content="" />
        <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		function hideURLbar(){ window.scrollTo(0,1); } </script>
        <title>Seken.</title>

        <!-- Fonts -->
    <link
      href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800"rel="stylesheet"/>
    <link
      href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"rel="stylesheet"/>
    <!-- <link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'> -->
    <link href='https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="assets/css/blk-design-system-react.css">
        <link rel="stylesheet" href="assets/css/nucleo-icons.css">
        <link href="assets/css/style.css" rel="stylesheet" type="text/css" media="all" />
        <link href="assets/css/new_style.css" rel="stylesheet" type="text/css" media="all" />
        <link href="assets/css/easy-responsive-tabs.css" rel="stylesheet" type="text/css" media="all" />
        <link href="assets/css/flexslider.css" rel="stylesheet" type="text/css" media="all" />
        <link rel="icon" href="/images/icons/favicon.png" />
        <link rel="apple-touch-icon" href="images/icons/icon-152.png">
        <link href="manifest.json" rel="manifest" />
    </head>
    <body>
        <div id="root"></div>
        <!-- animation-effect -->
        <script src="js/wow.min.js"></script>

        <script src="js/imagezoom.js"></script>
        <script>
          new WOW().init();
        </script>
        <script src="js/app.js"></script>
        <!-- search-scripts -->
          <script src="js/classie.js"></script>
          <script src="js/uisearch.js"></script>
          <script src="js/imagezoom.js"></script>
          <script>
            new UISearch( document.getElementById( 'sb-search' ) );
          </script>
        <!-- //search-scripts -->
        <!-- service Worker -->
        <script>
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/service-worker.js')
              .then(function() {
                console.log('ServiceWorker Registered');
              })
              .catch(function(){
                console.log('Cannot register ServiceWorker ');
              });
            })
          } else {
            console.log("ServiceWorker not supported.")
          }
         </script>
    </body>
</html>
