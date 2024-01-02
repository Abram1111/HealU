import React, { useState } from "react";
import { Grid } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import PatientData from "../components/PatientData";
import History from "../components/history";
import DietPlan from "../components/dietPlan";
import ListPrescription from "../components/list";
import Add from "../components/Add";
import Button from "../components/Button";
// import DietPlanModal from "../components/DietPlanModal";

const ContainerWrapper = styled("div")(({ theme }: { theme: Theme }) => ({
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
  marginLeft: "80px",
}));

const ContentWrapper = styled("div")({});

const NutritionDashBoard = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const additionalComponents = [
    {
      component: <Add title="Prescription" modalType="prescription" />,
      key: "prescription",
    },
    {
      component: <Add title="Diet Plan" modalType="dietPlan" />,
      key: "dietPlan",
    },
    { component: <Add title="Test" modalType="test" />, key: "tests" },
  ];

  // const additionalComponents = [
  //   {
  //     component: <Add title="Prescription" />,
  //     key: "prescription",
  //   },
  //   {
  //     component: <Add title="Diet Plan" />,
  //     key: "dietPlan",
  //   },
  //   { component: <Add title="Test" />, key: "tests" },
  // ];

  return (
    <ContainerWrapper>
      <ContentWrapper>
        <Grid container spacing={13}>
          <Grid item>
            <PatientData name="John Doe" weight={70} length={175} age={30} />
          </Grid>
          <Grid item>
            <History />
          </Grid>
          <Grid item>
            <DietPlan />
            <Grid container spacing={2}>
              {additionalComponents.map((componentData) => (
                <Grid item key={componentData.key}>
                  {componentData.component}
                </Grid>
              ))}
            </Grid>

            <Grid container spacing={2}>
              <Grid item>
                <ListPrescription />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item>
            <Button label="Done" onClick={handleOpenModal} />
          </Grid>
        </Grid>
      </ContentWrapper>
    </ContainerWrapper>
  );
};

export default NutritionDashBoard;
