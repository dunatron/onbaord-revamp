<% loop $ModuleScreenshots %>

    <div class="screen-shot-row">

        <div class="container-fluid container-$EvenOdd">
            <div class="container">
                <div class="build-pc col-lg-6 build-pc-$EvenOdd">

                    <img id="build-pc-top-$EvenOdd" src="$ThemeDir/images/computer/top-comp.png"
                         class="img-responsive hidden-xs hidden-sm">
                    <img id="build-pc-left-$EvenOdd" src="$ThemeDir/images/computer/left-comp.png"
                         class="img-responsive hidden-xs hidden-sm">
                    <%-- Screen shot Image to be added in below --%>
                    <% with $ScreenShot.croppedImage(400, 246) %>
                        <img id="build-pc-content-$EvenOdd" src="$URL" width="$Width" height="$Height">
                    <% end_with %>

                    <img id="build-pc-right-$EvenOdd" src="$ThemeDir/images/computer/right-comp.png"
                         class="img-responsive hidden-xs hidden-sm">
                    <img id="build-pc-bottom-$EvenOdd" src="$ThemeDir/images/computer/bottom-comp.png"
                         class="img-responsive hidden-xs hidden-sm">
                </div>

                <div class="build-text col-lg-6 build-text-$EvenOdd">
                    <div class="row">
                        <h2>$Title</h2>
                    </div>

                    $Content
                </div>
            </div>
        </div>

    </div>

<% end_loop %>
