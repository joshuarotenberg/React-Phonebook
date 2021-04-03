  import styled from 'styled-components';

  const Card = styled.div`
    padding:20px;
    border-radius:10px;
    display: flex;
    flex-direction: row;
    justify-content: start; 
    margin-right:10px;
    margin-bottom:30px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
`

const Avatar = styled.img`
  clip-path: circle(30px at center);
  width: 60px;
  margin-right:20px;
  
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
`

const NameText = styled.span`
    font-size: 1.2rem;
    font-weight:bold;
`

const PhoneText = styled.span`
    position: relative;
    top:-5px;
    color:gray;
`

 const Person = ({person}) => {



    const imgSrc = `https://ui-avatars.com/api/?name=${person.name}&background=random`;   

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <Card>
                <Avatar src={imgSrc} alt={person.name} ></Avatar>
                <TextContainer>
                    <NameText>{person.name}</NameText>
                    <PhoneText>{person.phone}</PhoneText>
                </TextContainer> 
            </Card>
        </div>
    )
  }

  export default Person;