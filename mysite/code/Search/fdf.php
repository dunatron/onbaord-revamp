<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 8/09/15
 * Time: 8:41 PM
 *
 *
 *
 */





class ProductSearchPage extends Page {

    private static $has_many = array (
        'Products' => 'Product',
    );


    public function getCMSFields() {
        $fields = parent::getCMSFields();
        $fields->addFieldToTab('Root.Products', GridField::create(
            'Products',
            'Products on this page',
            $this->Products(),
            GridFieldConfig_RecordEditor::create()
        ));

        return $fields;
    }


}

class ProductSearchPage_Controller extends Page_Controller {

    /*
     * Index Method always fired by every page so no need to white list it.
     *
     * Return a list of all products (if no search is applied)
     */
    public function index(SS_HTTPRequest $request){

        $products = Product::get();

        if($search = $request->getVar('Keywords')) {
            $products = $products->filter(array(
                'Title:PartialMatch' => $search
            ));
        }

        if($minPrice = $request->getVar('MinPrice')) {
            $products = $products->filter(array(
                'Price:GreaterThanOrEqual' => $minPrice
            ));
        }

        if($maxPrice = $request->getVar('MaxPrice')) {
            $products = $products->filter(array(
                'Price:LessThanOrEqual' => $maxPrice
            ));
        }

        $paginatedProducts = PaginatedList::create(
            $products,
            $request
        )->setPageLength(6);

        $data = array(
            'Results' => $paginatedProducts
        );

        /*
        if($request->isAjax()){
            return $this->customise(array(
                'Results' => $paginatedProducts
            ))->renderWith('ProductSearchResults');
        }
        */

        if($request->isAjax()){
            return $this->customise($data)
                ->renderWith('ProductSearchResults');
        }

        return $data;

    }


    public function ProductSearchForm() {
        $prices = array();
        foreach(range(20, 200, 20) as $i) {
            $prices[$i] = '$'.$i;
        }

        $form = Form::create(
            $this,
            'ProductSearchForm',
            FieldList::create(
                TextField::create('Keywords')
                    ->setAttribute('placeholder', 'Title...')
                    ->addExtraClass('form-control addTopMargin'),
                DropdownField::create('MinPrice', 'Min. price')
                    ->setEmptyString('-- any --')
                    ->setSource($prices)
                    ->addExtraClass('form-control addTopMargin'),
                DropdownField::create('MaxPrice', 'Max. price')
                    ->setEmptyString('-- any --')
                    ->setSource($prices)
                    ->addExtraClass('form-control addTopMargin')
            ),
            FieldList::create(
                FormAction::create('doProductSearch', 'Search')
                    ->addExtraClass('btn-lg btn-ldds-orange center-block addTopMargin')
            )
        );

        $form->setFormMethod('GET')
            ->setFormAction($this->Link())
            ->disableSecurityToken()
            ->loadDataFrom($this->request->getVars());

        return $form;
    }

    //ALLOWED ACTIONS WHITE LISTED HERE
    private static $allowed_actions = array(
        'show'
    );

    // RENDER PRODUCT DETAILS PAGE START
    public function show(SS_HTTPRequest $request) {
        $product = Product::get()->byID($request->param('ID'));

        if(!$product) {
            return $this->httpError(404, 'That product could not be found');
        }

        return array(
            'Product' => $product
        );
    }

    // RENDER PRODUCT DETAILS PAGE END

}