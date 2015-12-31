<div class="container job-details page" role="main">
    <div class="inner-content">
        <ul class="breadcrumb">
            <li><a href="/"> Home</a></li>
            <li><a href="/{$JobBoardSlug}">Job Board</a></li>
            <%--<li><a href="/{$JobBoardSlug}/$Category().Title.LowerCase">$Category().Title</a></li>--%>
            <%--$Category().Title--%><%-- TODO show list of category on hover value is from where they cam from !!!?--%>TODO

            <li class="active title">$Title</li>
        </ul>

        <%-- Header--%>
        <% include JobDetailsHeading Job=$Me %>

        <%-- Content--%>
        <div class="row no-margin content">

            <%-- Left--%>
            <div class="no-padding left col-lg-8">

                <% include JobDetailsCreatedDate Job=$Me %>

                <% include JobDetailsMainContent Job=$Me %>

                <% if $RemunerationIndicator %>
                    <div class="text remuneration-indicator-row row">
                        <div class="col-lg-12">
                            <% include JobDetailsRemunerationIndicator Job=$Me %>
                        </div>
                    </div>
                <% end_if %>

                <% if $MoreInfo %>
                    <% include JobDetailsMoreInfo Job=$Me %>
                <% end_if %>

                <% include JobDetailsApplyNow Job=$Me %>

                <% include JobDetailsActions Job=$Me %>
            </div>

            <%-- Right--%>
            <div class="text no-padding right col-lg-3">
                <% include JobDetailsShare Job=$Me %>
                <% include JobDetailsCloseDate Job=$Me %>
                <% if $RemunerationIndicator %>
                    <% include JobDetailsRemunerationIndicator Job=$Me %>
                <% end_if %>
                <% include JobDetailsAgencyWebsite Job=$Me %>
                <% include JobDetailsDownload Job=$Me %>
                <% include JobDetailsReturnToJobs Job=$Me %>
            </div>
        </div>
    </div>
</div>
