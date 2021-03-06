import React from "react";
import {
  CALCULATION_PAGE,
  LESSON_PAGE,
  LIST_SCREEN_PAGE,
  SERVICEABILITY_CONTENT_URL,
  MAIN_SELECTION_THREE,
  ULTIMATE_URL,
  COMPARE_PAGE,
  SERVICEABILITY_CODE_APPROACHES_URL,
  CODE_SELECTION,
  CALCULATION_SERVICEABILITY_CW_BSI,
  CALCULATION_SERVICEABILITY_CW_EC,
  CALCULATION_SERVICEABILITY_DF_BSI,
  CALCULATION_SERVICEABILITY_DF_EC,
  DEFLECTION_SIMPLIFIED_CALCULATION,
  CALCULATION_ULTIMATE_SHARING, CALCULATION_ULTIMATE_FLEX_RECT, CALCULATION_ULTIMATE_FLEX_FLANGE, BEAM_SELECTION
} from "./urls";



import MainSelectionScreen_I5 from "./screens/MainSelectionScreen_I5";
import LessonsScreen from "./screens/LessonsScreen";
import CategoryScreenServiceability from "./screens/CategoryScreenServiceability";
import CalculationScreen from "./screens/CalculationScreen";
import ListScreen from "./screens/ListScreen";
import CompareScreen from "./screens/CompareScreen";
import CodeSelect from "./screens/CodeSelection";

import ServiceabilityCWBSI from "./screens/calculation/ServiceabilityCWBSI";
import ServiceabilityCWEC from "./screens/calculation/ServiceabilityCWEC";
import ServiceabilityDFBSI from "./screens/calculation/ServiceabilityDFBSI";
import ServiceabilityDFEC from "./screens/calculation/ServiceabilityDFEC";
import DefSimplifiedCalculation from "./screens/calculation/DefSimplifiedCalculation";
import UltimateShear from "./screens/calculation/UltimateShear";
import UltimateFlexRect from "./screens/calculation/UltimateFlexRect";
import UltimateFlexFlange from "./screens/calculation/UltimateFlexFlange";
import BeamSelection from "./screens/BeamSelection";


const Breadcrumbs = React.lazy(() => import("./views/Base/Breadcrumbs"));
const Cards = React.lazy(() => import("./views/Base/Cards"));
const Carousels = React.lazy(() => import("./views/Base/Carousels"));
const Collapses = React.lazy(() => import("./views/Base/Collapses"));
const Dropdowns = React.lazy(() => import("./views/Base/Dropdowns"));
const Forms = React.lazy(() => import("./views/Base/Forms"));
const Jumbotrons = React.lazy(() => import("./views/Base/Jumbotrons"));
const ListGroups = React.lazy(() => import("./views/Base/ListGroups"));
const Navbars = React.lazy(() => import("./views/Base/Navbars"));
const Navs = React.lazy(() => import("./views/Base/Navs"));
const Paginations = React.lazy(() => import("./views/Base/Paginations"));
const Popovers = React.lazy(() => import("./views/Base/Popovers"));
const ProgressBar = React.lazy(() => import("./views/Base/ProgressBar"));
const Switches = React.lazy(() => import("./views/Base/Switches"));
const Tables = React.lazy(() => import("./views/Base/Tables"));
const Tabs = React.lazy(() => import("./views/Base/Tabs"));
const Tooltips = React.lazy(() => import("./views/Base/Tooltips"));
const BrandButtons = React.lazy(() => import("./views/Buttons/BrandButtons"));
const ButtonDropdowns = React.lazy(() =>
  import("./views/Buttons/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() => import("./views/Buttons/ButtonGroups"));
const Buttons = React.lazy(() => import("./views/Buttons/Buttons"));
const Charts = React.lazy(() => import("./views/Charts"));
// const Dashboard = React.lazy(() => import("./views/Dashboard"));
const CoreUIIcons = React.lazy(() => import("./views/Icons/CoreUIIcons"));
const Flags = React.lazy(() => import("./views/Icons/Flags"));
const FontAwesome = React.lazy(() => import("./views/Icons/FontAwesome"));
const SimpleLineIcons = React.lazy(() =>
  import("./views/Icons/SimpleLineIcons")
);
const Alerts = React.lazy(() => import("./views/Notifications/Alerts"));
const Badges = React.lazy(() => import("./views/Notifications/Badges"));
const Modals = React.lazy(() => import("./views/Notifications/Modals"));
const Colors = React.lazy(() => import("./views/Theme/Colors"));
const Typography = React.lazy(() => import("./views/Theme/Typography"));
const Widgets = React.lazy(() => import("./views/Widgets/Widgets"));
const Users = React.lazy(() => import("./views/Users/Users"));
const User = React.lazy(() => import("./views/Users/User"));


const DepartmentCreate = React.lazy(() => import("./screens/department/DepartmentCreate"));
const DepartmentList = React.lazy(() => import("./screens/department/DepartmentList"));
const CustomDashboard = React.lazy(() => import("./screens/CustomDashboard"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [

  {path: "/department/create", name: "Create Department", component: DepartmentCreate,},
  {path: "/department/list", name: "Department List", component: DepartmentList,},
  {path: SERVICEABILITY_CONTENT_URL, name: "Serviceability", component: CategoryScreenServiceability,
    props: { logic: "CONTENT" },},
  {path: SERVICEABILITY_CODE_APPROACHES_URL, name: "Code approaches", component: CategoryScreenServiceability,
    props: { logic: "CODE_APPROACHES" },},
  {path: ULTIMATE_URL, name: "Ultimate", component: MainSelectionScreen_I5,},
  {path: MAIN_SELECTION_THREE, name: "Main Selection Two", component: MainSelectionScreen_I5,},
  {path: LESSON_PAGE, name: "Lesson", component: LessonsScreen},
  {path: CALCULATION_PAGE, name: "Calculation", component: CalculationScreen},
  {path: LIST_SCREEN_PAGE, name: "List of lesson", component: ListScreen},
  {path: COMPARE_PAGE, name: "Compare page", component: CompareScreen},
  {path: CODE_SELECTION, name: "Code Selection", component: CodeSelect},
  {path: CALCULATION_SERVICEABILITY_CW_BSI, name: "Crack Width Calculation-BSI", component: ServiceabilityCWBSI},
  {path: CALCULATION_SERVICEABILITY_CW_EC, name: "Crack Width Calculation-EC", component: ServiceabilityCWEC},
  {path: CALCULATION_SERVICEABILITY_DF_BSI, name: "Deflection Calculation-BSI", component: ServiceabilityDFBSI},
  {path: CALCULATION_SERVICEABILITY_DF_EC, name: "Deflection Calculation-EC", component: ServiceabilityDFEC},
  {path: CODE_SELECTION, name: "Compare page", component: CodeSelect},
  {path: DEFLECTION_SIMPLIFIED_CALCULATION, name: "Deflection Simplified Calculation", component: DefSimplifiedCalculation},
  {path: CALCULATION_ULTIMATE_SHARING, name: "Shear Capacity and Shear Reinforcement", component: UltimateShear},
  {path: CALCULATION_ULTIMATE_FLEX_RECT, name: "Rectangular Beam Calculation", component: UltimateFlexRect},
  {path: CALCULATION_ULTIMATE_FLEX_FLANGE, name: "Flange Beam Calculation", component: UltimateFlexFlange},
  {path: BEAM_SELECTION, name: "Beam Selection", component: BeamSelection},


  {path: "/", exact: true, name: "Home"},
  {path: "/dashboard", name: "Dashboard", component: CustomDashboard},
  {path: "/theme", exact: true, name: "Theme", component: Colors},
  {path: "/theme/colors", name: "Colors", component: Colors},
  {path: "/theme/typography", name: "Typography", component: Typography},
  {path: "/base", exact: true, name: "Base", component: Cards},
  {path: "/base/cards", name: "Cards", component: Cards},
  {path: "/base/forms", name: "Forms", component: Forms},
  {path: "/base/switches", name: "Switches", component: Switches},
  {path: "/base/tables", name: "Tables", component: Tables},
  {path: "/base/tabs", name: "Tabs", component: Tabs},
  {path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs},
  {path: "/base/carousels", name: "Carousel", component: Carousels},
  {path: "/base/collapses", name: "Collapse", component: Collapses},
  {path: "/base/dropdowns", name: "Dropdowns", component: Dropdowns},
  {path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons},
  {path: "/base/list-groups", name: "List Groups", component: ListGroups},
  {path: "/base/navbars", name: "Navbars", component: Navbars},
  {path: "/base/navs", name: "Navs", component: Navs},
  {path: "/base/paginations", name: "Paginations", component: Paginations},
  {path: "/base/popovers", name: "Popovers", component: Popovers},
  {path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar},
  {path: "/base/tooltips", name: "Tooltips", component: Tooltips},
  {path: "/buttons", exact: true, name: "Buttons", component: Buttons},
  {path: "/buttons/buttons", name: "Buttons", component: Buttons},
  {
    path: "/buttons/button-dropdowns",
    name: "Button Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  {path: "/icons", exact: true, name: "Icons", component: CoreUIIcons},
  {path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons},
  {path: "/icons/flags", name: "Flags", component: Flags},
  {path: "/icons/font-awesome", name: "Font Awesome", component: FontAwesome},
  {
    path: "/icons/simple-line-icons",
    name: "Simple Line Icons",
    component: SimpleLineIcons,
  },
  {
    path: "/notifications",
    exact: true,
    name: "Notifications",
    component: Alerts,
  },
  {path: "/notifications/alerts", name: "Alerts", component: Alerts},
  {path: "/notifications/badges", name: "Badges", component: Badges},
  {path: "/notifications/modals", name: "Modals", component: Modals},
  {path: "/widgets", name: "Widgets", component: Widgets},
  {path: "/charts", name: "Charts", component: Charts},
  {path: "/users", exact: true, name: "Users", component: Users},
  {path: "/users/:id", exact: true, name: "User Details", component: User},
];

export default routes;
