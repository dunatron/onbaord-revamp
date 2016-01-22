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
        'HomeSlides' => 'HomeSlides',
        'ComingSoon' => 'ComingSoon'

    );

    private static $allowed_children = array(
        'ModulePage',
    );

    //Getting CMS Fields For our Home slides DataObject
    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->addFieldToTab('Root.HomeSlides', GridField::create(
            'HomeSlides',
            'Slides On This Page',
            $this->HomeSlides(),
            GridFieldConfig_RecordEditor::create()
        ));
        $fields->addFieldToTab('Root.ComingSoon', GridField::create(
            'ComingSoon',
            'Modules Coming Soon',
            $this->ComingSoon(),
            GridFieldConfig_RecordEditor::create()
        ));

        return $fields;
    }

}

class HomePage_Controller extends Page_Controller
{
    public function init()
    {
        //Pull in parent properties for controller e.g css & js assets
        parent::init();
        Requirements::css($this->ThemeDir().'/css/homepage.css');
    }

    // Return all Members(use this on template to loop client logos)
    function pullMembers(){
        $members = DataObject::get('Member');
        return $members;
    }

}
