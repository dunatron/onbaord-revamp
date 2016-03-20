<?php

class CustomLoginForm extends MemberLoginForm
{

    // this function is overloaded on our subclass (this) to do something different
//    public function dologin($data) {
//        if($this->performLogin($data)) {
//            if(!$this->redirectByGroup($data))
//                $this->controller->redirect(Director::absoluteBaseURL());
//        } else {
//            if($badLoginURL = Session::get("BadLoginURL")) {
//                $this->controller->redirect($badLoginURL);
//            } else {
//                $this->controller->redirectBack();
//            }
//        }
//    }
//
//    public function redirectByGroup($data) {
//        // gets the current member that is logging in.
//        $member = Member::currentUser();
//
//        // gets all the groups.
//        $Groups = DataObject::get("Group");
//        // cycle through each group
//        foreach($Groups as $Group){
//            // if the member is in the group and that group has GoToAdmin checked
//            if($member->inGroup($Group->ID) && $Group->GoToAdmin == 1)
//            {
//                // redirect to the admin page
//                $this->controller->redirect(Director::absoluteBaseURL() . 'admin');
//                return true;
//
//            }
//            // otherwise if the member is in the group and that group has a page link defined
//            elseif($member->inGropup($Group->ID) && $Group->LinkPageID != 0)
//            {
//                // Get the page that is referenced in the group
//                $Link = DataObject::get_by_id("SiteTree", "{$Group->LinkPageID}")->URLSegment;
//                //direct to that page
//                $this->controller->redirect(Director::absoluteBaseURL() . $Link);
//                return true;
//            }
//        }
//        // otherwise if none of the above worked return false
//        return false;
//    }

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

    /**
     * Login in the user and figure out where to redirect the browser.
     *
     * The $data has this format
     * array(
     *   'AuthenticationMethod' => 'MemberAuthenticator',
     *   'Email' => 'sam@silverstripe.com',
     *   'Password' => '1nitialPassword',
     *   'BackURL' => 'test/link',
     *   [Optional: 'Remember' => 1 ]
     * )
     *
     * @param array $data
     * @return SS_HTTPResponse
     */
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
        $url = "/resources/";
        $url = Controller::join_links(Director::absoluteBaseURL(), $url);
        return $this->controller->redirect($url);
    }

}