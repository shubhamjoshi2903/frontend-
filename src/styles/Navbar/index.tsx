import styled from 'styled-components'

export const NavConatiner = styled.div`
  border-bottom: 1px solid #dfdbdb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: clamp(61px, 3.286vw, 3.486vw);
  padding: 3px 33px;
  @media (max-width: 500px) {
    padding: 6px 16px;
  }
`

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.143vw;

  @media (max-width: 400px) {
    svg {
      width: 100px;
      height: 50px;
    }
  }

  .css-17ffvgn-MuiTypography-root {
    padding: 9px 15px;
  }

  .css-zddlty-MuiButtonBase-root-MuiButton-root {
    color: #000;
    padding: 0px;
    background-color: #fff;
    min-width: 0px;
  }
  .css-9tj150-MuiButton-endIcon > *:nth-of-type(1) {
    font-size: 30px;
  }

  .css-17ffvgn-MuiTypography-root {
    padding-bottom: 2px;
  }
`
export const ImageWrapper = styled.div`
  cursor: pointer;

  @media (max-width: 500px) {
    .MuiButton-root {
      width: 100%;
      max-width: 10px;
      svg {
        width: 100px;
        height: 41px;
      }
    }
  }
`

export const LogoutWrapper = styled.div`
  cursor: pointer;

  @media (max-width: 500px) {
    svg {
      width: 50px;
      height: 41px;
    }
  }
`
export const PopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 13px;
`

export const SwitchWrapper = styled.div`
  padding-left: 30px;
  background-color: aliceblue;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const PopoverContainer = styled.div``
export const LogoImage = styled.img`
  width: 60px;
`

export const Heading = styled.span`
  font-size: 30px;
  font-weight: 700;
`
export const LogoWrapper = styled.div``
export const PersonImage = styled.img`
  width: 50px;
`
