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



                <% with $SiteConfig %>
                    <% if LinkedInLink %><li id="social-item-holder">
                        <a href="$SiteConfig.LinkedInLink" target="_blank" id="social-item-link"><i
                                class="fa fa-linkedin"></i></a>
                    </li><% end_if %>
                    <% if FacebookLink %><li id="social-item-holder">
                        <a href="$SiteConfig.FacebookLink" target="_blank" id="social-item-link"><i
                                class="fa fa-facebook"></i></a>
                    </li><% end_if %>
                <% end_with %>




                <li class="dropdown">
                    <a href="#" id="social-item-link" class="dropdown-toggle" data-toggle="dropdown" role="button"
                       aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i>
                        <span class="caret"></span></a>
                    <ul class="dropdown-menu">

                        <% if CurrentMember %>
                            <% loop CurrentMember %>
                                <li><h2 id="current-member">$Name</h2></li>
                                <li><a href="$Link">Edit Profile <i class="fa fa-pencil-square-o"></i></a></li>
                                <li><a href="Security/logout">Log - Out <i class="fa fa-sign-out"></i></a></li>
                            <% end_loop %>
                        <% else %>
                        <li><a  href="" role="button"  data-toggle="modal" data-target="#LoginOnBoardModal">Log - In<i class="fa fa-sign-in"></i></a></li>
                        <% end_if %>
                    </ul>
                </li>
            </ul>

            <ul class="nav navbar-nav pull-right">
                <% loop $Menu(1) %>
                    <% if $ClassName != "ConsultancyPage" || $ClassName != "ConsultancyPage" %>
                        <% if $ClassName != "AboutUsPage" || $ClassName != "AboutUsPage" %>
                            <% if $ClassName != "TestimonialsPage" || $ClassName != "TestimonialsPage" %>
                                <% if $ClassName != "ClientPage" || $ClassName != "ClientPage" %>
                                    <% if $ClassName != "ResourcePage" || $ClassName != "ResourcePage" %>
                                        <li><a class="$LinkingMode" href="$Link"
                                               title="$Go to the $Title page">$MenuTitle</a></li>
                                    <% end_if %>
                                <% end_if %>
                            <% end_if %>
                        <% end_if %>
                    <% end_if %>
                <% end_loop %>
                <%-- Our Company Drop Down --%>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Our Company</i>
                        <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <% loop $Menu(1) %>
                            <% if $ClassName == "AboutUsPage" || $ClassName == "TestimonialsPage" || $ClassName == "ClientPage" %>
                                <li><a class="$LinkingMode" href="$Link" title="$Go to the $Title page">$MenuTitle</a>
                                </li>
                            <% end_if %>
                        <% end_loop %>
                    </ul>
                </li>
                <%-- Services Drop Down --%>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Services</i>
                        <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                    <li><a href="$AbsoluteBaseURL#modules-text" title="Go To Modules">OnBoard Management System</a>
                        <% loop $Menu(1) %>
                            <% if $ClassName == "ConsultancyPage" || $ClassName == "ResourcePage" %>
                                <li><a class="$LinkingMode" href="$Link" title="$Go to the $Title page">$MenuTitle</a>
                                </li>
                            <% end_if %>
                        <% end_loop %>
                        <li><a  href="" role="button"  data-toggle="modal" data-target="#ContactOnBoardModal">Contact Us</a></li>
                    </ul>
                </li>

            </ul>

        </div>
        <!--/.nav-collapse -->
    </div>
</nav>