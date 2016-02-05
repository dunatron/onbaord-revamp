<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 25/01/16
 * Time: 5:26 PM
 */
class TronsContentControllerSearchExtension extends Extension {

    function results($data, $form, $request) {
        $data = array(
            'Results' => $form->getResults(),
            'Query' => $form->getSearchQuery(),
            'Title' => _t('SearchForm.SearchResults', 'Search Results')
        );
        return $this->owner->customise($data)->renderWith(array('ModulePage_results', 'ModulePage'));
    }
}
