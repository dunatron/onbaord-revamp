<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 21/02/16
 * Time: 2:42 PM
 */

class ResourcePage extends Page {

    private static $has_many = array(
        'ResourceModulePages' => 'ResourceModulePage',
    );

    private static $allowed_children = array(
        'ResourceModulePage',
    );

    //Getting CMS Fields For our Home slides DataObject
    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        return $fields;
    }

}

class ResourcePage_Controller extends Page_Controller {

    public function init()
    {
        //Pull in parent properties for controller e.g css & js assets
        parent::init();
        Requirements::css($this->ThemeDir().'/css/homepage.css');



    }

    private static $allowed_actions = array (

    );

}