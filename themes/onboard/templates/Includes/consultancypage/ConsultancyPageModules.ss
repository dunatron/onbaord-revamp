<div class="container-fluid onboard-modules">
<% loop $Children %>
    <%-- If module is the first in the list use this code to offset the col by 1 --%>
    <div class="col-lg-2<% if $First %> col-lg-offset-1<% else_if $Pos == 6 %> col-lg-offset-1<% else_if $Pos == 11 %>
         col-lg-offset-1<% else_if $Pos == 16 %> col-lg-offset-1<% else %><% end_if %> col-sm-6">
        <div class="onboard-module text-center">

            <span class="glyphicon module-icon $iconClass" aria-hidden="true"></span>

            <h2>$Title</h2>

            <a href="$Link" class="videos-button">Videos</a>

            <a href="$Link" class="resources-button">Videos</a>

        </div>
    </div>

<% end_loop %>
</div>