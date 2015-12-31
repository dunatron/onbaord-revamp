<div class="container">
    <div class="top row">
        <div class="col-xs-12 col-md-6  col-lg-6">
            <img class="img-responsive" src="$Asset('images/new-zealand-intelligence-community.png')">
        </div>
        <div class="col-xs-12 col-md-6 col-lg-6 pull-right footer-menu">
            <ul class="list-unstyled pull-right">
                <% loop $FooterMenu %>
                    <li>
                        <a href="{$url}" title="Go to {$title}">$name.UpperCase</a>
                    </li>
                <% end_loop %>
            </ul>
        </div>
    </div>
    <div class="bottom row">
        <div class="col-xs-12 col-lg-12">
            <a href="http://{$Agencies('GCSB', 'Website')}" target="_blank">{$Agencies('GCSB', 'Website')}</a>
        </div>
    </div>
</div>


