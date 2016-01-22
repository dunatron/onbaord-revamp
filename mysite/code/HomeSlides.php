<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 22/01/16
 * Time: 8:57 PM
 */

class HomeSlides extends DataObject
{

    private static $db = array(
        'Title' => 'Varchar(100)',
        'CaptionText' => 'Text',
    );

    private static $has_one = array(
        'Photo' => 'Image',
        'HomePage' => 'HomePage'
    );

    private static $summary_fields = array(
        'GridThumbnail' => '',
        'Title' => 'Title of region',
        'CaptionText' => 'Short description'
    );


    public function getGridThumbnail()
    {
        if ($this->Photo()->exists()) {
            return $this->Photo()->SetWidth(100);
        }

        return '(no image)';
    }

//    //Get Filename of image (to use in template for style: background-url:)
//    public function FindImageFileName(){
//        return File::find('assets/home-slides/' . $this->ProductCode . '.')
//    }


    // CMS UPLOAD FIELDS BITCHES
    public function getCMSFields()
    {
        $fields = FieldList::create(
            TextField::create('Title'),
            TextareaField::create('CaptionText'),
            $uploader = UploadField::create('Photo')
        );

        $uploader->setFolderName('home-slides');

        $uploader->getValidator()->setAllowedExtensions(array(
            'png', 'gif', 'jpeg', 'jpg'
        ));

        return $fields;
    }

}