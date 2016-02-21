<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 21/02/16
 * Time: 2:42 PM
 */

class ConsultancyPage extends Page {

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
//        $fields->addFieldToTab('Root.HomeSlides', GridField::create(
//            'HomeSlides',
//            'Slides On This Page',
//            $this->HomeSlides(),
//            GridFieldConfig_RecordEditor::create()
//        ));
//        $fields->addFieldToTab('Root.ComingSoon', GridField::create(
//            'ComingSoon',
//            'Modules Coming Soon',
//            $this->ComingSoon(),
//            GridFieldConfig_RecordEditor::create()
//        ));

        return $fields;
    }

}

class ConsultancyPage_Controller extends Page_Controller {

    public function init()
    {
        //Pull in parent properties for controller e.g css & js assets
        parent::init();
        Requirements::css($this->ThemeDir().'/css/homepage.css');
    }


}