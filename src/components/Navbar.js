// importing packages
import styledComponents  from "styled-components"
import { Link , BrowserRouter as Router} from "react-router-dom"

// importing icons from material ui
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



// giving styled properties of styled components
let styled = styledComponents;

function Navbar() {
  return (
    
    <Router>
        <Wrapper>
            <MatLibLogo>
            <Link to='#'><img src={require('../materiallibrarylogo.png')}></img></Link>
            </MatLibLogo>
            <NavNdIcons>
            <Navigation>
              
                    <Link to='#'><li>Home</li></Link>
                    <Link to='#'><li>Jobs</li></Link>
                    <Link to='#'><li>Portfolio</li></Link>
                    <Link to='#'><li>Blogs</li></Link>
                    <Link to='#' className="expandIcon"><li>Utility Tools</li>
                    <ExpandMoreIcon/></Link>
            </Navigation>
            <Icons>
                    <CircleBg className="iconBg">
                        <ChatBubbleOutlineOutlinedIcon/>
                    </CircleBg>

                    <CircleBg className="iconBg">
                        <NotificationsOutlinedIcon
                        />
                    </CircleBg>

                    <CurveBg className="iconBg">
                       
                        <PersonOutlineOutlinedIcon/>
                        <ExpandMoreIcon className="negativMargin"/>
                      
                    </CurveBg>

                    <CurveBg className="iconBg">
                        <ShoppingCartOutlinedIcon/>
                        <span>21</span>
                    </CurveBg>
            </Icons>
            </NavNdIcons>
        </Wrapper>
    </Router>
   

  )
}
const Wrapper = styled.div`
    padding:20px 80px;  
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    a{
        text-decoration:none; 
    }
   
    
    background-color:rgb(250,250,250);
    
`
const MatLibLogo = styled.div`
    img{
        
        width: 120px;
    }
`
const NavNdIcons = styled.div`
    display:flex;
    align-items:center;
    `
const Navigation = styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;

   li{
       margin:0 10px;
       list-style:none;
       font-size:16px;
       color:rgb(100,100,100);
   }
   li:hover{
    color:rgb(250,98,40)
    }
   .expandIcon{
    display:flex;
    align-items:center;
    svg{
        margin-left:-10px;
        width:20px;
    }
   }
   
`


const Icons = styled.div`
  
    display:flex;
    width:240px;
    justify-content:space-between;
    align-items:center;
    margin-left:30px;
    .iconBg{
        background-color:rgb(245,245,245);
        display:flex;
    }
    
`

const CircleBg = styled.div`
svg{
    margin:0 auto;
    align-self:center;
    width:20px;
}
    height:40px;
    width:40px;
    border-radius:25px;
   
  
`
const CurveBg = styled.div`
    height:40px;
    width:70px;
    border-radius:25px;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    svg{
        align-self:center;
        width:25px;
    }
    .negativMargin{
        margin-left:-5px;
    }
    
   
`
export default Navbar