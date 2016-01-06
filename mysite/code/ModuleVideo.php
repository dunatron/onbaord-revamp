<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 6/01/16
 * Time: 8:58 PM
 */

class ModuleVideo extends DataObject {

    private static $db = array(
        'VideoURL' => 'Text',
        'Title' => 'Text',
        'Description' => 'Text'
    );

    private static $has_one = array(
        'ModulePage' => 'ModulePage'
    );

    public function getCMSFields()
    {
        $fields = FieldList::create(
            TextField::create('Title'),
            TextField::create('VideoURL'),
            TextareaField::create('Description')
        );

        return $fields;

    }

}