<% with $Job %>
    <div class="wrap">
        <div class="no-margin top row">
            <div class="summary-col left col-sm-6 col-md-6 col-lg-6">
                $Created.format('F d Y')
            </div>
            <div class="no-padding hidden-xs right col-sm-6 col-md-6 col-lg-6">
                <% if $Categories %>
                <div class="category <% if $Categories.Count > 1 %> categories<% end_if %>">
                    <ul>
                        <% loop $Categories %>
                            <li class="<% if $First %>first<% end_if %>">
                                <a href="{$Controller.AbsoluteLink}{$FilterKey}">$Title</a>
                            </li>
                        <% end_loop %>
                    </ul>
                </div>
                <% end_if %>
            </div>
        </div>
        <div class="no-margin title row">
            <div class="summary-col col-lg-12">
                <h2>$Title</h2>
            </div>
        </div>
        <div class="no-margin content row">
            <div class="summary-col col-lg-12">
                <span class="text">$DisplaySummary.LimitCharacters(370, '')
                    <a class="more" href="{$AbsoluteLink}" title="View more details about the job $Title">[...]</a>
                </span>

            </div>
        </div>
    </div>
<% end_with %>

