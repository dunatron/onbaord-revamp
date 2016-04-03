<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 3/04/16
 * Time: 6:09 PM
 */
class TestimonialsPage extends Page
{

    private static $db = array(
        'Title' => 'Text',
    );

    private static $has_many = array(
        'Testimonials' => 'Testimonial',
    );

    private static $allowed_children = array(
    );

    //Getting CMS Fields For our Home slides DataObject
    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->addFieldToTab('Root.Main', TextField::create('Title', 'Title for Testimonials Page'), 'Content');

        //MAIN ASSETS ADDED TO CMS
        $fields->addFieldToTab('Root.Testimonials', GridField::create(
            'Testimonial',
            'Testimonials on this page',
            $this->Testimonials(),
            GridFieldConfig_RecordEditor::create()
        ));

        return $fields;
    }

}

class TestimonialsPage_Controller extends Page_Controller
{
    public function init()
    {
        //Pull in parent properties for controller e.g css & js assets
        parent::init();
        Requirements::css($this->ThemeDir().'/css/homepage.css');
    }

}