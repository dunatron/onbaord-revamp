<?php

class Page extends SiteTree
{
    private static $db = array(
    );

    private static $has_one = array(
    );
}
class Page_Controller extends ContentController
{
    /**
     * An array of actions that can be accessed via a request. Each array element should be an action name, and the
     * permissions or conditions required to allow the user to access it.
     *
     * <code>
     * array (
     *     'action', // anyone can access this action
     *     'action' => true, // same as above
     *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
     *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
     * );
     * </code>
     *
     * @var array
     */
    private static $allowed_actions = array(
    );

    public function init()
    {
        parent::init();
        // You can include any CSS or JS required by your project here.
        // See: http://doc.silverstripe.org/framework/en/reference/requirements
        Requirements::set_force_js_to_bottom(true);
        Requirements::javascript('http://code.jquery.com/jquery-2.1.4.min.js');
        Requirements::javascript('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js');
        Requirements::css($this->ThemeDir().'/css/homepage.css');
        Requirements::javascript($this->ThemeDir().'/js/homepage.js');
    }

    public function ContactForm() {
        $myForm = Form::create(
            $controller,
            'ContactForm',
            FieldList::create(
                TextField::create('YourName','Your name'),
                TextareaField::create('YourComments','Your comments')
            ),
            FieldList::create(
                FormAction::create('sendContactForm','Submit')
            ),
            RequiredFields::create('YourName','YourComments')
        );

        return $myForm;
    }

    public function sendContactForm($data, $form) {
        $name = $data['YourName'];
        $message = $data['YourMessage'];
        if(strlen($message) < 10) {
            $form->addErrorMessage('YourMessage','Your message is too short','bad');
            return $this->redirectBack();
        }

        return $this->redirect('/some/success/url');
    }


}
