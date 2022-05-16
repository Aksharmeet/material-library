// import ing packages
import styledComponents from "styled-components" 

// importing icons
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
// using styled as variable for styled components
let styled = styledComponents;

function DashboardNav() {
  return (
    <Navigations>
      
        {/* Pofile details */}
       
        <p className="dashboard">Dashboard</p>
        <StepWrapper>
        <HeaderWrapper className = 'profile'>
            <div className="display__flex">
            <AccountCircleOutlinedIcon/>
            <h4>Profile details</h4>
            </div>
            <ExpandLessOutlinedIcon/>
        </HeaderWrapper>
        <Contents>
            <Loader>
                <div></div>
            </Loader>
            <ul>
                <div className="done">
                <li>KYC Details</li>
                <CheckCircleOutlineOutlinedIcon/>
                </div>
                <div className="done">
                <li>Contact</li>
                <CheckCircleOutlineOutlinedIcon/>
                </div>
                <li className="branch">Branch Details</li>
                <li>Locations Served</li>
                <li>Categories</li>
                <li>Bank Details</li>
                <li>Distribution Network</li>
            </ul>
        </Contents>
        </StepWrapper>
       
        {/* Content */}
        <StepWrapper>
        <HeaderWrapper>
            <div className="display__flex">
            <LayersOutlinedIcon/>
            <h4>Content</h4>
            </div>
            <ExpandMoreOutlinedIcon/>
        </HeaderWrapper>
        </StepWrapper>
       
        {/* Orders */}
        <StepWrapper>
        <HeaderWrapper>
            <div className="display__flex">
            <InboxOutlinedIcon/>
            <h4>Orders</h4>
            </div>
            <ExpandMoreOutlinedIcon/>
        </HeaderWrapper>
        </StepWrapper>
       
          {/* Report */}
          <StepWrapper>
          <HeaderWrapper>
            <div className="display__flex">
            <AssessmentOutlinedIcon/>
            <h4>Report</h4>
            </div>
            <ExpandMoreOutlinedIcon/>
        </HeaderWrapper>
        </StepWrapper>
       
       
 </Navigations>
  )
}

const Navigations = styled.div`
    .dashboard{
        font-weight:400;
        color:rgb(170,170,170)
    }
    h4{
        font-size:18px;
        font-weight:200;
        margin-left:10px;
    }
    padding:20px 20px;
    padding-left:5em;
    background-color:rgb(250,250,250);
    width:25%;
    display:inline-block;
    height:100vh;
`

const StepWrapper = styled.div`
    margin:10px 0 30px 0;
    // temp className changes would use state in real app.
    .profile{
       color:rgb(250,98,40);
    }
`

const HeaderWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:10px;
    .display__flex{
        display:flex;
        align-items:center;
    }
    svg{
        width:30px;
    }
    

`
const Contents = styled.div`
    margin-left:35px;
    li{
        list-style:none;
        margin-top:20px;
        font-size:14px;
        color:rgb(100,100,100);
        font-weight:200;
    }
    // temp className changes would use state in real app.
    .branch{
       color:rgb(250,98,40);
       font-weight:400;
    }
    .done{
        display:flex;
        justify-content:space-between;
        align-items:center;
        svg{
            color:rgb(41,173,149);
            margin-top:20px;
        }
    }
`
const Loader= styled.div`
    width:100%;
    background-color:rgb(240,240,240);
    height:12px;
    div{
        width:35%;
        height:14px;
        background-color:rgb(100,100,100);
    }

`

export default DashboardNav