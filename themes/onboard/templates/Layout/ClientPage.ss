<%-- Include Session Message section --%>
<% include buffer %>
<% include Message %>

<div class="container">
    <h1>$Title</h1>
    $Content

    <div class="clients-wrapper">
        <% loop $pullMembers %>
            <% if $LogoVisible %>
                <div class="client-panel col-lg-6 col-md-6 col-sm-6 col-xs-12">

                    $ClientName
                    <% with $Logo.ScaleMaxHeight(150) %>
                        <img class="img-responsive" src="$URL" width="$Width" height="$Height">
                    <% end_with %>
                    $Website
                </div>
            <% end_if %>
        <% end_loop %>
    </div>


</div>