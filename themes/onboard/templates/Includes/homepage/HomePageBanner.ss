<div class="section-homepage-banner">
    <div id="hero" class="container-fluid">
        <!-- Full Page Image Background Carousel Header -->
        <header id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="6000" data-pause="false">
            <!-- Indicators -->
            <%--
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        --%>
            <!-- Wrapper for Slides -->
            <div class="carousel-inner">
                <!-- Repeat HomeSlides, create condition to check if first and give class of active -->
                <% loop $HomeSlides %>
                    <div class="<% if $First%>item active<% else %>item<% end_if %>">
                        <% with $Photo %>
                            <div class="fill tron-item" style="background-image:url('$URL');"></div>
                            <style>#preload-01 { background: url($URL) no-repeat -9999px -9999px; }</style>
                        <% end_with %>
                        <div class="carousel-caption">
                            <%--<h2>Caption 1</h2>--%>
                            <%--<a class="btn btn-module-transparent" href="#" role="button">Link</a>--%>
                            <a id="module-link" class="btn btn-module-transparent" href="#modules-text" role="button"><i class="fa fa-angle-down fa-2x"></i></a>
                            <%--<p>to modules</p>--%>
                        </div>
                    </div>


                <% end_loop %>
            </div>
            <!-- Controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="icon-prev"></span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="icon-next"></span>
            </a>
        </header>
    </div>
</div>
