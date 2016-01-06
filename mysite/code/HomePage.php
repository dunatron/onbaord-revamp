<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 13/12/15
 * Time: 1:02 PM
 */
class HomePage extends Page {

    private static $has_many = array(
        'ModulePages' => 'ModulePage',
        'ClientLogos' => 'ClientLogo'

    );

    private static $allowed_children = array(
        'ModulePage'
    );

    public function getCMSFields() {
        $fields = parent::getCMSFields();

        //MAIN ASSETS ADDED TO CMS
        $fields->addFieldToTab('Root.Logos', GridField::create(
            'Logo',
            'Logos onBoard',
            $this->ClientLogos(),
            GridFieldConfig_RecordEditor::create()
        ));

        return $fields;
    }

}

class HomePage_Controller extends Page_Controller {

    public function init(){
        //Pull in parent properties for controller e.g css & js assets
        parent::init();
        Requirements::css($this->ThemeDir()."/css/homepage.css");
    }

}