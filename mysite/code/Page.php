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
            new TextField('Name'),
            new EmailField('Email'),
            new TextareaField('Message')
        );

        $actions = new FieldList(
            new FormAction('sendEmail', 'Submit')
        );

        $required = new RequiredFields('Name');

        $form = new Form($this, 'TronsContactForm', $fields, $actions, $required);

        return $form;
    }

    public function sendEmail($data, Form $form)
    {
        $email = new Email();

        $email->setTo('heath.dunlop.hd@gmail.com');
        $email->setFrom($data['Email']);
        $email->setSubject("Contact Message from {$data["Name"]}");

        $messageBody = "
            <p><strong>Name:</strong> {$data['Name']}</p>
            <p><strong>Message:</strong> {$data['Message']}</p>
            ";

        $email->setBody($messageBody);
        $email->send();
        return array(
            'Content' => '<p>Thank you for your feedback.</p>',
            'Form' => ''
        );


    }


}
