<%-- Include Session Message section --%>
<% include Message %>

<div class="container">
    <h2 class="t-main-header text-center">$Title</h2>
    $Content

    <div class="staff-wrapper">
        <%-- Loop Staff Member --%>
        <% loop $StaffMembers %>
            <div class="row">
                <div class="staff-member">
                    <div class="staff-photo col-lg-3 col-md-3">
                        <% with $StaffPhoto.croppedImage(200,200) %>
                            <img id="staff-img" class="img-responsive" src="$URL" width="$Width" height="$Height">
                        <% end_with %>
                    </div>
                    <div class="staff-desc col-lg-9 col-md-9">
                        <h2>$Name - $Position</h2>
                        <i class="fa fa-quote-left pull-left"></i>
                        <div class="desc-content">
                            $Content
                        </div>
                        <i class="fa fa-quote-right pull-right"></i>
                    </div>
                </div>
            </div>
        <% end_loop %>
    </div>

</div>




