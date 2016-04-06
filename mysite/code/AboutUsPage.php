<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 13/12/15
 * Time: 1:02 PM.
 */
class AboutUsPage extends Page
{

    private static $db = array(
        'Title' => 'Text',
    );


    private static $has_many = array(
        'StaffMembers' => 'StaffMember',
    );

    private static $allowed_children = array(
    );

    //Getting CMS Fields For our Home slides DataObject
    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $fields->addFieldToTab('Root.Main', TextField::create('Title', 'Title for the about page'), 'Content');
        // Add staff Field To Page in the CMS
        $fields->addFieldToTab('Root.Staff', GridField::create(
            'StaffMember',
            'Staff Members on this Page',
            $this->StaffMembers(),
            GridFieldConfig_RecordEditor::create()
        ));

        return $fields;
    }

}

class AboutUsPage_Controller extends Page_Controller
{
    public function init()
    {
        //Pull in parent properties for controller e.g css & js assets
        parent::init();
        Requirements::css($this->ThemeDir().'/css/homepage.css');
    }

}
