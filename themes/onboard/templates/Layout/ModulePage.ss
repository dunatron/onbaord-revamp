

<div class="module-page">

    <div class="container">
        <h2 id="module-title">$Title</h2>
        <div class="onboard-crumbs">
            $Breadcrumbs
        </div>

        <hr>
        $Content
        <hr>
    </div>

    <div class="container-fluid">
        <% include ModuleScreenshot %>

        <% if CurrentMember %>
            <% include ModuleVideo %>
        <% end_if %>
    </div>

</div>
