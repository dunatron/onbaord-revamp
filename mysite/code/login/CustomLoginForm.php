<?php

class CustomLoginForm extends MemberLoginForm
{


    public function dologin($data) {
        if($this->performLogin($data)) {
            $this->logInUserAndRedirect(Director::absoluteBaseURL());
        } else {
            if(array_key_exists('Email', $data)){
                Session::set('SessionForms.MemberLoginForm.Email', $data['Email']);
                Session::set('SessionForms.MemberLoginForm.Remember', isset($data['Remember']));
            }

            if(isset($_REQUEST['BackURL'])) $backURL = $_REQUEST['BackURL'];
            else $backURL = null;

            if($backURL) Session::set('BackURL', $backURL);

            // Show the right tab on failed login
            $loginLink = Director::absoluteBaseURL($this->controller->Link('login'));
            if($backURL) $loginLink .= '?BackURL=' . urlencode($backURL);
            $this->controller->redirect($loginLink . '#' . $this->FormName() .'_tab');
        }
    }

    protected function logInUserAndRedirect($data) {
        Session::clear('SessionForms.MemberLoginForm.Email');
        Session::clear('SessionForms.MemberLoginForm.Remember');

        if(Member::currentUser()->isPasswordExpired()) {
            if(isset($_REQUEST['BackURL']) && $backURL = $_REQUEST['BackURL']) {
                Session::set('BackURL', $backURL);
            }
            $cp = new ChangePasswordForm($this->controller, 'ChangePasswordForm');
            $cp->sessionMessage(
                _t('Member.PASSWORDEXPIRED', 'Your password has expired. Please choose a new one.'),
                'good'
            );
            return $this->controller->redirect('Security/changepassword');
        }

        // Absolute redirection URLs may cause spoofing
        if(!empty($_REQUEST['BackURL'])) {
            $url = $_REQUEST['BackURL'];
            if(Director::is_site_url($url) ) {
                $url = Director::absoluteURL($url);
            } else {
                // Spoofing attack, redirect to homepage instead of spoofing url
                $url = Director::absoluteBaseURL();
            }
            return $this->controller->redirect($url);
        }

        // If a default login dest has been set, redirect to that.
        if ($url = Security::config()->default_login_dest) {
            $url = Controller::join_links(Director::absoluteBaseURL(), $url);
            return $this->controller->redirect($url);
        }

        // Redirect the user to the page where they came from
        $member = Member::currentUser();
        if($member) {
            $firstname = Convert::raw2xml($member->FirstName);
            if(!empty($data['Remember'])) {
                Session::set('SessionForms.MemberLoginForm.Remember', '1');
                $member->logIn(true);
            } else {
                $member->logIn();
            }

            Session::set('Security.Message.message',
                _t('Member.WELCOMEBACK', "Welcome Back, {firstname}", array('firstname' => $firstname))
            );
            Session::set("Security.Message.type", "good");
        }
        // Do checks of pagetypes to see where we were and where to go then for the rest redirect to baseurl
//        $url = "/resources/";
        $url = "/about-us/";
        $url = Controller::join_links(Director::absoluteBaseURL(), $url);
        return $this->controller->redirect($url);
    }

}