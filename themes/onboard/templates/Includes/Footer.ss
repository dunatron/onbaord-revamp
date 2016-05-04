<div class="container-fluid">

    <div class="footer">
        <div class="container">



            <div class="col-md-6 left-footer-content">
                <div class="page-links-wrapper">
                    <ul>
                        <% loop $Menu(1) %>
                            <li><a class="$LinkingMode" href="$Link" title="$Go to the $Title page">$MenuTitle</a></li>
                        <% end_loop %>
                    </ul>
                </div>
                <%--<% include ContactForm %>--%>
            </div>

            <div class="col-md-6 right-footer-content">

                <div class="footer-social-icons">
                    <% with $SiteConfig %>
                        <% if  FacebookLink %><a href="$FacebookLink" target="_blank"><i class="fa fa-facebook"></i></a><% end_if %>
                        <% if $TwitterLink %><a href="$TwitterLink" target="_blank"><i class="fa fa-twitter"></i></a><% end_if %>
                        <% if $LinkedInLink %><a href="$LinkedInLink" target="_blank"><i class="fa fa-linkedin"></i></a><% end_if %>
                        <% if $Phone %><a href="tel:$Phone" target="_blank"><i class="fa fa-phone"></i></a><% end_if %>
                        <% if $Email %><a href="mailto:$Email" target="_blank"><i class="fa fa-envelope"></i></a><% end_if %>
                    <% end_with %>
                </div>

                <div class="developer-mark">
                    <p>Created & Developed By <a href="http://dunatron.nz/">TRON STUDIOS</a></p>
                </div>

            </div>


        </div>
    </div>
</div>
