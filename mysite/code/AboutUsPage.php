<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 13/12/15
 * Time: 1:02 PM.
 */
class AboutUsPage extends Page
{

    private static $db = array(
        'Title' => 'Text',
    );


    private static $has_many = array(
        'StaffMembers' => 'StaffMember',
    );

    private static $allowed_children = array(
    );

    //Getting CMS Fields For our Home slides DataObject
    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->addFieldToTab('Root.Main', TextField::create('Title', 'Title for the about page'), 'Content');
        // Add staff Field To Page in the CMS
        $fields->addFieldToTab('Root.Staff', GridField::create(
            'StaffMember',
            'Staff Members on this Page',
            $this->StaffMembers(),
            GridFieldConfig_RecordEditor::create()
        ));

        return $fields;
    }




}

class AboutUsPage_Controller extends Page_Controller
{
    public function init()
    {
        //Pull in parent properties for controller e.g css & js assets
        parent::init();
        Requirements::css($this->ThemeDir().'/css/homepage.css');
    }



    public function StaffContactForm()
    {

        $form = Form::create(
            $this,
            __FUNCTION__,
            FieldList::create(
                TextField::create('Name','')
                    ->setAttribute('placeholder','Name')
                    ->addExtraClass('onboard-form-element'),
                EmailField::create('ClientEmail','')
                    ->setAttribute('placeholder','Email')
                    ->addExtraClass('onboard-form-element'),
                EmailField::create('StaffEmail','')
                    ->setAttribute('placeholder','Email')
                    ->addExtraClass('onboard-form-element hidden'),
                TextField::create('Phone','')
                    ->setAttribute('placeholder','Phone')
                    ->addExtraClass('onboard-form-element'),
                TextField::create('School','')
                    ->setAttribute('placeholder','Your School')
                    ->addExtraClass('onboard-form-element'),
                TextareaField::create('Message','')
                    ->setAttribute('placeholder','Your Message')
                    ->addExtraClass('onboard-form-element')
            ),
            FieldList::create(
                FormAction::create('sendStaffEmail','Send')
                    ->setUseButtonTag(true)
                    ->addExtraClass('btn btn-lg')
            ),
            RequiredFields::create('Name','Email','Comment')
        );

        $form->addExtraClass('form-style');

        return $form;


    }

    public function sendStaffEmail($data, Form $form)
    {
        $email = new Email();

        $email->setTo($data['StaffEmail']);
        $email->setFrom($data['ClientEmail']);
        $email->setSubject("Contact Message from {$data["Name"]}");

        $messageBody = "
            <p><strong>Name:</strong> {$data['Name']}</p>
            <p><strong>Email:</strong> {$data['ClientEmail']}</p>
            <p><strong>Phone:</strong> {$data['Phone']}</p>
            <p><strong>School:</strong> {$data['School']}</p>
            <p><strong>Message:</strong> {$data['Message']}</p>
            ";

        $email->setBody($messageBody);
        $email->send();
        return array(
            'Content' => '<p>Thank you for your feedback.</p>',
            'Form' => ''
        );


    }





}
