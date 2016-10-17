<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 21/02/16
 * Time: 7:46 PM
 */

class ModuleResource extends DataObject
{
    private static $db = array(
        'Title' => 'Text',
        'Description' => 'Text',
    );

    private static $has_one = array(
        'ResourceModulePage' => 'ResourceModulePage',
        'ModuleFile' => 'File'
    );

    public function getCMSFields()
    {
        $fields = FieldList::create(
            TextField::create('Title'),
            TextareaField::create('Description'),
            UploadField::create('ModuleFile','Module Files, optional (PDF only)')
        );

       // $fields->addFieldToTab('Root.Files', UploadField::create('ModuleFile','Module Files, optional (PDF only)'));

        return $fields;
    }

    public function Link() {
        return $this->ResourceModulePage()->Link('showfiles/'.$this->ID);
    }
    
}

