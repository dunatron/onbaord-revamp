<div class="container-fluid holder-wrapper">
    <div class="container">
        <h2 class="t-main-header text-center">$Title</h2>

        <div class="onboard-crumbs">
            $Breadcrumbs
        </div>
        <div class="list-wrapper">
            <p id="list-desc">List of Videos for $Title</p>
            <div class="onboard-line"></div>
            <% loop $ModuleVideos %>
                <div class="row">
                    <div class="col-md-3 video-title-wrapper">
                        <a href="$Link">$Title</a>
                    </div>
                    <div class="col-md-6 video-description-wrapper">
                        $Description
                    </div>
                    <div class="col-md-3 video-play-wrapper">
                        <a href="$Link"><i class="fa fa-play"></i></a>
                    </div>
                </div>

            <% end_loop %>
        </div>
    </div>
</div>

