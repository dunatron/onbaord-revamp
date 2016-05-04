<?php
/**
 * Created by PhpStorm.
 * User: heath
 * Date: 7/04/16
 * Time: 10:58 AM
 */
class StaffMember extends DataObject {

    private static $db = array(
        'FirstName' => 'Text',
        'LastName' => 'Text',
        'Position' => 'Text',
        'EmailAddress' => 'Text',
        'Content' => 'HTMLText'
    );

    private static $has_one = array(
        'StaffPhoto' => 'Image',
        'AboutUsPage' => 'AboutUsPage'
    );

    private static $summary_fields = array(
        'GridThumbnail' => 'Staff',
        'FirstName' => 'First Name',
        'LastName' => 'Last Name',
        'EmailAddress' => 'Email'
    );

    public function getGridThumbnail()
    {
        if ($this->StaffPhoto()->exists()) {
            return $this->StaffPhoto()->SetWidth(100);
        }
        return '(no image, take photos clowns)';
    }

    public function updateCMSFields()
    {
        $fields = FieldList::create(
            TextField::create('FirstName'),
            TextField::create('LastName'),
            TextField::create('Position'),
            TextField::create('EmailAddress'),
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