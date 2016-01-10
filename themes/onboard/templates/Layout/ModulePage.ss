<div class="menu-buffer"></div>
<%-- above class is to compensate for the menu overlaying the content --%>

<div class="module-page">
    <div class="container">
        <h2 id="module-title">$Title</h2>
        <div class="onboard-crumbs">
            $Breadcrumbs
        </div>

        $Content

        <% if CurrentMember %>
            <% include ModuleVideo %>
        <% end_if %>

    </div>
</div>
