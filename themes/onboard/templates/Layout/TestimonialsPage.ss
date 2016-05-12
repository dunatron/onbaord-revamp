<%-- Include Session Message section --%>
<% include buffer %>
<% include Message %>

<div class="$ClassName.LowerCase-wrapper container">
    <h2 class="t-main-header text-center">$Title</h2>
    $Content

    <div class="testimonials-wrapper">
        <%-- Loop Testimonials --%>
        <% loop $Testimonials %>
            <div class="row">
                <div class="testimonial-$EvenOdd">
                    <div class="photo-box col-lg-3 col-md-3">
                        <% with $TestimonialPhoto %>
                            <img id="testimonial-img" class="img-responsive" src="$URL" width="$Width" height="$Height">
                        <% end_with %>

                    </div>
                    <div class="comment-box  col-lg-9 col-md-9">

                        <i class="fa fa-quote-left pull-left"></i>
                        <div class="testimonial-content">
                            $Content
                        </div>
                        <i class="fa fa-quote-right pull-right"></i>
                        <h2>$Name</h2>
                    </div>
                </div>
            </div>

        <% end_loop %>
    </div>
</div>