//////////////////////////////////////////////
///////////// PROJECT REQUIREMENTS ///////////
//////////////////////////////////////////////

PAGES :

        ( All users )

            1. "/"               --> Home Page
            2. "/home"           --> Home Page
            3. "/pricing"        --> Pricing Page
            4. "/product"        --> Product Page
            5. "/login"          --> Login Page

        ( Authenticated Users )

            6. "/app"            -->
            7. "/app/cities"     --> a. Load City List,    b. Load Map
            8. "/app/countries"  --> a. Load Country List, b. Load Map

//// HOME PAGE

1. Nav
2. Hero
   2.1. Description
   2.2. CTA

//// PRICING PAGE

1.  Nav
2.  PricingDetails

//// PRODUCT PAGE

1.  Nav
2.  ProductDetails

//// LOGIN PAGE

1. Nav
2. Login Form

//// APP PAGE

AppPage (cities, isLoading, error)

    SideBar

        1.1 CityList
            1.1.1 City
            1.1.1 City
            1.1.1 City
            1.1.1 City
            1.1.1 City

        1.2 CountryList
        1.3 CityDetails
        1.4 AddCityForm

2. Map

\*\* Component Tree / React Element Tree / (Virtual DOM)

-   App
    -   HomePage
    -   ProductPage
    -   LoginPage
    -   CityProvider (cities)
        -   AppPage
            -   SideBar
                -   AppNav
                -   CityList
                    -   CityItem
                    -   CityItem
                    -   CityItem
                    -   CityItem
                -   CountryList
                -   AddCityForm
                -   City
            -   Map

/// useReducer Plan

--> action 1 : "cities/load"
--> action 2 : "city/load"
--> action 3 : "city/delete"
--> action 4 : "city/update"
--> action 5 : "city/create"
--> action 6 : "loading"
--> action 7 : "rejected"

state = {
cities: [],
city: null,
loading: false,
error: null
}
