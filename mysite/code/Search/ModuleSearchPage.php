<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 5/02/16
 * Time: 9:45 PM
 */
class ModuleSearchPage extends Page {

}

class ModuleSearchPage_Controller extends Page_Controller {

    public function ModuleSearchForm(){

        // Create The Form
        $form = Form::create(
            $this,
            'ModuleSearchForm',
            FieldList::create(
                TextField::create('Title')
                    ->setAttribute('placeholder', '1 word search')
                    ->addExtraClass('form-control')
            ),
            FieldList::create(
                FormAction::create('doModuleSearch','Search')
                    ->addExtraClass('btn-lg btn-fullcolor')
            )
        );
        // END The Form

        $form->setFormMethod('GET');

        return $form;

    }

}