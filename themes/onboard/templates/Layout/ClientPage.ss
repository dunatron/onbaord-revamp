<%-- Include Session Message section --%>
<% include buffer %>
<% include Message %>

<div class="container">
    <h1>$Title</h1>
    $Content

    <% loop $pullMembers %>
        <% if $LogoVisible %>
            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <% with $Logo.ScaleMaxHeight(150) %>
                    <img class="img-responsive" src="$URL" width="$Width" height="$Height">
                <% end_with %>
            </div>
        <% end_if %>
    <% end_loop %>

</div>