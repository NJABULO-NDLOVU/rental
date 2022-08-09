
export const urlMapping = [
    {
        route: "/identities/allIdentities", 
        defaultNavigation: 'dashboard',
    }, 

    {   
        route: "identityView",
        defaultNavigation: "/identities/allIdentities",
        params: 
            {
                previousComponent: "accounts",
                navigation: "/applications/allApplications/"
            }
        
    },

    {
        route: "details",
        defaultNavigation: "/identities/allIdentities",
        params: 
            {
                previousComponent: "accounts",
                navigation: "/applications/allApplications/"
            }
        
    },

    {
        route: "directReports",
        defaultNavigation: "/identities/allIdentities",
        params: 
            {
                previousComponent: "accounts",
                navigation: "/applications/allApplications/"
            }
        
    },
    
    {
        route: "access",
        defaultNavigation: "/identities/allIdentities",
        params: 
            {
                previousComponent: "accounts",
                navigation: "/applications/allApplications/"
            }
        
    },


    {
        route: '/applications/allApplications', 
        defaultNavigation: 'dashboard'
    },

    {
        route: "applicationDetails",
        defaultNavigation: "/applications/allApplications",
        params: 
            {
                previousComponent: "",
                navigation: ""
            }
        
        
    },

    {
        route: "accounts",
        defaultNavigation: "/applications/allApplications",
        params: 
            {
                previousComponent: "",
                navigation: ""
            }
    
    },

    {
        route: "entitlements",
        defaultNavigation: "/applications/allApplications",
        params: 
            {
                previousComponent: "",
                navigation: ""
            }
        
    },
    
    {
        route: "applicationHistory",
        defaultNavigation: "/applications/allApplications",
        params: 
            {
                previousComponent: "",
                navigation: ""
            }
       
    }
]