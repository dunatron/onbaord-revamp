<div id="slide-on-illuminati" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
        <% loop $ModuleScreenshots %>
            <li data-target="#slide-on-illuminati" data-slide-to="$ID"
                <% if $First %>class="active"<% else %><% end_if %>></li>
        <% end_loop %>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
        <% loop $ModuleScreenshots %>
            <% if $First %>
                <div class="item active">
                    <% with $ScreenShot %>
                        <img src="$URL" width="$Width" height="$Height">
                    <% end_with %>
                </div>
            <% else %>
                <div class="item">
                    <% with $ScreenShot %>
                        <img src="$URL" width="$Width" height="$Height">
                    <% end_with %>
                </div>
            <% end_if %>
        <% end_loop %>
    </div>
    <!-- Controls -->
    <a class="left carousel-control" href="#slide-on-illuminati" role="button" data-slide="prev">
        <span class="icon-prev"></span>
    </a>
    <a class="right carousel-control" href="#slide-on-illuminati" role="button" data-slide="next">
        <span class="icon-next"></span>
    </a>
</div>





