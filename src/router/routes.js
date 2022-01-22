import ViewLayout from "@/views/ViewLayout";

// Login
import LoginHome from "@/views/login/LoginHome"
// Dashboard
import DashboardHome from "@/views/dashboard/DashboardHome";
// Sources
import SourcesOverview from "@/views/sources/SourcesOverview";
import SourcesRegister from "@/views/sources/SourcesRegister";
// Analyzes
import AnalyzesOverview from "@/views/analyzes/AnalyzesOverview";

/* Applications */
// Kontrolaiphe
import KontrolaipheHome from "@/views/kontrolaiphe/KontrolaipheHome";
import KontrolaipheApp from "@/views/kontrolaiphe/KontrolaipheApp";

export default [
  {
    path: "/",
    redirect: "/sources"
  },
  {
    path: "/login",
    component: LoginHome,
    meta: {
      application: false,
      hidden: true
    }
  },
  {
    path: "/sources",
    component: ViewLayout,
    children: [
      {
        path: "",
        components: {
          page: SourcesOverview
        }
      },
      {
        path: "register",
        components: {
          page: SourcesRegister
        }
      }
    ],
    meta: {
      icon: "play-circle"
    }
  },
  {
    path: "/dashboard",
    component: ViewLayout,
    children: [
      {
        path: "",
        components: {
          page: DashboardHome
        }
      }
    ],
    meta: {
      icon: "tachometer-alt",
      subtitle: '(Disabled)',
      disabled: true
    }
  },
  {
    path: "/analyzes",
    component: ViewLayout,
    children: [
      {
        path: "",
        components: {
          page: AnalyzesOverview
        }
      }
    ],
    meta: {
      icon: "cogs",
      subtitle: '(Disabled)',
      disabled: true
    }
  },
  {
    path: "/kontrolaiphe",
    component: ViewLayout,
    children: [
      {
        path: "",
        components: {
          page: KontrolaipheHome
        }
      },
      {
        path: ":id",
        components: {
          page: KontrolaipheApp
        }
      } 

    ],
    meta: {
      application: true,
      icon: "search"
    }
  },
  {
    path: "*",
    redirect: "/"
  }
];
