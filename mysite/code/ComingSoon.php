<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 22/01/16
 * Time: 9:58 PM
 */
class ComingSoon extends DataObject
{

    private static $db = array(
        'Title' => 'Varchar(100)',
        'iconClass' => 'text',
        'Content' => 'HTMLText'
    );

    private static $has_one = array(
        'HomePage' => 'HomePage'
    );

    private static $summary_fields = array(
       // 'GridThumbnail' => '',
        'Title' => 'Title of Module',
        'iconClass' => 'Glyphicon-class'
    );


//    public function getGridThumbnail()
//    {
//        if ($this->Photo()->exists()) {
//            return $this->Photo()->SetWidth(100);
//        }
//
//        return '(no image)';
//    }



    // CMS UPLOAD FIELDS BITCHES
    public function getCMSFields()
    {
        $fields = FieldList::create(
            TextField::create('Title'),
            TextField::create('iconClass'),
            HtmlEditorField::create('Content')
        );

        return $fields;
    }

}