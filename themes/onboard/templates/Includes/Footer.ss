<div class="container-fluid">

    <div class="footer">
        <div class="container">

            <div class="page-links-wrapper">
                <ul>
                    <% loop $Menu(1) %>
                        <li><a class="$LinkingMode" href="$Link" title="$Go to the $Title page">$MenuTitle</a></li>
                    <% end_loop %>
                </ul>
            </div>

            <div class="col-md-6 left-footer-content">
                <h2>Contact Form</h2>
                <% include ContactForm %>
            </div>

            <div class="col-md-6 right-footer-content">

                <div class="footer-social-icons">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-phone"></i></a>
                    <a href="#"><i class="fa fa-envelope"></i></a>
                </div>

                <div class="developer-mark">
                    <p>Created & Developed By <a href="http://dunatron.nz/">TRON STUDIOS</a></p>
                </div>

            </div>


        </div>
    </div>
</div>
