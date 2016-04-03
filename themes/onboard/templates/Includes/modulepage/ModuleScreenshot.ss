<% loop $ModuleScreenshots %>

    <div class="screen-shot-row">

        <div class="container-fluid container-$EvenOdd">
            <div class="container-fluid">
                <div class="build-pc col-lg-9 build-pc-$EvenOdd">

                    <%-- Screen shot Image to be added in below --%>
                    <% with $ScreenShot %>
                        <img id="build-pc-content" src="$URL" width="$Width" height="$Height">
                    <% end_with %>

                </div>

                <div class="build-text col-lg-3 build-text-$EvenOdd">
                    <div class="row">
                        <h2>$Title</h2>
                    </div>

                    $Content
                </div>
            </div>
        </div>

    </div>

<% end_loop %>
