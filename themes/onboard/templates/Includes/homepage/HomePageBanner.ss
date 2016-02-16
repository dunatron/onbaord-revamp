<%--<div class="section-homepage-banner">--%>

    <%--<div id="hero" class="container-fluid">--%>
        <%--<!-- Full Page Image Background Carousel Header -->--%>
        <%--<header id="myCarousel" class="carousel slide">--%>
            <%--<!-- Indicators -->--%>
            <%----%>
        <%--<ol class="carousel-indicators">--%>
            <%--<li data-target="#myCarousel" data-slide-to="0" class="active"></li>--%>
            <%--<li data-target="#myCarousel" data-slide-to="1"></li>--%>
            <%--<li data-target="#myCarousel" data-slide-to="2"></li>--%>
        <%--</ol>--%>
        <%----%>
            <%--<!-- Wrapper for Slides -->--%>
            <%--<div class="carousel-inner">--%>

               <%--<!-- Repeat HomeSlides, create condition to check if first and give class of active -->--%>
                <%--<% loop $HomeSlides %>--%>
                    <%--<% if $First %>--%>

                    <%--<% end_if %>--%>

                        <%--<div class="<%if $First %>item active<% else %>item<% end_if %>">--%>
                        <%--<!-- Set the first background image using inline CSS below. -->--%>
                        <%--<div class="fill" style="background-image:url('../../../../assets/home-slides/$Photo.Filename');"></div>--%>

                            <%--<div class="fill" style="background-image:url('../../../../../assets/home-slides/banner-blue-building.jpg');"></div>--%>
                        <%--<div class="carousel-caption">--%>


                            <%--<h2>Caption 1</h2>--%>

                            <%--<a class="btn btn-module-transparent" href="#" role="button">Link</a>--%>
                            <%--<a class="btn btn-module-transparent" href="#" role="button">Link</a>--%>
                        <%--</div>--%>


                    <%--</div>--%>
                <%--<% end_loop %>--%>


                <%--<div class="item active">--%>
                    <%--<!-- Set the first background image using inline CSS below. -->--%>
                    <%--<div class="fill" style="background-image:url('$ThemeDir/images/banner-blue-building.jpg');"></div>--%>


                <%--</div>--%>
                <%--<div class="item">--%>
                    <%--<!-- Set the second background image using inline CSS below. -->1--%>
                    <%--<div class="fill"--%>
                         <%--style="background-image:url('$ThemeDir/images/banner-building-lights.jpeg');"></div>--%>
                    <%--<div class="carousel-caption">--%>


                        <%--<h2>Caption 2</h2>--%>

                        <%--<a class="btn btn-module-transparent" href="#" role="button">Link</a>--%>
                        <%--<a class="btn btn-module-transparent" href="#" role="button">Link</a>--%>

                    <%--</div>--%>
                <%--</div>--%>
                <%--<div class="item">--%>
                    <%--<!-- Set the third background image using inline CSS below. -->--%>
                    <%--<div class="fill" style="background-image:url('$ThemeDir/images/banner-tall-building.jpg');"></div>--%>
                    <%--<div class="carousel-caption">--%>


                        <%--<h2>Caption 3</h2>--%>

                        <%--<a class="btn btn-module-transparent" href="#" role="button">Link</a>--%>
                        <%--<a class="btn btn-module-transparent" href="#" role="button">Link</a>--%>

                    <%--</div>--%>
                <%--</div>--%>
            <%--</div>--%>

            <%--<!-- Controls -->--%>
            <%--<a class="left carousel-control" href="#myCarousel" data-slide="prev">--%>
                <%--<span class="icon-prev"></span>--%>
            <%--</a>--%>
            <%--<a class="right carousel-control" href="#myCarousel" data-slide="next">--%>
                <%--<span class="icon-next"></span>--%>
            <%--</a>--%>

        <%--</header>--%>

    <%--</div>--%>

<%--</div>--%>

<section class="block">
    <div id="myCarousel" class="carousel slide">
        <div class="carousel-inner">
            <div class="active item">
                <img src="$Themedir/images/banner-building-lights.jpeg" alt="Slide1" />
            </div>
            <div class="item">
                <img src="$Themedir/images/banner-building-lights.jpeg" alt="Slide2" />
            </div>
            <div class="item">
                <img src="$Themedir/images/banner-building-lights.jpeg" alt="Slide3" />
            </div>
        </div>
        <a class="carousel-control left" href="#myCarousel" data-slide="prev">‹</a>
        <a class="carousel-control right" href="#myCarousel" data-slide="next">›</a>
    </div>
</section>