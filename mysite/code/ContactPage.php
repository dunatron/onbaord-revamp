<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 6/02/16
 * Time: 6:16 PM
 */

class ContactPage extends Page {

}

class ContactPage_Controller extends Page_Controller {

    private static $allowed_actions = array('ContactForm');

    public function ContactForm() {
        $fields = new FieldList(
            new TextField('Name'),
            new EmailField('Email'),
            new TextareaField('Message')
        );

        $actions = new FieldList(
            new FormAction('submit', 'Submit')
        );

        return new Form($this, 'ContactForm', $fields, $actions);
    }

}