<% with $Job %>
<div class="heading row">
    <div class="col-lg-12">
        <div class="row">
            <div class="image col-lg-3">
				$Agency.Logo
            </div>
            <div class="info col-lg-9">
                <h1>$Title</h1>
                <h3>$Agency.Title</h3>

                <div class="categories row">
                    <div class="type col-lg-4">
						$Type
                    </div>
                    <div class="location col-lg-4">
						$Location
                    </div>
                    <div class="category col-lg-4">
						<%--$Category().Title--%><%-- TODO show list of category on hover--%>TODO
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<% end_with %>