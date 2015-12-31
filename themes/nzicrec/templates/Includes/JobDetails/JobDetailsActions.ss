<% with $Job %>
    <div class="actions row">
        <div class="col-lg-12">
            <% include JobDetailsForwardJob Job=$Job %>
            <a class="print" href="#" target="_blank">PRINT THIS JOB</a>
        </div>
    </div>
<% end_with %>