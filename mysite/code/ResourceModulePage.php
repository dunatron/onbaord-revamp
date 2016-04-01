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
    );

    private static $has_many = array(
        'ModuleVideos' => 'ModuleVideo',
        'ModuleResources' => 'ModuleResource',
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

        $fields->addFieldToTab('Root.Resources', GridField::create(
            'Resource',
            'Resources on this page',
            $this->ModuleResources(),
            GridFieldConfig_RecordEditor::create()
        ));

        return $fields;
    }
}

class ResourceModulePage_Controller extends Page_Controller
{

    private static $allowed_actions = array(
        'show',
        'showfiles',
        'tronsvids',
        'tronsfiles'
    );

    public function tronsvids(SS_HTTPRequest $request){
        print_r($request->allParams());
    }

    public function tronsfiles(SS_HTTPRequest $request){

//        echo '<pre>';
//        var_dump($request);
//        echo '</pre>';
//        die('die');

//        return $this->ResourceModulePage()->Link('show/'.$this->ID)
//            ->renderWith('ResourceModulePageFilesList');

        return $this->renderWith('ResourceModulePageFilesList');




    }


    public function Link($action = null){
            return $this->LinkOrSection();
    }

//    public function LinkingMode($action = null) {
//        $controllerAction = $this->getAction();
//        if (is_null($controllerAction) && is_null($action))
//            return MyChildClass::LinkingMode();
//
//        if ($action == $controllerAction)
//            return 'current';
//        else
//            return $this->LinkOrSection();
//    }


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