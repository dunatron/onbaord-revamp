<?php
/**
 * Created by PhpStorm.
 * User: heath
 * Date: 7/04/16
 * Time: 10:58 AM
 */
class StaffMember extends DataObject {

    private static $db = array(
        'Title' => 'Text',
        'Name' => 'Text',
        'Content' => 'HTMLText'
    );

    private static $has_one = array(
        'StaffPhoto' => 'Image',
        'AboutUsPage' => 'AboutUsPage'
    );

    public function updateCMSFields()
    {
        $fields = FieldList::create(
            TextField::create('Title'),
            TextField::create('Name'),
            $screenShot = UploadField::create('StaffPhoto'),
            HtmlEditorField::create('Content')
        );

        $fields->addFieldToTab('Root.StaffPhoto', $screenShot = UploadField::create('StaffPhoto'));

        //Set allowed upload extensions
        $screenShot->getValidator()->setAllowedExtensions(array('png', 'gif', 'jpg', 'jpeg'));

        $screenShot->setFolderName('Staff-Photos');

        return $fields;
    }

}