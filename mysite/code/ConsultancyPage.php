<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 3/04/16
 * Time: 6:58 PM
 */
class ConsultancyPage extends Page
{

    private static $db = array(
        'Title' => 'Text',
    );

    private static $has_many = array(
        'ConsultModulePages' => 'ConsultModulePage',
    );

    private static $allowed_children = array(
        'ConsultModulePage'
    );

    //Getting CMS Fields For our Home slides DataObject
    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->addFieldToTab('Root.Main', TextField::create('Title', 'Title for Consultancy Page'), 'Content');

        return $fields;
    }

}

class ConsultancyPage_Controller extends Page_Controller
{
    public function init()
    {
        //Pull in parent properties for controller e.g css & js assets
        parent::init();
        Requirements::css($this->ThemeDir().'/css/homepage.css');
    }

}