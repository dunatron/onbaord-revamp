<div class="container-fluid onboard-modules">
    <div class="container">
        <div class="row text-center" id="modules-text">
            <hr>
            <h2>onBoard Management System</h2>
            <hr>
        </div>
    </div>

    <% loop $Children %>
        <%-- If module is the first in the list use this code to offset the col by 1 --%>
        <% if $First %>
            <div class="col-lg-2 col-lg-offset-1 col-sm-6">
                <div class="onboard-module text-center">

                    <span class="glyphicon module-icon $iconClass" aria-hidden="true"></span>

                    <h2>$Title</h2>

                    <p>$Content
                    </p>

                    <a class="btn btn-module-transparent" href="$Link" role="button">Link</a>
                </div>
            </div>

        <% else_if $Pos == 6 %>
            <%-- if the module is the sixth item in the list run this code --%>
            <div class="col-lg-2 col-lg-offset-1 col-sm-6">
                <div class="onboard-module text-center">
                    <span class="glyphicon module-icon $iconClass" aria-hidden="true"></span>

                    <h2>$Title</h2>

                    <p>$Content
                    </p>

                    <a class="btn btn-module-transparent" href="$Link" role="button">Link</a>
                </div>
            </div>

        <% else %>
            <%-- if the module is not the first or sixth module in the list run this code --%>
            <div class="col-lg-2 col-sm-6">
                <div class="onboard-module text-center">
                    <span class="glyphicon module-icon $iconClass" aria-hidden="true"></span>

                    <h2 style="font-family: GustanBold;">$Title</h2>

                    <p>$Content
                    </p>

                    <a class="btn btn-module-transparent" href="$Link" role="button">Link</a>
                </div>
            </div>

        <% end_if %>

    <% end_loop %>

</div>

