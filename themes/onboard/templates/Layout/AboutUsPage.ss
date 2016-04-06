<%-- Include Session Message section --%>
<% include Message %>

<div class="container">
    <h1>$Title</h1>
    $Content

    <div class="staff-wrapper">
        <%-- Loop Testimonials --%>
        <% loop $StaffMembers %>
            <div class="staff-member">
                <div class="staff-photo">
                    <% with $StaffPhoto %>
                        <img id="staff-img" src="$URL" width="$Width" height="$Height">
                    <% end_with %>
                    $Name
                </div>
                <div class="staff-desc">
                    $Title
                    $Content
                </div>
            </div>
        <% end_loop %>
    </div>

</div>