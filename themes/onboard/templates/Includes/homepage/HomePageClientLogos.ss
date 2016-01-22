<!-- Begin page content -->
<div class="client-logo-wrapper">
    <div class="container client-logo-header">
        <hr>
        <hr>
        <h2 class="text-center">Our Clients</h2>
        <p class="text-center">Scroll below for all boarding houses that are 'onBoard'</p>
    </div>

    <div class="client-logo-scroller">
        <div class="container" id="main-content">
            <div class="row">

                <% loop $pullMembers %>
                    <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                        <h1>$FirstName </h1>

                        <% with $Logo.ScaleMaxWidth(250) %>
                            <img class="img-responsive" src="$URL" width="$Width" height="$Height">
                        <% end_with %>
                    </div>
                <% end_loop %>


                <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                    <h1>ASDF </h1>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <h1>ASDF </h1>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <h1>ASDF </h1>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <h1>ASDF </h1>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <h1>ASDF </h1>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <h1>ASDF </h1>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <h1>ASDF </h1>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <h1>ASDF </h1>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <h1>ASDF </h1>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <h1>ASDF </h1>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <h1>ASDF </h1>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <h1>ASDF </h1>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <h1>ASDF </h1>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                    <h1>ASDF </h1>
                </div>
            </div>
        </div>
    </div>
</div>
