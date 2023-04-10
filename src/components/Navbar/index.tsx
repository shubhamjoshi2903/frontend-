import { NavConatiner, DataWrapper, LogoImage, Heading, LogoWrapper, PersonImage } from 'styles/Navbar'
import Logo from 'assets/images/logo.png'
import Person from 'assets/images/person.png'

const Navbar = () => {
  return (
    <NavConatiner>
      <LogoWrapper>
        <PersonImage src={Person} />
        <LogoImage src={Logo} />
      </LogoWrapper>

      <DataWrapper>
        <Heading>{`Let's Connect`}</Heading>
      </DataWrapper>
    </NavConatiner>
  )
}

export default Navbar
