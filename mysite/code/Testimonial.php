<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 3/04/16
 * Time: 6:13 PM
 */
class Testimonial extends DataObject {

    private static $db = array(
        'Name' => 'Text',
        'Content' => 'HTMLText'
    );

    private static $has_one = array(
        'TestimonialPhoto' => 'Image',
        'TestimonialsPage' => 'TestimonialsPage'
    );

    public function updateCMSFields()
    {
        $fields = FieldList::create(
            TextField::create('Name'),
            $screenShot = UploadField::create('TestimonialPhoto'),
            HtmlEditorField::create('Content')
        );

        $fields->addFieldToTab('Root.TestimonialPhoto', $screenShot = UploadField::create('TestimonialPhoto'));

        //Set allowed upload extensions
        $screenShot->getValidator()->setAllowedExtensions(array('png', 'gif', 'jpg', 'jpeg'));

        $screenShot->setFolderName('Testimonial-Photos');

        return $fields;
    }

}