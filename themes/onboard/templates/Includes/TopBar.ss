<div class="TopBar">
    <div class="container">
        <div class="row">
            <a class="navbar-brand" href="#">
                <img src="$ThemeDir/images/onBoard_Logo_250x64.png" class="img-responsive">
            </a>

            <div class="social-icons pull-right">
                <i class="fa fa-linkedin"></i>
                <i class="fa fa-facebook"></i>
                <i class="fa fa-sign-in"></i>
            </div>

            <p class="memberLinks">
                <% if CurrentMember %>
                    <% loop CurrentMember %>
                        You are logged in as $Name | <a href="$Link">Edit Profile</a> | <a href="Security/logout">Logout</a>
                    <% end_loop %>
                <% else %>
                    <a href="Security/login">Login</a> | <a href="$Page(register).Link">Register</a>
                <% end_if %>
            </p>
        </div>
    </div>


</div>
