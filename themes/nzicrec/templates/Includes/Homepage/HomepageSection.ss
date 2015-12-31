<div id="$SectionId" class="container-fluid nc-$SectionType.LowerCase">
        <div class="row">
            <div class="col col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <% if $SectionType == 'Banner' %>
                    <% include HomepageBanner %>
               <% else_if $SectionType == 'ShutterHeading' %>
                    <% include HomepageShutterHeading %>
                <% else_if $SectionType == 'ShutterContent' %>
                    <% include HomepageShutterContent %>
                <% else_if $SectionType == 'Information' %>
                    <% include HomepageInformation %>
                <% else_if $SectionType == 'Agencies' %>
                    <% include HomepageAgencies %>
                <% else_if $SectionType == 'JobBoard' %>
                    <% include HomepageJobBoard %>
                <% else %>
                <% end_if %>
            </div>
        </div>
</div>