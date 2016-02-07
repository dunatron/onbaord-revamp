<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 6/02/16
 * Time: 6:16 PM
 */

//class ContactPage extends Page {
//
//}
//
//class ContactPage_Controller extends Page_Controller {
//
//    private static $allowed_actions = array('ContactForm');
//
//    // Contact form to use in template($ContactForm)
//    public function ContactForm() {
//        $fields = new FieldList(
//            new TextField('Name'),
//            new EmailField('Email'),
//            new TextareaField('Message')
//        );
//
//        $actions = new FieldList(
//            new FormAction('submit', 'Submit')
//        );
//
//        $validator = new RequiredFields('Name', 'Message');
//
//        return new Form($this, 'Form', $fields, $actions, $validator);
//    }
//
//    public function submit($data, $form) {
//        $email = new Email();
//
//        $email->setTo('heath.dunlop.hd@gmail.com');
//        $email->setFrom($data['Email']);
//        $email->setSubject("Contact Message from {$data["Name"]}");
//
//        $messageBody = "
//            <p><strong>Name:</strong> {$data['Name']}</p>
//            <p><strong>Message:</strong> {$data['Message']}</p>
//        ";
//
//        $email->setBody($messageBody);
//        $email->send();
//        return array(
//            'Content' => '<p>Thank you for your feedback.',
//            'ContactForm' => ''
//        );
//    }
//
//}

class ContactPage extends Page {
}
class ContactPage_Controller extends Page_Controller {

    private static $allowed_actions = array('Form');

    public function Form() {
        $fields = new FieldList(
            new TextField('Name'),
            new EmailField('Email'),
            new TextareaField('Message')
        );
        $actions = new FieldList(
            new FormAction('submit', 'Submit')
        );
        $validator = new RequiredFields('Name', 'Message');
        return new Form($this, 'Form', $fields, $actions, $validator);
    }

    public function submit($data, $form) {
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


