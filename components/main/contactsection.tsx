import styled from "@emotion/styled";

const ContactSection: React.FC = () => {
  return (
    <Main id="contactsection">Contact me at keith.zhang.cd[at]gmail.com!</Main>
  );
};

const Main = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #cacac9;
  font-size: calc(16px + 0.2vw);
`;

export default ContactSection;
