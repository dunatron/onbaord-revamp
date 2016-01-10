<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 10/01/16
 * Time: 6:01 PM
 */
class EditProfilePage extends page {

}

class EditProfilePage_Controller extends Page_Controller {

    static $allowed_actions = array(
        'EditProfileForm'
    );

    /**
     * @return Form , return edited Profile Form
     */
    function EditProfileForm()
    {
        // Create our fields
        $fields = new FieldList(
            new TextField('Name', '<span>*</span> Name (or Nickname)'),
            new EmailField('Email', '<span>*</span> Email'),
            new TextField('JobTitle', 'Job Title'),
            new TextField('Website', 'Website (without http://'),
            new TextareaField('Blurb'),
            new ConfirmedPasswordField('Password', 'New Password')
        );

        // Create action
        $actions = new FieldList(
            new FormAction('SaveProfile', 'Save')
        );

        // Create action
        $validator = new RequiredFields('FirstName', 'Email');

        // Create form
        $Form = new Form($this, 'EditProfileForm', $fields, $actions, $validator);

        // Populate the form with current members data
        $Member = Member::currentUser();
        $Form->LoadDataFrom($Member->data());

        // Return the form
        return $Form;
    }

    /**
     * @param $data
     * @param $form
     * @return SS_HTTPResponse
     */
    function SaveProfile($data, $form)
    {
        // Check for a logged in member
        if($CurrentMember = Member::currentUser())
        {
            // Check for another member with the same email address
            if($member = DataObject::get_one("Member", "Email = '". Convert::raw2sql($data['Email']) . "' AND ID != " . $CurrentMember->ID))
            {
                $form->addErrorMessage("Name", 'Sorry, that name already exists.', "bad");

                Session::set("FormInfo.Form_EditProfileForm.data", $data);

                return Director::redirectBack();
            }
            // Otherwise check that user IDs match and save
            else
            {
                $form->saveInto($CurrentMember);

                $CurrentMember->write();

                return $this->redirect($this->Link('?saved=1'));
            }
        }
        // If not logged in then return a permission error
        else
        {
            return Security::PermissionFailure($this->controller, 'you must be logged in to edit your profile');
        }
    }

    /**
     * @return mixed
     */
    // Check to see if it has just been saved(to use with if blocks in templates)
    function Saved()
    {
        return $this->request->getVar('saved');
    }

    // Check for success status
    function Success()
    {
        return $this->request->getVar('success');
    }
}