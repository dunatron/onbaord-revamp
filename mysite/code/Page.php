<?php

class Page extends SiteTree
{
    private static $db = array();

    private static $has_one = array();
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

    public function init()
    {
        parent::init();
        // You can include any CSS or JS required by your project here.
        // See: http://doc.silverstripe.org/framework/en/reference/requirements
        Requirements::set_force_js_to_bottom(true);
        Requirements::javascript('http://code.jquery.com/jquery-2.1.4.min.js');
        Requirements::javascript('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js');
        Requirements::css($this->ThemeDir() . '/css/homepage.css');
        Requirements::javascript($this->ThemeDir() . '/js/homepage.js');
    }

    private static $allowed_actions = array(
        'HelloForm',
        'MyForm',
        'TronsContactForm'
    );

    // Set session Message

    // Set SessionMessages
    // http://www.ssbits.com/tutorials/2011/s-new-post-218/
    public function IsMessages()
    {
        $messages = Session::get('Messages');
        return (!empty($messages));
    }

    public function addMessage($message, $type = 'success', $canclose = true)
    {
        Session::add_to_array('Messages', array(
            'Message' => $message,
            'MessageType' => $type,
            'CanClose' => $canclose
        ));
    }

    public function getMessages()
    {
        if ($messages = Session::get('Messages')) {
            Session::clear('Messages');
            $ArrayList = new ArrayList();
            foreach ($messages as $message) {
                $ArrayList->push(new ArrayData(array(
                    'Message' => $message['Message'],
                    'MessageType' => $message['MessageType'],
                    'CanClose' => $message['CanClose']
                )));
            }
            return $ArrayList;
        }
    }

// this clears any previous messages and sets only this message
    public function setMessage($message, $type = 'success', $canclose = true)
    {
        Session::clear('Messages');
        $this->addMessage($message, $type, $canclose);
    }


    // Hello Form

//    public function HelloForm()
//    {
//        $fields = new FieldList(
//            TextField::create('Name', 'Your Name'),
//            EmailField::create('Email')
//        );
//
//        $actions = new FieldList(
//            FormAction::create("doSayHello")->setTitle("Say hello")
//        );
//
//        $required = new RequiredFields('Name');
//
//        $form = new Form($this, 'HelloForm', $fields, $actions, $required);
//
//        return $form;
//    }
//
//    public function doSayHello($data, Form $form)
//    {
//        $form->sessionMessage('Hello ' . $data['Name'], 'success');
//        //$this->setMessage('Errorrrrr', 'Error: yo fool, foo is not a bar');
//        $this->setMessage('Thanks ' . $data['Name'] . ' onBoard will be in contact asap', 'success');
//        return $this->redirectBack();
//    }

    public function TronsContactForm()
    {
        $fields = new FieldList(
            TextField::create('Name', 'Your Name'),
            EmailField::create('Email'),
            TextareaField::create('Body', 'Message')
        );

        $actions = new FieldList(
            FormAction::create("doSayHello")->setTitle("Say hello")
        );

        $required = new RequiredFields('Name');

        $form = new Form($this, 'TronsContactForm', $fields, $actions, $required);

        return $form;
    }

    public function doSayHello($data, Form $form)
    {
        $to = 'heath.dunlop.hd@gmail.com';
        $subject = 'Website Message';
        $message = $data['Body'];
        mail($to, $subject, $message);
        $form->sessionMessage('Hello ' . $data['Name'], 'success');
        //$this->setMessage('Errorrrrr', 'Error: yo fool, foo is not a bar');
        $this->setMessage('Thanks ' . $data['Name'] . ' onBoard will be in contact asap', 'success');
        return $this->redirectBack();
    }


}
