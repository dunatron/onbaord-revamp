<div class="module-page">

    <div class="container">
        <div class="Module-Header-Row row">
            <div class="col-md-6">
                <h2 id="module-title">$Title</h2>

                <div class="onboard-crumbs">
                    $Breadcrumbs
                </div>
            </div>
            <div class="col-md-6">
                <div class="search-bar">
                    $SearchForm
                </div>
            </div>
        </div>


        <hr>
        $Content
        <hr>
    </div>

    <div class="container-fluid">
        <% if CurrentMember %>
            <%--<% include ModuleVideo %>--%>
            <% include ModuleScreenshot %>

        <% else %>
            <% include PleaseLogin %>
        <% end_if %>
    </div>

</div>
