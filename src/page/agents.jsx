import React, { useEffect, useState } from "react";
import AllAgent from "../Components/AllAgent/AllAgents";
import { useLoaderData } from "react-router-dom";
import { isEmptyOrNull } from "../utility/helper";

const AgentsPage = () => {
  const agentResp = useLoaderData();

  const [agents, setAgents] = useState([]);

  useEffect(() => {
    if (!isEmptyOrNull(agentResp.data)) {
      if (!isEmptyOrNull(agentResp.data.agents)) {
        setAgents(agentResp.data.agents);
      }
    }
  }, []);

  return (
    <React.Fragment>
      <AllAgent agents={agents} />
    </React.Fragment>
  );
};

export default AgentsPage;
