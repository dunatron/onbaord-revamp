<div class="container">
    <% if $IsMessages %>
        <% loop $Messages %>
            <div class="tron-alert tron-alert-{$MessageType}"<% if $CanClose %> data-tron-alert<% end_if %>>
                <% if $CanClose %><a href="" class="tron-alert-close tron-close"></a><% end_if %>
                <p>$Message</p>
            </div>
        <% end_loop %>
    <% end_if %>
</div>