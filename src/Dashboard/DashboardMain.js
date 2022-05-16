// import ing packages
import styledComponents from "styled-components" 


import DashboardNav from './DashboardNav';
import BranchDetails from './BranchDetails';


// using styled as variable for styled components
let styled = styledComponents;
function DashboardMain() {
  return (
      <Wrapper>
    <DashboardNav/>
    <BranchDetails/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display:flex;
`
export default DashboardMain