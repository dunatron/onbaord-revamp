

<%--<nav class="navbar navbar-onboard navbar-fixed-top">--%>
    <%--<% include TopBar %>--%>
    <%--<div class="container">--%>
        <%--<!-- Brand and toggle get grouped for better mobile display -->--%>
        <%--<div class="navbar-header">--%>
            <%--<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">--%>
                <%--<span class="sr-only">Toggle navigation</span>--%>
                <%--<span class="icon-bar"></span>--%>
                <%--<span class="icon-bar"></span>--%>
                <%--<span class="icon-bar"></span>--%>
            <%--</button>--%>
        <%--</div>--%>

        <%--<!-- Collect the nav links, forms, and other content for toggling -->--%>
        <%--<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">--%>
            <%--<ul class="nav navbar-nav navbar-right">--%>
                <%--<% loop Menu(1) %>--%>
                    <%--<li><a class="$LinkingMode" href="$Link" title="$Go to the $Title page">$MenuTitle</a></li>--%>
                <%--<% end_loop %>--%>
                <%--<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>--%>
                <%--<li><a href="#">Link</a></li>--%>
                <%--<li class="dropdown">--%>
                    <%--<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>--%>
                    <%--<ul class="dropdown-menu">--%>
                        <%--<li><a href="#">Action</a></li>--%>
                        <%--<li><a href="#">Another action</a></li>--%>
                        <%--<li><a href="#">Something else here</a></li>--%>
                        <%--<li role="separator" class="divider"></li>--%>
                        <%--<li><a href="#">Separated link</a></li>--%>
                    <%--</ul>--%>
                <%--</li>--%>
            <%--</ul>--%>
        <%--</div><!-- /.navbar-collapse -->--%>
    <%--</div><!-- /.container-fluid -->--%>
<%--</nav>--%>




<nav class="navbar navbar-fixed-top onboard-nav">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="$AbsoluteBaseURL">
                <img src="$ThemeDir/images/onBoard_Logo_250x64.png" class="img-responsive">
            </a>
        </div>
        <div class="collapse navbar-collapse">

            <ul class="nav navbar-nav pull-left">

                <li id="social-item-holder">
                    <a href="#" id="social-item-link"><i class="fa fa-linkedin"></i></a>
                </li>
                <li id="social-item-holder">
                    <a href="#" id="social-item-link"><i class="fa fa-facebook"></i></a>
                </li>

                <li class="dropdown" id="social-item-holder">
                    <a href="#"  id="social-item-link" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i>
                        <span class="caret"></span></a>
                    <ul class="dropdown-menu">

                        <% if CurrentMember %>
                            <% loop CurrentMember %>
                                <li><a href="$Link">Edit Profile <i class="fa fa-pencil-square-o"></i></a></li>
                                <li><a href="Security/logout">Log - Out <i class="fa fa-sign-out"></i></a></li>
                            <% end_loop %>
                        <% else %>
                            <li><a href="Security/login">Log - In<i class="fa fa-sign-in"></i></a></li>
                        <% end_if %>
                    </ul>
                </li>
            </ul>

            <ul class="nav navbar-nav pull-right">
                <% loop $Menu(1) %>
                    <li><a class="$LinkingMode" href="$Link" title="$Go to the $Title page">$MenuTitle</a></li>
                <% end_loop %>

            </ul>

        </div><!--/.nav-collapse -->
    </div>
</nav>