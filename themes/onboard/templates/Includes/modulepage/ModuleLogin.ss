<div class="container">


    <% if CurrentMember %>
        <% loop CurrentMember %>
            <h1>You Are Currently Logged in as</h1>
            <h2 id="current-member">$Name</h2>
            <a href="$Link">Edit Profile <i class="fa fa-pencil-square-o"></i></a>
            <a href="Security/logout">Log in as someone else <i class="fa fa-sign-out"></i></a>
        <% end_loop %>
    <% else %>
        <h1>Please login to View the Tutorials</h1>
        <a href="Security/login">Log - In<i class="fa fa-sign-in"></i></a>
    <% end_if %>

</div>