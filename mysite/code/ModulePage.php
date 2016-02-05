<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 6/01/16
 * Time: 4:47 PM.
 */
class ModulePage extends Page
{
    private static $db = array(
        'iconClass' => 'Text',
    );

    private static $has_one = array(
        'HomePage' => 'HomePage',
    );

    private static $has_many = array(
        'ModuleVideos' => 'ModuleVideo',
        'ModuleScreenshots' => 'ModuleScreenshot'
    );

    private static $can_be_root = false;

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->addFieldToTab('Root.Main', TextField::create('iconClass', 'glyphicon class e.g glyphicon-home'), 'Content');

        //MAIN ASSETS ADDED TO CMS
        $fields->addFieldToTab('Root.Videos', GridField::create(
            'Video',
            'Videos on this page',
            $this->ModuleVideos(),
            GridFieldConfig_RecordEditor::create()
        ));

        //Add Screenshot tutorials create tab to module page
        //MAIN ASSETS ADDED TO CMS
        $fields->addFieldToTab('Root.Screenshots', GridField::create(
            'Screenshots',
            'Screenshots for this Module',
            $this->ModuleScreenshots(),
            GridFieldConfig_RecordEditor::create()
        ));

        return $fields;
    }
}

class ModulePage_Controller extends Page_Controller
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
