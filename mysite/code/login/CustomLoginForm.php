<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 9/02/16
 * Time: 10:29 PM
 */

class CustomLoginForm extends MemberLoginForm {
    public function dologin($data) {
        if($this->performLogin($data)) {
            if(!$this->redirectByClient($data))
                Controller::curr()->redirect(Director::baseURL());
        } else {
            if($badLoginURL = Session::get('BadLoginURL')) {
                Controller::curr()->redirect($badLoginURL);
            } else {
                //Controller::curr()->redirectBack();
                $this->redirect('http://google.com');
            }
        }
    }

    public function redirectByClient($data) {
        $member = Member::currentUser();

        if ($member && $Page = $member->ClientPage()) {
            return Controller::curr()->redirect($Page->Link());
        }

        return false;
    }
}