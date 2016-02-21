<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 17/02/16
 * Time: 6:07 PM
 */

class MyAuthenticator extends Authenticator {

    //authenticate is called by the login form you created
    public static function authenticate($RAW_data, Form $form = null) {
        $SQL_user = Convert::raw2sql($RAW_data['UserName']);
        $member = DataObject::get_one("MyMember", "UserName = '$SQL_user'");
        if ($member) {
            return $member;
        } else {
            if ($form) $form->sessionMessage("That doesn't seem to be the right user name. Please try again.", "bad");
            return false;
        }
    }

    //Tell this Authenticator to use your custom login form
    //The 3rd parameter MUST be 'LoginForm' to fit within the authentication framework
    public static function get_login_form(Controller $controller) {
        return Object::create("MyLoginForm", $controller, "LoginForm");
    }

    //give a title to the MyAuthenticator tab (when multiple Authenticators are registered)
    public static function get_name() {
        return "User Name";
    }

}

?>