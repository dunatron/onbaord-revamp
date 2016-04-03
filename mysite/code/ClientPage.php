<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 3/04/16
 * Time: 6:43 PM
 */
class ClientPage extends Page
{

    private static $db = array(
        'Title' => 'Text',
    );

    private static $allowed_children = array(
    );

    //Getting CMS Fields For our Home slides DataObject
    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->addFieldToTab('Root.Main', TextField::create('Title', 'Title for Client Page'), 'Content');
        return $fields;
    }

}

class ClientPage_Controller extends Page_Controller
{
    public function init()
    {
        //Pull in parent properties for controller e.g css & js assets
        parent::init();
        Requirements::css($this->ThemeDir().'/css/homepage.css');
    }

}