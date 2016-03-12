<div class="tronsSlider">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->

        <!-- TODO: loop HomeSlides to generate indicators -->
        <%--<ol class="carousel-indicators">--%>
        <%--<li data-target="#myCarousel" data-slide-to="0" class="active"></li>--%>
        <%--<li data-target="#myCarousel" data-slide-to="1"></li>--%>
        <%--<li data-target="#myCarousel" data-slide-to="2"></li>--%>
        <%--</ol>--%>
        <div class="carousel-inner">
            <!-- Loop HomeSlides -->

            <% loop $HomeSlides %>
                <div class="<% if $First %>item active<% else %>item<% end_if %>"><img class="tron-item"
                                                                                       src="$Photo.URL"
                                                                                       style="width:100%"
                                                                                       alt="First slide">

                    <div class="container">
                        <div class="carousel-caption">
                            <h1>$Title</h1>

                            <p>$CaptionText</p>

                            <!-- TODO: hyperlink to modules area -->
                            <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse Modules</a></p>
                        </div>
                    </div>
                </div>
            <% end_loop %>

            <!-- End Loop HomeSlides -->

        </div>
        <a class="left carousel-control" href="#myCarousel" data-slide="prev"><span
                class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control"
                                                                        href="#myCarousel"
                                                                        data-slide="next"><span
            class="glyphicon glyphicon-chevron-right"></span></a>
    </div>
</div>
