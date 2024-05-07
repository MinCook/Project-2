import LayoutDefault from "../components/Layout/LayoutDefault";
import LayoutLogin from "../components/Layout/LayoutLogin";
import LayoutRegister from "../components/Layout/LayoutRegister";
import LayoutApply from "../components/Layout/LayoutApply";
import LayoutSearch from "../components/Layout/LayoutSearch";
import LayoutAdmin from "../components/Layout/LayoutAdmin";
import LayoutJobs from "../components/Layout/LayoutJobs";
import LayoutManageCV from "../components/Layout/LayoutManageCV";
import LayoutManageJob from "../components/Layout/LayoutManageJob";
import LayoutInfoCompany from "../components/Layout/LayoutInfoCompanny";
import LayoutResult from "../components/Layout/LayoutResult";
export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <LayoutSearch />,
      },
      {
        path: "jobs",
        element: <LayoutResult />,
      },
    ],
  },
  {
    path: "login",
    element: <LayoutLogin />,
  },
  {
    path: "register",
    element: <LayoutRegister />,
  },
  {
    path: "jobs/:id",
    element: <LayoutJobs />,
  },
  {
    path: "apply",
    element: <LayoutApply />,
  },
  {
    path: "admin",
    element: <LayoutAdmin />,
    children: [
     
      {
        path: "info-company",
        element: <LayoutInfoCompany />,
      },
      {
        path: "manage-job",
        element: <LayoutManageJob />,
      },
      {
        path: "manage-cv",
        element: <LayoutManageCV />,
      },
    ],
  },
];
