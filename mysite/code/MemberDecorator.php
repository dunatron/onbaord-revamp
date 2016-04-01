<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 10/01/16
 * Time: 6:03 PM
 */
class MemberDecorator extends DataExtension {

    // Add Image field for Member/School Logo1
    private static $has_one = array(
        'Logo' => 'Image'
    );


    // Add extra Database fields
    public function extraStatics($class = null, $extension = null)
    {
        return array(
            'db' => array(
                "LogoVisible" => 'Boolean',
                "Website" => "Varchar(100)"
            )
        );
    }

    // Add form fields to CMS
    public function updateCMSFields(FieldList $fields)
    {
        $fields->addFieldToTab("Root.Profile", new TextField('JobTitle', 'Job Title'));
        $fields->addFieldToTab("Root.Profile", new TextField('Website', 'Website', 'http://'));
        $fields->addFieldToTab("Root.Profile", new TextareaField('Blurb', 'Blurb'));
        $fields->addFieldToTab("Root.Profile", new CheckboxField("LogoVisible"));

        $fields->addFieldToTab('Root.Profile', $logo = UploadField::create('Logo'));

        //Set allowed upload extensions
        $logo->getValidator()->setAllowedExtensions(array('png', 'gif', 'jpg', 'jpeg'));

        $logo->setFolderName('Member-Logos');
    }


    // Link to the edit profile page
    function Link()
    {
        if($ProfilePage = DataObject::get_one('EditProfilePage'))
        {
            return $ProfilePage->Link();
        }
    }
}


