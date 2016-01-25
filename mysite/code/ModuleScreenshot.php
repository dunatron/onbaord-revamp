<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 25/01/16
 * Time: 12:21 PM
 */

class ModuleScreenshot extends DataObject {

    private static $db = array(
        'Title' => 'Text',
    );

    private static $has_one = array(
        'ModulePage' => 'ModulePage',
    );

    public function getCMSFields()
    {
        $fields = FieldList::create(
            TextField::create('Title')
        );

        return $fields;
    }

}