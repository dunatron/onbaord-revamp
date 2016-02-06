<div class="container">

    <div class="col-md-9">
        <% with $Product %>
            <h1>$Title $Price.Nice</h1>
            <hr>
            <img src="$PrimaryPhoto.URL" class="img-responsive">
            <hr>
            <p>$Description</p>
        <% end_with %>
    </div>

    <div class="col-md-3">

        <h2 class="section-title">Products</h2>
        <ul class="categories subnav">
            <% loop $Products %>
                <li class="$LinkingMode">
                    <a class="$LinkingMode" href="$Link">$Title</a>
                </li>
            <% end_loop %>
        </ul>
    </div>

    <!-- BEGIN PAGINATION -->
    <% if $Results.MoreThanOnePage %>
        <div class="pagination">
            <% if $Results.NotFirstPage %>
                <ul id="previous col-xs-6">
                    <li><a href="$Results.PrevLink"><i class="fa fa-chevron-left"></i></a></li>
                </ul>
            <% end_if %>
            <ul class="hidden-xs">
                <% loop $Results.PaginationSummary(2) %>
                    <% if $Link %>
                        <li <% if $CurrentBool %>class="active"<% end_if %>><a href="$Link">$PageNum</a></li>
                    <% else %>
                        <li>...</li>
                    <% end_if %>
                <% end_loop %>
            </ul>
            <% if $Results.NotLastPage %>
                <ul id="next col-xs-6">
                    <li><a href="$Results.NextLink"><i class="fa fa-chevron-right"></i></a></li>
                </ul>
            <% end_if %>
        </div>
    <% end_if %>
    <!-- END PAGINATION -->

</div>
