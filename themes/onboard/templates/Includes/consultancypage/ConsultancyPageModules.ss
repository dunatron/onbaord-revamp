<div class="container-fluid onboard-modules">

    <div class="container-fluid">
        <% if CurrentMember %>
            <% loop $Children %>
                <%-- If module is the first in the list use this code to offset the col by 1 --%>
                <%--<div class="col-lg-2<% if $First %> col-lg-offset-1<% else_if $Pos == 6 %> col-lg-offset-1<% else_if $Pos == 11 %>--%>
         <%--col-lg-offset-1<% else_if $Pos == 16 %> col-lg-offset-1<% else %><% end_if %> col-sm-6">--%>
                    <div class="onboard-module text-center">

                        <span class="glyphicon module-icon $iconClass" aria-hidden="true"></span>

                        <h2>$Title</h2>

                        <a href="$Link" class="videos-button"><i class="fa fa-play"></i></i>Videos</a>

                        <a href="$Link(test)" class="resources-button"><i class="fa fa-download"></i>Files</a>
                        <%--<a href="$Link(tronsfiles)" class="$LinkingMode(tronsfiles) resources-button"><i class="fa fa-download"></i>Files</a>--%>

                    </div>
                <%--</div>--%>

            <% end_loop %>

        <% else %>
            <h1>Please login to View Module Resources</h1>
        <div class="login-button-wrapper">
            <a href="" data-toggle="modal" data-target="#LoginOnBoardModal">Log - In<i class="fa fa-sign-in"></i></a>
        </div>

        <% end_if %>
    </div>



</div>