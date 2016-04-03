<div class="module-page">

    <%-- Include Session Message section --%>
    <% include Message %>

    <div class="container">
        <div class="Module-Header-Row row">
            <div class="col-md-6">
                <h2 id="module-title">$Title</h2>

                <div class="onboard-crumbs">
                    $Breadcrumbs
                </div>
            </div>
            <div class="col-md-6">
                $ModuleSearchForm
            </div>
        </div>
        <div class="module-content-wrapper">
            $Content
        </div>

    </div>

    <div class="container-fluid">
        <% if CurrentMember %>
            <%--<% include ModuleVideo %>--%>
            <% include ModuleScreenshot %>

        <% else %>
            <% include ModuleLogin %>
        <% end_if %>
    </div>

</div>
