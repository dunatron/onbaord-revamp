<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 21/02/16
 * Time: 3:34 PM
 */

class ResourceModulePage extends Page
{
    private static $db = array(
        'iconClass' => 'Text',
    );

    private static $has_one = array(
        'ConsultancyPage' => 'ConsultancyPage',
        'VideoHolder' => 'VideoHolder',
        'resourceHolder' => 'resourceHolder'
    );

    private static $has_many = array(
        'ModuleVideos' => 'ModuleVideo'
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

        return $fields;
    }
}

class ResourceModulePage_Controller extends Page_Controller
{

    private static $allowed_actions = array(
        'show'
    );

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

    // Show Video when video ID is pressed
    public function show(SS_HTTPRequest $request) {
        $video = ModuleVideo::get()->byID($request->param('ID'));

        if(!$video) {
            return $this->httpError(404, 'That Video could not be found');
        }

        return array(
            'Video' => $video
        );
        // Variable to use in template -> $Video
    }


}