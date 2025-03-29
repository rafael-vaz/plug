interface IHeadProps {
  pageTitle: string;
}

const Head = ({ pageTitle = "" }: IHeadProps) => {
  document.title = `Plug | ${pageTitle}`;
  return <></>;
};

export default Head;
