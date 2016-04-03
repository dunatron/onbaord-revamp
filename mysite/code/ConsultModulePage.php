<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 3/04/16
 * Time: 7:00 PM
 */
class ConsultModulePage extends Page
{
    private static $db = array(
        'iconClass' => 'Text',
    );

    private static $has_one = array(
        'ConsultancyPage' => 'ConsultancyPage'
    );

    private static $can_be_root = false;

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->addFieldToTab('Root.Main', TextField::create('iconClass', 'glyphicon class e.g glyphicon-home'), 'Content');

        return $fields;
    }
}

class ConsultModulePage_Controller extends Page_Controller
{
    public function init()
    {
        //Pull in parent properties for controller e.g css & js assets
        parent::init();
        Requirements::css($this->ThemeDir().'/css/module-page.css');
    }

    /**
     * @return string
     */
    public function getScriptName()
    {
        //return 'job-details.js';
    }

    /**
     * @return string
     */
    public function getStyleName()
    {
        return 'module-page.css';
    }


}
