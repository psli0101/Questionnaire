import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";

// Login
import LoginPage from "@/layout/LoginPage.vue"
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Questionnaire from "@/pages/Questionnaire.vue"
import Icons from "@/pages/Icons.vue";
import TableList from "@/pages/TableList.vue";

import SimplePage from "@/pages/questionnaire/Simple.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      },
      {
        path: "user",
        name: "user",
        component: UserProfile
      },
      {
        path: "questionnaire",
        name: "questionnaire",
        component: Questionnaire
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
    ]
  },
  {
    path: "/table-list-answer",
    name: "table-list-answer",
    component: SimplePage
  },
  {
    path: "/login",
    component: LoginPage
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
