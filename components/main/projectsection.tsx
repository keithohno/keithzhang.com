import styled from "@emotion/styled";

const ProjectSection: React.FC = () => {
  return (
    <Main id="projectsection">
      <p>Here are a few things I'm proud of:</p>
      <p>
        <strong>
          <Link href="https://github.com/masonmafanclub">Rift</Link>
        </strong>{" "}
        -- scalabale and collaborative text editor. Allows multiple users to
        concurrently edit any number of text documents. Built to scale (tested
        up to 300 RPS). Technologies used:{" "}
        <strong>Express, ShareDB, ElasticSearch, Ansible</strong>
      </p>
      <p>
        <strong>
          <Link href="https://github.com/zomp416">Zomp</Link>
        </strong>{" "}
        -- fully featured community and creator platform for comics. Includes
        CRUD functionality, extensive editing features, and community
        interactions. Technologies used:{" "}
        <strong>Express, Next/React, Typescript, MongoDB</strong>
      </p>
      <p>
        <strong>
          <Link href="https://github.com/keithohno/whatsfordinner">
            WhatsforDinner
          </Link>
        </strong>{" "}
        -- simple, searchable recipe catalog. Populated using a web scraper.
        Technologies used: <strong>Flask, Vue, MongoDB</strong>
      </p>
    </Main>
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

const Link = styled.a`
  color: #c0cfff;
`;

export default ProjectSection;
