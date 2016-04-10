<%-- Include Session Message section --%>
<% include buffer %>
<% include Message %>

<div class="container">
    <h1>$Title</h1>
    $Content

    <div class="clients-wrapper">
        <% loop $pullMembers %>
            <% if $LogoVisible %>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="client-panel">
                        <h2>$ClientName</h2>
                        <% with $Logo.ScaleMaxHeight(150) %>
                            <img class="img-responsive" src="$URL" width="$Width" height="$Height">
                        <% end_with %>
                        <h2>$Website</h2>
                    </div>
                </div>
            <% end_if %>
        <% end_loop %>
    </div>


</div>