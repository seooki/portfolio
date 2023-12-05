import "../styles/components/AboutMe.scss";

export const AboutMe = () => {
  return (
    <>
      <div>
        <p className="about--ex">
          자신의 생각을 코드로 표현할 수 있다는 부분에서 매력을 느껴 개발자에
          대한 꿈이 생겼고 애니메이션이 화려한 페이지를 만들 수 있는 개발자가
          되고 싶다는 생각에 프론트엔드 개발자가 되고 싶었습니다.
          <br />
          개인 프로젝트를 통해서 다양한 기술들을 접해보려고 노력중
          <br />
          이고 다양한 시행착오를 통해 발전하는 프론트엔드 개발자가 되고
          싶습니다.
        </p>
      </div>
      <div>
        <h1 className="about--header">About Me</h1>
        <ul className="about--noti">
          <li>유희석</li>
          <li>1996.02.28</li>
          <li>인천광역시 부평구</li>
          <li>navproyuhs@naver.com</li>
          <li>인하대학교 (소프트웨어융합공학과)</li>
        </ul>
      </div>
    </>
  );
};
