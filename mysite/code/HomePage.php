<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 13/12/15
 * Time: 1:02 PM.
 */
class HomePage extends Page
{
    private static $has_many = array(
        'ModulePages' => 'ModulePage',

    );

    private static $allowed_children = array(
        'ModulePage',
    );
}

class HomePage_Controller extends Page_Controller
{
    public function init()
    {
        //Pull in parent properties for controller e.g css & js assets
        parent::init();
        Requirements::css($this->ThemeDir().'/css/homepage.css');
    }
}
