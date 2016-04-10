<!-- Begin page content -->
<div class="client-logo-wrapper">
    <div class="container client-logo-header">
        <h2 class="text-center">Our Clients</h2>
        <p class="text-center">Scroll below for all boarding houses that are 'onBoard'</p>
    </div>

    <div class="client-logo-scroller">
        <div class="container" id="main-content">
            <div class="row">
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
        </div>
    </div>
</div>
