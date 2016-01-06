<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 7/01/16
 * Time: 12:36 AM
 */
Class ClientLogo extends DataObject {
    private static $db = array(
        'Title' => 'Text',
        'Description' => 'Text'
    );

    private static $has_one = array(
        'Logo' => 'Image',
        'HomePage' => 'HomePage'
    );

    public function getCMSFields()
    {
        $fields = FieldList::create(
            TextField::create('Title'),
            TextareaField::create('Description'),
            $uploader = UploadField::create('Logo')
        );

        $uploader->setFolderName('client-logos/logos');
        //$visual->setFolderName('cwsoft-foldergallery/Builds/'.$this->getGalleryTitle());
        $uploader->getValidator()->setAllowedExtensions(array('png', 'gif', 'jpeg', 'jpg'));

        return $fields;

    }

}

