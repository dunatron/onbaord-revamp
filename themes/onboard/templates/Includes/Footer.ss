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

            <div class="developer-mark">
                <p>Created & Developed By <a href="http://dunatron.nz/">TRON STUDIOS</a></p>
            </div>

            <% include ContactForm %>




        </div>
    </div>
</div>
