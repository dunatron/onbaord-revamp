<?php

/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 17/02/16
 * Time: 6:05 PM
 */
class MyLoginForm extends LoginForm
{

    protected $authenticator_class = 'MyAuthenticator';

    //we add fields in the constructor so the form is generated when instantiated
    function __construct($controller, $name, $fields = null, $actions = null, $checkCurrentUser = true)
    {
        //create your authenticator input here, e.g. username, but it could be any credentials
        //add your Authenticator to the form
        $fields = new FieldSet(
            new TextField('UserName', 'User Name'),
            new HiddenField("AuthenticationMethod", null, $this->authenticator_class, $this),
            new CheckboxField("Remember", "Remember me next time?")
        );

        $actions = new FieldSet(
            new FormAction('dologin', 'Log in')
        );

        //LoginForm does its magic
        parent::__construct($controller, $name, $fields, $actions);
    }


    // this function controls the redirect based on success/failure
    public function dologin($data)
    {
        if ($this->performLogin($data)) {
            Director::redirect(Director::baseURL());
        } else {
            Director::redirectBack();
        }
    }


    //call our own Authenticator
    public function performLogin($data)
    {
        if ($member = MyAuthenticator::authenticate($data, $this)) {
            $member->LogIn(isset($data['Remember']));
            return $member;
        } else {
            return null;
        }
    }

}

?>