<%-- Include Session Message section --%>
<% include buffer %>
<% include Message %>

<div class="container-fluid onboard-modules">
    <div class="container">
        <div class="row" id="modules-text">

            <h2 class="t-main-header text-center">$Title</h2>

            $Content

        </div>

    </div>




<% if $MultipleOf(3) %>
        <br>
<% end_if %>

<% loop $Children %>

    <% if $First %><div class="row"><% end_if %>

        <div class="onboard-module text-center">

            <a href="$Link" ><span class="glyphicon module-icon $iconClass"></span></a>

            <h2>$Title</h2>

            <div class="collapse" id="module-$ID">
                $Content
            </div>




            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true" aria-hidden="true" data-toggle="collapse" data-target="#module-$ID"></span>
            <%--<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#module-$ID">Simple collapsible</button>--%>

        </div>

    <% if $Last %></div><% else_if $Pos == 5 %></div><div class="row"> <% else_if $Pos == 10 %></div><div class="row"> <% end_if %>


<% end_loop %>



</div>

<div class="container" style="min-height: 100px; text-align: center;">
    <a href="" role="button" data-toggle="modal" data-target="#ContactOnBoardModal" class="btn btn-onboard-inverse">enquire now</a>
</div>

