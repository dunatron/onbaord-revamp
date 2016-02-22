<div class="container-fluid holder-wrapper">
    <div class="container">
        <h2>$Title</h2>
        <div class="onboard-crumbs">
            $Breadcrumbs
        </div>
        <div class="list-wrapper">
            <p id="list-desc">List of Files for $Title</p>
            <% loop $ModuleResources %>
                <a href="$Link">$Title</a>
                <div class="description">$Description</div>
            <% end_loop %>
        </div>
    </div>
</div>

