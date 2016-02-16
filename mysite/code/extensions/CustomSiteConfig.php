<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 16/02/16
 * Time: 11:22 PM
 */

class CustomSiteConfig extends DataExtension {

    private static $db = array(
        'FacebookLink' => 'Text',
        'TwitterLink' => 'Text',
        'LinkedInLink' => 'Text',
        'Phone' => 'Text',
        'Email' => 'Text'
    );

    public function updateCMSFields(FieldList $fields) {
        $fields->addFieldToTab("Root.Main",
            new TextField("FacebookLink", "Facebook Link")
        );
        $fields->addFieldToTab("Root.Main",
            new TextField("TwitterLink", "Twitter Link")
        );
        $fields->addFieldToTab("Root.Main",
            new TextField("LinkedInLink", "LinkedIn Link")
        );
        $fields->addFieldToTab("Root.Main",
            new TextField("Phone", "Phone")
        );
        $fields->addFieldToTab("Root.Main",
            new TextField("Email", "Email")
        );
    }
}