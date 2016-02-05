<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 5/02/16
 * Time: 11:17 PM
 */

class ModuleSearchPage extends Page {


}

class ModuleSearchPage_Controller extends Page_Controller {

    public function index(SS_HTTPRequest $request) {
        $screenshots = ModuleScreenshot::get()->limit(20);

        if($search = $request->getVar('Title')){
            $screenshots = $screenshots->filter(array(
                'Title:PartialMatch' => $search
            ));
        }

        return array(
            'Results' => $screenshots
        );
    }

    public function ModuleSearchForm() {

        $form = Form::create(
            $this,
            'ModuleSearchForm',
            FieldList::create(
                TextField::create('Title')
                    ->setAttribute('placeholder', '1 Word Search')
                    ->addExtraClass('form-control')
            ),
            FieldList::create(
                FormAction::create('doModuleSearch','Search')
                    ->addExtraClass('btn-lg btn-fullcolor')
            )
        );

        $form->setFormMethod('GET')
             ->setFormAction($this->Link())
             ->disableSecurityToken();

        return $form;
    }
}