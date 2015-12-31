<div class="container-fluid header navbar-fixed-top <% if $ClassName == 'NZICRECSinglePage' || $ClassName == 'NZICRECJobPage' %>to-left<% end_if %>">
    <header>
        <div class="navbar navbar-default">
            <div class="navbar-header pull-right navbar-btn">
                <button id="nav-expander" type="button" class="nav-expander fixed navbar-toggle"
                        data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar icon-bar-1"></span>
                    <span class="icon-bar icon-bar-2"></span>
                    <span class="icon-bar icon-bar-3"></span>
                </button>

				<% if $ClassName == 'NZICRECSinglePage' %>
                    <div class="label">Job board</div>
				<% end_if %>
            </div>

	        <% if $ClassName == 'NZICRECJobLandingPage' %>
                <% include JobLandingTopNav %>
	        <% end_if %>
        </div>

        <nav>
            <ul class="list-unstyled main-menu">
                <li class="close-li"><a href="#" id="nav-close">X</a></li>
                <li class="label-li"><div class="label">Job board</div></li>
                <% loop $ExpandMenu %>
                    <li><a href="$url" title="Go to $title">$name</a></li>
                <% end_loop %>
            </ul>
            <ul class="list-unstyled bottom-menu">
                <% loop $Agencies %>
                    <li><a href="http://$Website" title="Go to $Title">$Website</a></li>
                <% end_loop %>
            </ul>
        </nav>
    </header>
</div>
