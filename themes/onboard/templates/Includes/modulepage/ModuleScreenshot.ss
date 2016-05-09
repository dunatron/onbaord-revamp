<%--<% loop $ModuleScreenshots %>--%>

    <%--<div class="screen-shot-row">--%>

        <%--<div class="container-fluid container-$EvenOdd">--%>
            <%--<div class="container-fluid">--%>
                <%--<div class="build-pc col-lg-6 build-pc-$EvenOdd">--%>

                    <%-- Screen shot Image to be added in below --%>
                    <%--<% with $ScreenShot %>--%>
                        <%--<img id="build-pc-content" src="$URL" width="$Width" height="$Height">--%>
                    <%--<% end_with %>--%>

                <%--</div>--%>

                <%--<div class="build-text col-lg-6 build-text-$EvenOdd">--%>
                    <%--<div class="row">--%>
                        <%--<h2>$Title</h2>--%>
                    <%--</div>--%>

                    <%--$Content--%>
                <%--</div>--%>
            <%--</div>--%>
        <%--</div>--%>

    <%--</div>--%>

<%--<% end_loop %>--%>

<%-- SECOND TIME --%>

<%--<div class="ScreenShot-Slider container">--%>

    <%--<div class="Tablet-outer">--%>
        <%--<img src="$ThemeDir/images/tablet_final_1200x850.png" class="img-responsive">--%>
    <%--</div>--%>

    <%--<div id="Screen-Shot-Carousel" class="carousel slide" data-ride="carousel">--%>
        <%--<!-- Indicators -->--%>
        <%--<ol class="carousel-indicators">--%>
            <%--<% loop $ModuleScreenshots %>--%>

                <%--<li data-target="#Screen-Shot-Carousel" data-slide-to="$ID" <% if $First %>class="active"<% else %><% end_if %>></li>--%>
            <%--<% end_loop %>--%>

        <%--</ol>--%>

        <%--<!-- Wrapper for slides -->--%>
        <%--<div class="carousel-inner" role="listbox">--%>

            <%--<% loop $ModuleScreenshots %>--%>

                <%--<% if $First %>--%>

                    <%--<div class="item active">--%>
                        <%--<% with $ScreenShot.croppedImage(1040,690) %>--%>
                            <%--<img src="$URL" width="$Width" height="$Height">--%>
                        <%--<% end_with %>--%>
                    <%--</div>--%>

                <%--<% else %>--%>

                    <%--<div class="item">--%>
                        <%--<% with $ScreenShot.croppedImage(1040,690) %>--%>
                            <%--<img src="$URL" width="$Width" height="$Height">--%>
                        <%--<% end_with %>--%>
                    <%--</div>--%>

                <%--<% end_if %>--%>


            <%--<% end_loop %>--%>

        <%--</div>--%>

        <%--<!-- Left and right controls -->--%>
        <%--<a class="left carousel-control" href="#Screen-Shot-Carousel" role="button" data-slide="prev">--%>
            <%--<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>--%>
            <%--<span class="sr-only">Previous</span>--%>
        <%--</a>--%>
        <%--<a class="right carousel-control" href="#Screen-Shot-Carousel" role="button" data-slide="next">--%>
            <%--<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>--%>
            <%--<span class="sr-only">Next</span>--%>
        <%--</a>--%>
    <%--</div>--%>
<%--</div>--%>


<%-- LOL THIRD TIME --%>

<div id="mycarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
        <li data-target="#mycarousel" data-slide-to="0" class="active"></li>
        <li data-target="#mycarousel" data-slide-to="1"></li>
        <li data-target="#mycarousel" data-slide-to="2"></li>
        <li data-target="#mycarousel" data-slide-to="3"></li>
        <li data-target="#mycarousel" data-slide-to="4"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <img src="https://unsplash.it/2000/1250?image=397" data-color="lightblue" alt="First Image">
            <div class="carousel-caption">
                <h3>First Image</h3>
            </div>
        </div>
        <div class="item">
            <img src="https://unsplash.it/2000/1250?image=689" data-color="firebrick" alt="Second Image">
            <div class="carousel-caption">
                <h3>Second Image</h3>
            </div>
        </div>
        <div class="item">
            <img src="https://unsplash.it/2000/1250?image=675" data-color="violet" alt="Third Image">
            <div class="carousel-caption">
                <h3>Third Image</h3>
            </div>
        </div>
        <div class="item">
            <img src="https://unsplash.it/2000/1250?image=658" data-color="lightgreen" alt="Fourth Image">
            <div class="carousel-caption">
                <h3>Fourth Image</h3>
            </div>
        </div>
        <div class="item">
            <img src="https://unsplash.it/2000/1250?image=638" data-color="tomato" alt="Fifth Image">
            <div class="carousel-caption">
                <h3>Fifth Image</h3>
            </div>
        </div>
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#mycarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#mycarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>





