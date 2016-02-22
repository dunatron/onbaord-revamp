
<div class="container video-wrapper">
    <% with $Video %>
        <div class="row video-strip">

            <div class="col-md-6">
                <!-- 16:9 aspect ratio -->
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="$VideoURL" allowfullscreen></iframe>
                </div>
            </div>

            <div class="col-md-6">
                <h2 class="text-center">$Title</h2>
                <p>$Description</p>
            </div>

        </div>
    <% end_with %>
</div>
