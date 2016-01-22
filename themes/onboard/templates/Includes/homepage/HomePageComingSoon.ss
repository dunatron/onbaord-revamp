<% if $ComingSoon %>
    <div class="container-fluid coming-soon-modules">
        <div class="container">
            <div class="row text-center" id="modules-text">
                <hr>
                <h2>In Development</h2>

                <p id="sub-header">The team at onBoard can support you boarding school through confidential consultancy
                    work. The onBoard team specialise in</p>
                <hr>
            </div>
        </div>

        <% loop $ComingSoon %>


            <div class="col-lg-2<% if $First %> col-lg-offset-1<% else_if $Pos == 6 %> col-lg-offset-1<% else_if $Pos == 11 %>
         col-lg-offset-1<% else_if $Pos == 16 %> col-lg-offset-1<% else %><% end_if %> col-sm-6">
                <div class="onboard-module text-center">

                    <span class="glyphicon module-icon $iconClass" aria-hidden="true"></span>

                    <h2>$Title</h2>

                    <p>$Content
                    </p>


                    <a href="$Link">
                        <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                    </a>

                </div>
            </div>

        <% end_loop %>

    </div>
<% end_if %>