<% if $ComingSoon %>
    <div class="container-fluid coming-soon-modules">
    <div class="container">

        <h2 id="Main-Title">$ComingSoonTitle</h2>

        <div class="container">
            <div class="row text-center" id="modules-text">


                <p id="sub-header">$ComingSoonContent</p>

            </div>
        </div>

        <%--<% loop $ComingSoon %>--%>


        <%--<div class="col-lg-2<% if $First %> col-lg-offset-1<% else_if $Pos == 6 %> col-lg-offset-1<% else_if $Pos == 11 %>--%>
        <%--col-lg-offset-1<% else_if $Pos == 16 %> col-lg-offset-1<% else %><% end_if %> col-sm-6">--%>
        <%--<div class="onboard-module text-center">--%>

        <%--<span class="glyphicon module-icon $iconClass" aria-hidden="true"></span>--%>

        <%--<h2>$Title</h2>--%>

        <%--<p>$Content--%>
        <%--</p>--%>


        <%--<a href="$Link">--%>
        <%--<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>--%>
        <%--</a>--%>

        <%--</div>--%>
        <%--</div>--%>

        <%--<% end_loop %>--%>


        <% loop $ComingSoon %>

            <% if $First %>
            <div class="row"><% end_if %>

            <div class="onboard-module text-center">

                <a href="$Link"><span class="glyphicon module-icon $iconClass"></span></a>

                <h2>$Title</h2>

                <div class="collapse" id="module-$ID">
                    <p>$Content.LimitCharacters(300)</p>
                    <%--<a href="$Link" class="read-more">[READ MORE]</a>--%>
                </div>


                <span class="glyphicon glyphicon-plus-sign" aria-hidden="true" aria-hidden="true" data-toggle="collapse"
                      data-target="#module-$ID"></span>
                <%--<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#module-$ID">Simple collapsible</button>--%>

            </div>

            <% if $Last %></div><% else_if $Pos == 5 %></div>
            <div class="row"> <% else_if $Pos == 10 %></div>
            <div class="row"> <% end_if %>


        <% end_loop %>

    </div>

    </div>
<% end_if %>