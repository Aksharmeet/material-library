import styledComponents from 'styled-components'
import { useState } from 'react';

import { ExpandMore } from '@mui/icons-material';
import { Download } from '@mui/icons-material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const styled = styledComponents;

function BranchDetails() {
    const [branches, setBranches] = useState(false);
    const [single, setSingle] = useState(true);
  return (
    <Main>
       <form>
        <Section>
            <div>
            <h5>
                Branch Details
            </h5>
            <p>Please input requested details below. Click submit once are done</p>
            </div>
            <input type='submit'value="SUBMIT"></input>
        </Section>
        <Options branches={branches} single={single}>
            <ExpandingWrapper branches={branches}>

            <Div className='mutiSelect multiSelectActive innerWrap' onClick={() => setBranches((prev) => !prev)} branches={branches}>
                <div>
                    <h4>
                        How Many Branches?
                    </h4>
                    <p>Download our CSV file and input all your branch details in just minutes</p>
                    <span/>
                </div>
                <ExpandMore />
            </Div>
            {branches ? <MultiSelect>
                    <div className="downloadCsv">
                        <div className="DownloadIconNdHeading">
                        <Download/>
                        <p>DOWNLOAD CSV FORMAT</p>
                        </div>
                        <button>How Does It Work?</button>
                    </div>
                    <div className="uploadCsvHeading">
                        <h5>Upload CSV here</h5>
                        <p>Only CSV format is allowed</p>
                    </div>
                    <div className='uploadCsvBox'>
                        <CloudUploadIcon/>
                        <p>Drop File or <span>Chose File</span></p>
                    </div>
                    <div className='uploadCsvButton'>
                    <label htmlFor="files">UPLOAD FILE</label>
                    <input type='file' accept='.csv' id='files'></input>
                    </div> 
                </MultiSelect>
                : 
                ''
            }
           </ExpandingWrapper>
        
            <div className="orContainer"><span className="dottedLines"/> or <span className="dottedLines"/></div>

            <ExpandingWrapper single={single}>
            <Div className='singleSelect singleSelectActive innerWrap' onClick={() => setSingle((prev) => !prev)} single={single}>
                    <div>
                        <h4>
                            One At A Time
                        </h4>
                        <p>Have only one or few branches, use this option</p>
                        <span/>
                    </div>
                    <ExpandMore className="expand"/>
            </Div>

            { single ? 
                <SingleSelect>
                    <label htmlFor="name">Branch Contact Person Name&#42;</label>
                    <div className='display'>
                        <input id="name" type="text" placeholder="First Name"></input>
                        <input id="name" type="text" placeholder="Last Name"></input>
                    </div>
                    <div className='display'>
                        <div className="emailDiv">
                            <label htmlFor="email">Email Id&#42;</label>
                            <input type="email" id="email" placeholder="fullname@gmail.com"></input>
                        </div>
                        <div className="space"></div>
                        <div className="numberDiv">
                            <label htmlFor="number">Contact Number&#42;</label>
                            <input type="tel" id="number" placeholder="9999 99999"></input>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="address">Branch Address&#42;</label>
                        <input type="text" id="address" placeholder="#Flat No, Block, Street, Area"></input>
                        <div className='selectInputs'>
                            <select>
                                <option value='country'>Country</option>
                            </select>

                            <select>
                                <option value='haryana' >Haryana</option>
                            </select>

                            <select>
                                <option value='gurugram'>Gurugram</option>
                            </select>

                            <select >
                                <option value='123456'>123456</option>
                            </select>
                        </div>
                    </div>
                    
                    
                </SingleSelect> 
            :
            ''
            }
            </ExpandingWrapper>
        </Options>
        </form>
    </Main>
  )
}
const Main = styled.main`
    background-color:rgb(250,250,250);
    height:fit-content;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width:70vw;
    position:relative;
    left:4vh;
    top: 4vh;
    border-radius:5px;
    
`
const Section = styled.section`
        padding:30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid #ddd;

        h5{
            font-size: 18px;
            font-weight:400;
            margin-bottom:10px;
        }
        p{
            font-weight:200;
        }
        input{
            background-color:rgb(250,250,250);
            padding:10px 25px;
            font-weight:400;
            font-size:14px;
            color:rgb(250,98,40);
            border: 2px solid rgb(250,98,40);
            border-radius:3px;
        }
        .innerWrap{
            padding: 15px;
            
        }
   

`
const Options = styled.section`

    .orContainer{
        display:flex;
        justify-content:space-between;
        align-items:center;
       

        .dottedLines{
            background-image: linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%);
            background-position: bottom;
            background-size: 10px 1px;
            background-repeat: repeat-10px;
            height:1px;
            width:48%;
        }
    }
    
    
`
const ExpandingWrapper = styled.div`
   
    margin:20px 30px;
    border-left: 1px solid #000;
    border-right:1px solid #000;
    border-bottom: 1px solid #000;
    border-radius:10px;

    .multiSelectActive{
        border-bottom:${props => props.branches ? '1px solid #000' : 'none'} ;
        border-radius:${props => props.branches ? '10px 10px 0 0' : '10px'};

        background-color: ${props => props.branches ? 'rgb(243,243,243)' : 'rgb(250,250,250)'};
        
        span{
            border-bottom:${props  => props.branches? '1px solid #000' : 'none'};
        }
        svg{
            transform:${props  => props.branches? 'rotateX(180deg)' : 'none'};
        }
    }

    .singleSelectActive{
        border-bottom:${props => props.single ? '1px solid #000' : 'none'} ;
        border-radius:${props => props.single ? '10px 10px 0 0' : '10px'};

        background-color: ${props => props.single ? 'rgb(243,243,243)' : 'rgb(250,250,250)'};
        
        span{
            border-bottom:${props  => props.single? '1px solid #000' : 'none'};
        }
        svg{
            transform:${props  => props.single? 'rotateX(180deg)' : 'none'};
        }
    }
  
`
const Div = styled.div`
    cursor:pointer;
    border-top: 1px solid #000;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px 25px;


    h4{
        font-weight:400;
        margin-bottom:15px;
    }
    p{
        font-weight:200;
        font-size:14px;
    }

`
const MultiSelect = styled.div`
    padding:15px 25px;
        .downloadCsv{
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:20px;

            .DownloadIconNdHeading{
                display:flex;
                align-items:center;
                gap:10px;
                color:rgb(250,98,40);
            }

        }
        button{
            background:rgb(250,250,250);
            padding:10px 20px;
            font-weight:600;
            border:2px solid #000;
            border-radius:5px;
        }
   

   .uploadCsvHeading{
    h5{
        font-size:16px;
        font-weight:400;
    }
    p{
        margin-top:10px;
        font-weight:200;
        font-size:14px;
    }
   }


   .uploadCsvBox{
       display:flex;
       flex-direction:column;
       align-items:center;
       justify-content:center;

       padding:40px;
       background-color:rgb(255,246,242);

       svg{
           color:rgb(250,98,40,.5);
       }
       margin:10px auto 20px auto;
       background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='dimgray' stroke-width='4' stroke-dasharray='2%2c 10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
   }


   .uploadCsvButton{
    cursor:pointer;
    background:rgb(250,98,40);
    color:rgb(250,250,250);


    label{
        font-size: 14px;
        cursor:pointer;
    }

    padding: 10px 20px;
    width: fit-content;
    margin-bottom: 10px;
    input{
        display:none;
       }
        

   
`
const SingleSelect = styled.div`
    padding:15px 25px;
    label{
        display:block;
        font-weight: 200;
        margin:5px auto;
    }
    input, select{
        margin-bottom:15px;
        font-size:14px;
        padding:12px;
        border-radius: 5px;
        border: 1px solid grey;
    }

    .display{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom: 10px;
    }
    #name{
        width:48.5%;
    }
    .emailDiv, .numberDiv{
        width:50%;
    }
    #email, #number{
        width:100%
    }
    .space{
        width:3%;
    }


    #address{
        width:100%;
    }
    select{
        width:24%;
    }
    .selectInputs{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

   
    
    

`
export default BranchDetails