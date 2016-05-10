// When the '' modal is opened do this
$(document).on("click", ".member-contact-btn", function () {

//    Form_StaffContactForm_StaffEmail
    var staffEmailAddress = $(this).data('id');
    $(".modal-body #Form_StaffContactForm_StaffEmail").val( staffEmailAddress );
});