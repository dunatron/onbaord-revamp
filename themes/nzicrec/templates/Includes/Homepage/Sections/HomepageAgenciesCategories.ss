<div class="row close-jobs-categories">
    <a href="#" target="_blank" class="close-job-sectors col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <span class="x">x</span><span>Close</span>
    </a>
</div>

<% if $GraduateRecruitment %>
    <div class="row graduate-advert">
        <a href="{$GraduateRecruitment}" target="_blank" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <span>GRADUATE RECRUITMENT</span>
        </a>
    </div>
<% end_if %>

<div class="row">
    <div class="row-height">
        <% loop $Categories %>
            <div class="no-padding col-xs-12 col-sm-6 col-md-6 col-lg-3 category category-{$Pos}">
                <div class="wrap">
                    <div class="top">
                        <div class="content">
                            <h3>
                                <span>
                                    $Title
                                </span>
                            </h3>

                            <div class="category-content">
                                <p class="intro">
                                    $Intro
                                </p>

                                <p class="summary">
                                    $Summary
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="content">
                            <a href="{$AbsoluteLink}{$Controller.JobBoardSlug}/{$FilterKey}"
                               class="btn btn-<% if $Pos == 3 %>dark<% else %>yellow<% end_if %>">
                                VIEW CURRENT JOBS
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        <% end_loop %>
    </div>
</div>
