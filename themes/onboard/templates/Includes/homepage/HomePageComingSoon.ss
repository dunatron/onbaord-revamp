<h2 id="Main-Title">$ComingSoonTitle</h2>
<% if $ComingSoon %>
    <div class="container-fluid coming-soon-modules">



    <% loop $ComingSoon %>

        <% if $First %><div class="row"><% end_if %>

            <div class="onboard-module text-center">

                <a href="$Link" ><span class="glyphicon module-icon $iconClass"></span></a>

                <h2>$Title</h2>

                <div class="collapse" id="module-$ID">
                    <p>$Content.LimitCharacters(300)</p>
                    <%--<a href="$Link" class="read-more">[READ MORE]</a>--%>
                </div>




                <span class="glyphicon glyphicon-plus-sign" aria-hidden="true" aria-hidden="true" data-toggle="collapse" data-target="#module-$ID"></span>
                <%--<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#module-$ID">Simple collapsible</button>--%>

            </div>

        <% if $Last %></div><% else_if $Pos == 5 %></div><div class="row"> <% else_if $Pos == 10 %></div><div class="row"> <% end_if %>


    <% end_loop %>



    </div>
<% end_if %>