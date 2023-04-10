import Navbar from 'components/Navbar'
import { MainContainer, TextInput, Container, Heading, SubContainer } from 'styles/signIn-page'

const SignIn = () => {
  return (
    <MainContainer>
      <Navbar />
      <Container>
        <SubContainer>
          <Heading>Sign-In</Heading>
          <TextInput placeholder="Name" />
          <TextInput placeholder="Name" />
          <TextInput placeholder="Name" />
          <TextInput placeholder="Name" />
          <TextInput placeholder="Name" />
        </SubContainer>
      </Container>
    </MainContainer>
  )
}

export default SignIn
