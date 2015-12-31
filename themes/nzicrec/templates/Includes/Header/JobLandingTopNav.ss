<div class="visible-md-inline-block visible-lg-inline-block job-listing-filters container">
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
	        <% loop $TopMenu %>
                <li><a href="$url" title="Go to $title">$name</a></li>
	        <% end_loop %>
        </ul>
    </div>
</div>
