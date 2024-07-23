import React,{useState} from 'react';
import styled from 'styled-components';

const Results=styled(Link)`
   background-color:${({theme})=>theme.bgLight};
   display:flex;
   align-items:center;
   padding:8px;
   border-radius:6px;
   gap:20px;
   &:hover{
    cursor:pointer;
    transform:translateY(-8px);
    transition:all 0.4s ease-in-out;
    box-shadow:0 0 18px 0 rgba(0,0,0,0.3);
    filter:brightness(1.3);
   }
`;
const PodcastImage=styled.div`
   height:80px;
   border-radius:8px;
   width:150px;
   object-fit:cover;
   @media (max-width:760px){
      height:60px;
      width:100px;
    }
`;

const PodcastInfo=styled.div`
    display:flex;
    flex-direction:column;
    gap:8px;
`;

const PodcastName=styled.div`
   display:flex;
   flex-direction:column;
   color:${({theme})=>theme.text_primary};
`;
const Creator=styled.div`
    color:${({theme})=>theme.text_secondary};
    font-size:12px;
    @media(max-width:768px){
     font-size:10px;
    }
`;
const Time=styled.div`
    color:${({theme})=>theme.text_secondary};
    font-size:12px;
    @media(max-width:768px){
        font-size:10px;
        }
`;

const Desciption=styled.div`
     display:flex;
     gap:8px;
`;


const TopResult = ({podcast}) => {
  return (
    <Results to={`/podcast/jhgjfhgdsf`} style={{textDecoration:"none"}}>
       <PodcastImage src="https://media.istockphoto.com/id/1"></PodcastImage>
       <PodcastInfo>
        <PodcastName>The Tim Ferris Show</PodcastName>
        <Desciption>
            <Creator style={{marginRight:"12px"}}>Rishav</Creator>
            <Time>. 12 Views</Time>
            <Time>. 12 days ago</Time>
        </Desciption>
       </PodcastInfo>
    </Results>
  )
}
export default TopResult