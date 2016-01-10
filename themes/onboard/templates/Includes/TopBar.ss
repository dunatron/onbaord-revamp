<div class="TopBar">
    <div class="container">
        <div class="row">
            <a class="navbar-brand" href="#">
                <img src="$ThemeDir/images/onBoard_Logo_250x64.png" class="img-responsive">
            </a>

            <div class="social-icons pull-right">
                <i class="fa fa-linkedin"></i>
                <i class="fa fa-facebook"></i>
                <% if CurrentMember %>
                    <% loop CurrentMember %>
                        | <span>$Name</span> | <span><a href="$Link">Edit Profile</a></span> | <a href="Security/logout"><i class="fa fa-sign-out"></i></a>
                    <% end_loop %>
                <% else %>
                    <a href="Security/login"><i class="fa fa-sign-in"></i></a>
                <% end_if %>

            </div>
        </div>
    </div>


</div>
