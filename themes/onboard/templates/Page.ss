<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <% base_tag %>
    <title></title>
    $MetaTags(false)
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="#ee3e8b">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="$ThemeDir/css/base-styles.css">
    <link rel="stylesheet" href="$ThemeDir/css/homepage.css">
    <link rel="stylesheet" href="$ThemeDir/css/style.css">

</head>
<body class="$ClassName.LowerCase">
<!--[if lt IE 10]>
<div class="chromeframe">
    <div class="row">
        <div class="col-lg-12">
            <div class="alert alert-warning text-center">
                You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">
                upgrade your browser</a>
                to improve your experience.
            </div>
        </div>
    </div>
</div>
<![endif]-->
<div class="container-fluid" id="site-wrapper">
<% include NavBar %>
    <div class="site-content-wrapper">
        $Layout
        $Form
    </div>
<% include Footer %>

</div>
</body>
</html>
