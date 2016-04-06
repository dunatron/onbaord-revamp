<%-- Include Session Message section --%>
<% include buffer %>
<% include Message %>

<div class="$ClassName.LowerCase-wrapper container">
    <h1>$Title</h1>
    $Content

    <div class="testimonials-wrapper">
        <%-- Loop Testimonials --%>
        <% loop $Testimonials %>
            <div class="testimonial-$EvenOdd">
                <div class="photo-box">
                    <% with $TestimonialPhoto %>
                        <img id="testimonial-img" src="$URL" width="$Width" height="$Height">
                    <% end_with %>
                    $Name
                </div>
                <div class="comment-box">
                    $Title
                    $Content
                </div>
            </div>
        <% end_loop %>
    </div>
</div>