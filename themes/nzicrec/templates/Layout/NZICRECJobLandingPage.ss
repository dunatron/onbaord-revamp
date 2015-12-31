<div class="no-padding-1200 container job-listing page" role="main">
    <div class="inner-content">
        <div class="heading">
            <h1>$Title</h1>
        </div>

        <% if $Jobs %>
            <div class="jobs-list">
                <% loop $Jobs %>
                    <div class="job-summary job-summary-$ID<% if $Last %> last<% end_if %>">
                        <div class="no-margin  row summary-top">
                            <div class="image col-xs-6 col-sm-3 col-md-3 col-lg-3">
                                <% include JobLandingImage Job=$Me, Controller=$Up %>
                            </div>
                            <div class="summary col-xs-6 col-sm-9 col-md-9 col-lg-9">
                                <% include JobLandingSummary Job=$Me, Controller=$Up %>
                            </div>
                        </div>

                        <div class="no-margin row summary-bottom">
                            <div class="image actions col-xs-6 col-sm-3 col-md-3 col-lg-3">
                                <div class="actions-bar">
                                    <% include JobDetailsForwardJob Job=$Job %>
                                </div>
                            </div>
                            <div class="summary bottom col-xs-6 col-sm-9 col-md-9 col-lg-9">
                                <div class="no-margin row">
                                    <div class="hidden-xs type col-sm-4 col-md-4 col-lg-4">
                                        $Type
                                    </div>
                                    <div class="hidden-xs location col-sm-4 col-md-4 col-lg-4">
                                        $Location
                                    </div>
                                    <div class="summary-col no-padding more-info col-xs-12 col-sm-4 col-md-4 col-lg-4 pull-right">
                                        <a class="btn btn-transparent-yellow" href="{$AbsoluteLink}">
                                            More Information</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <% end_loop %>
            </div>
        <% else %>
            <div class="message no-result">
                There are not jobs found.
            </div>
        <% end_if %>
    </div>
</div>
