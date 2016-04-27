<div class="container-fluid onboard-modules">
    <div class="container">
        <div class="row text-center" id="modules-text">

            <h2 class="t-main-header">onBoard Management System</h2>

        </div>
    </div>


    <% if $MultipleOf(3) %>
        <br>
    <% end_if %>

    <%--<% loop $Children %>--%>
        <%-- If module is the first in the list use this code to offset the col by 1 --%>
        <%--<div class="col-lg-2<% if $First %> col-lg-offset-1<% else_if $Pos == 6 %> col-lg-offset-1<% else_if $Pos == 11 %>--%>
         <%--col-lg-offset-1<% else_if $Pos == 16 %> col-lg-offset-1<% else %><% end_if %> col-sm-6">--%>
            <%--<div class="onboard-module text-center">--%>

                <%--<span class="glyphicon module-icon $iconClass"></span>--%>

                <%--<h2>$Title</h2>--%>

                <%--<div class="collapse" id="module-$ID">--%>
                    <%--<p>$Content.LimitCharacters(300)</p>--%>
                <%--</div>--%>




                    <%--<span class="glyphicon glyphicon-plus-sign" aria-hidden="true" aria-hidden="true" data-toggle="collapse" data-target="#module-$ID"></span>--%>
                <%--<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#module-$ID">Simple collapsible</button>--%>

            <%--</div>--%>
        <%--</div>--%>

    <%--<% end_loop %>--%>



    <% loop $Children %>

        <% if $First %><div class="row"><% end_if %>

            <div class="onboard-module text-center">

                <a href="$Link" ><span class="glyphicon module-icon $iconClass"></span></a>

                <h2>$Title</h2>

                <div class="collapse" id="module-$ID">
                    <p>$Content.LimitCharacters(300)</p>
                    <a href="$Link" class="read-more">[READ MORE]</a>
                </div>




                <span class="glyphicon glyphicon-plus-sign" aria-hidden="true" aria-hidden="true" data-toggle="collapse" data-target="#module-$ID"></span>
                <%--<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#module-$ID">Simple collapsible</button>--%>

            </div>

        <% if $Last %></div><% else_if $Pos == 5 %></div><div class="row"> <% else_if $Pos == 10 %></div><div class="row"> <% end_if %>


    <% end_loop %>



</div>

