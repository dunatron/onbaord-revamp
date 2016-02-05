<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 25/01/16
 * Time: 12:21 PM
 */

class ModuleScreenshot extends DataObject {

    private static $db = array(
        'Title' => 'Text',
        'Content' => 'HTMLText'
    );


    private static $has_one = array(
        'ModulePage' => 'ModulePage',
        'ScreenShot' => 'Image'
    );


    public function updateCMSFields()
    {
        $fields = FieldList::create(
            TextField::create('Title'),
            TextareaField::create('Description'),
            $screenShot = UploadField::create('ScreenShot'),
            HtmlEditorField::create('Content')
        );

        $fields->addFieldToTab('Root.ScreenShots', $screenShot = UploadField::create('ScreenShot'));

        //Set allowed upload extensions
        $screenShot->getValidator()->setAllowedExtensions(array('png', 'gif', 'jpg', 'jpeg'));

        $screenShot->setFolderName('module-screenshots');

        return $fields;
    }




    // Link to the edit profile page
//    function Link()
//    {
//        if($ProfilePage = DataObject::get_one('EditProfilePage'))
//        {
//            return $ProfilePage->Link();
//        }
//    }

}