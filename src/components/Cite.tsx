type CiteProps = {
  children: any;
  url: string;
};

function Cite({ children, url }: CiteProps) {
  return (
    <>
      <sub>
        <a href={url}>{children}</a>
      </sub>
    </>
  );
}

export default Cite;
